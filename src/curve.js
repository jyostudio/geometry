import overload from "@jyostudio/overload";
import CurveKeyCollection from "./curveKeyCollection.js";
import CurveLoopType from "./curveLoopType.js";
import CurveTangent from "./curveTangent.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class Curve {
    #postLoop = null;

    #preLoop = null;

    #keys = null;

    get isConstant() {
        return this.#keys.length <= 1;
    }

    get keys() {
        return this.#keys;
    }

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        Curve[CONSTURCTOR_SYMBOL] = overload([], function () {
            this.#postLoop = CurveLoopType.constant;
            this.#preLoop = CurveLoopType.constant;
            this.#keys = new CurveKeyCollection();
        });

        return Curve[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        Object.defineProperties(this, {
            postLoop: {
                get: () => this.#postLoop,
                set: overload([CurveLoopType], value => this.#postLoop = value)
            },
            preLoop: {
                get: () => this.#preLoop,
                set: overload([CurveLoopType], value => this.#preLoop = value)
            }
        });

        return Curve[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        yield this.postLoop;
        yield this.preLoop;
    }

    #getNumberOfCycle(position) {
        let cycle = (position - this.keys[0].position) / (this.keys[this.keys.length - 1].position - this.keys[0].position);
        if (cycle < 0) cycle--;
        return parseInt(cycle);
    }

    #getCurvePosition(position) {
        let prev = this.keys[0];
        let next;
        for (let i = 1; i < this.keys.length; ++i) {
            next = this.keys[i];
            if (next.position >= position) {
                if (prev.continuity == CurveContinuity.step) {
                    if (position >= 1) return next.value;
                    return prev.value;
                }
                let t = (position - prev.position) / (next.position - prev.position);
                let ts = t * t;
                let tss = ts * t;
                return (2 * tss - 3 * ts + 1) * prev.value + (tss - 2 * ts + t) * prev.tangentOut + (3 * ts - 2 * tss) * next.value + (tss - ts) * next.tangentIn;
            }
            prev = next;
        }
        return 0;
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    clone(...params) {
        Curve.prototype.clone = overload([], function () {
            const curve = new Curve();
            curve.#keys = this.#keys.clone();
            curve.#preLoop = this.#preLoop;
            curve.#postLoop = this.#postLoop;
            return curve;
        });

        return Curve.prototype.clone.apply(this, params);
    }

    computeTangent(...params) {
        Curve.prototype.computeTangent = overload()
            .add([Number, CurveLoopType], function (keyIndex, tangentType) {
                this.computeTangent(keyIndex, tangentType, tangentType);
            })
            .add([Number, CurveLoopType, CurveLoopType], function (keyIndex, tangentInType, tangentOutType) {
                const key = this.#keys[keyIndex];

                let p0, p, p1;
                p0 = p = p1 = key.position;

                let v0, v, v1;
                v0 = v = v1 = key.value;

                if (keyIndex > 0) {
                    p0 = this.#keys[keyIndex - 1].position;
                    v0 = this.#keys[keyIndex - 1].value;
                }

                const keyLength = this.#keys.length;
                if (keyIndex < keyLength - 1) {
                    p1 = this.#keys[keyIndex + 1].position;
                    v1 = this.#keys[keyIndex + 1].value;
                }

                switch (tangentInType) {
                    case CurveTangent.flat:
                        key.tangentIn = 0;
                        break;
                    case CurveTangent.linear:
                        key.tangentIn = v - v0;
                        break;
                    case CurveTangent.smooth:
                        const pn = p1 - p0;
                        if (Math.abs(pn) < Number.EPSILON) {
                            key.tangentIn = 0;
                        } else {
                            key.tangentIn = (v1 - v0) * ((p - p0) / pn);
                        }
                        break;
                }

                switch (tangentOutType) {
                    case CurveTangent.flat:
                        key.tangentOut = 0;
                        break;
                    case CurveTangent.linear:
                        key.tangentOut = v1 - v;
                        break;
                    case CurveTangent.smooth:
                        const pn = p1 - p0;
                        if (Math.abs(pn) < Number.EPSILON) {
                            key.tangentOut = 0;
                        } else {
                            key.tangentOut = (v1 - v0) * ((p1 - p) / pn);
                        }
                        break;
                }
            });

        return Curve.prototype.computeTangent.apply(this, params);
    }

    computeTangents(...params) {
        Curve.prototype.computeTangents = overload()
            .add([CurveLoopType], function (tangentType) {
                this.computeTangents(tangentType, tangentType);
            })
            .add([CurveLoopType, CurveLoopType], function (tangentInType, tangentOutType) {
                for (let i = 0; i < this.keys.length; ++i) {
                    this.computeTangent(i, tangentInType, tangentOutType);
                }
            });

        return Curve.prototype.computeTangents.apply(this, params);
    }

    evaluate(...params) {
        Curve.prototype.evaluate = overload([Number], function (position) {
            if (this.keys.length === 0) return 0;

            if (this.keys.length === 1) return this.keys[0].value;

            const first = this.keys[0];
            const last = this.keys[this.keys.length - 1];
            let cycle, virtualPos;

            if (position < first.position) {
                switch (this.preLoop) {
                    case CurveLoopType.constant:
                        return first.value;

                    case CurveLoopType.linear:
                        return first.value - first.tangentIn * (first.position - position);

                    case CurveLoopType.cycle:
                        cycle = this.#getNumberOfCycle(position);
                        virtualPos = position - (cycle * (last.position - first.position));
                        return this.#getCurvePosition(virtualPos);

                    case CurveLoopType.cycleOffset:
                        cycle = this.#getNumberOfCycle(position);
                        virtualPos = position - (cycle * (last.position - first.position));
                        return (this.#getCurvePosition(virtualPos) + cycle * (last.value - first.value));

                    case CurveLoopType.oscillate:
                        cycle = this.#getNumberOfCycle(position);
                        if (0 == cycle % 2) {
                            virtualPos = position - (cycle * (last.position - first.position));
                        } else {
                            virtualPos = last.position - position + first.position + (cycle * (last.position - first.position));
                        }
                        return this.#getCurvePosition(virtualPos);
                }
            } else if (position > last.position) {
                switch (this.postLoop) {
                    case CurveLoopType.constant:
                        return last.value;

                    case CurveLoopType.linear:
                        return last.value + first.tangentOut * (position - last.position);

                    case CurveLoopType.cycle:
                        cycle = this.#getNumberOfCycle(position);
                        virtualPos = position - (cycle * (last.position - first.position));
                        return this.#getCurvePosition(virtualPos);

                    case CurveLoopType.cycleOffset:
                        cycle = this.#getNumberOfCycle(position);
                        virtualPos = position - (cycle * (last.position - first.position));
                        return (this.#getCurvePosition(virtualPos) + cycle * (last.value - first.value));

                    case CurveLoopType.oscillate:
                        cycle = this.#getNumberOfCycle(position);
                        virtualPos = position - (cycle * (last.position - first.position));
                        if (0 == cycle % 2) {
                            virtualPos = position - (cycle * (last.position - first.position));
                        } else {
                            virtualPos = last.position - position + first.position + (cycle * (last.position - first.position));
                        }
                        return this.#getCurvePosition(virtualPos);
                }
            }

            return this.#getCurvePosition(position);
        });

        return Curve.prototype.evaluate.apply(this, params);
    }

    equals(...params) {
        Curve.prototype.equals = overload([Curve], function (other) {
            return this.postLoop === other.postLoop && this.preLoop === other.preLoop && this.keys.equals(other.keys);
        }).any(() => false);

        return Curve.prototype.equals.apply(this, params);
    }

    toString(...params) {
        Curve.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return Curve.prototype.toString.apply(this, params);
    }

    toJSON() {
        return {
            postLoop: this.postLoop,
            preLoop: this.preLoop,
            keys: this.keys
        };
    }
}
