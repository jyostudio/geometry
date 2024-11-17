import List from "@jyostudio/list";
import Vector3 from "./vector3";
import Matrix from "./matrix";
import Plane from "./plane";
import Ray from "./ray";
import BoundingBox from "./boundingBox";
import BoundingFrustum from "./boundingFrustum";
import ContainmentType from "./containmentType";
import PlaneIntersectionType from "./planeIntersectionType";

/**
 * 定义一个球体。
 */
export default class BoundingSphere {
  /**
   * 球体的中心点。
   */
  center: Vector3;

  /**
   * 球形半径。
   */
  radius: Number;

  /**
   * 新建一个空的 BoundingSphere 实例。
   */
  constructor();

  /**
   * 新建 BoundingSphere 实例。
   * @param center 创建球形点。
   * @param radius 球形半径。
   */
  constructor(center: Vector3, radius: Number);

  /**
   * 创建可包含一个指定 BoundingBox 的最小 BoundingSphere。
   * @param box 用于创建 BoundingSphere 的 BoundingBox。
   * @returns BoundingSphere 实例。
   */
  static createFromBoundingBox(box: BoundingBox): BoundingSphere;

  /**
   * 创建可包含一个指定 BoundingFrustum 的最小 BoundingSphere。
   * @param frustum 用于创建 BoundingSphere 的 BoundingFrustum。
   * @returns BoundingSphere 实例。
   */
  static createFromFrustum(frustum: BoundingFrustum): BoundingSphere;

  /**
   * 创建一个可包含指定的点列表的 BoundingSphere。
   * @param points BoundingSphere 必须包含的点的列表。
   * @returns BoundingSphere 实例。
   */
  static createFromPoints(points: List<Vector3>): BoundingSphere;

  /**
   * 创建包含两个指定 BoundingSphere 实例的 BoundingSphere。
   * @param original 要合并的 BoundingSphere。
   * @param additional 要合并的 BoundingSphere。
   * @returns 合并后的 BoundingSphere 实例。
   */
  static createMerged(
    original: BoundingSphere,
    additional: BoundingSphere
  ): BoundingSphere;

  /**
   * 确定指定的 BoundingSphere 是否等于当前 BoundingSphere。
   * @param other 用于与当前 BoundingSphere 比较的 BoundingSphere。
   * @returns 是否相等。
   */
  ["=="](other: BoundingSphere): Boolean;

  /**
   * 确定指定的 BoundingSphere 是否不等于当前 BoundingSphere。
   * @param other 用于与当前 BoundingSphere 比较的 BoundingSphere。
   * @returns 是否不相等。
   */
  ["!="](other: BoundingSphere): Boolean;

  /**
   * 检查当前 BoundingSphere 中是否包含指定的 BoundingBox。
   * @param box 根据当前 BoundingSphere 检查的 BoundingBox。
   * @returns 测试包含结果。
   */
  contains(box: BoundingBox): ContainmentType;

  /**
   * 检查当前 BoundingSphere 中是否包含指定的 BoundingFrustum。
   * @param frustum 根据当前 BoundingSphere 检查的 BoundingFrustum。
   * @returns 测试包含结果。
   */
  contains(frustum: BoundingFrustum): ContainmentType;

  /**
   * 检查当前 BoundingSphere 中是否包含指定的 BoundingSphere。
   * @param sphere 根据当前 BoundingSphere 检查的 BoundingSphere。
   * @returns 测试包含结果。
   */
  contains(sphere: BoundingSphere): ContainmentType;

  /**
   * 检查当前 BoundingSphere 中是否包含指定的点。
   * @param point 根据当前 BoundingSphere 检查的点。
   * @returns 测试包含结果。
   */
  contains(point: Vector3): ContainmentType;

  /**
   * 确定指定的 BoundingSphere 是否等于当前 BoundingSphere。
   * @param other 用于与当前 BoundingSphere 比较的 BoundingSphere。
   * @returns 是否相等。
   */
  equals(other: BoundingSphere): Boolean;

  /**
   * 检查当前 BoundingSphere 是否与指定的 BoundingBox 相交。
   * @param box 要检查与当前 BoundingBox 是否相交的 BoundingSphere。
   * @returns 是否相交。
   */
  intersects(box: BoundingBox): Boolean;

  /**
   * 检查当前 BoundingSphere 是否与指定的 BoundingFrustum 相交。
   * @param frustum 检查与当前 BoundingFrustum 之间交集的 BoundingFrustum。
   * @returns 是否相交。
   */
  intersects(frustum: BoundingFrustum): Boolean;

  /**
   * 检查当前 BoundingSphere 是否与指定的 BoundingSphere 相交。
   * @param sphere 检查与当前 BoundingSphere 之间交集的 BoundingSphere。
   * @returns 是否相交。
   */
  intersects(sphere: BoundingSphere): Boolean;

  /**
   * 检查当前 BoundingSphere 是否与指定的 Plane 相交。
   * @param plane 检索与当前 BoundingSphere 之间交集的 Plane。
   * @returns 测试相交结果。
   */
  intersects(plane: Plane): PlaneIntersectionType;

  /**
   * 检查当前 BoundingSphere 是否与指定的 Ray 相交。
   * @param ray 要检查与当前 Ray 是否相交的 BoundingSphere。
   * @returns 如果相交则返回长度，否则为 null
   */
  intersects(ray: Ray): Number | null;

  /**
   * 返回呈现当前 BoundingSphere 的 String。
   * @returns 呈现当前 BoundingSphere 的 String。
   */
  toString(): String;

  /**
   * 使用给定 Matrix 平移和缩放 BoundingSphere。
   * @param matrix 可能包含平移、旋转或统一缩放的变换矩阵。请注意，如果在此变换矩阵中存在非统一缩放、修剪或其他异常变换，BoundingSphere.transform 将不会返回正确的结果。导致此情况的原因是无法对球体进行修剪或非统一缩放。这种操作可导致球体丢失其形状。
   * @returns 变换后的 BoundingSphere 实例。
   */
  transform(matrix: Matrix): BoundingSphere;

  /**
   * 返回当前 BoundingSphere 的 JSON 表示形式。
   * @returns 当前 BoundingSphere 的 JSON 表示形式。
   */
  toJSON(): Object;
}
