import Vector3 from "./vector3";
import Plane from "./plane";
import Ray from "./ray";
import BoundingSphere from "./boundingSphere";
import BoundingFrustum from "./boundingFrustum";
import ContainmentType from "./containmentType";
import PlaneIntersectionType from "./planeIntersectionType";
import List from "@jyostudio/list";

/**
 * 定义通过轴对齐的盒形 3D 物体。
 * @struct
 */
export default class BoundingBox {
    /**
     * 指定 BoundingBox 中的角点总数 (8)。
     */
    static get cornerCount(): Number;

    /**
     * BoundingBox 包含的最多点。
     */
    max: Vector3;

    /**
     * BoundingBox 包含的最少点。
     */
    min: Vector3;

    /**
     * 新建一个空的 BoundingBox 实例。
     */
    constructor();

    /**
     * 创建 BoundingBox 的实例。
     * @param min BoundingBox 包含的最少点。
     * @param max BoundingBox 包含的最多点。
     */
    constructor(min: Vector3, max: Vector3);

    /**
     * 创建包含一个点组的最小 BoundingBox。
     * @param points BoundingBox 应包含的点的列表。
     * @returns BoundingBox 的实例。
     */
    static createFromPoints(points: List<Vector3>): BoundingBox;

    /**
     * 创建包含指定 BoundingSphere 的最小 BoundingBox。
     * @param sphere 要包含的 BoundingSphere。
     * @returns BoundingBox 的实例。
     */
    static createFromSphere(sphere: BoundingSphere): BoundingBox;

    /**
     * 创建包含两个指定 BoundingBox 实例的最小 BoundingBox。
     * @param original 要包含的一个 BoundingBox。
     * @param additional 要包含的一个 BoundingBox。
     * @returns BoundingBox 的实例。
     */
    static createMerged(original: BoundingBox, additional: BoundingBox): BoundingBox;

    /**
     * 确定指定的 BoundingBox 是否等于当前 BoundingBox。
     * @param other 用于与当前 BoundingBox 比较的 BoundingBox。
     * @returns 是否相等。
     */
    ["=="](other: BoundingBox): Boolean;

    /**
     * 确定指定的 BoundingBox 是否不等于当前 BoundingBox。
     * @param other 用于与当前 BoundingBox 比较的 BoundingBox。
     * @returns 是否不相等。
     */
    ["!="](other: BoundingBox): Boolean;

    /**
     * 测试 BoundingBox 中是否包含其他 BoundingBox。
     * @param box 用于重叠测试的 BoundingBox。
     * @returns 测试包含的结果。
     */
    contains(box: BoundingBox): ContainmentType;

    /**
     * 测试 BoundingBox 中是否包含 BoundingFrustum。
     * @param frustum 用于重叠测试的 BoundingFrustum。
     * @returns 测试包含的结果。
     */
    contains(frustum: BoundingFrustum): ContainmentType;

    /**
     * 测试 BoundingBox 中是否包含 BoundingSphere。
     * @param sphere 用于重叠测试的 BoundingSphere。
     * @returns 测试包含的结果。
     */
    contains(sphere: BoundingSphere): ContainmentType;

    /**
     * 测试 BoundingBox 中是否包含点。
     * @param point 用于重叠测试的点。
     * @returns 测试包含的结果。
     */
    contains(point: Vector3): ContainmentType;

    /**
     * 确定指定的 BoundingBox 是否等于当前 BoundingBox。
     * @param other 用于与当前 BoundingBox 比较的 BoundingBox。
     * @returns 是否相等。
     */
    equals(other: BoundingBox): Boolean;

    /**
     * 获取组成 BoundingBox 角点的数据点数组。
     * @returns 数据点数组。
     */
    getCorners(): List<Vector3>;

    /**
     * 获取组成 BoundingBox 角点的数据点数组。
     * @param corners 至少具备 8 个 Vector3 数据点的现有数组，此数组可以用来写入 BoundingBox 角点。
     */
    getCorners(corners: List<Vector3>): void;

    /**
     * 检查当前 BoundingBox 是否与其他 BoundingBox 相交。
     * @param box 用于相交检查的 BoundingBox。
     * @returns 是否相交。
     */
    intersects(box: BoundingBox): Boolean;

    /**
     * 检查当前 BoundingBox 是否与某个 BoundingFrustum 相交。
     * @param frustum 用于相交检查的 BoundingFrustum。
     * @returns 是否相交。
     */
    intersects(frustum: BoundingFrustum): Boolean;

    /**
     * 检查当前 BoundingBox 是否与某个 BoundingSphere 相交。
     * @param sphere 用于相交检查的 BoundingSphere。
     * @returns 是否相交。
     */
    intersects(sphere: BoundingSphere): Boolean;

    /**
     * 检查当前 BoundingBox 是否与某个 Plane 相交。
     * @param plane 用于相交检查的 Plane。
     * @returns 测试相交结果。
     */
    intersects(plane: Plane): PlaneIntersectionType;

    /**
     * 检查当前 BoundingBox 是否与某个 Ray 相交。
     * @param ray 用于相交检查的 Ray。
     * @returns 如果相交则返回长度，否则为 null。
     */
    intersects(ray: Ray): Number | null;

    /**
     * 返回呈现当前 BoundingBox 的 String。
     * @returns 呈现当前 BoundingBox 的 String。
     */
    toString(): String;

    /**
     * 返回当前 BoundingBox 的 JSON 表示形式。
     * @returns 当前 BoundingBox 的 JSON 表示形式。
     */
    toJSON(): Object;
}
