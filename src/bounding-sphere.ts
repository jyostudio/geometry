import List from "@jyostudio/list";
import overload from "@jyostudio/overload";
import { checkSetterType, lazyCheckSetterType } from "@jyostudio/overload/dist/decorator";
import BoundingBox from "./bounding-box";
import BoundingFrustum from "./bounding-frustum";
import ContainmentType from "./containment-type";
import Matrix from "./matrix";
import Plane from "./plane";
import PlaneIntersectionType from "./plane-intersection-type";
import Ray from "./ray";
import Vector3 from "./vector3";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 定义一个球体。
 * @class
 */
export default class BoundingSphere {
    /**
     * 球体的中心点。
     */
    #center: Vector3 = null!;

    /**
     * 获取球体的中心点。
     */
    public get center(): Vector3 {
        return this.#center;
    }

    /**
     * 设置球体的中心点。
     */
    @lazyCheckSetterType(() => Vector3)
    public set center(value: Vector3) {
        this.#center = value;
    }

    /**
     * 球形半径。
     */
    #radius = 0;

    /**
     * 获取球形半径。
     */
    public get radius(): number {
        return this.#radius;
    }

    /**
     * 设置球形半径。
     */
    @checkSetterType(Number)
    public set radius(value: number) {
        this.#radius = value;
    }

