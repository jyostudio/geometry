import overload from "@jyostudio/overload";
import { checkSetterType, lazyCheckSetterType } from "@jyostudio/overload/dist/decorator";
import MathHelper from "./math-helper";
import Plane from "./plane";
import Quaternion from "./quaternion";
import Vector3 from "./vector3";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 定义一个矩阵。
 * @class
 */
export default class Matrix {
    /**
     * 返回标识矩阵的实例。
     */
    public static get identity(): Matrix {
        return new Matrix(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        );
    }

    /**
     * 获取矩阵的行 1 列 1 的值。
     */
    public get m11(): number {
        return this.#values[0];
    }

    /**
     * 设置矩阵的行 1 列 1 的值。
     */
    @checkSetterType(Number)
    public set m11(value: number) {
        this.#values[0] = value;
    }

    /**
     * 获取矩阵的行 1 列 2 的值。
     */
    public get m12(): number {
        return this.#values[1];
    }

    /**
     * 设置矩阵的行 1 列 2 的值。
     */
    @checkSetterType(Number)
    public set m12(value: number) {
        this.#values[1] = value;
    }

    /**
     * 获取矩阵的行 1 列 3 的值。
     */
    public get m13(): number {
        return this.#values[2];
    }

    /**
     * 设置矩阵的行 1 列 3 的值。
     */
    @checkSetterType(Number)
    public set m13(value: number) {
        this.#values[2] = value;
    }

    /**
     * 获取矩阵的行 1 列 4 的值。
     */
    public get m14(): number {
        return this.#values[3];
    }

    /**
     * 设置矩阵的行 1 列 4 的值。
     */
    @checkSetterType(Number)
    public set m14(value: number) {
        this.#values[3] = value;
    }

    /**
     * 获取矩阵的行 2 列 1 的值。
     */
    public get m21(): number {
        return this.#values[4];
    }

    /**
     * 设置矩阵的行 2 列 1 的值。
     */
    @checkSetterType(Number)
    public set m21(value: number) {
        this.#values[4] = value;
    }

    /**
     * 获取矩阵的行 2 列 2 的值。
     */
    public get m22(): number {
        return this.#values[5];
    }

    /**
     * 设置矩阵的行 2 列 2 的值。
     */
    @checkSetterType(Number)
    public set m22(value: number) {
        this.#values[5] = value;
    }

    /**
     * 获取矩阵的行 2 列 3 的值。
     */
    public get m23(): number {
        return this.#values[6];
    }

    /**
     * 设置矩阵的行 2 列 3 的值。
     */
    @checkSetterType(Number)
    public set m23(value: number) {
        this.#values[6] = value;
    }

    /**
     * 获取矩阵的行 2 列 4 的值。
     */
    public get m24(): number {
        return this.#values[7];
    }

    /**
     * 设置矩阵的行 2 列 4 的值。
     */
    @checkSetterType(Number)
    public set m24(value: number) {
        this.#values[7] = value;
    }

    /**
     * 获取矩阵的行 3 列 1 的值。
     */
    public get m31(): number {
        return this.#values[8];
    }

    /**
     * 设置矩阵的行 3 列 1 的值。
     */
    @checkSetterType(Number)
    public set m31(value: number) {
        this.#values[8] = value;
    }

    /**
     * 获取矩阵的行 3 列 2 的值。
     */
    public get m32(): number {
        return this.#values[9];
    }

    /**
     * 设置矩阵的行 3 列 2 的值。
     */
    @checkSetterType(Number)
    public set m32(value: number) {
        this.#values[9] = value;
    }

    /**
     * 获取矩阵的行 3 列 3 的值。
     */
    public get m33(): number {
        return this.#values[10];
    }

    /**
     * 设置矩阵的行 3 列 3 的值。
     */
    @checkSetterType(Number)
    public set m33(value: number) {
        this.#values[10] = value;
    }

    /**
     * 获取矩阵的行 3 列 4 的值。
     */
    public get m34(): number {
        return this.#values[11];
    }

    /**
     * 设置矩阵的行 3 列 4 的值。
     */
    @checkSetterType(Number)
    public set m34(value: number) {
        this.#values[11] = value;
    }

    /**
     * 获取矩阵的行 4 列 1 的值。
     */
    public get m41(): number {
        return this.#values[12];
    }

    /**
     * 设置矩阵的行 4 列 1 的值。
     */
    @checkSetterType(Number)
    public set m41(value: number) {
        this.#values[12] = value;
    }

    /**
     * 获取矩阵的行 4 列 2 的值。
     */
    public get m42(): number {
        return this.#values[13];
    }

    /**
     * 设置矩阵的行 4 列 2 的值。
     */
    @checkSetterType(Number)
    public set m42(value: number) {
        this.#values[13] = value;
    }

    /**
     * 获取矩阵的行 4 列 3 的值。
     */
    public get m43(): number {
        return this.#values[14];
    }

    /**
     * 设置矩阵的行 4 列 3 的值。
     */
    @checkSetterType(Number)
    public set m43(value: number) {
        this.#values[14] = value;
    }

    /**
     * 获取矩阵的行 4 列 4 的值。
     */
    public get m44(): number {
        return this.#values[15];
    }

    /**
     * 设置矩阵的行 4 列 4 的值。
     */
    @checkSetterType(Number)
    public set m44(value: number) {
        this.#values[15] = value;
    }

