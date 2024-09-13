import overload from "@jyostudio/overload";
import CurveContinuity from "./curveContinuity.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class CurveKey {
    #continuity = null;

    #position = 0;

    #tangentIn = 0;

    #tangentOut = 0;

    #value = 0;

    get position() {
        return this.#position;
    }

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        CurveKey[CONSTURCTOR_SYMBOL] = overload()
            .add([Number, Number], function (position, value) {
                return CurveKey[CONSTURCTOR_SYMBOL].call(this, position, value, 0, 0, CurveContinuity.smooth);
            })
            .add([Number, Number, Number, Number], function (position, value, tangentIn, tangentOut) {
                return CurveKey[CONSTURCTOR_SYMBOL].call(this, position, value, tangentIn, tangentOut, CurveContinuity.smooth);
            })
            .add([Number, Number, Number, Number, CurveContinuity], function (position, value, tangentIn, tangentOut, continuity) {
                [this.continuity, this.tangentIn, this.tangentOut, this.value] = [continuity, tangentIn, tangentOut, value];
                this.#position = position;
            });

        return CurveKey[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        Object.defineProperties(this, {
            continuity: {
                get: () => this.#continuity,
                set: overload([CurveContinuity], value => this.#continuity = value)
            },
            tangentIn: {
                get: () => this.#tangentIn,
                set: overload([Number], value => this.#tangentIn = value)
            },
            tangentOut: {
                get: () => this.#tangentOut,
                set: overload([Number], value => this.#tangentOut = value)
            },
            value: {
                get: () => this.#value,
                set: overload([Number], value => this.#value = value)
            }
        });

        return CurveKey[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        yield this.continuity;
        yield this.position;
        yield this.tangentIn;
        yield this.tangentOut;
        yield this.value;
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    clone(...params) {
        CurveKey.prototype.clone = overload([], function () {
            return new CurveKey(this.position, this.value, this.tangentIn, this.tangentOut, this.continuity);
        });

        return CurveKey.prototype.clone.apply(this, params);
    }

    compareTo(...params) {
        CurveKey.prototype.compareTo = overload([CurveKey], function (other) {
            if (this.position > other.position) return 1;
            else if (this.position < other.position) return -1;
            else return 0;
        });

        return CurveKey.prototype.compareTo.apply(this, params);
    }

    equals(...params) {
        CurveKey.prototype.equals = overload([CurveKey], function (other) {
            return (this.position === other.position) &&
                (this.value === other.value) &&
                (this.tangentIn === other.tangentIn) &&
                (this.tangentOut === other.tangentOut) &&
                (this.continuity === other.continuity);
        }).any(() => false);

        return CurveKey.prototype.equals.apply(this, params);
    }

    toString(...params) {
        CurveKey.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return CurveKey.prototype.toString.apply(this, params);
    }

    toJSON() {
        return {
            position: this.position,
            value: this.value,
            tangentIn: this.tangentIn,
            tangentOut: this.tangentOut,
            continuity: this.continuity
        };
    }
}
