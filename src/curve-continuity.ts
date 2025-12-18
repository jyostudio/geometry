import Enum from "@jyostudio/enum";

/**
 * 定义 Curve 上 CurveKeys 的连续性。
 * @enum
 */
export default class CurveContinuity extends Enum {
    /**
     * 可以在两个连续的 CurveKey 之间使用插值。
     */
    declare static readonly smooth: CurveContinuity;

    /**
     * 不能在两个连续的 CurveKey 之间使用插值。指定两点间的位置会返回该点。
     */
    declare static readonly step: CurveContinuity;

    static {
        this.set({
            smooth: 0,
            step: 1
        });
    }
}
