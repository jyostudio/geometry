import List from "@jyostudio/list";
import overload from "@jyostudio/overload";
import { lazyCheckSetterType } from "@jyostudio/overload/dist/decorator";
import BoundingFrustum from "./bounding-frustum";
import BoundingSphere from "./bounding-sphere";
import ContainmentType from "./containment-type";
import Plane from "./plane";
import PlaneIntersectionType from "./plane-intersection-type";
import Ray from "./ray";
import Vector3 from "./vector3";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 定义通过轴对齐的盒形 3D 物体。
 * @class
 */
export default class BoundingBox {
    /**
     * 指定 BoundingBox 中的角点总数 (8)。
     */
    public static get cornerCount(): number {
        return 8;
    }

    /**
     * BoundingBox 可能包含的最多点。
     */
    static get #maxVector3(): Vector3 {
        return new Vector3(Number.MAX_SAFE_INTEGER);
    }

    /**
     * BoundingBox 可能包含的最少点。
     */
    static get #minVector3(): Vector3 {
        return new Vector3(Number.MIN_SAFE_INTEGER);
    }

    /**
     * BoundingBox 包含的最多点。
     */
    #max: Vector3 = null!;

    /**
     * 获取BoundingBox 包含的最多点。
     */
    public get max(): Vector3 {
        return this.#max;
    }

    /**
     * 设置BoundingBox 包含的最多点。
     */
    @lazyCheckSetterType(() => Vector3)
    public set max(value: Vector3) {
        this.#max = value;
    }

    /**
     * BoundingBox 包含的最少点。
     */
    #min: Vector3 = null!;

    /**
     * 获取 BoundingBox 包含的最少点。
     */
    public get min(): Vector3 {
        return this.#min;
    }

    /**
     * 设置 BoundingBox 包含的最少点。
     */
    @lazyCheckSetterType(() => Vector3)
    public set min(value: Vector3) {
        this.#min = value;
    }

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
    constructor(...params: any) {
        BoundingBox[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    /**
     * 结构化构造函数。
     * @returns BoundingBox 实例。
     */
    public static ["##STRUCT_CONSTRUCTOR##"]() {
        return new BoundingBox();
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        BoundingBox[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function (this: BoundingBox) {
                this.#min = Vector3.zero;
                this.#max = Vector3.zero;
            })
            .add([Vector3, Vector3], function (this: BoundingBox, min, max) {
                this.#min = min;
                this.#max = max;
            });

        return BoundingBox[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    public *[Symbol.iterator](): IterableIterator<Vector3> {
        yield this.#min;
        yield this.#max;
    }

    /**
     * 创建包含一个点组的最小 BoundingBox。
     * @param points BoundingBox 应包含的点的列表。
     * @returns BoundingBox 的实例。
     */
    public static createFromPoints(points: List<Vector3>): BoundingBox;
    public static createFromPoints(...params: any): any {
        BoundingBox.createFromPoints = overload([List.T(Vector3)], function (points) {
            let empty = true;
            const minVec = BoundingBox.#maxVector3, maxVec = BoundingBox.#minVector3;
            for (let i = 0; i < points.length; i++) {
                const { x: px, y: py, z: pz } = points[i];
                minVec.x = (minVec.x < px) ? minVec.x : px;
                minVec.y = (minVec.y < py) ? minVec.y : py;
                minVec.z = (minVec.z < pz) ? minVec.z : pz;

                maxVec.x = (maxVec.x > px) ? maxVec.x : px;
                maxVec.y = (maxVec.y > py) ? maxVec.y : py;
                maxVec.z = (maxVec.z > pz) ? maxVec.z : pz;

                empty = false;
            }

            if (empty) {
                throw new RangeError("列表中没有点。");
            }

            return new BoundingBox(minVec, maxVec);
        });

        return BoundingBox.createFromPoints.apply(this, params);
    }

    /**
     * 创建包含指定 BoundingSphere 的最小 BoundingBox。
     * @param sphere 要包含的 BoundingSphere。
     * @returns BoundingBox 的实例。
     */
    public static createFromSphere(sphere: BoundingSphere): BoundingBox;
    /**
     * 创建包含指定 BoundingSphere 的最小 BoundingBox。
     * @param sphere 要包含的 BoundingSphere。
     * @param result [OutAttribute] 创建的 BoundingBox。
     */
    public static createFromSphere(sphere: BoundingSphere, result: BoundingBox): void;
    public static createFromSphere(...params: any): any {
        BoundingBox.createFromSphere = overload()
            .add([BoundingSphere], function (sphere) {
                const corner = new Vector3(sphere.radius);
                return new BoundingBox(
                    Vector3.subtract(sphere.center, corner),
                    Vector3.add(sphere.center, corner)
                );
            })
            .add([BoundingSphere, BoundingBox], function (sphere, result) {
                const corner = new Vector3(sphere.radius);
                result.min = Vector3.subtract(sphere.center, corner);
                result.max = Vector3.add(sphere.center, corner);
            });

        return BoundingBox.createFromSphere.apply(this, params);
    }

    /**
     * 创建包含两个指定 BoundingBox 实例的最小 BoundingBox。
     * @param original 要包含的一个 BoundingBox。
     * @param additional 要包含的一个 BoundingBox。
     * @returns BoundingBox 的实例。
     */
    public static createMerged(original: BoundingBox, additional: BoundingBox): BoundingBox;
    /**
     * 创建包含两个指定 BoundingBox 实例的最小 BoundingBox。
     * @param original 要包含的一个 BoundingBox。
     * @param additional 要包含的一个 BoundingBox。
     * @param result [OutAttribute] 创建的 BoundingBox。
     */
    public static createMerged(original: BoundingBox, additional: BoundingBox, result: BoundingBox): void;
    public static createMerged(...params: any): any {
        BoundingBox.createMerged = overload()
            .add([BoundingBox, BoundingBox], function (original, additional) {
                const oMin = original.#min, oMax = original.#max;
                const aMin = additional.#min, aMax = additional.#max;

                const vec3Min = new Vector3(
                    Math.min(oMin.x, aMin.x),
                    Math.min(oMin.y, aMin.y),
                    Math.min(oMin.z, aMin.z)
                );

                const vec3Max = new Vector3(
                    Math.max(oMax.x, aMax.x),
                    Math.max(oMax.y, aMax.y),
                    Math.max(oMax.z, aMax.z)
                );

                return new BoundingBox(vec3Min, vec3Max);
            })
            .add([BoundingBox, BoundingBox, BoundingBox], function (original, additional, result) {
                const oMin = original.#min, oMax = original.#max;
                const aMin = additional.#min, aMax = additional.#max;

                result.min = new Vector3(
                    Math.min(oMin.x, aMin.x),
                    Math.min(oMin.y, aMin.y),
                    Math.min(oMin.z, aMin.z)
                );

                result.max = new Vector3(
                    Math.max(oMax.x, aMax.x),
                    Math.max(oMax.y, aMax.y),
                    Math.max(oMax.z, aMax.z)
                );
            });

        return BoundingBox.createMerged.apply(this, params);
    }

    /**
     * 确定指定的 BoundingBox 是否等于当前 BoundingBox。
     * @param other 用于与当前 BoundingBox 比较的 BoundingBox。
     * @returns 是否相等。
     */
    public ["=="](other: BoundingBox): boolean;
    public ["=="](...params: any): any {
        return this.equals.apply(this, params);
    }

    /**
     * 确定指定的 BoundingBox 是否不等于当前 BoundingBox。
     * @param other 用于与当前 BoundingBox 比较的 BoundingBox。
     * @returns 是否不相等。
     */
    public ["!="](other: BoundingBox): boolean;
    public ["!="](...params: any): any {
        return !this.equals.apply(this, params);
    }

    /**
     * 测试 BoundingBox 中是否包含其他 BoundingBox。
     * @param box 用于重叠测试的 BoundingBox。
     * @returns 测试包含的结果。
     */
    public contains(box: BoundingBox): ContainmentType;
    /**
     * 测试 BoundingBox 中是否包含 BoundingFrustum。
     * @param frustum 用于重叠测试的 BoundingFrustum。
     * @returns 测试包含的结果。
     */
    public contains(frustum: BoundingFrustum): ContainmentType;
    /**
     * 测试 BoundingBox 中是否包含 BoundingSphere。
     * @param sphere 用于重叠测试的 BoundingSphere。
     * @returns 测试包含的结果。
     */
    public contains(sphere: BoundingSphere): ContainmentType;
    /**
     * 测试 BoundingBox 中是否包含点。
     * @param point 用于重叠测试的点。
     * @returns 测试包含的结果。
     */
    public contains(point: Vector3): ContainmentType;
    public contains(...params: any): any {
        BoundingBox.prototype.contains = overload()
            .add([BoundingBox], function (this: BoundingBox, box) {
                const bMin = box.#min, bMax = box.#max;
                const min = this.#min, max = this.#max;
                if (bMax.x < min.x ||
                    bMin.x > max.x ||
                    bMax.y < min.y ||
                    bMin.y > max.y ||
                    bMax.z < min.z ||
                    bMin.z > max.z) {
                    return ContainmentType.disjoint;
                }


                if (bMin.x >= min.x &&
                    bMax.x <= max.x &&
                    bMin.y >= min.y &&
                    bMax.y <= max.y &&
                    bMin.z >= min.z &&
                    bMax.z <= max.z) {
                    return ContainmentType.contains;
                }

                return ContainmentType.intersects;
            })
            .add([BoundingFrustum], function (this: BoundingBox, frustum) {
                const corners = frustum.getCorners();
                let i;
                for (i = 0; i < corners.length; i++) {
                    if (this.contains(corners[i]) === ContainmentType.disjoint) {
                        break;
                    }
                }

                if (i === corners.length) {
                    return ContainmentType.contains;
                }

                if (this.intersects(frustum)) {
                    return ContainmentType.intersects;
                }

                return ContainmentType.disjoint;
            })
            .add([BoundingSphere], function (this: BoundingBox, sphere) {
                const r = sphere.radius;
                const sphereCenter = sphere.center;
                const cx = sphereCenter.x, cy = sphereCenter.y, cz = sphereCenter.z;
                const minx = this.#min.x, miny = this.#min.y, minz = this.#min.z;
                const maxx = this.#max.x, maxy = this.#max.y, maxz = this.#max.z;

                if (cx - minx >= r && cy - miny >= r && cz - minz >= r &&
                    maxx - cx >= r && maxy - cy >= r && maxz - cz >= r) {
                    return ContainmentType.contains;
                }

                let dmin = 0;
                const coords = [
                    { c: cx, min: minx, max: maxx },
                    { c: cy, min: miny, max: maxy },
                    { c: cz, min: minz, max: maxz }
                ];

                for (const { c, min, max } of coords) {
                    let e = c - min;
                    if (e < 0) {
                        if (e < -r) {
                            return ContainmentType.disjoint;
                        }
                        dmin += e * e;
                    } else {
                        e = c - max;
                        if (e > 0) {
                            if (e > r) {
                                return ContainmentType.disjoint;
                            }
                            dmin += e * e;
                        }
                    }
                }

                if (dmin <= r * r) {
                    return ContainmentType.intersects;
                }

                return ContainmentType.disjoint;
            })
            .add([Vector3], function (this: BoundingBox, point) {
                const px = point.x, py = point.y, pz = point.z;
                const minx = this.#min.x, miny = this.#min.y, minz = this.#min.z;
                const maxx = this.#max.x, maxy = this.#max.y, maxz = this.#max.z;

                if (px < minx ||
                    px > maxx ||
                    py < miny ||
                    py > maxy ||
                    pz < minz ||
                    pz > maxz) {
                    return ContainmentType.disjoint;
                }

                if (px == minx ||
                    px == maxx ||
                    py == miny ||
                    py == maxy ||
                    pz == minz ||
                    pz == maxz) {
                    return ContainmentType.intersects;
                }

                return ContainmentType.contains;
            });

        return BoundingBox.prototype.contains.apply(this, params);
    }

    /**
     * 确定指定的 BoundingBox 是否等于当前 BoundingBox。
     * @param other 用于与当前 BoundingBox 比较的 BoundingBox。
     * @returns 是否相等。
     */
    public equals(other: BoundingBox): boolean;
    public equals(...params: any): any {
        BoundingBox.prototype.equals = overload([BoundingBox], function (this: BoundingBox, box) {
            return this.#min.equals(box.#min) && this.#max.equals(box.#max);
        }).any(() => false);

        return BoundingBox.prototype.equals.apply(this, params);
    }

    /**
     * 获取组成 BoundingBox 角点的数据点数组。
     * @returns 数据点数组。
     */
    public getCorners(): List<Vector3>;
    /**
     * 获取组成 BoundingBox 角点的数据点数组。
     * @param corners 至少具备 8 个 Vector3 数据点的现有数组，此数组可以用来写入 BoundingBox 角点。
     */
    public getCorners(corners: List<Vector3>): void;
    public getCorners(...params: any): any {
        BoundingBox.prototype.getCorners = overload()
            .add([], function (this: BoundingBox) {
                const minx = this.#min.x, miny = this.#min.y, minz = this.#min.z;
                const maxx = this.#max.x, maxy = this.#max.y, maxz = this.#max.z;
                return new List(Vector3, [
                    new Vector3(minx, maxy, maxz),
                    new Vector3(maxx, maxy, maxz),
                    new Vector3(maxx, miny, maxz),
                    new Vector3(minx, miny, maxz),
                    new Vector3(minx, maxy, minz),
                    new Vector3(maxx, maxy, minz),
                    new Vector3(maxx, miny, minz),
                    new Vector3(minx, miny, minz)
                ]);
            })
            .add([List.T(Vector3)], function (this: BoundingBox, corners) {
                if (corners.length < 8) {
                    throw new RangeError("列表必须至少有 8 个元素。");
                }

                const minx = this.#min.x, miny = this.#min.y, minz = this.#min.z;
                const maxx = this.#max.x, maxy = this.#max.y, maxz = this.#max.z;

                const offsets = [
                    { x: minx, y: maxy, z: maxz },
                    { x: maxx, y: maxy, z: maxz },
                    { x: maxx, y: miny, z: maxz },
                    { x: minx, y: miny, z: maxz },
                    { x: minx, y: maxy, z: minz },
                    { x: maxx, y: maxy, z: minz },
                    { x: maxx, y: miny, z: minz },
                    { x: minx, y: miny, z: minz }
                ];

                for (let i = 0; i < 8; i++) {
                    corners[i].x = offsets[i].x;
                    corners[i].y = offsets[i].y;
                    corners[i].z = offsets[i].z;
                }
            });

        return BoundingBox.prototype.getCorners.apply(this, params);
    }

    /**
     * 检查当前 BoundingBox 是否与其他 BoundingBox 相交。
     * @param box 用于相交检查的 BoundingBox。
     * @returns 是否相交。
     */
    public intersects(box: BoundingBox): boolean;
    /**
     * 检查当前 BoundingBox 是否与某个 BoundingFrustum 相交。
     * @param frustum 用于相交检查的 BoundingFrustum。
     * @returns 是否相交。
     */
    public intersects(frustum: BoundingFrustum): boolean;
    /**
     * 检查当前 BoundingBox 是否与某个 BoundingSphere 相交。
     * @param sphere 用于相交检查的 BoundingSphere。
     * @returns 是否相交。
     */
    public intersects(sphere: BoundingSphere): boolean;
    /**
     * 检查当前 BoundingBox 是否与某个 Plane 相交。
     * @param plane 用于相交检查的 Plane。
     * @returns 测试相交结果。
     */
    public intersects(plane: Plane): PlaneIntersectionType;
    /**
     * 检查当前 BoundingBox 是否与某个 Ray 相交。
     * @param ray 用于相交检查的 Ray。
     * @returns 如果相交则返回长度，否则为 null。
     */
    public intersects(ray: Ray): number | null;
    public intersects(...params: any): any {
        BoundingBox.prototype.intersects = overload()
            .add([BoundingBox], function (this: BoundingBox, box) {
                const minx = this.#min.x, miny = this.#min.y, minz = this.#min.z;
                const maxx = this.#max.x, maxy = this.#max.y, maxz = this.#max.z;
                const bMinx = box.min.x, bMiny = box.min.y, bMinz = box.min.z;
                const bMaxx = box.max.x, bMaxy = box.max.y, bMaxz = box.max.z;
                if ((maxx >= bMinx) && (minx <= bMaxx)) {
                    if ((maxy < bMiny) || (miny > bMaxy)) return false;
                    return (maxz >= bMinz) && (minz <= bMaxz);
                }
                return false;
            })
            .add([BoundingFrustum], function (this: BoundingBox, frustum) {
                return frustum.intersects(this);
            })
            .add([BoundingSphere], function (this: BoundingBox, sphere) {
                return this.contains(sphere) !== ContainmentType.disjoint;
            })
            .add([Plane], function (this: BoundingBox, plane) {
                const positiveVertex = new Vector3();
                const negativeVertex = new Vector3();

                const planeNormal = plane.normal;
                const px = planeNormal.x, py = planeNormal.y, pz = planeNormal.z;
                const pd = plane.d;

                const minx = this.#min.x, miny = this.#min.y, minz = this.#min.z;
                const maxx = this.#max.x, maxy = this.#max.y, maxz = this.#max.z;

                const setVertexCoordinates = (planeNormalComponent: number, minComponent: number, maxComponent: number, positiveVertex: Vector3, negativeVertex: Vector3, axis: "x" | "y" | "z") => {
                    if (planeNormalComponent >= 0) {
                        positiveVertex[axis] = maxComponent;
                        negativeVertex[axis] = minComponent;
                    } else {
                        positiveVertex[axis] = minComponent;
                        negativeVertex[axis] = maxComponent;
                    }
                }

                setVertexCoordinates(px, minx, maxx, positiveVertex, negativeVertex, "x");
                setVertexCoordinates(py, miny, maxy, positiveVertex, negativeVertex, "y");
                setVertexCoordinates(pz, minz, maxz, positiveVertex, negativeVertex, "z");

                let distance = px * negativeVertex.x + py * negativeVertex.y + pz * negativeVertex.z + pd;
                if (distance > 0) return PlaneIntersectionType.front;

                distance = px * positiveVertex.x + py * positiveVertex.y + pz * positiveVertex.z + pd;
                if (distance < 0) return PlaneIntersectionType.back;

                return PlaneIntersectionType.intersecting;
            })
            .add([Ray], function (this: BoundingBox, ray) {
                return ray.intersects(this);
            });

        return BoundingBox.prototype.intersects.apply(this, params);
    }

    /**
     * 返回呈现当前 BoundingBox 的 String。
     * @returns 呈现当前 BoundingBox 的 String。
     */
    public toString(): string;
    public toString(...params: any): any {
        BoundingBox.prototype.toString = overload([], function (this: BoundingBox) {
            return JSON.stringify(this);
        });

        return BoundingBox.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 BoundingBox 的 JSON 表示形式。
     * @returns 当前 BoundingBox 的 JSON 表示形式。
     */
    public toJSON(): object {
        return {
            min: this.#min,
            max: this.#max
        };
    }
}