    /**
     * 获取 Matrix 的后向矢量。
     */
    public get backward(): Vector3 {
        return new Vector3(this.#values[8], this.#values[9], this.#values[10]);
    }

    /**
     * 设置 Matrix 的后向矢量。
     */
    @lazyCheckSetterType(() => Vector3)
    public set backward(value: Vector3) {
        this.#values[8] = value.x;
        this.#values[9] = value.y;
        this.#values[10] = value.z;
    }

    /**
     * 获取 Matrix 的向下矢量。
     */
    public get down(): Vector3 {
        return new Vector3(-this.#values[4], -this.#values[5], -this.#values[6]);
    }

    /**
     * 设置 Matrix 的向下矢量。
     */
    @lazyCheckSetterType(() => Vector3)
    public set down(value: Vector3) {
        this.#values[4] = -value.x;
        this.#values[5] = -value.y;
        this.#values[6] = -value.z;
    }

    /**
     * 获取 Matrix 的向前矢量。
     */
    public get forward(): Vector3 {
        return new Vector3(-this.#values[8], -this.#values[9], -this.#values[10]);
    }

    /**
     * 设置 Matrix 的向前矢量。
     */
    @lazyCheckSetterType(() => Vector3)
    public set forward(value: Vector3) {
        this.#values[8] = -value.x;
        this.#values[9] = -value.y;
        this.#values[10] = -value.z;
    }

    /**
     * 获取 Matrix 的向左矢量。
     */
    public get left(): Vector3 {
        return new Vector3(-this.#values[0], -this.#values[1], -this.#values[2]);
    }

    /**
     * 设置 Matrix 的向左矢量。
     */
    @lazyCheckSetterType(() => Vector3)
    public set left(value: Vector3) {
        this.#values[0] = -value.x;
        this.#values[1] = -value.y;
        this.#values[2] = -value.z;
    }

    /**
     * 获取 Matrix 的向右矢量。
     */
    public get right(): Vector3 {
        return new Vector3(this.#values[0], this.#values[1], this.#values[2]);
    }

    /**
     * 设置 Matrix 的向右矢量。
     */
    @lazyCheckSetterType(() => Vector3)
    public set right(value: Vector3) {
        this.#values[0] = value.x;
        this.#values[1] = value.y;
        this.#values[2] = value.z;
    }

    /**
     * 获取 Matrix 的平移矢量。
     */
    public get translation(): Vector3 {
        return new Vector3(this.#values[12], this.#values[13], this.#values[14]);
    }

    /**
     * 设置 Matrix 的平移矢量。
     */
    @lazyCheckSetterType(() => Vector3)
    public set translation(value: Vector3) {
        this.#values[12] = value.x;
        this.#values[13] = value.y;
        this.#values[14] = value.z;
    }

    /**
     * 获取 Matrix 的向上矢量。
     */
    public get up(): Vector3 {
        return new Vector3(this.#values[4], this.#values[5], this.#values[6]);
    }

    /**
     * 设置 Matrix 的向上矢量。
     */
    @lazyCheckSetterType(() => Vector3)
    public set up(value: Vector3) {
        this.#values[4] = value.x;
        this.#values[5] = value.y;
        this.#values[6] = value.z;
    }

    /**
     * 矩阵元素数组。
     */
    #values = new Float32Array(16);

    /**
     * 获取矩阵元素数组。
     */
    get values(): Float32Array {
        return this.#values;
    }

    /**
     * 新建一个空的 Matrix 实例。
     */
    constructor();
    /**
     * 初始化新的 Matrix 实例。
     * @param m11 m11 的初始化值。
     * @param m12 m12 的初始化值。
     * @param m13 m13 的初始化值。
     * @param m14 m14 的初始化值。
     * @param m21 m21 的初始化值。
     * @param m22 m22 的初始化值。
     * @param m23 m23 的初始化值。
     * @param m24 m24 的初始化值。
     * @param m31 m31 的初始化值。
     * @param m32 m32 的初始化值。
     * @param m33 m33 的初始化值。
     * @param m34 m34 的初始化值。
     * @param m41 m41 的初始化值。
     * @param m42 m42 的初始化值。
     * @param m43 m43 的初始化值。
     * @param m44 m44 的初始化值。
     */
    constructor(
        m11: number,
        m12: number,
        m13: number,
        m14: number,
        m21: number,
        m22: number,
        m23: number,
        m24: number,
        m31: number,
        m32: number,
        m33: number,
        m34: number,
        m41: number,
        m42: number,
        m43: number,
        m44: number
    );
    constructor(...params: any) {
        Matrix[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    /**
     * 结构化构造函数。
     * @returns Matrix 实例。
     */
    public static ["##STRUCT_CONSTRUCTOR##"]() {
        return new Matrix();
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        Matrix[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number, Number], function (this: Matrix, m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
                this.#values[0] = m11, this.#values[1] = m12, this.#values[2] = m13, this.#values[3] = m14;
                this.#values[4] = m21, this.#values[5] = m22, this.#values[6] = m23, this.#values[7] = m24;
                this.#values[8] = m31, this.#values[9] = m32, this.#values[10] = m33, this.#values[11] = m34;
                this.#values[12] = m41, this.#values[13] = m42, this.#values[14] = m43, this.#values[15] = m44;
            });

        return Matrix[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    public *[Symbol.iterator](): IterableIterator<number> {
        const elements = [
            this.#values[0], this.#values[1], this.#values[2], this.#values[3],
            this.#values[4], this.#values[5], this.#values[6], this.#values[7],
            this.#values[8], this.#values[9], this.#values[10], this.#values[11],
            this.#values[12], this.#values[13], this.#values[14], this.#values[15]
        ];
        for (const element of elements) {
            yield element;
        }
    }

    /**
     * 将一个矩阵添加到另一个矩阵。
     * @param matrix1 源矩阵。
     * @param matrix2 源矩阵。
     * @returns 包含矩阵1和矩阵2的总和值的矩阵。
     */
    public static add(matrix1: Matrix, matrix2: Matrix): Matrix;
    /**
     * 将一个矩阵添加到另一个矩阵。
     * @param matrix1 源矩阵。
     * @param matrix2 源矩阵。
     * @param result [OutAttribute] 结果矩阵。
     */
    public static add(matrix1: Matrix, matrix2: Matrix, result: Matrix): void;
    public static add(...params: any): any {
        Matrix.add = overload()
            .add([Matrix, Matrix], function (matrix1, matrix2) {
                return new Matrix(
                    matrix1.#values[0] + matrix2.#values[0], matrix1.#values[1] + matrix2.#values[1], matrix1.#values[2] + matrix2.#values[2], matrix1.#values[3] + matrix2.#values[3],
                    matrix1.#values[4] + matrix2.#values[4], matrix1.#values[5] + matrix2.#values[5], matrix1.#values[6] + matrix2.#values[6], matrix1.#values[7] + matrix2.#values[7],
                    matrix1.#values[8] + matrix2.#values[8], matrix1.#values[9] + matrix2.#values[9], matrix1.#values[10] + matrix2.#values[10], matrix1.#values[11] + matrix2.#values[11],
                    matrix1.#values[12] + matrix2.#values[12], matrix1.#values[13] + matrix2.#values[13], matrix1.#values[14] + matrix2.#values[14], matrix1.#values[15] + matrix2.#values[15]
                );
            })
            .add([Matrix, Matrix, Matrix], function (matrix1, matrix2, result) {
                result.#values[0] = matrix1.#values[0] + matrix2.#values[0];
                result.#values[1] = matrix1.#values[1] + matrix2.#values[1];
                result.#values[2] = matrix1.#values[2] + matrix2.#values[2];
                result.#values[3] = matrix1.#values[3] + matrix2.#values[3];
                result.#values[4] = matrix1.#values[4] + matrix2.#values[4];
                result.#values[5] = matrix1.#values[5] + matrix2.#values[5];
                result.#values[6] = matrix1.#values[6] + matrix2.#values[6];
                result.#values[7] = matrix1.#values[7] + matrix2.#values[7];
                result.#values[8] = matrix1.#values[8] + matrix2.#values[8];
                result.#values[9] = matrix1.#values[9] + matrix2.#values[9];
                result.#values[10] = matrix1.#values[10] + matrix2.#values[10];
                result.#values[11] = matrix1.#values[11] + matrix2.#values[11];
                result.#values[12] = matrix1.#values[12] + matrix2.#values[12];
                result.#values[13] = matrix1.#values[13] + matrix2.#values[13];
                result.#values[14] = matrix1.#values[14] + matrix2.#values[14];
                result.#values[15] = matrix1.#values[15] + matrix2.#values[15];
            });

        return Matrix.add.apply(this, params);
    }

    /**
     * 创建一个绕指定对象位置旋转的球形宣传物。
     * @param objectPosition 宣传物围绕旋转的对象的位置。
     * @param cameraPosition 摄影机位置。
     * @param cameraUpVector 摄影机向上矢量。
     * @param cameraForwardVector 可选的摄影机向前矢量。
     * @returns 创建的宣传位置。
     */
    public static createBillboard(
        objectPosition: Vector3,
        cameraPosition: Vector3,
        cameraUpVector: Vector3,
        cameraForwardVector: Vector3 | null
    ): Matrix;
    /**
     * 创建一个绕指定对象位置旋转的球形宣传物。
     * @param objectPosition 宣传物围绕旋转的对象的位置。
     * @param cameraPosition 摄影机位置。
     * @param cameraUpVector 摄影机向上矢量。
     * @param cameraForwardVector 可选的摄影机向前矢量。
     * @param result [OutAttribute] 创建的宣传物矩阵。
     */
    public static createBillboard(
        objectPosition: Vector3,
        cameraPosition: Vector3,
        cameraUpVector: Vector3,
        cameraForwardVector: Vector3 | null,
        result: Matrix
    ): void;
    public static createBillboard(...params: any): any {
        Matrix.createBillboard = overload()
            .add([Vector3, Vector3, Vector3, [Vector3, null]], function (objectPosition, cameraPosition, cameraUpVector, cameraForwardVector) {
                const ox = objectPosition.x, oy = objectPosition.y, oz = objectPosition.z;
                const cx = cameraPosition.x, cy = cameraPosition.y, cz = cameraPosition.z;
                const cux = cameraUpVector.x, cuy = cameraUpVector.y, cuz = cameraUpVector.z;

                let vx = ox - cx;
                let vy = oy - cy;
                let vz = oz - cz;

                const num = vx * vx + vy * vy + vz * vz;

                if (num < 0.0001) {
                    if (null === cameraForwardVector) {
                        vx = 0; vy = 0; vz = -1; // Vector3.forward
                    } else {
                        vx = -cameraForwardVector.x;
                        vy = -cameraForwardVector.y;
                        vz = -cameraForwardVector.z;
                    }
                } else {
                    const invLen = 1 / Math.sqrt(num);
                    vx *= invLen;
                    vy *= invLen;
                    vz *= invLen;
                }

                // vector2 = cross(cameraUpVector, vector)
                let v2x = cuy * vz - cuz * vy;
                let v2y = cuz * vx - cux * vz;
                let v2z = cux * vy - cuy * vx;

                // vector2.normalize()
                const len2 = v2x * v2x + v2y * v2y + v2z * v2z;
                const invLen2 = 1 / Math.sqrt(len2);
                v2x *= invLen2;
                v2y *= invLen2;
                v2z *= invLen2;

                // vector3 = cross(vector, vector2)
                const v3x = vy * v2z - vz * v2y;
                const v3y = vz * v2x - vx * v2z;
                const v3z = vx * v2y - vy * v2x;

                return new Matrix(
                    v2x, v2y, v2z, 0,
                    v3x, v3y, v3z, 0,
                    vx, vy, vz, 0,
                    ox, oy, oz, 1
                );
            })
            .add([Vector3, Vector3, Vector3, [Vector3, null], Matrix], function (objectPosition, cameraPosition, cameraUpVector, cameraForwardVector, result) {
                const ox = objectPosition.x, oy = objectPosition.y, oz = objectPosition.z;
                const cx = cameraPosition.x, cy = cameraPosition.y, cz = cameraPosition.z;
                const cux = cameraUpVector.x, cuy = cameraUpVector.y, cuz = cameraUpVector.z;

                let vx = ox - cx;
                let vy = oy - cy;
                let vz = oz - cz;

                const num = vx * vx + vy * vy + vz * vz;

                if (num < 0.0001) {
                    if (null === cameraForwardVector) {
                        vx = 0; vy = 0; vz = -1; // Vector3.forward
                    } else {
                        vx = -cameraForwardVector.x;
                        vy = -cameraForwardVector.y;
                        vz = -cameraForwardVector.z;
                    }
                } else {
                    const invLen = 1 / Math.sqrt(num);
                    vx *= invLen;
                    vy *= invLen;
                    vz *= invLen;
                }

                // vector2 = cross(cameraUpVector, vector)
                let v2x = cuy * vz - cuz * vy;
                let v2y = cuz * vx - cux * vz;
                let v2z = cux * vy - cuy * vx;

                // vector2.normalize()
                const len2 = v2x * v2x + v2y * v2y + v2z * v2z;
                const invLen2 = 1 / Math.sqrt(len2);
                v2x *= invLen2;
                v2y *= invLen2;
                v2z *= invLen2;

                // vector3 = cross(vector, vector2)
                const v3x = vy * v2z - vz * v2y;
                const v3y = vz * v2x - vx * v2z;
                const v3z = vx * v2y - vy * v2x;

                result.#values[0] = v2x;
                result.#values[1] = v2y;
                result.#values[2] = v2z;
                result.#values[3] = 0;
                result.#values[4] = v3x;
                result.#values[5] = v3y;
                result.#values[6] = v3z;
                result.#values[7] = 0;
                result.#values[8] = vx;
                result.#values[9] = vy;
                result.#values[10] = vz;
                result.#values[11] = 0;
                result.#values[12] = ox;
                result.#values[13] = oy;
                result.#values[14] = oz;
                result.#values[15] = 1;
            });

        return Matrix.createBillboard.apply(this, params);
    }

    /**
     * 创建一个绕指定轴旋转的圆柱形宣传物。
     * @param objectPosition 宣传物围绕旋转的对象的位置。
     * @param cameraPosition 摄影机位置。
     * @param rotateAxis 宣传物的旋转轴。
     * @param cameraForwardVector 可选的摄影机向前矢量。
     * @param objectForwardVector 可选的对象向前矢量。
     * @returns 宣传位置矩阵。
     */
    public static createConstrainedBillboard(
        objectPosition: Vector3,
        cameraPosition: Vector3,
        rotateAxis: Vector3,
        cameraForwardVector: Vector3 | null,
        objectForwardVector: Vector3 | null
    ): Matrix;
    /**
     * 创建一个绕指定轴旋转的圆柱形宣传物。
     * @param objectPosition 宣传物围绕旋转的对象的位置。
     * @param cameraPosition 摄影机位置。
     * @param rotateAxis 宣传物的旋转轴。
     * @param cameraForwardVector 可选的摄影机向前矢量。
     * @param objectForwardVector 可选的对象向前矢量。
     * @param result [OutAttribute] 创建的宣传物矩阵。
     */
    public static createConstrainedBillboard(
        objectPosition: Vector3,
        cameraPosition: Vector3,
        rotateAxis: Vector3,
        cameraForwardVector: Vector3 | null,
        objectForwardVector: Vector3 | null,
        result: Matrix
    ): void;
    public static createConstrainedBillboard(...params: any): any {
        Matrix.createConstrainedBillboard = overload()
            .add([Vector3, Vector3, Vector3, [Vector3, null], [Vector3, null]], function (objectPosition, cameraPosition, rotateAxis, cameraForwardVector, objectForwardVector) {
                const ox = objectPosition.x, oy = objectPosition.y, oz = objectPosition.z;

                let v2x = ox - cameraPosition.x;
                let v2y = oy - cameraPosition.y;
                let v2z = oz - cameraPosition.z;

                let num2 = v2x * v2x + v2y * v2y + v2z * v2z;
                if (num2 < 0.0001) {
                    if (!cameraForwardVector) {
                        v2x = 0; v2y = 0; v2z = -1; // Vector3.forward
                    } else {
                        v2x = -cameraForwardVector.x;
                        v2y = -cameraForwardVector.y;
                        v2z = -cameraForwardVector.z;
                    }
                } else {
                    const val = 1 / Math.sqrt(num2);
                    v2x *= val;
                    v2y *= val;
                    v2z *= val;
                }

                const v4x = rotateAxis.x;
                const v4y = rotateAxis.y;
                const v4z = rotateAxis.z;
                let num = v4x * v2x + v4y * v2y + v4z * v2z;

                let vx, vy, vz;
                let v3x, v3y, v3z;

                if (Math.abs(num) > 0.9982547) {
                    let vec3ForwardX = 0, vec3ForwardY = 0, vec3ForwardZ = -1; // Vector3.forward
                    if (objectForwardVector) {
                        vx = objectForwardVector.x;
                        vy = objectForwardVector.y;
                        vz = objectForwardVector.z;
                        num = v4x * vx + v4y * vy + v4z * vz;
                        if (Math.abs(num) > 0.9982547) {
                            num = ((v4x * vec3ForwardX) + (v4y * vec3ForwardY)) + (v4z * vec3ForwardZ);
                            if (Math.abs(num) > 0.9982547) {
                                vx = 1; vy = 0; vz = 0; // Vector3.right
                            } else {
                                vx = vec3ForwardX; vy = vec3ForwardY; vz = vec3ForwardZ;
                            }
                        }
                    } else {
                        num = ((v4x * vec3ForwardX) + (v4y * vec3ForwardY)) + (v4z * vec3ForwardZ);
                        if (Math.abs(num) > 0.9982547) {
                            vx = 1; vy = 0; vz = 0; // Vector3.right
                        } else {
                            vx = vec3ForwardX; vy = vec3ForwardY; vz = vec3ForwardZ;
                        }
                    }

                    // vector3 = cross(rotateAxis, vector)
                    v3x = v4y * vz - v4z * vy;
                    v3y = v4z * vx - v4x * vz;
                    v3z = v4x * vy - v4y * vx;

                    // vector3.normalize()
                    const len3 = v3x * v3x + v3y * v3y + v3z * v3z;
                    const invLen3 = 1 / Math.sqrt(len3);
                    v3x *= invLen3;
                    v3y *= invLen3;
                    v3z *= invLen3;

                    // vector = cross(vector3, rotateAxis)
                    vx = v3y * v4z - v3z * v4y;
                    vy = v3z * v4x - v3x * v4z;
                    vz = v3x * v4y - v3y * v4x;

                    // vector.normalize()
                    const len = vx * vx + vy * vy + vz * vz;
                    const invLen = 1 / Math.sqrt(len);
                    vx *= invLen;
                    vy *= invLen;
                    vz *= invLen;
                } else {
                    // vector3 = cross(rotateAxis, vector2)
                    v3x = v4y * v2z - v4z * v2y;
                    v3y = v4z * v2x - v4x * v2z;
                    v3z = v4x * v2y - v4y * v2x;

                    // vector3.normalize()
                    const len3 = v3x * v3x + v3y * v3y + v3z * v3z;
                    const invLen3 = 1 / Math.sqrt(len3);
                    v3x *= invLen3;
                    v3y *= invLen3;
                    v3z *= invLen3;

                    // vector = cross(vector3, vector4) (vector4 is rotateAxis)
                    vx = v3y * v4z - v3z * v4y;
                    vy = v3z * v4x - v3x * v4z;
                    vz = v3x * v4y - v3y * v4x;

                    // vector.normalize()
                    const len = vx * vx + vy * vy + vz * vz;
                    const invLen = 1 / Math.sqrt(len);
                    vx *= invLen;
                    vy *= invLen;
                    vz *= invLen;
                }

                return new Matrix(
                    v3x, v3y, v3z, 0,
                    v4x, v4y, v4z, 0,
                    vx, vy, vz, 0,
                    ox, oy, oz, 1
                );
            })
            .add([Vector3, Vector3, Vector3, [Vector3, null], [Vector3, null], Matrix], function (objectPosition, cameraPosition, rotateAxis, cameraForwardVector, objectForwardVector, result) {
                const ox = objectPosition.x, oy = objectPosition.y, oz = objectPosition.z;

                let v2x = ox - cameraPosition.x;
                let v2y = oy - cameraPosition.y;
                let v2z = oz - cameraPosition.z;

                let num2 = v2x * v2x + v2y * v2y + v2z * v2z;
                if (num2 < 0.0001) {
                    if (!cameraForwardVector) {
                        v2x = 0; v2y = 0; v2z = -1; // Vector3.forward
                    } else {
                        v2x = -cameraForwardVector.x;
                        v2y = -cameraForwardVector.y;
                        v2z = -cameraForwardVector.z;
                    }
                } else {
                    const val = 1 / Math.sqrt(num2);
                    v2x *= val;
                    v2y *= val;
                    v2z *= val;
                }

                const v4x = rotateAxis.x;
                const v4y = rotateAxis.y;
                const v4z = rotateAxis.z;
                let num = v4x * v2x + v4y * v2y + v4z * v2z;

                let vx, vy, vz;
                let v3x, v3y, v3z;

                if (Math.abs(num) > 0.9982547) {
                    let vec3ForwardX = 0, vec3ForwardY = 0, vec3ForwardZ = -1; // Vector3.forward
                    if (objectForwardVector) {
                        vx = objectForwardVector.x;
                        vy = objectForwardVector.y;
                        vz = objectForwardVector.z;
                        num = v4x * vx + v4y * vy + v4z * vz;
                        if (Math.abs(num) > 0.9982547) {
                            num = ((v4x * vec3ForwardX) + (v4y * vec3ForwardY)) + (v4z * vec3ForwardZ);
                            if (Math.abs(num) > 0.9982547) {
                                vx = 1; vy = 0; vz = 0; // Vector3.right
                            } else {
                                vx = vec3ForwardX; vy = vec3ForwardY; vz = vec3ForwardZ;
                            }
                        }
                    } else {
                        num = ((v4x * vec3ForwardX) + (v4y * vec3ForwardY)) + (v4z * vec3ForwardZ);
                        if (Math.abs(num) > 0.9982547) {
                            vx = 1; vy = 0; vz = 0; // Vector3.right
                        } else {
                            vx = vec3ForwardX; vy = vec3ForwardY; vz = vec3ForwardZ;
                        }
                    }

                    // vector3 = cross(rotateAxis, vector)
                    v3x = v4y * vz - v4z * vy;
                    v3y = v4z * vx - v4x * vz;
                    v3z = v4x * vy - v4y * vx;

                    // vector3.normalize()
                    const len3 = v3x * v3x + v3y * v3y + v3z * v3z;
                    const invLen3 = 1 / Math.sqrt(len3);
                    v3x *= invLen3;
                    v3y *= invLen3;
                    v3z *= invLen3;

                    // vector = cross(vector3, rotateAxis)
                    vx = v3y * v4z - v3z * v4y;
                    vy = v3z * v4x - v3x * v4z;
                    vz = v3x * v4y - v3y * v4x;

                    // vector.normalize()
                    const len = vx * vx + vy * vy + vz * vz;
                    const invLen = 1 / Math.sqrt(len);
                    vx *= invLen;
                    vy *= invLen;
                    vz *= invLen;
                } else {
                    // vector3 = cross(rotateAxis, vector2)
                    v3x = v4y * v2z - v4z * v2y;
                    v3y = v4z * v2x - v4x * v2z;
                    v3z = v4x * v2y - v4y * v2x;

                    // vector3.normalize()
                    const len3 = v3x * v3x + v3y * v3y + v3z * v3z;
                    const invLen3 = 1 / Math.sqrt(len3);
                    v3x *= invLen3;
                    v3y *= invLen3;
                    v3z *= invLen3;

                    // vector = cross(vector3, vector4) (vector4 is rotateAxis)
                    vx = v3y * v4z - v3z * v4y;
                    vy = v3z * v4x - v3x * v4z;
                    vz = v3x * v4y - v3y * v4x;

                    // vector.normalize()
                    const len = vx * vx + vy * vy + vz * vz;
                    const invLen = 1 / Math.sqrt(len);
                    vx *= invLen;
                    vy *= invLen;
                    vz *= invLen;
                }

                result.#values[0] = v3x;
                result.#values[1] = v3y;
                result.#values[2] = v3z;
                result.#values[3] = 0;
                result.#values[4] = v4x;
                result.#values[5] = v4y;
                result.#values[6] = v4z;
                result.#values[7] = 0;
                result.#values[8] = vx;
                result.#values[9] = vy;
                result.#values[10] = vz;
                result.#values[11] = 0;
                result.#values[12] = ox;
                result.#values[13] = oy;
                result.#values[14] = oz;
                result.#values[15] = 1;
            });

        return Matrix.createConstrainedBillboard.apply(this, params);
    }

    /**
     * 新建一个绕任意矢量旋转的 Matrix。
     * @param axis 要围绕旋转的轴。
     * @param angle 绕矢量旋转的角度。
     * @returns 旋转矩阵。
     */
    public static createFromAxisAngle(axis: Vector3, angle: number): Matrix;
    /**
     * 新建一个绕任意矢量旋转的 Matrix。
     * @param axis 要围绕旋转的轴。
     * @param angle 绕矢量旋转的角度。
     * @param result [OutAttribute] 创建的 Matrix。
     */
    public static createFromAxisAngle(axis: Vector3, angle: number, result: Matrix): void;
    public static createFromAxisAngle(...params: any): any {
        Matrix.createFromAxisAngle = overload()
            .add([Vector3, Number], function (axis, angle) {
                const axisX = axis.x, axisY = axis.y, axisZ = axis.z;
                const sinAngle = Math.sin(angle), cosAngle = Math.cos(angle);
                const axisXSquare = axisX ** 2, axisYSquare = axisY ** 2, axisZSquare = axisZ ** 2;
                const axisXY = axisX * axisY, axisXZ = axisX * axisZ, axisYZ = axisY * axisZ;

                const a = axisXY - (cosAngle * axisXY);
                const b = sinAngle * axisZ;
                const c = axisXZ - (cosAngle * axisXZ);
                const d = sinAngle * axisY;
                const e = axisYZ - (cosAngle * axisYZ);
                const f = sinAngle * axisX;

                return new Matrix(
                    axisXSquare + (cosAngle * (1 - axisXSquare)), a + b, c - d, 0,
                    a - b, axisYSquare + (cosAngle * (1 - axisYSquare)), e + f, 0,
                    c + d, e - f, axisZSquare + (cosAngle * (1 - axisZSquare)), 0,
                    0, 0, 0, 1
                );
            })
            .add([Vector3, Number, Matrix], function (axis, angle, result) {
                const axisX = axis.x, axisY = axis.y, axisZ = axis.z;
                const sinAngle = Math.sin(angle), cosAngle = Math.cos(angle);
                const axisXSquare = axisX ** 2, axisYSquare = axisY ** 2, axisZSquare = axisZ ** 2;
                const axisXY = axisX * axisY, axisXZ = axisX * axisZ, axisYZ = axisY * axisZ;

                const a = axisXY - (cosAngle * axisXY);
                const b = sinAngle * axisZ;
                const c = axisXZ - (cosAngle * axisXZ);
                const d = sinAngle * axisY;
                const e = axisYZ - (cosAngle * axisYZ);
                const f = sinAngle * axisX;

                result.#values[0] = axisXSquare + (cosAngle * (1 - axisXSquare));
                result.#values[1] = a + b;
                result.#values[2] = c - d;
                result.#values[3] = 0;
                result.#values[4] = a - b;
                result.#values[5] = axisYSquare + (cosAngle * (1 - axisYSquare));
                result.#values[6] = e + f;
                result.#values[7] = 0;
                result.#values[8] = c + d;
                result.#values[9] = e - f;
                result.#values[10] = axisZSquare + (cosAngle * (1 - axisZSquare));
                result.#values[11] = 0;
                result.#values[12] = 0;
                result.#values[13] = 0;
                result.#values[14] = 0;
                result.#values[15] = 1;
            });

        return Matrix.createFromAxisAngle.apply(this, params);
    }

    /**
     * 从 Quaternion 创建一个旋转 Matrix。
     * @param quaternion 用于创建 Matrix 的 Quaternion。
     * @returns 旋转矩阵。
     */
    public static createFromQuaternion(quaternion: Quaternion): Matrix;
    /**
     * 从 Quaternion 创建一个旋转 Matrix。
     * @param quaternion 用于创建 Matrix 的 Quaternion。
     * @param result [OutAttribute] 创建的 Matrix。
     */
    public static createFromQuaternion(quaternion: Quaternion, result: Matrix): void;
    public static createFromQuaternion(...params: any): any {
        Matrix.createFromQuaternion = overload()
            .add([Quaternion], function (quaternion) {
                const x = quaternion.x, y = quaternion.y, z = quaternion.z, w = quaternion.w;

                const xx = x ** 2, yy = y ** 2, zz = z ** 2;

                const xy = x * y, xz = x * z, yz = y * z;
                const wx = w * x, wy = w * y, wz = w * z;

                return new Matrix(
                    1 - 2 * (yy + zz), 2 * (xy + wz), 2 * (xz - wy), 0,
                    2 * (xy - wz), 1 - 2 * (zz + xx), 2 * (yz + wx), 0,
                    2 * (xz + wy), 2 * (yz - wx), 1 - 2 * (yy + xx), 0,
                    0, 0, 0, 1
                );
            })
            .add([Quaternion, Matrix], function (quaternion, result) {
                const x = quaternion.x, y = quaternion.y, z = quaternion.z, w = quaternion.w;

                const xx = x ** 2, yy = y ** 2, zz = z ** 2;

                const xy = x * y, xz = x * z, yz = y * z;
                const wx = w * x, wy = w * y, wz = w * z;

                result.#values[0] = 1 - 2 * (yy + zz);
                result.#values[1] = 2 * (xy + wz);
                result.#values[2] = 2 * (xz - wy);
                result.#values[3] = 0;
                result.#values[4] = 2 * (xy - wz);
                result.#values[5] = 1 - 2 * (zz + xx);
                result.#values[6] = 2 * (yz + wx);
                result.#values[7] = 0;
                result.#values[8] = 2 * (xz + wy);
                result.#values[9] = 2 * (yz - wx);
                result.#values[10] = 1 - 2 * (yy + xx);
                result.#values[11] = 0;
                result.#values[12] = 0;
                result.#values[13] = 0;
                result.#values[14] = 0;
                result.#values[15] = 1;
            });

        return Matrix.createFromQuaternion.apply(this, params);
    }

    /**
     * 用指定的偏转、俯仰和侧滚新建旋转矩阵。
     * @param yaw 绕 y 轴的旋转角度，以弧度计。
     * @param pitch 绕 x 轴的旋转角度，以弧度计。
     * @param roll 绕 z 轴的旋转角度，以弧度计。
     * @returns 旋转矩阵。
     */
    public static createFromYawPitchRoll(
        yaw: number,
        pitch: number,
        roll: number
    ): Matrix;
    /**
     * 用指定的偏转、俯仰和侧滚新建旋转矩阵。
     * @param yaw 绕 y 轴的旋转角度，以弧度计。
     * @param pitch 绕 x 轴的旋转角度，以弧度计。
     * @param roll 绕 z 轴的旋转角度，以弧度计。
     * @param result [OutAttribute] 呈现指定的偏转、俯仰和侧滚的现有填充矩阵。
     */
    public static createFromYawPitchRoll(
        yaw: number,
        pitch: number,
        roll: number,
        result: Matrix
    ): void;
    public static createFromYawPitchRoll(...params: any): any {
        Matrix.createFromYawPitchRoll = overload()
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

                const qx = (cosYaw * sinPitch * cosRoll) + (sinYaw * cosPitch * sinRoll);
                const qy = (sinYaw * cosPitch * cosRoll) - (cosYaw * sinPitch * sinRoll);
                const qz = (cosYaw * cosPitch * sinRoll) - (sinYaw * sinPitch * cosRoll);
                const qw = (cosYaw * cosPitch * cosRoll) + (sinYaw * sinPitch * sinRoll);

                const xx = qx * qx;
                const yy = qy * qy;
                const zz = qz * qz;
                const xy = qx * qy;
                const xz = qx * qz;
                const yz = qy * qz;
                const wx = qw * qx;
                const wy = qw * qy;
                const wz = qw * qz;

                return new Matrix(
                    1 - 2 * (yy + zz), 2 * (xy + wz), 2 * (xz - wy), 0,
                    2 * (xy - wz), 1 - 2 * (zz + xx), 2 * (yz + wx), 0,
                    2 * (xz + wy), 2 * (yz - wx), 1 - 2 * (yy + xx), 0,
                    0, 0, 0, 1
                );
            })
            .add([Number, Number, Number, Matrix], function (yaw, pitch, roll, result) {
                const halfRoll = roll * 0.5;
                const halfPitch = pitch * 0.5;
                const halfYaw = yaw * 0.5;

                const sinRoll = Math.sin(halfRoll);
                const cosRoll = Math.cos(halfRoll);
                const sinPitch = Math.sin(halfPitch);
                const cosPitch = Math.cos(halfPitch);
                const sinYaw = Math.sin(halfYaw);
                const cosYaw = Math.cos(halfYaw);

                const qx = (cosYaw * sinPitch * cosRoll) + (sinYaw * cosPitch * sinRoll);
                const qy = (sinYaw * cosPitch * cosRoll) - (cosYaw * sinPitch * sinRoll);
                const qz = (cosYaw * cosPitch * sinRoll) - (sinYaw * sinPitch * cosRoll);
                const qw = (cosYaw * cosPitch * cosRoll) + (sinYaw * sinPitch * sinRoll);

                const xx = qx * qx;
                const yy = qy * qy;
                const zz = qz * qz;
                const xy = qx * qy;
                const xz = qx * qz;
                const yz = qy * qz;
                const wx = qw * qx;
                const wy = qw * qy;
                const wz = qw * qz;

                result.#values[0] = 1 - 2 * (yy + zz);
                result.#values[1] = 2 * (xy + wz);
                result.#values[2] = 2 * (xz - wy);
                result.#values[3] = 0;
                result.#values[4] = 2 * (xy - wz);
                result.#values[5] = 1 - 2 * (zz + xx);
                result.#values[6] = 2 * (yz + wx);
                result.#values[7] = 0;
                result.#values[8] = 2 * (xz + wy);
                result.#values[9] = 2 * (yz - wx);
                result.#values[10] = 1 - 2 * (yy + xx);
                result.#values[11] = 0;
                result.#values[12] = 0;
                result.#values[13] = 0;
                result.#values[14] = 0;
                result.#values[15] = 1;
            });

        return Matrix.createFromYawPitchRoll.apply(this, params);
    }

    /**
     * 创建视图矩阵。
     * @param cameraPosition 摄影机位置。
     * @param cameraTarget 摄影机指向的目标。
     * @param cameraUpVector 摄影机视点中的“上”方向。
     * @returns 视图矩阵。
     */
    public static createLookAt(
        cameraPosition: Vector3,
        cameraTarget: Vector3,
        cameraUpVector: Vector3
    ): Matrix;
    /**
     * 创建视图矩阵。
     * @param cameraPosition 摄影机位置。
     * @param cameraTarget 摄影机指向的目标。
     * @param cameraUpVector 摄影机视点中的“上”方向。
     * @param result [OutAttribute] 创建的视图矩阵。
     */
    public static createLookAt(
        cameraPosition: Vector3,
        cameraTarget: Vector3,
        cameraUpVector: Vector3,
        result: Matrix
    ): void;
    public static createLookAt(...params: any): any {
        Matrix.createLookAt = overload()
            .add([Vector3, Vector3, Vector3], function (cameraPosition, cameraTarget, cameraUpVector) {
                const vzx = cameraPosition.x - cameraTarget.x;
                const vzy = cameraPosition.y - cameraTarget.y;
                const vzz = cameraPosition.z - cameraTarget.z;
                let len = Math.sqrt(vzx * vzx + vzy * vzy + vzz * vzz);
                const invLen = 1 / len;
                const vzx_n = vzx * invLen;
                const vzy_n = vzy * invLen;
                const vzz_n = vzz * invLen;

                const vxx = cameraUpVector.y * vzz_n - cameraUpVector.z * vzy_n;
                const vxy = cameraUpVector.z * vzx_n - cameraUpVector.x * vzz_n;
                const vxz = cameraUpVector.x * vzy_n - cameraUpVector.y * vzx_n;
                len = Math.sqrt(vxx * vxx + vxy * vxy + vxz * vxz);
                const invLen2 = 1 / len;
                const vxx_n = vxx * invLen2;
                const vxy_n = vxy * invLen2;
                const vxz_n = vxz * invLen2;

                const vyx = vzy_n * vxz_n - vzz_n * vxy_n;
                const vyy = vzz_n * vxx_n - vzx_n * vxz_n;
                const vyz = vzx_n * vxy_n - vzy_n * vxx_n;

                return new Matrix(
                    vxx_n, vyx, vzx_n, 0,
                    vxy_n, vyy, vzy_n, 0,
                    vxz_n, vyz, vzz_n, 0,
                    -(vxx_n * cameraPosition.x + vxy_n * cameraPosition.y + vxz_n * cameraPosition.z),
                    -(vyx * cameraPosition.x + vyy * cameraPosition.y + vyz * cameraPosition.z),
                    -(vzx_n * cameraPosition.x + vzy_n * cameraPosition.y + vzz_n * cameraPosition.z),
                    1
                );
            })
            .add([Vector3, Vector3, Vector3, Matrix], function (cameraPosition, cameraTarget, cameraUpVector, result) {
                const vzx = cameraPosition.x - cameraTarget.x;
                const vzy = cameraPosition.y - cameraTarget.y;
                const vzz = cameraPosition.z - cameraTarget.z;
                let len = Math.sqrt(vzx * vzx + vzy * vzy + vzz * vzz);
                const invLen = 1 / len;
                const vzx_n = vzx * invLen;
                const vzy_n = vzy * invLen;
                const vzz_n = vzz * invLen;

                const vxx = cameraUpVector.y * vzz_n - cameraUpVector.z * vzy_n;
                const vxy = cameraUpVector.z * vzx_n - cameraUpVector.x * vzz_n;
                const vxz = cameraUpVector.x * vzy_n - cameraUpVector.y * vzx_n;
                len = Math.sqrt(vxx * vxx + vxy * vxy + vxz * vxz);
                const invLen2 = 1 / len;
                const vxx_n = vxx * invLen2;
                const vxy_n = vxy * invLen2;
                const vxz_n = vxz * invLen2;

                const vyx = vzy_n * vxz_n - vzz_n * vxy_n;
                const vyy = vzz_n * vxx_n - vzx_n * vxz_n;
                const vyz = vzx_n * vxy_n - vzy_n * vxx_n;

                result.#values[0] = vxx_n;
                result.#values[1] = vyx;
                result.#values[2] = vzx_n;
                result.#values[3] = 0;
                result.#values[4] = vxy_n;
                result.#values[5] = vyy;
                result.#values[6] = vzy_n;
                result.#values[7] = 0;
                result.#values[8] = vxz_n;
                result.#values[9] = vyz;
                result.#values[10] = vzz_n;
                result.#values[11] = 0;
                result.#values[12] = -(vxx_n * cameraPosition.x + vxy_n * cameraPosition.y + vxz_n * cameraPosition.z);
                result.#values[13] = -(vyx * cameraPosition.x + vyy * cameraPosition.y + vyz * cameraPosition.z);
                result.#values[14] = -(vzx_n * cameraPosition.x + vzy_n * cameraPosition.y + vzz_n * cameraPosition.z);
                result.#values[15] = 1;
            });

        return Matrix.createLookAt.apply(this, params);
    }

    /**
     * 构建一个正交投影矩阵。
     * @param width 视图体积宽度。
     * @param height 视图体积高度。
     * @param zNearPlane 视图体积的最小 z 值。
     * @param zFarPlane 视图体积的最大 z 值。
     * @returns 正交投影矩阵。
     */
    public static createOrthographic(
        width: number,
        height: number,
        zNearPlane: number,
        zFarPlane: number
    ): Matrix;
    /**
     * 构建一个正交投影矩阵。
     * @param width 视图体积宽度。
     * @param height 视图体积高度。
     * @param zNearPlane 视图体积的最小 z 值。
     * @param zFarPlane 视图体积的最大 z 值。
     * @param result [OutAttribute] 投影矩阵。
     */
    public static createOrthographic(
        width: number,
        height: number,
        zNearPlane: number,
        zFarPlane: number,
        result: Matrix
    ): void;
    public static createOrthographic(...params: any): any {
        Matrix.createOrthographic = overload()
            .add([Number, Number, Number, Number], function (width, height, zNearPlane, zFarPlane) {
                const result = new Matrix();
                const invWidth = 2 / width;
                const invHeight = 2 / height;
                const invDepth = 1 / (zNearPlane - zFarPlane);
                const zNearRatio = zNearPlane / (zNearPlane - zFarPlane);

                result.#values[0] = invWidth;
                result.#values[1] = result.#values[2] = result.#values[3] = 0;
                result.#values[5] = invHeight;
                result.#values[4] = result.#values[6] = result.#values[7] = 0;
                result.#values[10] = invDepth;
                result.#values[8] = result.#values[9] = result.#values[11] = 0;
                result.#values[12] = result.#values[13] = 0;
                result.#values[14] = zNearRatio;
                result.#values[15] = 1;

                return result;
            })
            .add([Number, Number, Number, Number, Matrix], function (width, height, zNearPlane, zFarPlane, result) {
                const invWidth = 2 / width;
                const invHeight = 2 / height;
                const invDepth = 1 / (zNearPlane - zFarPlane);
                const zNearRatio = zNearPlane / (zNearPlane - zFarPlane);

                result.#values[0] = invWidth;
                result.#values[1] = result.#values[2] = result.#values[3] = 0;
                result.#values[5] = invHeight;
                result.#values[4] = result.#values[6] = result.#values[7] = 0;
                result.#values[10] = invDepth;
                result.#values[8] = result.#values[9] = result.#values[11] = 0;
                result.#values[12] = result.#values[13] = 0;
                result.#values[14] = zNearRatio;
                result.#values[15] = 1;
            });

        return Matrix.createOrthographic.apply(this, params);
    }

    /**
     * 构建一个定制的正交投影矩阵。
     * @param left 视图体积的最小 x 值。
     * @param right 视图体积的最大 x 值。
     * @param bottom 视图体积的最小 y 值。
     * @param top 视图体积的最大 y 值。
     * @param zNearPlane 视图体积的最小 z 值。
     * @param zFarPlane 视图体积的最大 z 值。
     * @returns 正交投影矩阵。
     */
    public static createOrthographicOffCenter(
        left: number,
        right: number,
        bottom: number,
        top: number,
        zNearPlane: number,
        zFarPlane: number
    ): Matrix;
    /**
     * 构建一个定制的正交投影矩阵。
     * @param left 视图体积的最小 x 值。
     * @param right 视图体积的最大 x 值。
     * @param bottom 视图体积的最小 y 值。
     * @param top 视图体积的最大 y 值。
     * @param zNearPlane 视图体积的最小 z 值。
     * @param zFarPlane 视图体积的最大 z 值。
     * @param result [OutAttribute] 投影矩阵。
     */
    public static createOrthographicOffCenter(
        left: number,
        right: number,
        bottom: number,
        top: number,
        zNearPlane: number,
        zFarPlane: number,
        result: Matrix
    ): void;
    public static createOrthographicOffCenter(...params: any): any {
        Matrix.createOrthographicOffCenter = overload()
            .add([Number, Number, Number, Number, Number, Number], function (left, right, bottom, top, zNearPlane, zFarPlane) {
                return new Matrix(
                    (2.0 / (right - left)), 0, 0, 0,
                    0, (2.0 / (top - bottom)), 0, 0,
                    0, 0, (1.0 / (zNearPlane - zFarPlane)), 0,
                    ((left + right) / (left - right)), ((top + bottom) / (bottom - top)), (zNearPlane / (zNearPlane - zFarPlane)), 1
                );
            })
            .add([Number, Number, Number, Number, Number, Number, Matrix], function (left, right, bottom, top, zNearPlane, zFarPlane, result) {
                result.#values[0] = (2.0 / (right - left));
                result.#values[1] = 0;
                result.#values[2] = 0;
                result.#values[3] = 0;
                result.#values[4] = 0;
                result.#values[5] = (2.0 / (top - bottom));
                result.#values[6] = 0;
                result.#values[7] = 0;
                result.#values[8] = 0;
                result.#values[9] = 0;
                result.#values[10] = (1.0 / (zNearPlane - zFarPlane));
                result.#values[11] = 0;
                result.#values[12] = ((left + right) / (left - right));
                result.#values[13] = ((top + bottom) / (bottom - top));
                result.#values[14] = (zNearPlane / (zNearPlane - zFarPlane));
                result.#values[15] = 1;
            });

        return Matrix.createOrthographicOffCenter.apply(this, params);
    }

    /**
     * 构建一个透视投影矩阵并返回结果值。
     * @param width 近处视图平面的视图体积宽度。
     * @param height 近处视图平面的视图体积高度。
     * @param nearPlaneDistance 与近处视图平面的距离。
     * @param farPlaneDistance 与远处视图平面的距离。
     * @returns 透视投影矩阵。
     */
    public static createPerspective(
        width: number,
        height: number,
        nearPlaneDistance: number,
        farPlaneDistance: number
    ): Matrix;
    /**
     * 构建一个透视投影矩阵并返回结果值。
     * @param width 近处视图平面的视图体积宽度。
     * @param height 近处视图平面的视图体积高度。
     * @param nearPlaneDistance 与近处视图平面的距离。
     * @param farPlaneDistance 与远处视图平面的距离。
     * @param result [OutAttribute] 投影矩阵。
     */
    public static createPerspective(
        width: number,
        height: number,
        nearPlaneDistance: number,
        farPlaneDistance: number,
        result: Matrix
    ): void;
    public static createPerspective(...params: any): any {
        Matrix.createPerspective = overload()
            .add([Number, Number, Number, Number], function (width, height, nearPlaneDistance, farPlaneDistance) {
                if (nearPlaneDistance <= 0) {
                    throw new RangeError("nearPlaneDistance 小于或等于 0。");
                }

                if (farPlaneDistance <= 0) {
                    throw new RangeError("farPlaneDistance 小于或等于 0。");
                }

                if (nearPlaneDistance >= farPlaneDistance) {
                    throw new RangeError("nearPlaneDistance 大于或等于 farPlaneDistance。");
                }

                const result = new Matrix();
                result.#values[0] = (2 * nearPlaneDistance) / width;
                result.#values[5] = (2 * nearPlaneDistance) / height;
                result.#values[10] = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
                result.#values[11] = -1;
                result.#values[14] = (nearPlaneDistance * farPlaneDistance) / (nearPlaneDistance - farPlaneDistance);
                return result;
            })
            .add([Number, Number, Number, Number, Matrix], function (width, height, nearPlaneDistance, farPlaneDistance, result) {
                if (nearPlaneDistance <= 0) {
                    throw new RangeError("nearPlaneDistance 小于或等于 0。");
                }

                if (farPlaneDistance <= 0) {
                    throw new RangeError("farPlaneDistance 小于或等于 0。");
                }

                if (nearPlaneDistance >= farPlaneDistance) {
                    throw new RangeError("nearPlaneDistance 大于或等于 farPlaneDistance。");
                }

                result.#values[0] = (2 * nearPlaneDistance) / width;
                result.#values[1] = 0;
                result.#values[2] = 0;
                result.#values[3] = 0;
                result.#values[4] = 0;
                result.#values[5] = (2 * nearPlaneDistance) / height;
                result.#values[6] = 0;
                result.#values[7] = 0;
                result.#values[8] = 0;
                result.#values[9] = 0;
                result.#values[10] = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
                result.#values[11] = -1;
                result.#values[12] = 0;
                result.#values[13] = 0;
                result.#values[14] = (nearPlaneDistance * farPlaneDistance) / (nearPlaneDistance - farPlaneDistance);
                result.#values[15] = 0;
            });

        return Matrix.createPerspective.apply(this, params);
    }

    /**
     * 构建一个基于视野的透视投影矩阵并返回值。
     * @param fieldOfView y 方向的视野，以弧度计。
     * @param aspectRatio 纵横比，定义为视图空间宽度与高度的比率。 与视口纵横比匹配的属性 AspectRatio。
     * @param nearPlaneDistance 与近处视图平面的距离。
     * @param farPlaneDistance 与远处视图平面的距离。
     * @returns 透视投影矩阵。
     */
    public static createPerspectiveFieldOfView(
        fieldOfView: number,
        aspectRatio: number,
        nearPlaneDistance: number,
        farPlaneDistance: number
    ): Matrix;
    /**
     * 构建一个基于视野的透视投影矩阵并返回值。
     * @param fieldOfView y 方向的视野，以弧度计。
     * @param aspectRatio 纵横比，定义为视图空间宽度与高度的比率。 与视口纵横比匹配的属性 AspectRatio。
     * @param nearPlaneDistance 与近处视图平面的距离。
     * @param farPlaneDistance 与远处视图平面的距离。
     * @param result [OutAttribute] 透视投影矩阵。
     */
    public static createPerspectiveFieldOfView(
        fieldOfView: number,
        aspectRatio: number,
        nearPlaneDistance: number,
        farPlaneDistance: number,
        result: Matrix
    ): void;
    public static createPerspectiveFieldOfView(...params: any): any {
        Matrix.createPerspectiveFieldOfView = overload()
            .add([Number, Number, Number, Number], function (fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
                if ((fieldOfView <= 0) || (fieldOfView >= MathHelper.pi)) {
                    throw new RangeError("fieldOfView 小于或等于 0 或大于或等于 PI。");
                }

                if (nearPlaneDistance <= 0) {
                    throw new RangeError("nearPlaneDistance 小于或等于 0。");
                }

                if (farPlaneDistance <= 0) {
                    throw new RangeError("farPlaneDistance 小于或等于 0。");
                }

                if (nearPlaneDistance >= farPlaneDistance) {
                    throw new RangeError("nearPlaneDistance 大于或等于 farPlaneDistance。");
                }

                const result = new Matrix();
                const halfFovTan = Math.tan(fieldOfView * 0.5);
                const num = 1 / halfFovTan;
                const num9 = num / aspectRatio;
                const nearFarDiff = nearPlaneDistance - farPlaneDistance;

                result.#values[0] = num9;
                result.#values[5] = num;
                result.#values[10] = farPlaneDistance / nearFarDiff;
                result.#values[11] = -1;
                result.#values[14] = (nearPlaneDistance * farPlaneDistance) / nearFarDiff;

                return result;
            })
            .add([Number, Number, Number, Number, Matrix], function (fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance, result) {
                if ((fieldOfView <= 0) || (fieldOfView >= MathHelper.pi)) {
                    throw new RangeError("fieldOfView 小于或等于 0 或大于或等于 PI。");
                }

                if (nearPlaneDistance <= 0) {
                    throw new RangeError("nearPlaneDistance 小于或等于 0。");
                }

                if (farPlaneDistance <= 0) {
                    throw new RangeError("farPlaneDistance 小于或等于 0。");
                }

                if (nearPlaneDistance >= farPlaneDistance) {
                    throw new RangeError("nearPlaneDistance 大于或等于 farPlaneDistance。");
                }

                const halfFovTan = Math.tan(fieldOfView * 0.5);
                const num = 1 / halfFovTan;
                const num9 = num / aspectRatio;
                const nearFarDiff = nearPlaneDistance - farPlaneDistance;

                result.#values[0] = num9;;
                result.#values[1] = 0;
                result.#values[2] = 0;
                result.#values[3] = 0;
                result.#values[4] = 0;
                result.#values[5] = num;
                result.#values[6] = 0;
                result.#values[7] = 0;
                result.#values[8] = 0;
                result.#values[9] = 0;
                result.#values[10] = farPlaneDistance / nearFarDiff;
                result.#values[11] = -1;
                result.#values[12] = 0;
                result.#values[13] = 0;
                result.#values[14] = (nearPlaneDistance * farPlaneDistance) / nearFarDiff;
                result.#values[15] = 0;
            });

        return Matrix.createPerspectiveFieldOfView.apply(this, params);
    }

    /**
     * 构建一个定制的透视投影矩阵。
     * @param left 近处视图平面的视图体积的最小 x 值。
     * @param right 近处视图平面的视图体积的最大 x 值。
     * @param bottom 近处视图平面的视图体积的最小 y 值。
     * @param top 近处视图平面的视图体积的最大 y 值。
     * @param nearPlaneDistance 与近处视图平面的距离。
     * @param farPlaneDistance 与远处视图平面的距离。
     * @returns 透视投影矩阵。
     */
    public static createPerspectiveOffCenter(
        left: number,
        right: number,
        bottom: number,
        top: number,
        nearPlaneDistance: number,
        farPlaneDistance: number
    ): Matrix;
    /**
     * 构建一个定制的透视投影矩阵。
     * @param left 近处视图平面的视图体积的最小 x 值。
     * @param right 近处视图平面的视图体积的最大 x 值。
     * @param bottom 近处视图平面的视图体积的最小 y 值。
     * @param top 近处视图平面的视图体积的最大 y 值。
     * @param nearPlaneDistance 与近处视图平面的距离。
     * @param farPlaneDistance 与远处视图平面的距离。
     * @param result [OutAttribute] 创建的投影矩阵。
     */
    public static createPerspectiveOffCenter(
        left: number,
        right: number,
        bottom: number,
        top: number,
        nearPlaneDistance: number,
        farPlaneDistance: number,
        result: Matrix
    ): void;
    public static createPerspectiveOffCenter(...params: any): any {
        Matrix.createPerspectiveOffCenter = overload()
            .add([Number, Number, Number, Number, Number, Number], function (left, right, bottom, top, nearPlaneDistance, farPlaneDistance) {
                if (nearPlaneDistance <= 0) {
                    throw new RangeError("nearPlaneDistance 小于或等于 0。");
                }

                if (farPlaneDistance <= 0) {
                    throw new RangeError("farPlaneDistance 小于或等于 0。");
                }

                if (nearPlaneDistance >= farPlaneDistance) {
                    throw new RangeError("nearPlaneDistance 大于或等于 farPlaneDistance。");
                }

                const result = new Matrix();
                const near2 = 2 * nearPlaneDistance;
                const rightLeft = right - left;
                const topBottom = top - bottom;
                const nearFar = nearPlaneDistance - farPlaneDistance;

                result.#values[0] = near2 / rightLeft;
                result.#values[5] = near2 / topBottom;
                result.#values[8] = (left + right) / rightLeft;
                result.#values[9] = (top + bottom) / topBottom;
                result.#values[10] = farPlaneDistance / nearFar;
                result.#values[11] = -1;
                result.#values[14] = (nearPlaneDistance * farPlaneDistance) / nearFar;

                return result;
            })
            .add([Number, Number, Number, Number, Number, Number, Matrix], function (left, right, bottom, top, nearPlaneDistance, farPlaneDistance, result) {
                if (nearPlaneDistance <= 0) {
                    throw new RangeError("nearPlaneDistance 小于或等于 0。");
                }

                if (farPlaneDistance <= 0) {
                    throw new RangeError("farPlaneDistance 小于或等于 0。");
                }

                if (nearPlaneDistance >= farPlaneDistance) {
                    throw new RangeError("nearPlaneDistance 大于或等于 farPlaneDistance。");
                }

                const near2 = 2 * nearPlaneDistance;
                const rightLeft = right - left;
                const topBottom = top - bottom;
                const nearFar = nearPlaneDistance - farPlaneDistance;

                result.#values[0] = near2 / rightLeft;
                result.#values[1] = 0;
                result.#values[2] = 0;
                result.#values[3] = 0;
                result.#values[4] = 0;
                result.#values[5] = near2 / topBottom;
                result.#values[6] = 0;
                result.#values[7] = 0;
                result.#values[8] = (left + right) / rightLeft;
                result.#values[9] = (top + bottom) / topBottom;
                result.#values[10] = farPlaneDistance / nearFar;
                result.#values[11] = -1;
                result.#values[12] = 0;
                result.#values[13] = 0;
                result.#values[14] = (nearPlaneDistance * farPlaneDistance) / nearFar;
                result.#values[15] = 0;
            });

        return Matrix.createPerspectiveOffCenter.apply(this, params);
    }

    /**
     * 创建一个反映指定 Plane 的相关坐标系的 Matrix。
     * @param value 要创建反射的 Plane。
     * @returns 表示反射的新矩阵。
     */
    public static createReflection(value: Plane): Matrix;
    /**
     * 填充现有的 Matrix 以使其反映关于指定 Plane 的坐标系。
     * @param value 要创建反射的 Plane。
     * @param result [OutAttribute] 创建反射的 Matrix。
     */
    public static createReflection(value: Plane, result: Matrix): void;
    public static createReflection(...params: any): any {
        Matrix.createReflection = overload()
            .add([Plane], function (value) {
                const normal = value.normal;
                const x = normal.x;
                const y = normal.y;
                const z = normal.z;
                const d = value.d;

                const lenSq = x * x + y * y + z * z;
                const invLen = 1.0 / Math.sqrt(lenSq);

                const nx = x * invLen;
                const ny = y * invLen;
                const nz = z * invLen;
                const nd = d * invLen;

                const num3 = -2 * nx;
                const num2 = -2 * ny;
                const num = -2 * nz;

                return new Matrix(
                    (num3 * nx) + 1, num2 * nx, num * nx, 0,
                    num3 * ny, (num2 * ny) + 1, num * ny, 0,
                    num3 * nz, num2 * nz, (num * nz) + 1, 0,
                    num3 * nd, num2 * nd, num * nd, 1
                );
            })
            .add([Plane, Matrix], function (value, result) {
                const normal = value.normal;
                const x = normal.x;
                const y = normal.y;
                const z = normal.z;
                const d = value.d;

                const lenSq = x * x + y * y + z * z;
                const invLen = 1.0 / Math.sqrt(lenSq);

                const nx = x * invLen;
                const ny = y * invLen;
                const nz = z * invLen;
                const nd = d * invLen;

                const num3 = -2 * nx;
                const num2 = -2 * ny;
                const num = -2 * nz;

                result.#values[0] = (num3 * nx) + 1;
                result.#values[1] = num2 * nx;
                result.#values[2] = num * nx;
                result.#values[3] = 0;
                result.#values[4] = num3 * ny;
                result.#values[5] = (num2 * ny) + 1;
                result.#values[6] = num * ny;
                result.#values[7] = 0;
                result.#values[8] = num3 * nz;
                result.#values[9] = num2 * nz;
                result.#values[10] = (num * nz) + 1;
                result.#values[11] = 0;
                result.#values[12] = num3 * nd;
                result.#values[13] = num2 * nd;
                result.#values[14] = num * nd;
                result.#values[15] = 1;
            });

        return Matrix.createReflection.apply(this, params);
    }

    /**
     * 返回一个可绕 x 轴旋转一组顶点的矩阵。
     * @param radians 绕 x 轴旋转的程度，以弧度计。请注意，您可以使用 ToRadians 将角度转换为弧度。
     * @returns 旋转矩阵。
     */
    public static createRotationX(radians: number): Matrix;
    /**
     * 将数据填充到一个用户定义的可绕 x 轴旋转一组顶点的矩阵。
     * @param radians 绕 x 轴旋转的程度，以弧度计。请注意，您可以使用 ToRadians 将角度转换为弧度。
     * @param result [OutAttribute] 放置计算数据的矩阵。
     */
    public static createRotationX(radians: number, result: Matrix): void;
    public static createRotationX(...params: any): any {
        Matrix.createRotationX = overload()
            .add([Number], function (radians) {
                const result = Matrix.identity;
                const val1 = Math.cos(radians);
                const val2 = Math.sin(radians);
                result.#values[5] = val1;
                result.#values[6] = val2;
                result.#values[9] = -val2;
                result.#values[10] = val1;
                return result;
            })
            .add([Number, Matrix], function (radians, result) {
                const val1 = Math.cos(radians);
                const val2 = Math.sin(radians);
                result.#values[0] = 1;
                result.#values[1] = 0;
                result.#values[2] = 0;
                result.#values[3] = 0;
                result.#values[4] = 0;
                result.#values[5] = val1;
                result.#values[6] = val2;
                result.#values[7] = 0;
                result.#values[8] = 0;
                result.#values[9] = -val2;
                result.#values[10] = val1;
                result.#values[11] = 0;
                result.#values[12] = 0;
                result.#values[13] = 0;
                result.#values[14] = 0;
                result.#values[15] = 1;
            });

        return Matrix.createRotationX.apply(this, params);
    }

    /**
     * 返回一个可绕 y 轴旋转一组顶点的矩阵。
     * @param radians 绕 y 轴旋转的程度，以弧度计。请注意，您可以使用 ToRadians 将角度转换为弧度。
     * @returns 旋转矩阵。
     */
    public static createRotationY(radians: number): Matrix;
    /**
     * 将数据填充到一个用户定义的可绕 y 轴旋转一组顶点的矩阵。
     * @param radians 绕 y 轴旋转的程度，以弧度计。请注意，您可以使用 ToRadians 将角度转换为弧度。
     * @param result [OutAttribute] 放置计算数据的矩阵。
     */
    public static createRotationY(radians: number, result: Matrix): void;
    public static createRotationY(...params: any): any {
        Matrix.createRotationY = overload()
            .add([Number], function (radians) {
                const result = Matrix.identity;
                const val1 = Math.cos(radians);
                const val2 = Math.sin(radians);
                result.#values[0] = val1;
                result.#values[2] = -val2;
                result.#values[8] = val2;
                result.#values[10] = val1;
                return result;
            })
            .add([Number, Matrix], function (radians, result) {
                const val1 = Math.cos(radians);
                const val2 = Math.sin(radians);
                result.#values[0] = val1;
                result.#values[1] = 0;
                result.#values[2] = -val2;
                result.#values[3] = 0;
                result.#values[4] = 0;
                result.#values[5] = 1;
                result.#values[6] = 0;
                result.#values[7] = 0;
                result.#values[8] = val2;
                result.#values[9] = 0;
                result.#values[10] = val1;
                result.#values[11] = 0;
                result.#values[12] = 0;
                result.#values[13] = 0;
                result.#values[14] = 0;
                result.#values[15] = 1;
            });

        return Matrix.createRotationY.apply(this, params);
    }

    /**
     * 返回一个可绕 z 轴旋转一组顶点的矩阵。
     * @param radians 绕 z 轴旋转的程度，以弧度计。请注意，您可以使用 ToRadians 将角度转换为弧度。
     * @returns 旋转矩阵。
     */
    public static createRotationZ(radians: number): Matrix;
    /**
     * 将数据填充到一个用户定义的可绕 z 轴旋转一组顶点的矩阵。
     * @param radians 绕 z 轴旋转的程度，以弧度计。请注意，您可以使用 ToRadians 将角度转换为弧度。
     * @param result [OutAttribute] 放置计算数据的矩阵。
     */
    public static createRotationZ(radians: number, result: Matrix): void;
    public static createRotationZ(...params: any): any {
        Matrix.createRotationZ = overload()
            .add([Number], function (radians) {
                const result = Matrix.identity;
                const val1 = Math.cos(radians);
                const val2 = Math.sin(radians);
                result.#values[0] = val1;
                result.#values[1] = val2;
                result.#values[4] = -val2;
                result.#values[5] = val1;
                return result;
            })
            .add([Number, Matrix], function (radians, result) {
                const val1 = Math.cos(radians);
                const val2 = Math.sin(radians);
                result.#values[0] = val1;
                result.#values[1] = val2;
                result.#values[2] = 0;
                result.#values[3] = 0;
                result.#values[4] = -val2;
                result.#values[5] = val1;
                result.#values[6] = 0;
                result.#values[7] = 0;
                result.#values[8] = 0;
                result.#values[9] = 0;
                result.#values[10] = 1;
                result.#values[11] = 0;
                result.#values[12] = 0;
                result.#values[13] = 0;
                result.#values[14] = 0;
                result.#values[15] = 1;
            });

        return Matrix.createRotationZ.apply(this, params);
    }

    /**
     * 创建一个缩放 Matrix。
     * @param scale 缩放程度。
     * @returns 缩放矩阵。
     */
    public static createScale(scale: number): Matrix;
    /**
     * 创建一个缩放 Matrix。
     * @param scale 缩放值。
     * @param result [OutAttribute] 创建的缩放 Matrix。
     */
    public static createScale(scale: number, result: Matrix): void;
    /**
     * 创建一个缩放 Matrix。
     * @param xScale x 轴上的缩放值。
     * @param yScale y 轴上的缩放值。
     * @param zScale z 轴上的缩放值。
     * @returns 缩放矩阵。
     */
    public static createScale(xScale: number, yScale: number, zScale: number): Matrix;
    /**
     * 创建一个缩放 Matrix。
     * @param xScale x 轴上的缩放值。
     * @param yScale y 轴上的缩放值。
     * @param zScale z 轴上的缩放值。
     * @param result [OutAttribute] 创建的缩放 Matrix。
     */
    public static createScale(xScale: number, yScale: number, zScale: number, result: Matrix): void;
    /**
     * 创建一个缩放 Matrix。
     * @param scales x、y 和 z 轴上的缩放程度。
     * @returns 缩放矩阵。
     */
    public static createScale(scales: Vector3): Matrix;
    /**
     * 创建一个缩放 Matrix。
     * @param scales x、y 和 z 轴上的缩放程度。
     * @param result [OutAttribute] 创建的缩放 Matrix。
     */
    public static createScale(scales: Vector3, result: Matrix): void;
    public static createScale(...params: any): any {
        Matrix.createScale = overload()
            .add([Number], function (scale) {
                const result = new Matrix();
                result.#values[0] = scale;
                result.#values[5] = scale;
                result.#values[10] = scale;
                result.#values[15] = 1;
                return result;
            })
            .add([Number, Matrix], function (scale, result) {
                result.#values[0] = scale;
                result.#values[1] = 0;
                result.#values[2] = 0;
                result.#values[3] = 0;
                result.#values[4] = 0;
                result.#values[5] = scale;
                result.#values[6] = 0;
                result.#values[7] = 0;
                result.#values[8] = 0;
                result.#values[9] = 0;
                result.#values[10] = scale;
                result.#values[11] = 0;
                result.#values[12] = 0;
                result.#values[13] = 0;
                result.#values[14] = 0;
                result.#values[15] = 1;
            })
            .add([Number, Number, Number], function (xScale, yScale, zScale) {
                const result = new Matrix();
                result.#values[0] = xScale;
                result.#values[5] = yScale;
                result.#values[10] = zScale;
                result.#values[15] = 1;
                return result;
            })
            .add([Number, Number, Number, Matrix], function (xScale, yScale, zScale, result) {
                result.#values[0] = xScale;
                result.#values[1] = 0;
                result.#values[2] = 0;
                result.#values[3] = 0;
                result.#values[4] = 0;
                result.#values[5] = yScale;
                result.#values[6] = 0;
                result.#values[7] = 0;
                result.#values[8] = 0;
                result.#values[9] = 0;
                result.#values[10] = zScale;
                result.#values[11] = 0;
                result.#values[12] = 0;
                result.#values[13] = 0;
                result.#values[14] = 0;
                result.#values[15] = 1;
            })
            .add([Vector3], function (scales) {
                const result = new Matrix();
                result.#values[0] = scales.x;
                result.#values[5] = scales.y;
                result.#values[10] = scales.z;
                result.#values[15] = 1;
                return result;
            })
            .add([Vector3, Matrix], function (scales, result) {
                result.#values[0] = scales.x;
                result.#values[1] = 0;
                result.#values[2] = 0;
                result.#values[3] = 0;
                result.#values[4] = 0;
                result.#values[5] = scales.y;
                result.#values[6] = 0;
                result.#values[7] = 0;
                result.#values[8] = 0;
                result.#values[9] = 0;
                result.#values[10] = scales.z;
                result.#values[11] = 0;
                result.#values[12] = 0;
                result.#values[13] = 0;
                result.#values[14] = 0;
                result.#values[15] = 1;
            });

        return Matrix.createScale.apply(this, params);
    }

    /**
     * 创建一个将几何体展平为指定 Plane 的 Matrix（就像从指定的光源投射阴影）。
     * @param lightDirection 指定投影灯光方向的 Vector3。
     * @param plane 新矩阵为投射阴影而将几何体展平到的 Plane。
     * @returns 可以用于从指定方向将几何图形平展到指定三维平面上的新矩阵。
     */
    public static createShadow(lightDirection: Vector3, plane: Plane): Matrix;
    /**
     * 填充一个将几何体展平为指定 Plane 的 Matrix（就像从指定的光源投射阴影）。
     * @param lightDirection 指定投影灯光方向的 Vector3。
     * @param plane 新矩阵为投射阴影而将几何体展平到的 Plane。
     * @param result [OutAttribute] 可从指定方向将几何体展平到指定平面的 Matrix。
     */
    public static createShadow(lightDirection: Vector3, plane: Plane, result: Matrix): void;
    public static createShadow(...params: any): any {
        Matrix.createShadow = overload()
            .add([Vector3, Plane], function (lightDirection, plane) {
                const ldx = lightDirection.x, ldy = lightDirection.y, ldz = lightDirection.z;
                const planeNormal = plane.normal;
                const dot = Vector3.dot(planeNormal, lightDirection);
                const x = -planeNormal.x, y = -planeNormal.y, z = -planeNormal.z;
                const d = -plane.d;

                const result = new Matrix();
                result.#values[0] = (x * ldx) + dot;
                result.#values[1] = x * ldy;
                result.#values[2] = x * ldz;
                result.#values[3] = 0;
                result.#values[4] = y * ldx;
                result.#values[5] = (y * ldy) + dot;
                result.#values[6] = y * ldz;
                result.#values[7] = 0;
                result.#values[8] = z * ldx;
                result.#values[9] = z * ldy;
                result.#values[10] = (z * ldz) + dot;
                result.#values[11] = 0;
                result.#values[12] = d * ldx;
                result.#values[13] = d * ldy;
                result.#values[14] = d * ldz;
                result.#values[15] = dot;
                return result;
            })
            .add([Vector3, Plane, Matrix], function (lightDirection, plane, result) {
                const ldx = lightDirection.x, ldy = lightDirection.y, ldz = lightDirection.z;
                const planeNormal = plane.normal;
                const dot = Vector3.dot(planeNormal, lightDirection);
                const x = -planeNormal.x, y = -planeNormal.y, z = -planeNormal.z;
                const d = -plane.d;

                result.#values[0] = (x * ldx) + dot;
                result.#values[1] = x * ldy;
                result.#values[2] = x * ldz;
                result.#values[3] = 0;
                result.#values[4] = y * ldx;
                result.#values[5] = (y * ldy) + dot;
                result.#values[6] = y * ldz;
                result.#values[7] = 0;
                result.#values[8] = z * ldx;
                result.#values[9] = z * ldy;
                result.#values[10] = (z * ldz) + dot;
                result.#values[11] = 0;
                result.#values[12] = d * ldx;
                result.#values[13] = d * ldy;
                result.#values[14] = d * ldz;
                result.#values[15] = dot;
            });

        return Matrix.createShadow.apply(this, params);
    }

    /**
     * 创建一个平移 Matrix。
     * @param xPosition x 轴上的平移值。
     * @param yPosition y 轴上的平移值。
     * @param zPosition z 轴上的平移值。
     * @returns 平移矩阵。
     */
    public static createTranslation(
        xPosition: number,
        yPosition: number,
        zPosition: number
    ): Matrix;
    /**
     * 创建一个平移 Matrix。
     * @param xPosition x 轴上的平移值。
     * @param yPosition y 轴上的平移值。
     * @param zPosition z 轴上的平移值。
     * @param result [OutAttribute] 创建的平移 Matrix。
     */
    public static createTranslation(
        xPosition: number,
        yPosition: number,
        zPosition: number,
        result: Matrix
    ): void;
    /**
     * 创建一个平移 Matrix。
     * @param position x、y 和 z 轴上的平移程度。
     * @returns 平移矩阵。
     */
    public static createTranslation(position: Vector3): Matrix;
    /**
     * 创建一个平移 Matrix。
     * @param position x、y 和 z 轴上的平移程度。
     * @param result [OutAttribute] 创建的平移 Matrix。
     */
    public static createTranslation(position: Vector3, result: Matrix): void;
    public static createTranslation(...params: any): any {
        Matrix.createTranslation = overload()
            .add([Number, Number, Number], function (xPosition, yPosition, zPosition) {
                const result = new Matrix();
                result.#values[0] = 1;
                result.#values[5] = 1;
                result.#values[10] = 1;
                result.#values[12] = xPosition;
                result.#values[13] = yPosition;
                result.#values[14] = zPosition;
                result.#values[15] = 1;
                return result;
            })
            .add([Number, Number, Number, Matrix], function (xPosition, yPosition, zPosition, result) {
                result.#values[0] = 1;
                result.#values[1] = 0;
                result.#values[2] = 0;
                result.#values[3] = 0;
                result.#values[4] = 0;
                result.#values[5] = 1;
                result.#values[6] = 0;
                result.#values[7] = 0;
                result.#values[8] = 0;
                result.#values[9] = 0;
                result.#values[10] = 1;
                result.#values[11] = 0;
                result.#values[12] = xPosition;
                result.#values[13] = yPosition;
                result.#values[14] = zPosition;
                result.#values[15] = 1;
            })
            .add([Vector3], function (position) {
                const result = new Matrix();
                result.#values[0] = 1;
                result.#values[5] = 1;
                result.#values[10] = 1;
                result.#values[12] = position.x;
                result.#values[13] = position.y;
                result.#values[14] = position.z;
                result.#values[15] = 1;
                return result;
            })
            .add([Vector3, Matrix], function (position, result) {
                result.#values[0] = 1;
                result.#values[1] = 0;
                result.#values[2] = 0;
                result.#values[3] = 0;
                result.#values[4] = 0;
                result.#values[5] = 1;
                result.#values[6] = 0;
                result.#values[7] = 0;
                result.#values[8] = 0;
                result.#values[9] = 0;
                result.#values[10] = 1;
                result.#values[11] = 0;
                result.#values[12] = position.x;
                result.#values[13] = position.y;
                result.#values[14] = position.z;
                result.#values[15] = 1;
            });

        return Matrix.createTranslation.apply(this, params);
    }

    /**
     * 用指定的参数创建场景矩阵。
     * @param position 对象位置。该值被用于平移操作。
     * @param forward 对象的前方方向。
     * @param up 对象的上方向；通常是 [0, 1, 0]。
     * @returns 场景矩阵。
     */
    public static createWorld(position: Vector3, forward: Vector3, up: Vector3): Matrix;
    /**
     * 用指定的参数创建场景矩阵。
     * @param position 对象位置。该值被用于平移操作。
     * @param forward 对象的前方方向。
     * @param up 对象的上方向；通常是 [0, 1, 0]。
     * @param result [OutAttribute] 创建的场景矩阵。
     */
    public static createWorld(position: Vector3, forward: Vector3, up: Vector3, result: Matrix): void;
    public static createWorld(...params: any): any {
        Matrix.createWorld = overload()
            .add([Vector3, Vector3, Vector3], function (position, forward, up) {
                const x = forward.x;
                const y = forward.y;
                const z = forward.z;
                let len = Math.sqrt(x * x + y * y + z * z);
                const invLen = 1 / len;
                const zx = x * invLen;
                const zy = y * invLen;
                const zz = z * invLen;

                const x_x = zy * up.z - zz * up.y;
                const x_y = zz * up.x - zx * up.z;
                const x_z = zx * up.y - zy * up.x;
                len = Math.sqrt(x_x * x_x + x_y * x_y + x_z * x_z);
                const invLen2 = 1 / len;
                const xx = x_x * invLen2;
                const xy = x_y * invLen2;
                const xz = x_z * invLen2;

                const yx = xy * zz - xz * zy;
                const yy = xz * zx - xx * zz;
                const yz = xx * zy - xy * zx;

                const result = new Matrix();
                result.#values[0] = xx;
                result.#values[1] = xy;
                result.#values[2] = xz;
                result.#values[3] = 0;

                result.#values[4] = yx;
                result.#values[5] = yy;
                result.#values[6] = yz;
                result.#values[7] = 0;

                result.#values[8] = -zx;
                result.#values[9] = -zy;
                result.#values[10] = -zz;
                result.#values[11] = 0;

                result.#values[12] = position.x;
                result.#values[13] = position.y;
                result.#values[14] = position.z;
                result.#values[15] = 1;
                return result;
            })
            .add([Vector3, Vector3, Vector3, Matrix], function (position, forward, up, result) {
                const x = forward.x;
                const y = forward.y;
                const z = forward.z;
                let len = Math.sqrt(x * x + y * y + z * z);
                const invLen = 1 / len;
                const zx = x * invLen;
                const zy = y * invLen;
                const zz = z * invLen;

                const x_x = zy * up.z - zz * up.y;
                const x_y = zz * up.x - zx * up.z;
                const x_z = zx * up.y - zy * up.x;
                len = Math.sqrt(x_x * x_x + x_y * x_y + x_z * x_z);
                const invLen2 = 1 / len;
                const xx = x_x * invLen2;
                const xy = x_y * invLen2;
                const xz = x_z * invLen2;

                const yx = xy * zz - xz * zy;
                const yy = xz * zx - xx * zz;
                const yz = xx * zy - xy * zx;

                result.#values[0] = xx;
                result.#values[1] = xy;
                result.#values[2] = xz;
                result.#values[3] = 0;

                result.#values[4] = yx;
                result.#values[5] = yy;
                result.#values[6] = yz;
                result.#values[7] = 0;

                result.#values[8] = -zx;
                result.#values[9] = -zy;
                result.#values[10] = -zz;
                result.#values[11] = 0;

                result.#values[12] = position.x;
                result.#values[13] = position.y;
                result.#values[14] = position.z;
                result.#values[15] = 1;
            });

        return Matrix.createWorld.apply(this, params);
    }

    /**
     * 用矩阵组件除以标量。
     * @param matrix1 源矩阵。
     * @param divider 除数。
     * @returns 操作后的新矩阵。
     */
    public static divide(matrix1: Matrix, divider: number): Matrix;
    /**
     * 用矩阵组件除以标量。
     * @param matrix1 源矩阵。
     * @param divider 除数。
     * @param result [OutAttribute] 相除结果。
     */
    public static divide(matrix1: Matrix, divider: number, result: Matrix): void;
    /**
     * 用一个矩阵的组件除以另一个矩阵的相应组件。
     * @param matrix1 源矩阵。
     * @param matrix2 除数。
     * @returns 操作后的新矩阵。
     */
    public static divide(matrix1: Matrix, matrix2: Matrix): Matrix;
    /**
     * 用一个矩阵的组件除以另一个矩阵的相应组件。
     * @param matrix1 源矩阵。
     * @param matrix2 除数。
     * @param result [OutAttribute] 相除结果。
     */
    public static divide(matrix1: Matrix, matrix2: Matrix, result: Matrix): void;
    public static divide(...params: any): any {
        Matrix.divide = overload()
            .add([Matrix, Number], function (matrix1, divider) {
                const num = 1 / divider;
                return new Matrix(
                    matrix1.#values[0] * num, matrix1.#values[1] * num, matrix1.#values[2] * num, matrix1.#values[3] * num,
                    matrix1.#values[4] * num, matrix1.#values[5] * num, matrix1.#values[6] * num, matrix1.#values[7] * num,
                    matrix1.#values[8] * num, matrix1.#values[9] * num, matrix1.#values[10] * num, matrix1.#values[11] * num,
                    matrix1.#values[12] * num, matrix1.#values[13] * num, matrix1.#values[14] * num, matrix1.#values[15] * num
                );
            })
            .add([Matrix, Number, Matrix], function (matrix1, divider, result) {
                const num = 1 / divider;
                result.#values[0] = matrix1.#values[0] * num;
                result.#values[1] = matrix1.#values[1] * num;
                result.#values[2] = matrix1.#values[2] * num;
                result.#values[3] = matrix1.#values[3] * num;
                result.#values[4] = matrix1.#values[4] * num;
                result.#values[5] = matrix1.#values[5] * num;
                result.#values[6] = matrix1.#values[6] * num;
                result.#values[7] = matrix1.#values[7] * num;
                result.#values[8] = matrix1.#values[8] * num;
                result.#values[9] = matrix1.#values[9] * num;
                result.#values[10] = matrix1.#values[10] * num;
                result.#values[11] = matrix1.#values[11] * num;
                result.#values[12] = matrix1.#values[12] * num;
                result.#values[13] = matrix1.#values[13] * num;
                result.#values[14] = matrix1.#values[14] * num;
                result.#values[15] = matrix1.#values[15] * num;
            })
            .add([Matrix, Matrix], function (matrix1, matrix2) {
                return new Matrix(
                    matrix1.#values[0] / matrix2.#values[0], matrix1.#values[1] / matrix2.#values[1], matrix1.#values[2] / matrix2.#values[2], matrix1.#values[3] / matrix2.#values[3],
                    matrix1.#values[4] / matrix2.#values[4], matrix1.#values[5] / matrix2.#values[5], matrix1.#values[6] / matrix2.#values[6], matrix1.#values[7] / matrix2.#values[7],
                    matrix1.#values[8] / matrix2.#values[8], matrix1.#values[9] / matrix2.#values[9], matrix1.#values[10] / matrix2.#values[10], matrix1.#values[11] / matrix2.#values[11],
                    matrix1.#values[12] / matrix2.#values[12], matrix1.#values[13] / matrix2.#values[13], matrix1.#values[14] / matrix2.#values[14], matrix1.#values[15] / matrix2.#values[15]
                );
            })
            .add([Matrix, Matrix, Matrix], function (matrix1, matrix2, result) {
                result.#values[0] = matrix1.#values[0] / matrix2.#values[0];
                result.#values[1] = matrix1.#values[1] / matrix2.#values[1];
                result.#values[2] = matrix1.#values[2] / matrix2.#values[2];
                result.#values[3] = matrix1.#values[3] / matrix2.#values[3];
                result.#values[4] = matrix1.#values[4] / matrix2.#values[4];
                result.#values[5] = matrix1.#values[5] / matrix2.#values[5];
                result.#values[6] = matrix1.#values[6] / matrix2.#values[6];
                result.#values[7] = matrix1.#values[7] / matrix2.#values[7];
                result.#values[8] = matrix1.#values[8] / matrix2.#values[8];
                result.#values[9] = matrix1.#values[9] / matrix2.#values[9];
                result.#values[10] = matrix1.#values[10] / matrix2.#values[10];
                result.#values[11] = matrix1.#values[11] / matrix2.#values[11];
                result.#values[12] = matrix1.#values[12] / matrix2.#values[12];
                result.#values[13] = matrix1.#values[13] / matrix2.#values[13];
                result.#values[14] = matrix1.#values[14] / matrix2.#values[14];
                result.#values[15] = matrix1.#values[15] / matrix2.#values[15];
            });

        return Matrix.divide.apply(this, params);
    }

    /**
     * 计算矩阵的逆矩阵。
     * @param matrix 源矩阵。
     * @returns 逆矩阵。
     */
    public static invert(matrix: Matrix): Matrix;
    /**
     * 计算矩阵的逆矩阵。
     * @param matrix 源矩阵。
     * @param result [OutAttribute] matrix 的逆矩阵。同一矩阵可用于两个参数。
     */
    public static invert(matrix: Matrix, result: Matrix): void;
    public static invert(...params: any): any {
        Matrix.invert = overload()
            .add([Matrix], function (matrix) {
                const m11 = matrix.#values[0], m12 = matrix.#values[1], m13 = matrix.#values[2], m14 = matrix.#values[3];
                const m21 = matrix.#values[4], m22 = matrix.#values[5], m23 = matrix.#values[6], m24 = matrix.#values[7];
                const m31 = matrix.#values[8], m32 = matrix.#values[9], m33 = matrix.#values[10], m34 = matrix.#values[11];
                const m41 = matrix.#values[12], m42 = matrix.#values[13], m43 = matrix.#values[14], m44 = matrix.#values[15];

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

                result.#values[0] = cofactor11 * determinant;
                result.#values[4] = cofactor12 * determinant;
                result.#values[8] = cofactor13 * determinant;
                result.#values[12] = cofactor14 * determinant;

                result.#values[1] = -(m12 * minor33_44 - m13 * minor32_44 + m14 * minor32_43) * determinant;
                result.#values[5] = (m11 * minor33_44 - m13 * minor31_44 + m14 * minor31_43) * determinant;
                result.#values[9] = -(m11 * minor32_44 - m12 * minor31_44 + m14 * minor31_42) * determinant;
                result.#values[13] = (m11 * minor32_43 - m12 * minor31_43 + m13 * minor31_42) * determinant;

                const minor23_44 = (m23 * m44 - m24 * m43);
                const minor22_44 = (m22 * m44 - m24 * m42);
                const minor22_43 = (m22 * m43 - m23 * m42);
                const minor21_44 = (m21 * m44 - m24 * m41);
                const minor21_43 = (m21 * m43 - m23 * m41);
                const minor21_42 = (m21 * m42 - m22 * m41);

                result.#values[2] = (m12 * minor23_44 - m13 * minor22_44 + m14 * minor22_43) * determinant;
                result.#values[6] = -(m11 * minor23_44 - m13 * minor21_44 + m14 * minor21_43) * determinant;
                result.#values[10] = (m11 * minor22_44 - m12 * minor21_44 + m14 * minor21_42) * determinant;
                result.#values[14] = -(m11 * minor22_43 - m12 * minor21_43 + m13 * minor21_42) * determinant;

                const minor23_34 = (m23 * m34 - m24 * m33);
                const minor22_34 = (m22 * m34 - m24 * m32);
                const minor22_33 = (m22 * m33 - m23 * m32);
                const minor21_34 = (m21 * m34 - m24 * m31);
                const minor21_33 = (m21 * m33 - m23 * m31);
                const minor21_32 = (m21 * m32 - m22 * m31);

                result.#values[3] = -(m12 * minor23_34 - m13 * minor22_34 + m14 * minor22_33) * determinant;
                result.#values[7] = (m11 * minor23_34 - m13 * minor21_34 + m14 * minor21_33) * determinant;
                result.#values[11] = -(m11 * minor22_34 - m12 * minor21_34 + m14 * minor21_32) * determinant;
                result.#values[15] = (m11 * minor22_33 - m12 * minor21_33 + m13 * minor21_32) * determinant;

                return result;
            })
            .add([Matrix, Matrix], function (matrix, result) {
                const m11 = matrix.#values[0], m12 = matrix.#values[1], m13 = matrix.#values[2], m14 = matrix.#values[3];
                const m21 = matrix.#values[4], m22 = matrix.#values[5], m23 = matrix.#values[6], m24 = matrix.#values[7];
                const m31 = matrix.#values[8], m32 = matrix.#values[9], m33 = matrix.#values[10], m34 = matrix.#values[11];
                const m41 = matrix.#values[12], m42 = matrix.#values[13], m43 = matrix.#values[14], m44 = matrix.#values[15];

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

                result.#values[0] = cofactor11 * determinant;
                result.#values[4] = cofactor12 * determinant;
                result.#values[8] = cofactor13 * determinant;
                result.#values[12] = cofactor14 * determinant;

                result.#values[1] = -(m12 * minor33_44 - m13 * minor32_44 + m14 * minor32_43) * determinant;
                result.#values[5] = (m11 * minor33_44 - m13 * minor31_44 + m14 * minor31_43) * determinant;
                result.#values[9] = -(m11 * minor32_44 - m12 * minor31_44 + m14 * minor31_42) * determinant;
                result.#values[13] = (m11 * minor32_43 - m12 * minor31_43 + m13 * minor31_42) * determinant;

                const minor23_44 = (m23 * m44 - m24 * m43);
                const minor22_44 = (m22 * m44 - m24 * m42);
                const minor22_43 = (m22 * m43 - m23 * m42);
                const minor21_44 = (m21 * m44 - m24 * m41);
                const minor21_43 = (m21 * m43 - m23 * m41);
                const minor21_42 = (m21 * m42 - m22 * m41);

                result.#values[2] = (m12 * minor23_44 - m13 * minor22_44 + m14 * minor22_43) * determinant;
                result.#values[6] = -(m11 * minor23_44 - m13 * minor21_44 + m14 * minor21_43) * determinant;
                result.#values[10] = (m11 * minor22_44 - m12 * minor21_44 + m14 * minor21_42) * determinant;
                result.#values[14] = -(m11 * minor22_43 - m12 * minor21_43 + m13 * minor21_42) * determinant;

                const minor23_34 = (m23 * m34 - m24 * m33);
                const minor22_34 = (m22 * m34 - m24 * m32);
                const minor22_33 = (m22 * m33 - m23 * m32);
                const minor21_34 = (m21 * m34 - m24 * m31);
                const minor21_33 = (m21 * m33 - m23 * m31);
                const minor21_32 = (m21 * m32 - m22 * m31);

                result.#values[3] = -(m12 * minor23_34 - m13 * minor22_34 + m14 * minor22_33) * determinant;
                result.#values[7] = (m11 * minor23_34 - m13 * minor21_34 + m14 * minor21_33) * determinant;
                result.#values[11] = -(m11 * minor22_34 - m12 * minor21_34 + m14 * minor21_32) * determinant;
                result.#values[15] = (m11 * minor22_33 - m12 * minor21_33 + m13 * minor21_32) * determinant;
            });

        return Matrix.invert.apply(this, params);
    }

    /**
     * 在两个矩阵的对应值之间执行线性插值。
     * @param matrix1 源矩阵。
     * @param matrix2 源矩阵。
     * @param amount 插值。
     * @returns 插值结果。
     */
    public static lerp(matrix1: Matrix, matrix2: Matrix, amount: number): Matrix;
    /**
     * 在两个矩阵的对应值之间执行线性插值。
     * @param matrix1 源矩阵。
     * @param matrix2 源矩阵。
     * @param amount 插值。
     * @param result [OutAttribute] 结果矩阵。
     */
    public static lerp(matrix1: Matrix, matrix2: Matrix, amount: number, result: Matrix): void;
    public static lerp(...params: any): any {
        Matrix.lerp = overload()
            .add([Matrix, Matrix, Number], function (matrix1, matrix2, amount) {
                return new Matrix(
                    matrix1.#values[0] + ((matrix2.#values[0] - matrix1.#values[0]) * amount), matrix1.#values[1] + ((matrix2.#values[1] - matrix1.#values[1]) * amount), matrix1.#values[2] + ((matrix2.#values[2] - matrix1.#values[2]) * amount), matrix1.#values[3] + ((matrix2.#values[3] - matrix1.#values[3]) * amount),
                    matrix1.#values[4] + ((matrix2.#values[4] - matrix1.#values[4]) * amount), matrix1.#values[5] + ((matrix2.#values[5] - matrix1.#values[5]) * amount), matrix1.#values[6] + ((matrix2.#values[6] - matrix1.#values[6]) * amount), matrix1.#values[7] + ((matrix2.#values[7] - matrix1.#values[7]) * amount),
                    matrix1.#values[8] + ((matrix2.#values[8] - matrix1.#values[8]) * amount), matrix1.#values[9] + ((matrix2.#values[9] - matrix1.#values[9]) * amount), matrix1.#values[10] + ((matrix2.#values[10] - matrix1.#values[10]) * amount), matrix1.#values[11] + ((matrix2.#values[11] - matrix1.#values[11]) * amount),
                    matrix1.#values[12] + ((matrix2.#values[12] - matrix1.#values[12]) * amount), matrix1.#values[13] + ((matrix2.#values[13] - matrix1.#values[13]) * amount), matrix1.#values[14] + ((matrix2.#values[14] - matrix1.#values[14]) * amount), matrix1.#values[15] + ((matrix2.#values[15] - matrix1.#values[15]) * amount)
                );
            })
            .add([Matrix, Matrix, Number, Matrix], function (matrix1, matrix2, amount, result) {
                result.#values[0] = matrix1.#values[0] + ((matrix2.#values[0] - matrix1.#values[0]) * amount);
                result.#values[1] = matrix1.#values[1] + ((matrix2.#values[1] - matrix1.#values[1]) * amount);
                result.#values[2] = matrix1.#values[2] + ((matrix2.#values[2] - matrix1.#values[2]) * amount);
                result.#values[3] = matrix1.#values[3] + ((matrix2.#values[3] - matrix1.#values[3]) * amount);
                result.#values[4] = matrix1.#values[4] + ((matrix2.#values[4] - matrix1.#values[4]) * amount);
                result.#values[5] = matrix1.#values[5] + ((matrix2.#values[5] - matrix1.#values[5]) * amount);
                result.#values[6] = matrix1.#values[6] + ((matrix2.#values[6] - matrix1.#values[6]) * amount);
                result.#values[7] = matrix1.#values[7] + ((matrix2.#values[7] - matrix1.#values[7]) * amount);
                result.#values[8] = matrix1.#values[8] + ((matrix2.#values[8] - matrix1.#values[8]) * amount);
                result.#values[9] = matrix1.#values[9] + ((matrix2.#values[9] - matrix1.#values[9]) * amount);
                result.#values[10] = matrix1.#values[10] + ((matrix2.#values[10] - matrix1.#values[10]) * amount);
                result.#values[11] = matrix1.#values[11] + ((matrix2.#values[11] - matrix1.#values[11]) * amount);
                result.#values[12] = matrix1.#values[12] + ((matrix2.#values[12] - matrix1.#values[12]) * amount);
                result.#values[13] = matrix1.#values[13] + ((matrix2.#values[13] - matrix1.#values[13]) * amount);
                result.#values[14] = matrix1.#values[14] + ((matrix2.#values[14] - matrix1.#values[14]) * amount);
                result.#values[15] = matrix1.#values[15] + ((matrix2.#values[15] - matrix1.#values[15]) * amount);
            });

        return Matrix.lerp.apply(this, params);
    }

    /**
     * 将一个矩阵乘以一个标量值。
     * @param matrix1 源矩阵。
     * @param scaleFactor 标量值。
     * @returns 缩放后的矩阵。
     */
    public static multiply(matrix1: Matrix, scaleFactor: number): Matrix;
    /**
     * 将一个矩阵乘以一个标量值。
     * @param matrix1 源矩阵。
     * @param scaleFactor 标量值。
     * @param result [OutAttribute] 相乘的结果。
     */
    public static multiply(matrix1: Matrix, scaleFactor: number, result: Matrix): void;
    /**
     * 将一个矩阵乘以另一个矩阵。
     * @param matrix1 源矩阵。
     * @param matrix2 源矩阵。
     * @returns 乘积矩阵。
     */
    public static multiply(matrix1: Matrix, matrix2: Matrix): Matrix;
    /**
     * 将一个矩阵乘以另一个矩阵。
     * @param matrix1 源矩阵。
     * @param matrix2 源矩阵。
     * @param result [OutAttribute] 相乘的结果。
     */
    public static multiply(matrix1: Matrix, matrix2: Matrix, result: Matrix): void;
    public static multiply(...params: any): any {
        Matrix.multiply = overload()
            .add([Matrix, Number], function (matrix1, scaleFactor) {
                return new Matrix(
                    matrix1.#values[0] * scaleFactor, matrix1.#values[1] * scaleFactor, matrix1.#values[2] * scaleFactor, matrix1.#values[3] * scaleFactor,
                    matrix1.#values[4] * scaleFactor, matrix1.#values[5] * scaleFactor, matrix1.#values[6] * scaleFactor, matrix1.#values[7] * scaleFactor,
                    matrix1.#values[8] * scaleFactor, matrix1.#values[9] * scaleFactor, matrix1.#values[10] * scaleFactor, matrix1.#values[11] * scaleFactor,
                    matrix1.#values[12] * scaleFactor, matrix1.#values[13] * scaleFactor, matrix1.#values[14] * scaleFactor, matrix1.#values[15] * scaleFactor
                );
            })
            .add([Matrix, Matrix], function (matrix1, matrix2) {
                const matrix = new Matrix();
                matrix.#values[0] = (((matrix1.#values[0] * matrix2.#values[0]) + (matrix1.#values[1] * matrix2.#values[4])) + (matrix1.#values[2] * matrix2.#values[8])) + (matrix1.#values[3] * matrix2.#values[12]);
                matrix.#values[1] = (((matrix1.#values[0] * matrix2.#values[1]) + (matrix1.#values[1] * matrix2.#values[5])) + (matrix1.#values[2] * matrix2.#values[9])) + (matrix1.#values[3] * matrix2.#values[13]);
                matrix.#values[2] = (((matrix1.#values[0] * matrix2.#values[2]) + (matrix1.#values[1] * matrix2.#values[6])) + (matrix1.#values[2] * matrix2.#values[10])) + (matrix1.#values[3] * matrix2.#values[14]);
                matrix.#values[3] = (((matrix1.#values[0] * matrix2.#values[3]) + (matrix1.#values[1] * matrix2.#values[7])) + (matrix1.#values[2] * matrix2.#values[11])) + (matrix1.#values[3] * matrix2.#values[15]);
                matrix.#values[4] = (((matrix1.#values[4] * matrix2.#values[0]) + (matrix1.#values[5] * matrix2.#values[4])) + (matrix1.#values[6] * matrix2.#values[8])) + (matrix1.#values[7] * matrix2.#values[12]);
                matrix.#values[5] = (((matrix1.#values[4] * matrix2.#values[1]) + (matrix1.#values[5] * matrix2.#values[5])) + (matrix1.#values[6] * matrix2.#values[9])) + (matrix1.#values[7] * matrix2.#values[13]);
                matrix.#values[6] = (((matrix1.#values[4] * matrix2.#values[2]) + (matrix1.#values[5] * matrix2.#values[6])) + (matrix1.#values[6] * matrix2.#values[10])) + (matrix1.#values[7] * matrix2.#values[14]);
                matrix.#values[7] = (((matrix1.#values[4] * matrix2.#values[3]) + (matrix1.#values[5] * matrix2.#values[7])) + (matrix1.#values[6] * matrix2.#values[11])) + (matrix1.#values[7] * matrix2.#values[15]);
                matrix.#values[8] = (((matrix1.#values[8] * matrix2.#values[0]) + (matrix1.#values[9] * matrix2.#values[4])) + (matrix1.#values[10] * matrix2.#values[8])) + (matrix1.#values[11] * matrix2.#values[12]);
                matrix.#values[9] = (((matrix1.#values[8] * matrix2.#values[1]) + (matrix1.#values[9] * matrix2.#values[5])) + (matrix1.#values[10] * matrix2.#values[9])) + (matrix1.#values[11] * matrix2.#values[13]);
                matrix.#values[10] = (((matrix1.#values[8] * matrix2.#values[2]) + (matrix1.#values[9] * matrix2.#values[6])) + (matrix1.#values[10] * matrix2.#values[10])) + (matrix1.#values[11] * matrix2.#values[14]);
                matrix.#values[11] = (((matrix1.#values[8] * matrix2.#values[3]) + (matrix1.#values[9] * matrix2.#values[7])) + (matrix1.#values[10] * matrix2.#values[11])) + (matrix1.#values[11] * matrix2.#values[15]);
                matrix.#values[12] = (((matrix1.#values[12] * matrix2.#values[0]) + (matrix1.#values[13] * matrix2.#values[4])) + (matrix1.#values[14] * matrix2.#values[8])) + (matrix1.#values[15] * matrix2.#values[12]);
                matrix.#values[13] = (((matrix1.#values[12] * matrix2.#values[1]) + (matrix1.#values[13] * matrix2.#values[5])) + (matrix1.#values[14] * matrix2.#values[9])) + (matrix1.#values[15] * matrix2.#values[13]);
                matrix.#values[14] = (((matrix1.#values[12] * matrix2.#values[2]) + (matrix1.#values[13] * matrix2.#values[6])) + (matrix1.#values[14] * matrix2.#values[10])) + (matrix1.#values[15] * matrix2.#values[14]);
                matrix.#values[15] = (((matrix1.#values[12] * matrix2.#values[3]) + (matrix1.#values[13] * matrix2.#values[7])) + (matrix1.#values[14] * matrix2.#values[11])) + (matrix1.#values[15] * matrix2.#values[15]);
                return matrix;
            })
            .add([Matrix, Number, Matrix], function (matrix1, scaleFactor, result) {
                result.#values[0] = matrix1.#values[0] * scaleFactor;
                result.#values[1] = matrix1.#values[1] * scaleFactor;
                result.#values[2] = matrix1.#values[2] * scaleFactor;
                result.#values[3] = matrix1.#values[3] * scaleFactor;
                result.#values[4] = matrix1.#values[4] * scaleFactor;
                result.#values[5] = matrix1.#values[5] * scaleFactor;
                result.#values[6] = matrix1.#values[6] * scaleFactor;
                result.#values[7] = matrix1.#values[7] * scaleFactor;
                result.#values[8] = matrix1.#values[8] * scaleFactor;
                result.#values[9] = matrix1.#values[9] * scaleFactor;
                result.#values[10] = matrix1.#values[10] * scaleFactor;
                result.#values[11] = matrix1.#values[11] * scaleFactor;
                result.#values[12] = matrix1.#values[12] * scaleFactor;
                result.#values[13] = matrix1.#values[13] * scaleFactor;
                result.#values[14] = matrix1.#values[14] * scaleFactor;
                result.#values[15] = matrix1.#values[15] * scaleFactor;
            })
            .add([Matrix, Matrix, Matrix], function (matrix1, matrix2, result) {
                result.#values[0] = (((matrix1.#values[0] * matrix2.#values[0]) + (matrix1.#values[1] * matrix2.#values[4])) + (matrix1.#values[2] * matrix2.#values[8])) + (matrix1.#values[3] * matrix2.#values[12]);
                result.#values[1] = (((matrix1.#values[0] * matrix2.#values[1]) + (matrix1.#values[1] * matrix2.#values[5])) + (matrix1.#values[2] * matrix2.#values[9])) + (matrix1.#values[3] * matrix2.#values[13]);
                result.#values[2] = (((matrix1.#values[0] * matrix2.#values[2]) + (matrix1.#values[1] * matrix2.#values[6])) + (matrix1.#values[2] * matrix2.#values[10])) + (matrix1.#values[3] * matrix2.#values[14]);
                result.#values[3] = (((matrix1.#values[0] * matrix2.#values[3]) + (matrix1.#values[1] * matrix2.#values[7])) + (matrix1.#values[2] * matrix2.#values[11])) + (matrix1.#values[3] * matrix2.#values[15]);
                result.#values[4] = (((matrix1.#values[4] * matrix2.#values[0]) + (matrix1.#values[5] * matrix2.#values[4])) + (matrix1.#values[6] * matrix2.#values[8])) + (matrix1.#values[7] * matrix2.#values[12]);
                result.#values[5] = (((matrix1.#values[4] * matrix2.#values[1]) + (matrix1.#values[5] * matrix2.#values[5])) + (matrix1.#values[6] * matrix2.#values[9])) + (matrix1.#values[7] * matrix2.#values[13]);
                result.#values[6] = (((matrix1.#values[4] * matrix2.#values[2]) + (matrix1.#values[5] * matrix2.#values[6])) + (matrix1.#values[6] * matrix2.#values[10])) + (matrix1.#values[7] * matrix2.#values[14]);
                result.#values[7] = (((matrix1.#values[4] * matrix2.#values[3]) + (matrix1.#values[5] * matrix2.#values[7])) + (matrix1.#values[6] * matrix2.#values[11])) + (matrix1.#values[7] * matrix2.#values[15]);
                result.#values[8] = (((matrix1.#values[8] * matrix2.#values[0]) + (matrix1.#values[9] * matrix2.#values[4])) + (matrix1.#values[10] * matrix2.#values[8])) + (matrix1.#values[11] * matrix2.#values[12]);
                result.#values[9] = (((matrix1.#values[8] * matrix2.#values[1]) + (matrix1.#values[9] * matrix2.#values[5])) + (matrix1.#values[10] * matrix2.#values[9])) + (matrix1.#values[11] * matrix2.#values[13]);
                result.#values[10] = (((matrix1.#values[8] * matrix2.#values[2]) + (matrix1.#values[9] * matrix2.#values[6])) + (matrix1.#values[10] * matrix2.#values[10])) + (matrix1.#values[11] * matrix2.#values[14]);
                result.#values[11] = (((matrix1.#values[8] * matrix2.#values[3]) + (matrix1.#values[9] * matrix2.#values[7])) + (matrix1.#values[10] * matrix2.#values[11])) + (matrix1.#values[11] * matrix2.#values[15]);
                result.#values[12] = (((matrix1.#values[12] * matrix2.#values[0]) + (matrix1.#values[13] * matrix2.#values[4])) + (matrix1.#values[14] * matrix2.#values[8])) + (matrix1.#values[15] * matrix2.#values[12]);
                result.#values[13] = (((matrix1.#values[12] * matrix2.#values[1]) + (matrix1.#values[13] * matrix2.#values[5])) + (matrix1.#values[14] * matrix2.#values[9])) + (matrix1.#values[15] * matrix2.#values[13]);
                result.#values[14] = (((matrix1.#values[12] * matrix2.#values[2]) + (matrix1.#values[13] * matrix2.#values[6])) + (matrix1.#values[14] * matrix2.#values[10])) + (matrix1.#values[15] * matrix2.#values[14]);
                result.#values[15] = (((matrix1.#values[12] * matrix2.#values[3]) + (matrix1.#values[13] * matrix2.#values[7])) + (matrix1.#values[14] * matrix2.#values[11])) + (matrix1.#values[15] * matrix2.#values[15]);
            });

        return Matrix.multiply.apply(this, params);
    }

    /**
     * 对矩阵的单个元素求反。
     * @param matrix 源矩阵。
     * @returns 求反后的矩阵。
     */
    public static negate(matrix: Matrix): Matrix;
    /**
     * 对矩阵的单个元素求反。
     * @param matrix 源矩阵。
     * @param result [OutAttribute] 求反的矩阵。
     */
    public static negate(matrix: Matrix, result: Matrix): void;
    public static negate(...params: any): any {
        Matrix.negate = overload()
            .add([Matrix], function (matrix) {
                return new Matrix(
                    -matrix.#values[0], -matrix.#values[1], -matrix.#values[2], -matrix.#values[3],
                    -matrix.#values[4], -matrix.#values[5], -matrix.#values[6], -matrix.#values[7],
                    -matrix.#values[8], -matrix.#values[9], -matrix.#values[10], -matrix.#values[11],
                    -matrix.#values[12], -matrix.#values[13], -matrix.#values[14], -matrix.#values[15]
                );
            })
            .add([Matrix, Matrix], function (matrix, result) {
                result.#values[0] = -matrix.#values[0];
                result.#values[1] = -matrix.#values[1];
                result.#values[2] = -matrix.#values[2];
                result.#values[3] = -matrix.#values[3];
                result.#values[4] = -matrix.#values[4];
                result.#values[5] = -matrix.#values[5];
                result.#values[6] = -matrix.#values[6];
                result.#values[7] = -matrix.#values[7];
                result.#values[8] = -matrix.#values[8];
                result.#values[9] = -matrix.#values[9];
                result.#values[10] = -matrix.#values[10];
                result.#values[11] = -matrix.#values[11];
                result.#values[12] = -matrix.#values[12];
                result.#values[13] = -matrix.#values[13];
                result.#values[14] = -matrix.#values[14];
                result.#values[15] = -matrix.#values[15];
            });

        return Matrix.negate.apply(this, params);
    }

    /**
     * 减去矩阵。
     * @param matrix1 源矩阵。
     * @param matrix2 源矩阵。
     * @returns 包含从矩阵1中的每个元素中减去矩阵2中的对应元素得到的值的矩阵。
     */
    public static subtract(matrix1: Matrix, matrix2: Matrix): Matrix;
    /**
     * 减去矩阵。
     * @param matrix1 源矩阵。
     * @param matrix2 源矩阵。
     * @param result [OutAttribute] 相减结果。
     */
    public static subtract(matrix1: Matrix, matrix2: Matrix, result: Matrix): void;
    public static subtract(...params: any): any {
        Matrix.subtract = overload()
            .add([Matrix, Matrix], function (matrix1, matrix2) {
                return new Matrix(
                    matrix1.#values[0] - matrix2.#values[0], matrix1.#values[1] - matrix2.#values[1], matrix1.#values[2] - matrix2.#values[2], matrix1.#values[3] - matrix2.#values[3],
                    matrix1.#values[4] - matrix2.#values[4], matrix1.#values[5] - matrix2.#values[5], matrix1.#values[6] - matrix2.#values[6], matrix1.#values[7] - matrix2.#values[7],
                    matrix1.#values[8] - matrix2.#values[8], matrix1.#values[9] - matrix2.#values[9], matrix1.#values[10] - matrix2.#values[10], matrix1.#values[11] - matrix2.#values[11],
                    matrix1.#values[12] - matrix2.#values[12], matrix1.#values[13] - matrix2.#values[13], matrix1.#values[14] - matrix2.#values[14], matrix1.#values[15] - matrix2.#values[15]
                );
            })
            .add([Matrix, Matrix, Matrix], function (matrix1, matrix2, result) {
                result.#values[0] = matrix1.#values[0] - matrix2.#values[0];
                result.#values[1] = matrix1.#values[1] - matrix2.#values[1];
                result.#values[2] = matrix1.#values[2] - matrix2.#values[2];
                result.#values[3] = matrix1.#values[3] - matrix2.#values[3];
                result.#values[4] = matrix1.#values[4] - matrix2.#values[4];
                result.#values[5] = matrix1.#values[5] - matrix2.#values[5];
                result.#values[6] = matrix1.#values[6] - matrix2.#values[6];
                result.#values[7] = matrix1.#values[7] - matrix2.#values[7];
                result.#values[8] = matrix1.#values[8] - matrix2.#values[8];
                result.#values[9] = matrix1.#values[9] - matrix2.#values[9];
                result.#values[10] = matrix1.#values[10] - matrix2.#values[10];
                result.#values[11] = matrix1.#values[11] - matrix2.#values[11];
                result.#values[12] = matrix1.#values[12] - matrix2.#values[12];
                result.#values[13] = matrix1.#values[13] - matrix2.#values[13];
                result.#values[14] = matrix1.#values[14] - matrix2.#values[14];
                result.#values[15] = matrix1.#values[15] - matrix2.#values[15];
            });

        return Matrix.subtract.apply(this, params);
    }

    /**
     * 通过应用 Quaternion 旋转变换 Matrix。
     * @param value 要变换的 Matrix。
     * @param rotation 要应用的旋转,表达为 Quaternion。
     * @returns 变换后的矩阵。
     */
    public static transform(value: Matrix, rotation: Quaternion): Matrix;
    /**
     * 通过应用 Quaternion 旋转变换 Matrix。
     * @param value 要变换的 Matrix。
     * @param rotation 要应用的旋转,表达为 Quaternion。
     * @param result [OutAttribute] 使用变换结果进行填充的现有 Matrix。
     */
    public static transform(value: Matrix, rotation: Quaternion, result: Matrix): void;
    public static transform(...params: any): any {
        Matrix.transform = overload()
            .add([Matrix, Quaternion], function (value, rotation) {
                const x = rotation.x, y = rotation.y, z = rotation.z, w = rotation.w;
                const m11 = value.#values[0], m12 = value.#values[1], m13 = value.#values[2], m14 = value.#values[3];
                const m21 = value.#values[4], m22 = value.#values[5], m23 = value.#values[6], m24 = value.#values[7];
                const m31 = value.#values[8], m32 = value.#values[9], m33 = value.#values[10], m34 = value.#values[11];
                const m41 = value.#values[12], m42 = value.#values[13], m43 = value.#values[14], m44 = value.#values[15];

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
            })
            .add([Matrix, Quaternion, Matrix], function (value, rotation, result) {
                const x = rotation.x, y = rotation.y, z = rotation.z, w = rotation.w;
                const m11 = value.#values[0], m12 = value.#values[1], m13 = value.#values[2], m14 = value.#values[3];
                const m21 = value.#values[4], m22 = value.#values[5], m23 = value.#values[6], m24 = value.#values[7];
                const m31 = value.#values[8], m32 = value.#values[9], m33 = value.#values[10], m34 = value.#values[11];
                const m41 = value.#values[12], m42 = value.#values[13], m43 = value.#values[14], m44 = value.#values[15];

                const x2 = x + x, y2 = y + y, z2 = z + z;
                const wx2 = w * x2, wy2 = w * y2, wz2 = w * z2;
                const xx2 = x * x2, xy2 = x * y2, xz2 = x * z2;
                const yy2 = y * y2, yz2 = y * z2, zz2 = z * z2;

                const q11 = 1.0 - yy2 - zz2, q21 = xy2 - wz2, q31 = xz2 + wy2;
                const q12 = xy2 + wz2, q22 = 1.0 - xx2 - zz2, q32 = yz2 - wx2;
                const q13 = xz2 - wy2, q23 = yz2 + wx2, q33 = 1.0 - xx2 - yy2;

                result.#values[0] = m11 * q11 + m12 * q21 + m13 * q31;
                result.#values[1] = m11 * q12 + m12 * q22 + m13 * q32;
                result.#values[2] = m11 * q13 + m12 * q23 + m13 * q33;
                result.#values[3] = m14;
                result.#values[4] = m21 * q11 + m22 * q21 + m23 * q31;
                result.#values[5] = m21 * q12 + m22 * q22 + m23 * q32;
                result.#values[6] = m21 * q13 + m22 * q23 + m23 * q33;
                result.#values[7] = m24;
                result.#values[8] = m31 * q11 + m32 * q21 + m33 * q31;
                result.#values[9] = m31 * q12 + m32 * q22 + m33 * q32;
                result.#values[10] = m31 * q13 + m32 * q23 + m33 * q33;
                result.#values[11] = m34;
                result.#values[12] = m41 * q11 + m42 * q21 + m43 * q31;
                result.#values[13] = m41 * q12 + m42 * q22 + m43 * q32;
                result.#values[14] = m41 * q13 + m42 * q23 + m43 * q33;
                result.#values[15] = m44;
            });

        return Matrix.transform.apply(this, params);
    }

    /**
     * 转置矩阵的行和列。
     * @param matrix 源矩阵。
     * @returns 转置矩阵。
     */
    public static transpose(matrix: Matrix): Matrix;
    /**
     * 转置矩阵的行和列。
     * @param matrix 源矩阵。
     * @param result [OutAttribute] 转置的矩阵。
     */
    public static transpose(matrix: Matrix, result: Matrix): void;
    public static transpose(...params: any): any {
        Matrix.transpose = overload()
            .add([Matrix], function (matrix) {
                return new Matrix(
                    matrix.#values[0], matrix.#values[4], matrix.#values[8], matrix.#values[12],
                    matrix.#values[1], matrix.#values[5], matrix.#values[9], matrix.#values[13],
                    matrix.#values[2], matrix.#values[6], matrix.#values[10], matrix.#values[14],
                    matrix.#values[3], matrix.#values[7], matrix.#values[11], matrix.#values[15]
                );
            })
            .add([Matrix, Matrix], function (matrix, result) {
                result.#values[0] = matrix.#values[0];
                result.#values[1] = matrix.#values[4];
                result.#values[2] = matrix.#values[8];
                result.#values[3] = matrix.#values[12];
                result.#values[4] = matrix.#values[1];
                result.#values[5] = matrix.#values[5];
                result.#values[6] = matrix.#values[9];
                result.#values[7] = matrix.#values[13];
                result.#values[8] = matrix.#values[2];
                result.#values[9] = matrix.#values[6];
                result.#values[10] = matrix.#values[10];
                result.#values[11] = matrix.#values[14];
                result.#values[12] = matrix.#values[3];
                result.#values[13] = matrix.#values[7];
                result.#values[14] = matrix.#values[11];
                result.#values[15] = matrix.#values[15];
            });

        return Matrix.transpose.apply(this, params);
    }

    /**
     * 对矩阵的单个元素求反。
     * @param matrix 源矩阵。
     * @returns 求反后的矩阵。
     */
    public static ["-"](matrix: Matrix): Matrix;
    public static ["-"](...params: any): any {
        return Matrix.negate.apply(this, params);
    }

    /**
     * 将当前 Matrix 与另一个 Matrix 相加。
     * @param other 要添加到当前 Matrix 的 Matrix。
     * @returns 包含两个矩阵总和的矩阵。
     */
    public ["+"](other: Matrix): Matrix;
    public ["+"](...params: any): any {
        return Matrix.add.apply(this, params);
    }

    /**
     * 将当前 Matrix 与另一个 Matrix 相减。
     * @param other 要从当前 Matrix 中减去的 Matrix。
     * @returns 包含两个矩阵差值的矩阵。
     */
    public ["-"](other: Matrix): Matrix;
    public ["-"](...params: any): any {
        return Matrix.subtract.apply(this, params);
    }

    /**
     * 将当前 Matrix 与另一个 Matrix 相乘。
     * @param other 要与当前 Matrix 相乘的 Matrix。
     * @returns 两个矩阵的乘积。
     */
    public ["*"](other: Matrix): Matrix;
    public ["*"](...params: any): any {
        return Matrix.multiply.apply(this, params);
    }

    /**
     * 将当前 Matrix 与另一个 Matrix 相除。
     * @param other 要被当前 Matrix 除的 Matrix。
     * @returns 两个矩阵的商。
     */
    public ["/"](other: Matrix): Matrix;
    public ["/"](...params: any): any {
        return Matrix.divide.apply(this, params);
    }

    /**
     * 确定指定的 Matrix 是否等于当前 Matrix。
     * @param other 用于与当前 Matrix 比较的 Matrix。
     * @returns 是否相等。
     */
    public ["=="](other: Matrix): boolean;
    public ["=="](...params: any): any {
        return this.equals.apply(this, params);
    }

    /**
     * 确定指定的 Matrix 是否不等于当前 Matrix。
     * @param other 用于与当前 Matrix 比较的 Matrix。
     * @returns 是否不相等。
     */
    public ["!="](other: Matrix): boolean;
    public ["!="](...params: any): any {
        return !this.equals.apply(this, params);
    }

    /**
     * 从 3D 缩放/旋转/平移 (SRT) Matrix 中提取标量、平移和旋转组件。
     * @param scale [OutAttribute] 转换矩阵的标量组件，表达为 Vector3。
     * @param rotation [OutAttribute] 转换矩阵的旋转组件，表达为 Quaternion。
     * @param translation [OutAttribute] 转换矩阵的平移组件，表达为 Vector3。
     * @returns 是否可以被分解。
     */
    public decompose(
        scale: Vector3,
        rotation: Quaternion,
        translation: Vector3
    ): boolean;
    public decompose(...params: any): any {
        Matrix.prototype.decompose = overload()
            .add([Vector3, Quaternion, Vector3], function (this: Matrix, scale, rotation, translation) {
                const m11 = this.#values[0], m12 = this.#values[1], m13 = this.#values[2], m14 = this.#values[3];
                const m21 = this.#values[4], m22 = this.#values[5], m23 = this.#values[6], m24 = this.#values[7];
                const m31 = this.#values[8], m32 = this.#values[9], m33 = this.#values[10], m34 = this.#values[11];
                const m41 = this.#values[12], m42 = this.#values[13], m43 = this.#values[14];

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

                const q = Quaternion.createFromRotationMatrix(new Matrix(
                    m11 / scale.x, m12 / scale.x, m13 / scale.x, 0,
                    m21 / scale.y, m22 / scale.y, m23 / scale.y, 0,
                    m31 / scale.z, m32 / scale.z, m33 / scale.z, 0,
                    0, 0, 0, 1
                ));

                rotation.x = q.x;
                rotation.y = q.y;
                rotation.z = q.z;
                rotation.w = q.w;
                return true;
            });

        return Matrix.prototype.decompose.apply(this, params);
    }

    /**
     * 计算矩阵的决定因子。
     * @returns 矩阵的行列式。
     */
    public determinant(): number;
    public determinant(...params: any): any {
        Matrix.prototype.determinant = overload([], function (this: Matrix) {
            const m11 = this.#values[0], m12 = this.#values[1], m13 = this.#values[2], m14 = this.#values[3];
            const m21 = this.#values[4], m22 = this.#values[5], m23 = this.#values[6], m24 = this.#values[7];
            const m31 = this.#values[8], m32 = this.#values[9], m33 = this.#values[10], m34 = this.#values[11];
            const m41 = this.#values[12], m42 = this.#values[13], m43 = this.#values[14], m44 = this.#values[15];

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

    /**
     * 确定指定的 Object 是否等于 Matrix。
     * @param other 用于与当前 Matrix 比较的 Object。
     * @returns 是否相等。
     */
    public equals(other: Matrix): boolean;
    public equals(...params: any): any {
        Matrix.prototype.equals = overload([Matrix], function (this: Matrix, other) {
            return (this.#values[0] === other.#values[0]) &&
                (this.#values[5] === other.#values[5]) &&
                (this.#values[10] === other.#values[10]) &&
                (this.#values[15] === other.#values[15]) &&
                (this.#values[1] === other.#values[1]) &&
                (this.#values[2] === other.#values[2]) &&
                (this.#values[3] === other.#values[3]) &&
                (this.#values[4] === other.#values[4]) &&
                (this.#values[6] === other.#values[6]) &&
                (this.#values[7] === other.#values[7]) &&
                (this.#values[8] === other.#values[8]) &&
                (this.#values[9] === other.#values[9]) &&
                (this.#values[11] === other.#values[11]) &&
                (this.#values[12] === other.#values[12]) &&
                (this.#values[13] === other.#values[13]) &&
                (this.#values[14] === other.#values[14])
        }).any(() => false);

        return Matrix.prototype.equals.apply(this, params);
    }

    /**
     * 检索当前对象的字符串呈现。
     * @returns 当前对象的字符串呈现。
     */
    public toString(): string;
    public toString(...params: any): any {
        Matrix.prototype.toString = overload([], function (this: Matrix) {
            return JSON.stringify(this);
        });

        return Matrix.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 Matrix 的 JSON 表示形式。
     * @returns 当前 Matrix 的 JSON 表示形式。
     */
    public toJSON(): object {
        return {
            m11: this.#values[0], m12: this.#values[1], m13: this.#values[2], m14: this.#values[3],
            m21: this.#values[4], m22: this.#values[5], m23: this.#values[6], m24: this.#values[7],
            m31: this.#values[8], m32: this.#values[9], m33: this.#values[10], m34: this.#values[11],
            m41: this.#values[12], m42: this.#values[13], m43: this.#values[14], m44: this.#values[15]
        };
    }
}
