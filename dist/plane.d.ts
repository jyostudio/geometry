import BoundingBox from "./bounding-box";
import BoundingFrustum from "./bounding-frustum";
import BoundingSphere from "./bounding-sphere";
import Matrix from "./matrix";
import PlaneIntersectionType from "./plane-intersection-type";
import Quaternion from "./quaternion";
import Vector3 from "./vector3";
import Vector4 from "./vector4";
declare const CONSTRUCTOR_SYMBOL: unique symbol;
/**
 * 定义一个平面。
 * @class
 */
export default class Plane {
    #private;
    /**
     * 获取 Plane 的法线矢量。
     */
    get normal(): Vector3;
    /**
     * 设置 Plane 的法线矢量。
     */
    set normal(value: Vector3);
    /**
     * 获取 Plane 从原点位置起沿法线方向的距离。
     */
    get d(): number;
    /**
     * 设置 Plane 从原点位置起沿法线方向的距离。
     */
    set d(value: number);
    /**
     * 结构化构造函数。
     * @returns Plane 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"](): Plane;
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
    constructor(a: number, b: number, c: number, d: number);
    /**
     * 新建 Plane 实例。
     * @param normal Plane 的法线矢量。
     * @param d Plane 从原点位置起沿法线方向的距离。
     */
    constructor(normal: Vector3, d: number);
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
    private static [CONSTRUCTOR_SYMBOL];
    [Symbol.iterator](): IterableIterator<Vector3 | number>;
    /**
     * 更改 Plane 的 Normal 矢量系数以使其成为单位长度。
     * @param value 要法线化的 Plane。
     * @returns 更改为单位长度的 Plane。
     */
    static normalize(value: Plane): Plane;
    /**
     * 更改 Plane 的 Normal 矢量系数以使其成为单位长度。
     * @param value 要法线化的 Plane。
     * @param result [OutAttribute] 填充了指定法线化版平面的现有平面 Plane。
     */
    static normalize(value: Plane, result: Plane): void;
    /**
     * 通过 Matrix 变换法线化 Plane。
     * @param plane 要变换的法线化 Plane。该 Plane 必须已进行法线化处理，以便在调用此方法前，其 Normal 矢量为单位长度。
     * @param matrix 要应用到 Plane 的变换 Matrix。
     * @returns 变化后的 Plane。
     */
    static transform(plane: Plane, matrix: Matrix): Plane;
    /**
     * 通过 Matrix 变换法线化 Plane。
     * @param plane 要变换的法线化 Plane。该 Plane 必须已进行法线化处理，以便在调用此方法前，其 Normal 矢量为单位长度。
     * @param matrix 要应用到 Plane 的变换 Matrix。
     * @param result [OutAttribute] 使用应用变换的结果进行填充的现有 Plane。
     */
    static transform(plane: Plane, matrix: Matrix, result: Plane): void;
    /**
     * 通过 Quaternion 旋转变换法线化 Plane。
     * @param plane 要变换的法线化 Plane。该 Plane 必须已进行法线化处理，以便在调用此方法前，其 Normal 矢量为单位长度。
     * @param rotation 要应用到 Plane 的 Quaternion 旋转。
     * @returns 变化后的 Plane。
     */
    static transform(plane: Plane, rotation: Quaternion): Plane;
    /**
     * 通过 Quaternion 旋转变换法线化 Plane。
     * @param plane 要变换的法线化 Plane。该 Plane 必须已进行法线化处理，以便在调用此方法前，其 Normal 矢量为单位长度。
     * @param rotation 要应用到 Plane 的 Quaternion 旋转。
     * @param result [OutAttribute] 使用应用旋转的结果进行填充的现有 Plane。
     */
    static transform(plane: Plane, rotation: Quaternion, result: Plane): void;
    /**
     * 确定指定的 Plane 是否等于当前Plane。
     * @param other 用于与当前 Plane 比较的 Plane。
     * @returns 是否相等。
     */
    ["=="](other: Plane): boolean;
    /**
     * 确定指定的 Plane 是否不等于当前Plane。
     * @param other 用于与当前 Plane 比较的 Plane。
     * @returns 是否不相等。
     */
    ["!="](other: Plane): boolean;
    /**
     * 计算指定的 Vector4 和此 Plane 的点积。
     * @param value 要乘以此 Plane 的 Vector4。
     * @returns 点积。
     */
    dot(value: Vector4): number;
    /**
     * 返回指定的 Vector3 和此 Plane 的 Normal 矢量的点积加上 Plane 的距离 (D) 值。
     * @param value 要乘以的 Vector3。
     * @returns 点积加上 Plane 的距离 (D) 值。
     */
    dotCoordinate(value: Vector3): number;
    /**
     * 返回指定的 Vector3 和此 Plane 的 Normal 矢量的点积。
     * @param value 要乘以的 Vector3。
     * @returns 点积。
     */
    dotNormal(value: Vector3): number;
    /**
     * 确定指定的 Plane 是否等于 当前Plane。
     * @param other 用于与当前 Plane 比较的 Plane。
     * @returns 是否相等。
     */
    equals(other: Plane): boolean;
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
     * 检查当前 Plane 是否与指定的点相交。
     * @param vec3 用于相交检查的点。
     * @returns 相交匹配值。
     */
    intersects(vec3: Vector3): PlaneIntersectionType;
    /**
     * 更改该 Plane 的 Normal 矢量系数以使其成为单位长度。
     */
    normalize(): void;
    /**
     * 返回呈现当前 Plane 的 String。
     * @returns 呈现当前 Plane 的 String。
     */
    toString(): string;
    /**
     * 返回当前 Plane 的 JSON 表示形式。
     * @returns 当前 Plane 的 JSON 表示形式。
     */
    toJSON(): object;
}
export {};
