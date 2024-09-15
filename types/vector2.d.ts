import List from "@jyostudio/list";
import Matrix from "./matrix";
import Quaternion from "./quaternion";

/**
 * 定义具有两个组件的矢量。
 * @struct
 */
export default class Vector2 {
  /**
   * 返回两个组件均设置为一的 Vector2。
   */
  static get one(): Vector2;

  /**
   * 返回 x 轴的单位矢量。
   */
  static get unitX(): Vector2;

  /**
   * 返回 y 轴的单位矢量。
   */
  static get unitY(): Vector2;

  /**
   * 返回所有组件均设置为零的 Vector2。
   */
  static get zero(): Vector2;

  /**
   * 获取或设置矢量的 x 值。
   */
  x: Number;

  /**
   * 获取或设置矢量的 y 值。
   */
  y: Number;

  /**
   * 新建一个空的 Vector2 实例。
   */
  constructor();

  /**
   * 新建 Vector2 实例。
   */
  constructor(value: Number);

  /**
   * 初始化新的 Vector2 实例。
   * @param x 矢量 x 的初始值。
   * @param y 矢量 y 的初始值。
   */
  constructor(x: Number, y: Number);

  /**
   * 将两个矢量相加。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 相加后的矢量。
   */
  static add(value1: Vector2, value2: Vector2): Vector2;

