import CurveContinuity from "./curve-continuity";
declare const CONSTRUCTOR_SYMBOL: unique symbol;
/**
 * 在多点曲线中呈现一个点。
 * @class
 */
export default class CurveKey {
    #private;
    /**
     * 获取描述曲线上的该点和下一点之间的线段是离散还是连续。
     */
    get continuity(): CurveContinuity;
    /**
     * 设置描述曲线上的该点和下一点之间的线段是离散还是连续。
     */
    set continuity(value: CurveContinuity);
    /**
     * 获取介绍曲线中的先前点接近该点时的切线。
     */
    get tangentIn(): number;
    /**
     * 设置介绍曲线中的先前点接近该点时的切线。
     */
    set tangentIn(value: number);
    /**
     * 获取介绍曲线中离开该点向下一点靠近时的切线。
     */
    get tangentOut(): number;
    /**
     * 设置介绍曲线中离开该点向下一点靠近时的切线。
     */
    set tangentOut(value: number);
    /**
     * 获取描述该点的值。
     */
    get value(): number;
    /**
     * 设置描述该点的值。
     */
    set value(value: number);
    /**
     * 获取 CurveKey 在曲线中的位置。
     */
    get position(): number;
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
    constructor(position: number, value: number, tangentIn: number, tangentOut: number);
    /**
     * 初始化新的 CurveKey 实例。
     * @param position 曲线上的位置。
     * @param value 控制点的值。
     * @param tangentIn 从曲线的先前点起始的切线切入点。
     * @param tangentOut 指向曲线的下一个点的切线切出点。
     * @param {CurveContinuity} continuity 表示曲线为离散或连续曲线的枚举。
     */
    constructor(position: number, value: number, tangentIn: number, tangentOut: number, continuity: CurveContinuity);
    private static [CONSTRUCTOR_SYMBOL];
    [Symbol.iterator](): IterableIterator<CurveContinuity | number | null>;
    /**
     * 确定指定的 CurveKey 是否等于当前 CurveKey。
     * @param other 用于与当前 CurveKey 比较的 CurveKey。
     * @returns 是否相等。
     */
    ["=="](other: CurveKey): boolean;
    /**
     * 确定指定的 CurveKey 是否不等于当前 CurveKey。
     * @param other 用于与当前 CurveKey 比较的 CurveKey。
     * @returns 是否不相等。
     */
    ["!="](other: CurveKey): boolean;
    /**
     * 创建 CurveKey 的副本。
     * @returns CurveKey 的副本。
     */
    clone(): CurveKey;
    /**
     * 将该实例与其他 CurveKey 比较，并返回其相对值指示。
     * @param other 要比较的 CurveKey。
     * @returns 比较结果。
     */
    compareTo(other: CurveKey): number;
    /**
     * 确定指定的 Object 是否等于 CurveKey。
     * @param other 用于与当前 CurveKey 比较的 Object。
     * @returns 是否相等。
     */
    equals(other: CurveKey): boolean;
    /**
     * 检索当前对象的字符串呈现。
     * @returns 当前对象的字符串呈现。
     */
    toString(): string;
    /**
     * 返回当前 CurveKey 的 JSON 表示形式。
     * @returns 当前 CurveKey 的 JSON 表示形式。
     */
    toJSON(): object;
}
export {};
