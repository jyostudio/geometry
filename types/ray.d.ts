import Vector3 from "./vector3";
import Plane from "./plane";
import BoundingBox from "./boundingBox";
import BoundingFrustum from "./boundingFrustum";
import BoundingSphere from "./boundingSphere";

/**
 * 定义一条射线。
 * @struct
 */
export default class Ray {
  /**
   * 指定 Ray 所指方向的单位矢量。
   */
  direction: Vector3;

  /**
   * 指定 Ray 的起点。
   */
  position: Vector3;

  /**
   * 新建一个空的 Ray 实例。
   */
  constructor();

  /**
   * 新建 Ray 实例。
   * @param position Ray 的起始点。
   * @param direction 描述 Ray 方向的单位矢量。
   */
  constructor(position: Vector3, direction: Vector3);

  /**
   * 确定指定的 Ray 是否等于当前 Ray。
   * @param other 用于与当前 Ray 比较的 Ray。
   * @returns 是否相等。
   */
  ["=="](other: Ray): Boolean;

  /**
   * 确定指定的 Ray 是否不等于当前 Ray。
   * @param other 用于与当前 Ray 比较的 Ray。
   * @returns 是否不相等。
   */
  ["!="](other: Ray): Boolean;

  /**
   * 确定指定的 Ray 是否等于当前 Ray。
   * @param other 用于与当前 Ray 比较的 Ray。
   * @returns 是否相等。
   */
  equals(other: Ray): Boolean;

  /**
   * 检查 Ray 是否与指定的 BoundingBox 相交。
   * @param box 要检查与 Ray 是否相交的 BoundingBox。
   * @returns 如果相交则返回长度，否则为 null。
   */
  intersects(box: BoundingBox): Number | null;

  /**
   * 检查 Ray 是否与指定的 BoundingFrustum 相交。
   * @param frustum 检查与 Ray 之间交集的 BoundingFrustum。
   * @returns 如果相交则返回长度，否则为 null。
   */
  intersects(frustum: BoundingFrustum): Number | null;

  /**
   * 检查 Ray 是否与指定的 BoundingSphere 相交。
   * @param sphere 检查与 Ray 的相交性的 BoundingSphere。
   * @returns 如果相交则返回长度，否则为 null。
   */
  intersects(sphere: BoundingSphere): Number | null;

  /**
   * 确定该 Ray 是否与指定的 Plane 相交。
   * @param plane 用于计算与该 Ray 交集的 Plane。
   * @returns 如果相交则返回长度，否则为 null。
   */
  intersects(plane: Plane): Number | null;

  /**
   * 返回呈现当前 Ray 的 String。
   * @returns 呈现当前 Ray 的 String。
   */
  toString(): String;

  /**
   * 返回当前 Ray 的 JSON 表示形式。
   * @returns 当前 Ray 的 JSON 表示形式。
   */
  toJSON(): Object;
}
