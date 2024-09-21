import overload from "@jyostudio/overload";
import List from "@jyostudio/list";
import Vector2 from "./vector2.js";
import Matrix from "./matrix.js";
import Quaternion from "./quaternion.js";
import MathHelper from "./math_helper.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class Vector3 {
    static get backward() {
        return new Vector3(0, 0, 1);
    }

    static get down() {
        return new Vector3(0, -1, 0);
    }

    static get forward() {
        return new Vector3(0, 0, -1);
    }

    static get left() {
        return new Vector3(-1, 0, 0);
    }

    static get one() {
        return new Vector3(1, 1, 1);
    }

    static get right() {
        return new Vector3(1, 0, 0);
    }

    static get unitX() {
        return new Vector3(1, 0, 0);
    }

    static get unitY() {
        return new Vector3(0, 1, 0);
    }

    static get unitZ() {
        return new Vector3(0, 0, 1);
    }

    static get up() {
        return new Vector3(0, 1, 0);
    }

    static get zero() {
        return new Vector3(0, 0, 0);
    }

    #x = 0;

    #y = 0;

    #z = 0;

    static ["##STRUCT_CONSTURCTOR##"]() {
        return Vector3.zero;
    }

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        Vector3[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number], function (value) {
                this.#x = value;
                this.#y = value;
                this.#z = value;
            })
            .add([Number, Number, Number], function (x, y, z) {
                this.#x = x;
                this.#y = y;
                this.#z = z;
            })
            .add([Vector2, Number], function (value, z) {
                this.#x = value.x;
                this.#y = value.y;
                this.#z = z;
            });

        return Vector3[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        Object.defineProperties(this, {
            x: {
                get: () => this.#x,
                set: overload([Number], value => this.#x = value)
            },
            y: {
                get: () => this.#y,
                set: overload([Number], value => this.#y = value)
            },
            z: {
                get: () => this.#z,
                set: overload([Number], value => this.#z = value)
            }
        });

        return Vector3[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        yield this.#x;
        yield this.#y;
        yield this.#z;
    }

    static add(...params) {
        Vector3.add = overload([Vector3, Vector3], function (value1, value2) {
            return new Vector3(
                value1.#x + value2.#x,
                value1.#y + value2.#y,
                value1.#z + value2.#z
            );
        });

        return Vector3.add.apply(this, params);
    }

    static barycentric(...params) {
        Vector3.barycentric = overload([Vector3, Vector3, Vector3, Number, Number], function (value1, value2, value3, amount1, amount2) {
            return new Vector3(
                MathHelper.barycentric(value1.#x, value2.#x, value3.#x, amount1, amount2),
                MathHelper.barycentric(value1.#y, value2.#y, value3.#y, amount1, amount2),
                MathHelper.barycentric(value1.#z, value2.#z, value3.#z, amount1, amount2)
            );
        });

        return Vector3.barycentric.apply(this, params);
    }

    static catmullRom(...params) {
        Vector3.catmullRom = overload([Vector3, Vector3, Vector3, Vector3, Number], function (value1, value2, value3, value4, amount) {
            return new Vector3(
                MathHelper.catmullRom(value1.#x, value2.#x, value3.#x, value4.#x, amount),
                MathHelper.catmullRom(value1.#y, value2.#y, value3.#y, value4.#y, amount),
                MathHelper.catmullRom(value1.#z, value2.#z, value3.#z, value4.#z, amount)
            );
        });

        return Vector3.catmullRom.apply(this, params);
    }

    static clamp(...params) {
        Vector3.clamp = overload([Vector3, Vector3, Vector3], function (value1, min, max) {
            return new Vector3(
                MathHelper.clamp(value1.#x, min.#x, max.#x),
                MathHelper.clamp(value1.#y, min.#y, max.#y),
                MathHelper.clamp(value1.#z, min.#z, max.#z)
            );
        });

        return Vector3.clamp.apply(this, params);
    }

    static cross(...params) {
        Vector3.cross = overload([Vector3, Vector3], function (vector1, vector2) {
            const x1 = vector1.#x, y1 = vector1.#y, z1 = vector1.#z;
            const x2 = vector2.#x, y2 = vector2.#y, z2 = vector2.#z;

            const x = y1 * z2 - y2 * z1;
            const y = -(x1 * z2 - x2 * z1);
            const z = x1 * y2 - x2 * y1;

            return new Vector3(x, y, z);
        });

        return Vector3.cross.apply(this, params);
    }

    static distance(...params) {
        Vector3.distance = overload([Vector3, Vector3], function (value1, value2) {
            const x1 = value1.#x, y1 = value1.#y, z1 = value1.#z;
            const x2 = value2.#x, y2 = value2.#y, z2 = value2.#z;
            return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);
        });

        return Vector3.distance.apply(this, params);
    }

    static distanceSquared(...params) {
        Vector3.distanceSquared = overload([Vector3, Vector3], function (value1, value2) {
            const x1 = value1.#x, y1 = value1.#y, z1 = value1.#z;
            const x2 = value2.#x, y2 = value2.#y, z2 = value2.#z;
            return (x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2;
        });

        return Vector3.distanceSquared.apply(this, params);
    }

    static divide(...params) {
        Vector3.divide = overload()
            .add([Vector3, Number], function (value1, value2) {
                const factor = 1 / value2;
                return new Vector3(
                    value1.#x * factor,
                    value1.#y * factor,
                    value1.#z * factor
                );
            })
            .add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    value1.#x / value2.#x,
                    value1.#y / value2.#y,
                    value1.#z / value2.#z
                );
            });

        return Vector3.divide.apply(this, params);
    }

    static dot(...params) {
        Vector3.dot = overload([Vector3, Vector3], function (vector1, vector2) {
            const x1 = vector1.#x, y1 = vector1.#y, z1 = vector1.#z;
            const x2 = vector2.#x, y2 = vector2.#y, z2 = vector2.#z;
            return x1 * x2 + y1 * y2 + z1 * z2;
        });

        return Vector3.dot.apply(this, params);
    }

    static hermite(...params) {
        Vector3.hermite = overload([Vector3, Vector3, Vector3, Vector3, Number], function (value1, tangent1, value2, tangent2, amount) {
            return new Vector3(
                MathHelper.hermite(value1.#x, tangent1.#x, value2.#x, tangent2.#x, amount),
                MathHelper.hermite(value1.#y, tangent1.#y, value2.#y, tangent2.#y, amount),
                MathHelper.hermite(value1.#z, tangent1.#z, value2.#z, tangent2.#z, amount)
            );
        });

        return Vector3.hermite.apply(this, params);
    }

    static lerp(...params) {
        Vector3.lerp = overload([Vector3, Vector3, Number], function (value1, value2, amount) {
            return new Vector3(
                MathHelper.lerp(value1.#x, value2.#x, amount),
                MathHelper.lerp(value1.#y, value2.#y, amount),
                MathHelper.lerp(value1.#z, value2.#z, amount)
            );
        });

        return Vector3.lerp.apply(this, params);
    }

    static max(...params) {
        Vector3.max = overload([Vector3, Vector3], function (value1, value2) {
            return new Vector3(
                Math.max(value1.#x, value2.#x),
                Math.max(value1.#y, value2.#y),
                Math.max(value1.#z, value2.#z)
            );
        });

        return Vector3.max.apply(this, params);
    }

    static min(...params) {
        Vector3.min = overload([Vector3, Vector3], function (value1, value2) {
            return new Vector3(
                Math.min(value1.#x, value2.#x),
                Math.min(value1.#y, value2.#y),
                Math.min(value1.#z, value2.#z)
            );
        });

        return Vector3.min.apply(this, params);
    }

    static multiply(...params) {
        Vector3.multiply = overload()
            .add([Vector3, Number], function (value1, value2) {
                return new Vector3(
                    value1.#x * value2,
                    value1.#y * value2,
                    value1.#z * value2
                );
            })
            .add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    value1.#x * value2.#x,
                    value1.#y * value2.#y,
                    value1.#z * value2.#z
                );
            });

        return Vector3.multiply.apply(this, params);
    }

    static negate(...params) {
        Vector3.negate = overload([Vector3], function (value) {
            return new Vector3(-value.#x, -value.#y, -value.#z);
        });

        return Vector3.negate.apply(this, params);
    }

    static normalize(...params) {
        Vector3.normalize = overload([Vector3], function (value) {
            const factor = 1 / Math.sqrt(value.#x ** 2 + value.#y ** 2 + value.#z ** 2);
            return new Vector3(value.#x * factor, value.#y * factor, value.#z * factor);
        });

        return Vector3.normalize.apply(this, params);
    }

    static reflect(...params) {
        Vector3.reflect = overload([Vector3, Vector3], function (vector, normal) {
            const dotProduct = (vector.#x * normal.#x) + (vector.#y * normal.#y) + (vector.#z * normal.#z);
            const factor = 2.0 * dotProduct;
            return new Vector3(
                vector.#x - normal.#x * factor,
                vector.#y - normal.#y * factor,
                vector.#z - normal.#z * factor
            );
        });

        return Vector3.reflect.apply(this, params);
    }

    static smoothStep(...params) {
        Vector3.smoothStep = overload([Vector3, Vector3, Number], function (value1, value2, amount) {
            return new Vector3(
                MathHelper.smoothStep(value1.#x, value2.#x, amount),
                MathHelper.smoothStep(value1.#y, value2.#y, amount),
                MathHelper.smoothStep(value1.#z, value2.#z, amount)
            );
        });

        return Vector3.smoothStep.apply(this, params);
    }

    static subtract(...params) {
        Vector3.subtract = overload([Vector3, Vector3], function (value1, value2) {
            return new Vector3(
                value1.#x - value2.#x,
                value1.#y - value2.#y,
                value1.#z - value2.#z
            );
        });

        return Vector3.subtract.apply(this, params);
    }

    static transform(...params) {
        Vector3.transform = overload()
            .add([Vector3, Matrix], function (position, matrix) {
                const px = position.#x, py = position.#y, pz = position.#z;
                const x = (px * matrix.m11) + (py * matrix.m21) + (pz * matrix.m31) + matrix.m41;
                const y = (px * matrix.m12) + (py * matrix.m22) + (pz * matrix.m32) + matrix.m42;
                const z = (px * matrix.m13) + (py * matrix.m23) + (pz * matrix.m33) + matrix.m43;

                return new Vector3(x, y, z);
            })
            .add([Vector3, Quaternion], function (value, rotation) {
                const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
                const vx = value.#x, vy = value.#y, vz = value.#z;

                const x = 2 * (ry * vz - rz * vy);
                const y = 2 * (rz * vx - rx * vz);
                const z = 2 * (rx * vy - ry * vx);

                return new Vector3(
                    vx + x * rw + (ry * z - rz * y),
                    vy + y * rw + (rz * x - rx * z),
                    vz + z * rw + (rx * y - ry * x)
                );
            })
            .add([List.T(Vector3), Number, Matrix, List.T(Vector3), Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new RangeError(`The length of sourceArray is smaller than sourceIndex + length.`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError(`The length of destinationArray is smaller than destinationIndex + length.`);
                }

                for (let i = 0; i < length; i++) {
                    const v = sourceArray[sourceIndex + i];
                    const x = v.#x, y = v.#y, z = v.#z;

                    destinationArray[destinationIndex + i] = new Vector3(
                        (x * matrix.m11) + (y * matrix.m21) + (z * matrix.m31) + matrix.m41,
                        (x * matrix.m12) + (y * matrix.m22) + (z * matrix.m32) + matrix.m42,
                        (x * matrix.m13) + (y * matrix.m23) + (z * matrix.m33) + matrix.m43
                    );
                }
            })
            .add([List.T(Vector3), Number, Quaternion, List.T(Vector3), Number, Number], function (sourceArray, sourceIndex, rotation, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new RangeError(`The length of sourceArray is smaller than sourceIndex + length.`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError(`The length of destinationArray is smaller than destinationIndex + length.`);
                }

                const { x: rx, y: ry, z: rz, w: rw } = rotation;

                for (let i = 0; i < length; i++) {
                    const v = sourceArray[sourceIndex + i];
                    const px = v.#x, py = v.#y, pz = v.#z;

                    const x = 2 * (ry * pz - rz * py);
                    const y = 2 * (rz * px - rx * pz);
                    const z = 2 * (rx * py - ry * px);

                    destinationArray[destinationIndex + i] = new Vector3(
                        px + x * rw + (ry * z - rz * y),
                        py + y * rw + (rz * x - rx * z),
                        pz + z * rw + (rx * y - ry * x)
                    );
                }
            })
            .add([List.T(Vector3), Matrix, List.T(Vector3)], function (sourceArray, matrix, destinationArray) {
                this.transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
            })
            .add([List.T(Vector3), Quaternion, List.T(Vector3)], function (sourceArray, rotation, destinationArray) {
                this.transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.length);
            });

        return Vector3.transform.apply(this, params);
    }

    static transformNormal(...params) {
        Vector3.transformNormal = overload()
            .add([Vector3, Matrix], function (normal, matrix) {
                const nx = normal.#x, ny = normal.#y, nz = normal.#z;

                const x = (nx * matrix.m11) + (ny * matrix.m21) + (nz * matrix.m31);
                const y = (nx * matrix.m12) + (ny * matrix.m22) + (nz * matrix.m32);
                const z = (nx * matrix.m13) + (ny * matrix.m23) + (nz * matrix.m33);

                return new Vector3(x, y, z);
            })
            .add([List.T(Vector3), Number, Matrix, List.T(Vector3), Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new RangeError(`sourceArray length is smaller than sourceIndex + length.`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError(`destinationArray length is smaller than destinationIndex + length.`);
                }

                for (let i = 0; i < length; i++) {
                    const v = sourceArray[sourceIndex + i];
                    const x = v.#x, y = v.#y, z = v.#z;

                    destinationArray[destinationIndex + i] = new Vector3(
                        (x * matrix.m11) + (y * matrix.m21) + (z * matrix.m31),
                        (x * matrix.m12) + (y * matrix.m22) + (z * matrix.m32),
                        (x * matrix.m13) + (y * matrix.m23) + (z * matrix.m33)
                    );
                }
            })
            .add([List.T(Vector3), Matrix, List.T(Vector3)], function (sourceArray, matrix, destinationArray) {
                if (destinationArray.length < sourceArray.length) {
                    throw new RangeError(`The length of destinationArray is smaller than the length of sourceArray.`);
                }

                for (let i = 0; i < sourceArray.length; i++) {
                    const v = sourceArray[i];
                    const x = v.#x, y = v.#y, z = v.#z;

                    destinationArray[i] = new Vector3(
                        (x * matrix.m11) + (y * matrix.m21) + (z * matrix.m31),
                        (x * matrix.m12) + (y * matrix.m22) + (z * matrix.m32),
                        (x * matrix.m13) + (y * matrix.m23) + (z * matrix.m33)
                    );
                }
            });

        return Vector3.transformNormal.apply(this, params);
    }

    static ["-"](...params) {
        return Vector3.negate(...params);
    }

    ["+"](...params) {
        return Vector3.add(this, ...params);
    }

    ["-"](...params) {
        return Vector3.subtract(this, ...params);
    }

    ["*"](...params) {
        return Vector3.multiply(this, ...params);
    }

    ["/"](...params) {
        return Vector3.divide(this, ...params);
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    equals(...params) {
        Vector3.prototype.equals = overload([Vector3], function (other) {
            return this.#x === other.#x && this.#y === other.#y && this.#z === other.#z;
        }).any(() => false);

        return Vector3.prototype.equals.apply(this, params);
    }

    length(...params) {
        Vector3.prototype.length = overload([], function () {
            return Math.sqrt(this.#x ** 2 + this.#y ** 2 + this.#z ** 2);
        });

        return Vector3.prototype.length.apply(this, params);
    }

    lengthSquared(...params) {
        Vector3.prototype.lengthSquared = overload([], function () {
            return this.#x ** 2 + this.#y ** 2 + this.#z ** 2;
        });

        return Vector3.prototype.lengthSquared.apply(this, params);
    }

    normalize(...params) {
        Vector3.prototype.normalize = overload([], function () {
            const factor = 1 / Math.sqrt(this.#x ** 2 + this.#y ** 2 + this.#z ** 2);
            this.#x *= factor;
            this.#y *= factor;
            this.#z *= factor;
        });

        return Vector3.prototype.normalize.apply(this, params);
    }

    toString(...params) {
        Vector3.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return Vector3.prototype.toString.apply(this, params);
    }

    toJSON() {
        return { x: this.#x, y: this.#y, z: this.#z };
    }
}
