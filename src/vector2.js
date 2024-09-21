import overload from "@jyostudio/overload";
import List from "@jyostudio/list";
import Vector3 from "./vector3.js";
import Matrix from "./matrix.js";
import Quaternion from "./quaternion.js";
import MathHelper from "./math_helper.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class Vector2 {
    static get one() {
        return new Vector2(1, 1);
    }

    static get unitX() {
        return new Vector2(1, 0);
    }

    static get unitY() {
        return new Vector2(0, 1);
    }

    static get zero() {
        return new Vector2(0, 0);
    }

    #x = 0;

    #y = 0;

    static ["##STRUCT_CONSTURCTOR##"]() {
        return Vector2.zero;
    }

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        Vector2[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number], function (value) {
                this.#x = value;
                this.#y = value;
            })
            .add([Number, Number], function (x, y) {
                this.#x = x;
                this.#y = y;
            });

        return Vector2[CONSTURCTOR_SYMBOL].apply(this, params);
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
            }
        });

        return Vector2[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        yield this.#x;
        yield this.#y;
    }

    static add(...params) {
        Vector2.add = overload([Vector2, Vector2], function (value1, value2) {
            return new Vector2(
                value1.#x + value2.#x,
                value1.#y + value2.#y
            );
        });

        return Vector2.add.apply(this, params);
    }

    static barycentric(...params) {
        Vector2.barycentric = overload([Vector2, Vector2, Vector2, Number, Number], function (value1, value2, value3, amount1, amount2) {
            return new Vector2(
                MathHelper.barycentric(value1.#x, value2.#x, value3.#x, amount1, amount2),
                MathHelper.barycentric(value1.#y, value2.#y, value3.#y, amount1, amount2)
            );
        });

        return Vector2.barycentric.apply(this, params);
    }

    static catmullRom(...params) {
        Vector2.catmullRom = overload([Vector2, Vector2, Vector2, Vector2, Number], function (value1, value2, value3, value4, amount) {
            return new Vector2(
                MathHelper.catmullRom(value1.#x, value2.#x, value3.#x, value4.#x, amount),
                MathHelper.catmullRom(value1.#y, value2.#y, value3.#y, value4.#y, amount)
            );
        });

        return Vector2.catmullRom.apply(this, params);
    }

    static clamp(...params) {
        Vector2.clamp = overload([Vector2, Vector2, Vector2], function (value1, min, max) {
            return new Vector2(
                MathHelper.clamp(value1.#x, min.#x, max.#x),
                MathHelper.clamp(value1.#y, min.#y, max.#y)
            );
        });

        return Vector2.clamp.apply(this, params);
    }

    static distance(...params) {
        Vector2.distance = overload([Vector2, Vector2], function (value1, value2) {
            const v1 = value1.#x - value2.#x;
            const v2 = value1.#y - value2.#y;
            return Math.sqrt((v1 * v1) + (v2 * v2));
        });

        return Vector2.distance.apply(this, params);
    }

    static distanceSquared(...params) {
        Vector2.distanceSquared = overload([Vector2, Vector2], function (value1, value2) {
            const v1 = value1.#x - value2.#x;
            const v2 = value1.#y - value2.#y;
            return (v1 * v1) + (v2 * v2);
        });

        return Vector2.distanceSquared.apply(this, params);
    }

    static divide(...params) {
        Vector2.divide = overload()
            .add([Vector2, Number], function (value1, divider) {
                const factor = 1 / divider;
                return new Vector2(
                    value1.#x * factor,
                    value1.#y * factor
                );
            })
            .add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.#x / value2.#x,
                    value1.#y / value2.#y
                );
            });

        return Vector2.divide.apply(this, params);
    }

    static dot(...params) {
        Vector2.dot = overload([Vector2, Vector2], function (value1, value2) {
            return (value1.#x * value2.#x) + (value1.#y * value2.#y);
        });

        return Vector2.dot.apply(this, params);
    }

    static hermite(...params) {
        Vector2.hermite = overload([Vector2, Vector2, Vector2, Vector2, Number], function (value1, tangent1, value2, tangent2, amount) {
            return new Vector2(
                MathHelper.hermite(value1.#x, tangent1.#x, value2.#x, tangent2.#x, amount),
                MathHelper.hermite(value1.#y, tangent1.#y, value2.#y, tangent2.#y, amount)
            );
        });

        return Vector2.hermite.apply(this, params);
    }

    static lerp(...params) {
        Vector2.lerp = overload([Vector2, Vector2, Number], function (value1, value2, amount) {
            return new Vector2(
                MathHelper.lerp(value1.#x, value2.#x, amount),
                MathHelper.lerp(value1.#y, value2.#y, amount)
            );
        });

        return Vector2.lerp.apply(this, params);
    }

    static max(...params) {
        Vector2.max = overload([Vector2, Vector2], function (value1, value2) {
            return new Vector2(
                value1.#x > value2.#x ? value1.#x : value2.#x,
                value1.#y > value2.#y ? value1.#y : value2.#y
            );
        });

        return Vector2.max.apply(this, params);
    }

    static min(...params) {
        Vector2.min = overload([Vector2, Vector2], function (value1, value2) {
            return new Vector2(
                value1.#x < value2.#x ? value1.#x : value2.#x,
                value1.#y < value2.#y ? value1.#y : value2.#y
            );
        });

        return Vector2.min.apply(this, params);
    }

    static multiply(...params) {
        Vector2.multiply = overload()
            .add([Vector2, Number], function (value1, scaleFactor) {
                return new Vector2(
                    value1.#x * scaleFactor,
                    value1.#y * scaleFactor
                );
            })
            .add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.#x * value2.#x,
                    value1.#y * value2.#y
                );
            });

        return Vector2.multiply.apply(this, params);
    }

    static negate(...params) {
        Vector2.negate = overload([Vector2], function (value) {
            return new Vector2(
                -value.#x,
                -value.#y
            );
        });

        return Vector2.negate.apply(this, params);
    }

    static normalize(...params) {
        Vector2.normalize = overload([Vector2], function (value) {
            const val = 1.0 / Math.sqrt((value.#x * value.#x) + (value.#y * value.#y));
            return new Vector2(
                value.#x * val,
                value.#y * val
            );
        });

        return Vector2.normalize.apply(this, params);
    }

    static reflect(...params) {
        Vector2.reflect = overload([Vector2, Vector2], function (vector, normal) {
            const val = 2.0 * ((vector.#x * normal.#x) + (vector.#y * normal.#y));
            return new Vector2(
                vector.#x - (normal.#x * val),
                vector.#y - (normal.#y * val)
            );
        });

        return Vector2.reflect.apply(this, params);
    }

    static smoothStep(...params) {
        Vector2.smoothStep = overload([Vector2, Vector2, Number], function (value1, value2, amount) {
            return new Vector2(
                MathHelper.smoothStep(value1.#x, value2.#x, amount),
                MathHelper.smoothStep(value1.#y, value2.#y, amount)
            );
        });

        return Vector2.smoothStep.apply(this, params);
    }

    static subtract(...params) {
        Vector2.subtract = overload([Vector2, Vector2], function (value1, value2) {
            return new Vector2(
                value1.#x - value2.#x,
                value1.#y - value2.#y
            );
        });

        return Vector2.subtract.apply(this, params);
    }

    static transform(...params) {
        Vector2.transform = overload()
            .add([Vector2, Matrix], function (position, matrix) {
                return new Vector2(
                    (position.#x * matrix.m11) + (position.#y * matrix.m21) + matrix.m41,
                    (position.#x * matrix.m12) + (position.#y * matrix.m22) + matrix.m42
                );
            })
            .add([Vector2, Quaternion], function (value, rotation) {
                const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
                const x = value.#x, y = value.#y;
                const rot1 = new Vector3(rx + rx, ry + ry, rz + rz);
                const rot2 = new Vector3(rx, rx, rw);
                const rot3 = new Vector3(1, ry, rz);
                const rot4 = Vector3.multiply(rot1, rot2);
                const rot5 = Vector3.multiply(rot1, rot3);
                return new Vector2(
                    (x * (1.0 - rot5.y - rot5.z) + y * (rot4.y - rot4.z)),
                    (x * (rot4.y + rot4.z) + y * (1.0 - rot4.x - rot5.z))
                );
            })
            .add([List.T(Vector2), Number, Matrix, List.T(Vector2), Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new RangeError("The length of sourceArray is smaller than sourceIndex + length.");
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError("The length of destinationArray is smaller than destinationIndex + length.");
                }

                for (let x = 0; x < length; x++) {
                    const position = sourceArray[sourceIndex + x];
                    const destination = destinationArray[destinationIndex + x];
                    destination.#x = (position.#x * matrix.m11) + (position.#y * matrix.m21) + matrix.m41;
                    destination.#y = (position.#x * matrix.m12) + (position.#y * matrix.m22) + matrix.m42;
                    destinationArray[destinationIndex + x] = destination;
                }
            })
            .add([List.T(Vector2), Number, Quaternion, List.T(Vector2), Number, Number], function (sourceArray, sourceIndex, rotation, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new RangeError(`The length of sourceArray is less than sourceIndex + length.`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError(`The length of destinationArray is less than destinationIndex + length.`);
                }

                for (let x = 0; x < length; x++) {
                    const position = sourceArray[sourceIndex + x];
                    const destination = destinationArray[destinationIndex + x];

                    const v = this.transform(position, rotation);

                    destination.#x = v.#x;
                    destination.#y = v.#y;

                    destinationArray[destinationIndex + x] = destination;
                }
            })
            .add([List.T(Vector2), Matrix, List.T(Vector2)], function (sourceArray, matrix, destinationArray) {
                this.transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
            })
            .add([List.T(Vector2), Quaternion, List.T(Vector2)], function (sourceArray, rotation, destinationArray) {
                this.transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.length);
            });

        return Vector2.transform.apply(this, params);
    }

    static transformNormal(...params) {
        Vector2.transformNormal = overload()
            .add([Vector2, Matrix], function (normal, matrix) {
                return new Vector2(
                    normal.#x * matrix.m11 + normal.#y * matrix.m21,
                    normal.#x * matrix.m12 + normal.#y * matrix.m22
                );
            })
            .add([List.T(Vector2), Number, Matrix, List.T(Vector2), Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new RangeError(`The length of sourceArray is smaller than sourceIndex + length.`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError(`The length of destinationArray is smaller than destinationIndex + length.`);
                }

                for (let i = 0; i < length; i++) {
                    destinationArray[destinationIndex + i] = this.transformNormal(sourceArray[sourceIndex + i], matrix);
                }
            })
            .add([List.T(Vector2), Matrix, List.T(Vector2)], function (sourceArray, matrix, destinationArray) {
                if (destinationArray.length < sourceArray.length) {
                    throw new RangeError(`The length of destinationArray is smaller than the length of sourceArray.`);
                }

                for (let i = 0; i < sourceArray.length; i++) {
                    destinationArray[i] = this.transformNormal(sourceArray[i], matrix);
                }
            });

        return Vector2.transformNormal.apply(this, params);
    }

    static ["-"](...params) {
        return Vector2.negate(...params);
    }

    ["+"](...params) {
        return Vector2.add(this, ...params);
    }

    ["-"](...params) {
        return Vector2.subtract(this, ...params);
    }

    ["*"](...params) {
        return Vector2.multiply(this, ...params);
    }

    ["/"](...params) {
        return Vector2.divide(this, ...params);
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    length(...params) {
        Vector2.prototype.length = overload([], function () {
            return Math.sqrt(this.#x ** 2 + this.#y ** 2);
        });

        return Vector2.prototype.length.apply(this, params);
    }

    lengthSquared(...params) {
        Vector2.prototype.lengthSquared = overload([], function () {
            return this.#x ** 2 + this.#y ** 2;
        });

        return Vector2.prototype.lengthSquared.apply(this, params);
    }

    normalize(...params) {
        Vector2.prototype.normalize = overload([], function () {
            const val = 1.0 / this.length();
            this.#x *= val;
            this.#y *= val;
        });

        return Vector2.prototype.normalize.apply(this, params);
    }

    equals(...params) {
        Vector2.prototype.equals = overload([Vector2], function (other) {
            return this.#x === other.#x && this.#y === other.#y;
        }).any(() => false);

        return Vector2.prototype.equals.apply(this, params);
    }

    toString(...params) {
        Vector2.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return Vector2.prototype.toString.apply(this, params);
    }

    toJSON() {
        return { x: this.#x, y: this.#y };
    }
}
