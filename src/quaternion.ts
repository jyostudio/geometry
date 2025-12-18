import overload from "@jyostudio/overload";
import { checkSetterType } from "@jyostudio/overload/dist/decorator";
import Matrix from "./matrix";
import Vector3 from "./vector3";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 定义一个四维矢量 (x,y,z,w)，它可用于有效地将某个对象围绕 (x, y, z) 矢量旋转 angle theta，其中 w = cos(theta/2)。
 * @class
 */
export default class Quaternion {
    /**
     * 返回呈现无旋转的 Quaternion。
     */
    public static get identity() {
        return new Quaternion(0, 0, 0, 1);
    }

    /**
     * 四元数矢量色差的 x 值。
     */
    #x = 0;

    /**
     * 获取四元数矢量色差的 x 值。
     */
    public get x(): number {
        return this.#x;
    }

    /**
     * 设置四元数矢量色差的 x 值。
     */
    @checkSetterType(Number)
    public set x(value: number) {
        this.#x = value;
    }

    /**
     * 四元数矢量色差的 y 值。
     */
    #y = 0;

    /**
     * 获取四元数矢量色差的 y 值。
     */
    public get y(): number {
        return this.#y;
    }

    /**
     * 设置四元数矢量色差的 y 值。
     */
    @checkSetterType(Number)
    public set y(value: number) {
        this.#y = value;
    }

    /**
     * 四元数矢量色差的 z 值。
     */
    #z = 0;

    /**
     * 获取四元数矢量色差的 z 值。
     */
    public get z(): number {
        return this.#z;
    }

    /**
     * 设置四元数矢量色差的 z 值。
     */
    @checkSetterType(Number)
    public set z(value: number) {
        this.#z = value;
    }

    /**
     * 四元数的旋转组件。
     */
    #w = 0;

    /**
     * 获取四元数的旋转组件。
     */
    public get w(): number {
        return this.#w;
    }

    /**
     * 设置四元数的旋转组件。
     */
    @checkSetterType(Number)
    public set w(value: number) {
        this.#w = value;
    }

    /**
     * 新建一个空的 Quaternion 实例。
     */
    constructor();
    /**
     * 初始化新的 Quaternion 实例。
     * @param x 四元数的 x 值。
     * @param y 四元数的 y 值。
     * @param z 四元数的 z 值。
     * @param w 四元数的 w 值。
     */
    constructor(x: number, y: number, z: number, w: number);
    /**
     * 初始化新的 Quaternion 实例。
     * @param vectorPart 四元数的矢量组件。
     * @param scalarPart 四元数的旋转组件。
     */
    constructor(vectorPart: Vector3, scalarPart: number);
    constructor(...params: any) {
        Quaternion[CONSTRUCTOR_SYMBOL].apply(this, params);
    }
    /**
     * 结构化构造函数。
     * @returns Quaternion 实例。
     */
    public static ["##STRUCT_CONSTRUCTOR##"](): Quaternion {
        return new Quaternion();
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        Quaternion[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number, Number, Number, Number], function (this: Quaternion, x, y, z, w) {
                this.#x = x;
                this.#y = y;
                this.#z = z;
                this.#w = w;
            })
            .add([Vector3, Number], function (this: Quaternion, vectorPart, scalarPart) {
                this.#x = vectorPart.x;
                this.#y = vectorPart.y;
                this.#z = vectorPart.z;
                this.#w = scalarPart;
            });

        return Quaternion[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    public *[Symbol.iterator]() {
        yield this.#x;
        yield this.#y;
        yield this.#z;
        yield this.#w;
    }

    /**
     * 将两个四元数相加。
     * @param quaternion1 要添加的 Quaternion。
     * @param quaternion2 要添加的 Quaternion。
     * @returns 相加后的 Quaternion。
     */
    public static add(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion;
    /**
     * 将两个四元数相加。
     * @param quaternion1 要添加的 Quaternion。
     * @param quaternion2 要添加的 Quaternion。
     * @param result [OutAttribute] 四元数相加的结果。
     */
    public static add(quaternion1: Quaternion, quaternion2: Quaternion, result: Quaternion): void;
    public static add(...params: any): any {
        Quaternion.add = overload()
            .add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                return new Quaternion(
                    quaternion1.#x + quaternion2.#x,
                    quaternion1.#y + quaternion2.#y,
                    quaternion1.#z + quaternion2.#z,
                    quaternion1.#w + quaternion2.#w
                );
            })
            .add([Quaternion, Quaternion, Quaternion], function (quaternion1, quaternion2, result) {
                result.#x = quaternion1.#x + quaternion2.#x;
                result.#y = quaternion1.#y + quaternion2.#y;
                result.#z = quaternion1.#z + quaternion2.#z;
                result.#w = quaternion1.#w + quaternion2.#w;
            });

        return Quaternion.add.apply(this, params);
    }

