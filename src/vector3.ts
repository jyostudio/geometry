import List from "@jyostudio/list";
import overload from "@jyostudio/overload";
import { checkSetterType } from "@jyostudio/overload/dist/decorator";
import MathHelper from "./math-helper";
import Matrix from "./matrix";
import Quaternion from "./quaternion";
import Vector2 from "./vector2";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 定义具有三个组件的矢量。
 * @class
 */
export default class Vector3 {
    /**
     * 返回在右手坐标系 (0, 0, 1) 中指定向后方向的单位 Vector3。
     */
    public static get backward(): Vector3 {
        return new Vector3(0, 0, 1);
    }

    /**
     * 返回指定向下方向 (0, −1, 0) 的单位 Vector3。
     */
    public static get down(): Vector3 {
        return new Vector3(0, -1, 0);
    }

    /**
     * 返回在右手坐标系 (0, 0,−1) 中指定向前方向的单位 Vector3。
     */
    public static get forward(): Vector3 {
        return new Vector3(0, 0, -1);
    }

    /**
     * 返回指定向左方向 (−1, 0, 0) 的单位 Vector3。
     */
    public static get left(): Vector3 {
        return new Vector3(-1, 0, 0);
    }

    /**
     * 返回所有组件为一体的 Vector3。
     */
    public static get one(): Vector3 {
        return new Vector3(1, 1, 1);
    }

    /**
     * 返回指向右侧 (1, 0, 0) 的单位 Vector3。
     */
    public static get right(): Vector3 {
        return new Vector3(1, 0, 0);
    }

    /**
     * 返回 x 单位 Vector3 (1, 0, 0)。
     */
    public static get unitX(): Vector3 {
        return new Vector3(1, 0, 0);
    }

    /**
     * 返回 y 单位 Vector3 (0, 1, 0)。
     */
    public static get unitY(): Vector3 {
        return new Vector3(0, 1, 0);
    }

    /**
     * 返回 z 单位 Vector3 (0, 0, 1)。
     */
    public static get unitZ(): Vector3 {
        return new Vector3(0, 0, 1);
    }

    /**
     * 返回一个指定向上方向 (0, 1, 0) 的单位矢量。
     */
    public static get up(): Vector3 {
        return new Vector3(0, 1, 0);
    }

