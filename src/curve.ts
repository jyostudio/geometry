import overload from "@jyostudio/overload";
import { lazyCheckSetterType } from "@jyostudio/overload/dist/decorator";
import CurveContinuity from "./curve-continuity";
import CurveKeyCollection from "./curve-key-collection";
import CurveLoopType from "./curve-loop-type";
import CurveTangent from "./curve-tangent";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 存储任意 2D CurveKey 点集，并提供相应的方法对其定义的曲线进行功能评估。
 * @class
 */
export default class Curve {
    /**
     * 指定如何处理大于曲线中最后一个控制点的权重值。
     */
    #postLoop: CurveLoopType = null!;

    /**
     * 获取指定如何处理大于曲线中最后一个控制点的权重值。
     */
    public get postLoop(): CurveLoopType {
        return this.#postLoop;
    }

    /**
     * 设置指定如何处理大于曲线中最后一个控制点的权重值。
     */
    @lazyCheckSetterType(() => CurveLoopType)
    public set postLoop(value: CurveLoopType) {
        this.#postLoop = value;
    }

    /**
     * 指定如何处理小于曲线中第一个控制点的权重值。
     */
    #preLoop: CurveLoopType = null!;

    /**
     * 获取指定如何处理小于曲线中第一个控制点的权重值。
     */
    public get preLoop(): CurveLoopType {
        return this.#preLoop;
    }

    /**
     * 设置指定如何处理小于曲线中第一个控制点的权重值。
     */
    @lazyCheckSetterType(() => CurveLoopType)
    public set preLoop(value: CurveLoopType) {
        this.#preLoop = value;
    }

    /**
     * 构成曲线的点。
     */
    #keys: CurveKeyCollection = null!;

    /**
     * 获取构成曲线的点。
     */
    public get keys(): CurveKeyCollection {
        return this.#keys;
    }

    /**
     * 获取一个指示曲线是否为常量的值。
     */
    public get isConstant(): boolean {
        return this.#keys.length <= 1;
    }

