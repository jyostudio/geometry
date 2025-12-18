import overload from "@jyostudio/overload";
import { checkSetterType, lazyCheckSetterType } from "@jyostudio/overload/dist/decorator";
import CurveContinuity from "./curve-continuity";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 在多点曲线中呈现一个点。
 * @class
 */
export default class CurveKey {
    /**
     * 描述曲线上的该点和下一点之间的线段是离散还是连续。
     */
    #continuity: CurveContinuity = null!;

    /**
     * 获取描述曲线上的该点和下一点之间的线段是离散还是连续。
     */
    public get continuity(): CurveContinuity {
        return this.#continuity;
    }

    /**
     * 设置描述曲线上的该点和下一点之间的线段是离散还是连续。
     */
    @lazyCheckSetterType(() => CurveContinuity)
    public set continuity(value: CurveContinuity) {
        this.#continuity = value;
    }

    /**
     * 介绍曲线中的先前点接近该点时的切线。
     */
    #tangentIn = 0;

    /**
     * 获取介绍曲线中的先前点接近该点时的切线。
     */
    public get tangentIn(): number {
        return this.#tangentIn;
    }

    /**
     * 设置介绍曲线中的先前点接近该点时的切线。
     */
    @checkSetterType(Number)
    public set tangentIn(value: number) {
        this.#tangentIn = value;
    }

    /**
     * 介绍曲线中离开该点向下一点靠近时的切线。
     */
    #tangentOut = 0;

    /**
     * 获取介绍曲线中离开该点向下一点靠近时的切线。
     */
    public get tangentOut(): number {
        return this.#tangentOut;
    }

    /**
     * 设置介绍曲线中离开该点向下一点靠近时的切线。
     */
    @checkSetterType(Number)
    public set tangentOut(value: number) {
        this.#tangentOut = value;
    }

    /**
     * 描述该点的值。
     */
    #value = 0;

    /**
     * 获取描述该点的值。
     */
    public get value(): number {
        return this.#value;
    }

    /**
     * 设置描述该点的值。
     */
    @checkSetterType(Number)
    public set value(value: number) {
        this.#value = value;
    }

    /**
     * CurveKey 在曲线中的位置。
     */
    #position = 0;

    /**
     * 获取 CurveKey 在曲线中的位置。
     */
    public get position(): number {
        return this.#position;
    }

    /**
     * 初始化新的 CurveKey 实例。
     * @param position 曲线上的位置。
     * @param value 控制点的值。
     */
    constructor(position: number, value: number);
    /**
     * 初始化新的 CurveKey 实例。
     * @param position 曲线上的位置。
     * @param value 控制点的值。
     * @param tangentIn 从曲线的先前点起始的切线切入点。
     * @param tangentOut 指向曲线的下一个点的切线切出点。
     */
    constructor(
        position: number,
        value: number,
        tangentIn: number,
        tangentOut: number
    );
    /**
     * 初始化新的 CurveKey 实例。
     * @param position 曲线上的位置。
     * @param value 控制点的值。
     * @param tangentIn 从曲线的先前点起始的切线切入点。
     * @param tangentOut 指向曲线的下一个点的切线切出点。
     * @param {CurveContinuity} continuity 表示曲线为离散或连续曲线的枚举。
     */
    constructor(
        position: number,
        value: number,
        tangentIn: number,
        tangentOut: number,
        continuity: CurveContinuity
    );
    constructor(...params: any) {
        CurveKey[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        CurveKey[CONSTRUCTOR_SYMBOL] = overload()
            .add([Number, Number], function (this: CurveKey, position, value) {
                this.#continuity = CurveContinuity.smooth;
                this.#tangentIn = 0;
                this.#tangentOut = 0;
                this.#value = value;
                this.#position = position;
            })
            .add([Number, Number, Number, Number], function (this: CurveKey, position, value, tangentIn, tangentOut) {
                this.#continuity = CurveContinuity.smooth;
                this.#tangentIn = tangentIn;
                this.#tangentOut = tangentOut;
                this.#value = value;
                this.#position = position;
            })
            .add([Number, Number, Number, Number, CurveContinuity], function (this: CurveKey, position, value, tangentIn, tangentOut, continuity) {
                this.#continuity = continuity;
                this.#tangentIn = tangentIn;
                this.#tangentOut = tangentOut;
                this.#value = value;
                this.#position = position;
            });

        return CurveKey[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    public *[Symbol.iterator](): IterableIterator<CurveContinuity | number | null> {
        yield this.#continuity;
        yield this.#position;
        yield this.#tangentIn;
        yield this.#tangentOut;
        yield this.#value;
    }

    /**
     * 确定指定的 CurveKey 是否等于当前 CurveKey。
     * @param other 用于与当前 CurveKey 比较的 CurveKey。
     * @returns 是否相等。
     */
    public ["=="](other: CurveKey): boolean;
    public ["=="](...params: any): any {
        return this.equals.apply(this, params);
    }

    /**
     * 确定指定的 CurveKey 是否不等于当前 CurveKey。
     * @param other 用于与当前 CurveKey 比较的 CurveKey。
     * @returns 是否不相等。
     */
    public ["!="](other: CurveKey): boolean;
    public ["!="](...params: any): any {
        return !this.equals.apply(this, params);
    }

    /**
     * 创建 CurveKey 的副本。
     * @returns CurveKey 的副本。
     */
    public clone(): CurveKey;
    public clone(...params: any): any {
        CurveKey.prototype.clone = overload([], function (this: CurveKey) {
            return new CurveKey(this.#position, this.#value, this.#tangentIn, this.#tangentOut, this.#continuity);
        });

        return CurveKey.prototype.clone.apply(this, params);
    }

    /**
     * 将该实例与其他 CurveKey 比较，并返回其相对值指示。
     * @param other 要比较的 CurveKey。
     * @returns 比较结果。
     */
    public compareTo(other: CurveKey): number;
    public compareTo(...params: any): any {
        CurveKey.prototype.compareTo = overload([CurveKey], function (this: CurveKey, other) {
            if (this.#position > other.#position) return 1;
            else if (this.#position < other.#position) return -1;
            else return 0;
        });

        return CurveKey.prototype.compareTo.apply(this, params);
    }

    /**
     * 确定指定的 Object 是否等于 CurveKey。
     * @param other 用于与当前 CurveKey 比较的 Object。
     * @returns 是否相等。
     */
    public equals(other: CurveKey): boolean;
    public equals(...params: any): any {
        CurveKey.prototype.equals = overload([CurveKey], function (this: CurveKey, other) {
            return (this.#position === other.#position) &&
                (this.#value === other.#value) &&
                (this.#tangentIn === other.#tangentIn) &&
                (this.#tangentOut === other.#tangentOut) &&
                (this.#continuity === other.#continuity);
        }).any(() => false);

        return CurveKey.prototype.equals.apply(this, params);
    }

    /**
     * 检索当前对象的字符串呈现。
     * @returns 当前对象的字符串呈现。
     */
    public toString(): string;
    public toString(...params: any): any {
        CurveKey.prototype.toString = overload([], function (this: CurveKey) {
            return JSON.stringify(this);
        });

        return CurveKey.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 CurveKey 的 JSON 表示形式。
     * @returns 当前 CurveKey 的 JSON 表示形式。
     */
    public toJSON(): object {
        return {
            position: this.#position,
            value: this.#value,
            tangentIn: this.#tangentIn,
            tangentOut: this.#tangentOut,
            continuity: this.#continuity
        };
    }
}
