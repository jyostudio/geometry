/**
 * 包含常用的预计算值。
 */
export default class MathHelper {
  /**
   * 呈现数学常量 e。
   */
  static get e(): Number;

  /**
   * 呈现以 10 为底 e 的对数。
   */
  static get log10e(): Number;

  /**
   * 呈现以 2 为底 e 的对数。
   */
  static get log2e(): Number;

  /**
   * 呈现 pi 的值。
   */
  static get pi(): Number;

  /**
   * 呈现 pi 除以二的值。
   */
  static get piOver2(): Number;

  /**
   * 呈现 pi 除以四的值。
   */
  static get piOver4(): Number;

  /**
   * 呈现 2π 的值。
   */
  static get twoPi(): Number;

  /**
   * 返回给定三角形定义的某个点在一个轴上的 Cartesian 坐标，以及两个法线化质心（重心）坐标。
   * @param value1 定义三角形的顶点 1 在一个轴上的坐标。
   * @param value2 定义三角形的顶点 2 在一个轴上的坐标。
   * @param value3 定义三角形的顶点 3 在一个轴上的坐标。
   * @param amount1 法线化质心（重心）坐标 b2，等于顶点 2 的权重因子，该顶点的坐标已在 value2 中指定。
   * @param amount2 法线化质心（重心）坐标 b3，等于顶点 3 的权重因子，该顶点的坐标已在 value3 中指定。
   * @returns 给定三角形定义的某个点在一个轴上的 Cartesian 坐标，以及两个法线化质心（重心）坐标。
   */
  static barycentric(
    value1: Number,
    value2: Number,
    value3: Number,
    amount1: Number,
    amount2: Number
  ): Number;

  /**
   * 用指定的位置执行 Catmull-Rom 插值。
   * @param value1 插值中的第一个位置。
   * @param value2 插值中的第二个位置。
   * @param value3 插值中的第三个位置。
   * @param value4 插值中的第四个位置。
   * @param amount 权重因子。
   * @returns 插值结果。
   */
  static catmullRom(
    value1: Number,
    value2: Number,
    value3: Number,
    value4: Number,
    amount: Number
  ): Number;

  /**
   * 将值限制在指定范围内。
   * @param value 要限制的值。
   * @param min 最小值。如果 value 小于 min，将返回 min。
   * @param max 最大值。如果 value 大于 max，将返回 max。
   * @returns 限制后的值。
   */
  static clamp(value: Number, min: Number, max: Number): Number;

  /**
   * 计算两个值之差的绝对值。
   * @param value1 源值。
   * @param value2 源值。
   * @returns 两个值之差的绝对值。
   */
  static distance(value1: Number, value2: Number): Number;

  /**
   * 执行 Hermite 样条插值。
   * @param value1 源位置。
   * @param tangent1 源切线。
   * @param value2 源位置。
   * @param tangent2 源切线。
   * @param amount 权重因子。
   * @returns 插值结果。
   */
  static hermite(
    value1: Number,
    tangent1: Number,
    value2: Number,
    tangent2: Number,
    amount: Number
  ): Number;

  /**
   * 在两个值之间执行线性插值。
   * @param value1 源值。
   * @param value2 源值。
   * @param amount 指示 value2 权重的 0 到 1 之间的值。
   * @returns 插值结果。
   */
  static lerp(value1: Number, value2: Number, amount: Number): Number;

  /**
   * 返回两个值中的较大值。
   * @param value1 源值。
   * @param value2 源值。
   * @returns 两个值中的较大值。
   */
  static max(value1: Number, value2: Number): Number;

  /**
   * 返回两个值中的较小值。
   * @param value1 源值。
   * @param value2 源值。
   * @returns 两个值中的较小值。
   */
  static min(value1: Number, value2: Number): Number;

  /**
   * 使用三次方程计算两个值之间的插值。
   * @param value1 源值。
   * @param value2 源值。
   * @param amount 权重值。
   * @returns 插值结果。
   */
  static smoothStep(value1: Number, value2: Number, amount: Number): Number;

  /**
   * 将弧度转换为角度。
   * @param radians 以弧度表示的角。
   * @returns 角度。
   */
  static toDegrees(radians: Number): Number;

  /**
   * 将角度转换为弧度。
   * @param degrees 以角度表示的角。
   * @returns 弧度。
   */
  static toRadians(degrees: Number): Number;

  /**
   * 将一个给定角度减小到介于 π 和 -π 的值。
   * @param angle 要减少的角度，以弧度计。
   * @returns 角度减小到介于 π 和 -π 的值。
   */
  static wrapAngle(angle: Number): Number;

  /**
   * 判断一个数值是否为 2 的次方。
   * @param value 要判断的数值。
   * @returns 是否为 2 的次方。
   */
  static isPowerOfTwo(value: Number): Boolean;

  /**
   * 计算给定数字的最接近的多重采样抗锯齿（MSAA）功率值。
   * @param value 指定的值。
   * @returns 最接近的 MSAA 功率值。
   */
  static closestMSAAPower(value: Number): Number;
}