    /**
     * 初始化新的 Curve 实例。
     */
    constructor();
    constructor(...params: any) {
        Curve[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        Curve[CONSTRUCTOR_SYMBOL] = overload([], function (this: Curve) {
            this.#postLoop = CurveLoopType.constant;
            this.#preLoop = CurveLoopType.constant;
            this.#keys = new CurveKeyCollection();
        });

        return Curve[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    public *[Symbol.iterator](): IterableIterator<CurveLoopType | CurveKeyCollection> {
        yield this.#postLoop;
        yield this.#preLoop;
    }

    /**
     * 计算给定位置所属的循环次数。
     * @param position 要计算的曲线位置。
     * @returns 循环次数。
     */
    #getNumberOfCycle(position: number): number {
        const keys = this.#keys.toArray();
        let cycle = (position - keys[0].position) / (keys[keys.length - 1].position - keys[0].position);
        if (cycle < 0) cycle--;
        return cycle | 0;
    }

    /**
     * 计算曲线在给定位置的值。
     * @param position 要计算的曲线位置。
     * @returns 曲线在给定位置的值。
     */
    #getCurvePosition(position: number): number {
        const keys = this.#keys.toArray();
        let prev = keys[0];
        let next;
        for (let i = 1; i < keys.length; ++i) {
            next = keys[i];
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

    /**
     * 确定指定的 Curve 是否等于当前 Curve。
     * @param other 用于与当前 Curve 比较的 Curve。
     * @returns 是否相等。
     */
    public ["=="](other: Curve): boolean;
    public ["=="](...params: any): any {
        return this.equals.apply(this, params);
    }

    /**
     * 确定指定的 Curve 是否不等于当前 Curve。
     * @param other 用于与当前 Curve 比较的 Curve。
     * @returns 是否不相等。
     */
    public ["!="](other: Curve): boolean;
    public ["!="](...params: any): any {
        return !this.equals.apply(this, params);
    }

    /**
     * 创建 Curve 的副本。
     * @returns Curve 的副本。
     */
    public clone(): Curve;
    public clone(...params: any): any {
        Curve.prototype.clone = overload([], function (this: Curve) {
            const curve = new Curve();
            curve.#keys = this.#keys.clone();
            curve.#preLoop = this.#preLoop;
            curve.#postLoop = this.#postLoop;
            return curve;
        });

        return Curve.prototype.clone.apply(this, params);
    }

    /**
     * 为通过索引指定的 CurveKey 计算 tangentIn 和 tangentOut。
     * @param keyIndex 要计算切线的 CurveKey 的索引（在 Curve 的 keys 集合中）。
     * @param tangentType 要计算的切线的类型（CurveTangent 枚举中指定的一个类型）。
     */
    public computeTangent(keyIndex: number, tangentType: CurveTangent): void;
    /**
     * 为给定的 CurveKey 计算指定类型的 tangentIn 和指定类型的 tangentOut。
     * @param keyIndex 要计算切线的 CurveKey 的索引（在 Curve 的 keys 集合中）。
     * @param tangentInType 要计算的 tangentIn 的类型（CurveTangent 枚举中指定的一个类型）。
     * @param tangentOutType 要计算的 tangentOut 的类型（CurveTangent 枚举中指定的一个类型）。
     */
    public computeTangent(
        keyIndex: number,
        tangentInType: CurveTangent,
        tangentOutType: CurveTangent
    ): void;
    public computeTangent(...params: any): any {
        Curve.prototype.computeTangent = overload()
            .add([Number, CurveTangent], function (this: Curve, keyIndex, tangentType) {
                this.computeTangent(keyIndex, tangentType, tangentType);
            })
            .add([Number, CurveTangent, CurveTangent], function (this: Curve, keyIndex, tangentInType, tangentOutType) {
                const keys = this.#keys.toArray();
                const key = keys[keyIndex];

                let p0, p, p1;
                p0 = p = p1 = key.position;

                let v0, v, v1;
                v0 = v = v1 = key.value;

                if (keyIndex > 0) {
                    p0 = keys[keyIndex - 1].position;
                    v0 = keys[keyIndex - 1].value;
                }

                const keyLength = keys.length;
                if (keyIndex < keyLength - 1) {
                    p1 = keys[keyIndex + 1].position;
                    v1 = keys[keyIndex + 1].value;
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

    /**
     * 为 tangentIn 和 tangentOut 使用指定的切线类型，计算该 Curve 中所有 CurveKey 的切线。
     * @param tangentType 要计算的 tangentOut 和 tangentIn 的类型（CurveTangent 枚举中指定的一个类型）。
     */
    public computeTangents(tangentType: CurveTangent): void;
    /**
     * 为 tangentOut 和 tangentIn 使用不同的切线类型，计算该 Curve 中所有 CurveKey 的切线。
     * @param tangentInType 要计算的 tangentIn 的类型（CurveTangent 枚举中指定的一个类型）。
     * @param tangentOutType 要计算的 tangentOut 的类型（CurveTangent 枚举中指定的一个类型）。
     */
    public computeTangents(
        tangentInType: CurveTangent,
        tangentOutType: CurveTangent
    ): void;
    public computeTangents(...params: any): any {
        Curve.prototype.computeTangents = overload()
            .add([CurveTangent], function (this: Curve, tangentType) {
                this.computeTangents(tangentType, tangentType);
            })
            .add([CurveTangent, CurveTangent], function (this: Curve, tangentInType, tangentOutType) {
                for (let i = 0; i < this.#keys.length; ++i) {
                    this.computeTangent(i, tangentInType, tangentOutType);
                }
            });

        return Curve.prototype.computeTangents.apply(this, params);
    }

    /**
     * 查找 Curve 上某个位置的值。
     * @param position Curve 上的位置。
     * @returns 查找到的值。
     */
    public evaluate(position: number): number;
    public evaluate(...params: any): any {
        Curve.prototype.evaluate = overload([Number], function (this: Curve, position) {
            if (this.#keys.length === 0) return 0;

            const keys = this.#keys.toArray();
            if (keys.length === 1) return keys[0].value;

            const first = keys[0];
            const last = keys[keys.length - 1];
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

    /**
     * 确定指定的 Curve 是否等于当前 Curve。
     * @param value 用于与当前 Curve 比较的 Curve。
     */
    public equals(value: Curve): boolean;
    public equals(...params: any): any {
        Curve.prototype.equals = overload([Curve], function (this: Curve, other) {
            return this.#postLoop === other.#postLoop && this.#preLoop === other.#preLoop && this.#keys.equals(other.#keys);
        }).any(() => false);

        return Curve.prototype.equals.apply(this, params);
    }

    /**
     * 检索当前对象的字符串呈现。
     * @returns 当前对象的字符串呈现。
     */
    public toString(): string;
    public toString(...params: any): any {
        Curve.prototype.toString = overload([], function (this: Curve) {
            return JSON.stringify(this);
        });

        return Curve.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 Curve 的 JSON 表示形式。
     * @returns 当前 Curve 的 JSON 表示形式。
     */
    public toJSON(): object {
        return {
            postLoop: this.#postLoop,
            preLoop: this.#preLoop,
            keys: this.#keys
        };
    }
}
