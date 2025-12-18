import CurveKeyCollection from "./curve-key-collection";
import CurveLoopType from "./curve-loop-type";
import CurveTangent from "./curve-tangent";
declare const CONSTRUCTOR_SYMBOL: unique symbol;
/**
 * 存储任意 2D CurveKey 点集，并提供相应的方法对其定义的曲线进行功能评估。
 * @class
 */
export default class Curve {
    #private;
    /**
     * 获取指定如何处理大于曲线中最后一个控制点的权重值。
     */
    get postLoop(): CurveLoopType;
    /**
     * 设置指定如何处理大于曲线中最后一个控制点的权重值。
     */
    set postLoop(value: CurveLoopType);
    /**
     * 获取指定如何处理小于曲线中第一个控制点的权重值。
     */
    get preLoop(): CurveLoopType;
    /**
     * 设置指定如何处理小于曲线中第一个控制点的权重值。
     */
    set preLoop(value: CurveLoopType);
    /**
     * 获取构成曲线的点。
     */
    get keys(): CurveKeyCollection;
    /**
     * 获取一个指示曲线是否为常量的值。
     */
    get isConstant(): boolean;
    /**
     * 初始化新的 Curve 实例。
     */
    constructor();
    private static [CONSTRUCTOR_SYMBOL];
    [Symbol.iterator](): IterableIterator<CurveLoopType | CurveKeyCollection>;
    /**
     * 确定指定的 Curve 是否等于当前 Curve。
     * @param other 用于与当前 Curve 比较的 Curve。
     * @returns 是否相等。
     */
    ["=="](other: Curve): boolean;
    /**
     * 确定指定的 Curve 是否不等于当前 Curve。
     * @param other 用于与当前 Curve 比较的 Curve。
     * @returns 是否不相等。
     */
    ["!="](other: Curve): boolean;
    /**
     * 创建 Curve 的副本。
     * @returns Curve 的副本。
     */
    clone(): Curve;
    /**
     * 为通过索引指定的 CurveKey 计算 tangentIn 和 tangentOut。
     * @param keyIndex 要计算切线的 CurveKey 的索引（在 Curve 的 keys 集合中）。
     * @param tangentType 要计算的切线的类型（CurveTangent 枚举中指定的一个类型）。
     */
    computeTangent(keyIndex: number, tangentType: CurveTangent): void;
    /**
     * 为给定的 CurveKey 计算指定类型的 tangentIn 和指定类型的 tangentOut。
     * @param keyIndex 要计算切线的 CurveKey 的索引（在 Curve 的 keys 集合中）。
     * @param tangentInType 要计算的 tangentIn 的类型（CurveTangent 枚举中指定的一个类型）。
     * @param tangentOutType 要计算的 tangentOut 的类型（CurveTangent 枚举中指定的一个类型）。
     */
    computeTangent(keyIndex: number, tangentInType: CurveTangent, tangentOutType: CurveTangent): void;
    /**
     * 为 tangentIn 和 tangentOut 使用指定的切线类型，计算该 Curve 中所有 CurveKey 的切线。
     * @param tangentType 要计算的 tangentOut 和 tangentIn 的类型（CurveTangent 枚举中指定的一个类型）。
     */
    computeTangents(tangentType: CurveTangent): void;
    /**
     * 为 tangentOut 和 tangentIn 使用不同的切线类型，计算该 Curve 中所有 CurveKey 的切线。
     * @param tangentInType 要计算的 tangentIn 的类型（CurveTangent 枚举中指定的一个类型）。
     * @param tangentOutType 要计算的 tangentOut 的类型（CurveTangent 枚举中指定的一个类型）。
     */
    computeTangents(tangentInType: CurveTangent, tangentOutType: CurveTangent): void;
    /**
     * 查找 Curve 上某个位置的值。
     * @param position Curve 上的位置。
     * @returns 查找到的值。
     */
    evaluate(position: number): number;
    /**
     * 确定指定的 Curve 是否等于当前 Curve。
     * @param value 用于与当前 Curve 比较的 Curve。
     */
    equals(value: Curve): boolean;
    /**
     * 检索当前对象的字符串呈现。
     * @returns 当前对象的字符串呈现。
     */
    toString(): string;
    /**
     * 返回当前 Curve 的 JSON 表示形式。
     * @returns 当前 Curve 的 JSON 表示形式。
     */
    toJSON(): object;
}
export {};
