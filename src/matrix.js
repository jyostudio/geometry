import overload from "@jyostudio/overload";
import Vector3 from "./vector3.js";
import Quaternion from "./quaternion.js";
import Plane from "./plane.js";
import MathHelper from "./math_helper.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class Matrix {
    static get identity() {
        return new Matrix(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        );
    }

    #m11 = 0;

    #m12 = 0;

    #m13 = 0;

    #m14 = 0;

    #m21 = 0;

    #m22 = 0;

    #m23 = 0;

    #m24 = 0;

    #m31 = 0;

    #m32 = 0;

    #m33 = 0;

    #m34 = 0;

    #m41 = 0;

    #m42 = 0;

    #m43 = 0;

    #m44 = 0;

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        Matrix[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () {
                return Matrix[CONSTURCTOR_SYMBOL].call(this,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0
                );
            })
            .add([Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number], function (m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
                [
                    this.m11, this.m12, this.m13, this.m14,
                    this.m21, this.m22, this.m23, this.m24,
                    this.m31, this.m32, this.m33, this.m34,
                    this.m41, this.m42, this.m43, this.m44
                ] = [
                        m11, m12, m13, m14,
                        m21, m22, m23, m24,
                        m31, m32, m33, m34,
                        m41, m42, m43, m44
                    ];
            });

        return Matrix[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        Object.defineProperties(this, {
            m11: {
                get: () => this.#m11,
                set: overload([Number], value => this.#m11 = value)
            },
            m12: {
                get: () => this.#m12,
                set: overload([Number], value => this.#m12 = value)
            },
            m13: {
                get: () => this.#m13,
                set: overload([Number], value => this.#m13 = value)
            },
            m14: {
                get: () => this.#m14,
                set: overload([Number], value => this.#m14 = value)
            },
            m21: {
                get: () => this.#m21,
                set: overload([Number], value => this.#m21 = value)
            },
            m22: {
                get: () => this.#m22,
                set: overload([Number], value => this.#m22 = value)
            },
            m23: {
                get: () => this.#m23,
                set: overload([Number], value => this.#m23 = value)
            },
            m24: {
                get: () => this.#m24,
                set: overload([Number], value => this.#m24 = value)
            },
            m31: {
                get: () => this.#m31,
                set: overload([Number], value => this.#m31 = value)
            },
            m32: {
                get: () => this.#m32,
                set: overload([Number], value => this.#m32 = value)
            },
            m33: {
                get: () => this.#m33,
                set: overload([Number], value => this.#m33 = value)
            },
            m34: {
                get: () => this.#m34,
                set: overload([Number], value => this.#m34 = value)
            },
            m41: {
                get: () => this.#m41,
                set: overload([Number], value => this.#m41 = value)
            },
            m42: {
                get: () => this.#m42,
                set: overload([Number], value => this.#m42 = value)
            },
            m43: {
                get: () => this.#m43,
                set: overload([Number], value => this.#m43 = value)
            },
            m44: {
                get: () => this.#m44,
                set: overload([Number], value => this.#m44 = value)
            },
            backward: {
                get: () => new Vector3(this.m31, this.m32, this.m33),
                set: overload([Vector3], function (value) {
                    this.m31 = value.x;
                    this.m32 = value.y;
                    this.m33 = value.z;
                })
            },
            down: {
                get: () => new Vector3(-this.m21, -this.m22, -this.m23),
                set: overload([Vector3], function (value) {
                    this.m21 = -value.x;
                    this.m22 = -value.y;
                    this.m23 = -value.z;
                })
            },
            forward: {
                get: () => new Vector3(-this.m31, -this.m32, -this.m33),
                set: overload([Vector3], function (value) {
                    this.m31 = -value.x;
                    this.m32 = -value.y;
                    this.m33 = -value.z;
                })
            },
            left: {
                get: () => new Vector3(-this.m11, -this.m12, -this.m13),
                set: overload([Vector3], function (value) {
                    this.m11 = -value.x;
                    this.m12 = -value.y;
                    this.m13 = -value.z;
                })
            },
            right: {
                get: () => new Vector3(this.m11, this.m12, this.m13),
                set: overload([Vector3], function (value) {
                    this.m11 = value.x;
                    this.m12 = value.y;
                    this.m13 = value.z;
                })
            },
            translation: {
                get: () => new Vector3(this.m41, this.m42, this.m43),
                set: overload([Vector3], function (value) {
                    this.m41 = value.x;
                    this.m42 = value.y;
                    this.m43 = value.z;
                })
            },
            up: {
                get: () => new Vector3(this.m21, this.m22, this.m23),
                set: overload([Vector3], function (value) {
                    this.m21 = value.x;
                    this.m22 = value.y;
                    this.m23 = value.z;
                })
            }
        });

        return Matrix[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        const elements = [
            this.m11, this.m12, this.m13, this.m14,
            this.m21, this.m22, this.m23, this.m24,
            this.m31, this.m32, this.m33, this.m34,
            this.m41, this.m42, this.m43, this.m44
        ];
        for (const element of elements) {
            yield element;
        }
    }

    static add(...params) {
        Matrix.add = overload([Matrix, Matrix], function (matrix1, matrix2) {
            const elements1 = [...matrix1];
            const elements2 = [...matrix2];
            const resultElements = elements1.map((value, index) => value + elements2[index]);
            return new Matrix(...resultElements);
        });

        return Matrix.add.apply(this, params);
    }

    static createBillboard(...params) {
        Matrix.createBillboard = overload([Vector3, Vector3, Vector3, [Vector3, null]], function (objectPosition, cameraPosition, cameraUpVector, cameraForwardVector) {
            const { x: ox, y: oy, z: oz } = objectPosition;
            let vector = new Vector3(
                ox - cameraPosition.x,
                oy - cameraPosition.y,
                oz - cameraPosition.z
            );
            let vector2 = new Vector3();
            let vector3 = new Vector3();
            const num = vector.lengthSquared();

            if (num < 0.0001) {
                if (null === cameraForwardVector) {
                    vector = Vector3.forward;
                } else {
                    vector.x = -cameraForwardVector.x;
                    vector.y = -cameraForwardVector.y;
                    vector.z = -cameraForwardVector.z;
                }
            } else {
                vector.normalize();
            }

            vector3 = Vector3.cross(cameraUpVector, vector);
            vector3.normalize();
            vector2 = Vector3.cross(vector, vector3);

            return new Matrix(
                vector3.x, vector3.y, vector3.z, 0,
                vector2.x, vector2.y, vector2.z, 0,
                vector.x, vector.y, vector.z, 0,
                ox, oy, oz, 1
            );
        });

        return Matrix.createBillboard.apply(this, params);
    }

    static createConstrainedBillboard(...params) {
        Matrix.createConstrainedBillboard = overload([Vector3, Vector3, Vector3, [Vector3, null], [Vector3, null]], function (objectPosition, cameraPosition, rotateAxis, cameraForwardVector, objectForwardVector) {
            const { x: ox, y: oy, z: oz } = objectPosition;
            let num;
            let vector = new Vector3();
            let vector2 = new Vector3(
                ox - cameraPosition.x,
                oy - cameraPosition.y,
                oz - cameraPosition.z
            );
            let vector3 = new Vector3();

            let num2 = vector2.lengthSquared();
            if (num2 < 0.0001) {
                if (!cameraForwardVector) {
                    vector2 = Vector3.forward;
                } else {
                    vector2.x = -cameraForwardVector.x;
                    vector2.y = -cameraForwardVector.y;
                    vector2.z = -cameraForwardVector.z;
                }
            } else {
                vector2 = Vector3.multiply(vector2, (1 / (Math.sqrt(num2))));
            }

            let vector4 = rotateAxis;
            num = Vector3.dot(rotateAxis, vector2);

            if (Math.abs(num) > 0.9982547) {
                let vec3Forward = Vector3.forward;
                if (objectForwardVector) {
                    vector = objectForwardVector;
                    num = Vector3.dot(rotateAxis, vector);
                    if (Math.abs(num) > 0.9982547) {
                        num = ((rotateAxis.x * vec3Forward.x) + (rotateAxis.y * vec3Forward.y)) + (rotateAxis.z * vec3Forward.z);
                        vector = (Math.abs(num) > 0.9982547) ? Vector3.right : vec3Forward;
                    }
                } else {
                    num = ((rotateAxis.x * vec3Forward.x) + (rotateAxis.y * vec3Forward.y)) + (rotateAxis.z * vec3Forward.z);
                    vector = (Math.abs(num) > 0.9982547) ? Vector3.right : vec3Forward;
                }
                vector3 = Vector3.cross(rotateAxis, vector);
                vector3.normalize();
                vector = Vector3.cross(vector3, rotateAxis);
                vector.normalize();
            } else {
                vector3 = Vector3.cross(rotateAxis, vector2);
                vector3.normalize();
                vector = Vector3.cross(vector3, vector4);
                vector.normalize();
            }

            return new Matrix(
                vector3.x, vector3.y, vector3.z, 0,
                vector4.x, vector4.y, vector4.z, 0,
                vector.x, vector.y, vector.z, 0,
                ox, oy, oz, 1
            );
        });

        return Matrix.createConstrainedBillboard.apply(this, params);
    }

    static createFromAxisAngle(...params) {
        Matrix.createFromAxisAngle = overload([Vector3, Number], function (axis, angle) {
            const { x: axisX, y: axisY, z: axisZ } = axis;
            const sinAngle = Math.sin(angle);
            const cosAngle = Math.cos(angle);
            const axisXSquare = axisX * axisX;
            const axisYSquare = axisY * axisY;
            const axisZSquare = axisZ * axisZ;
            const axisXY = axisX * axisY;
            const axisXZ = axisX * axisZ;
            const axisYZ = axisY * axisZ;

            return new Matrix(
                axisXSquare + (cosAngle * (1 - axisXSquare)), (axisXY - (cosAngle * axisXY)) + (sinAngle * axisZ), (axisXZ - (cosAngle * axisXZ)) - (sinAngle * axisY), 0,
                (axisXY - (cosAngle * axisXY)) - (sinAngle * axisZ), axisYSquare + (cosAngle * (1 - axisYSquare)), (axisYZ - (cosAngle * axisYZ)) + (sinAngle * axisX), 0,
                (axisXZ - (cosAngle * axisXZ)) + (sinAngle * axisY), (axisYZ - (cosAngle * axisYZ)) - (sinAngle * axisX), axisZSquare + (cosAngle * (1 - axisZSquare)), 0,
                0, 0, 0, 1
            );
        });

        return Matrix.createFromAxisAngle.apply(this, params);
    }

    static createFromQuaternion(...params) {
        Matrix.createFromQuaternion = overload([Quaternion], function (quaternion) {
            const { x, y, z, w } = quaternion;
            const [xx, yy, zz, xy, xz, yz, wx, wy, wz] = [x * x, y * y, z * z, x * y, x * z, y * z, w * x, w * y, w * z];

            return new Matrix(
                1 - 2 * (yy + zz), 2 * (xy + wz), 2 * (xz - wy), 0,
                2 * (xy - wz), 1 - 2 * (zz + xx), 2 * (yz + wx), 0,
                2 * (xz + wy), 2 * (yz - wx), 1 - 2 * (yy + xx), 0,
                0, 0, 0, 1
            );
        });

        return Matrix.createFromQuaternion.apply(this, params);
    }

    static createFromYawPitchRoll(...params) {
        Matrix.createFromYawPitchRoll = overload([Number, Number, Number], function (yaw, pitch, roll) {
            const quaternion = Quaternion.createFromYawPitchRoll(yaw, pitch, roll);
            return this.createFromQuaternion(quaternion);
        });

        return Matrix.createFromYawPitchRoll.apply(this, params);
    }

    static createLookAt(...params) {
        Matrix.createLookAt = overload([Vector3, Vector3, Vector3], function (cameraPosition, cameraTarget, cameraUpVector) {
            const vector = Vector3.normalize(Vector3.subtract(cameraPosition, cameraTarget));
            const vector2 = Vector3.normalize(Vector3.cross(cameraUpVector, vector));
            const vector3 = Vector3.cross(vector, vector2);
            return new Matrix(
                vector2.x, vector3.x, vector.x, 0,
                vector2.y, vector3.y, vector.y, 0,
                vector2.z, vector3.z, vector.z, 0,
                -Vector3.dot(vector2, cameraPosition), -Vector3.dot(vector3, cameraPosition), -Vector3.dot(vector, cameraPosition), 1
            );
        });

        return Matrix.createLookAt.apply(this, params);
    }

    static createOrthographic(...params) {
        Matrix.createOrthographic = overload([Number, Number, Number, Number], function (width, height, zNearPlane, zFarPlane) {
            const result = new Matrix();
            const invWidth = 2 / width;
            const invHeight = 2 / height;
            const invDepth = 1 / (zNearPlane - zFarPlane);
            const zNearRatio = zNearPlane / (zNearPlane - zFarPlane);

            result.m11 = invWidth;
            result.m12 = result.m13 = result.m14 = 0;
            result.m22 = invHeight;
            result.m21 = result.m23 = result.m24 = 0;
            result.m33 = invDepth;
            result.m31 = result.m32 = result.m34 = 0;
            result.m41 = result.m42 = 0;
            result.m43 = zNearRatio;
            result.m44 = 1;

            return result;
        });

        return Matrix.createOrthographic.apply(this, params);
    }

    static createOrthographicOffCenter(...params) {
        Matrix.createOrthographicOffCenter = overload([Number, Number, Number, Number, Number, Number], function (left, right, bottom, top, zNearPlane, zFarPlane) {
            return new Matrix(
                (2.0 / (right - left)), 0, 0, 0,
                0, (2.0 / (top - bottom)), 0, 0,
                0, 0, (1.0 / (zNearPlane - zFarPlane)), 0,
                ((left + right) / (left - right)), ((top + bottom) / (bottom - top)), (zNearPlane / (zNearPlane - zFarPlane)), 1
            );
        });

        return Matrix.createOrthographicOffCenter.apply(this, params);
    }

    static createPerspective(...params) {
        Matrix.createPerspective = overload([Number, Number, Number, Number], function (width, height, nearPlaneDistance, farPlaneDistance) {
            if (nearPlaneDistance <= 0) {
                throw new RangeError("nearPlaneDistance <= 0");
            }

            if (farPlaneDistance <= 0) {
                throw new RangeError("farPlaneDistance <= 0");
            }

            if (nearPlaneDistance >= farPlaneDistance) {
                throw new RangeError("nearPlaneDistance >= farPlaneDistance");
            }

            const result = new Matrix();
            result.m11 = (2 * nearPlaneDistance) / width;
            result.m22 = (2 * nearPlaneDistance) / height;
            result.m33 = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
            result.m34 = -1;
            result.m43 = (nearPlaneDistance * farPlaneDistance) / (nearPlaneDistance - farPlaneDistance);
            return result;
        });

        return Matrix.createPerspective.apply(this, params);
    }

    static createPerspectiveFieldOfView(...params) {
        Matrix.createPerspectiveFieldOfView = overload([Number, Number, Number, Number], function (fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
            if ((fieldOfView <= 0) || (fieldOfView >= MathHelper.pi)) {
                throw new RangeError("fieldOfView <= 0 or >= PI");
            }

            if (nearPlaneDistance <= 0) {
                throw new RangeError("nearPlaneDistance <= 0");
            }

            if (farPlaneDistance <= 0) {
                throw new RangeError("farPlaneDistance <= 0");
            }

            if (nearPlaneDistance >= farPlaneDistance) {
                throw new RangeError("nearPlaneDistance >= farPlaneDistance");
            }

            const result = new Matrix();
            const halfFovTan = Math.tan(fieldOfView * 0.5);
            const num = 1 / halfFovTan;
            const num9 = num / aspectRatio;
            const nearFarDiff = nearPlaneDistance - farPlaneDistance;

            result.m11 = num9;
            result.m22 = num;
            result.m33 = farPlaneDistance / nearFarDiff;
            result.m34 = -1;
            result.m43 = (nearPlaneDistance * farPlaneDistance) / nearFarDiff;

            return result;
        });

        return Matrix.createPerspectiveFieldOfView.apply(this, params);
    }

    static createPerspectiveOffCenter(...params) {
        Matrix.createPerspectiveOffCenter = overload([Number, Number, Number, Number, Number, Number], function (left, right, bottom, top, nearPlaneDistance, farPlaneDistance) {
            if (nearPlaneDistance <= 0) {
                throw new RangeError("nearPlaneDistance <= 0");
            }

            if (farPlaneDistance <= 0) {
                throw new RangeError("farPlaneDistance <= 0");
            }

            if (nearPlaneDistance >= farPlaneDistance) {
                throw new RangeError("nearPlaneDistance >= farPlaneDistance");
            }

            const result = new Matrix();
            const near2 = 2 * nearPlaneDistance;
            const rightLeft = right - left;
            const topBottom = top - bottom;
            const nearFar = nearPlaneDistance - farPlaneDistance;

            result.m11 = near2 / rightLeft;
            result.m22 = near2 / topBottom;
            result.m31 = (left + right) / rightLeft;
            result.m32 = (top + bottom) / topBottom;
            result.m33 = farPlaneDistance / nearFar;
            result.m34 = -1;
            result.m43 = (nearPlaneDistance * farPlaneDistance) / nearFar;

            return result;
        });

        return Matrix.createPerspectiveOffCenter.apply(this, params);
    }

    static createReflection(...params) {
        Matrix.createReflection = overload([Plane], function (value) {
            const plane = Plane.normalize(value);
            const { x, y, z } = plane.normal;
            const num3 = -2 * x;
            const num2 = -2 * y;
            const num = -2 * z;
            return new Matrix(
                (num3 * x) + 1, num2 * x, num * x, 0,
                num3 * y, (num2 * y) + 1, num * y, 0,
                num3 * z, num2 * z, (num * z) + 1, 0,
                num3 * plane.d, num2 * plane.d, num * plane.d, 1
            );
        });

        return Matrix.createReflection.apply(this, params);
    }

    static createRotationX(...params) {
        Matrix.createRotationX = overload([Number], function (radians) {
            const result = this.identity;
            const val1 = Math.cos(radians);
            const val2 = Math.sin(radians);
            result.m22 = val1;
            result.m23 = val2;
            result.m32 = -val2;
            result.m33 = val1;
            return result;
        });

        return Matrix.createRotationX.apply(this, params);
    }

    static createRotationY(...params) {
        Matrix.createRotationY = overload()
            .add([Number], function (radians) {
                const result = this.identity;
                const val1 = Math.cos(radians);
                const val2 = Math.sin(radians);
                result.m11 = val1;
                result.m13 = -val2;
                result.m31 = val2;
                result.m33 = val1;
                return result;
            });

        return Matrix.createRotationY.apply(this, params);
    }

    static createRotationZ(...params) {
        Matrix.createRotationZ = overload()
            .add([Number], function (radians) {
                const result = this.identity;
                const val1 = Math.cos(radians);
                const val2 = Math.sin(radians);
                result.m11 = val1;
                result.m12 = val2;
                result.m21 = -val2;
                result.m22 = val1;
                return result;
            });

        return Matrix.createRotationZ.apply(this, params);
    }

    static createScale(...params) {
        Matrix.createScale = overload()
            .add([Number], function (scale) {
                return this.createScale(scale, scale, scale);
            })
            .add([Number, Number, Number], function (xScale, yScale, zScale) {
                const result = new Matrix();
                result.m11 = xScale;
                result.m22 = yScale;
                result.m33 = zScale;
                result.m44 = 1;
                return result;
            })
            .add([Vector3], function (scales) {
                return this.createScale(scales.x, scales.y, scales.z);
            });

        return Matrix.createScale.apply(this, params);
    }

    static createShadow(...params) {
        Matrix.createShadow = overload([Vector3, Plane], function (lightDirection, plane) {
            const { x: ldx, y: ldy, z: ldz } = lightDirection;
            const dot = Vector3.dot(plane.normal, lightDirection);
            const x = -plane.normal.x;
            const y = -plane.normal.y;
            const z = -plane.normal.z;
            const d = -plane.d;

            const result = new Matrix();
            result.m11 = (x * ldx) + dot;
            result.m12 = x * ldy;
            result.m13 = x * ldz;
            result.m14 = 0;
            result.m21 = y * ldx;
            result.m22 = (y * ldy) + dot;
            result.m23 = y * ldz;
            result.m24 = 0;
            result.m31 = z * ldx;
            result.m32 = z * ldy;
            result.m33 = (z * ldz) + dot;
            result.m34 = 0;
            result.m41 = d * ldx;
            result.m42 = d * ldy;
            result.m43 = d * ldz;
            result.m44 = dot;
            return result;
        });

        return Matrix.createShadow.apply(this, params);
    }

    static createTranslation(...params) {
        Matrix.createTranslation = overload()
            .add([Number, Number, Number], function (xPosition, yPosition, zPosition) {
                const result = new Matrix();
                result.m11 = 1;
                result.m22 = 1;
                result.m33 = 1;
                result.m41 = xPosition;
                result.m42 = yPosition;
                result.m43 = zPosition;
                result.m44 = 1;
                return result;
            })
            .add([Vector3], function (position) {
                return this.createTranslation(position.x, position.y, position.z);
            });

        return Matrix.createTranslation.apply(this, params);
    }

    static createWorld(...params) {
        Matrix.createWorld = overload()
            .add([Vector3, Vector3, Vector3], function (position, forward, up) {
                const z = Vector3.normalize(forward);
                const x = Vector3.cross(forward, up);
                const y = Vector3.cross(x, forward);
                x.normalize();
                y.normalize();

                const result = new Matrix();
                result.right = x;
                result.up = y;
                result.forward = z;
                result.translation = position;
                result.m44 = 1;
                return result;
            });

        return Matrix.createWorld.apply(this, params);
    }

    static divide(...params) {
        Matrix.divide = overload()
            .add([Matrix, Number], function (matrix1, divider) {
                const num = 1 / divider;
                const resultElements = [...matrix1].map(value => value * num);
                return new Matrix(...resultElements);
            })
            .add([Matrix, Matrix], function (matrix1, matrix2) {
                const elements2 = [...matrix2];
                const resultElements = [...matrix1].map((value, index) => value / elements2[index]);
                return new Matrix(...resultElements);
            });

        return Matrix.divide.apply(this, params);
    }

    static invert(...params) {
        Matrix.invert = overload([Matrix], function (matrix) {
            const { m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44 } = matrix;
            const result = new Matrix();

            const minor33_44 = (m33 * m44 - m34 * m43);
            const minor32_44 = (m32 * m44 - m34 * m42);
            const minor32_43 = (m32 * m43 - m33 * m42);
            const minor31_44 = (m31 * m44 - m34 * m41);
            const minor31_43 = (m31 * m43 - m33 * m41);
            const minor31_42 = (m31 * m42 - m32 * m41);

            const cofactor11 = (m22 * minor33_44 - m23 * minor32_44 + m24 * minor32_43);
            const cofactor12 = -(m21 * minor33_44 - m23 * minor31_44 + m24 * minor31_43);
            const cofactor13 = (m21 * minor32_44 - m22 * minor31_44 + m24 * minor31_42);
            const cofactor14 = -(m21 * minor32_43 - m22 * minor31_43 + m23 * minor31_42);

            const determinant = (1.0 / (m11 * cofactor11 + m12 * cofactor12 + m13 * cofactor13 + m14 * cofactor14));

            result.m11 = cofactor11 * determinant;
            result.m21 = cofactor12 * determinant;
            result.m31 = cofactor13 * determinant;
            result.m41 = cofactor14 * determinant;

            result.m12 = -(m12 * minor33_44 - m13 * minor32_44 + m14 * minor32_43) * determinant;
            result.m22 = (m11 * minor33_44 - m13 * minor31_44 + m14 * minor31_43) * determinant;
            result.m32 = -(m11 * minor32_44 - m12 * minor31_44 + m14 * minor31_42) * determinant;
            result.m42 = (m11 * minor32_43 - m12 * minor31_43 + m13 * minor31_42) * determinant;

            const minor23_44 = (m23 * m44 - m24 * m43);
            const minor22_44 = (m22 * m44 - m24 * m42);
            const minor22_43 = (m22 * m43 - m23 * m42);
            const minor21_44 = (m21 * m44 - m24 * m41);
            const minor21_43 = (m21 * m43 - m23 * m41);
            const minor21_42 = (m21 * m42 - m22 * m41);

            result.m13 = (m12 * minor23_44 - m13 * minor22_44 + m14 * minor22_43) * determinant;
            result.m23 = -(m11 * minor23_44 - m13 * minor21_44 + m14 * minor21_43) * determinant;
            result.m33 = (m11 * minor22_44 - m12 * minor21_44 + m14 * minor21_42) * determinant;
            result.m43 = -(m11 * minor22_43 - m12 * minor21_43 + m13 * minor21_42) * determinant;

            const minor23_34 = (m23 * m34 - m24 * m33);
            const minor22_34 = (m22 * m34 - m24 * m32);
            const minor22_33 = (m22 * m33 - m23 * m32);
            const minor21_34 = (m21 * m34 - m24 * m31);
            const minor21_33 = (m21 * m33 - m23 * m31);
            const minor21_32 = (m21 * m32 - m22 * m31);

            result.m14 = -(m12 * minor23_34 - m13 * minor22_34 + m14 * minor22_33) * determinant;
            result.m24 = (m11 * minor23_34 - m13 * minor21_34 + m14 * minor21_33) * determinant;
            result.m34 = -(m11 * minor22_34 - m12 * minor21_34 + m14 * minor21_32) * determinant;
            result.m44 = (m11 * minor22_33 - m12 * minor21_33 + m13 * minor21_32) * determinant;

            return result;
        });

        return Matrix.invert.apply(this, params);
    }

    static lerp(...params) {
        Matrix.lerp = overload([Matrix, Matrix, Number], function (matrix1, matrix2, amount) {
            const interpolate = (value1, value2, amount) => value1 + ((value2 - value1) * amount);
            const m1 = [...matrix1];
            const m2 = [...matrix2];
            const list = [];
            for (let i = 0; i < 16; i++) {
                list.push(interpolate(m1[i], m2[i], amount));
            }
            return new Matrix(...list);
        });

        return Matrix.lerp.apply(this, params);
    }

    static multiply(...params) {
        Matrix.multiply = overload()
            .add([Matrix, Number], function (matrix1, scaleFactor) {
                return new Matrix(...[...matrix1].map(value => value * scaleFactor));
            })
            .add([Matrix, Matrix], function (matrix1, matrix2) {
                const matrix = new Matrix();
                this.multiply(matrix1, matrix2, matrix);
                return matrix;
            })
            .add([Matrix, Matrix, Matrix], function (matrix1, matrix2, outMatrix) {
                const getElement = (row, col) =>
                    matrix1[`m${row}1`] * matrix2[`m1${col}`] +
                    matrix1[`m${row}2`] * matrix2[`m2${col}`] +
                    matrix1[`m${row}3`] * matrix2[`m3${col}`] +
                    matrix1[`m${row}4`] * matrix2[`m4${col}`];

                for (let row = 1; row <= 4; row++) {
                    for (let col = 1; col <= 4; col++) {
                        outMatrix[`m${row}${col}`] = getElement(row, col);
                    }
                }

                return outMatrix;
            });

        return Matrix.multiply.apply(this, params);
    }

    static negate(...params) {
        Matrix.negate = overload([Matrix], function (matrix) {
            const elements = [...matrix];
            return new Matrix(...elements.map(value => -value));
        });

        return Matrix.negate.apply(this, params);
    }

    static subtract(...params) {
        Matrix.subtract = overload([Matrix, Matrix], function (matrix1, matrix2) {
            const elements1 = [...matrix1];
            const elements2 = [...matrix2];
            return new Matrix(...elements1.map((value, index) => value - elements2[index]));
        });

        return Matrix.subtract.apply(this, params);
    }

    static transform(...params) {
        Matrix.transform = overload([Matrix, Quaternion], function (value, rotation) {
            const { x, y, z, w } = rotation;
            const { m11, m12, m13, m21, m22, m23, m31, m32, m33, m41, m42, m43, m14, m24, m34, m44 } = value;

            const x2 = x + x, y2 = y + y, z2 = z + z;
            const wx2 = w * x2, wy2 = w * y2, wz2 = w * z2;
            const xx2 = x * x2, xy2 = x * y2, xz2 = x * z2;
            const yy2 = y * y2, yz2 = y * z2, zz2 = z * z2;

            const q11 = 1.0 - yy2 - zz2, q21 = xy2 - wz2, q31 = xz2 + wy2;
            const q12 = xy2 + wz2, q22 = 1.0 - xx2 - zz2, q32 = yz2 - wx2;
            const q13 = xz2 - wy2, q23 = yz2 + wx2, q33 = 1.0 - xx2 - yy2;

            return new Matrix(
                m11 * q11 + m12 * q21 + m13 * q31, m11 * q12 + m12 * q22 + m13 * q32, m11 * q13 + m12 * q23 + m13 * q33, m14,
                m21 * q11 + m22 * q21 + m23 * q31, m21 * q12 + m22 * q22 + m23 * q32, m21 * q13 + m22 * q23 + m23 * q33, m24,
                m31 * q11 + m32 * q21 + m33 * q31, m31 * q12 + m32 * q22 + m33 * q32, m31 * q13 + m32 * q23 + m33 * q33, m34,
                m41 * q11 + m42 * q21 + m43 * q31, m41 * q12 + m42 * q22 + m43 * q32, m41 * q13 + m42 * q23 + m43 * q33, m44
            );
        });

        return Matrix.transform.apply(this, params);
    }

    static transpose(...params) {
        Matrix.transpose = overload([Matrix], function (matrix) {
            return new Matrix(
                matrix.m11, matrix.m21, matrix.m31, matrix.m41,
                matrix.m12, matrix.m22, matrix.m32, matrix.m42,
                matrix.m13, matrix.m23, matrix.m33, matrix.m43,
                matrix.m14, matrix.m24, matrix.m34, matrix.m44
            );
        });

        return Matrix.transpose.apply(this, params);
    }

    static ["-"](...params) {
        return Matrix.negate(...params);
    }

    ["+"](...params) {
        return Matrix.add(this, ...params);
    }

    ["-"](...params) {
        return Matrix.subtract(this, ...params);
    }

    ["*"](...params) {
        return Matrix.multiply(this, ...params);
    }

    ["/"](...params) {
        return Matrix.divide(this, ...params);
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    decompose(...params) {
        Matrix.prototype.decompose = overload([Vector3, Quaternion, Vector3], function (scale, rotation, translation) {
            const { m11, m12, m13, m21, m22, m23, m31, m32, m33, m41, m42, m43, m14, m24, m34 } = this;
            translation.x = m41;
            translation.y = m42;
            translation.z = m43;

            const xs = (Math.sign(m11 * m12 * m13 * m14) < 0) ? -1 : 1;
            const ys = (Math.sign(m21 * m22 * m23 * m24) < 0) ? -1 : 1;
            const zs = (Math.sign(m31 * m32 * m33 * m34) < 0) ? -1 : 1;

            scale.x = xs * Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
            scale.y = ys * Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
            scale.z = zs * Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

            if (scale.x === 0.0 || scale.y === 0.0 || scale.z === 0.0) {
                const qi = Quaternion.identity;
                rotation.x = qi.x;
                rotation.y = qi.y;
                rotation.z = qi.z;
                rotation.w = qi.w;
                return false;
            }

            let m1 = new Matrix(
                m11 / scale.x, m12 / scale.x, m13 / scale.x, 0,
                m21 / scale.y, m22 / scale.y, m23 / scale.y, 0,
                m31 / scale.z, m32 / scale.z, m33 / scale.z, 0,
                0, 0, 0, 1
            );

            m1 = Quaternion.createFromRotationMatrix(m1);

            rotation.x = m1.x;
            rotation.y = m1.y;
            rotation.z = m1.z;
            rotation.w = m1.w;
            return true;
        });

        return Matrix.prototype.decompose.apply(this, params);
    }

    determinant(...params) {
        Matrix.prototype.determinant = overload([], function () {
            const { m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44 } = this;

            const a = (m33 * m44) - (m34 * m43);
            const b = (m32 * m44) - (m34 * m42);
            const c = (m32 * m43) - (m33 * m42);
            const d = (m31 * m44) - (m34 * m41);
            const e = (m31 * m43) - (m33 * m41);
            const f = (m31 * m42) - (m32 * m41);

            return (
                (m11 * ((m22 * a) - (m23 * b) + (m24 * c))) -
                (m12 * ((m21 * a) - (m23 * d) + (m24 * e))) +
                (m13 * ((m21 * b) - (m22 * d) + (m24 * f))) -
                (m14 * ((m21 * c) - (m22 * e) + (m23 * f)))
            );
        });

        return Matrix.prototype.determinant.apply(this, params);
    }

    equals(...params) {
        Matrix.prototype.equals = overload([Matrix], function (other) {
            const m1 = [...this];
            const m2 = [...other];
            for (let i = 0; i < 16; i++) {
                if (m1[i] !== m2[i]) {
                    return false;
                }
            }
            return true;
        }).any(() => false);

        return Matrix.prototype.equals.apply(this, params);
    }

    toString(...params) {
        Matrix.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return Matrix.prototype.toString.apply(this, params);
    }

    toJSON() {
        return {
            m11: this.m11,
            m12: this.m12,
            m13: this.m13,
            m14: this.m14,
            m21: this.m21,
            m22: this.m22,
            m23: this.m23,
            m24: this.m24,
            m31: this.m31,
            m32: this.m32,
            m33: this.m33,
            m34: this.m34,
            m41: this.m41,
            m42: this.m42,
            m43: this.m43,
            m44: this.m44
        };
    }
}