    /**
     * 连接两个 Quaternion；结果中先后呈现了 value1 旋转和 value2 旋转。
     * @param value1 序列中的第一个 Quaternion 旋转。
     * @param value2 序列中的第一个 Quaternion 旋转。
     * @returns 结果 Quaternion。
     */
    public static concatenate(value1: Quaternion, value2: Quaternion): Quaternion;
    /**
     * 连接两个 Quaternion；结果中先后呈现了 value1 旋转和 value2 旋转。
     * @param value1 序列中的第一个 Quaternion 旋转。
     * @param value2 序列中的第一个 Quaternion 旋转。
     * @param result [OutAttribute] 先后呈现 value1 和 value2 连接的 Quaternion 旋转。
     */
    public static concatenate(value1: Quaternion, value2: Quaternion, result: Quaternion): void;
    public static concatenate(...params: any): any {
        Quaternion.concatenate = overload()
            .add([Quaternion, Quaternion], function (value1, value2) {
                const x1 = value1.#x, y1 = value1.#y, z1 = value1.#z, w1 = value1.#w;
                const x2 = value2.#x, y2 = value2.#y, z2 = value2.#z, w2 = value2.#w;

                return new Quaternion(
                    ((x2 * w1) + (x1 * w2)) + ((y2 * z1) - (z2 * y1)),
                    ((y2 * w1) + (y1 * w2)) + ((z2 * x1) - (x2 * z1)),
                    ((z2 * w1) + (z1 * w2)) + ((x2 * y1) - (y2 * x1)),
                    (w2 * w1) - (((x2 * x1) + (y2 * y1)) + (z2 * z1))
                );
            })
            .add([Quaternion, Quaternion, Quaternion], function (value1, value2, result) {
                const x1 = value1.#x, y1 = value1.#y, z1 = value1.#z, w1 = value1.#w;
                const x2 = value2.#x, y2 = value2.#y, z2 = value2.#z, w2 = value2.#w;

                result.#x = ((x2 * w1) + (x1 * w2)) + ((y2 * z1) - (z2 * y1));
                result.#y = ((y2 * w1) + (y1 * w2)) + ((z2 * x1) - (x2 * z1));
                result.#z = ((z2 * w1) + (z1 * w2)) + ((x2 * y1) - (y2 * x1));
                result.#w = (w2 * w1) - (((x2 * x1) + (y2 * y1)) + (z2 * z1));
            });

        return Quaternion.concatenate.apply(this, params);
    }

