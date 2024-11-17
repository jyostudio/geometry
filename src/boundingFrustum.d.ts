import List from "@jyostudio/list";
import Vector3 from "./vector3";
import Matrix from "./matrix";
import Plane from "./plane";
import Ray from "./ray";
import BoundingSphere from "./boundingSphere";
import BoundingBox from "./boundingBox";
import ContainmentType from "./containmentType";
import PlaneIntersectionType from "./planeIntersectionType";

/**
 * 定义视锥并帮助确定图形是否与之相交。
 */
export default class BoundingFrustum {
    /**
     * 指定 BoundingFrustum 中的角点总数 (8)。
     */
    static get cornerCount(): Number;

    /**
     * 获取或设置描述此边界视锥的 Matrix。
     */
    matrix: Matrix;

    /**
     * 获取 BoundingFrustum 的近处平面。
     */
    get near(): Plane;

    /**
     * 获取 BoundingFrustum 的远处平面。
     */
    get far(): Plane;

    /**
     * 获取 BoundingFrustum 的左平面。
     */
    get left(): Plane;

    /**
     * 获取 BoundingFrustum 的右平面。
     */
    get right(): Plane;

    /**
     * 获取 BoundingFrustum 的顶部平面。
     */
    get top(): Plane;

    /**
     * 获取 BoundingFrustum 的底部平面。
     */
    get bottom(): Plane;

    /**
     * 新建 BoundingFrustum 实例。
     * @param value 通常用于查看 × 投影矩阵的组合矩阵。
     */
    constructor(value: Matrix);

    /**
     * 确定指定的 BoundingFrustum 是否等于当前 BoundingFrustum。
     * @param other 用于与当前 BoundingBox 比较的 BoundingFrustum。
     * @returns 是否相等。
     */
    ["=="](other: BoundingFrustum): Boolean;

    /**
     * 确定指定的 BoundingFrustum 是否不等于当前 BoundingFrustum。
     * @param other 用于与当前 BoundingFrustum 比较的 BoundingFrustum。
     * @returns 是否不相等。
     */
    ["!="](other: BoundingFrustum): Boolean;

    /**
     * 检查当前 BoundingFrustum 中是否包含指定的 BoundingBox。
     * @param box 根据当前 BoundingFrustum 检查的 BoundingBox。
     * @returns 测试包含的结果。
     */
    contains(box: BoundingBox): ContainmentType;

    /**
     * 检查当前 BoundingFrustum 中是否包含指定的 BoundingFrustum。
     * @param frustum 根据当前 BoundingFrustum 检查的 BoundingFrustum。
     * @returns 测试包含的结果。
     */
    contains(frustum: BoundingFrustum): ContainmentType;

    /**
     * 检查当前 BoundingFrustum 中是否包含指定的 BoundingSphere。
     * @param sphere 根据当前 BoundingFrustum 检查的 BoundingSphere。
     * @returns 测试包含的结果。
     */
    contains(sphere: BoundingSphere): ContainmentType;

    /**
     * 检查当前 BoundingFrustum 中是否包含指定的点。
     * @param point 根据当前 BoundingFrustum 检查的点。
     * @returns 测试包含的结果。
     */
    contains(point: Vector3): ContainmentType;

    /**
     * 确定指定的 BoundingFrustum 是否等于当前 BoundingFrustum。
     * @param other 用于与当前 BoundingFrustum 比较的 BoundingFrustum。
     * @returns 是否相等。
     */
    equals(other: BoundingFrustum): Boolean;

    /**
     * 获取组成 BoundingFrustum 角点的数据点数组。
     * @returns 数据点数组。
     */
    getCorners(): List<Vector3>;

    /**
     * 获取组成 BoundingFrustum 角点的数据点数组。
     * @param corners 至少具备 8 个 Vector3 数据点的现有数组，此数组可以用来写入 BoundingFrustum 角点。
     */
    getCorners(corners: List<Vector3>): void;

    /**
     * 检查当前 BoundingFrustum 是否与指定的 BoundingBox 相交。
     * @param box 用于相交检查的 BoundingBox。
     * @returns 是否相交。
     */
    intersects(box: BoundingBox): Boolean;

    /**
     * 检查当前 BoundingFrustum 是否与指定的 BoundingFrustum 相交。
     * @param frustum 用于相交检查的 BoundingFrustum。
     * @returns 是否相交。
     */
    intersects(frustum: BoundingFrustum): Boolean;

    /**
     * 检查当前 BoundingFrustum 是否与指定的 BoundingSphere 相交。
     * @param sphere 用于相交检查的 BoundingSphere。
     * @returns 是否相交。
     */
    intersects(sphere: BoundingSphere): Boolean;

    /**
     * 检查当前 BoundingFrustum 是否与指定的 Plane 相交。
     * @param plane 用于相交检查的 Plane。
     * @returns 测试相交结果。
     */
    intersects(plane: Plane): PlaneIntersectionType;

    /**
     * 检查当前 BoundingFrustum 是否与指定的 Ray 相交。
     * @param ray 用于相交检查的 Ray。
     * @returns 如果相交则返回长度，否则为 null。
     */
    intersects(ray: Ray): Number | null;

    /**
     * 返回呈现当前 BoundingFrustum 的 String。
     * @returns 呈现当前 BoundingFrustum 的 String。
     */
    toString(): String;

    /**
     * 返回当前 BoundingFrustum 的 JSON 表示形式。
     * @returns 当前 BoundingFrustum 的 JSON 表示形式。
     */
    toJSON(): Object;
}
