import overload from "@jyostudio/overload";
import Vector3 from "./vector3.js";
import Plane from "./plane.js";
import BoundingBox from "./boundingBox.js";
import BoundingFrustum from "./boundingFrustum.js";
import BoundingSphere from "./boundingSphere.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class Ray {
    #direction = null;

    #position = null;

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        Ray[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () {
                [this.position, this.direction] = [Vector3.zero, Vector3.zero];
            })
            .add([Vector3, Vector3], function (position, direction) {
                [this.position, this.direction] = [position, direction];
            });

        return Ray[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        Object.defineProperties(this, {
            position: {
                get: () => this.#position,
                set: overload([Vector3], value => this.#position = value)
            },
            direction: {
                get: () => this.#direction,
                set: overload([Vector3], value => this.#direction = value)
            }
        });

        return Ray[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        yield this.position;
        yield this.direction;
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    intersects(...params) {
        Ray.prototype.intersects = overload()
            .add([BoundingBox], function (box) {
                let tMin = -Infinity;
                let tMax = Infinity;
                const { x: positionX, y: positionY, z: positionZ } = this.position;
                const { x: directionX, y: directionY, z: directionZ } = this.direction;

                const checkAxis = (position, direction, min, max) => {
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
            .add([BoundingFrustum], function (frustum) {
                return frustum.intersects(this);
            })
            .add([BoundingSphere], function (sphere) {
                const difference = Vector3.subtract(sphere.center, this.position);

                const differenceLengthSquared = difference.lengthSquared();
                const sphereRadiusSquared = sphere.radius * sphere.radius;

                if (differenceLengthSquared < sphereRadiusSquared) return 0;

                const distanceAlongRay = Vector3.dot(this.direction, difference);

                if (distanceAlongRay < 0) return null;

                const dist = sphereRadiusSquared + distanceAlongRay * distanceAlongRay - differenceLengthSquared;

                return (dist < 0) ? null : distanceAlongRay - Math.sqrt(dist);
            })
            .add([Plane], function (plane) {
                const den = Vector3.dot(this.direction, plane.normal);
                if (Math.abs(den) < 0.00001) return null;

                let result = (-plane.d - Vector3.dot(plane.normal, this.position)) / den;

                if (result < 0.0) {
                    if (result < -0.00001) return null;
                    result = 0.0;
                }

                return result;
            });

        return Ray.prototype.intersects.apply(this, params);
    }

    equals(...params) {
        Ray.prototype.equals = overload([Ray], function (other) {
            return this.direction.equals(other.direction) && this.position.equals(other.position);
        }).any(() => false);

        return Ray.prototype.equals.apply(this, params);
    }

    toString(...params) {
        Ray.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return Ray.prototype.toString.apply(this, params);
    }

    toJSON() {
        return {
            position: this.position,
            direction: this.direction
        };
    }
}
