import List from "@jyostudio/list";
import overload from "@jyostudio/overload";
import { checkSetterType } from "@jyostudio/overload/dist/decorator";
import MathHelper from "./math-helper";
import Matrix from "./matrix";
import Quaternion from "./quaternion";
import Vector2 from "./vector2";
import Vector3 from "./vector3";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 定义具有四个组件的矢量。
 * @class
 */
export default class Vector4 {
    /**
     * 返回所有组件均设置为一的 Vector4。
     */
    public static get one(): Vector4 {
        return new Vector4(1, 1, 1, 1);
    }

    /**
     * 返回 Vector4 (0, 0, 0, 1)。
     */
    public static get unitW(): Vector4 {
        return new Vector4(0, 0, 0, 1);
    }

    /**
     * 返回 Vector4 (1, 0, 0, 0)。
     */
    public static get unitX(): Vector4 {
        return new Vector4(1, 0, 0, 0);
    }

    /**
     * 返回 Vector4 (0, 1, 0, 0)。
     */
    public static get unitY(): Vector4 {
        return new Vector4(0, 1, 0, 0);
    }

    /**
     * 返回 Vector4 (0, 0, 1, 0)。
     */
    public static get unitZ(): Vector4 {
        return new Vector4(0, 0, 1, 0);
    }

    /**
     * 返回所有组件均设置为零的 Vector4。
     */
    public static get zero(): Vector4 {
        return new Vector4(0, 0, 0, 0);
    }

    /**
     * 矢量的 x 色差。
     */
    #x = 0;

    /**
     * 获取矢量的 x 色差。
     */
    public get x(): number {
        return this.#x;
    }

    /**
     * 设置矢量的 x 色差。
     */
    @checkSetterType(Number)
    public set x(value: number) {
        this.#x = value;
    }

    /**
     * 矢量的 y 色差。
     */
    #y = 0;

    /**
     * 获取矢量的 y 色差。
     */
    public get y(): number {
        return this.#y;
    }

    /**
     * 设置矢量的 y 色差。
     */
    @checkSetterType(Number)
    public set y(value: number) {
        this.#y = value;
    }

    /**
     * 矢量的 z 色差。
     */
    #z = 0;

    /**
     * 获取矢量的 z 色差。
     */
    public get z(): number {
        return this.#z;
    }

    /**
     * 设置矢量的 z 色差。
     */
    @checkSetterType(Number)
    public set z(value: number) {
        this.#z = value;
    }

    /**
     * 矢量的 w 色差。
     */
    #w = 0;

    /**
     * 获取矢量的 w 色差。
     */
    public get w(): number {
        return this.#w;
    }

    /**
     * 设置矢量的 w 色差。
     */
    @checkSetterType(Number)
    public set w(value: number) {
        this.#w = value;
    }

    /**
     * 新建一个空的 Vector4 实例。
     */
    constructor();
    /**
     * 新建 Vector4 实例。
     * @param value 每个色差的初始化值。
     */
    constructor(value: number);
    /**
     * 初始化新的 Vector4 实例。
     * @param x 矢量 x 色差的初始值。
     * @param y 矢量 y 色差的初始值。
     * @param z 矢量 z 色差的初始值。
     * @param w 矢量 w 色差的初始值。
     */
    constructor(x: number, y: number, z: number, w: number);
    /**
     * 初始化新的 Vector4 实例。
     * @param value 包含 x 和 y 色差的初始化值的矢量。
     * @param z 矢量 z 色差的初始值。
     * @param w 矢量 w 色差的初始值。
     */
    constructor(value: Vector2, z: number, w: number);
    /**
     * 初始化新的 Vector4 实例。
     * @param value 包含 x、y 和 z 色差的初始化值的矢量。
     * @param w 矢量 w 色差的初始值。
     */
    constructor(value: Vector3, w: number);
    constructor(...params: any) {
        Vector4[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    /**
     * 结构化构造函数。
     * @returns Vector4 实例。
     */
    public static ["##STRUCT_CONSTRUCTOR##"](): Vector4 {
        return Vector4.zero;
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        Vector4[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number], function (this: Vector4, value) {
                this.#x = value;
                this.#y = value;
                this.#z = value;
                this.#w = value;
            })
            .add([Number, Number, Number, Number], function (this: Vector4, x, y, z, w) {
                this.#x = x;
                this.#y = y;
                this.#z = z;
                this.#w = w;
            })
            .add([Vector2, Number, Number], function (this: Vector4, value, z, w) {
                this.#x = value.x;
                this.#y = value.y;
                this.#z = z;
                this.#w = w;
            })
            .add([Vector3, Number], function (this: Vector4, value, w) {
                this.#x = value.x;
                this.#y = value.y;
                this.#z = value.z;
                this.#w = w;
            });

        return Vector4[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    public *[Symbol.iterator](): IterableIterator<number> {
        yield this.#x;
        yield this.#y;
        yield this.#z;
        yield this.#w;
    }

    /**
     * 将两个矢量相加。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 相加后的矢量。
     */
    public static add(value1: Vector4, value2: Vector4): Vector4;
    /**
     * 将两个矢量相加。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 源矢量之和。
     */
    public static add(value1: Vector4, value2: Vector4, result: Vector4): void;
    public static add(...params: any): any {
        Vector4.add = overload()
            .add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    value1.#x + value2.#x,
                    value1.#y + value2.#y,
                    value1.#z + value2.#z,
                    value1.#w + value2.#w
                );
            })
            .add([Vector4, Vector4, Vector4], function (value1, value2, result) {
                result.#x = value1.#x + value2.#x;
                result.#y = value1.#y + value2.#y;
                result.#z = value1.#z + value2.#z;
                result.#w = value1.#w + value2.#w;
            });

        return Vector4.add.apply(this, params);
    }