    /**
     * 返回所有组件均设置为零的 Vector3。
     */
    public static get zero(): Vector3 {
        return new Vector3(0, 0, 0);
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
     * 新建一个空的 Vector3 实例。
     */
    constructor();
    /**
     * 新建 Vector3 实例。
     * @param value 每个色差的初始化值。
     */
    constructor(value: number);
    /**
     * 初始化新的 Vector3 实例。
     * @param x 矢量 x 色差的初始值。
     * @param y 矢量 y 色差的初始值。
     * @param z 矢量 z 色差的初始值。
     */
    constructor(x: number, y: number, z: number);
    /**
     * 初始化新的 Vector3 实例。
     * @param value 包含 x 和 y 色差的初始化值的矢量。
     * @param z 矢量 z 色差的初始值。
     */
    constructor(value: Vector2, z: number);
    constructor(...params: any[]) {
        Vector3[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    /**
     * 结构化构造函数。
     * @returns Vector3 实例。
     */
    public static ["##STRUCT_CONSTRUCTOR##"](): Vector3 {
        return Vector3.zero;
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        Vector3[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number], function (this: Vector3, value) {
                this.#x = value;
                this.#y = value;
                this.#z = value;
            })
            .add([Number, Number, Number], function (this: Vector3, x, y, z) {
                this.#x = x;
                this.#y = y;
                this.#z = z;
            })
            .add([Vector2, Number], function (this: Vector3, value, z) {
                this.#x = value.x;
                this.#y = value.y;
                this.#z = z;
            });

        return Vector3[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    public *[Symbol.iterator](): IterableIterator<number> {
        yield this.#x;
        yield this.#y;
        yield this.#z;
    }

    /**
     * 将两个矢量相加。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 相加后的矢量。
     */
    public static add(value1: Vector3, value2: Vector3): Vector3;
    /**
     * 将两个矢量相加。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 源矢量之和。
     */
    public static add(value1: Vector3, value2: Vector3, result: Vector3): void;
    public static add(...params: any): any {
        Vector3.add = overload()
            .add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    value1.#x + value2.#x,
                    value1.#y + value2.#y,
                    value1.#z + value2.#z
                );
            })
            .add([Vector3, Vector3, Vector3], function (value1, value2, result) {
                result.#x = value1.#x + value2.#x;
                result.#y = value1.#y + value2.#y;
                result.#z = value1.#z + value2.#z;
            });

        return Vector3.add.apply(this, params);
    }

    /**
     * 返回一个相对于 3D 三角形的质心坐标中某指定点的 3D Cartesian 坐标所在的 Vector3。
     * @param value1 包含三角形顶点 1 的 3D Cartesian 坐标的 Vector3。
     * @param value2 包含三角形顶点 2 的 3D Cartesian 坐标的 Vector3。
     * @param value3 包含三角形顶点 3 的 3D Cartesian 坐标的 Vector3。
     * @param amount1 质心坐标 b2，用于表达趋向顶点 2 的权重因子（在 value2 中指定）。
     * @param amount2 质心坐标 b3，用于表达趋向顶点 3 的权重因子（在 value3 中指定）。
     * @returns 相对于 3D 三角形的质心坐标中某指定点的 3D Cartesian 坐标所在的 Vector3。
     */
    public static barycentric(
        value1: Vector3,
        value2: Vector3,
        value3: Vector3,
        amount1: number,
        amount2: number
    ): Vector3;
    /**
     * 返回一个相对于 3D 三角形的质心（重心）坐标中某指定点的 3D Cartesian 坐标所在的 Vector3。
     * @param value1 包含三角形顶点 1 的 3D Cartesian 坐标的 Vector3。
     * @param value2 包含三角形顶点 2 的 3D Cartesian 坐标的 Vector3。
     * @param value3 包含三角形顶点 3 的 3D Cartesian 坐标的 Vector3。
     * @param amount1 质心坐标 b2，用于表达趋向顶点 2 的权重因子（在 value2 中指定）。
     * @param amount2 质心坐标 b3，用于表达趋向顶点 3 的权重因子（在 value3 中指定）。
     * @param result [OutAttribute] 在退出时，指定点的 3D Cartesian 坐标放置在该 Vector3 中。
     */
    public static barycentric(
        value1: Vector3,
        value2: Vector3,
        value3: Vector3,
        amount1: number,
        amount2: number,
        result: Vector3
    ): void;
    public static barycentric(...params: any): any {
        Vector3.barycentric = overload()
            .add([Vector3, Vector3, Vector3, Number, Number], function (value1, value2, value3, amount1, amount2) {
                return new Vector3(
                    MathHelper.barycentric(value1.#x, value2.#x, value3.#x, amount1, amount2),
                    MathHelper.barycentric(value1.#y, value2.#y, value3.#y, amount1, amount2),
                    MathHelper.barycentric(value1.#z, value2.#z, value3.#z, amount1, amount2)
                );
            })
            .add([Vector3, Vector3, Vector3, Number, Number, Vector3], function (value1, value2, value3, amount1, amount2, result) {
                result.#x = MathHelper.barycentric(value1.#x, value2.#x, value3.#x, amount1, amount2);
                result.#y = MathHelper.barycentric(value1.#y, value2.#y, value3.#y, amount1, amount2);
                result.#z = MathHelper.barycentric(value1.#z, value2.#z, value3.#z, amount1, amount2);
            });

        return Vector3.barycentric.apply(this, params);
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
        value1: Vector3,
        value2: Vector3,
        value3: Vector3,
        value4: Vector3,
        amount: number
    ): Vector3;
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
        value1: Vector3,
        value2: Vector3,
        value3: Vector3,
        value4: Vector3,
        amount: number,
        result: Vector3
    ): void;
    public static catmullRom(...params: any): any {
        Vector3.catmullRom = overload()
            .add([Vector3, Vector3, Vector3, Vector3, Number], function (value1, value2, value3, value4, amount) {
                return new Vector3(
                    MathHelper.catmullRom(value1.#x, value2.#x, value3.#x, value4.#x, amount),
                    MathHelper.catmullRom(value1.#y, value2.#y, value3.#y, value4.#y, amount),
                    MathHelper.catmullRom(value1.#z, value2.#z, value3.#z, value4.#z, amount)
                );
            })
            .add([Vector3, Vector3, Vector3, Vector3, Number, Vector3], function (value1, value2, value3, value4, amount, result) {
                result.#x = MathHelper.catmullRom(value1.#x, value2.#x, value3.#x, value4.#x, amount);
                result.#y = MathHelper.catmullRom(value1.#y, value2.#y, value3.#y, value4.#y, amount);
                result.#z = MathHelper.catmullRom(value1.#z, value2.#z, value3.#z, value4.#z, amount);
            });

        return Vector3.catmullRom.apply(this, params);
    }

    /**
     * 将值限制在指定范围内。
     * @param value1 要限制的值。
     * @param min 最小值。
     * @param max 最大值。
     * @returns 限制后的值。
     */
    public static clamp(value1: Vector3, min: Vector3, max: Vector3): Vector3;
    /**
     * 将值限制在指定范围内。
     * @param value1 要限制的值。
     * @param min 最小值。
     * @param max 最大值。
     * @param result [OutAttribute] 限制的值。
     */
    public static clamp(value1: Vector3, min: Vector3, max: Vector3, result: Vector3): void;
    public static clamp(...params: any): any {
        Vector3.clamp = overload()
            .add([Vector3, Vector3, Vector3], function (value1, min, max) {
                return new Vector3(
                    MathHelper.clamp(value1.#x, min.#x, max.#x),
                    MathHelper.clamp(value1.#y, min.#y, max.#y),
                    MathHelper.clamp(value1.#z, min.#z, max.#z)
                );
            })
            .add([Vector3, Vector3, Vector3, Vector3], function (value1, min, max, result) {
                result.#x = MathHelper.clamp(value1.#x, min.#x, max.#x);
                result.#y = MathHelper.clamp(value1.#y, min.#y, max.#y);
                result.#z = MathHelper.clamp(value1.#z, min.#z, max.#z);
            });

        return Vector3.clamp.apply(this, params);
    }

    /**
     * 计算两个矢量的叉积。
     * @param vector1 源矢量。
     * @param vector2 源矢量。
     * @returns 两个矢量的叉积。
     */
    public static cross(vector1: Vector3, vector2: Vector3): Vector3;
    /**
     * 计算两个矢量的叉积。
     * @param vector1 源矢量。
     * @param vector2 源矢量。
     * @param result [OutAttribute] 矢量叉积。
     */
    public static cross(vector1: Vector3, vector2: Vector3, result: Vector3): void;
    public static cross(...params: any): any {
        Vector3.cross = overload()
            .add([Vector3, Vector3], function (vector1, vector2) {
                const x1 = vector1.#x, y1 = vector1.#y, z1 = vector1.#z;
                const x2 = vector2.#x, y2 = vector2.#y, z2 = vector2.#z;

                const x = y1 * z2 - y2 * z1;
                const y = -(x1 * z2 - x2 * z1);
                const z = x1 * y2 - x2 * y1;

                return new Vector3(x, y, z);
            })
            .add([Vector3, Vector3, Vector3], function (vector1, vector2, result) {
                const x1 = vector1.#x, y1 = vector1.#y, z1 = vector1.#z;
                const x2 = vector2.#x, y2 = vector2.#y, z2 = vector2.#z;

                result.#x = y1 * z2 - y2 * z1;
                result.#y = -(x1 * z2 - x2 * z1);
                result.#z = x1 * y2 - x2 * y1;
            });

        return Vector3.cross.apply(this, params);
    }

    /**
     * 计算两个矢量之间的距离。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 两个矢量之间的距离。
     */
    public static distance(value1: Vector3, value2: Vector3): number;
    public static distance(...params: any): any {
        Vector3.distance = overload()
            .add([Vector3, Vector3], function (value1, value2) {
                const x1 = value1.#x, y1 = value1.#y, z1 = value1.#z;
                const x2 = value2.#x, y2 = value2.#y, z2 = value2.#z;
                return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);
            })

        return Vector3.distance.apply(this, params);
    }

    /**
     * 计算两个平方矢量之间的距离。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 两个平方矢量之间的距离。
     */
    public static distanceSquared(value1: Vector3, value2: Vector3): number;
    public static distanceSquared(...params: any): any {
        Vector3.distanceSquared = overload()
            .add([Vector3, Vector3], function (value1, value2) {
                const x1 = value1.#x, y1 = value1.#y, z1 = value1.#z;
                const x2 = value2.#x, y2 = value2.#y, z2 = value2.#z;
                return (x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2;
            });

        return Vector3.distanceSquared.apply(this, params);
    }

    /**
     * 用一个矢量除以一个标量值。
     * @param value1 源矢量。
     * @param value2 除数。
     * @returns 结果矢量。
     */
    public static divide(value1: Vector3, value2: number): Vector3;
    /**
     * 用一个矢量除以一个标量值。
     * @param value1 源矢量。
     * @param value2 除数。
     * @param result [OutAttribute] 相除结果。
     */
    public static divide(value1: Vector3, value2: number, result: Vector3): void;
    /**
     * 用一个矢量的组件除以另一个矢量的组件。
     * @param value1 源矢量。
     * @param value2 除数矢量。
     * @returns 结果矢量。
     */
    public static divide(value1: Vector3, value2: Vector3): Vector3;
    /**
     * 用一个矢量的组件除以另一个矢量的组件。
     * @param value1 源矢量。
     * @param value2 除数。
     * @param result [OutAttribute] 相除结果。
     */
    public static divide(value1: Vector3, value2: Vector3, result: Vector3): void;
    public static divide(...params: any): any {
        Vector3.divide = overload()
            .add([Vector3, Number], function (value1, value2) {
                const factor = 1 / value2;
                return new Vector3(
                    value1.#x * factor,
                    value1.#y * factor,
                    value1.#z * factor
                );
            })
            .add([Vector3, Number, Vector3], function (value1, value2, result) {
                const factor = 1 / value2;
                result.#x = value1.#x * factor;
                result.#y = value1.#y * factor;
                result.#z = value1.#z * factor;
            })
            .add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    value1.#x / value2.#x,
                    value1.#y / value2.#y,
                    value1.#z / value2.#z
                );
            })
            .add([Vector3, Vector3, Vector3], function (value1, value2, result) {
                result.#x = value1.#x / value2.#x;
                result.#y = value1.#y / value2.#y;
                result.#z = value1.#z / value2.#z;
            });

        return Vector3.divide.apply(this, params);
    }

    /**
     * 计算两个矢量的点积。如果两个矢量均为单位矢量，则点积返回 -1 到 1 之间的浮点值，该值可以用来确定两个矢量之间的角度的一些性质。例如，它可以显示这些矢量是正交、平行，还是互为锐角或钝角。
     * @param vector1 源矢量。
     * @param vector2 源矢量。
     * @returns 点积。
     */
    public static dot(vector1: Vector3, vector2: Vector3): number;
    public static dot(...params: any): any {
        Vector3.dot = overload()
            .add([Vector3, Vector3], function (vector1, vector2) {
                const x1 = vector1.#x, y1 = vector1.#y, z1 = vector1.#z;
                const x2 = vector2.#x, y2 = vector2.#y, z2 = vector2.#z;
                return x1 * x2 + y1 * y2 + z1 * z2;
            });

        return Vector3.dot.apply(this, params);
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
        value1: Vector3,
        tangent1: Vector3,
        value2: Vector3,
        tangent2: Vector3,
        amount: number
    ): Vector3;
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
        value1: Vector3,
        tangent1: Vector3,
        value2: Vector3,
        tangent2: Vector3,
        amount: number,
        result: Vector3
    ): void;
    public static hermite(...params: any): any {
        Vector3.hermite = overload()
            .add([Vector3, Vector3, Vector3, Vector3, Number], function (value1, tangent1, value2, tangent2, amount) {
                return new Vector3(
                    MathHelper.hermite(value1.#x, tangent1.#x, value2.#x, tangent2.#x, amount),
                    MathHelper.hermite(value1.#y, tangent1.#y, value2.#y, tangent2.#y, amount),
                    MathHelper.hermite(value1.#z, tangent1.#z, value2.#z, tangent2.#z, amount)
                );
            })
            .add([Vector3, Vector3, Vector3, Vector3, Number, Vector3], function (value1, tangent1, value2, tangent2, amount, result) {
                result.#x = MathHelper.hermite(value1.#x, tangent1.#x, value2.#x, tangent2.#x, amount);
                result.#y = MathHelper.hermite(value1.#y, tangent1.#y, value2.#y, tangent2.#y, amount);
                result.#z = MathHelper.hermite(value1.#z, tangent1.#z, value2.#z, tangent2.#z, amount);
            });

        return Vector3.hermite.apply(this, params);
    }

    /**
     * 在两个矢量之间执行线性插值。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param amount 指示 value2 权重的 0 到 1 之间的值。
     * @returns 插值结果。
     */
    public static lerp(value1: Vector3, value2: Vector3, amount: number): Vector3;
    /**
     * 在两个矢量之间执行线性插值。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param amount 指示 value2 权重的 0 到 1 之间的值。
     * @param result [OutAttribute] 插值的结果。
     */
    public static lerp(value1: Vector3, value2: Vector3, amount: number, result: Vector3): void;
    public static lerp(...params: any): any {
        Vector3.lerp = overload()
            .add([Vector3, Vector3, Number], function (value1, value2, amount) {
                return new Vector3(
                    MathHelper.lerp(value1.#x, value2.#x, amount),
                    MathHelper.lerp(value1.#y, value2.#y, amount),
                    MathHelper.lerp(value1.#z, value2.#z, amount)
                );
            })
            .add([Vector3, Vector3, Number, Vector3], function (value1, value2, amount, result) {
                result.#x = MathHelper.lerp(value1.#x, value2.#x, amount);
                result.#y = MathHelper.lerp(value1.#y, value2.#y, amount);
                result.#z = MathHelper.lerp(value1.#z, value2.#z, amount);
            });

        return Vector3.lerp.apply(this, params);
    }

    /**
     * 从每个匹配的组件对中返回包含最大值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    public static max(value1: Vector3, value2: Vector3): Vector3;
    /**
     * 从每个匹配的组件对中返回包含最大值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 最大化的矢量。
     */
    public static max(value1: Vector3, value2: Vector3, result: Vector3): void;
    public static max(...params: any): any {
        Vector3.max = overload()
            .add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    Math.max(value1.#x, value2.#x),
                    Math.max(value1.#y, value2.#y),
                    Math.max(value1.#z, value2.#z)
                );
            })
            .add([Vector3, Vector3, Vector3], function (value1, value2, result) {
                result.#x = Math.max(value1.#x, value2.#x);
                result.#y = Math.max(value1.#y, value2.#y);
                result.#z = Math.max(value1.#z, value2.#z);
            });

        return Vector3.max.apply(this, params);
    }

    /**
     * 从每个匹配的组件对中返回包含最小值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    public static min(value1: Vector3, value2: Vector3): Vector3;
    /**
     * 从每个匹配的组件对中返回包含最小值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 最小化的矢量。
     */
    public static min(value1: Vector3, value2: Vector3, result: Vector3): void;
    public static min(...params: any): any {
        Vector3.min = overload()
            .add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    Math.min(value1.#x, value2.#x),
                    Math.min(value1.#y, value2.#y),
                    Math.min(value1.#z, value2.#z)
                );
            })
            .add([Vector3, Vector3, Vector3], function (value1, value2, result) {
                result.#x = Math.min(value1.#x, value2.#x);
                result.#y = Math.min(value1.#y, value2.#y);
                result.#z = Math.min(value1.#z, value2.#z);
            });

        return Vector3.min.apply(this, params);
    }

    /**
     * 将一个矢量乘以一个标量值。
     * @param value1 源矢量。
     * @param scaleFactor 标量值。
     * @returns 结果矢量。
     */
    public static multiply(value1: Vector3, scaleFactor: number): Vector3;
    /**
     * 将一个矢量乘以一个标量值。
     * @param value1 源矢量。
     * @param scaleFactor 标量值。
     * @param result [OutAttribute] 相乘的结果。
     */
    public static multiply(value1: Vector3, scaleFactor: number, result: Vector3): void;
    /**
     * 将两个矢量的组件彼此相乘。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    public static multiply(value1: Vector3, value2: Vector3): Vector3;
    /**
     * 将两个矢量的组件彼此相乘。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 相乘的结果。
     */
    public static multiply(value1: Vector3, value2: Vector3, result: Vector3): void;
    public static multiply(...params: any): any {
        Vector3.multiply = overload()
            .add([Vector3, Number], function (value1, value2) {
                return new Vector3(
                    value1.#x * value2,
                    value1.#y * value2,
                    value1.#z * value2
                );
            })
            .add([Vector3, Number, Vector3], function (value1, value2, result) {
                result.#x = value1.#x * value2;
                result.#y = value1.#y * value2;
                result.#z = value1.#z * value2;
            })
            .add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    value1.#x * value2.#x,
                    value1.#y * value2.#y,
                    value1.#z * value2.#z
                );
            })
            .add([Vector3, Vector3, Vector3], function (value1, value2, result) {
                result.#x = value1.#x * value2.#x;
                result.#y = value1.#y * value2.#y;
                result.#z = value1.#z * value2.#z;
            });

        return Vector3.multiply.apply(this, params);
    }

    /**
     * 返回指向反方向的矢量。
     * @param value 源矢量。
     * @returns 结果矢量。
     */
    public static negate(value: Vector3): Vector3;
    /**
     * 返回指向反方向的矢量。
     * @param value 源矢量。
     * @param result [OutAttribute] 指向反方向的矢量。
     */
    public static negate(value: Vector3, result: Vector3): void;
    public static negate(...params: any): any {
        Vector3.negate = overload()
            .add([Vector3], function (value) {
                return new Vector3(-value.#x, -value.#y, -value.#z);
            })
            .add([Vector3, Vector3], function (value, result) {
                result.#x = -value.#x;
                result.#y = -value.#y;
                result.#z = -value.#z;
            });

        return Vector3.negate.apply(this, params);
    }

    /**
     * 根据指定的矢量创建单位矢量。结果是与原始矢量相同方向的长度矢量单位。
     * @param value 源 Vector3。
     * @returns 结果矢量。
     */
    public static normalize(value: Vector3): Vector3;
    /**
     * 根据指定的矢量创建单位矢量，将结果写入到用户指定的变量中。结果是与原始矢量相同方向的长度矢量单位。
     * @param value 源矢量。
     * @param result [OutAttribute] 法线化的矢量。
     */
    public static normalize(value: Vector3, result: Vector3): void;
    public static normalize(...params: any): any {
        Vector3.normalize = overload()
            .add([Vector3], function (value) {
                const factor = 1 / Math.sqrt(value.#x ** 2 + value.#y ** 2 + value.#z ** 2);
                return new Vector3(value.#x * factor, value.#y * factor, value.#z * factor);
            })
            .add([Vector3, Vector3], function (value, result) {
                const factor = 1 / Math.sqrt(value.#x ** 2 + value.#y ** 2 + value.#z ** 2);
                result.#x = value.#x * factor;
                result.#y = value.#y * factor;
                result.#z = value.#z * factor;
            });

        return Vector3.normalize.apply(this, params);
    }

    /**
     * 返回具有指定法线的表面的矢量反射。
     * @param vector 源矢量。
     * @param normal 表面的法线。
     * @returns 结果矢量。
     */
    public static reflect(vector: Vector3, normal: Vector3): Vector3;
    /**
     * 返回具有指定法线的表面的矢量反射。
     * @param vector 源矢量。
     * @param normal 表面的法线。
     * @param result [OutAttribute] 反射的矢量。
     */
    public static reflect(vector: Vector3, normal: Vector3, result: Vector3): void;
    public static reflect(...params: any): any {
        Vector3.reflect = overload()
            .add([Vector3, Vector3], function (vector, normal) {
                const dotProduct = (vector.#x * normal.#x) + (vector.#y * normal.#y) + (vector.#z * normal.#z);
                const factor = 2.0 * dotProduct;
                return new Vector3(
                    vector.#x - normal.#x * factor,
                    vector.#y - normal.#y * factor,
                    vector.#z - normal.#z * factor
                );
            })
            .add([Vector3, Vector3, Vector3], function (vector, normal, result) {
                const dotProduct = (vector.#x * normal.#x) + (vector.#y * normal.#y) + (vector.#z * normal.#z);
                const factor = 2.0 * dotProduct;
                result.#x = vector.#x - normal.#x * factor;
                result.#y = vector.#y - normal.#y * factor;
                result.#z = vector.#z - normal.#z * factor;
            });

        return Vector3.reflect.apply(this, params);
    }

    /**
     * 使用三次方程计算两个值之间的插值。
     * @param value1 源值。
     * @param value2 源值。
     * @param amount 权重值。
     * @returns 插值结果。
     */
    public static smoothStep(value1: Vector3, value2: Vector3, amount: number): Vector3;
    /**
     * 使用三次方程计算两个值之间的插值。
     * @param value1 源值。
     * @param value2 源值。
     * @param amount 权重值。
     * @param result [OutAttribute] 插入值。
     */
    public static smoothStep(value1: Vector3, value2: Vector3, amount: number, result: Vector3): void;
    public static smoothStep(...params: any): any {
        Vector3.smoothStep = overload()
            .add([Vector3, Vector3, Number], function (value1, value2, amount) {
                return new Vector3(
                    MathHelper.smoothStep(value1.#x, value2.#x, amount),
                    MathHelper.smoothStep(value1.#y, value2.#y, amount),
                    MathHelper.smoothStep(value1.#z, value2.#z, amount)
                );
            })
            .add([Vector3, Vector3, Number, Vector3], function (value1, value2, amount, result) {
                result.#x = MathHelper.smoothStep(value1.#x, value2.#x, amount);
                result.#y = MathHelper.smoothStep(value1.#y, value2.#y, amount);
                result.#z = MathHelper.smoothStep(value1.#z, value2.#z, amount);
            });

        return Vector3.smoothStep.apply(this, params);
    }

    /**
     * 将一个矢量减去一个矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    public static subtract(value1: Vector3, value2: Vector3): Vector3;
    /**
     * 将一个矢量减去一个矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 相减结果。
     */
    public static subtract(value1: Vector3, value2: Vector3, result: Vector3): void;
    public static subtract(...params: any): any {
        Vector3.subtract = overload()
            .add([Vector3, Vector3], function (value1, value2) {
                return new Vector3(
                    value1.#x - value2.#x,
                    value1.#y - value2.#y,
                    value1.#z - value2.#z
                );
            })
            .add([Vector3, Vector3, Vector3], function (value1, value2, result) {
                result.#x = value1.#x - value2.#x;
                result.#y = value1.#y - value2.#y;
                result.#z = value1.#z - value2.#z;
            });

        return Vector3.subtract.apply(this, params);
    }

    /**
     * 通过给定矩阵变换 3D 矢量。
     * @param position 源矢量。
     * @param matrix 变换矩阵。
     * @returns 结果矢量。
     */
    public static transform(position: Vector3, matrix: Matrix): Vector3;
    /**
     * 通过给定 Matrix 变换 Vector3。
     * @param position 源 Vector3。
     * @param matrix 变换 Matrix。
     * @param result [OutAttribute] 变换的矢量。
     */
    public static transform(position: Vector3, matrix: Matrix, result: Vector3): void;
    /**
     * 通过指定 Quaternion 旋转变换 Vector3。
     * @param value 要旋转的 Vector3。
     * @param rotation 要应用的 Quaternion 旋转。
     * @returns 结果矢量。
     */
    public static transform(value: Vector3, rotation: Quaternion): Vector3;
    /**
     * 通过指定 Quaternion 旋转变换 Vector3。
     * @param value 要旋转的 Vector3。
     * @param rotation 要应用的 Quaternion 旋转。
     * @param result [OutAttribute] 使用旋转结果进行填充的现有 Vector3。
     */
    public static transform(value: Vector3, rotation: Quaternion, result: Vector3): void;
    /**
     * 将指定变换 Matrix 应用到 Vector3 数组的指定范围，并将结果写入到目标数组的指定范围。
     * @param sourceArray 源数组。
     * @param sourceIndex 要启动的源数组中的索引。
     * @param matrix 要应用的变换 Matrix。
     * @param destinationArray 现有目标数组。
     * @param destinationIndex 要启动的目标数组中的索引。
     * @param length 要变换的 Vector3 数量。
     */
    public static transform(
        sourceArray: List<Vector3>,
        sourceIndex: number,
        matrix: Matrix,
        destinationArray: List<Vector3>,
        destinationIndex: number,
        length: number
    ): void;
    /**
     * 将指定 Quaternion 旋转应用到 Vector3 数组的指定范围，并将结果写入到目标数组的指定范围。
     * @param sourceArray 源数组。
     * @param sourceIndex 要启动的源数组中的索引。
     * @param rotation 要应用的 Quaternion 旋转。
     * @param destinationArray 现有目标数组。
     * @param destinationIndex 要启动的目标数组中的索引。
     * @param length 要变换的 Vector3 数量。
     */
    public static transform(
        sourceArray: List<Vector3>,
        sourceIndex: number,
        rotation: Quaternion,
        destinationArray: List<Vector3>,
        destinationIndex: number,
        length: number
    ): void;
    /**
     * 通过指定 Matrix 变换 Vector3 的源数组，并将结果写入现有的目标数组。
     * @param sourceArray 源数组。
     * @param matrix 要应用的变换 Matrix。
     * @param destinationArray 变换后的 Vector3 被写入的现有目标数组。
     */
    public static transform(
        sourceArray: List<Vector3>,
        matrix: Matrix,
        destinationArray: List<Vector3>
    ): void;
    /**
     * 通过指定 Quaternion 旋转变换 Vector3 的源数组，并将结果写入现有的目标数组。
     * @param sourceArray 源数组。
     * @param rotation 要应用的 Quaternion 旋转。
     * @param destinationArray 变换后的 Vector3 被写入的现有目标数组。
     */
    public static transform(
        sourceArray: List<Vector3>,
        rotation: Quaternion,
        destinationArray: List<Vector3>
    ): void;
    public static transform(...params: any): any {
        Vector3.transform = overload()
            .add([Vector3, Matrix], function (position, matrix) {
                const px = position.#x, py = position.#y, pz = position.#z;
                const x = (px * matrix.m11) + (py * matrix.m21) + (pz * matrix.m31) + matrix.m41;
                const y = (px * matrix.m12) + (py * matrix.m22) + (pz * matrix.m32) + matrix.m42;
                const z = (px * matrix.m13) + (py * matrix.m23) + (pz * matrix.m33) + matrix.m43;

                return new Vector3(x, y, z);
            })
            .add([Vector3, Matrix, Vector3], function (position, matrix, result) {
                const px = position.#x, py = position.#y, pz = position.#z;
                result.#x = (px * matrix.m11) + (py * matrix.m21) + (pz * matrix.m31) + matrix.m41;
                result.#y = (px * matrix.m12) + (py * matrix.m22) + (pz * matrix.m32) + matrix.m42;
                result.#z = (px * matrix.m13) + (py * matrix.m23) + (pz * matrix.m33) + matrix.m43;
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
            .add([Vector3, Quaternion, Vector3], function (value, rotation, result) {
                const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
                const vx = value.#x, vy = value.#y, vz = value.#z;

                const x = 2 * (ry * vz - rz * vy);
                const y = 2 * (rz * vx - rx * vz);
                const z = 2 * (rx * vy - ry * vx);

                result.#x = vx + x * rw + (ry * z - rz * y);
                result.#y = vy + y * rw + (rz * x - rx * z);
                result.#z = vz + z * rw + (rx * y - ry * x);
            })
            .add([List.T(Vector3), Number, Matrix, List.T(Vector3), Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new RangeError(`sourceArray 的长度小于 sourceIndex + length。`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError(`destinationArray 的长度小于 destinationIndex + length。`);
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
                    throw new RangeError(`sourceArray 的长度小于 sourceIndex + length。`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError(`destinationArray 的长度小于 destinationIndex + length。`);
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
                Vector3.transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
            })
            .add([List.T(Vector3), Quaternion, List.T(Vector3)], function (sourceArray, rotation, destinationArray) {
                Vector3.transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.length);
            });

        return Vector3.transform.apply(this, params);
    }

    /**
     * 通过矩阵变换 3D 矢量法线。
     * @param normal 源矢量。
     * @param matrix 变换矩阵。
     * @returns 变换后的矢量。
     */
    public static transformNormal(normal: Vector3, matrix: Matrix): Vector3;
    /**
     * 通过矩阵变换矢量法线。
     * @param normal 源矢量。
     * @param matrix 变换 Matrix。
     * @param result [OutAttribute] 通过变换得到的 Vector3。
     */
    public static transformNormal(normal: Vector3, matrix: Matrix, result: Vector3): void;
    /**
     * 通过指定 Matrix 变换 3D 矢量法线数组中的指定范围，并将结果写入目标数组的指定范围内。
     * @param sourceArray Vector3 法线的源数组。
     * @param sourceIndex 源数组中的起始索引。
     * @param matrix 要应用的变换 Matrix。
     * @param destinationArray 目标 Vector3 数组。
     * @param destinationIndex 目标数组中的起始索引。
     * @param length 要变换的矢量的数量。
     */
    public static transformNormal(
        sourceArray: List<Vector3>,
        sourceIndex: number,
        matrix: Matrix,
        destinationArray: List<Vector3>,
        destinationIndex: number,
        length: number
    ): void;
    /**
     * 通过指定 Matrix 变换 3D 矢量法线数组。
     * @param sourceArray 要变换的 Vector3 法线数组。
     * @param matrix 要应用的变换矩阵。
     * @param destinationArray 要将变换结果写入到的现有 Vector3 数组。
     */
    public static transformNormal(
        sourceArray: List<Vector3>,
        matrix: Matrix,
        destinationArray: List<Vector3>
    ): void;
    public static transformNormal(...params: any): any {
        Vector3.transformNormal = overload()
            .add([Vector3, Matrix], function (normal, matrix) {
                const nx = normal.#x, ny = normal.#y, nz = normal.#z;

                const x = (nx * matrix.m11) + (ny * matrix.m21) + (nz * matrix.m31);
                const y = (nx * matrix.m12) + (ny * matrix.m22) + (nz * matrix.m32);
                const z = (nx * matrix.m13) + (ny * matrix.m23) + (nz * matrix.m33);

                return new Vector3(x, y, z);
            })
            .add([Vector3, Matrix, Vector3], function (normal, matrix, result) {
                const nx = normal.#x, ny = normal.#y, nz = normal.#z;

                result.#x = (nx * matrix.m11) + (ny * matrix.m21) + (nz * matrix.m31);
                result.#y = (nx * matrix.m12) + (ny * matrix.m22) + (nz * matrix.m32);
                result.#z = (nx * matrix.m13) + (ny * matrix.m23) + (nz * matrix.m33);
            })
            .add([List.T(Vector3), Number, Matrix, List.T(Vector3), Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new RangeError(`sourceArray 的长度小于 sourceIndex + length。`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError(`destinationArray 的长度小于 destinationIndex + length。`);
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
                Vector3.transformNormal(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
            });

        return Vector3.transformNormal.apply(this, params);
    }

    /**
     * 对传入的 Vector3 取反。
     * @param other 用于取反的 Vector3。
     * @returns 取反后的 Vector3。
     */
    public static ["-"](other: Vector3): Vector3;
    public static ["-"](...params: any): any {
        Vector3["-"] = overload([Vector3], function (other) {
            return Vector3.negate(other);
        });

        return Vector3["-"].apply(this, params);
    }

    /**
     * 将当前 Vector3 与另一个 Vector3 相加。
     * @param other 用于相加的 Vector3。
     * @returns 相加后的 Vector3。
     */
    public ["+"](other: Vector3): Vector3;
    public ["+"](...params: any): any {
        Vector3.prototype["+"] = overload([Vector3], function (this: Vector3, other) {
            return Vector3.add(this, other);
        });

        return Vector3.prototype["+"].apply(this, params);
    }

    /**
     * 将当前 Vector3 与另一个 Vector3 相减。
     * @param other 用于相减的 Vector3。
     * @returns 相减后的 Vector3。
     */
    public ["-"](other: Vector3): Vector3;
    public ["-"](...params: any): any {
        Vector3.prototype["-"] = overload([Vector3], function (this: Vector3, other) {
            return Vector3.subtract(this, other);
        });

        return Vector3.prototype["-"].apply(this, params);
    }

    /**
     * 将当前 Vector3 与另一个 Vector3 相乘。
     * @param other 用于相乘的 Vector3。
     * @returns 相乘后的 Vector3。
     */
    public ["*"](other: Vector3): Vector3;
    public ["*"](...params: any): any {
        Vector3.prototype["*"] = overload([Vector3], function (this: Vector3, other) {
            return Vector3.multiply(this, other);
        });

        return Vector3.prototype["*"].apply(this, params);
    }

    /**
     * 将当前 Vector3 与另一个 Vector3 相除。
     * @param other 用于相除的 Vector3。
     * @returns 相除后的 Vector3。
     */
    public ["/"](other: Vector3): Vector3;
    public ["/"](...params: any): any {
        Vector3.prototype["/"] = overload([Vector3], function (this: Vector3, other) {
            return Vector3.divide(this, other);
        });

        return Vector3.prototype["/"].apply(this, params);
    }

    /**
     * 确定指定的 Vector3 是否等于当前 Vector3。
     * @param other 用于与当前 Vector3 比较的 Vector3。
     * @returns 是否相等。
     */
    public ["=="](other: Vector3): boolean;
    public ["=="](...params: any): any {
        Vector3.prototype["=="] = overload([Vector3], function (this: Vector3, other) {
            return this.equals(other);
        });

        return Vector3.prototype["=="].apply(this, params);
    }

    /**
     * 确定指定的 Vector3 是否不等于当前 Vector3。
     * @param other 用于与当前 Vector3 比较的 Vector3。
     * @returns 是否不相等。
     */
    public ["!="](other: Vector3): boolean;
    public ["!="](...params: any): any {
        Vector3.prototype["!="] = overload([Vector3], function (this: Vector3, other) {
            return !this.equals(other);
        });

        return Vector3.prototype["!="].apply(this, params);
    }

    /**
     * 确定指定的 Vector3 是否等于当前 Vector3。
     * @param other 用于与当前 Vector3 比较的 Vector3。
     * @returns 是否相等。
     */
    public equals(other: Vector3): boolean;
    public equals(...params: any): any {
        Vector3.prototype.equals = overload([Vector3], function (this: Vector3, other) {
            return this.#x === other.#x && this.#y === other.#y && this.#z === other.#z;
        }).any(() => false);

        return Vector3.prototype.equals.apply(this, params);
    }

    /**
     * 计算矢量的长度。
     * @returns 矢量的长度。
     */
    public length(): number;
    public length(...params: any): any {
        Vector3.prototype.length = overload([], function (this: Vector3) {
            return Math.sqrt(this.#x ** 2 + this.#y ** 2 + this.#z ** 2);
        });

        return Vector3.prototype.length.apply(this, params);
    }

    /**
     * 计算平方矢量的长度。
     * @returns 平方矢量的长度。
     */
    public lengthSquared(): number;
    public lengthSquared(...params: any): any {
        Vector3.prototype.lengthSquared = overload([], function (this: Vector3) {
            return this.#x ** 2 + this.#y ** 2 + this.#z ** 2;
        });

        return Vector3.prototype.lengthSquared.apply(this, params);
    }

    /**
     * 将当前矢量转为单位矢量。结果是与原始矢量相同方向的长度矢量单位。
     */
    public normalize(): void;
    public normalize(...params: any): any {
        Vector3.prototype.normalize = overload([], function (this: Vector3) {
            const factor = 1 / Math.sqrt(this.#x ** 2 + this.#y ** 2 + this.#z ** 2);
            this.#x *= factor;
            this.#y *= factor;
            this.#z *= factor;
        });

        return Vector3.prototype.normalize.apply(this, params);
    }

    /**
     * 检索当前对象的字符串呈现。
     * @returns 当前对象的字符串呈现。
     */
    public toString(): string;
    public toString(...params: any): any {
        Vector3.prototype.toString = overload([], function (this: Vector3) {
            return JSON.stringify(this);
        });

        return Vector3.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 Vector3 的 JSON 表示形式。
     * @returns 当前 Vector3 的 JSON 表示形式。
     */
    public toJSON(): object {
        return { x: this.#x, y: this.#y, z: this.#z };
    }
}
