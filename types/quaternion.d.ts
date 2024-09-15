import Vector3 from "./vector3";
import Matrix from "./matrix";

/**
 * 定义一个四维矢量 (x,y,z,w)，它可用于有效地将某个对象围绕 (x, y, z) 矢量旋转 angle theta，其中 w = cos(theta/2)。
 * @struct
 */
export default class Quaternion {
  /**
   * 返回呈现无旋转的 Quaternion。
   */
  static get identity(): Quaternion;

  /**
   * 指定四元数矢量色差的 x 值。
   */
  x: Number;

  /**
   * 指定四元数矢量色差的 y 值。
   */
  y: Number;

  /**
   * 指定四元数矢量色差的 z 值。
   */
  z: Number;

  /**
   * 指定四元数的旋转组件。
   */
  w: Number;

  /**
   * 新建一个空的 Quaternion 实例。
   */
  constructor();

  /**
   * 初始化新的 Quaternion 实例。
   * @param x 四元数的 x 值。
   * @param y 四元数的 y 值。
   * @param z 四元数的 z 值。
   * @param w 四元数的 w 值。
   */
  constructor(x: Number, y: Number, z: Number, w: Number);

  /**
   * 初始化新的 Quaternion 实例。
   * @param vectorPart 四元数的矢量组件。
   * @param scalarPart 四元数的旋转组件。
   */
  constructor(vectorPart: Vector3, scalarPart: Number);