    /**
     * 返回一个相对于 4D 三角形的质心（重心）坐标中某指定点的 4D Cartesian 坐标所在的 Vector4。
     * @param value1 包含三角形顶点 1 的 4D Cartesian 坐标的 Vector4。
     * @param value2 包含三角形顶点 2 的 4D Cartesian 坐标的 Vector4。
     * @param value3 包含三角形顶点 3 的 4D Cartesian 坐标的 Vector4。
     * @param amount1 质心坐标 b2，用于表达趋向顶点 2 的权重因子（在 value2 中指定）。
     * @param amount2 质心坐标 b3，用于表达趋向顶点 3 的权重因子（在 value3 中指定）。
     * @returns 相对于 4D 三角形的质心（重心）坐标中某指定点的 4D Cartesian 坐标所在的 Vector4。
     */
    public static barycentric(
        value1: Vector4,
        value2: Vector4,
        value3: Vector4,
        amount1: number,
        amount2: number
    ): Vector4;
    /**
     * 返回一个相对于 4D 三角形的质心（重心）坐标中某指定点的 4D Cartesian 坐标所在的 Vector4。
     * @param value1 包含三角形顶点 1 的 4D Cartesian 坐标的 Vector4。
     * @param value2 包含三角形顶点 2 的 4D Cartesian 坐标的 Vector4。
     * @param value3 包含三角形顶点 3 的 4D Cartesian 坐标的 Vector4。
     * @param amount1 质心坐标 b2，用于表达趋向顶点 2 的权重因子（在 value2 中指定）。
     * @param amount2 质心坐标 b3，用于表达趋向顶点 3 的权重因子（在 value3 中指定）。
     * @param result [OutAttribute] 在退出时，指定点的 4D Cartesian 坐标放置在该 Vector4 中。
     */
    public static barycentric(
        value1: Vector4,
        value2: Vector4,
        value3: Vector4,
        amount1: number,
        amount2: number,
        result: Vector4
    ): void;
    public static barycentric(...params: any): any {
        Vector4.barycentric = overload()
            .add([Vector4, Vector4, Vector4, Number, Number], function (value1, value2, value3, amount1, amount2) {
                return new Vector4(
                    MathHelper.barycentric(value1.#x, value2.#x, value3.#x, amount1, amount2),
                    MathHelper.barycentric(value1.#y, value2.#y, value3.#y, amount1, amount2),
                    MathHelper.barycentric(value1.#z, value2.#z, value3.#z, amount1, amount2),
                    MathHelper.barycentric(value1.#w, value2.#w, value3.#w, amount1, amount2)
                );
            })
            .add([Vector4, Vector4, Vector4, Number, Number, Vector4], function (value1, value2, value3, amount1, amount2, result) {
                result.#x = MathHelper.barycentric(value1.#x, value2.#x, value3.#x, amount1, amount2);
                result.#y = MathHelper.barycentric(value1.#y, value2.#y, value3.#y, amount1, amount2);
                result.#z = MathHelper.barycentric(value1.#z, value2.#z, value3.#z, amount1, amount2);
                result.#w = MathHelper.barycentric(value1.#w, value2.#w, value3.#w, amount1, amount2);
            });

        return Vector4.barycentric.apply(this, params);
    }

    /**
     * 用指定的位置执行 Catmull-Rom 插值。
     * @param value1 插值中的第一个位置。
     * @param value2 插值中的第二个位置。
     * @param value3 插值中的第三个位置。
     * @param value4 插值中的第四个位置。
     * @param amount 权重因子。
     * @returns 插值结果。
     */
    public static catmullRom(
        value1: Vector4,
        value2: Vector4,
        value3: Vector4,
        value4: Vector4,
        amount: number
    ): Vector4;
    /**
     * 用指定的位置执行 Catmull-Rom 插值。
     * @param value1 插值中的第一个位置。
     * @param value2 插值中的第二个位置。
     * @param value3 插值中的第三个位置。
     * @param value4 插值中的第四个位置。
     * @param amount 权重因子。
     * @param result [OutAttribute] 作为 Catmull-Rom 插值结果的矢量。
     */
    public static catmullRom(
        value1: Vector4,
        value2: Vector4,
        value3: Vector4,
        value4: Vector4,
        amount: number,
        result: Vector4
    ): void;
    public static catmullRom(...params: any): any {
        Vector4.catmullRom = overload()
            .add([Vector4, Vector4, Vector4, Vector4, Number], function (value1, value2, value3, value4, amount) {
                return new Vector4(
                    MathHelper.catmullRom(value1.#x, value2.#x, value3.#x, value4.#x, amount),
                    MathHelper.catmullRom(value1.#y, value2.#y, value3.#y, value4.#y, amount),
                    MathHelper.catmullRom(value1.#z, value2.#z, value3.#z, value4.#z, amount),
                    MathHelper.catmullRom(value1.#w, value2.#w, value3.#w, value4.#w, amount)
                );
            })
            .add([Vector4, Vector4, Vector4, Vector4, Number, Vector4], function (value1, value2, value3, value4, amount, result) {
                result.#x = MathHelper.catmullRom(value1.#x, value2.#x, value3.#x, value4.#x, amount);
                result.#y = MathHelper.catmullRom(value1.#y, value2.#y, value3.#y, value4.#y, amount);
                result.#z = MathHelper.catmullRom(value1.#z, value2.#z, value3.#z, value4.#z, amount);
                result.#w = MathHelper.catmullRom(value1.#w, value2.#w, value3.#w, value4.#w, amount);
            });

        return Vector4.catmullRom.apply(this, params);
    }

    /**
     * 将值限制在指定范围内。
     * @param value1 要限制的值。
     * @param min 最小值。
     * @param max 最大值。
     * @returns 限制后的值。
     */
    public static clamp(value1: Vector4, min: Vector4, max: Vector4): Vector4;
    /**
     * 将值限制在指定范围内。
     * @param value1 要限制的值。
     * @param min 最小值。
     * @param max 最大值。
     * @param result [OutAttribute] 限制的值。
     */
    public static clamp(value1: Vector4, min: Vector4, max: Vector4, result: Vector4): void;
    public static clamp(...params: any): any {
        Vector4.clamp = overload()
            .add([Vector4, Vector4, Vector4], function (value1, min, max) {
                return new Vector4(
                    MathHelper.clamp(value1.#x, min.#x, max.#x),
                    MathHelper.clamp(value1.#y, min.#y, max.#y),
                    MathHelper.clamp(value1.#z, min.#z, max.#z),
                    MathHelper.clamp(value1.#w, min.#w, max.#w)
                );
            })
            .add([Vector4, Vector4, Vector4, Vector4], function (value1, min, max, result) {
                result.#x = MathHelper.clamp(value1.#x, min.#x, max.#x);
                result.#y = MathHelper.clamp(value1.#y, min.#y, max.#y);
                result.#z = MathHelper.clamp(value1.#z, min.#z, max.#z);
                result.#w = MathHelper.clamp(value1.#w, min.#w, max.#w);
            });

        return Vector4.clamp.apply(this, params);
    }

    /**
     * 计算两个矢量之间的距离。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 两个矢量之间的距离。
     */
    public static distance(value1: Vector4, value2: Vector4): number;
    public static distance(...params: any): any {
        Vector4.distance = overload()
            .add([Vector4, Vector4], function (value1, value2) {
                const deltaW = value1.w - value2.w;
                const deltaX = value1.x - value2.x;
                const deltaY = value1.y - value2.y;
                const deltaZ = value1.z - value2.z;

                return Math.sqrt(deltaW ** 2 + deltaX ** 2 + deltaY ** 2 + deltaZ ** 2);
            });

        return Vector4.distance.apply(this, params);
    }

    /**
     * 计算两个平方矢量之间的距离。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 两个平方矢量之间的距离。
     */
    public static distanceSquared(value1: Vector4, value2: Vector4): number;
    public static distanceSquared(...params: any): any {
        Vector4.distanceSquared = overload()
            .add([Vector4, Vector4], function (value1, value2) {
                const deltaW = value1.w - value2.w;
                const deltaX = value1.x - value2.x;
                const deltaY = value1.y - value2.y;
                const deltaZ = value1.z - value2.z;

                return deltaW ** 2 + deltaX ** 2 + deltaY ** 2 + deltaZ ** 2;
            });

        return Vector4.distanceSquared.apply(this, params);
    }

    /**
     * 用一个矢量除以一个标量值。
     * @param value1 源矢量。
     * @param divider 除数。
     * @returns 结果矢量。
     */
    public static divide(value1: Vector4, divider: number): Vector4;
    /**
     * 用一个矢量除以一个标量值。
     * @param value1 源矢量。
     * @param divider 除数。
     * @param result [OutAttribute] 相除结果。
     */
    public static divide(value1: Vector4, divider: number, result: Vector4): void;
    /**
     * 用一个矢量的组件除以另一个矢量的组件。
     * @param value1 源矢量。
     * @param value2 除数矢量。
     * @returns 结果矢量。
     */
    public static divide(value1: Vector4, value2: Vector4): Vector4;
    /**
     * 用一个矢量的组件除以另一个矢量的组件。
     * @param value1 源矢量。
     * @param value2 除数矢量。
     * @param result [OutAttribute] 相除结果。
     */
    public static divide(value1: Vector4, value2: Vector4, result: Vector4): void;
    public static divide(...params: any): any {
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
            .add([Vector4, Number, Vector4], function (value1, divider, result) {
                const factor = 1 / divider;
                result.#x = value1.#x * factor;
                result.#y = value1.#y * factor;
                result.#z = value1.#z * factor;
                result.#w = value1.#w * factor;
            })
            .add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    value1.#x / value2.#x,
                    value1.#y / value2.#y,
                    value1.#z / value2.#z,
                    value1.#w / value2.#w
                );
            })
            .add([Vector4, Vector4, Vector4], function (value1, value2, result) {
                result.#x = value1.#x / value2.#x;
                result.#y = value1.#y / value2.#y;
                result.#z = value1.#z / value2.#z;
                result.#w = value1.#w / value2.#w;
            });

        return Vector4.divide.apply(this, params);
    }

    /**
     * 计算两个矢量的点积。
     * @param vector1 源矢量。
     * @param vector2 源矢量。
     * @returns 点积。
     */
    public static dot(vector1: Vector4, vector2: Vector4): number;
    public static dot(...params: any): any {
        Vector4.dot = overload()
            .add([Vector4, Vector4], function (vector1, vector2) {
                const x1 = vector1.#x, y1 = vector1.#y, z1 = vector1.#z, w1 = vector1.#w;
                const x2 = vector2.#x, y2 = vector2.#y, z2 = vector2.#z, w2 = vector2.#w;
                return x1 * x2 + y1 * y2 + z1 * z2 + w1 * w2;
            });

        return Vector4.dot.apply(this, params);
    }

    /**
     * 执行 Hermite 样条插值。
     * @param value1 源位置矢量。
     * @param tangent1 源切线矢量。
     * @param value2 源位置矢量。
     * @param tangent2 源切线矢量。
     * @param amount 权重因子。
     * @returns 插值结果。
     */
    public static hermite(
        value1: Vector4,
        tangent1: Vector4,
        value2: Vector4,
        tangent2: Vector4,
        amount: number
    ): Vector4;
    /**
     * 执行 Hermite 样条插值。
     * @param value1 源位置矢量。
     * @param tangent1 源切线矢量。
     * @param value2 源位置矢量。
     * @param tangent2 源切线矢量。
     * @param amount 权重因子。
     * @param result [OutAttribute] Hermite 样条插值的结果。
     */
    public static hermite(
        value1: Vector4,
        tangent1: Vector4,
        value2: Vector4,
        tangent2: Vector4,
        amount: number,
        result: Vector4
    ): void;
    public static hermite(...params: any): any {
        Vector4.hermite = overload()
            .add([Vector4, Vector4, Vector4, Vector4, Number], function (value1, tangent1, value2, tangent2, amount) {
                return new Vector4(
                    MathHelper.hermite(value1.#x, tangent1.#x, value2.#x, tangent2.#x, amount),
                    MathHelper.hermite(value1.#y, tangent1.#y, value2.#y, tangent2.#y, amount),
                    MathHelper.hermite(value1.#z, tangent1.#z, value2.#z, tangent2.#z, amount),
                    MathHelper.hermite(value1.#w, tangent1.#w, value2.#w, tangent2.#w, amount)
                );
            })
            .add([Vector4, Vector4, Vector4, Vector4, Number, Vector4], function (value1, tangent1, value2, tangent2, amount, result) {
                result.#x = MathHelper.hermite(value1.#x, tangent1.#x, value2.#x, tangent2.#x, amount);
                result.#y = MathHelper.hermite(value1.#y, tangent1.#y, value2.#y, tangent2.#y, amount);
                result.#z = MathHelper.hermite(value1.#z, tangent1.#z, value2.#z, tangent2.#z, amount);
                result.#w = MathHelper.hermite(value1.#w, tangent1.#w, value2.#w, tangent2.#w, amount);
            });

        return Vector4.hermite.apply(this, params);
    }

    /**
     * 在两个矢量之间执行线性插值。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param amount 指示 value2 权重的 0 到 1 之间的值。
     * @returns 插值结果。
     */
    public static lerp(value1: Vector4, value2: Vector4, amount: number): Vector4;
    /**
     * 在两个矢量之间执行线性插值。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param amount 指示 value2 权重的 0 到 1 之间的值。
     * @param result [OutAttribute] 插值的结果。
     */
    public static lerp(value1: Vector4, value2: Vector4, amount: number, result: Vector4): void;
    public static lerp(...params: any): any {
        Vector4.lerp = overload()
            .add([Vector4, Vector4, Number], function (value1, value2, amount) {
                return new Vector4(
                    MathHelper.lerp(value1.#x, value2.#x, amount),
                    MathHelper.lerp(value1.#y, value2.#y, amount),
                    MathHelper.lerp(value1.#z, value2.#z, amount),
                    MathHelper.lerp(value1.#w, value2.#w, amount)
                );
            })
            .add([Vector4, Vector4, Number, Vector4], function (value1, value2, amount, result) {
                result.#x = MathHelper.lerp(value1.#x, value2.#x, amount);
                result.#y = MathHelper.lerp(value1.#y, value2.#y, amount);
                result.#z = MathHelper.lerp(value1.#z, value2.#z, amount);
                result.#w = MathHelper.lerp(value1.#w, value2.#w, amount);
            });

        return Vector4.lerp.apply(this, params);
    }

    /**
     * 从每个匹配的组件对中返回包含最大值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    public static max(value1: Vector4, value2: Vector4): Vector4;
    /**
     * 从每个匹配的组件对中返回包含最大值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 最大化的矢量。
     */
    public static max(value1: Vector4, value2: Vector4, result: Vector4): void;
    public static max(...params: any): any {
        Vector4.max = overload()
            .add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    Math.max(value1.#x, value2.#x),
                    Math.max(value1.#y, value2.#y),
                    Math.max(value1.#z, value2.#z),
                    Math.max(value1.#w, value2.#w)
                );
            })
            .add([Vector4, Vector4, Vector4], function (value1, value2, result) {
                result.#x = Math.max(value1.#x, value2.#x);
                result.#y = Math.max(value1.#y, value2.#y);
                result.#z = Math.max(value1.#z, value2.#z);
                result.#w = Math.max(value1.#w, value2.#w);
            });

        return Vector4.max.apply(this, params);
    }

    /**
     * 从每个匹配的组件对中返回包含最小值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    public static min(value1: Vector4, value2: Vector4): Vector4;
    /**
     * 从每个匹配的组件对中返回包含最小值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 最小化的矢量。
     */
    public static min(value1: Vector4, value2: Vector4, result: Vector4): void;
    public static min(...params: any): any {
        Vector4.min = overload()
            .add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    Math.min(value1.#x, value2.#x),
                    Math.min(value1.#y, value2.#y),
                    Math.min(value1.#z, value2.#z),
                    Math.min(value1.#w, value2.#w)
                );
            })
            .add([Vector4, Vector4, Vector4], function (value1, value2, result) {
                result.#x = Math.min(value1.#x, value2.#x);
                result.#y = Math.min(value1.#y, value2.#y);
                result.#z = Math.min(value1.#z, value2.#z);
                result.#w = Math.min(value1.#w, value2.#w);
            });

        return Vector4.min.apply(this, params);
    }

    /**
     * 将一个矢量乘以一个标量。
     * @param value1 源矢量。
     * @param scaleFactor 标量值。
     * @returns 结果矢量。
     */
    public static multiply(value1: Vector4, scaleFactor: number): Vector4;
    /**
     * 将一个矢量乘以一个标量。
     * @param value1 源矢量。
     * @param scaleFactor 标量值。
     * @param result [OutAttribute] 相乘的结果。
     */
    public static multiply(value1: Vector4, scaleFactor: number, result: Vector4): void;
    /**
     * 将两个矢量的组件彼此相乘。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    public static multiply(value1: Vector4, value2: Vector4): Vector4;
    /**
     * 将两个矢量的组件彼此相乘。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 相乘的结果。
     */
    public static multiply(value1: Vector4, value2: Vector4, result: Vector4): void;
    public static multiply(...params: any): any {
        Vector4.multiply = overload()
            .add([Vector4, Number], function (value1, value2) {
                return new Vector4(
                    value1.#x * value2,
                    value1.#y * value2,
                    value1.#z * value2,
                    value1.#w * value2
                );
            })
            .add([Vector4, Number, Vector4], function (value1, value2, result) {
                result.#x = value1.#x * value2;
                result.#y = value1.#y * value2;
                result.#z = value1.#z * value2;
                result.#w = value1.#w * value2;
            })
            .add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    value1.#x * value2.#x,
                    value1.#y * value2.#y,
                    value1.#z * value2.#z,
                    value1.#w * value2.#w
                );
            })
            .add([Vector4, Vector4, Vector4], function (value1, value2, result) {
                result.#x = value1.#x * value2.#x;
                result.#y = value1.#y * value2.#y;
                result.#z = value1.#z * value2.#z;
                result.#w = value1.#w * value2.#w;
            });

        return Vector4.multiply.apply(this, params);
    }

    /**
     * 返回指向反方向的矢量。
     * @param value 源矢量。
     * @returns 结果矢量。
     */
    public static negate(value: Vector4): Vector4;
    /**
     * 返回指向反方向的矢量。
     * @param value 源矢量。
     * @param result [OutAttribute] 指向反方向的矢量。
     */
    public static negate(value: Vector4, result: Vector4): void;
    public static negate(...params: any): any {
        Vector4.negate = overload()
            .add([Vector4], function (value) {
                return new Vector4(-value.#x, -value.#y, -value.#z, -value.#w);
            })
            .add([Vector4, Vector4], function (value, result) {
                result.#x = -value.#x;
                result.#y = -value.#y;
                result.#z = -value.#z;
                result.#w = -value.#w;
            });

        return Vector4.negate.apply(this, params);
    }

    /**
     * 根据指定的矢量创建单位矢量。
     * @param vector 源 Vector4。
     * @returns 结果矢量。
     */
    public static normalize(vector: Vector4): Vector4;
    /**
     * 根据指定的矢量创建单位矢量。
     * @param vector 源 Vector4。
     * @param result [OutAttribute] 法线化的矢量。
     */
    public static normalize(vector: Vector4, result: Vector4): void;
    public static normalize(...params: any): any {
        Vector4.normalize = overload()
            .add([Vector4], function (value) {
                const x = value.#x, y = value.#y, z = value.#z, w = value.#w;
                const factor = 1 / Math.sqrt(x ** 2 + y ** 2 + z ** 2 + w ** 2);
                return new Vector4(x * factor, y * factor, z * factor, w * factor);
            })
            .add([Vector4, Vector4], function (value, result) {
                const x = value.#x, y = value.#y, z = value.#z, w = value.#w;
                const factor = 1 / Math.sqrt(x ** 2 + y ** 2 + z ** 2 + w ** 2);
                result.#x = x * factor;
                result.#y = y * factor;
                result.#z = z * factor;
                result.#w = w * factor;
            });

        return Vector4.normalize.apply(this, params);
    }

    /**
     * 使用三次方程计算两个值之间的插值。
     * @param value1 源值。
     * @param value2 源值。
     * @param amount 权重值。
     * @returns 插值结果。
     */
    public static smoothStep(value1: Vector4, value2: Vector4, amount: number): Vector4;
    /**
     * 使用三次方程计算两个值之间的插值。
     * @param value1 源值。
     * @param value2 源值。
     * @param amount 权重值。
     * @param result [OutAttribute] 插入值。
     */
    public static smoothStep(value1: Vector4, value2: Vector4, amount: number, result: Vector4): void;
    public static smoothStep(...params: any): any {
        Vector4.smoothStep = overload()
            .add([Vector4, Vector4, Number], function (value1, value2, amount) {
                return new Vector4(
                    MathHelper.smoothStep(value1.#x, value2.#x, amount),
                    MathHelper.smoothStep(value1.#y, value2.#y, amount),
                    MathHelper.smoothStep(value1.#z, value2.#z, amount),
                    MathHelper.smoothStep(value1.#w, value2.#w, amount)
                );
            })
            .add([Vector4, Vector4, Number, Vector4], function (value1, value2, amount, result) {
                result.#x = MathHelper.smoothStep(value1.#x, value2.#x, amount);
                result.#y = MathHelper.smoothStep(value1.#y, value2.#y, amount);
                result.#z = MathHelper.smoothStep(value1.#z, value2.#z, amount);
                result.#w = MathHelper.smoothStep(value1.#w, value2.#w, amount);
            });

        return Vector4.smoothStep.apply(this, params);
    }

    /**
     * 将一个矢量减去一个矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    public static subtract(value1: Vector4, value2: Vector4): Vector4;
    /**
     * 将一个矢量减去一个矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 相减结果。
     */
    public static subtract(value1: Vector4, value2: Vector4, result: Vector4): void;
    public static subtract(...params: any): any {
        Vector4.subtract = overload()
            .add([Vector4, Vector4], function (value1, value2) {
                return new Vector4(
                    value1.#x - value2.#x,
                    value1.#y - value2.#y,
                    value1.#z - value2.#z,
                    value1.#w - value2.#w
                );
            })
            .add([Vector4, Vector4, Vector4], function (value1, value2, result) {
                result.#x = value1.#x - value2.#x;
                result.#y = value1.#y - value2.#y;
                result.#z = value1.#z - value2.#z;
                result.#w = value1.#w - value2.#w;
            });

        return Vector4.subtract.apply(this, params);
    }

    /**
     * 通过给定 Matrix 变换 Vector2。
     * @param position 源 Vector2。
     * @param matrix 变换 Matrix。
     * @returns 结果矢量。
     */
    public static transform(position: Vector2, matrix: Matrix): Vector4;
    /**
     * 通过给定 Matrix 变换 Vector2。
     * @param position 源 Vector2。
     * @param matrix 变换 Matrix。
     * @param result [OutAttribute] 通过变换得到的 Vector4。
     */
    public static transform(position: Vector2, matrix: Matrix, result: Vector4): void;
    /**
     * 通过指定 Quaternion 将 Vector2 变换为 Vector4。
     * @param value 要变换的 Vector2。
     * @param rotation 要应用的 Quaternion 旋转。
     * @returns 结果矢量。
     */
    public static transform(value: Vector2, rotation: Quaternion): Vector4;
    /**
     * 通过指定 Quaternion 将 Vector2 变换为 Vector4。
     * @param value 要变换的 Vector2。
     * @param rotation 要应用的 Quaternion 旋转。
     * @param result [OutAttribute] 通过变换得到的 Vector4。
     */
    public static transform(value: Vector2, rotation: Quaternion, result: Vector4): void;
    /**
     * 通过给定 Matrix 变换 Vector3。
     * @param position 源 Vector3。
     * @param matrix 变换 Matrix。
     * @returns 结果矢量。
     */
    public static transform(position: Vector3, matrix: Matrix): Vector4;
    /**
     * 通过给定 Matrix 变换 Vector3。
     * @param position 源 Vector3。
     * @param matrix 变换 Matrix。
     * @param result [OutAttribute] 通过变换得到的 Vector4。
     */
    public static transform(position: Vector3, matrix: Matrix, result: Vector4): void;
    /**
     * 通过指定 Quaternion 将 Vector3 变换为 Vector4。
     * @param value 要变换的 Vector3。
     * @param rotation 要应用的 Quaternion 旋转。
     * @returns 结果矢量。
     */
    public static transform(value: Vector3, rotation: Quaternion): Vector4;
    /**
     * 通过指定 Quaternion 将 Vector3 变换为 Vector4。
     * @param value 要变换的 Vector3。
     * @param rotation 要应用的 Quaternion 旋转。
     * @param result [OutAttribute] 通过变换得到的 Vector4。
     */
    public static transform(value: Vector3, rotation: Quaternion, result: Vector4): void;
    /**
     * 通过指定 Matrix 变换 Vector4。
     * @param vector 源 Vector4。
     * @param matrix 变换 Matrix。
     * @returns 结果矢量。
     */
    public static transform(vector: Vector4, matrix: Matrix): Vector4;
    /**
     * 通过指定 Matrix 变换 Vector4。
     * @param vector 源 Vector4。
     * @param matrix 变换 Matrix。
     * @param result [OutAttribute] 通过变换得到的 Vector4。
     */
    public static transform(vector: Vector4, matrix: Matrix, result: Vector4): void;
    /**
     * 通过指定 Quaternion 变换 Vector4。
     * @param value 要变换的 Vector4。
     * @param rotation 要应用的 Quaternion 旋转。
     * @returns 结果矢量。
     */
    public static transform(value: Vector4, rotation: Quaternion): Vector4;
    /**
     * 通过指定 Quaternion 变换 Vector4。
     * @param value 要变换的 Vector4。
     * @param rotation 要应用的 Quaternion 旋转。
     * @param result [OutAttribute] 通过变换得到的 Vector4。
     */
    public static transform(value: Vector4, rotation: Quaternion, result: Vector4): void;
    /**
     * 通过指定 Matrix 将 Vector4 数组中的指定范围变换为目标数组的指定范围。
     * @param sourceArray 包含要变换的范围的 Vector4 数组。
     * @param sourceIndex 源数组中要变换的首个 Vector4 的索引。
     * @param matrix 要应用的变换 Matrix。
     * @param destinationArray 要将结果写入到的现有 Vector4 目标数组。
     * @param destinationIndex 目标数组中要写入的首个 Vector4 的索引。
     * @param length 要变换的 Vector4 数量。
     */
    public static transform(
        sourceArray: List<Vector4>,
        sourceIndex: number,
        matrix: Matrix,
        destinationArray: List<Vector4>,
        destinationIndex: number,
        length: number
    ): void;
    /**
     * 通过指定 Quaternion 将 Vector4 数组中的指定范围变换为目标数组的指定范围。
     * @param sourceArray 包含要变换的范围的 Vector4 数组。
     * @param sourceIndex 源数组中要变换的首个 Vector4 的索引。
     * @param rotation 要应用的 Quaternion 旋转。
     * @param destinationArray 要将结果写入到的现有 Vector4 目标数组。
     * @param destinationIndex 目标数组中要写入的首个 Vector4 的索引。
     * @param length 要变换的 Vector4 数量。
     */
    public static transform(
        sourceArray: List<Vector4>,
        sourceIndex: number,
        rotation: Quaternion,
        destinationArray: List<Vector4>,
        destinationIndex: number,
        length: number
    ): void;
    /**
     * 通过指定 Matrix 变换 Vector4 数组。
     * @param sourceArray 要变换的 Vector4 数组。
     * @param matrix 要应用的变换 Matrix。
     * @param destinationArray 变换后的 Vector4 被写入的现有目标数组。
     */
    public static transform(
        sourceArray: List<Vector4>,
        matrix: Matrix,
        destinationArray: List<Vector4>
    ): void;
    /**
     * 通过指定 Quaternion 变换 Vector4 数组。
     * @param sourceArray 要变换的 Vector4 数组。
     * @param rotation 要应用的 Quaternion 旋转。
     * @param destinationArray 变换后的 Vector4 被写入的现有目标数组。
     */
    public static transform(
        sourceArray: List<Vector4>,
        rotation: Quaternion,
        destinationArray: List<Vector4>
    ): void;
    public static transform(...params: any): any {
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
            .add([Vector2, Matrix, Vector4], function (position, matrix, result) {
                const x = position.x, y = position.y;

                result.#x = (x * matrix.m11) + (y * matrix.m21) + matrix.m41;
                result.#y = (x * matrix.m12) + (y * matrix.m22) + matrix.m42;
                result.#z = (x * matrix.m13) + (y * matrix.m23) + matrix.m43;
                result.#w = (x * matrix.m14) + (y * matrix.m24) + matrix.m44;
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
            .add([Vector2, Quaternion, Vector4], function (value, rotation, result) {
                const x = value.x, y = value.y;
                const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
                const x2 = rx + rx, y2 = ry + ry, z2 = rz + rz;
                const wz2 = rw * z2, xy2 = rx * y2, zz2 = rz * z2;

                result.#x = x * (1.0 - ry * y2 - zz2) + y * (xy2 - wz2);
                result.#y = x * (xy2 + wz2) + y * (1.0 - rx * x2 - zz2);
                result.#z = x * (rx * z2 - rw * y2) + y * (ry * z2 + rw * x2);
                result.#w = 1.0;
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
            .add([Vector3, Matrix, Vector4], function (position, matrix, result) {
                const x = position.x, y = position.y, z = position.z;

                result.#x = (x * matrix.m11) + (y * matrix.m21) + (z * matrix.m31) + matrix.m41;
                result.#y = (x * matrix.m12) + (y * matrix.m22) + (z * matrix.m32) + matrix.m42;
                result.#z = (x * matrix.m13) + (y * matrix.m23) + (z * matrix.m33) + matrix.m43;
                result.#w = (x * matrix.m14) + (y * matrix.m24) + (z * matrix.m34) + matrix.m44;
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
            .add([Vector3, Quaternion, Vector4], function (position, rotation, result) {
                const x = position.x, y = position.y, z = position.z;
                const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
                const x2 = rx + rx, y2 = ry + ry, z2 = rz + rz;
                const wx2 = rw * x2, wy2 = rw * y2, wz2 = rw * z2;
                const xx2 = rx * x2, xy2 = rx * y2, xz2 = rx * z2;
                const yy2 = ry * y2, yz2 = ry * z2, zz2 = rz * z2;

                result.#x = x * (1.0 - yy2 - zz2) + y * (xy2 - wz2) + z * (xz2 + wy2);
                result.#y = x * (xy2 + wz2) + y * (1.0 - xx2 - zz2) + z * (yz2 - wx2);
                result.#z = x * (xz2 - wy2) + y * (yz2 + wx2) + z * (1.0 - xx2 - yy2);
                result.#w = 1.0;
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
            .add([Vector4, Matrix, Vector4], function (position, matrix, result) {
                const x = position.#x, y = position.#y, z = position.#z, w = position.#w;

                result.#x = (x * matrix.m11) + (y * matrix.m21) + (z * matrix.m31) + (w * matrix.m41);
                result.#y = (x * matrix.m12) + (y * matrix.m22) + (z * matrix.m32) + (w * matrix.m42);
                result.#z = (x * matrix.m13) + (y * matrix.m23) + (z * matrix.m33) + (w * matrix.m43);
                result.#w = (x * matrix.m14) + (y * matrix.m24) + (z * matrix.m34) + (w * matrix.m44);
            })
            .add([Vector4, Quaternion], function (value, rotation) {
                const result = Vector4.transform(new Vector3(value.#x, value.#y, value.#z), rotation);
                result.w = value.#w;
                return result;
            })
            .add([Vector4, Quaternion, Vector4], function (value, rotation, result) {
                Vector4.transform(new Vector3(value.#x, value.#y, value.#z), rotation, result);
                result.#w = value.#w;
            })
            .add([List.T(Vector4), Number, Matrix, List.T(Vector4), Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new RangeError(`sourceArray 的长度小于 sourceIndex + length。`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError(`destinationArray 的长度小于 destinationIndex + length。`);
                }

                for (let i = 0; i < length; i++) {
                    destinationArray[destinationIndex + i] = Vector4.transform(sourceArray[sourceIndex + i], matrix);
                }
            })
            .add([List.T(Vector4), Number, Quaternion, List.T(Vector4), Number, Number], function (sourceArray, sourceIndex, quaternion, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new RangeError(`sourceArray 的长度小于 sourceIndex + length。`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError(`destinationArray 的长度小于 destinationIndex + length。`);
                }

                for (let i = 0; i < length; i++) {
                    destinationArray[destinationIndex + i] = Vector4.transform(sourceArray[sourceIndex + i], quaternion);
                }
            })
            .add([List.T(Vector4), Matrix, List.T(Vector4)], function (sourceArray, matrix, destinationArray) {
                Vector4.transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
            })
            .add([List.T(Vector4), Quaternion, List.T(Vector4)], function (sourceArray, rotation, destinationArray) {
                Vector4.transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.length);
            });

        return Vector4.transform.apply(this, params);
    }

    /**
     * 对传入的 Vector4 取反。
     * @param other 用于取反的 Vector4。
     * @returns 取反后的 Vector4。
     */
    public static ["-"](other: Vector4): Vector4;
    public static ["-"](...params: any): any {
        Vector4["-"] = overload([Vector4], function (value) {
            return Vector4.negate(value);
        });

        return Vector4["-"].apply(this, params);
    }

    /**
     * 将当前 Vector4 与另一个 Vector4 相加。
     * @param other 用于相加的 Vector4。
     * @returns 相加后的 Vector4。
     */
    public ["+"](other: Vector4): Vector4;
    public ["+"](...params: any): any {
        Vector4.prototype["+"] = overload([Vector4], function (this: Vector4, other) {
            return Vector4.add(this, other);
        });

        return Vector4.prototype["+"].apply(this, params);
    }

    /**
     * 将当前 Vector4 与另一个 Vector4 相减。
     * @param other 用于相减的 Vector4。
     * @returns 相减后的 Vector4。
     */
    public ["-"](other: Vector4): Vector4;
    public ["-"](...params: any): any {
        Vector4.prototype["-"] = overload([Vector4], function (this: Vector4, other) {
            return Vector4.subtract(this, other);
        });

        return Vector4.prototype["-"].apply(this, params);
    }

    /**
     * 将当前 Vector4 与另一个 Vector4 相乘。
     * @param other 用于相乘的 Vector4。
     * @returns 相乘后的 Vector4。
     */
    public ["*"](other: Vector4): Vector4;
    public ["*"](...params: any): any {
        Vector4.prototype["*"] = overload([Vector4], function (this: Vector4, other) {
            return Vector4.multiply(this, other);
        });

        return Vector4.prototype["*"].apply(this, params);
    }

    /**
     * 将当前 Vector4 与另一个 Vector4 相除。
     * @param other 用于相除的 Vector4。
     * @returns 相除后的 Vector4。
     */
    public ["/"](other: Vector4): Vector4;
    public ["/"](...params: any): any {
        Vector4.prototype["/"] = overload([Vector4], function (this: Vector4, other) {
            return Vector4.divide(this, other);
        });

        return Vector4.prototype["/"].apply(this, params);
    }

    /**
     * 确定指定的 Vector4 是否等于当前 Vector4。
     * @param other 用于与当前 Vector4 比较的 Vector4。
     * @returns 是否相等。
     */
    public ["=="](other: Vector4): boolean;
    public ["=="](...params: any): any {
        Vector4.prototype["=="] = overload([Vector4], function (this: Vector4, other) {
            return this.equals(other);
        });

        return Vector4.prototype["=="].apply(this, params);
    }

    /**
     * 确定指定的 Vector4 是否不等于当前 Vector4。
     * @param other 用于与当前 Vector4 比较的 Vector4。
     * @returns 是否不相等。
     */
    public ["!="](other: Vector4): boolean;
    public ["!="](...params: any): any {
        Vector4.prototype["!="] = overload([Vector4], function (this: Vector4, other) {
            return !this.equals(other);
        });

        return Vector4.prototype["!="].apply(this, params);
    }

    /**
     * 确定指定的 Vector4 是否等于当前 Vector4。
     * @param other 用于与当前 Vector4 比较的 Vector4。
     * @returns 是否相等。
     */
    public equals(other: Vector4): boolean;
    public equals(...params: any): any {
        Vector4.prototype.equals = overload([Vector4], function (this: Vector4, other) {
            return this.#x === other.#x && this.#y === other.#y && this.#z === other.#z && this.#w === other.#w;
        }).any(() => false);

        return Vector4.prototype.equals.apply(this, params);
    }

    /**
     * 计算矢量的长度。
     * @returns 矢量的长度。
     */
    public length(): number;
    public length(...params: any): any {
        Vector4.prototype.length = overload([], function (this: Vector4) {
            return Math.sqrt(this.#x ** 2 + this.#y ** 2 + this.#z ** 2 + this.#w ** 2);
        });

        return Vector4.prototype.length.apply(this, params);
    }

    /**
     * 计算平方矢量的长度。
     * @returns 平方矢量的长度。
     */
    public lengthSquared(): number;
    public lengthSquared(...params: any): any {
        Vector4.prototype.lengthSquared = overload([], function (this: Vector4) {
            return this.#x ** 2 + this.#y ** 2 + this.#z ** 2 + this.#w ** 2;
        });

        return Vector4.prototype.lengthSquared.apply(this, params);
    }

    /**
     * 将当前矢量转为单位矢量。
     */
    public normalize(): void;
    public normalize(...params: any): any {
        Vector4.prototype.normalize = overload()
            .add([], function (this: Vector4) {
                const factor = 1 / Math.sqrt(this.#x ** 2 + this.#y ** 2 + this.#z ** 2 + this.#w ** 2);
                this.#x *= factor;
                this.#y *= factor;
                this.#z *= factor;
                this.#w *= factor;
            });

        return Vector4.prototype.normalize.apply(this, params);
    }

    /**
     * 检索当前对象的字符串呈现。
     * @returns 当前对象的字符串呈现。
     */
    public toString(): string;
    public toString(...params: any): any {
        Vector4.prototype.toString = overload()
            .add([], function (this: Vector4) {
                return JSON.stringify(this);
            });

        return Vector4.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 Vector4 的 JSON 表示形式。
     * @returns 当前 Vector4 的 JSON 表示形式。
     */
    public toJSON(): object {
        return { x: this.#x, y: this.#y, z: this.#z, w: this.#w };
    }
}
