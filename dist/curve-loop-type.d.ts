import Enum from "@jyostudio/enum";
/**
 * 定义如何为 Curve 起点前面或 Curve 终点后面的位置确定 Curve 的值。
 * @enum
 */
export default class CurveLoopType extends Enum {
    /**
     * Curve 将计算为其在 Curve 起点前位置的第一项和终点后位置的最后一项。
     */
    static readonly constant: CurveLoopType;
    /**
     * 经过曲线端点的指定位置将包围到 Curve 的另一侧。
     */
    static readonly cycle: CurveLoopType;
    /**
     * 经过曲线端点的指定位置将包围到 Curve 的另一侧。偏移值等于第一个和最后一个 CurveKey 的差值乘以位置的包围次数。如果该位置在 Curve 起点前面，就用其相应值减去差值；否则就与差值相加。
     */
    static readonly cycleOffset: CurveLoopType;
    /**
     * 经过 Curve 端点的指定位置充当由 Curve 同一侧到另一侧的偏移。
     */
    static readonly oscillate: CurveLoopType;
    /**
     * 将执行线性插值来确定该值。
     */
    static readonly linear: CurveLoopType;
}
