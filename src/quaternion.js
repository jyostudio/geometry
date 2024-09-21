import overload from "@jyostudio/overload";
import Vector3 from "./vector3.js";
import Matrix from "./matrix.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class Quaternion {
    static get identity() {
        return new Quaternion(0, 0, 0, 1);
    }

    #x = 0;

    #y = 0;

    #z = 0;

    #w = 0;

    static ["##STRUCT_CONSTURCTOR##"]() {
        return new Quaternion();
    }

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        Quaternion[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number, Number, Number, Number], function (x, y, z, w) {
                this.#x = x;
                this.#y = y;
                this.#z = z;
                this.#w = w;
            })
            .add([Vector3, Number], function (vectorPart, scalarPart) {
                this.#x = vectorPart.x;
                this.#y = vectorPart.y;
                this.#z = vectorPart.z;
                this.#w = scalarPart;
            });

        return Quaternion[CONSTURCTOR_SYMBOL].apply(this, params);
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

        return Quaternion[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        yield this.#x;
        yield this.#y;
        yield this.#z;
        yield this.#w;
    }

    static add(...params) {
        Quaternion.add = overload([Quaternion, Quaternion], function (quaternion1, quaternion2) {
            return new Quaternion(
                quaternion1.#x + quaternion2.#x,
                quaternion1.#y + quaternion2.#y,
                quaternion1.#z + quaternion2.#z,
                quaternion1.#w + quaternion2.#w
            );
        });

        return Quaternion.add.apply(this, params);
    }

    static concatenate(...params) {
        Quaternion.concatenate = overload([Quaternion, Quaternion], function (value1, value2) {
            const x1 = value1.#x, y1 = value1.#y, z1 = value1.#z, w1 = value1.#w;
            const x2 = value2.#x, y2 = value2.#y, z2 = value2.#z, w2 = value2.#w;

            return new Quaternion(
                ((x2 * w1) + (x1 * w2)) + ((y2 * z1) - (z2 * y1)),
                ((y2 * w1) + (y1 * w2)) + ((z2 * x1) - (x2 * z1)),
                ((z2 * w1) + (z1 * w2)) + ((x2 * y1) - (y2 * x1)),
                (w2 * w1) - (((x2 * x1) + (y2 * y1)) + (z2 * z1))
            );
        });

        return Quaternion.concatenate.apply(this, params);
    }

    static conjugate(...params) {
        Quaternion.conjugate = overload([Quaternion], function (value) {
            return new Quaternion(-value.#x, -value.#y, -value.#z, value.#w);
        });

        return Quaternion.conjugate.apply(this, params);
    }

    static createFromAxisAngle(...params) {
        Quaternion.createFromAxisAngle = overload([Vector3, Number], function (axis, angle) {
            const x = axis.x, y = axis.y, z = axis.z;
            const half = angle * 0.5;
            const sin = Math.sin(half);
            const cos = Math.cos(half);
            return new Quaternion(x * sin, y * sin, z * sin, cos);
        });

        return Quaternion.createFromAxisAngle.apply(this, params);
    }

    static createFromRotationMatrix(...params) {
        Quaternion.createFromRotationMatrix = overload([Matrix], function (matrix) {
            const quaternion = new Quaternion();
            const scale = matrix.m11 + matrix.m22 + matrix.m33;
            let sqrt, half;

            if (scale > 0.0) {
                sqrt = Math.sqrt(scale + 1.0);
                quaternion.w = sqrt * 0.5;
                sqrt = 0.5 / sqrt;

                quaternion.#x = (matrix.m23 - matrix.m32) * sqrt;
                quaternion.#y = (matrix.m31 - matrix.m13) * sqrt;
                quaternion.#z = (matrix.m12 - matrix.m21) * sqrt;

                return quaternion;
            }

            if ((matrix.m11 >= matrix.m22) && (matrix.m11 >= matrix.m33)) {
                sqrt = Math.sqrt(1.0 + matrix.m11 - matrix.m22 - matrix.m33);
                half = 0.5 / sqrt;

                quaternion.#x = 0.5 * sqrt;
                quaternion.#y = (matrix.m12 + matrix.m21) * half;
                quaternion.#z = (matrix.m13 + matrix.m31) * half;
                quaternion.#w = (matrix.m23 - matrix.m32) * half;

                return quaternion;
            }

            if (matrix.m22 > matrix.m33) {
                sqrt = Math.sqrt(1.0 + matrix.m22 - matrix.m11 - matrix.m33);
                half = 0.5 / sqrt;

                quaternion.#x = (matrix.m21 + matrix.m12) * half;
                quaternion.#y = 0.5 * sqrt;
                quaternion.#z = (matrix.m32 + matrix.m23) * half;
                quaternion.#w = (matrix.m31 - matrix.m13) * half;

                return quaternion;
            }

            sqrt = Math.sqrt(1.0 + matrix.m33 - matrix.m11 - matrix.m22);
            half = 0.5 / sqrt;

            quaternion.#x = (matrix.m31 + matrix.m13) * half;
            quaternion.#y = (matrix.m32 + matrix.m23) * half;
            quaternion.#z = 0.5 * sqrt;
            quaternion.#w = (matrix.m12 - matrix.m21) * half;

            return quaternion;
        });

        return Quaternion.createFromRotationMatrix.apply(this, params);
    }

    static createFromYawPitchRoll(...params) {
        Quaternion.createFromYawPitchRoll = overload([Number, Number, Number], function (yaw, pitch, roll) {
            const halfRoll = roll * 0.5;
            const halfPitch = pitch * 0.5;
            const halfYaw = yaw * 0.5;

            const sinRoll = Math.sin(halfRoll);
            const cosRoll = Math.cos(halfRoll);

            const sinPitch = Math.sin(halfPitch);
            const cosPitch = Math.cos(halfPitch);

            const sinYaw = Math.sin(halfYaw);
            const cosYaw = Math.cos(halfYaw);

            return new Quaternion(
                (cosYaw * sinPitch * cosRoll) + (sinYaw * cosPitch * sinRoll),
                (sinYaw * cosPitch * cosRoll) - (cosYaw * sinPitch * sinRoll),
                (cosYaw * cosPitch * sinRoll) - (sinYaw * sinPitch * cosRoll),
                (cosYaw * cosPitch * cosRoll) + (sinYaw * sinPitch * sinRoll)
            );
        });

        return Quaternion.createFromYawPitchRoll.apply(this, params);
    }

    static divide(...params) {
        Quaternion.divide = overload([Quaternion, Quaternion], function (quaternion1, quaternion2) {
            const q1x = quaternion1.#x, q1y = quaternion1.#y, q1z = quaternion1.#z, q1w = quaternion1.#w;
            const q2x = quaternion2.#x, q2y = quaternion2.#y, q2z = quaternion2.#z, q2w = quaternion2.#w;

            const quaternion = new Quaternion();

            const q2MagnitudeSquared = quaternion2.lengthSquared();
            const inverseQ2Magnitude = 1 / q2MagnitudeSquared;

            const inverseQ2x = -q2x * inverseQ2Magnitude;
            const inverseQ2y = -q2y * inverseQ2Magnitude;
            const inverseQ2z = -q2z * inverseQ2Magnitude;
            const inverseQ2w = q2w * inverseQ2Magnitude;

            const crossProductYz = (q1y * inverseQ2z) - (q1z * inverseQ2y);
            const crossProductZx = (q1z * inverseQ2x) - (q1x * inverseQ2z);
            const crossProductXy = (q1x * inverseQ2y) - (q1y * inverseQ2x);
            const dotProduct = (q1x * inverseQ2x) + (q1y * inverseQ2y) + (q1z * inverseQ2z);

            quaternion.#x = (q1x * inverseQ2w) + (inverseQ2x * q1w) + crossProductYz;
            quaternion.#y = (q1y * inverseQ2w) + (inverseQ2y * q1w) + crossProductZx;
            quaternion.#z = (q1z * inverseQ2w) + (inverseQ2z * q1w) + crossProductXy;
            quaternion.#w = (q1w * inverseQ2w) - dotProduct;

            return quaternion;
        });

        return Quaternion.divide.apply(this, params);
    }

    static dot(...params) {
        Quaternion.dot = overload([Quaternion, Quaternion], function (quaternion1, quaternion2) {
            const x1 = quaternion1.#x, y1 = quaternion1.#y, z1 = quaternion1.#z, w1 = quaternion1.#w;
            const x2 = quaternion2.#x, y2 = quaternion2.#y, z2 = quaternion2.#z, w2 = quaternion2.#w;
            return (x1 * x2) + (y1 * y2) + (z1 * z2) + (w1 * w2);
        });

        return Quaternion.dot.apply(this, params);
    }

    static inverse(...params) {
        Quaternion.inverse = overload([Quaternion], function (quaternion) {
            const x = quaternion.#x, y = quaternion.#y, z = quaternion.#z, w = quaternion.#w;
            const x2 = x * x, y2 = y * y, z2 = z * z, w2 = w * w;
            const num = 1 / (x2 + y2 + z2 + w2);

            return new Quaternion(
                -x * num,
                -y * num,
                -z * num,
                w * num
            );
        });

        return Quaternion.inverse.apply(this, params);
    }

    static lerp(...params) {
        Quaternion.lerp = overload([Quaternion, Quaternion, Number], function (quaternion1, quaternion2, amount) {
            const x1 = quaternion1.#x, y1 = quaternion1.#y, z1 = quaternion1.#z, w1 = quaternion1.#w;
            const x2 = quaternion2.#x, y2 = quaternion2.#y, z2 = quaternion2.#z, w2 = quaternion2.#w;

            const weight = 1 - amount;
            const sign = this.dot(quaternion1, quaternion2) >= 0 ? 1 : -1;

            const interpolate = (v1, v2) => weight * v1 + sign * amount * v2;

            const quaternion = new Quaternion(
                interpolate(x1, x2),
                interpolate(y1, y2),
                interpolate(z1, z2),
                interpolate(w1, w2)
            );

            quaternion.normalize();

            return quaternion;
        });

        return Quaternion.lerp.apply(this, params);
    }

    static multiply(...params) {
        Quaternion.multiply = overload()
            .add([Quaternion, Number], function (quaternion1, scaleFactor) {
                return new Quaternion(
                    quaternion1.#x * scaleFactor,
                    quaternion1.#y * scaleFactor,
                    quaternion1.#z * scaleFactor,
                    quaternion1.#w * scaleFactor
                );
            })
            .add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                const x1 = quaternion1.#x, y1 = quaternion1.#y, z1 = quaternion1.#z, w1 = quaternion1.#w;
                const x2 = quaternion2.#x, y2 = quaternion2.#y, z2 = quaternion2.#z, w2 = quaternion2.#w;

                const yz = (y1 * z2) - (z1 * y2);
                const zx = (z1 * x2) - (x1 * z2);
                const xy = (x1 * y2) - (y1 * x2);
                const xyz = ((x1 * x2) + (y1 * y2)) + (z1 * z2);

                return new Quaternion(
                    ((x1 * w2) + (x2 * w1)) + yz,
                    ((y1 * w2) + (y2 * w1)) + zx,
                    ((z1 * w2) + (z2 * w1)) + xy,
                    (w1 * w2) - xyz
                );
            });

        return Quaternion.multiply.apply(this, params);
    }

    static negate(...params) {
        Quaternion.negate = overload([Quaternion], function (quaternion) {
            return new Quaternion(-quaternion.#x, -quaternion.#y, -quaternion.#z, -quaternion.#w);
        });

        return Quaternion.negate.apply(this, params);
    }

    static normalize(...params) {
        Quaternion.normalize = overload([Quaternion], function (quaternion) {
            const factor = 1 / Math.sqrt(quaternion.#x ** 2 + quaternion.#y ** 2 + quaternion.#z ** 2 + quaternion.#w ** 2);

            return new Quaternion(
                quaternion.#x * factor,
                quaternion.#y * factor,
                quaternion.#z * factor,
                quaternion.#w * factor
            );
        });

        return Quaternion.normalize.apply(this, params);
    }

    static slerp(...params) {
        Quaternion.slerp = overload([Quaternion, Quaternion, Number], function (quaternion1, quaternion2, amount) {
            const x1 = quaternion1.#x, y1 = quaternion1.#y, z1 = quaternion1.#z, w1 = quaternion1.#w;
            const x2 = quaternion2.#x, y2 = quaternion2.#y, z2 = quaternion2.#z, w2 = quaternion2.#w;

            let dotProduct = this.dot(quaternion1, quaternion2);
            const isNegative = dotProduct < 0;
            dotProduct = isNegative ? -dotProduct : dotProduct;

            let scale0, scale1;
            if (dotProduct > 0.999999) {
                scale1 = 1 - amount;
                scale0 = isNegative ? -amount : amount;
            } else {
                const angle = Math.acos(dotProduct);
                const sinAngle = 1.0 / Math.sin(angle);
                scale1 = Math.sin((1 - amount) * angle) * sinAngle;
                scale0 = Math.sin(amount * angle) * sinAngle;
                isNegative && (scale0 = -scale0);
            }

            const interpolate = (a, b) => (scale1 * a) + (scale0 * b);

            return new Quaternion(
                interpolate(x1, x2),
                interpolate(y1, y2),
                interpolate(z1, z2),
                interpolate(w1, w2)
            );
        });

        return Quaternion.slerp.apply(this, params);
    }

    static subtract(...params) {
        Quaternion.subtract = overload([Quaternion, Quaternion], function (quaternion1, quaternion2) {
            return new Quaternion(
                quaternion1.#x - quaternion2.#x,
                quaternion1.#y - quaternion2.#y,
                quaternion1.#z - quaternion2.#z,
                quaternion1.#w - quaternion2.#w
            );
        });

        return Quaternion.subtract.apply(this, params);
    }

    static ["-"](...params) {
        return Quaternion.negate(...params);
    }

    ["+"](...params) {
        return Quaternion.add(this, ...params);
    }

    ["-"](...params) {
        return Quaternion.subtract(this, ...params);
    }

    ["*"](...params) {
        return Quaternion.multiply(this, ...params);
    }

    ["/"](...params) {
        return Quaternion.divide(this, ...params);
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    conjugate(...params) {
        Quaternion.prototype.conjugate = overload([], function () {
            this.#x = -this.#x;
            this.#y = -this.#y;
            this.#z = -this.#z;
        });

        return Quaternion.prototype.conjugate.apply(this, params);
    }

    length(...params) {
        Quaternion.prototype.length = overload([], function () {
            return Math.sqrt(this.#x ** 2 + this.#y ** 2 + this.#z ** 2 + this.#w ** 2);
        });

        return Quaternion.prototype.length.apply(this, params);
    }

    lengthSquared(...params) {
        Quaternion.prototype.lengthSquared = overload([], function () {
            return this.#x ** 2 + this.#y ** 2 + this.#z ** 2 + this.#w ** 2;
        });

        return Quaternion.prototype.lengthSquared.apply(this, params);
    }

    normalize(...params) {
        Quaternion.prototype.normalize = overload([], function () {
            const num = 1 / Math.sqrt(this.#x ** 2 + this.#y ** 2 + this.#z ** 2 + this.#w ** 2);
            this.#x *= num;
            this.#y *= num;
            this.#z *= num;
            this.#w *= num;
        });

        return Quaternion.prototype.normalize.apply(this, params);
    }

    equals(...params) {
        Quaternion.prototype.equals = overload([Quaternion], function (other) {
            return this.#x === other.#x && this.#y === other.#y && this.#z === other.#z && this.w === other.#w;
        }).any(() => false);

        return Quaternion.prototype.equals.apply(this, params);
    }

    toString(...params) {
        Quaternion.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return Quaternion.prototype.toString.apply(this, params);
    }

    toJSON() {
        return {
            x: this.#x,
            y: this.#y,
            z: this.#z,
            w: this.#w
        };
    }
}