    /**
     * 返回指定 Quaternion 的共轭。
     * @param value 返回其共轭的 Quaternion。
     * @returns 结果 Quaternion。
     */
    public static conjugate(value: Quaternion): Quaternion;
    /**
     * 返回指定 Quaternion 的共轭。
     * @param value 返回其共轭的 Quaternion。
     * @param result [OutAttribute] 填充并作为指定数据共轭的现有 Quaternion。
     */
    public static conjugate(value: Quaternion, result: Quaternion): void;
    public static conjugate(...params: any): any {
        Quaternion.conjugate = overload()
            .add([Quaternion], function (value) {
                return new Quaternion(-value.#x, -value.#y, -value.#z, value.#w);
            })
            .add([Quaternion, Quaternion], function (value, result) {
                result.#x = -value.#x;
                result.#y = -value.#y;
                result.#z = -value.#z;
                result.#w = value.#w;
            });

        return Quaternion.conjugate.apply(this, params);
    }

    /**
     * 用矢量和绕其旋转的角度创建 Quaternion。
     * @param axis 要围绕旋转的矢量。
     * @param angle 绕矢量旋转的角度。
     * @returns 结果 Quaternion。
     */
    public static createFromAxisAngle(axis: Vector3, angle: number): Quaternion;
    /**
     * 用矢量和绕其旋转的角度创建 Quaternion。
     * @param axis 要围绕旋转的矢量。
     * @param angle 绕矢量旋转的角度。
     * @param result [OutAttribute] 创建的 Quaternion。
     */
    public static createFromAxisAngle(axis: Vector3, angle: number, result: Quaternion): void;
    public static createFromAxisAngle(...params: any): any {
        Quaternion.createFromAxisAngle = overload()
            .add([Vector3, Number], function (axis, angle) {
                const x = axis.x, y = axis.y, z = axis.z;
                const half = angle * 0.5;
                const sin = Math.sin(half);
                const cos = Math.cos(half);
                return new Quaternion(
                    x * sin,
                    y * sin,
                    z * sin,
                    cos
                );
            })
            .add([Vector3, Number, Quaternion], function (axis, angle, result) {
                const x = axis.x, y = axis.y, z = axis.z;
                const half = angle * 0.5;
                const sin = Math.sin(half);
                const cos = Math.cos(half);
                result.#x = x * sin;
                result.#y = y * sin;
                result.#z = z * sin;
                result.#w = cos;
            });

        return Quaternion.createFromAxisAngle.apply(this, params);
    }

    /**
     * 从旋转 Matrix 创建一个 Quaternion。
     * @param matrix 用于创建 Quaternion 的旋转 Matrix。
     * @returns 结果 Quaternion。
     */
    public static createFromRotationMatrix(matrix: Matrix): Quaternion;
    /**
     * 从旋转 Matrix 创建一个 Quaternion。
     * @param matrix 用于创建 Quaternion 的旋转 Matrix。
     * @param result [OutAttribute] 创建的 Quaternion。
     */
    public static createFromRotationMatrix(matrix: Matrix, result: Quaternion): void;
    public static createFromRotationMatrix(...params: any): any {
        Quaternion.createFromRotationMatrix = overload()
            .add([Matrix], function (matrix) {
                const scale = matrix.m11 + matrix.m22 + matrix.m33;
                let sqrt, half;
                const result = new Quaternion();

                if (scale > 0.0) {
                    sqrt = Math.sqrt(scale + 1.0);
                    result.#w = sqrt * 0.5;
                    sqrt = 0.5 / sqrt;

                    result.#x = (matrix.m23 - matrix.m32) * sqrt;
                    result.#y = (matrix.m31 - matrix.m13) * sqrt;
                    result.#z = (matrix.m12 - matrix.m21) * sqrt;
                } else if ((matrix.m11 >= matrix.m22) && (matrix.m11 >= matrix.m33)) {
                    sqrt = Math.sqrt(1.0 + matrix.m11 - matrix.m22 - matrix.m33);
                    half = 0.5 / sqrt;

                    result.#x = 0.5 * sqrt;
                    result.#y = (matrix.m12 + matrix.m21) * half;
                    result.#z = (matrix.m13 + matrix.m31) * half;
                    result.#w = (matrix.m23 - matrix.m32) * half;
                } else if (matrix.m22 > matrix.m33) {
                    sqrt = Math.sqrt(1.0 + matrix.m22 - matrix.m11 - matrix.m33);
                    half = 0.5 / sqrt;

                    result.#x = (matrix.m21 + matrix.m12) * half;
                    result.#y = 0.5 * sqrt;
                    result.#z = (matrix.m32 + matrix.m23) * half;
                    result.#w = (matrix.m31 - matrix.m13) * half;
                } else {
                    sqrt = Math.sqrt(1.0 + matrix.m33 - matrix.m11 - matrix.m22);
                    half = 0.5 / sqrt;

                    result.#x = (matrix.m31 + matrix.m13) * half;
                    result.#y = (matrix.m32 + matrix.m23) * half;
                    result.#z = 0.5 * sqrt;
                    result.#w = (matrix.m12 - matrix.m21) * half;
                }
                return result;
            })
            .add([Matrix, Quaternion], function (matrix, result) {
                const scale = matrix.m11 + matrix.m22 + matrix.m33;
                let sqrt, half;

                if (scale > 0.0) {
                    sqrt = Math.sqrt(scale + 1.0);
                    result.#w = sqrt * 0.5;
                    sqrt = 0.5 / sqrt;

                    result.#x = (matrix.m23 - matrix.m32) * sqrt;
                    result.#y = (matrix.m31 - matrix.m13) * sqrt;
                    result.#z = (matrix.m12 - matrix.m21) * sqrt;
                } else if ((matrix.m11 >= matrix.m22) && (matrix.m11 >= matrix.m33)) {
                    sqrt = Math.sqrt(1.0 + matrix.m11 - matrix.m22 - matrix.m33);
                    half = 0.5 / sqrt;

                    result.#x = 0.5 * sqrt;
                    result.#y = (matrix.m12 + matrix.m21) * half;
                    result.#z = (matrix.m13 + matrix.m31) * half;
                    result.#w = (matrix.m23 - matrix.m32) * half;
                } else if (matrix.m22 > matrix.m33) {
                    sqrt = Math.sqrt(1.0 + matrix.m22 - matrix.m11 - matrix.m33);
                    half = 0.5 / sqrt;

                    result.#x = (matrix.m21 + matrix.m12) * half;
                    result.#y = 0.5 * sqrt;
                    result.#z = (matrix.m32 + matrix.m23) * half;
                    result.#w = (matrix.m31 - matrix.m13) * half;
                } else {
                    sqrt = Math.sqrt(1.0 + matrix.m33 - matrix.m11 - matrix.m22);
                    half = 0.5 / sqrt;

                    result.#x = (matrix.m31 + matrix.m13) * half;
                    result.#y = (matrix.m32 + matrix.m23) * half;
                    result.#z = 0.5 * sqrt;
                    result.#w = (matrix.m12 - matrix.m21) * half;
                }
            });

        return Quaternion.createFromRotationMatrix.apply(this, params);
    }

    /**
     * 用指定的偏转、俯仰和侧滚角度新建 Quaternion。
     * @param yaw 绕 y 轴的偏转角度，以弧度计。
     * @param pitch 绕 x 轴的俯仰角度，以弧度计。
     * @param roll 绕 z 轴的侧滚角度，以弧度计。
     * @returns 结果 Quaternion。
     */
    public static createFromYawPitchRoll(
        yaw: number,
        pitch: number,
        roll: number
    ): Quaternion;
    /**
     * 用指定的偏转、俯仰和侧滚角度新建 Quaternion。
     * @param yaw 绕 y 轴的偏转角度，以弧度计。
     * @param pitch 绕 x 轴的俯仰角度，以弧度计。
     * @param roll 绕 z 轴的侧滚角度，以弧度计。
     * @param result [OutAttribute] 表现指定的偏转、俯仰和侧滚角度的现有填充 Quaternion。
     */
    public static createFromYawPitchRoll(
        yaw: number,
        pitch: number,
        roll: number,
        result: Quaternion
    ): void;
    public static createFromYawPitchRoll(...params: any): any {
        Quaternion.createFromYawPitchRoll = overload()
            .add([Number, Number, Number], function (yaw, pitch, roll) {
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
            })
            .add([Number, Number, Number, Quaternion], function (yaw, pitch, roll, result) {
                const halfRoll = roll * 0.5;
                const halfPitch = pitch * 0.5;
                const halfYaw = yaw * 0.5;

                const sinRoll = Math.sin(halfRoll);
                const cosRoll = Math.cos(halfRoll);

                const sinPitch = Math.sin(halfPitch);
                const cosPitch = Math.cos(halfPitch);

                const sinYaw = Math.sin(halfYaw);
                const cosYaw = Math.cos(halfYaw);

                result.#x = (cosYaw * sinPitch * cosRoll) + (sinYaw * cosPitch * sinRoll);
                result.#y = (sinYaw * cosPitch * cosRoll) - (cosYaw * sinPitch * sinRoll);
                result.#z = (cosYaw * cosPitch * sinRoll) - (sinYaw * sinPitch * cosRoll);
                result.#w = (cosYaw * cosPitch * cosRoll) + (sinYaw * sinPitch * sinRoll);
            });

        return Quaternion.createFromYawPitchRoll.apply(this, params);
    }

    /**
     * 用一个 Quaternion 除以另一个 Quaternion。
     * @param quaternion1 源 Quaternion。
     * @param quaternion2 除数。
     * @returns 结果 Quaternion。
     */
    public static divide(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion;
    /**
     * 用一个 Quaternion 除以另一个 Quaternion。
     * @param quaternion1 源 Quaternion。
     * @param quaternion2 除数。
     * @param result [OutAttribute] 相除结果。
     */
    public static divide(quaternion1: Quaternion, quaternion2: Quaternion, result: Quaternion): void;
    public static divide(...params: any): any {
        Quaternion.divide = overload()
            .add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                const q1x = quaternion1.#x, q1y = quaternion1.#y, q1z = quaternion1.#z, q1w = quaternion1.#w;
                const q2x = quaternion2.#x, q2y = quaternion2.#y, q2z = quaternion2.#z, q2w = quaternion2.#w;

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

                return new Quaternion(
                    (q1x * inverseQ2w) + (inverseQ2x * q1w) + crossProductYz,
                    (q1y * inverseQ2w) + (inverseQ2y * q1w) + crossProductZx,
                    (q1z * inverseQ2w) + (inverseQ2z * q1w) + crossProductXy,
                    (q1w * inverseQ2w) - dotProduct
                );
            })
            .add([Quaternion, Quaternion, Quaternion], function (quaternion1, quaternion2, result) {
                const q1x = quaternion1.#x, q1y = quaternion1.#y, q1z = quaternion1.#z, q1w = quaternion1.#w;
                const q2x = quaternion2.#x, q2y = quaternion2.#y, q2z = quaternion2.#z, q2w = quaternion2.#w;

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

                result.#x = (q1x * inverseQ2w) + (inverseQ2x * q1w) + crossProductYz;
                result.#y = (q1y * inverseQ2w) + (inverseQ2y * q1w) + crossProductZx;
                result.#z = (q1z * inverseQ2w) + (inverseQ2z * q1w) + crossProductXy;
                result.#w = (q1w * inverseQ2w) - dotProduct;
            });

        return Quaternion.divide.apply(this, params);
    }

