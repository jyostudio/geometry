import overload from "@jyostudio/overload";
import List from "@jyostudio/list";
import Vector3 from "./vector3.js";
import Plane from "./plane.js";
import Ray from "./ray.js";
import BoundingSphere from "./boundingSphere.js";
import BoundingFrustum from "./boundingFrustum.js";
import ContainmentType from "./containmentType.js";
import PlaneIntersectionType from "./planeIntersectionType.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class BoundingBox {
    static get cornerCount() {
        return 8;
    }

    static get #maxVector3() {
        return new Vector3(Number.MAX_SAFE_INTEGER);
    }

    static get #minVector3() {
        return new Vector3(Number.MIN_SAFE_INTEGER);
    }

    #max = null;

    #min = null;

    static ["##STRUCT_CONSTURCTOR##"]() {
        return new BoundingBox();
    }

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        BoundingBox[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () {
                this.#min = Vector3.zero;
                this.#max = Vector3.zero;
            })
            .add([Vector3, Vector3], function (min, max) {
                this.min = min;
                this.max = max;
            });

        return BoundingBox[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        Object.defineProperties(this, {
            min: {
                get: () => this.#min,
                set: overload([Vector3], value => this.#min = value)
            },
            max: {
                get: () => this.#max,
                set: overload([Vector3], value => this.#max = value)
            }
        });

        return BoundingBox[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        yield this.#min;
        yield this.#max;
    }

    static createFromPoints(...params) {
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
                throw new RangeError("No points in the list.");
            }

            return new BoundingBox(minVec, maxVec);
        });

        return BoundingBox.createFromPoints.apply(this, params);
    }

    static createFromSphere(...params) {
        BoundingBox.createFromSphere = overload([BoundingSphere], function (sphere) {
            const corner = new Vector3(sphere.radius);
            return new BoundingBox(
                Vector3.subtract(sphere.center, corner),
                Vector3.add(sphere.center, corner)
            );
        });

        return BoundingBox.createFromSphere.apply(this, params);
    }

    static createMerged(...params) {
        BoundingBox.createMerged = overload([BoundingBox, BoundingBox], function (original, additional) {
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
        });

        return BoundingBox.createMerged.apply(this, params);
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    contains(...params) {
        BoundingBox.prototype.contains = overload()
            .add([BoundingBox], function (box) {
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
            .add([BoundingFrustum], function (frustum) {
                let i;
                let contained;
                const corners = frustum.getCorners();

                for (i = 0; i < corners.length; i++) {
                    contained = this.contains(corners[i]);
                    if (contained === ContainmentType.disjoint) {
                        break;
                    }
                }

                if (i === corners.length) return ContainmentType.contains;
                if (i !== 0) return ContainmentType.intersects;

                i++;
                for (; i < corners.length; i++) {
                    contained = this.contains(corners[i]);
                    if (contained !== ContainmentType.contains) {
                        return ContainmentType.intersects;
                    }
                }

                return ContainmentType.contains;
            })
            .add([BoundingSphere], function (sphere) {
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
                        if (e < -r) return ContainmentType.disjoint;
                        dmin += e * e;
                    } else {
                        e = c - max;
                        if (e > 0) {
                            if (e > r) return ContainmentType.disjoint;
                            dmin += e * e;
                        }
                    }
                }

                if (dmin <= r * r) return ContainmentType.intersects;

                return ContainmentType.disjoint;
            })
            .add([Vector3], function (point) {
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

    equals(...params) {
        BoundingBox.prototype.equals = overload([BoundingBox], function (box) {
            return this.#min.equals(box.#min) && this.#max.equals(box.#max);
        }).any(() => false);

        return BoundingBox.prototype.equals.apply(this, params);
    }

    getCorners(...params) {
        BoundingBox.prototype.getCorners = overload()
            .add([], function () {
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
            .add([List.T(Vector3)], function (corners) {
                if (corners.length < 8) {
                    throw new RangeError("List must have at least 8 elements.");
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

                for (let i = 0; i < corners.length; i++) {
                    corners[i].x = offsets[i].x;
                    corners[i].y = offsets[i].y;
                    corners[i].z = offsets[i].z;
                }
            });

        return BoundingBox.prototype.getCorners.apply(this, params);
    }

    intersects(...params) {
        BoundingBox.prototype.intersects = overload()
            .add([BoundingBox], function (box) {
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
            .add([BoundingFrustum], function (frustum) {
                return frustum.intersects(this);
            })
            .add([BoundingSphere], function (sphere) {
                return this.contains(sphere) !== ContainmentType.disjoint;
            })
            .add([Plane], function (plane) {
                const positiveVertex = new Vector3();
                const negativeVertex = new Vector3();

                const planeNormal = plane.normal;
                const px = planeNormal.x, py = planeNormal.y, pz = planeNormal.z;
                const pd = plane.d;

                const minx = this.#min.x, miny = this.#min.y, minz = this.#min.z;
                const maxx = this.#max.x, maxy = this.#max.y, maxz = this.#max.z;

                const setVertexCoordinates = (planeNormalComponent, minComponent, maxComponent, positiveVertex, negativeVertex, axis) => {
                    if (planeNormalComponent >= 0) {
                        positiveVertex[axis] = maxComponent;
                        negativeVertex[axis] = minComponent;
                    } else {
                        positiveVertex[axis] = minComponent;
                        negativeVertex[axis] = maxComponent;
                    }
                }

                setVertexCoordinates(px, minx, maxx, positiveVertex, negativeVertex, 'x');
                setVertexCoordinates(py, miny, maxy, positiveVertex, negativeVertex, 'y');
                setVertexCoordinates(pz, minz, maxz, positiveVertex, negativeVertex, 'z');

                let distance = px * negativeVertex.x + py * negativeVertex.y + pz * negativeVertex.z + pd;
                if (distance > 0) return PlaneIntersectionType.front;

                distance = px * positiveVertex.x + py * positiveVertex.y + pz * positiveVertex.z + pd;
                if (distance < 0) return PlaneIntersectionType.back;

                return PlaneIntersectionType.intersecting;
            })
            .add([Ray], function (ray) {
                return ray.intersects(this);
            });

        return BoundingBox.prototype.intersects.apply(this, params);
    }

    toString(...params) {
        BoundingBox.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return BoundingBox.prototype.toString.apply(this, params);
    }

    toJSON() {
        return {
            min: this.#min,
            max: this.#max
        };
    }
}
