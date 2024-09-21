import overload from "@jyostudio/overload";
import List from "@jyostudio/list";
import Vector2 from "./vector2.js";
import Vector3 from "./vector3.js";
import Matrix from "./matrix.js";
import Quaternion from "./quaternion.js";
import MathHelper from "./math_helper.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class Vector4 {
    static get one() {
        return new Vector4(1, 1, 1, 1);
    }

    static get unitW() {
        return new Vector4(0, 0, 0, 1);
    }

    static get unitX() {
        return new Vector4(1, 0, 0, 0);
    }

    static get unitY() {
        return new Vector4(0, 1, 0, 0);
    }

    static get unitZ() {
        return new Vector4(0, 0, 1, 0);
    }

    static get zero() {
        return new Vector4(0, 0, 0, 0);
    }

    #x = 0;

    #y = 0;

    #z = 0;

    #w = 0;

    static ["##STRUCT_CONSTURCTOR##"]() {
        return Vector4.zero;
    }

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        Vector4[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number], function (value) {
                this.#x = value;
                this.#y = value;
                this.#z = value;
                this.#w = value;
            })
            .add([Number, Number, Number, Number], function (x, y, z, w) {
                this.#x = x;
                this.#y = y;
                this.#z = z;
                this.#w = w;
            })
            .add([Vector2, Number, Number], function (value, z, w) {
                this.#x = value.x;
                this.#y = value.y;
                this.#z = z;
                this.#w = w;
            })
            .add([Vector3, Number], function (value, w) {
                this.#x = value.x;
                this.#y = value.y;
                this.#z = value.z;
                this.#w = w;
            });

        return Vector4[CONSTURCTOR_SYMBOL].apply(this, params);
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
            },
            w: {
                get: () => this.#w,
                set: overload([Number], value => this.#w = value)
            }
        });

        return Vector4[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        yield this.#x;
        yield this.#y;
        yield this.#z;
        yield this.#w;
    }

    static add(...params) {
        Vector4.add = overload([Vector4, Vector4], function (value1, value2) {
            return new Vector4(
                value1.#x + value2.#x,
                value1.#y + value2.#y,
                value1.#z + value2.#z,
                value1.#w + value2.#w
            );
        });

        return Vector4.add.apply(this, params);
    }

    static barycentric(...params) {
        Vector4.barycentric = overload([Vector4, Vector4, Vector4, Number, Number], function (value1, value2, value3, amount1, amount2) {
            return new Vector4(
                MathHelper.barycentric(value1.#x, value2.#x, value3.#x, amount1, amount2),
                MathHelper.barycentric(value1.#y, value2.#y, value3.#y, amount1, amount2),
                MathHelper.barycentric(value1.#z, value2.#z, value3.#z, amount1, amount2),
                MathHelper.barycentric(value1.#w, value2.#w, value3.#w, amount1, amount2)
            );
        });

        return Vector4.barycentric.apply(this, params);
    }

    static catmullRom(...params) {
        Vector4.catmullRom = overload([Vector4, Vector4, Vector4, Vector4, Number], function (value1, value2, value3, value4, amount) {
            return new Vector4(
                MathHelper.catmullRom(value1.#x, value2.#x, value3.#x, value4.#x, amount),
                MathHelper.catmullRom(value1.#y, value2.#y, value3.#y, value4.#y, amount),
                MathHelper.catmullRom(value1.#z, value2.#z, value3.#z, value4.#z, amount),
                MathHelper.catmullRom(value1.#w, value2.#w, value3.#w, value4.#w, amount)
            );
        });

        return Vector4.catmullRom.apply(this, params);
    }

    static clamp(...params) {
        Vector4.clamp = overload([Vector4, Vector4, Vector4], function (value1, min, max) {
            return new Vector4(
                MathHelper.clamp(value1.#x, min.#x, max.#x),
                MathHelper.clamp(value1.#y, min.#y, max.#y),
                MathHelper.clamp(value1.#z, min.#z, max.#z),
                MathHelper.clamp(value1.#w, min.#w, max.#w)
            );
        });

        return Vector4.clamp.apply(this, params);
    }

    static distance(...params) {
        Vector4.distance = overload([Vector4, Vector4], function (value1, value2) {
            const deltaW = value1.w - value2.w;
            const deltaX = value1.x - value2.x;
            const deltaY = value1.y - value2.y;
            const deltaZ = value1.z - value2.z;

            return Math.sqrt(deltaW ** 2 + deltaX ** 2 + deltaY ** 2 + deltaZ ** 2);
        });

        return Vector4.distance.apply(this, params);
    }

    static distanceSquared(...params) {
        Vector4.distanceSquared = overload([Vector4, Vector4], function (value1, value2) {
            const deltaW = value1.w - value2.w;
            const deltaX = value1.x - value2.x;
            const deltaY = value1.y - value2.y;
            const deltaZ = value1.z - value2.z;

            return deltaW ** 2 + deltaX ** 2 + deltaY ** 2 + deltaZ ** 2;
        });

        return Vector4.distanceSquared.apply(this, params);
    }

    static divide(...params) {
        Vector4.divide = overload()
            .add([Vector4, Number], function (value1, divider) {
                const factor = 1 / divider;
                return new Vector4(
                    value1.#x * factor,
                    value1.#y * factor,
                    value1.#z * factor,
                    value1.#w * factor
                );
            })
            .add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    value1.#x / value2.#x,
                    value1.#y / value2.#y,
                    value1.#z / value2.#z,
                    value1.#w / value2.#w
                );
            });

        return Vector4.divide.apply(this, params);
    }

    static dot(...params) {
        Vector4.dot = overload([Vector4, Vector4], function (vector1, vector2) {
            const x1 = vector1.#x, y1 = vector1.#y, z1 = vector1.#z, w1 = vector1.#w;
            const x2 = vector2.#x, y2 = vector2.#y, z2 = vector2.#z, w2 = vector2.#w;
            return x1 * x2 + y1 * y2 + z1 * z2 + w1 * w2;
        });

        return Vector4.dot.apply(this, params);
    }

    static hermite(...params) {
        Vector4.hermite = overload([Vector4, Vector4, Vector4, Vector4, Number], function (value1, tangent1, value2, tangent2, amount) {
            return new Vector4(
                MathHelper.hermite(value1.#x, tangent1.#x, value2.#x, tangent2.#x, amount),
                MathHelper.hermite(value1.#y, tangent1.#y, value2.#y, tangent2.#y, amount),
                MathHelper.hermite(value1.#z, tangent1.#z, value2.#z, tangent2.#z, amount),
                MathHelper.hermite(value1.#w, tangent1.#w, value2.#w, tangent2.#w, amount)
            );
        });

        return Vector4.hermite.apply(this, params);
    }

    static lerp(...params) {
        Vector4.lerp = overload([Vector4, Vector4, Number], function (value1, value2, amount) {
            return new Vector4(
                MathHelper.lerp(value1.#x, value2.#x, amount),
                MathHelper.lerp(value1.#y, value2.#y, amount),
                MathHelper.lerp(value1.#z, value2.#z, amount),
                MathHelper.lerp(value1.#w, value2.#w, amount)
            );
        });

        return Vector4.lerp.apply(this, params);
    }

    static max(...params) {
        Vector4.max = overload([Vector4, Vector4], function (value1, value2) {
            return new Vector4(
                Math.max(value1.#x, value2.#x),
                Math.max(value1.#y, value2.#y),
                Math.max(value1.#z, value2.#z),
                Math.max(value1.#w, value2.#w)
            );
        });

        return Vector4.max.apply(this, params);
    }

    static min(...params) {
        Vector4.min = overload([Vector4, Vector4], function (value1, value2) {
            return new Vector4(
                Math.min(value1.#x, value2.#x),
                Math.min(value1.#y, value2.#y),
                Math.min(value1.#z, value2.#z),
                Math.min(value1.#w, value2.#w)
            );
        });

        return Vector4.min.apply(this, params);
    }

    static multiply(...params) {
        Vector4.multiply = overload()
            .add([Vector4, Number], function (value1, value2) {
                return new Vector4(
                    value1.#x * value2,
                    value1.#y * value2,
                    value1.#z * value2,
                    value1.#w * value2
                );
            })
            .add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    value1.#x * value2.#x,
                    value1.#y * value2.#y,
                    value1.#z * value2.#z,
                    value1.#w * value2.#w
                );
            });

        return Vector4.multiply.apply(this, params);
    }

    static negate(...params) {
        Vector4.negate = overload([Vector4], function (value) {
            return new Vector4(-value.#x, -value.#y, -value.#z, -value.#w);
        });

        return Vector4.negate.apply(this, params);
    }

    static normalize(...params) {
        Vector4.normalize = overload([Vector4], function (value) {
            const x = value.#x, y = value.#y, z = value.#z, w = value.#w;
            const factor = 1 / Math.sqrt(x ** 2 + y ** 2 + z ** 2 + w ** 2);
            return new Vector4(x * factor, y * factor, z * factor, w * factor);
        });

        return Vector4.normalize.apply(this, params);
    }

    static smoothStep(...params) {
        Vector4.smoothStep = overload([Vector4, Vector4, Number], function (value1, value2, amount) {
            return new Vector4(
                MathHelper.smoothStep(value1.#x, value2.#x, amount),
                MathHelper.smoothStep(value1.#y, value2.#y, amount),
                MathHelper.smoothStep(value1.#z, value2.#z, amount),
                MathHelper.smoothStep(value1.#w, value2.#w, amount)
            );
        });

        return Vector4.smoothStep.apply(this, params);
    }

    static subtract(...params) {
        Vector4.subtract = overload([Vector4, Vector4], function (value1, value2) {
            return new Vector4(
                value1.#x - value2.#x,
                value1.#y - value2.#y,
                value1.#z - value2.#z,
                value1.#w - value2.#w
            );
        });

        return Vector4.subtract.apply(this, params);
    }

    static transform(...params) {
        Vector4.transform = overload()
            .add([Vector2, Matrix], function (position, matrix) {
                const x = position.x, y = position.y;

                return new Vector4(
                    (x * matrix.m11) + (y * matrix.m21) + matrix.m41,
                    (x * matrix.m12) + (y * matrix.m22) + matrix.m42,
                    (x * matrix.m13) + (y * matrix.m23) + matrix.m43,
                    (x * matrix.m14) + (y * matrix.m24) + matrix.m44
                );
            })
            .add([Vector2, Quaternion], function (value, rotation) {
                const x = value.x, y = value.y;
                const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
                const x2 = rx + rx, y2 = ry + ry, z2 = rz + rz;
                const wz2 = rw * z2, xy2 = rx * y2, zz2 = rz * z2;

                return new Vector4(
                    x * (1.0 - ry * y2 - zz2) + y * (xy2 - wz2),
                    x * (xy2 + wz2) + y * (1.0 - rx * x2 - zz2),
                    x * (rx * z2 - rw * y2) + y * (ry * z2 + rw * x2),
                    1.0
                );
            })
            .add([Vector3, Matrix], function (position, matrix) {
                const x = position.x, y = position.y, z = position.z;

                return new Vector4(
                    (x * matrix.m11) + (y * matrix.m21) + (z * matrix.m31) + matrix.m41,
                    (x * matrix.m12) + (y * matrix.m22) + (z * matrix.m32) + matrix.m42,
                    (x * matrix.m13) + (y * matrix.m23) + (z * matrix.m33) + matrix.m43,
                    (x * matrix.m14) + (y * matrix.m24) + (z * matrix.m34) + matrix.m44
                );
            })
            .add([Vector3, Quaternion], function (position, rotation) {
                const x = position.x, y = position.y, z = position.z;
                const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
                const x2 = rx + rx, y2 = ry + ry, z2 = rz + rz;
                const wx2 = rw * x2, wy2 = rw * y2, wz2 = rw * z2;
                const xx2 = rx * x2, xy2 = rx * y2, xz2 = rx * z2;
                const yy2 = ry * y2, yz2 = ry * z2, zz2 = rz * z2;

                return new Vector4(
                    x * (1.0 - yy2 - zz2) + y * (xy2 - wz2) + z * (xz2 + wy2),
                    x * (xy2 + wz2) + y * (1.0 - xx2 - zz2) + z * (yz2 - wx2),
                    x * (xz2 - wy2) + y * (yz2 + wx2) + z * (1.0 - xx2 - yy2),
                    1.0
                );
            })
            .add([Vector4, Matrix], function (position, matrix) {
                const x = position.#x, y = position.#y, z = position.#z, w = position.#w;

                return new Vector4(
                    (x * matrix.m11) + (y * matrix.m21) + (z * matrix.m31) + (w * matrix.m41),
                    (x * matrix.m12) + (y * matrix.m22) + (z * matrix.m32) + (w * matrix.m42),
                    (x * matrix.m13) + (y * matrix.m23) + (z * matrix.m33) + (w * matrix.m43),
                    (x * matrix.m14) + (y * matrix.m24) + (z * matrix.m34) + (w * matrix.m44)
                );
            })
            .add([Vector4, Quaternion], function (value, rotation) {
                const result = this.transform(new Vector3(value.#x, value.#y, value.#z), rotation);
                result.w = value.#w;
                return result;
            })
            .add([List.T(Vector4), Number, [Matrix, Quaternion], List.T(Vector4), Number, Number], function (sourceArray, sourceIndex, matrixOrQuaternion, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new RangeError(`The length of sourceArray is smaller than sourceIndex + length.`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError(`The length of destinationArray is smaller than destinationIndex + length.`);
                }

                for (let i = 0; i < length; i++) {
                    destinationArray[destinationIndex + i] = this.transform(sourceArray[sourceIndex + i], matrixOrQuaternion);
                }
            })
            .add([List.T(Vector4), Matrix, List.T(Vector4)], function (sourceArray, matrix, destinationArray) {
                this.transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
            })
            .add([List.T(Vector4), Quaternion, List.T(Vector4)], function (sourceArray, rotation, destinationArray) {
                this.transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.length);
            });

        return Vector4.transform.apply(this, params);
    }

    static ["-"](...params) {
        return Vector4.negate(...params);
    }

    ["+"](...params) {
        return Vector4.add(this, ...params);
    }

    ["-"](...params) {
        return Vector4.subtract(this, ...params);
    }

    ["*"](...params) {
        return Vector4.multiply(this, ...params);
    }

    ["/"](...params) {
        return Vector4.divide(this, ...params);
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    equals(...params) {
        Vector4.prototype.equals = overload([Vector4], function (other) {
            return this.#x === other.#x && this.#y === other.#y && this.#z === other.#z && this.#w === other.#w;
        }).any(() => false);

        return Vector4.prototype.equals.apply(this, params);
    }

    length(...params) {
        Vector4.prototype.length = overload([], function () {
            return Math.sqrt(this.#x ** 2 + this.#y ** 2 + this.#z ** 2 + this.#w ** 2);
        });

        return Vector4.prototype.length.apply(this, params);
    }

    lengthSquared(...params) {
        Vector4.prototype.lengthSquared = overload([], function () {
            return this.#x ** 2 + this.#y ** 2 + this.#z ** 2 + this.#w ** 2;
        });

        return Vector4.prototype.lengthSquared.apply(this, params);
    }

    normalize(...params) {
        Vector4.prototype.normalize = overload()
            .add([], function () {
                const factor = 1 / Math.sqrt(this.#x ** 2 + this.#y ** 2 + this.#z ** 2 + this.#w ** 2);
                this.#x *= factor;
                this.#y *= factor;
                this.#z *= factor;
                this.#w *= factor;
            });

        return Vector4.prototype.normalize.apply(this, params);
    }

    toString(...params) {
        Vector4.prototype.toString = overload()
            .add([], function () {
                return JSON.stringify(this);
            });

        return Vector4.prototype.toString.apply(this, params);
    }

    toJSON() {
        return { x: this.#x, y: this.#y, z: this.#z, w: this.#w };
    }
}
