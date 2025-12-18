import overload from "@jyostudio/overload";
import { checkSetterType, lazyCheckSetterType } from "@jyostudio/overload/dist/decorator";
import BoundingBox from "./bounding-box";
import BoundingFrustum from "./bounding-frustum";
import BoundingSphere from "./bounding-sphere";
import Matrix from "./matrix";
import PlaneIntersectionType from "./plane-intersection-type";
import Quaternion from "./quaternion";
import Vector3 from "./vector3";
import Vector4 from "./vector4";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 定义一个平面。
 * @class
 */
export default class Plane {
    /**
     * Plane 的法线矢量。
     */
    #normal: Vector3 = null!;

    /**
     * 获取 Plane 的法线矢量。
     */
    public get normal(): Vector3 {
        return this.#normal;
    }

    /**
     * 设置 Plane 的法线矢量。
     */
    @lazyCheckSetterType(() => Vector3)
    public set normal(value: Vector3) {
        this.#normal = value;
    }

    /**
     * Plane 从原点位置起沿法线方向的距离。
     */
    #d = 0;

    /**
     * 获取 Plane 从原点位置起沿法线方向的距离。
     */
    public get d(): number {
        return this.#d;
    }

    /**
     * 设置 Plane 从原点位置起沿法线方向的距离。
     */
    @checkSetterType(Number)
    public set d(value: number) {
        this.#d = value;
    }

