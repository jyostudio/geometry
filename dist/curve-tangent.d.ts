import Enum from "@jyostudio/enum";
/**
 * 指定要为 Curve 中的 CurveKey 点计算的不同切线类型。
 * @enum
 */
export default class CurveTangent extends Enum {
    /**
     * flat 切线始终具有一个零值。
     */
    static readonly flat: CurveTangent;
    /**
     * CurveKey 的 linear 切线相当于其 value 和之前/之后 CurveKey 的 value 之间的差值。 例如在 Curve MyCurve 中，i 大于零，而 (i + 1) 小于 MyCurve 中 CurveKeys 的总数，则 MyCurve.keys[i] 的线性 tangentIn 等于： ( MyCurve.keys[i].value - MyCurve.keys[i - 1].value ) 同样，线性 tangentOut 等于： ( MyCurve.keys[i + 1].value - MyCurve.keys[i].value.)
     */
    static readonly linear: CurveTangent;
    /**
     * smooth 切线可借助 CurveKey 相邻处的值来平滑处理 tangentIn 和 tangentOut 之间的变形。 MyCurve.keys[i] 的平滑 tangentIn 等于： ( ( MyCurve.keys[i + 1].value - MyCurve.keys[i - 1].value ) * ( ( MyCurve.keys[i].position - MyCurve.keys[i - 1].position ) / ( MyCurve.keys[i + 1].position - MyCurve.keys[i-1].position ) ) ) 同样，平滑 tangentOut 等于： ( ( MyCurve.keys[i + 1].value - MyCurve.keys[i - 1].value ) * ( ( MyCurve.keys[i + 1].position - MyCurve.keys[i].position ) / ( MyCurve.keys[i + 1].position - MyCurve.keys[i - 1].position ) ) )
     */
    static readonly smooth: CurveTangent;
}