  /**
   * 返回一个相对于 2D 三角形的质心（重心）坐标中某指定点的 2D Cartesian 坐标所在的 Vector2。
   * @param value1 包含三角形顶点 1 的 2D Cartesian 坐标的 Vector2。
   * @param value2 包含三角形顶点 2 的 2D Cartesian 坐标的 Vector2。
   * @param value3 包含三角形顶点 3 的 2D Cartesian 坐标的 Vector2。
   * @param amount1 质心坐标 b2，用于表达趋向顶点 2 的权重因子（在 value2 中指定）。
   * @param amount2 质心坐标 b3，用于表达趋向顶点 3 的权重因子（在 value3 中指定）。
   * @returns 相对于 2D 三角形的质心（重心）坐标中某指定点的 2D Cartesian 坐标所在的 Vector2。
   */
  static barycentric(
    value1: Vector2,
    value2: Vector2,
    value3: Vector2,
    amount1: Number,
    amount2: Number
  ): Vector2;

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
    value1: Vector2,
    value2: Vector2,
    value3: Vector2,
    value4: Vector2,
    amount: Number
  ): Vector2;

  /**
   * 将值限制在指定范围内。
   * @param value1 要限制的值。
   * @param min 最小值。
   * @param max 最大值。
   * @returns 限制后的值。
   */
  static clamp(value1: Vector2, min: Vector2, max: Vector2): Vector2;

  /**
   * 计算两个矢量之间的距离。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 两个矢量之间的距离。
   */
  static distance(value1: Vector2, value2: Vector2): Number;

  /**
   * 计算两个平方矢量之间的距离。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 两个平方矢量之间的距离。
   */
  static distanceSquared(value1: Vector2, value2: Vector2): Number;

  /**
   * 用一个矢量除以一个标量值。
   * @param value1 源矢量。
   * @param divider 除数。
   * @returns 结果矢量。
   */
  static divide(value1: Vector2, divider: Number): Vector2;

  /**
   * 用一个矢量的组件除以另一个矢量的组件。
   * @param value1 源矢量。
   * @param value2 除数矢量。
   * @returns 结果矢量。
   */
  static divide(value1: Vector2, value2: Vector2): Vector2;

  /**
   * 计算两个矢量的点积。如果两个矢量均为单位矢量，则点积返回 -1 到 1 之间的浮点值，该值可以用来确定两个矢量之间的角度的一些性质。例如，它可以显示这些矢量是正交、平行，还是互为锐角或钝角。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 点积。
   */
  static dot(value1: Vector2, value2: Vector2): Number;

  /**
   * 执行 Hermite 样条插值。
   * @param value1 源位置矢量。
   * @param tangent1 源切线矢量。
   * @param value2 源位置矢量。
   * @param tangent2 源切线矢量。
   * @param amount 权重因子。
   * @returns 插值结果。
   */
  static hermite(
    value1: Vector2,
    tangent1: Vector2,
    value2: Vector2,
    tangent2: Vector2,
    amount: Number
  ): Vector2;

  /**
   * 在两个矢量之间执行线性插值。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @param amount 指示 value2 权重的 0 到 1 之间的值。
   * @returns 插值结果。
   */
  static lerp(value1: Vector2, value2: Vector2, amount: Number): Vector2;

  /**
   * 从每个匹配的组件对中返回包含最大值的矢量。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 结果矢量。
   */
  static max(value1: Vector2, value2: Vector2): Vector2;

  /**
   * 从每个匹配的组件对中返回包含最小值的矢量。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 结果矢量。
   */
  static min(value1: Vector2, value2: Vector2): Vector2;

  /**
   * 将一个矢量乘以一个标量值。
   * @param value1 源矢量。
   * @param scaleFactor 标量值。
   * @returns 结果矢量。
   */
  static multiply(value1: Vector2, scaleFactor: Number): Vector2;

  /**
   * 将两个矢量的组件彼此相乘。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 结果矢量。
   */
  static multiply(value1: Vector2, value2: Vector2): Vector2;

  /**
   * 返回指向反方向的矢量。
   * @param value 源矢量。
   * @returns 结果矢量。
   */
  static negate(value: Vector2): Vector2;

  /**
   * 根据指定的矢量创建单位矢量。结果是与原始矢量相同方向的长度矢量单位。
   * @param value 源 Vector2。
   * @returns 结果矢量。
   */
  static normalize(value: Vector2): Vector2;

  /**
   * 确定给定矢量和法线的反射矢量。
   * @param vector 源矢量。
   * @param normal vector 的法线。
   * @returns 结果矢量。
   */
  static reflect(vector: Vector2, normal: Vector2): Vector2;

  /**
   * 使用三次方程计算两个值之间的插值。
   * @param value1 源值。
   * @param value2 源值。
   * @param amount 权重值。
   * @returns 矢量插值结果。
   */
  static smoothStep(value1: Vector2, value2: Vector2, amount: Number): Vector2;

  /**
   * 将一个矢量减去一个矢量。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 结果矢量。
   */
  static subtract(value1: Vector2, value2: Vector2): Vector2;

  /**
   * 通过指定矩阵变换矢量 (x, y, 0, 1)。
   * @param position 源矢量。
   * @param matrix 变换矩阵。
   * @returns 结果矢量。
   */
  static transform(position: Vector2, matrix: Matrix): Vector2;

  /**
   * 通过指定 Quaternion 旋转变换单个 Vector2 或矢量法线 (x, y, 0, 0)。
   * @param value 要旋转的矢量。
   * @param rotation 要应用的 Quaternion 旋转。
   * @returns 结果矢量。
   */
  static transform(value: Vector2, rotation: Quaternion): Vector2;

  /**
   * 通过指定 Matrix 变换 Vector2 列表中的指定范围，并将结果放置在目标列表的指定范围内。
   * @param sourceArray 源列表。
   * @param sourceIndex 源列表中要变换的首个 Vector2 的索引。
   * @param matrix 要通过其变换的 Matrix。
   * @param destinationArray 结果 Vector2 将被写入的目标列表。
   * @param destinationIndex 目标列表中应将首个结果 Vector2 写入到的位置的索引。
   * @param length 要变换的 Vector2 的数量。
   */
  static transform(
    sourceArray: List<Vector2>,
    sourceIndex: Number,
    matrix: Matrix,
    destinationArray: List<Vector2>,
    destinationIndex: Number,
    length: Number
  ): void;

  /**
   * 通过指定 Quaternion 变换 Vector2 列表中的指定范围，并将结果放置在目标列表的指定范围内。
   * @param sourceArray 源列表。
   * @param sourceIndex 源列表中要变换的首个 Vector2 的索引。
   * @param rotation 要应用的 Quaternion 旋转。
   * @param destinationArray 结果 Vector2 被写入的目标列表。
   * @param destinationIndex 目标列表中应将首个结果 Vector2 写入到的位置的索引。
   * @param length 要变换的 Vector2 的数量。
   */
  static transform(
    sourceArray: List<Vector2>,
    sourceIndex: Number,
    rotation: Quaternion,
    destinationArray: List<Vector2>,
    destinationIndex: Number,
    length: Number
  ): void;

  /**
   * 通过指定 Matrix 变换 Vector2 列表。
   * @param sourceArray 要变换的 Vector2 列表。
   * @param matrix 要应用的变换 Matrix。
   * @param destinationArray 变换后的 Vector2 被写入的现有列表。
   */
  static transform(
    sourceArray: List<Vector2>,
    matrix: Matrix,
    destinationArray: List<Vector2>
  ): void;

  /**
   * 通过指定 Quaternion 变换 Vector2 列表。
   * @param sourceArray 要变换的 Vector2 列表。
   * @param rotation 要使用的变换 Matrix。
   * @param destinationArray 变换后的 Vector2 被写入的现有列表。
   */
  static transform(
    sourceArray: List<Vector2>,
    rotation: Quaternion,
    destinationArray: List<Vector2>
  ): void;

  /**
   * 通过矩阵变换 2D 矢量法线。
   * @param normal 源矢量。
   * @param matrix 变换矩阵。
   * @returns 结果矢量。
   */
  static transformNormal(normal: Vector2, matrix: Matrix): Vector2;

  /**
   * 通过指定 Matrix 变换 Vector2 矢量法线列表中的指定范围，并将结果放置在目标列表的指定范围内。
   * @param sourceArray 源列表。
   * @param sourceIndex 源列表中要变换的首个 Vector2 的索引。
   * @param matrix 要应用的 Matrix。
   * @param destinationArray 结果 Vector2 被写入的目标列表。
   * @param destinationIndex 目标列表中应将首个结果 Vector2 写入到的位置的索引。
   * @param length 要变换的矢量法线的数量。
   */
  static transformNormal(
    sourceArray: List<Vector2>,
    sourceIndex: Number,
    matrix: Matrix,
    destinationArray: List<Vector2>,
    destinationIndex: Number,
    length: Number
  ): void;

  /**
   * 通过指定 Matrix 变换 Vector2 矢量法线列表。
   * @param sourceArray 要变换的矢量法线列表。
   * @param matrix 要应用的变换 Matrix。
   * @param destinationArray 变换后的矢量法线被写入的现有列表。
   */
  static transformNormal(
    sourceArray: List<Vector2>,
    matrix: Matrix,
    destinationArray: List<Vector2>
  ): void;

  /**
   * 对传入的 Vector2 取反。
   * @param other 用于取反的 Vector2。
   * @returns 取反后的 Vector2。
   */
  static ["-"](other: Vector2): Vector2;

  /**
   * 将当前 Vector2 与另一个 Vector2 相加。
   * @param other 用于相加的 Vector2。
   * @returns 相加后的 Vector2。
   */
  ["+"](other: Vector2): Vector2;

  /**
   * 将当前 Vector2 与另一个 Vector2 相减。
   * @param other 用于相减的 Vector2。
   * @returns 相减后的 Vector2。
   */
  ["-"](other: Vector2): Vector2;

  /**
   * 将当前 Vector2 与另一个 Vector2 相乘。
   * @param other 用于相乘的 Vector2。
   * @returns 相乘后的 Vector2。
   */
  ["*"](other: Vector2): Vector2;

  /**
   * 将当前 Vector2 与另一个 Vector2 相除。
   * @param other 用于相除的 Vector2。
   * @returns 相除后的 Vector2。
   */
  ["/"](other: Vector2): Vector2;

  /**
   * 确定指定的 Vector2 是否等于当前 Vector2。
   * @param other 用于与当前 Vector2 比较的 Vector2。
   * @returns 是否相等。
   */
  ["=="](other: Vector2): Boolean;

  /**
   * 确定指定的 Vector2 是否不等于当前 Vector2。
   * @param other 用于与当前 Vector2 比较的 Vector2。
   * @returns 是否不相等。
   */
  ["!="](other: Vector2): Boolean;

  /**
   * 确定指定的 Vector2 是否等于当前 Vector2。
   * @param other 用于与当前 Vector2 比较的 Vector2。
   * @returns 是否相等。
   */
  equals(other: Vector2): Boolean;

  /**
   * 计算矢量的长度。
   * @returns 矢量的长度。
   */
  length(): Number;

  /**
   * 计算平方矢量的长度。
   * @returns 平方矢量的长度。
   */
  lengthSquared(): Number;

  /**
   * 将当前矢量转为单位矢量。结果是与原始矢量相同方向的长度矢量单位。
   */
  normalize(): void;

  /**
   * 检索当前对象的字符串呈现。
   * @returns 当前对象的字符串呈现。
   */
  toString(): String;

  /**
   * 返回当前 Vector2 的 JSON 表示形式。
   * @returns 当前 Vector2 的 JSON 表示形式。
   */
  toJSON(): Object;
}
