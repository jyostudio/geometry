import List from "@jyostudio/list";
import Vector2 from "./vector2";
import Vector3 from "./vector3";
import Matrix from "./matrix";
import Quaternion from "./quaternion";

/**
 * 定义具有四个组件的矢量。
 * @struct
 */
export default class Vector4 {
  /**
   * 返回所有组件均设置为一的 Vector4。
   */
  static get one(): Vector4;

  /**
   * 返回 Vector4 (0, 0, 0, 1)。
   */
  static get unitW(): Vector4;

  /**
   * 返回 Vector4 (1, 0, 0, 0)。
   */
  static get unitX(): Vector4;

  /**
   * 返回 Vector4 (0, 1, 0, 0)。
   */
  static get unitY(): Vector4;

  /**
   * 返回 Vector4 (0, 0, 1, 0)。
   */
  static get unitZ(): Vector4;

  /**
   * 返回所有组件均设置为零的 Vector4。
   */
  static get zero(): Vector4;

  /**
   * 获取或设置矢量的 x 色差。
   */
  x: Number;

  /**
   * 获取或设置矢量的 y 色差。
   */
  y: Number;

  /**
   * 获取或设置矢量的 z 色差。
   */
  z: Number;

  /**
   * 获取或设置矢量的 w 色差。
   */
  w: Number;

  /**
   * 新建一个空的 Vector4 实例。
   */
  constructor();

  /**
   * 新建 Vector4 实例。
   * @param value 每个色差的初始化值。
   */
  constructor(value: Number);

  /**
   * 初始化新的 Vector4 实例。
   * @param x 矢量 x 色差的初始值。
   * @param y 矢量 y 色差的初始值。
   * @param z 矢量 z 色差的初始值。
   * @param w 矢量 w 色差的初始值。
   */
  constructor(x: Number, y: Number, z: Number, w: Number);

  /**
   * 初始化新的 Vector4 实例。
   * @param value 包含 x 和 y 色差的初始化值的矢量。
   * @param z 矢量 z 色差的初始值。
   * @param w 矢量 w 色差的初始值。
   */
  constructor(value: Vector2, z: Number, w: Number);

  /**
   * 初始化新的 Vector4 实例。
   * @param value 包含 x、y 和 z 色差的初始化值的矢量。
   * @param w 矢量 w 色差的初始值。
   */
  constructor(value: Vector3, w: Number);

  /**
   * 将两个矢量相加。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 相加后的矢量。
   */
  static add(value1: Vector4, value2: Vector4): Vector4;

