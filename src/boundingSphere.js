import overload from "@jyostudio/overload";
import List from "@jyostudio/list";
import Vector3 from "./vector3.js";
import Matrix from "./matrix.js";
import Plane from "./plane.js";
import Ray from "./ray.js";
import BoundingBox from "./boundingBox.js";
import BoundingFrustum from "./boundingFrustum.js";
import ContainmentType from "./containmentType.js";
import PlaneIntersectionType from "./planeIntersectionType.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class BoundingSphere {
    #center = null;

    #radius = 0;

    static ["##STRUCT_CONSTURCTOR##"]() {
        return new BoundingSphere();
    }

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        BoundingSphere[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () {
                this.#center = Vector3.zero;
                this.#radius = 0;
            })
            .add([Vector3, Number], function (center, radius) {
                this.#center = center;
                this.#radius = radius;
            });

        return BoundingSphere[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        Object.defineProperties(this, {
            center: {
                get: () => this.#center,
                set: overload([Vector3], value => this.#center = value)
            },
            radius: {
                get: () => this.#radius,
                set: overload([Number], value => this.#radius = value)
            }
        });

        return BoundingSphere[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        yield this.#center;
        yield this.#radius;
    }

    static createFromBoundingBox(...params) {
        BoundingSphere.createFromBoundingBox = overload([BoundingBox], function (box) {
            const center = new Vector3(
                (box.min.x + box.max.x) / 2.0,
                (box.min.y + box.max.y) / 2.0,
                (box.min.z + box.max.z) / 2.0
            );

            const radius = Vector3.distance(center, box.max);

            return new BoundingSphere(center, radius);
        });

        return BoundingSphere.createFromBoundingBox.apply(this, params);
    }

    static createFromFrustum(...params) {
        BoundingSphere.createFromFrustum = overload([BoundingFrustum], function (frustum) {
            return this.createFromPoints(frustum.getCorners());
        });

        return BoundingSphere.createFromFrustum.apply(this, params);
    }

    static createFromPoints(...params) {
        BoundingSphere.createFromPoints = overload([List.T(Vector3)], function (points) {
            if (points.length === 0) {
                throw new Error("There should be at least one point in points.");
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

    static createMerged(...params) {
        BoundingSphere.createMerged = overload([BoundingSphere, BoundingSphere], function (original, additional) {
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
        });

        return BoundingSphere.createMerged.apply(this, params);
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    contains(...params) {
        BoundingSphere.prototype.contains = overload()
            .add([BoundingBox], function (box) {
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

                const calculateDistance = (centerCoord, minCoord, maxCoord) => {
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
            .add([BoundingFrustum], function (frustum) {
                let inside = true;
                const corners = frustum.getCorners();
                for (var i = 0; i < corners.length; i++) {
                    if (this.contains(corners[i]) === ContainmentType.disjoint) {
                        inside = false;
                        break;
                    }
                }

                if (inside) return ContainmentType.contains;

                let dmin = 0;

                if (dmin <= this.#radius ** 2) return ContainmentType.intersects;
                return ContainmentType.disjoint;
            })
            .add([BoundingSphere], function (sphere) {
                const sqDistance = Vector3.distanceSquared(sphere.#center, this.#center);
                const radiusSum = sphere.#radius + this.#radius;
                const radiusDiff = this.#radius - sphere.#radius;

                if (sqDistance > radiusSum * radiusSum) return ContainmentType.disjoint;
                else if (sqDistance <= radiusDiff * radiusDiff) return ContainmentType.contains;
                else return ContainmentType.intersects;
            })
            .add([Vector3], function (point) {
                const sqRadius = this.#radius ** 2;
                const sqDistance = Vector3.distanceSquared(point, this.#center);

                if (sqDistance > sqRadius) return ContainmentType.disjoint;
                else if (sqDistance < sqRadius) return ContainmentType.contains;
                else return ContainmentType.intersects;
            });

        return BoundingSphere.prototype.contains.apply(this, params);
    }

    equals(...params) {
        BoundingSphere.prototype.equals = overload([BoundingSphere], function (other) {
            return this.#center.equals(other.#center) && this.#radius === other.#radius;
        }).any(() => false);

        return BoundingSphere.prototype.equals.apply(this, params);
    }

    intersects(...params) {
        BoundingSphere.prototype.intersects = overload()
            .add([BoundingBox], function (box) {
                return box.intersects(this);
            })
            .add([BoundingFrustum], function (frustum) {
                return frustum.intersects(this);
            })
            .add([BoundingSphere], function (sphere) {
                const sqDistance = Vector3.distanceSquared(sphere.#center, this.#center);

                if (sqDistance > (sphere.#radius + this.#radius) ** 2) return false;
                else return true;
            })
            .add([Plane], function (plane) {
                let distance = Vector3.dot(plane.normal, this.#center);
                distance += plane.d;
                if (distance > this.#radius) return PlaneIntersectionType.front;
                else if (distance < -this.#radius) return PlaneIntersectionType.back;
                else return PlaneIntersectionType.intersecting;
            })
            .add([Ray], function (ray) {
                return ray.intersects(this);
            });

        return BoundingSphere.prototype.intersects.apply(this, params);
    }

    transform(...params) {
        BoundingSphere.prototype.transform = overload([Matrix], function (matrix) {
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
        });

        return BoundingSphere.prototype.transform.apply(this, params);
    }

    toString(...params) {
        BoundingSphere.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return BoundingSphere.prototype.toString.apply(this, params);
    }

    toJSON() {
        return {
            center: this.#center,
            radius: this.#radius
        };
    }
}