    /**
     * 结构化构造函数。
     * @returns Plane 实例。
     */
    public static ["##STRUCT_CONSTRUCTOR##"](): Plane {
        return new Plane();
    }

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
    constructor(...params: any) {
        this.#normal = Vector3.zero;

        Plane[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        Plane[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number, Number, Number, Number], function (this: Plane, a, b, c, d) {
                this.#normal.x = a;
                this.#normal.y = b;
                this.#normal.z = c;
                this.#d = d;
            })
            .add([Vector3, Number], function (this: Plane, normal, d) {
                this.#normal.x = normal.x;
                this.#normal.y = normal.y;
                this.#normal.z = normal.z;
                this.#d = d;
            })
            .add([Vector3, Vector3, Vector3], function (this: Plane, point1, point2, point3) {
                const ab = Vector3.subtract(point2, point1);
                const ac = Vector3.subtract(point3, point1);

                const cross = Vector3.cross(ab, ac);
                const normal = Vector3.normalize(cross);

                this.#normal.x = normal.x;
                this.#normal.y = normal.y;
                this.#normal.z = normal.z;
                this.#d = -(Vector3.dot(normal, point1));
            })
            .add([Vector4], function (this: Plane, value) {
                this.#normal.x = value.x;
                this.#normal.y = value.y;
                this.#normal.z = value.z;
                this.#d = value.w;
            });

        return Plane[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    public *[Symbol.iterator](): IterableIterator<Vector3 | number> {
        yield this.#normal;
        yield this.#d;
    }

    /**
     * 更改 Plane 的 Normal 矢量系数以使其成为单位长度。
     * @param value 要法线化的 Plane。
     * @returns 更改为单位长度的 Plane。
     */
    public static normalize(value: Plane): Plane;
    /**
     * 更改 Plane 的 Normal 矢量系数以使其成为单位长度。
     * @param value 要法线化的 Plane。
     * @param result [OutAttribute] 填充了指定法线化版平面的现有平面 Plane。
     */
    public static normalize(value: Plane, result: Plane): void;
    public static normalize(...params: any): any {
        Plane.normalize = overload()
            .add([Plane], function (value) {
                const result = new Plane();
                Vector3.normalize(value.#normal, result.#normal);
                const x1 = result.#normal.x, y1 = result.#normal.y, z1 = result.#normal.z;
                const x2 = value.#normal.x, y2 = value.#normal.y, z2 = value.#normal.z;

                const factor = Math.sqrt(x1 ** 2 + y1 ** 2 + z1 ** 2) /
                    Math.sqrt(x2 ** 2 + y2 ** 2 + z2 ** 2);
                result.#d = value.#d * factor;
                return result;
            })
            .add([Plane, Plane], function (value, result) {
                Vector3.normalize(value.#normal, result.#normal);
                const x1 = result.#normal.x, y1 = result.#normal.y, z1 = result.#normal.z;
                const x2 = value.#normal.x, y2 = value.#normal.y, z2 = value.#normal.z;

                const factor = Math.sqrt(x1 ** 2 + y1 ** 2 + z1 ** 2) /
                    Math.sqrt(x2 ** 2 + y2 ** 2 + z2 ** 2);
                result.#d = value.#d * factor;
            });

        return Plane.normalize.apply(this, params);
    }

    /**
     * 通过 Matrix 变换法线化 Plane。
     * @param plane 要变换的法线化 Plane。该 Plane 必须已进行法线化处理，以便在调用此方法前，其 Normal 矢量为单位长度。
     * @param matrix 要应用到 Plane 的变换 Matrix。
     * @returns 变化后的 Plane。
     */
    public static transform(plane: Plane, matrix: Matrix): Plane;
    /**
     * 通过 Matrix 变换法线化 Plane。
     * @param plane 要变换的法线化 Plane。该 Plane 必须已进行法线化处理，以便在调用此方法前，其 Normal 矢量为单位长度。
     * @param matrix 要应用到 Plane 的变换 Matrix。
     * @param result [OutAttribute] 使用应用变换的结果进行填充的现有 Plane。
     */
    public static transform(plane: Plane, matrix: Matrix, result: Plane): void;
    /**
     * 通过 Quaternion 旋转变换法线化 Plane。
     * @param plane 要变换的法线化 Plane。该 Plane 必须已进行法线化处理，以便在调用此方法前，其 Normal 矢量为单位长度。
     * @param rotation 要应用到 Plane 的 Quaternion 旋转。
     * @returns 变化后的 Plane。
     */
    public static transform(plane: Plane, rotation: Quaternion): Plane;
    /**
     * 通过 Quaternion 旋转变换法线化 Plane。
     * @param plane 要变换的法线化 Plane。该 Plane 必须已进行法线化处理，以便在调用此方法前，其 Normal 矢量为单位长度。
     * @param rotation 要应用到 Plane 的 Quaternion 旋转。
     * @param result [OutAttribute] 使用应用旋转的结果进行填充的现有 Plane。
     */
    public static transform(plane: Plane, rotation: Quaternion, result: Plane): void;
    public static transform(...params: any): any {
        Plane.transform = overload()
            .add([Plane, Matrix], function (plane, matrix) {
                const transformedMatrix = Matrix.transpose(Matrix.invert(matrix));
                const vector = new Vector4(plane.#normal, plane.#d);
                return new Plane(Vector4.transform(vector, transformedMatrix));
            })
            .add([Plane, Matrix, Plane], function (plane, matrix, result) {
                const transformedMatrix = Matrix.transpose(Matrix.invert(matrix));
                const vector = new Vector4(plane.#normal, plane.#d);
                Vector4.transform(vector, transformedMatrix, vector);
                result.#normal.x = vector.x;
                result.#normal.y = vector.y;
                result.#normal.z = vector.z;
                result.#d = vector.w;
            })
            .add([Plane, Quaternion], function (plane, rotation) {
                const result = new Plane();
                result.#normal = Vector3.transform(plane.#normal, rotation);
                result.#d = plane.#d;
                return result;
            })
            .add([Plane, Quaternion, Plane], function (plane, rotation, result) {
                Vector3.transform(plane.#normal, rotation, result.#normal);
                result.#d = plane.#d;
            });

        return Plane.transform.apply(this, params);
    }

    /**
     * 确定指定的 Plane 是否等于当前Plane。
     * @param other 用于与当前 Plane 比较的 Plane。
     * @returns 是否相等。
     */
    public ["=="](other: Plane): boolean;
    public ["=="](...params: any): any {
        return this.equals.apply(this, params);
    }

    /**
     * 确定指定的 Plane 是否不等于当前Plane。
     * @param other 用于与当前 Plane 比较的 Plane。
     * @returns 是否不相等。
     */
    public ["!="](other: Plane): boolean;
    public ["!="](...params: any): any {
        return !this.equals.apply(this, params);
    }

    /**
     * 计算指定的 Vector4 和此 Plane 的点积。
     * @param value 要乘以此 Plane 的 Vector4。
     * @returns 点积。
     */
    public dot(value: Vector4): number;
    public dot(...params: any): any {
        Plane.prototype.dot = overload()
            .add([Vector4], function (this: Plane, value) {
                const normal = this.#normal;
                const nx = normal.x, ny = normal.y, nz = normal.z;
                const vx = value.x, vy = value.y, vz = value.z, vw = value.w;
                return (nx * vx) + (ny * vy) + (nz * vz) + (this.#d * vw);
            });

        return Plane.prototype.dot.apply(this, params);
    }

    /**
     * 返回指定的 Vector3 和此 Plane 的 Normal 矢量的点积加上 Plane 的距离 (D) 值。
     * @param value 要乘以的 Vector3。
     * @returns 点积加上 Plane 的距离 (D) 值。
     */
    public dotCoordinate(value: Vector3): number;
    public dotCoordinate(...params: any): any {
        Plane.prototype.dotCoordinate = overload()
            .add([Vector3], function (this: Plane, value) {
                const normal = this.#normal;
                const nx = normal.x, ny = normal.y, nz = normal.z;
                const vx = value.x, vy = value.y, vz = value.z;
                return (nx * vx) + (ny * vy) + (nz * vz) + this.#d;
            });

        return Plane.prototype.dotCoordinate.apply(this, params);
    }

    /**
     * 返回指定的 Vector3 和此 Plane 的 Normal 矢量的点积。
     * @param value 要乘以的 Vector3。
     * @returns 点积。
     */
    public dotNormal(value: Vector3): number;
    public dotNormal(...params: any): any {
        Plane.prototype.dotNormal = overload()
            .add([Vector3], function (this: Plane, value) {
                const normal = this.#normal;
                const nx = normal.x, ny = normal.y, nz = normal.z;
                const vx = value.x, vy = value.y, vz = value.z;
                return nx * vx + ny * vy + nz * vz;
            });

        return Plane.prototype.dotNormal.apply(this, params);
    }

    /**
     * 确定指定的 Plane 是否等于 当前Plane。
     * @param other 用于与当前 Plane 比较的 Plane。
     * @returns 是否相等。
     */
    public equals(other: Plane): boolean;
    public equals(...params: any): any {
        Plane.prototype.equals = overload([Plane], function (this: Plane, other) {
            return this.#normal.equals(other.#normal) && this.#d === other.#d;
        }).any(() => false);

        return Plane.prototype.equals.apply(this, params);
    }

    /**
     * 检查当前 Plane 是否与指定的 BoundingBox 相交。
     * @param box 用于相交测试的 BoundingBox。
     * @returns 相交匹配值。
     */
    public intersects(box: BoundingBox): PlaneIntersectionType;
    /**
     * 检查当前 Plane 是否与指定的 BoundingFrustum 相交。
     * @param frustum 用于相交检查的 BoundingFrustum。
     * @returns 相交匹配值。
     */
    public intersects(frustum: BoundingFrustum): PlaneIntersectionType;
    /**
     * 检查当前 Plane 是否与指定的 BoundingSphere 相交。
     * @param sphere 用于相交检查的 BoundingSphere。
     * @returns 相交匹配值。
     */
    public intersects(sphere: BoundingSphere): PlaneIntersectionType;
    /**
     * 检查当前 Plane 是否与指定的点相交。
     * @param vec3 用于相交检查的点。
     * @returns 相交匹配值。
     */
    public intersects(vec3: Vector3): PlaneIntersectionType;
    public intersects(...params: any): any {
        Plane.prototype.intersects = overload()
            .add([BoundingBox], function (this: Plane, box) {
                return box.intersects(this);
            })
            .add([BoundingFrustum], function (this: Plane, frustum) {
                return frustum.intersects(this);
            })
            .add([BoundingSphere], function (this: Plane, sphere) {
                return sphere.intersects(this);
            })
            .add([Vector3], function (this: Plane, vec3) {
                const distance = this.dotCoordinate(vec3);
                if (distance > 0) return PlaneIntersectionType.front;
                else if (distance < 0) return PlaneIntersectionType.back;
                else return PlaneIntersectionType.intersecting;
            });

        return Plane.prototype.intersects.apply(this, params);
    }

    /**
     * 更改该 Plane 的 Normal 矢量系数以使其成为单位长度。
     */
    public normalize(): void;
    public normalize(...params: any): any {
        Plane.prototype.normalize = overload([], function (this: Plane) {
            const factor = 1 / this.#normal.length();
            this.#normal = Vector3.multiply(this.#normal, factor);
            this.#d *= factor;
        });

        return Plane.prototype.normalize.apply(this, params);
    }

    /**
     * 返回呈现当前 Plane 的 String。
     * @returns 呈现当前 Plane 的 String。
     */
    public toString(): string;
    public toString(...params: any): any {
        Plane.prototype.toString = overload([], function (this: Plane) {
            return JSON.stringify(this);
        });

        return Plane.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 Plane 的 JSON 表示形式。
     * @returns 当前 Plane 的 JSON 表示形式。
     */
    public toJSON(): object {
        return {
            normal: this.#normal,
            d: this.#d
        };
    }
}