    /**
     * 计算两个四元数的点积。
     * @param quaternion1 源 Quaternion。
     * @param quaternion2 源 Quaternion。
     * @returns 点积。
     */
    public static dot(quaternion1: Quaternion, quaternion2: Quaternion): number;
    public static dot(...params: any): any {
        Quaternion.dot = overload()
            .add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                const x1 = quaternion1.#x, y1 = quaternion1.#y, z1 = quaternion1.#z, w1 = quaternion1.#w;
                const x2 = quaternion2.#x, y2 = quaternion2.#y, z2 = quaternion2.#z, w2 = quaternion2.#w;
                return (x1 * x2) + (y1 * y2) + (z1 * z2) + (w1 * w2);
            });

        return Quaternion.dot.apply(this, params);
    }

    /**
     * 返回 Quaternion 的逆四元数。
     * @param quaternion 源 Quaternion。
     * @returns 结果 Quaternion。
     */
    public static inverse(quaternion: Quaternion): Quaternion;
    /**
     * 返回 Quaternion 的逆四元数。
     * @param quaternion 源 Quaternion。
     * @param result [OutAttribute] Quaternion 的逆四元数。
     */
    public static inverse(quaternion: Quaternion, result: Quaternion): void;
    public static inverse(...params: any): any {
        Quaternion.inverse = overload()
            .add([Quaternion], function (quaternion) {
                const x = quaternion.#x, y = quaternion.#y, z = quaternion.#z, w = quaternion.#w;
                const x2 = x * x, y2 = y * y, z2 = z * z, w2 = w * w;
                const num = 1 / (x2 + y2 + z2 + w2);

                return new Quaternion(
                    -x * num,
                    -y * num,
                    -z * num,
                    w * num
                );
            })
            .add([Quaternion, Quaternion], function (quaternion, result) {
                const x = quaternion.#x, y = quaternion.#y, z = quaternion.#z, w = quaternion.#w;
                const x2 = x * x, y2 = y * y, z2 = z * z, w2 = w * w;
                const num = 1 / (x2 + y2 + z2 + w2);

                result.#x = -x * num;
                result.#y = -y * num;
                result.#z = -z * num;
                result.#w = w * num;
            });

        return Quaternion.inverse.apply(this, params);
    }

    /**
     * 在两个四元数之间执行线性插值。
     * @param quaternion1 源四元数。
     * @param quaternion2 源四元数。
     * @param amount 指示四元数之间的插值距离的值。
     * @returns 插值结果。
     */
    public static lerp(
        quaternion1: Quaternion,
        quaternion2: Quaternion,
        amount: number
    ): Quaternion;
    /**
     * 在两个四元数之间执行线性插值。
     * @param quaternion1 源四元数。
     * @param quaternion2 源四元数。
     * @param amount 指示四元数之间的插值距离的值。
     * @param result [OutAttribute] 结果四元数。
     */
    public static lerp(
        quaternion1: Quaternion,
        quaternion2: Quaternion,
        amount: number,
        result: Quaternion
    ): void;
    public static lerp(...params: any): any {
        Quaternion.lerp = overload()
            .add([Quaternion, Quaternion, Number], function (quaternion1, quaternion2, amount) {
                const x1 = quaternion1.#x, y1 = quaternion1.#y, z1 = quaternion1.#z, w1 = quaternion1.#w;
                const x2 = quaternion2.#x, y2 = quaternion2.#y, z2 = quaternion2.#z, w2 = quaternion2.#w;

                const weight = 1 - amount;
                const sign = Quaternion.dot(quaternion1, quaternion2) >= 0 ? 1 : -1;

                const interpolate = (v1: number, v2: number) => weight * v1 + sign * amount * v2;

                const result = new Quaternion(
                    interpolate(x1, x2),
                    interpolate(y1, y2),
                    interpolate(z1, z2),
                    interpolate(w1, w2)
                );

                Quaternion.normalize(result, result);

                return result;
            })
            .add([Quaternion, Quaternion, Number, Quaternion], function (quaternion1, quaternion2, amount, result) {
                const x1 = quaternion1.#x, y1 = quaternion1.#y, z1 = quaternion1.#z, w1 = quaternion1.#w;
                const x2 = quaternion2.#x, y2 = quaternion2.#y, z2 = quaternion2.#z, w2 = quaternion2.#w;

                const weight = 1 - amount;
                const sign = Quaternion.dot(quaternion1, quaternion2) >= 0 ? 1 : -1;

                const interpolate = (v1: number, v2: number) => weight * v1 + sign * amount * v2;

                result.#x = interpolate(x1, x2);
                result.#y = interpolate(y1, y2);
                result.#z = interpolate(z1, z2);
                result.#w = interpolate(w1, w2);

                Quaternion.normalize(result, result);
            });

        return Quaternion.lerp.apply(this, params);
    }

    /**
     * 将一个四元数乘以一个标量值。
     * @param quaternion1 源四元数。
     * @param scaleFactor 标量值。
     * @returns 结果 Quaternion。
     */
    public static multiply(quaternion1: Quaternion, scaleFactor: number): Quaternion;
    /**
     * 将一个四元数乘以一个标量值。
     * @param quaternion1 源四元数。
     * @param scaleFactor 标量值。
     * @param result [OutAttribute] 相乘的结果。
     */
    public static multiply(quaternion1: Quaternion, scaleFactor: number, result: Quaternion): void;
    /**
     * 将两个四元数相乘。
     * @param quaternion1 乘号左边的四元数。
     * @param quaternion2 乘号右边的四元数。
     * @returns 结果 Quaternion。
     */
    public static multiply(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion;
    /**
     * 将两个四元数相乘。
     * @param quaternion1 乘号左边的四元数。
     * @param quaternion2 乘号右边的四元数。
     * @param result [OutAttribute] 相乘的结果。
     */
    public static multiply(quaternion1: Quaternion, quaternion2: Quaternion, result: Quaternion): void;
    public static multiply(...params: any): any {
        Quaternion.multiply = overload()
            .add([Quaternion, Number], function (quaternion1, scaleFactor) {
                return new Quaternion(
                    quaternion1.#x * scaleFactor,
                    quaternion1.#y * scaleFactor,
                    quaternion1.#z * scaleFactor,
                    quaternion1.#w * scaleFactor
                );
            })
            .add([Quaternion, Number, Quaternion], function (quaternion1, scaleFactor, result) {
                result.#x = quaternion1.#x * scaleFactor;
                result.#y = quaternion1.#y * scaleFactor;
                result.#z = quaternion1.#z * scaleFactor;
                result.#w = quaternion1.#w * scaleFactor;
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
            })
            .add([Quaternion, Quaternion, Quaternion], function (quaternion1, quaternion2, result) {
                const x1 = quaternion1.#x, y1 = quaternion1.#y, z1 = quaternion1.#z, w1 = quaternion1.#w;
                const x2 = quaternion2.#x, y2 = quaternion2.#y, z2 = quaternion2.#z, w2 = quaternion2.#w;

                const yz = (y1 * z2) - (z1 * y2);
                const zx = (z1 * x2) - (x1 * z2);
                const xy = (x1 * y2) - (y1 * x2);
                const xyz = ((x1 * x2) + (y1 * y2)) + (z1 * z2);

                result.#x = ((x1 * w2) + (x2 * w1)) + yz;
                result.#y = ((y1 * w2) + (y2 * w1)) + zx;
                result.#z = ((z1 * w2) + (z2 * w1)) + xy;
                result.#w = (w1 * w2) - xyz;
            });

        return Quaternion.multiply.apply(this, params);
    }

    /**
     * 对四元数每个组件的符号取反。
     * @param quaternion 源四元数。
     * @returns 结果 Quaternion。
     */
    public static negate(quaternion: Quaternion): Quaternion;
    /**
     * 对四元数每个组件的符号取反。
     * @param quaternion 源四元数。
     * @param result [OutAttribute] 四元数取反。
     */
    public static negate(quaternion: Quaternion, result: Quaternion): void;
    public static negate(...params: any): any {
        Quaternion.negate = overload()
            .add([Quaternion], function (quaternion) {
                return new Quaternion(-quaternion.#x, -quaternion.#y, -quaternion.#z, -quaternion.#w);
            })
            .add([Quaternion, Quaternion], function (quaternion, result) {
                result.#x = -quaternion.#x;
                result.#y = -quaternion.#y;
                result.#z = -quaternion.#z;
                result.#w = -quaternion.#w;
            });

        return Quaternion.negate.apply(this, params);
    }

    /**
     * 以四元数的长度除四元数的每个组件。
     * @param quaternion 源四元数。
     * @returns 结果 Quaternion。
     */
    public static normalize(quaternion: Quaternion): Quaternion;
    /**
     * 以四元数的长度除四元数的每个组件。
     * @param quaternion 源四元数。
     * @param result [OutAttribute] 法线化的四元数。
     */
    public static normalize(quaternion: Quaternion, result: Quaternion): void;
    public static normalize(...params: any): any {
        Quaternion.normalize = overload()
            .add([Quaternion], function (quaternion) {
                const factor = 1 / Math.sqrt(quaternion.#x ** 2 + quaternion.#y ** 2 + quaternion.#z ** 2 + quaternion.#w ** 2);

                return new Quaternion(
                    quaternion.#x * factor,
                    quaternion.#y * factor,
                    quaternion.#z * factor,
                    quaternion.#w * factor
                );
            })
            .add([Quaternion, Quaternion], function (quaternion, result) {
                const factor = 1 / Math.sqrt(quaternion.#x ** 2 + quaternion.#y ** 2 + quaternion.#z ** 2 + quaternion.#w ** 2);

                result.#x = quaternion.#x * factor;
                result.#y = quaternion.#y * factor;
                result.#z = quaternion.#z * factor;
                result.#w = quaternion.#w * factor;
            });

        return Quaternion.normalize.apply(this, params);
    }

    /**
     * 使用球面线性插值计算两个四元数之间的插值。
     * @param quaternion1 源四元数。
     * @param quaternion2 源四元数。
     * @param amount 指示要在四元数之间插入多远距离的值。
     * @returns 插值结果。
     */
    public static slerp(
        quaternion1: Quaternion,
        quaternion2: Quaternion,
        amount: number
    ): Quaternion;
    /**
     * 使用球面线性插值计算两个四元数之间的插值。
     * @param quaternion1 源四元数。
     * @param quaternion2 源四元数。
     * @param amount 指示要在四元数之间插入多远距离的值。
     * @param result [OutAttribute] 插值结果。
     */
    public static slerp(
        quaternion1: Quaternion,
        quaternion2: Quaternion,
        amount: number,
        result: Quaternion
    ): void;
    public static slerp(...params: any): any {
        Quaternion.slerp = overload()
            .add([Quaternion, Quaternion, Number], function (quaternion1, quaternion2, amount) {
                const x1 = quaternion1.#x, y1 = quaternion1.#y, z1 = quaternion1.#z, w1 = quaternion1.#w;
                const x2 = quaternion2.#x, y2 = quaternion2.#y, z2 = quaternion2.#z, w2 = quaternion2.#w;

                let dotProduct = Quaternion.dot(quaternion1, quaternion2);
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

                const interpolate = (a: number, b: number) => (scale1 * a) + (scale0 * b);

                return new Quaternion(
                    interpolate(x1, x2),
                    interpolate(y1, y2),
                    interpolate(z1, z2),
                    interpolate(w1, w2)
                );
            })
            .add([Quaternion, Quaternion, Number, Quaternion], function (quaternion1, quaternion2, amount, result) {
                const x1 = quaternion1.#x, y1 = quaternion1.#y, z1 = quaternion1.#z, w1 = quaternion1.#w;
                const x2 = quaternion2.#x, y2 = quaternion2.#y, z2 = quaternion2.#z, w2 = quaternion2.#w;

                let dotProduct = Quaternion.dot(quaternion1, quaternion2);
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

                const interpolate = (a: number, b: number) => (scale1 * a) + (scale0 * b);

                result.#x = interpolate(x1, x2);
                result.#y = interpolate(y1, y2);
                result.#z = interpolate(z1, z2);
                result.#w = interpolate(w1, w2);
            });

        return Quaternion.slerp.apply(this, params);
    }

    /**
     * 将一个四元数减去另一个四元数。
     * @param quaternion1 源四元数。
     * @param quaternion2 源四元数。
     * @returns 结果 Quaternion。
     */
    public static subtract(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion;
    /**
     * 将一个四元数减去另一个四元数。
     * @param quaternion1 源四元数。
     * @param quaternion2 源四元数。
     * @param result [OutAttribute] 相减结果。
     */
    public static subtract(quaternion1: Quaternion, quaternion2: Quaternion, result: Quaternion): void;
    public static subtract(...params: any): any {
        Quaternion.subtract = overload()
            .add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                return new Quaternion(
                    quaternion1.#x - quaternion2.#x,
                    quaternion1.#y - quaternion2.#y,
                    quaternion1.#z - quaternion2.#z,
                    quaternion1.#w - quaternion2.#w
                );
            })
            .add([Quaternion, Quaternion, Quaternion], function (quaternion1, quaternion2, result) {
                result.#x = quaternion1.#x - quaternion2.#x;
                result.#y = quaternion1.#y - quaternion2.#y;
                result.#z = quaternion1.#z - quaternion2.#z;
                result.#w = quaternion1.#w - quaternion2.#w;
            });

        return Quaternion.subtract.apply(this, params);
    }

    /**
     * 对传入的四元数取反。
     * @param other 用于取反的四元数。
     * @returns 取反后的四元数。
     */
    public static ["-"](other: Quaternion): Quaternion;
    public static ["-"](...params: any): any {
        Quaternion["-"] = overload([Quaternion], function (other: Quaternion) {
            return Quaternion.negate(other);
        });

        return Quaternion["-"].apply(this, params);
    }

    /**
     * 将当前四元数与另一个四元数相加。
     * @param other 用于相加的四元数。
     * @returns 相加后的四元数。
     */
    public ["+"](other: Quaternion): Quaternion;
    public ["+"](...params: any): any {
        Quaternion.prototype["+"] = overload([Quaternion], function (this: Quaternion, other: Quaternion) {
            return Quaternion.add(this, other);
        });

        return Quaternion.prototype["+"].apply(this, params);
    }

    /**
     * 将当前四元数与另一个四元数相减。
     * @param other 用于相减的四元数。
     * @returns 相减后的四元数。
     */
    public ["-"](other: Quaternion): Quaternion;
    public ["-"](...params: any): any {
        Quaternion.prototype["-"] = overload([Quaternion], function (this: Quaternion, other: Quaternion) {
            return Quaternion.subtract(this, other);
        });

        return Quaternion.prototype["-"].apply(this, params);
    }

    /**
     * 将当前四元数与另一个四元数相乘。
     * @param other 用于相乘的四元数。
     * @returns 相乘后的四元数。
     */
    public ["*"](other: Quaternion): Quaternion;
    /**
     * 将当前四元数与一个标量值相乘。
     * @param scaleFactor 标量值。
     * @returns 相乘后的四元数。
     */
    public ["*"](scaleFactor: number): Quaternion;
    public ["*"](...params: any): any {
        Quaternion.prototype["*"] = overload()
            .add([Quaternion], function (this: Quaternion, other: Quaternion) {
                return Quaternion.multiply(this, other);
            })
            .add([Number], function (this: Quaternion, scaleFactor: number) {
                return Quaternion.multiply(this, scaleFactor);
            });

        return Quaternion.prototype["*"].apply(this, params);
    }

    /**
     * 将当前四元数与另一个四元数相除。
     * @param other 用于相除的四元数。
     * @returns 相除后的四元数。
     */
    public ["/"](other: Quaternion): Quaternion;
    public ["/"](...params: any): any {
        Quaternion.prototype["/"] = overload([Quaternion], function (this: Quaternion, other: Quaternion) {
            return Quaternion.divide(this, other);
        });

        return Quaternion.prototype["/"].apply(this, params);
    }

    /**
     * 确定指定的四元数是否等于当前四元数。
     * @param other 用于与当前四元数比较的四元数。
     * @returns 是否相等。
     */
    public ["=="](other: Quaternion): boolean;
    public ["=="](...params: any): any {
        Quaternion.prototype["=="] = overload([Quaternion], function (this: Quaternion, other: Quaternion) {
            return this.equals(other);
        });

        return Quaternion.prototype["=="].apply(this, params);
    }

    /**
     * 确定指定的四元数是否不等于当前四元数。
     * @param other 用于与当前四元数比较的四元数。
     * @returns 是否不相等。
     */
    public ["!="](other: Quaternion): boolean;
    public ["!="](...params: any): any {
        Quaternion.prototype["!="] = overload([Quaternion], function (this: Quaternion, other: Quaternion) {
            return !this.equals(other);
        });

        return Quaternion.prototype["!="].apply(this, params);
    }

    /**
     * 将该 Quaternion 变换为其共轭。
     */
    public conjugate(): void;
    public conjugate(...params: any): any {
        Quaternion.prototype.conjugate = overload([], function (this: Quaternion) {
            this.#x = -this.#x;
            this.#y = -this.#y;
            this.#z = -this.#z;
        });

        return Quaternion.prototype.conjugate.apply(this, params);
    }

    /**
     * 计算四元数的长度。
     * @returns 四元数的长度。
     */
    public length(): number;
    public length(...params: any): any {
        Quaternion.prototype.length = overload([], function (this: Quaternion) {
            return Math.sqrt(this.#x ** 2 + this.#y ** 2 + this.#z ** 2 + this.#w ** 2);
        });

        return Quaternion.prototype.length.apply(this, params);
    }

    /**
     * 计算四元数的平方长度。
     * @returns 四元数的平方长度。
     */
    public lengthSquared(): number;
    public lengthSquared(...params: any): any {
        Quaternion.prototype.lengthSquared = overload([], function (this: Quaternion) {
            return this.#x ** 2 + this.#y ** 2 + this.#z ** 2 + this.#w ** 2;
        });

        return Quaternion.prototype.lengthSquared.apply(this, params);
    }

    /**
     * 以四元数的长度除四元数的每个组件。
     */
    public normalize(): void;
    public normalize(...params: any): any {
        Quaternion.prototype.normalize = overload([], function (this: Quaternion) {
            const num = 1 / Math.sqrt(this.#x ** 2 + this.#y ** 2 + this.#z ** 2 + this.#w ** 2);
            this.#x *= num;
            this.#y *= num;
            this.#z *= num;
            this.#w *= num;
        });

        return Quaternion.prototype.normalize.apply(this, params);
    }

    /**
     * 确定指定的 Object 是否等于 Quaternion。
     * @param other 用于与当前 Quaternion 比较的 Quaternion。
     * @returns 是否相等。
     */
    public equals(other: Quaternion): boolean;
    public equals(...params: any): any {
        Quaternion.prototype.equals = overload([Quaternion], function (this: Quaternion, other) {
            return this.#x === other.#x && this.#y === other.#y && this.#z === other.#z && this.#w === other.#w;
        }).any(() => false);

        return Quaternion.prototype.equals.apply(this, params);
    }

    /**
     * 检索当前对象的字符串呈现。
     * @returns 当前对象的字符串呈现。
     */
    public toString(): string;
    public toString(...params: any): any {
        Quaternion.prototype.toString = overload([], function (this: Quaternion) {
            return JSON.stringify(this);
        });

        return Quaternion.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 Quaternion 的 JSON 表示形式。
     * @returns 当前 Quaternion 的 JSON 表示形式。
     */
    public toJSON(): object {
        return {
            x: this.#x,
            y: this.#y,
            z: this.#z,
            w: this.#w
        };
    }
}