  /**
   * 将两个四元数相加。
   * @param quaternion1 要添加的 Quaternion。
   * @param quaternion2 要添加的 Quaternion。
   * @returns 相加后的 Quaternion。
   */
  static add(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion;

  /**
   * 连接两个 Quaternion；结果中先后呈现了 value1 旋转和 value2 旋转。
   * @param value1 序列中的第一个 Quaternion 旋转。
   * @param value2 序列中的第一个 Quaternion 旋转。
   * @returns 结果 Quaternion。
   */
  static concatenate(value1: Quaternion, value2: Quaternion): Quaternion;

  /**
   * 返回指定 Quaternion 的共轭。
   * @param value 返回其共轭的 Quaternion。
   * @returns 结果 Quaternion。
   */
  static conjugate(value: Quaternion): Quaternion;

  /**
   * 用矢量和绕其旋转的角度创建 Quaternion。
   * @param axis 要围绕旋转的矢量。
   * @param angle 绕矢量旋转的角度。
   * @returns 结果 Quaternion。
   */
  static createFromAxisAngle(axis: Vector3, angle: Number): Quaternion;

  /**
   * 从旋转 Matrix 创建一个 Quaternion。
   * @param matrix 用于创建 Quaternion 的旋转 Matrix。
   * @returns 结果 Quaternion。
   */
  static createFromRotationMatrix(matrix: Matrix): Quaternion;

  /**
   * 用指定的偏转、俯仰和侧滚角度新建 Quaternion。
   * @param yaw 绕 y 轴的偏转角度，以弧度计。
   * @param pitch 绕 x 轴的俯仰角度，以弧度计。
   * @param roll 绕 z 轴的侧滚角度，以弧度计。
   * @returns 结果 Quaternion。
   */
  static createFromYawPitchRoll(
    yaw: Number,
    pitch: Number,
    roll: Number
  ): Quaternion;

  /**
   * 用一个 Quaternion 除以另一个 Quaternion。
   * @param quaternion1 源 Quaternion。
   * @param quaternion2 除数。
   * @returns 结果 Quaternion。
   */
  static divide(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion;

  /**
   * 计算两个四元数的点积。
   * @param quaternion1 源 Quaternion。
   * @param quaternion2 源 Quaternion。
   * @returns 点积。
   */
  static dot(quaternion1: Quaternion, quaternion2: Quaternion): Number;

  /**
   * 返回 Quaternion 的逆四元数。
   * @param quaternion 源 Quaternion。
   * @returns 结果 Quaternion。
   */
  static inverse(quaternion: Quaternion): Quaternion;

  /**
   * 在两个四元数之间执行线性插值。
   * @param quaternion1 源四元数。
   * @param quaternion2 源四元数。
   * @param amount 指示四元数之间的插值距离的值。
   * @returns 插值结果。
   */
  static lerp(
    quaternion1: Quaternion,
    quaternion2: Quaternion,
    amount: Number
  ): Quaternion;

  /**
   * 将一个四元数乘以一个标量值。
   * @param quaternion1 源四元数。
   * @param scaleFactor 标量值。
   * @returns 结果 Quaternion。
   */
  static multiply(quaternion1: Quaternion, scaleFactor: Number): Quaternion;

  /**
   * 将两个四元数相乘。
   * @param quaternion1 乘号左边的四元数。
   * @param quaternion2 乘号右边的四元数。
   * @returns 结果 Quaternion。
   */
  static multiply(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion;

  /**
   * 对四元数每个组件的符号取反。
   * @param quaternion 源四元数。
   * @returns 结果 Quaternion。
   */
  static negate(quaternion: Quaternion): Quaternion;

  /**
   * 以四元数的长度除四元数的每个组件。
   * @param quaternion 源四元数。
   * @returns 结果 Quaternion。
   */
  static normalize(quaternion: Quaternion): Quaternion;

  /**
   * 使用球面线性插值计算两个四元数之间的插值。
   * @param quaternion1 源四元数。
   * @param quaternion2 源四元数。
   * @param amount 指示要在四元数之间插入多远距离的值。
   * @returns 插值结果。
   */
  static slerp(
    quaternion1: Quaternion,
    quaternion2: Quaternion,
    amount: Number
  ): Quaternion;

  /**
   * 将一个四元数减去另一个四元数。
   * @param quaternion1 源四元数。
   * @param quaternion2 源四元数。
   * @returns 结果 Quaternion。
   */
  static subtract(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion;

  /**
   * 对传入的四元数取反。
   * @param other 用于取反的四元数。
   * @returns 取反后的四元数。
   */
  static ["-"](other: Quaternion): Quaternion;

  /**
   * 将当前四元数与另一个四元数相加。
   * @param other 用于相加的四元数。
   * @returns 相加后的四元数。
   */
  ["+"](other: Quaternion): Quaternion;

  /**
   * 将当前四元数与另一个四元数相减。
   * @param other 用于相减的四元数。
   * @returns 相减后的四元数。
   */
  ["-"](other: Quaternion): Quaternion;

  /**
   * 将当前四元数与另一个四元数相乘。
   * @param other 用于相乘的四元数。
   * @returns 相乘后的四元数。
   */
  ["*"](other: Quaternion): Quaternion;

  /**
   * 将当前四元数与另一个四元数相除。
   * @param other 用于相除的四元数。
   * @returns 相除后的四元数。
   */
  ["/"](other: Quaternion): Quaternion;

  /**
   * 确定指定的四元数是否等于当前四元数。
   * @param other 用于与当前四元数比较的四元数。
   * @returns 是否相等。
   */
  ["=="](other: Quaternion): Boolean;

  /**
   * 确定指定的四元数是否不等于当前四元数。
   * @param other 用于与当前四元数比较的四元数。
   * @returns 是否不相等。
   */
  ["!="](other: Quaternion): Boolean;

  /**
   * 将该 Quaternion 变换为其共轭。
   */
  conjugate(): void;

  /**
   * 确定指定的 Object 是否等于 Quaternion。
   * @param other 用于与当前 Quaternion 比较的 Quaternion。
   * @returns 是否相等。
   */
  equals(other: Quaternion): Boolean;

  /**
   * 计算四元数的长度。
   * @returns 四元数的长度。
   */
  length(): Number;

  /**
   * 计算四元数的平方长度。
   * @returns 四元数的平方长度。
   */
  lengthSquared(): Number;

  /**
   * 以四元数的长度除四元数的每个组件。
   */
  normalize(): void;

  /**
   * 检索当前对象的字符串呈现。
   * @returns 当前对象的字符串呈现。
   */
  toString(): String;

  /**
   * 返回当前 Quaternion 的 JSON 表示形式。
   * @returns 当前 Quaternion 的 JSON 表示形式。
   */
  toJSON(): Object;
}
