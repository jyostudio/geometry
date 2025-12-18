import overload from "@jyostudio/overload";
import { lazyCheckSetterType } from "@jyostudio/overload/dist/decorator";
import BoundingBox from "./bounding-box";
import BoundingFrustum from "./bounding-frustum";
import BoundingSphere from "./bounding-sphere";
import Plane from "./plane";
import Vector3 from "./vector3";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 定义一条射线。
 * @class
 */
export default class Ray {
    /**
     * Ray 所指方向的单位矢量。
     */
    #direction: Vector3 | null = null;

    /**
     * 获取 Ray 所指方向的单位矢量。
     */
    public get direction(): Vector3 {
        return this.#direction!;
    }

    /**
     * 设置 Ray 所指方向的单位矢量。
     */
    @lazyCheckSetterType(() => Vector3)
    public set direction(value: Vector3) {
        this.#direction = value;
    }

    /**
     * Ray 的起点。
     */
    #position: Vector3 | null = null;

    /**
     * 获取 Ray 的起点。
     */
    public get position(): Vector3 {
        return this.#position!;
    }

    /**
     * 设置 Ray 的起点。
     */
    @lazyCheckSetterType(() => Vector3)
    public set position(value: Vector3) {
        this.#position = value;
    }

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
    constructor(...params: any) {
        Ray[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    /**
     * 结构化构造函数。
     * @returns Ray 实例。
     */
    public static ["##STRUCT_CONSTRUCTOR##"]() {
        return new Ray();
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        Ray[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function (this: Ray) {
                this.#position = Vector3.zero;
                this.#direction = Vector3.zero;
            })
            .add([Vector3, Vector3], function (this: Ray, position, direction) {
                this.#position = position;
                this.#direction = direction;
            });

        return Ray[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    public *[Symbol.iterator](): IterableIterator<Vector3> {
        yield this.#position!;
        yield this.#direction!;
    }

    /**
     * 确定指定的 Ray 是否等于当前 Ray。
     * @param other 用于与当前 Ray 比较的 Ray。
     * @returns 是否相等。
     */
    public ["=="](other: Ray): boolean;
    public ["=="](...params: any): any {
        return this.equals.apply(this, params);
    }

    /**
     * 确定指定的 Ray 是否不等于当前 Ray。
     * @param other 用于与当前 Ray 比较的 Ray。
     * @returns 是否不相等。
     */
    public ["!="](other: Ray): boolean;
    public ["!="](...params: any): any {
        return !this.equals.apply(this, params);
    }

    /**
     * 检查 Ray 是否与指定的 BoundingBox 相交。
     * @param box 要检查与 Ray 是否相交的 BoundingBox。
     * @returns 如果相交则返回长度，否则为 null。
     */
    public intersects(box: BoundingBox): number | null;
    /**
     * 检查 Ray 是否与指定的 BoundingFrustum 相交。
     * @param frustum 检查与 Ray 之间交集的 BoundingFrustum。
     * @returns 如果相交则返回长度，否则为 null。
     */
    public intersects(frustum: BoundingFrustum): number | null;
    /**
     * 检查 Ray 是否与指定的 BoundingSphere 相交。
     * @param sphere 检查与 Ray 的相交性的 BoundingSphere。
     * @returns 如果相交则返回长度，否则为 null。
     */
    public intersects(sphere: BoundingSphere): number | null;
    /**
     * 确定该 Ray 是否与指定的 Plane 相交。
     * @param plane 用于计算与该 Ray 交集的 Plane。
     * @returns 如果相交则返回长度，否则为 null。
     */
    public intersects(plane: Plane): number | null;
    public intersects(...params: any): any {
        Ray.prototype.intersects = overload()
            .add([BoundingBox], function (this: Ray, box) {
                let tMin = -Infinity;
                let tMax = Infinity;
                const positionX = this.#position!.x, positionY = this.#position!.y, positionZ = this.#position!.z;
                const directionX = this.#direction!.x, directionY = this.#direction!.y, directionZ = this.#direction!.z;

                const checkAxis = (position: number, direction: number, min: number, max: number): boolean => {
                    if (Math.abs(direction) < Number.EPSILON) {
                        if (position < min || position > max) return false;
                    } else {
                        let t1 = (min - position) / direction;
                        let t2 = (max - position) / direction;
                        if (t1 > t2) [t1, t2] = [t2, t1];
                        if (t1 > tMin) tMin = t1;
                        if (t2 < tMax) tMax = t2;
                        if (tMin > tMax) return false;
                    }
                    return true;
                };

                if (!checkAxis(positionX, directionX, box.min.x, box.max.x) ||
                    !checkAxis(positionY, directionY, box.min.y, box.max.y) ||
                    !checkAxis(positionZ, directionZ, box.min.z, box.max.z)) {
                    return null;
                }

                if (tMin < 0 && tMax > 0) return 0;

                return tMin < 0 ? null : tMin;
            })
            .add([BoundingFrustum], function (this: Ray, frustum) {
                return frustum.intersects(this);
            })
            .add([BoundingSphere], function (this: Ray, sphere) {
                const difference = Vector3.subtract(sphere.center, this.#position!);

                const differenceLengthSquared = difference.lengthSquared();
                const sphereRadiusSquared = sphere.radius * sphere.radius;

                if (differenceLengthSquared < sphereRadiusSquared) return 0;

                const distanceAlongRay = Vector3.dot(this.#direction!, difference);

                if (distanceAlongRay < 0) return null;

                const dist = sphereRadiusSquared + distanceAlongRay * distanceAlongRay - differenceLengthSquared;

                return (dist < 0) ? null : distanceAlongRay - Math.sqrt(dist);
            })
            .add([Plane], function (this: Ray, plane) {
                const den = Vector3.dot(this.#direction!, plane.normal);
                if (Math.abs(den) < 0.00001) return null;

                let result = (-plane.d - Vector3.dot(plane.normal, this.#position!)) / den;

                if (result < 0.0) {
                    if (result < -0.00001) return null;
                    result = 0.0;
                }

                return result;
            });

        return Ray.prototype.intersects.apply(this, params);
    }

    /**
     * 确定指定的 Ray 是否等于当前 Ray。
     * @param other 用于与当前 Ray 比较的 Ray。
     * @returns 是否相等。
     */
    public equals(other: Ray): boolean;
    public equals(...params: any): any {
        Ray.prototype.equals = overload([Ray], function (this: Ray, other) {
            return this.#direction!.equals(other.#direction!) && this.#position!.equals(other.#position!);
        }).any(() => false);

        return Ray.prototype.equals.apply(this, params);
    }

    /**
     * 返回呈现当前 Ray 的 String。
     * @returns 呈现当前 Ray 的 String。
     */
    public toString(): string;
    public toString(...params: any): any {
        Ray.prototype.toString = overload([], function (this: Ray) {
            return JSON.stringify(this);
        });

        return Ray.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 Ray 的 JSON 表示形式。
     * @returns 当前 Ray 的 JSON 表示形式。
     */
    public toJSON() {
        return {
            position: this.#position,
            direction: this.#direction
        };
    }
}
