import overload from "@jyostudio/overload";
import List from "@jyostudio/list";
import Vector3 from "./vector3.js";
import Matrix from "./matrix.js";
import Plane from "./plane.js";
import Ray from "./ray.js";
import BoundingSphere from "./boundingSphere.js";
import BoundingBox from "./boundingBox.js";
import ContainmentType from "./containmentType.js";
import PlaneIntersectionType from "./planeIntersectionType.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class BoundingFrustum {
    static get cornerCount() {
        return 8;
    }

    static get #planeCount() {
        return 6;
    }

    #matrix = null;

    #corners = null;

    #planes = null;

    get near() {
        return this.#planes[0];
    }

    get far() {
        return this.#planes[1];
    }

    get left() {
        return this.#planes[2];
    }

    get right() {
        return this.#planes[3];
    }

    get top() {
        return this.#planes[4];
    }

    get bottom() {
        return this.#planes[5];
    }

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        BoundingFrustum[CONSTURCTOR_SYMBOL] = overload([Matrix], function (value) {
            this.matrix = value;
        });

        return BoundingFrustum[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        Object.defineProperties(this, {
            matrix: {
                get: () => this.#matrix,
                set: overload([Matrix], function (value) {
                    this.#matrix = value;

                    this.#createPlanes();
                    this.#createCorners();
                })
            }
        });

        return BoundingFrustum[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        yield this.matrix;
    }

    #createCorners() {
        this.#corners = new List(Vector3);

        const p = this.#planes;
        const c = this.#corners;
        c.addRange([
            this.#intersectionPoint(p[0], p[2], p[4]),
            this.#intersectionPoint(p[0], p[3], p[4]),
            this.#intersectionPoint(p[0], p[3], p[5]),
            this.#intersectionPoint(p[0], p[2], p[5]),
            this.#intersectionPoint(p[1], p[2], p[4]),
            this.#intersectionPoint(p[1], p[3], p[4]),
            this.#intersectionPoint(p[1], p[3], p[5]),
            this.#intersectionPoint(p[1], p[2], p[5])
        ]);
    }

    #createPlanes() {
        this.#planes = new List(Plane);

        const m = this.#matrix;
        const p = this.#planes;

        const { m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44 } = m;

        p.addRange([
            new Plane(-m13, -m23, -m33, -m43),
            new Plane(m13 - m14, m23 - m24, m33 - m34, m43 - m44),
            new Plane(-m14 - m11, -m24 - m21, -m34 - m31, -m44 - m41),
            new Plane(m11 - m14, m21 - m24, m31 - m34, m41 - m44),
            new Plane(m12 - m14, m22 - m24, m32 - m34, m42 - m44),
            new Plane(-m14 - m12, -m24 - m22, -m34 - m32, -m44 - m42)
        ]);

        this.#normalizePlane(p[0]);
        this.#normalizePlane(p[1]);
        this.#normalizePlane(p[2]);
        this.#normalizePlane(p[3]);
        this.#normalizePlane(p[4]);
        this.#normalizePlane(p[5]);
    }

    #intersectionPoint(a, b, c) {
        let v1, v2, v3;
        let cross = Vector3.cross(b.normal, c.normal);

        let f = Vector3.dot(a.normal, cross);
        f *= -1.0;

        cross = Vector3.cross(b.normal, c.normal);
        v1 = Vector3.multiply(cross, a.d);

        cross = Vector3.cross(c.normal, a.normal);
        v2 = Vector3.multiply(cross, b.d);

        cross = Vector3.cross(a.normal, b.normal);
        v3 = Vector3.multiply(cross, c.d);

        const x = (v1.x + v2.x + v3.x) / f;
        const y = (v1.y + v2.y + v3.y) / f;
        const z = (v1.z + v2.z + v3.z) / f;
        return new Vector3(x, y, z);
    }

    #normalizePlane(p) {
        const factor = 1 / p.normal.length();
        p.normal.x *= factor;
        p.normal.y *= factor;
        p.normal.z *= factor;
        p.d *= factor;
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    contains(...params) {
        BoundingFrustum.prototype.contains = overload()
            .add([BoundingBox], function (box) {
                let intersects = false;
                let planeCount = BoundingFrustum.#planeCount;
                for (let i = 0; i < planeCount; ++i) {
                    let planeIntersectionType = box.intersects(this.#planes[i]);
                    switch (planeIntersectionType) {
                        case PlaneIntersectionType.front:
                            return ContainmentType.disjoint;
                        case PlaneIntersectionType.intersecting:
                            intersects = true;
                            break;
                    }
                }
                return intersects ? ContainmentType.intersects : ContainmentType.contains;
            })
            .add([BoundingFrustum], function (frustum) {
                if (this === frustum) return ContainmentType.contains;

                let intersects = false;
                const planeCount = BoundingFrustum.#planeCount;
                for (let i = 0; i < planeCount; ++i) {
                    let planeIntersectionType = frustum.intersects(this.#planes[i]);
                    switch (planeIntersectionType) {
                        case PlaneIntersectionType.front:
                            return ContainmentType.disjoint;
                        case PlaneIntersectionType.intersecting:
                            intersects = true;
                            break;
                    }
                }
                return intersects ? ContainmentType.intersects : ContainmentType.contains;
            })
            .add([BoundingSphere], function (sphere) {
                let intersects = false;
                const planeCount = BoundingFrustum.#planeCount;
                for (let i = 0; i < planeCount; ++i) {
                    let planeIntersectionType = sphere.intersects(this.#planes[i]);
                    switch (planeIntersectionType) {
                        case PlaneIntersectionType.front:
                            return ContainmentType.disjoint;
                        case PlaneIntersectionType.intersecting:
                            intersects = true;
                            break;
                    }
                }
                return intersects ? ContainmentType.intersects : ContainmentType.contains;
            })
            .add([Vector3], function (point) {
                const planeCount = BoundingFrustum.#planeCount;
                for (let i = 0; i < planeCount; ++i) {
                    let plane = this.#planes[i];
                    if (point.x * plane.normal.x + point.y * plane.normal.y + point.z * plane.normal.z + plane.d > 0) {
                        return ContainmentType.disjoint;
                    }
                }
                return ContainmentType.contains;
            });

        return BoundingFrustum.prototype.contains.apply(this, params);
    }

    equals(...params) {
        BoundingFrustum.prototype.equals = overload([BoundingFrustum], function (other) {
            return this.matrix.equals(other.matrix);
        }).any(() => false);

        return BoundingFrustum.prototype.equals.apply(this, params);
    }

    getCorners(...params) {
        BoundingFrustum.prototype.getCorners = overload()
            .add([], function () {
                const vec3Arr = new List(Vector3);
                const corners = this.#corners;
                for (let i = 0; i < corners.length; i++) {
                    vec3Arr.add(new Vector3(
                        corners[i].x,
                        corners[i].y,
                        corners[i].z
                    ));
                }
                return vec3Arr;
            })
            .add([List.T(Vector3)], function (corners) {
                if (corners.length < BoundingFrustum.cornerCount) {
                    throw new RangeError("corners length is less than BoundingFrustum.cornerCount.");
                }

                const _corners = this.#corners;
                for (let i = 0; i < _corners.length; i++) {
                    corners[i].x = _corners[i].x;
                    corners[i].y = _corners[i].y;
                    corners[i].z = _corners[i].z;
                }
            });

        return BoundingFrustum.prototype.getCorners.apply(this, params);
    }

    intersects(...params) {
        BoundingFrustum.prototype.intersects = overload()
            .add([BoundingBox], function (box) {
                return this.contains(box) !== ContainmentType.disjoint;
            })
            .add([BoundingFrustum], function (frustum) {
                return this.contains(frustum) !== ContainmentType.disjoint;
            })
            .add([BoundingSphere], function (sphere) {
                return this.contains(sphere) !== ContainmentType.disjoint;
            })
            .add([Plane], function (plane) {
                const corners = this.#corners;
                let result = plane.intersects(corners[0]);
                for (var i = 1; i < corners.length; i++) {
                    if (plane.intersects(corners[i]) != result) {
                        result = PlaneIntersectionType.intersecting;
                    }
                }
                return result;
            })
            .add([Ray], function (ray) {
                switch (this.contains(ray.position)) {
                    case ContainmentType.disjoint: return null;
                    case ContainmentType.contains: return 0.0;
                    case ContainmentType.intersects: return 0.0;
                    default: throw new RangeError();
                }
            });

        return BoundingFrustum.prototype.intersects.apply(this, params);
    }

    toString(...params) {
        BoundingFrustum.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return BoundingFrustum.prototype.toString.apply(this, params);
    }

    toJSON() {
        return {
            near: this.near,
            far: this.far,
            left: this.left,
            right: this.right,
            top: this.top,
            bottom: this.bottom
        };
    }
}
