import overload from "@jyostudio/overload";
import Vector3 from "./vector3.js";
import Vector4 from "./vector4.js";
import Quaternion from "./quaternion.js";
import Matrix from "./matrix.js";
import BoundingBox from "./boundingBox.js";
import BoundingFrustum from "./boundingFrustum.js";
import BoundingSphere from "./boundingSphere.js";
import PlaneIntersectionType from "./planeIntersectionType.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class Plane {
    #normal = Vector3.zero;

    #d = 0;

    static ["##STRUCT_CONSTURCTOR##"]() {
        return new Plane();
    }

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        Plane[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number, Number, Number, Number], function (a, b, c, d) {
                this.#normal.x = a;
                this.#normal.y = b;
                this.#normal.z = c;
                this.#d = d;
            })
            .add([Vector3, Number], function (normal, d) {
                this.#normal.x = normal.x;
                this.#normal.y = normal.y;
                this.#normal.z = normal.z;
                this.#d = d;
            })
            .add([Vector3, Vector3, Vector3], function (point1, point2, point3) {
                const ab = Vector3.subtract(point2, point1);
                const ac = Vector3.subtract(point3, point1);

                const cross = Vector3.cross(ab, ac);
                const normal = Vector3.normalize(cross);

                this.#normal.x = normal.x;
                this.#normal.y = normal.y;
                this.#normal.z = normal.z;
                this.#d = -(Vector3.dot(normal, point1));
            })
            .add([Vector4], function (value) {
                this.#normal.x = value.x;
                this.#normal.y = value.y;
                this.#normal.z = value.z;
                this.#d = value.w;
            });

        return Plane[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        Object.defineProperties(this, {
            normal: {
                get: () => this.#normal,
                set: overload([Vector3], value => this.#normal = value)
            },
            d: {
                get: () => this.#d,
                set: overload([Number], value => this.#d = value)
            }
        });

        return Plane[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        yield this.#normal;
        yield this.#d;
    }

    static normalize(...params) {
        Plane.normalize = overload([Plane], function (value) {
            const result = new Plane();
            result.#normal = Vector3.normalize(value.#normal);
            const x1 = result.#normal.x, y1 = result.#normal.y, z1 = result.#normal.z;
            const x2 = value.#normal.x, y2 = value.#normal.y, z2 = value.#normal.z;

            const factor = Math.sqrt(x1 ** 2 + y1 ** 2 + z1 ** 2) /
                Math.sqrt(x2 ** 2 + y2 ** 2 + z2 ** 2);
            result.#d = value.#d * factor;
            return result;
        });

        return Plane.normalize.apply(this, params);
    }

    static transform(...params) {
        Plane.transform = overload()
            .add([Plane, Matrix], function (plane, matrix) {
                const transformedMatrix = Matrix.transpose(Matrix.invert(matrix));
                const vector = new Vector4(plane.#normal, plane.#d);
                return new Plane(Vector4.transform(vector, transformedMatrix));
            })
            .add([Plane, Quaternion], function (plane, rotation) {
                const result = new Plane();
                result.#normal = Vector3.transform(plane.#normal, rotation);
                result.#d = plane.#d;
                return result;
            });

        return Plane.transform.apply(this, params);
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    dot(...params) {
        Plane.prototype.dot = overload([Vector4], function (value) {
            const normal = this.#normal;
            const nx = normal.x, ny = normal.y, nz = normal.z;
            const vx = value.x, vy = value.y, vz = value.z, vw = value.w;
            return (nx * vx) + (ny * vy) + (nz * vz) + (this.#d * vw);
        });

        return Plane.prototype.dot.apply(this, params);
    }

    dotCoordinate(...params) {
        Plane.prototype.dotCoordinate = overload([Vector3], function (value) {
            const normal = this.#normal;
            const nx = normal.x, ny = normal.y, nz = normal.z;
            const vx = value.x, vy = value.y, vz = value.z;
            return (nx * vx) + (ny * vy) + (nz * vz) + this.#d;
        });

        return Plane.prototype.dotCoordinate.apply(this, params);
    }

    dotNormal(...params) {
        Plane.prototype.dotNormal = overload([Vector3], function (value) {
            const normal = this.#normal;
            const nx = normal.x, ny = normal.y, nz = normal.z;
            const vx = value.x, vy = value.y, vz = value.z;
            return nx * vx + ny * vy + nz * vz;
        });

        return Plane.prototype.dotNormal.apply(this, params);
    }

    equals(...params) {
        Plane.prototype.equals = overload([Plane], function (other) {
            return this.#normal.equals(other.#normal) && this.#d === other.#d;
        }).any(() => false);

        return Plane.prototype.equals.apply(this, params);
    }

    intersects(...params) {
        Plane.prototype.intersects = overload()
            .add([BoundingBox], function (box) {
                return box.intersects(this);
            })
            .add([BoundingFrustum], function (frustum) {
                return frustum.intersects(this);
            })
            .add([BoundingSphere], function (sphere) {
                return sphere.intersects(this);
            })
            .add([Vector3], function (vec3) {
                const distance = this.dotCoordinate(vec3);
                if (distance > 0) return PlaneIntersectionType.front;
                else if (distance < 0) return PlaneIntersectionType.back;
                else return PlaneIntersectionType.intersecting;
            });

        return Plane.prototype.intersects.apply(this, params);
    }

    normalize(...params) {
        Plane.prototype.normalize = overload([], function () {
            const factor = 1 / this.#normal.length();
            this.#normal = Vector3.multiply(this.#normal, factor);
            this.#d *= factor;
        });

        return Plane.prototype.normalize.apply(this, params);
    }

    toString(...params) {
        Plane.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return Plane.prototype.toString.apply(this, params);
    }

    toJSON() {
        return {
            normal: this.#normal,
            d: this.#d
        };
    }
}
