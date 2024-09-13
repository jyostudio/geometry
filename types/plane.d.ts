import Vector3 from "./vector3";
import Vector4 from "./vector4";
import Quaternion from "./quaternion";
import Matrix from "./matrix";
import BoundingBox from "./boundingBox";
import BoundingFrustum from "./boundingFrustum";
import BoundingSphere from "./boundingSphere";
import PlaneIntersectionType from "./planeIntersectionType";

/**
 * 定义一个平面。
 */
export default class Plane {
  /**
   * Plane 的法线矢量。
   */
  normal: Vector3;

  /**
   * Plane 从原点位置起沿法线方向的距离。
   */
  d: Number;

  /**
   * 新建一个空的 Plane 实例。
   */
  constructor();

  /**
   * 新建 Plane 实例。
   * @param a 定义 Plane 的法线 x 色差。
   * @param b 定义 Plane 的法线 y 色差。
   * @param c 定义 Plane 的法线 z 色差。
   * @param d Plane 从原点位置起沿法线方向的距离。
   */
  constructor(a: Number, b: Number, c: Number, d: Number);

  /**
   * 新建 Plane 实例。
   * @param normal Plane 的法线矢量。
   * @param d Plane 从原点位置起沿法线方向的距离。
   */
  constructor(normal: Vector3, d: Number);

  /**
   * 新建 Plane 实例。
   * @param point1 一个定义 Plane 的三角形点。
   * @param point2 一个定义 Plane 的三角形点。
   * @param point3 一个定义 Plane 的三角形点。
   */
  constructor(point1: Vector3, point2: Vector3, point3: Vector3);

  /**
   * 新建 Plane 实例。
   * @param value 带有 X、Y 和 Z 色差（定义 Plane 的法线）的 Vector4。W 色差定义 Plane 从原点位置起沿法线方向的距离。
   */
  constructor(value: Vector4);

  /**
   * 更改 Plane 的 Normal 矢量系数以使其成为单位长度。
   * @param value 要法线化的 Plane。
   * @returns 更改为单位长度的 Plane。
   */
  static normalize(value: Plane): Plane;

  /**
   * 通过 Matrix 变换法线化 Plane。
   * @param plane 要变换的法线化 Plane。该 Plane 必须已进行法线化处理，以便在调用此方法前，其 Normal 矢量为单位长度。
   * @param matrix 要应用到 Plane 的变换 Matrix。
   * @returns 变化后的 Plane。
   */
  static transform(plane: Plane, matrix: Matrix): Plane;

  /**
   * 通过 Quaternion 旋转变换法线化 Plane。
   * @param plane 要变换的法线化 Plane。该 Plane 必须已进行法线化处理，以便在调用此方法前，其 Normal 矢量为单位长度。
   * @param rotation 要应用到 Plane 的 Quaternion 旋转。
   * @returns 变化后的 Plane。
   */
  static transform(plane: Plane, rotation: Quaternion): Plane;

  /**
   * 确定指定的 Plane 是否等于当前Plane。
   * @param other 用于与当前 Plane 比较的 Plane。
   * @returns 是否相等。
   */
  ["=="](other: Plane): Boolean;

  /**
   * 确定指定的 Plane 是否不等于当前Plane。
   * @param other 用于与当前 Plane 比较的 Plane。
   * @returns 是否不相等。
   */
  ["!="](other: Plane): Boolean;

  /**
   * 计算指定的 Vector4 和此 Plane 的点积。
   * @param value 要乘以此 Plane 的 Vector4。
   * @returns 点积。
   */
  dot(value: Vector4): Number;

  /**
   * 返回指定的 Vector3 和此 Plane 的 Normal 矢量的点积加上 Plane 的距离 (D) 值。
   * @param value 要乘以的 Vector3。
   * @returns 点积加上 Plane 的距离 (D) 值。
   */
  dotCoordinate(value: Vector3): Number;

  /**
   * 返回指定的 Vector3 和此 Plane 的 Normal 矢量的点积。
   * @param value 要乘以的 Vector3。
   * @returns 点积。
   */
  dotNormal(value: Vector3): Number;

  /**
   * 确定指定的 Plane 是否等于 当前Plane。
   * @param other 用于与当前 Plane 比较的 Plane。
   * @returns 是否相等。
   */
  equals(other: Plane): Boolean;

  /**
   * 检查当前 Plane 是否与指定的 BoundingBox 相交。
   * @param box 用于相交测试的 BoundingBox。
   * @returns 相交匹配值。
   */
  intersects(box: BoundingBox): PlaneIntersectionType;

  /**
   * 检查当前 Plane 是否与指定的 BoundingFrustum 相交。
   * @param frustum 用于相交检查的 BoundingFrustum。
   * @returns 相交匹配值。
   */
  intersects(frustum: BoundingFrustum): PlaneIntersectionType;

  /**
   * 检查当前 Plane 是否与指定的 BoundingSphere 相交。
   * @param sphere 用于相交检查的 BoundingSphere。
   * @returns 相交匹配值。
   */
  intersects(sphere: BoundingSphere): PlaneIntersectionType;

  /**
   * 更改该 Plane 的 Normal 矢量系数以使其成为单位长度。
   */
  normalize(): void;

  /**
   * 返回呈现当前 Plane 的 String。
   * @returns 呈现当前 Plane 的 String。
   */
  toString(): String;

  /**
   * 返回当前 Plane 的 JSON 表示形式。
   * @returns 当前 Plane 的 JSON 表示形式。
   */
  toJSON(): Object;
}