    /**
     * 新建一个空的 BoundingSphere 实例。
     */
    constructor();
    /**
     * 新建 BoundingSphere 实例。
     * @param center 创建球形点。
     * @param radius 球形半径。
     */
    constructor(center: Vector3, radius: number);
    constructor(...params: any) {
        BoundingSphere[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    /**
     * 结构化构造函数。
     * @returns BoundingSphere 实例。
     */
    public static ["##STRUCT_CONSTRUCTOR##"](): BoundingSphere {
        return new BoundingSphere();
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        BoundingSphere[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function (this: BoundingSphere) {
                this.#center = Vector3.zero;
                this.#radius = 0;
            })
            .add([Vector3, Number], function (this: BoundingSphere, center, radius) {
                this.#center = center;
                this.#radius = radius;
            });

        return BoundingSphere[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    public *[Symbol.iterator](): IterableIterator<Vector3 | number> {
        yield this.#center;
        yield this.#radius;
    }

    /**
     * 创建可包含一个指定 BoundingBox 的最小 BoundingSphere。
     * @param box 用于创建 BoundingSphere 的 BoundingBox。
     * @returns BoundingSphere 实例。
     */
    public static createFromBoundingBox(box: BoundingBox): BoundingSphere;
    /**
     * 创建可包含一个指定 BoundingBox 的最小 BoundingSphere。
     * @param box 用于创建 BoundingSphere 的 BoundingBox。
     * @param result [OutAttribute] 创建的 BoundingSphere。
     */
    public static createFromBoundingBox(box: BoundingBox, result: BoundingSphere): void;
    public static createFromBoundingBox(...params: any): any {
        BoundingSphere.createFromBoundingBox = overload()
            .add([BoundingBox], function (box) {
                const center = new Vector3(
                    (box.min.x + box.max.x) / 2.0,
                    (box.min.y + box.max.y) / 2.0,
                    (box.min.z + box.max.z) / 2.0
                );

                const radius = Vector3.distance(center, box.max);

                return new BoundingSphere(center, radius);
            })
            .add([BoundingBox, BoundingSphere], function (box, result) {
                result.center = new Vector3(
                    (box.min.x + box.max.x) / 2.0,
                    (box.min.y + box.max.y) / 2.0,
                    (box.min.z + box.max.z) / 2.0
                );

                result.radius = Vector3.distance(result.center, box.max);
            });

        return BoundingSphere.createFromBoundingBox.apply(this, params);
    }

    /**
     * 创建可包含一个指定 BoundingFrustum 的最小 BoundingSphere。
     * @param frustum 用于创建 BoundingSphere 的 BoundingFrustum。
     * @returns BoundingSphere 实例。
     */
    public static createFromFrustum(frustum: BoundingFrustum): BoundingSphere;
    public static createFromFrustum(...params: any): any {
        BoundingSphere.createFromFrustum = overload([BoundingFrustum], function (frustum) {
            return BoundingSphere.createFromPoints(frustum.getCorners());
        });

        return BoundingSphere.createFromFrustum.apply(this, params);
    }

    /**
     * 创建一个可包含指定的点列表的 BoundingSphere。
     * @param points BoundingSphere 必须包含的点的列表。
     * @returns BoundingSphere 实例。
     */
    public static createFromPoints(points: List<Vector3>): BoundingSphere;
    public static createFromPoints(...params: any): any {
        BoundingSphere.createFromPoints = overload([List.T(Vector3)], function (points) {
            if (points.length === 0) {
                throw new Error("points 中应至少包含一个点。");
            }

            let min = new Vector3(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
            let max = new Vector3(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);

            for (const pt of points) {
                min.x = Math.min(min.x, pt.x);
                max.x = Math.max(max.x, pt.x);
                min.y = Math.min(min.y, pt.y);
                max.y = Math.max(max.y, pt.y);
                min.z = Math.min(min.z, pt.z);
                max.z = Math.max(max.z, pt.z);
            }

            const sqDistX = Vector3.distanceSquared(new Vector3(min.x, 0, 0), new Vector3(max.x, 0, 0));
            const sqDistY = Vector3.distanceSquared(new Vector3(0, min.y, 0), new Vector3(0, max.y, 0));
            const sqDistZ = Vector3.distanceSquared(new Vector3(0, 0, min.z), new Vector3(0, 0, max.z));

            if (sqDistY > sqDistX && sqDistY > sqDistZ) {
                min = new Vector3(0, min.y, 0);
                max = new Vector3(0, max.y, 0);
            } else if (sqDistZ > sqDistX && sqDistZ > sqDistY) {
                min = new Vector3(0, 0, min.z);
                max = new Vector3(0, 0, max.z);
            } else {
                min = new Vector3(min.x, 0, 0);
                max = new Vector3(max.x, 0, 0);
            }

            let center = Vector3.multiply(Vector3.add(min, max), 0.5);
            let radius = Vector3.distance(max, center);
            let sqRadius = radius * radius;

            for (const pt of points) {
                const diff = Vector3.subtract(pt, center);
                const sqDist = diff.lengthSquared();
                if (sqDist > sqRadius) {
                    const distance = Math.sqrt(sqDist);
                    const direction = Vector3.divide(diff, distance);
                    const g = Vector3.subtract(center, Vector3.multiply(direction, radius));
                    center = Vector3.divide(Vector3.add(g, pt), 2);
                    radius = Vector3.distance(pt, center);
                    sqRadius = radius * radius;
                }
            }

            return new BoundingSphere(center, radius);
        });

        return BoundingSphere.createFromPoints.apply(this, params);
    }

    /**
     * 创建包含两个指定 BoundingSphere 实例的 BoundingSphere。
     * @param original 要合并的 BoundingSphere。
     * @param additional 要合并的 BoundingSphere。
     * @returns 合并后的 BoundingSphere 实例。
     */
    public static createMerged(
        original: BoundingSphere,
        additional: BoundingSphere
    ): BoundingSphere;
    /**
     * 创建包含两个指定 BoundingSphere 实例的 BoundingSphere。
     * @param original 要合并的 BoundingSphere。
     * @param additional 要合并的 BoundingSphere。
     * @param result [OutAttribute] 创建的 BoundingSphere。
     */
    public static createMerged(
        original: BoundingSphere,
        additional: BoundingSphere,
        result: BoundingSphere
    ): void;
    public static createMerged(...params: any): any {
        BoundingSphere.createMerged = overload()
            .add([BoundingSphere, BoundingSphere], function (original, additional) {
                let oCenterToACenter = Vector3.subtract(additional.#center, original.#center);
                const distance = oCenterToACenter.length();

                if (distance <= original.#radius + additional.#radius) {
                    if (distance <= original.#radius - additional.#radius) {
                        return new BoundingSphere(original.#center, original.#radius);
                    }

                    if (distance <= additional.#radius - original.#radius) {
                        return new BoundingSphere(additional.#center, additional.#radius);
                    }
                }

                const leftRadius = Math.max(original.#radius - distance, additional.#radius);
                const rightRadius = Math.max(original.#radius + distance, additional.#radius);
                const adjustmentFactor = (leftRadius - rightRadius) / (2 * distance);
                oCenterToACenter = Vector3.add(oCenterToACenter, Vector3.multiply(oCenterToACenter, adjustmentFactor));

                return new BoundingSphere(
                    Vector3.add(original.#center, oCenterToACenter),
                    (leftRadius + rightRadius) / 2
                );
            })
            .add([BoundingSphere, BoundingSphere, BoundingSphere], function (original, additional, result) {
                let oCenterToACenter = Vector3.subtract(additional.#center, original.#center);
                const distance = oCenterToACenter.length();

                if (distance <= original.#radius + additional.#radius) {
                    if (distance <= original.#radius - additional.#radius) {
                        result.#center = original.#center;
                        result.#radius = original.#radius;
                        return;
                    }

                    if (distance <= additional.#radius - original.#radius) {
                        result.#center = additional.#center;
                        result.#radius = additional.#radius;
                        return;
                    }
                }

                const leftRadius = Math.max(original.#radius - distance, additional.#radius);
                const rightRadius = Math.max(original.#radius + distance, additional.#radius);
                const adjustmentFactor = (leftRadius - rightRadius) / (2 * distance);
                oCenterToACenter = Vector3.add(oCenterToACenter, Vector3.multiply(oCenterToACenter, adjustmentFactor));

                result.#center = Vector3.add(original.#center, oCenterToACenter);
                result.#radius = (leftRadius + rightRadius) / 2;
            });

        return BoundingSphere.createMerged.apply(this, params);
    }

    /**
     * 确定指定的 BoundingSphere 是否等于当前 BoundingSphere。
     * @param other 用于与当前 BoundingSphere 比较的 BoundingSphere。
     * @returns 是否相等。
     */
    public ["=="](other: BoundingSphere): boolean;
    public ["=="](...params: any): any {
        return this.equals.apply(this, params);
    }

    /**
     * 确定指定的 BoundingSphere 是否不等于当前 BoundingSphere。
     * @param other 用于与当前 BoundingSphere 比较的 BoundingSphere。
     * @returns 是否不相等。
     */
    public ["!="](other: BoundingSphere): boolean;
    public ["!="](...params: any): any {
        return !this.equals.apply(this, params);
    }

    /**
     * 检查当前 BoundingSphere 中是否包含指定的 BoundingBox。
     * @param box 根据当前 BoundingSphere 检查的 BoundingBox。
     * @returns 测试包含结果。
     */
    public contains(box: BoundingBox): ContainmentType;
    /**
     * 检查当前 BoundingSphere 中是否包含指定的 BoundingFrustum。
     * @param frustum 根据当前 BoundingSphere 检查的 BoundingFrustum。
     * @returns 测试包含结果。
     */
    public contains(frustum: BoundingFrustum): ContainmentType;
    /**
     * 检查当前 BoundingSphere 中是否包含指定的 BoundingSphere。
     * @param sphere 根据当前 BoundingSphere 检查的 BoundingSphere。
     * @returns 测试包含结果。
     */
    public contains(sphere: BoundingSphere): ContainmentType;
    /**
     * 检查当前 BoundingSphere 中是否包含指定的点。
     * @param point 根据当前 BoundingSphere 检查的点。
     * @returns 测试包含结果。
     */
    public contains(point: Vector3): ContainmentType;
    public contains(...params: any): any {
        BoundingSphere.prototype.contains = overload()
            .add([BoundingBox], function (this: BoundingSphere, box) {
                let inside = true;
                const corners = box.getCorners();
                corners.forEach(corner => {
                    if (this.contains(corner) === ContainmentType.disjoint) {
                        inside = false;
                    }
                });

                if (inside) {
                    return ContainmentType.contains;
                }

                let dmin = 0;

                const calculateDistance = (centerCoord: number, minCoord: number, maxCoord: number): number => {
                    if (centerCoord < minCoord) {
                        return (centerCoord - minCoord) * (centerCoord - minCoord);
                    } else if (centerCoord > maxCoord) {
                        return (centerCoord - maxCoord) * (centerCoord - maxCoord);
                    }
                    return 0;
                };

                dmin += calculateDistance(this.#center.x, box.min.x, box.max.x);
                dmin += calculateDistance(this.#center.y, box.min.y, box.max.y);
                dmin += calculateDistance(this.#center.z, box.min.z, box.max.z);

                if (dmin <= this.#radius ** 2) {
                    return ContainmentType.intersects;
                }

                return ContainmentType.disjoint;
            })
            .add([BoundingFrustum], function (this: BoundingSphere, frustum) {
                let inside = true;
                const corners = frustum.getCorners();
                for (var i = 0; i < corners.length; i++) {
                    if (this.contains(corners[i]) === ContainmentType.disjoint) {
                        inside = false;
                        break;
                    }
                }

                if (inside) return ContainmentType.contains;

                if (frustum.intersects(this)) {
                    return ContainmentType.intersects;
                }

                return ContainmentType.disjoint;
            })
            .add([BoundingSphere], function (this: BoundingSphere, sphere) {
                const sqDistance = Vector3.distanceSquared(sphere.#center, this.#center);
                const radiusSum = sphere.#radius + this.#radius;
                const radiusDiff = this.#radius - sphere.#radius;

                if (sqDistance > radiusSum * radiusSum) return ContainmentType.disjoint;
                else if (radiusDiff >= 0 && sqDistance <= radiusDiff * radiusDiff) return ContainmentType.contains;
                else return ContainmentType.intersects;
            })
            .add([Vector3], function (this: BoundingSphere, point) {
                const sqRadius = this.#radius ** 2;
                const sqDistance = Vector3.distanceSquared(point, this.#center);

                if (sqDistance > sqRadius) return ContainmentType.disjoint;
                else if (sqDistance < sqRadius) return ContainmentType.contains;
                else return ContainmentType.intersects;
            });

        return BoundingSphere.prototype.contains.apply(this, params);
    }

    /**
     * 确定指定的 BoundingSphere 是否等于当前 BoundingSphere。
     * @param other 用于与当前 BoundingSphere 比较的 BoundingSphere。
     * @returns 是否相等。
     */
    public equals(other: BoundingSphere): boolean;
    public equals(...params: any): any {
        BoundingSphere.prototype.equals = overload([BoundingSphere], function (this: BoundingSphere, other) {
            return this.#center.equals(other.#center) && this.#radius === other.#radius;
        }).any(() => false);

        return BoundingSphere.prototype.equals.apply(this, params);
    }

    /**
     * 检查当前 BoundingSphere 是否与指定的 Plane 相交。
     * @param plane 检索与当前 BoundingSphere 之间交集的 Plane。
     * @returns 测试相交结果。
     */
    public intersects(plane: Plane): PlaneIntersectionType;
    /**
     * 检查当前 BoundingSphere 是否与指定的 BoundingBox 相交。
     * @param box 要检查与当前 BoundingBox 是否相交的 BoundingSphere。
     * @returns 是否相交。
     */
    public intersects(box: BoundingBox): boolean;
    /**
     * 检查当前 BoundingSphere 是否与指定的 BoundingFrustum 相交。
     * @param frustum 检查与当前 BoundingFrustum 之间交集的 BoundingFrustum。
     * @returns 是否相交。
     */
    public intersects(frustum: BoundingFrustum): boolean;
    /**
     * 检查当前 BoundingSphere 是否与指定的 BoundingSphere 相交。
     * @param sphere 检查与当前 BoundingSphere 之间交集的 BoundingSphere。
     * @returns 是否相交。
     */
    public intersects(sphere: BoundingSphere): boolean;
    /**
     * 检查当前 BoundingSphere 是否与指定的 Ray 相交。
     * @param ray 要检查与当前 Ray 是否相交的 BoundingSphere。
     * @returns 如果相交则返回长度，否则为 null
     */
    public intersects(ray: Ray): number | null;
    public intersects(...params: any): any {
        BoundingSphere.prototype.intersects = overload()
            .add([Plane], function (this: BoundingSphere, plane) {
                let distance = Vector3.dot(plane.normal, this.#center);
                distance += plane.d;
                if (distance > this.#radius) return PlaneIntersectionType.front;
                else if (distance < -this.#radius) return PlaneIntersectionType.back;
                else return PlaneIntersectionType.intersecting;
            })
            .add([BoundingBox], function (this: BoundingSphere, box) {
                return box.intersects(this);
            })
            .add([BoundingFrustum], function (this: BoundingSphere, frustum) {
                return frustum.intersects(this);
            })
            .add([BoundingSphere], function (this: BoundingSphere, sphere) {
                const sqDistance = Vector3.distanceSquared(sphere.#center, this.#center);

                if (sqDistance > (sphere.#radius + this.#radius) ** 2) return false;
                else return true;
            })
            .add([Ray], function (this: BoundingSphere, ray) {
                return ray.intersects(this);
            });

        return BoundingSphere.prototype.intersects.apply(this, params);
    }

    /**
     * 使用给定 Matrix 平移和缩放 BoundingSphere。
     * @param matrix 可能包含平移、旋转或统一缩放的变换矩阵。请注意，如果在此变换矩阵中存在非统一缩放、修剪或其他异常变换，BoundingSphere.transform 将不会返回正确的结果。导致此情况的原因是无法对球体进行修剪或非统一缩放。这种操作可导致球体丢失其形状。
     * @returns 变换后的 BoundingSphere 实例。
     */
    public transform(matrix: Matrix): BoundingSphere;
    /**
     * 使用给定 Matrix 平移和缩放 BoundingSphere。
     * @param matrix 可能包含平移、旋转或统一缩放的变换矩阵。请注意，如果在此变换矩阵中存在非统一缩放、修剪或其他异常变换，BoundingSphere.transform 将不会返回正确的结果。导致此情况的原因是无法对球体进行修剪或非统一缩放。这种操作可导致球体丢失其形状。
     * @param result [OutAttribute] 变换的 BoundingSphere。
     */
    public transform(matrix: Matrix, result: BoundingSphere): void;
    public transform(...params: any): any {
        BoundingSphere.prototype.transform = overload()
            .add([Matrix], function (this: BoundingSphere, matrix) {
                const sphere = new BoundingSphere();
                sphere.#center = Vector3.transform(this.#center, matrix);

                const m11 = matrix.m11, m12 = matrix.m12, m13 = matrix.m13;
                const m21 = matrix.m21, m22 = matrix.m22, m23 = matrix.m23;
                const m31 = matrix.m31, m32 = matrix.m32, m33 = matrix.m33;

                const max1 = Math.max((m11 * m11) + (m12 * m12) + (m13 * m13),
                    (m21 * m21) + (m22 * m22) + (m23 * m23));
                const max2 = Math.max(max1, (m31 * m31) + (m32 * m32) + (m33 * m33));

                sphere.#radius = this.#radius * Math.sqrt(max2);

                return sphere;
            })
            .add([Matrix, BoundingSphere], function (this: BoundingSphere, matrix, result) {
                result.#center = Vector3.transform(this.#center, matrix);

                const m11 = matrix.m11, m12 = matrix.m12, m13 = matrix.m13;
                const m21 = matrix.m21, m22 = matrix.m22, m23 = matrix.m23;
                const m31 = matrix.m31, m32 = matrix.m32, m33 = matrix.m33;

                const max1 = Math.max((m11 * m11) + (m12 * m12) + (m13 * m13),
                    (m21 * m21) + (m22 * m22) + (m23 * m23));
                const max2 = Math.max(max1, (m31 * m31) + (m32 * m32) + (m33 * m33));

                result.#radius = this.#radius * Math.sqrt(max2);
            });

        return BoundingSphere.prototype.transform.apply(this, params);
    }

    /**
     * 返回呈现当前 BoundingSphere 的 String。
     * @returns 呈现当前 BoundingSphere 的 String。
     */
    public toString(): string;
    public toString(...params: any): any {
        BoundingSphere.prototype.toString = overload([], function (this: BoundingSphere) {
            return JSON.stringify(this);
        });

        return BoundingSphere.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 BoundingSphere 的 JSON 表示形式。
     * @returns 当前 BoundingSphere 的 JSON 表示形式。
     */
    public toJSON(): object {
        return {
            center: this.#center.toJSON(),
            radius: this.#radius
        };
    }
}