  /**
   * 返回一个相对于 4D 三角形的质心（重心）坐标中某指定点的 4D Cartesian 坐标所在的 Vector4。
   * @param value1 包含三角形顶点 1 的 4D Cartesian 坐标的 Vector4。
   * @param value2 包含三角形顶点 2 的 4D Cartesian 坐标的 Vector4。
   * @param value3 包含三角形顶点 3 的 4D Cartesian 坐标的 Vector4。
   * @param amount1 质心坐标 b2，用于表达趋向顶点 2 的权重因子（在 value2 中指定）。
   * @param amount2 质心坐标 b3，用于表达趋向顶点 3 的权重因子（在 value3 中指定）。
   * @returns 相对于 4D 三角形的质心（重心）坐标中某指定点的 4D Cartesian 坐标所在的 Vector4。
   */
  static barycentric(
    value1: Vector4,
    value2: Vector4,
    value3: Vector4,
    amount1: Number,
    amount2: Number
  ): Vector4;

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
    value1: Vector4,
    value2: Vector4,
    value3: Vector4,
    value4: Vector4,
    amount: Number
  ): Vector4;

  /**
   * 将值限制在指定范围内。
   * @param value1 要限制的值。
   * @param min 最小值。
   * @param max 最大值。
   * @returns 限制后的值。
   */
  static clamp(value1: Vector4, min: Vector4, max: Vector4): Vector4;

  /**
   * 计算两个矢量之间的距离。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 两个矢量之间的距离。
   */
  static distance(value1: Vector4, value2: Vector4): Number;

  /**
   * 计算两个平方矢量之间的距离。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 两个平方矢量之间的距离。
   */
  static distanceSquared(value1: Vector4, value2: Vector4): Number;

  /**
   * 用一个矢量除以一个标量值。
   * @param value1 源矢量。
   * @param divider 除数。
   * @returns 结果矢量。
   */
  static divide(value1: Vector4, divider: Number): Vector4;

  /**
   * 用一个矢量的组件除以另一个矢量的组件。
   * @param value1 源矢量。
   * @param value2 除数矢量。
   * @returns 结果矢量。
   */
  static divide(value1: Vector4, value2: Vector4): Vector4;

  /**
   * 计算两个矢量的点积。
   * @param vector1 源矢量。
   * @param vector2 源矢量。
   * @returns 点积。
   */
  static dot(vector1: Vector4, vector2: Vector4): Number;

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
    value1: Vector4,
    tangent1: Vector4,
    value2: Vector4,
    tangent2: Vector4,
    amount: Number
  ): Vector4;

  /**
   * 在两个矢量之间执行线性插值。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @param amount 指示 value2 权重的 0 到 1 之间的值。
   * @returns 插值结果。
   */
  static lerp(value1: Vector4, value2: Vector4, amount: Number): Vector4;

  /**
   * 从每个匹配的组件对中返回包含最大值的矢量。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 结果矢量。
   */
  static max(value1: Vector4, value2: Vector4): Vector4;

  /**
   * 从每个匹配的组件对中返回包含最小值的矢量。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 结果矢量。
   */
  static min(value1: Vector4, value2: Vector4): Vector4;

  /**
   * 将一个矢量乘以一个标量。
   * @param value1 源矢量。
   * @param scaleFactor 标量值。
   * @returns 结果矢量。
   */
  static multiply(value1: Vector4, scaleFactor: Number): Vector4;

  /**
   * 将两个矢量的组件彼此相乘。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 结果矢量。
   */
  static multiply(value1: Vector4, value2: Vector4): Vector4;

  /**
   * 返回指向反方向的矢量。
   * @param value 源矢量。
   * @returns 结果矢量。
   */
  static negate(value: Vector4): Vector4;

  /**
   * 根据指定的矢量创建单位矢量。
   * @param vector 源 Vector4。
   * @returns 结果矢量。
   */
  static normalize(vector: Vector4): Vector4;

  /**
   * 使用三次方程计算两个值之间的插值。
   * @param value1 源值。
   * @param value2 源值。
   * @param amount 权重值。
   * @returns 插值结果。
   */
  static smoothStep(value1: Vector4, value2: Vector4, amount: Number): Vector4;

  /**
   * 将一个矢量减去一个矢量。
   * @param value1 源矢量。
   * @param value2 源矢量。
   * @returns 结果矢量。
   */
  static subtract(value1: Vector4, value2: Vector4): Vector4;

  /**
   * 通过给定 Matrix 变换 Vector2。
   * @param position 源 Vector2。
   * @param matrix 变换 Matrix。
   * @returns 结果矢量。
   */
  static transform(position: Vector2, matrix: Matrix): Vector4;

  /**
   * 通过指定 Quaternion 将 Vector2 变换为 Vector4。
   * @param value 要变换的 Vector2。
   * @param rotation 要应用的 Quaternion 旋转。
   * @returns 结果矢量。
   */
  static transform(value: Vector2, rotation: Quaternion): Vector4;

  /**
   * 通过给定 Matrix 变换 Vector3。
   * @param position 源 Vector3。
   * @param matrix 变换 Matrix。
   * @returns 结果矢量。
   */
  static transform(position: Vector3, matrix: Matrix): Vector4;

  /**
   * 通过指定 Quaternion 将 Vector3 变换为 Vector4。
   * @param value 要变换的 Vector3。
   * @param rotation 要应用的 Quaternion 旋转。
   * @returns 结果矢量。
   */
  static transform(value: Vector3, rotation: Quaternion): Vector4;

  /**
   * 通过指定 Matrix 变换 Vector4。
   * @param vector 源 Vector4。
   * @param matrix 变换 Matrix。
   * @returns 结果矢量。
   */
  static transform(vector: Vector4, matrix: Matrix): Vector4;

  /**
   * 通过指定 Quaternion 变换 Vector4。
   * @param value 要变换的 Vector4。
   * @param rotation 要应用的 Quaternion 旋转。
   * @returns 结果矢量。
   */
  static transform(value: Vector4, rotation: Quaternion): Vector4;

  /**
   * 通过指定 Matrix 将 Vector4 数组中的指定范围变换为目标数组的指定范围。
   * @param sourceArray 包含要变换的范围的 Vector4 数组。
   * @param sourceIndex 源数组中要变换的首个 Vector4 的索引。
   * @param matrix 要应用的变换 Matrix。
   * @param destinationArray 要将结果写入到的现有 Vector4 目标数组。
   * @param destinationIndex 目标数组中要写入的首个 Vector4 的索引。
   * @param length 要变换的 Vector4 数量。
   */
  static transform(
    sourceArray: List<Vector4>,
    sourceIndex: Number,
    matrix: Matrix,
    destinationArray: List<Vector4>,
    destinationIndex: Number,
    length: Number
  ): void;

  /**
   * 通过指定 Quaternion 将 Vector4 数组中的指定范围变换为目标数组的指定范围。
   * @param sourceArray 包含要变换的范围的 Vector4 数组。
   * @param sourceIndex 源数组中要变换的首个 Vector4 的索引。
   * @param rotation 要应用的 Quaternion 旋转。
   * @param destinationArray 要将结果写入到的现有 Vector4 目标数组。
   * @param destinationIndex 目标数组中要写入的首个 Vector4 的索引。
   * @param length 要变换的 Vector4 数量。
   */
  static transform(
    sourceArray: List<Vector4>,
    sourceIndex: Number,
    rotation: Quaternion,
    destinationArray: List<Vector4>,
    destinationIndex: Number,
    length: Number
  ): void;

  /**
   * 通过指定 Matrix 变换 Vector4 数组。
   * @param sourceArray 要变换的 Vector4 数组。
   * @param matrix 要应用的变换 Matrix。
   * @param destinationArray 变换后的 Vector4 被写入的现有目标数组。
   */
  static transform(
    sourceArray: List<Vector4>,
    matrix: Matrix,
    destinationArray: List<Vector4>
  ): void;

  /**
   * 通过指定 Quaternion 变换 Vector4 数组。
   * @param sourceArray 要变换的 Vector4 数组。
   * @param rotation 要应用的 Quaternion 旋转。
   * @param destinationArray 变换后的 Vector4 被写入的现有目标数组。
   */
  static transform(
    sourceArray: List<Vector4>,
    rotation: Quaternion,
    destinationArray: List<Vector4>
  ): void;

  /**
   * 对传入的 Vector4 取反。
   * @param other 用于取反的 Vector4。
   * @returns 取反后的 Vector4。
   */
  static ["-"](other: Vector4): Vector4;

  /**
   * 将当前 Vector4 与另一个 Vector4 相加。
   * @param other 用于相加的 Vector4。
   * @returns 相加后的 Vector4。
   */
  ["+"](other: Vector4): Vector4;

  /**
   * 将当前 Vector4 与另一个 Vector4 相减。
   * @param other 用于相减的 Vector4。
   * @returns 相减后的 Vector4。
   */
  ["-"](other: Vector4): Vector4;

  /**
   * 将当前 Vector4 与另一个 Vector4 相乘。
   * @param other 用于相乘的 Vector4。
   * @returns 相乘后的 Vector4。
   */
  ["*"](other: Vector4): Vector4;

  /**
   * 将当前 Vector4 与另一个 Vector4 相除。
   * @param other 用于相除的 Vector4。
   * @returns 相除后的 Vector4。
   */
  ["/"](other: Vector4): Vector4;

  /**
   * 确定指定的 Vector4 是否等于当前 Vector4。
   * @param other 用于与当前 Vector4 比较的 Vector4。
   * @returns 是否相等。
   */
  ["=="](other: Vector4): Boolean;

  /**
   * 确定指定的 Vector4 是否不等于当前 Vector4。
   * @param other 用于与当前 Vector4 比较的 Vector4。
   * @returns 是否不相等。
   */
  ["!="](other: Vector4): Boolean;

  /**
   * 确定指定的 Vector4 是否等于当前 Vector4。
   * @param other 用于与当前 Vector4 比较的 Vector4。
   * @returns 是否相等。
   */
  equals(other: Vector4): Boolean;

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
   * 将当前矢量转为单位矢量。
   */
  normalize(): void;

  /**
   * 检索当前对象的字符串呈现。
   * @returns 当前对象的字符串呈现。
   */
  toString(): String;

  /**
   * 返回当前 Vector3 的 JSON 表示形式。
   * @returns 当前 Vector3 的 JSON 表示形式。
   */
  toJSON(): Object;
}
