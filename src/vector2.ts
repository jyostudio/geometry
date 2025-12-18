import List from "@jyostudio/list";
import overload from "@jyostudio/overload";
import { checkSetterType } from "@jyostudio/overload/dist/decorator";
import MathHelper from "./math-helper";
import Matrix from "./matrix";
import Quaternion from "./quaternion";
import Vector3 from "./vector3";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 定义具有两个组件的矢量。
 * @class
 */
export default class Vector2 {
    /**
     * 返回两个组件均设置为一的 Vector2。
     */
    public static get one(): Vector2 {
        return new Vector2(1, 1);
    }

    /**
     * 返回 x 轴的单位矢量。
     */
    public static get unitX(): Vector2 {
        return new Vector2(1, 0);
    }

    /**
     * 返回 y 轴的单位矢量。
     */
    public static get unitY(): Vector2 {
        return new Vector2(0, 1);
    }

    /**
     * 返回所有组件均设置为零的 Vector2。
     */
    public static get zero(): Vector2 {
        return new Vector2(0, 0);
    }

    /**
     * 矢量的 x 值。
     */
    #x = 0;

    /**
     * 获取矢量的 x 值。
     */
    public get x(): number {
        return this.#x;
    }

    /**
     * 设置矢量的 x 值。
     */
    @checkSetterType(Number)
    public set x(value: number) {
        this.#x = value;
    }

    /**
     * 矢量的 y 值。
     */
    #y = 0;

    /**
     * 获取矢量的 y 值。
     */
    public get y(): number {
        return this.#y;
    }

    /**
     * 设置矢量的 y 值。
     */
    @checkSetterType(Number)
    public set y(value: number) {
        this.#y = value;
    }

    /**
     * 新建一个空的 Vector2 实例。
     */
    constructor();
    /**
     * 新建 Vector2 实例。
     */
    constructor(value: number);
    /**
     * 初始化新的 Vector2 实例。
     * @param x 矢量 x 的初始值。
     * @param y 矢量 y 的初始值。
     */
    constructor(x: number, y: number);
    constructor(...params: any) {
        Vector2[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    /**
     * 结构化构造函数。
     * @returns Vector2 实例。
     */
    public static ["##STRUCT_CONSTRUCTOR##"](): Vector2 {
        return Vector2.zero;
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        Vector2[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number], function (this: Vector2, value) {
                this.#x = value;
                this.#y = value;
            })
            .add([Number, Number], function (this: Vector2, x, y) {
                this.#x = x;
                this.#y = y;
            });

        return Vector2[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    public *[Symbol.iterator](): IterableIterator<number> {
        yield this.#x;
        yield this.#y;
    }

    /**
     * 将两个矢量相加。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 相加后的矢量。
     */
    public static add(value1: Vector2, value2: Vector2): Vector2;
    /**
     * 将两个矢量相加。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 源矢量之和。
     */
    public static add(value1: Vector2, value2: Vector2, result: Vector2): void;
    public static add(...params: any): any {
        Vector2.add = overload()
            .add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.#x + value2.#x,
                    value1.#y + value2.#y
                );
            })
            .add([Vector2, Vector2, Vector2], function (value1, value2, result) {
                result.#x = value1.#x + value2.#x;
                result.#y = value1.#y + value2.#y;
            });

        return Vector2.add.apply(this, params);
    }

    /**
     * 返回一个相对于 2D 三角形的质心（重心）坐标中某指定点的 2D Cartesian 坐标所在的 Vector2。
     * @param value1 包含三角形顶点 1 的 2D Cartesian 坐标的 Vector2。
     * @param value2 包含三角形顶点 2 的 2D Cartesian 坐标的 Vector2。
     * @param value3 包含三角形顶点 3 的 2D Cartesian 坐标的 Vector2。
     * @param amount1 质心坐标 b2，用于表达趋向顶点 2 的权重因子（在 value2 中指定）。
     * @param amount2 质心坐标 b3，用于表达趋向顶点 3 的权重因子（在 value3 中指定）。
     * @returns 相对于 2D 三角形的质心（重心）坐标中某指定点的 2D Cartesian 坐标所在的 Vector2。
     */
    public static barycentric(
        value1: Vector2,
        value2: Vector2,
        value3: Vector2,
        amount1: number,
        amount2: number
    ): Vector2;
    /**
     * 返回一个相对于 2D 三角形的质心（重心）坐标中某指定点的 2D Cartesian 坐标所在的 Vector2。
     * @param value1 包含三角形顶点 1 的 2D Cartesian 坐标的 Vector2。
     * @param value2 包含三角形顶点 2 的 2D Cartesian 坐标的 Vector2。
     * @param value3 包含三角形顶点 3 的 2D Cartesian 坐标的 Vector2。
     * @param amount1 质心坐标 b2，用于表达趋向顶点 2 的权重因子（在 value2 中指定）。
     * @param amount2 质心坐标 b3，用于表达趋向顶点 3 的权重因子（在 value3 中指定）。
     * @param result [OutAttribute] 在退出时，指定点的 2D Cartesian 坐标放置在该 Vector2 中。
     */
    public static barycentric(
        value1: Vector2,
        value2: Vector2,
        value3: Vector2,
        amount1: number,
        amount2: number,
        result: Vector2
    ): void;
    public static barycentric(...params: any): any {
        Vector2.barycentric = overload()
            .add([Vector2, Vector2, Vector2, Number, Number], function (value1, value2, value3, amount1, amount2) {
                return new Vector2(
                    MathHelper.barycentric(value1.#x, value2.#x, value3.#x, amount1, amount2),
                    MathHelper.barycentric(value1.#y, value2.#y, value3.#y, amount1, amount2)
                );
            })
            .add([Vector2, Vector2, Vector2, Number, Number, Vector2], function (value1, value2, value3, amount1, amount2, result) {
                result.#x = MathHelper.barycentric(value1.#x, value2.#x, value3.#x, amount1, amount2);
                result.#y = MathHelper.barycentric(value1.#y, value2.#y, value3.#y, amount1, amount2);
            });

        return Vector2.barycentric.apply(this, params);
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
        value1: Vector2,
        value2: Vector2,
        value3: Vector2,
        value4: Vector2,
        amount: number
    ): Vector2;
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
        value1: Vector2,
        value2: Vector2,
        value3: Vector2,
        value4: Vector2,
        amount: number,
        result: Vector2
    ): void;
    public static catmullRom(...params: any): any {
        Vector2.catmullRom = overload()
            .add([Vector2, Vector2, Vector2, Vector2, Number], function (value1, value2, value3, value4, amount) {
                return new Vector2(
                    MathHelper.catmullRom(value1.#x, value2.#x, value3.#x, value4.#x, amount),
                    MathHelper.catmullRom(value1.#y, value2.#y, value3.#y, value4.#y, amount)
                );
            })
            .add([Vector2, Vector2, Vector2, Vector2, Number, Vector2], function (value1, value2, value3, value4, amount, result) {
                result.#x = MathHelper.catmullRom(value1.#x, value2.#x, value3.#x, value4.#x, amount);
                result.#y = MathHelper.catmullRom(value1.#y, value2.#y, value3.#y, value4.#y, amount);
            });

        return Vector2.catmullRom.apply(this, params);
    }

    /**
     * 将值限制在指定范围内。
     * @param value1 要限制的值。
     * @param min 最小值。
     * @param max 最大值。
     * @returns 限制后的值。
     */
    public static clamp(value1: Vector2, min: Vector2, max: Vector2): Vector2;
    /**
     * 将值限制在指定范围内。
     * @param value1 要限制的值。
     * @param min 最小值。
     * @param max 最大值。
     * @param result [OutAttribute] 限制的值。
     */
    public static clamp(value1: Vector2, min: Vector2, max: Vector2, result: Vector2): void;
    public static clamp(...params: any): any {
        Vector2.clamp = overload()
            .add([Vector2, Vector2, Vector2], function (value1, min, max) {
                return new Vector2(
                    MathHelper.clamp(value1.#x, min.#x, max.#x),
                    MathHelper.clamp(value1.#y, min.#y, max.#y)
                );
            })
            .add([Vector2, Vector2, Vector2, Vector2], function (value1, min, max, result) {
                result.#x = MathHelper.clamp(value1.#x, min.#x, max.#x);
                result.#y = MathHelper.clamp(value1.#y, min.#y, max.#y);
            });

        return Vector2.clamp.apply(this, params);
    }

    /**
     * 计算两个矢量的叉积。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 两个矢量的叉积。
     */
    public static cross(value1: Vector2, value2: Vector2): number;
    public static cross(...params: any): any {
        Vector2.cross = overload()
            .add([Vector2, Vector2], function (value1, value2) {
                return (value1.#x * value2.#y) - (value1.#y * value2.#x);
            });

        return Vector2.cross.apply(this, params);
    }

    /**
     * 计算两个矢量之间的距离。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 两个矢量之间的距离。
     */
    public static distance(value1: Vector2, value2: Vector2): number;
    public static distance(...params: any): any {
        Vector2.distance = overload()
            .add([Vector2, Vector2], function (value1, value2) {
                const v1 = value1.#x - value2.#x;
                const v2 = value1.#y - value2.#y;
                return Math.sqrt((v1 * v1) + (v2 * v2));
            });

        return Vector2.distance.apply(this, params);
    }

    /**
     * 计算两个平方矢量之间的距离。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 两个平方矢量之间的距离。
     */
    public static distanceSquared(value1: Vector2, value2: Vector2): number;
    public static distanceSquared(...params: any): any {
        Vector2.distanceSquared = overload()
            .add([Vector2, Vector2], function (value1, value2) {
                const v1 = value1.#x - value2.#x;
                const v2 = value1.#y - value2.#y;
                return (v1 * v1) + (v2 * v2);
            });

        return Vector2.distanceSquared.apply(this, params);
    }

    /**
     * 用一个矢量除以一个标量值。
     * @param value1 源矢量。
     * @param divider 除数。
     * @returns 结果矢量。
     */
    public static divide(value1: Vector2, divider: number): Vector2;
    /**
     * 用一个矢量除以一个标量值。
     * @param value1 源矢量。
     * @param divider 除数。
     * @param result [OutAttribute] 相除结果。
     */
    public static divide(value1: Vector2, divider: number, result: Vector2): void;
    /**
     * 用一个矢量的组件除以另一个矢量的组件。
     * @param value1 源矢量。
     * @param value2 除数矢量。
     * @returns 结果矢量。
     */
    public static divide(value1: Vector2, value2: Vector2): Vector2;
    /**
     * 用一个矢量的组件除以另一个矢量的组件。
     * @param value1 源矢量。
     * @param value2 除数矢量。
     * @param result [OutAttribute] 相除结果。
     */
    public static divide(value1: Vector2, value2: Vector2, result: Vector2): void;
    public static divide(...params: any): any {
        Vector2.divide = overload()
            .add([Vector2, Number], function (value1, divider) {
                const factor = 1 / divider;
                return new Vector2(
                    value1.#x * factor,
                    value1.#y * factor
                );
            })
            .add([Vector2, Number, Vector2], function (value1, divider, result) {
                const factor = 1 / divider;
                result.#x = value1.#x * factor;
                result.#y = value1.#y * factor;
            })
            .add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.#x / value2.#x,
                    value1.#y / value2.#y
                );
            })
            .add([Vector2, Vector2, Vector2], function (value1, value2, result) {
                result.#x = value1.#x / value2.#x;
                result.#y = value1.#y / value2.#y;
            });

        return Vector2.divide.apply(this, params);
    }

    /**
     * 计算两个矢量的点积。如果两个矢量均为单位矢量，则点积返回 -1 到 1 之间的浮点值，该值可以用来确定两个矢量之间的角度的一些性质。例如，它可以显示这些矢量是正交、平行，还是互为锐角或钝角。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 点积。
     */
    public static dot(value1: Vector2, value2: Vector2): number;
    public static dot(...params: any): any {
        Vector2.dot = overload()
            .add([Vector2, Vector2], function (value1, value2) {
                return (value1.#x * value2.#x) + (value1.#y * value2.#y);
            });

        return Vector2.dot.apply(this, params);
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
        value1: Vector2,
        tangent1: Vector2,
        value2: Vector2,
        tangent2: Vector2,
        amount: number
    ): Vector2;
    /**
     * 执行 Hermite 样条插值。
     * @param value1 源位置矢量。
     * @param tangent1 源切线矢量。
     * @param value2 源位置矢量。
     * @param tangent2 源切线矢量。
     * @param amount 权重因子。
     * @param result [OutAttribute] 插值结果。
     */
    public static hermite(
        value1: Vector2,
        tangent1: Vector2,
        value2: Vector2,
        tangent2: Vector2,
        amount: number,
        result: Vector2
    ): void;
    public static hermite(...params: any): any {
        Vector2.hermite = overload()
            .add([Vector2, Vector2, Vector2, Vector2, Number], function (value1, tangent1, value2, tangent2, amount) {
                return new Vector2(
                    MathHelper.hermite(value1.#x, tangent1.#x, value2.#x, tangent2.#x, amount),
                    MathHelper.hermite(value1.#y, tangent1.#y, value2.#y, tangent2.#y, amount)
                );
            })
            .add([Vector2, Vector2, Vector2, Vector2, Number, Vector2], function (value1, tangent1, value2, tangent2, amount, result) {
                result.#x = MathHelper.hermite(value1.#x, tangent1.#x, value2.#x, tangent2.#x, amount);
                result.#y = MathHelper.hermite(value1.#y, tangent1.#y, value2.#y, tangent2.#y, amount);
            });

        return Vector2.hermite.apply(this, params);
    }

    /**
     * 在两个矢量之间执行线性插值。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param amount 指示 value2 权重的 0 到 1 之间的值。
     * @returns 插值结果。
     */
    public static lerp(value1: Vector2, value2: Vector2, amount: number): Vector2;
    /**
     * 在两个矢量之间执行线性插值。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param amount 指示 value2 权重的 0 到 1 之间的值。
     * @param result [OutAttribute] 插值的结果。
     */
    public static lerp(value1: Vector2, value2: Vector2, amount: number, result: Vector2): void;
    public static lerp(...params: any): any {
        Vector2.lerp = overload()
            .add([Vector2, Vector2, Number], function (value1, value2, amount) {
                return new Vector2(
                    MathHelper.lerp(value1.#x, value2.#x, amount),
                    MathHelper.lerp(value1.#y, value2.#y, amount)
                );
            })
            .add([Vector2, Vector2, Number, Vector2], function (value1, value2, amount, result) {
                result.#x = MathHelper.lerp(value1.#x, value2.#x, amount);
                result.#y = MathHelper.lerp(value1.#y, value2.#y, amount);
            });

        return Vector2.lerp.apply(this, params);
    }

    /**
     * 从每个匹配的组件对中返回包含最大值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    public static max(value1: Vector2, value2: Vector2): Vector2;
    /**
     * 从每个匹配的组件对中返回包含最大值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 最大化的矢量。
     */
    public static max(value1: Vector2, value2: Vector2, result: Vector2): void;
    public static max(...params: any): any {
        Vector2.max = overload()
            .add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.#x > value2.#x ? value1.#x : value2.#x,
                    value1.#y > value2.#y ? value1.#y : value2.#y
                );
            })
            .add([Vector2, Vector2, Vector2], function (value1, value2, result) {
                result.#x = value1.#x > value2.#x ? value1.#x : value2.#x;
                result.#y = value1.#y > value2.#y ? value1.#y : value2.#y;
            });

        return Vector2.max.apply(this, params);
    }

    /**
     * 从每个匹配的组件对中返回包含最小值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    public static min(value1: Vector2, value2: Vector2): Vector2;
    /**
     * 从每个匹配的组件对中返回包含最小值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 最小化的矢量。
     */
    public static min(value1: Vector2, value2: Vector2, result: Vector2): void;
    public static min(...params: any): any {
        Vector2.min = overload()
            .add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.#x < value2.#x ? value1.#x : value2.#x,
                    value1.#y < value2.#y ? value1.#y : value2.#y
                );
            })
            .add([Vector2, Vector2, Vector2], function (value1, value2, result) {
                result.#x = value1.#x < value2.#x ? value1.#x : value2.#x;
                result.#y = value1.#y < value2.#y ? value1.#y : value2.#y;
            });

        return Vector2.min.apply(this, params);
    }

    /**
     * 将一个矢量乘以一个标量值。
     * @param value1 源矢量。
     * @param scaleFactor 标量值。
     * @returns 结果矢量。
     */
    public static multiply(value1: Vector2, scaleFactor: number): Vector2;
    /**
     * 将一个矢量乘以一个标量值。
     * @param value1 源矢量。
     * @param scaleFactor 标量值。
     * @param result [OutAttribute] 相乘的结果。
     */
    public static multiply(value1: Vector2, scaleFactor: number, result: Vector2): void;
    /**
     * 将两个矢量的组件彼此相乘。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    public static multiply(value1: Vector2, value2: Vector2): Vector2;
    /**
     * 将两个矢量的组件彼此相乘。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 相乘的结果。
     */
    public static multiply(value1: Vector2, value2: Vector2, result: Vector2): void;
    public static multiply(...params: any): any {
        Vector2.multiply = overload()
            .add([Vector2, Number], function (value1, scaleFactor) {
                return new Vector2(
                    value1.#x * scaleFactor,
                    value1.#y * scaleFactor
                );
            })
            .add([Vector2, Number, Vector2], function (value1, scaleFactor, result) {
                result.#x = value1.#x * scaleFactor;
                result.#y = value1.#y * scaleFactor;
            })
            .add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.#x * value2.#x,
                    value1.#y * value2.#y
                );
            })
            .add([Vector2, Vector2, Vector2], function (value1, value2, result) {
                result.#x = value1.#x * value2.#x;
                result.#y = value1.#y * value2.#y;
            });

        return Vector2.multiply.apply(this, params);
    }

    /**
     * 返回指向反方向的矢量。
     * @param value 源矢量。
     * @returns 结果矢量。
     */
    public static negate(value: Vector2): Vector2;
    /**
     * 返回指向反方向的矢量。
     * @param value 源矢量。
     * @param result [OutAttribute] 指向反方向的矢量。
     */
    public static negate(value: Vector2, result: Vector2): void;
    public static negate(...params: any): any {
        Vector2.negate = overload()
            .add([Vector2], function (value) {
                return new Vector2(
                    -value.#x,
                    -value.#y
                );
            })
            .add([Vector2, Vector2], function (value, result) {
                result.#x = -value.#x;
                result.#y = -value.#y;
            });

        return Vector2.negate.apply(this, params);
    }

    /**
     * 根据指定的矢量创建单位矢量。结果是与原始矢量相同方向的长度矢量单位。
     * @param value 源 Vector2。
     * @returns 结果矢量。
     */
    public static normalize(value: Vector2): Vector2;
    /**
     * 根据指定的矢量创建单位矢量。结果是与原始矢量相同方向的长度矢量单位。
     * @param value 源 Vector2。
     * @param result [OutAttribute] 法线化的矢量。
     */
    public static normalize(value: Vector2, result: Vector2): void;
    public static normalize(...params: any): any {
        Vector2.normalize = overload()
            .add([Vector2], function (value) {
                const val = 1.0 / Math.sqrt((value.#x * value.#x) + (value.#y * value.#y));
                return new Vector2(
                    value.#x * val,
                    value.#y * val
                );
            })
            .add([Vector2, Vector2], function (value, result) {
                const val = 1.0 / Math.sqrt((value.#x * value.#x) + (value.#y * value.#y));
                result.#x = value.#x * val;
                result.#y = value.#y * val;
            });

        return Vector2.normalize.apply(this, params);
    }

    /**
     * 确定给定矢量和法线的反射矢量。
     * @param vector 源矢量。
     * @param normal vector 的法线。
     * @returns 结果矢量。
     */
    public static reflect(vector: Vector2, normal: Vector2): Vector2;
    /**
     * 确定给定矢量和法线的反射矢量。
     * @param vector 源矢量。
     * @param normal vector 的法线。
     * @param result [OutAttribute] 创建的反射矢量。
     */
    public static reflect(vector: Vector2, normal: Vector2, result: Vector2): void;
    public static reflect(...params: any): any {
        Vector2.reflect = overload()
            .add([Vector2, Vector2], function (vector, normal) {
                const val = 2.0 * ((vector.#x * normal.#x) + (vector.#y * normal.#y));
                return new Vector2(
                    vector.#x - (normal.#x * val),
                    vector.#y - (normal.#y * val)
                );
            })
            .add([Vector2, Vector2, Vector2], function (vector, normal, result) {
                const val = 2.0 * ((vector.#x * normal.#x) + (vector.#y * normal.#y));
                result.#x = vector.#x - (normal.#x * val);
                result.#y = vector.#y - (normal.#y * val);
            });

        return Vector2.reflect.apply(this, params);
    }

    /**
     * 使用三次方程计算两个值之间的插值。
     * @param value1 源值。
     * @param value2 源值。
     * @param amount 权重值。
     * @returns 矢量插值结果。
     */
    public static smoothStep(value1: Vector2, value2: Vector2, amount: number): Vector2;
    /**
     * 使用三次方程计算两个值之间的插值。
     * @param value1 源值。
     * @param value2 源值。
     * @param amount 权重值。
     * @param result [OutAttribute] 插入值。
     */
    public static smoothStep(value1: Vector2, value2: Vector2, amount: number, result: Vector2): void;
    public static smoothStep(...params: any): any {
        Vector2.smoothStep = overload()
            .add([Vector2, Vector2, Number], function (value1, value2, amount) {
                return new Vector2(
                    MathHelper.smoothStep(value1.#x, value2.#x, amount),
                    MathHelper.smoothStep(value1.#y, value2.#y, amount)
                );
            })
            .add([Vector2, Vector2, Number, Vector2], function (value1, value2, amount, result) {
                result.#x = MathHelper.smoothStep(value1.#x, value2.#x, amount);
                result.#y = MathHelper.smoothStep(value1.#y, value2.#y, amount);
            });

        return Vector2.smoothStep.apply(this, params);
    }

    /**
     * 将一个矢量减去一个矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    public static subtract(value1: Vector2, value2: Vector2): Vector2;
    /**
     * 将一个矢量减去一个矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 相减结果。
     */
    public static subtract(value1: Vector2, value2: Vector2, result: Vector2): void;
    public static subtract(...params: any): any {
        Vector2.subtract = overload()
            .add([Vector2, Vector2], function (value1, value2) {
                return new Vector2(
                    value1.#x - value2.#x,
                    value1.#y - value2.#y
                );
            })
            .add([Vector2, Vector2, Vector2], function (value1, value2, result) {
                result.#x = value1.#x - value2.#x;
                result.#y = value1.#y - value2.#y;
            });

        return Vector2.subtract.apply(this, params);
    }

    /**
     * 通过指定矩阵变换矢量 (x, y, 0, 1)。
     * @param position 源矢量。
     * @param matrix 变换矩阵。
     * @returns 结果矢量。
     */
    public static transform(position: Vector2, matrix: Matrix): Vector2;
    /**
     * 通过给定 Matrix 变换 Vector2。
     * @param position 源 Vector2。
     * @param matrix 变换 Matrix。
     * @param result [OutAttribute] 通过变换得到的 Vector2。
     */
    public static transform(position: Vector2, matrix: Matrix, result: Vector2): void;
    /**
     * 通过指定 Quaternion 旋转变换单个 Vector2 或矢量法线 (x, y, 0, 0)。
     * @param value 要旋转的矢量。
     * @param rotation 要应用的 Quaternion 旋转。
     * @returns 结果矢量。
     */
    public static transform(value: Vector2, rotation: Quaternion): Vector2;
    /**
     * 通过指定 Quaternion 旋转变换 Vector2 或矢量法线 (x, y, 0, 0)。
     * @param value 要旋转的矢量。
     * @param rotation 要应用的 Quaternion 旋转。
     * @param result [OutAttribute] 使用旋转结果进行填充的现有 Vector2。
     */
    public static transform(value: Vector2, rotation: Quaternion, result: Vector2): void;
    /**
     * 通过指定 Matrix 变换 Vector2 列表中的指定范围，并将结果放置在目标列表的指定范围内。
     * @param sourceArray 源列表。
     * @param sourceIndex 源列表中要变换的首个 Vector2 的索引。
     * @param matrix 要通过其变换的 Matrix。
     * @param destinationArray 结果 Vector2 将被写入的目标列表。
     * @param destinationIndex 目标列表中应将首个结果 Vector2 写入到的位置的索引。
     * @param length 要变换的 Vector2 的数量。
     */
    public static transform(
        sourceArray: List<Vector2>,
        sourceIndex: number,
        matrix: Matrix,
        destinationArray: List<Vector2>,
        destinationIndex: number,
        length: number
    ): void;
    /**
     * 通过指定 Quaternion 变换 Vector2 列表中的指定范围，并将结果放置在目标列表的指定范围内。
     * @param sourceArray 源列表。
     * @param sourceIndex 源列表中要变换的首个 Vector2 的索引。
     * @param rotation 要应用的 Quaternion 旋转。
     * @param destinationArray 结果 Vector2 被写入的目标列表。
     * @param destinationIndex 目标列表中应将首个结果 Vector2 写入到的位置的索引。
     * @param length 要变换的 Vector2 的数量。
     */
    public static transform(
        sourceArray: List<Vector2>,
        sourceIndex: number,
        rotation: Quaternion,
        destinationArray: List<Vector2>,
        destinationIndex: number,
        length: number
    ): void;
    /**
     * 通过指定 Matrix 变换 Vector2 列表。
     * @param sourceArray 要变换的 Vector2 列表。
     * @param matrix 要应用的变换 Matrix。
     * @param destinationArray 变换后的 Vector2 被写入的现有列表。
     */
    public static transform(
        sourceArray: List<Vector2>,
        matrix: Matrix,
        destinationArray: List<Vector2>
    ): void;
    /**
     * 通过指定 Quaternion 变换 Vector2 列表。
     * @param sourceArray 要变换的 Vector2 列表。
     * @param rotation 要使用的变换 Matrix。
     * @param destinationArray 变换后的 Vector2 被写入的现有列表。
     */
    public static transform(
        sourceArray: List<Vector2>,
        rotation: Quaternion,
        destinationArray: List<Vector2>
    ): void;
    public static transform(...params: any): any {
        Vector2.transform = overload()
            .add([Vector2, Matrix], function (position, matrix) {
                return new Vector2(
                    (position.#x * matrix.m11) + (position.#y * matrix.m21) + matrix.m41,
                    (position.#x * matrix.m12) + (position.#y * matrix.m22) + matrix.m42
                );
            })
            .add([Vector2, Matrix, Vector2], function (position, matrix, result) {
                result.#x = (position.#x * matrix.m11) + (position.#y * matrix.m21) + matrix.m41;
                result.#y = (position.#x * matrix.m12) + (position.#y * matrix.m22) + matrix.m42;
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
            .add([Vector2, Quaternion, Vector2], function (value, rotation, result) {
                const rx = rotation.x, ry = rotation.y, rz = rotation.z, rw = rotation.w;
                const x = value.#x, y = value.#y;
                const rot1 = new Vector3(rx + rx, ry + ry, rz + rz);
                const rot2 = new Vector3(rx, rx, rw);
                const rot3 = new Vector3(1, ry, rz);
                const rot4 = Vector3.multiply(rot1, rot2);
                const rot5 = Vector3.multiply(rot1, rot3);
                result.#x = (x * (1.0 - rot5.y - rot5.z) + y * (rot4.y - rot4.z));
                result.#y = (x * (rot4.y + rot4.z) + y * (1.0 - rot4.x - rot5.z));
            })
            .add([List.T(Vector2), Number, Matrix, List.T(Vector2), Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new RangeError("sourceArray 的长度小于 sourceIndex + length。");
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError("destinationArray 的长度小于 destinationIndex + length。");
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
                    throw new RangeError(`sourceArray 的长度小于 sourceIndex + length。`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError(`destinationArray 的长度小于 destinationIndex + length。`);
                }

                for (let x = 0; x < length; x++) {
                    const position = sourceArray[sourceIndex + x];
                    const destination = destinationArray[destinationIndex + x];

                    const v = Vector2.transform(position, rotation);

                    destination.#x = v.#x;
                    destination.#y = v.#y;

                    destinationArray[destinationIndex + x] = destination;
                }
            })
            .add([List.T(Vector2), Matrix, List.T(Vector2)], function (sourceArray, matrix, destinationArray) {
                Vector2.transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.length);
            })
            .add([List.T(Vector2), Quaternion, List.T(Vector2)], function (sourceArray, rotation, destinationArray) {
                Vector2.transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.length);
            });

        return Vector2.transform.apply(this, params);
    }

    /**
     * 通过矩阵变换 2D 矢量法线。
     * @param normal 源矢量。
     * @param matrix 变换矩阵。
     * @returns 结果矢量。
     */
    public static transformNormal(normal: Vector2, matrix: Matrix): Vector2;
    /**
     * 通过矩阵变换矢量法线。
     * @param normal 源矢量。
     * @param matrix 变换矩阵。
     * @param result [OutAttribute] 通过变换得到的 Vector2。
     */
    public static transformNormal(normal: Vector2, matrix: Matrix, result: Vector2): void;
    /**
     * 通过指定 Matrix 变换 Vector2 矢量法线列表中的指定范围，并将结果放置在目标列表的指定范围内。
     * @param sourceArray 源列表。
     * @param sourceIndex 源列表中要变换的首个 Vector2 的索引。
     * @param matrix 要应用的 Matrix。
     * @param destinationArray 结果 Vector2 被写入的目标列表。
     * @param destinationIndex 目标列表中应将首个结果 Vector2 写入到的位置的索引。
     * @param length 要变换的矢量法线的数量。
     */
    public static transformNormal(
        sourceArray: List<Vector2>,
        sourceIndex: number,
        matrix: Matrix,
        destinationArray: List<Vector2>,
        destinationIndex: number,
        length: number
    ): void;
    /**
     * 通过指定 Matrix 变换 Vector2 矢量法线列表。
     * @param sourceArray 要变换的矢量法线列表。
     * @param matrix 要应用的变换 Matrix。
     * @param destinationArray 变换后的矢量法线被写入的现有列表。
     */
    public static transformNormal(
        sourceArray: List<Vector2>,
        matrix: Matrix,
        destinationArray: List<Vector2>
    ): void;
    public static transformNormal(...params: any): any {
        Vector2.transformNormal = overload()
            .add([Vector2, Matrix], function (normal, matrix) {
                return new Vector2(
                    normal.#x * matrix.m11 + normal.#y * matrix.m21,
                    normal.#x * matrix.m12 + normal.#y * matrix.m22
                );
            })
            .add([Vector2, Matrix, Vector2], function (normal, matrix, result) {
                result.#x = normal.#x * matrix.m11 + normal.#y * matrix.m21;
                result.#y = normal.#x * matrix.m12 + normal.#y * matrix.m22;
            })
            .add([List.T(Vector2), Number, Matrix, List.T(Vector2), Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                if (sourceArray.length < sourceIndex + length) {
                    throw new RangeError(`sourceArray 的长度小于 sourceIndex + length。`);
                }

                if (destinationArray.length < destinationIndex + length) {
                    throw new RangeError(`destinationArray 的长度小于 destinationIndex + length。`);
                }

                for (let i = 0; i < length; i++) {
                    destinationArray[destinationIndex + i] = Vector2.transformNormal(sourceArray[sourceIndex + i], matrix);
                }
            })
            .add([List.T(Vector2), Matrix, List.T(Vector2)], function (sourceArray, matrix, destinationArray) {
                if (destinationArray.length < sourceArray.length) {
                    throw new RangeError(`destinationArray 的长度小于 sourceArray 的长度。`);
                }

                for (let i = 0; i < sourceArray.length; i++) {
                    destinationArray[i] = Vector2.transformNormal(sourceArray[i], matrix);
                }
            });

        return Vector2.transformNormal.apply(this, params);
    }

    /**
     * 对传入的 Vector2 取反。
     * @param other 用于取反的 Vector2。
     * @returns 取反后的 Vector2。
     */
    public static ["-"](other: Vector2): Vector2;
    public static ["-"](...params: any): any {
        Vector2["-"] = overload([Vector2], function (value) {
            return Vector2.negate(value);
        });

        return Vector2["-"].apply(this, params);
    }

    /**
     * 将当前 Vector2 与另一个 Vector2 相加。
     * @param other 用于相加的 Vector2。
     * @returns 相加后的 Vector2。
     */
    public ["+"](other: Vector2): Vector2;
    public ["+"](...params: any): any {
        Vector2.prototype["+"] = overload([Vector2], function (this: Vector2, value) {
            return Vector2.add(this, value);
        });

        return Vector2.prototype["+"].apply(this, params);
    }

    /**
     * 将当前 Vector2 与另一个 Vector2 相减。
     * @param other 用于相减的 Vector2。
     * @returns 相减后的 Vector2。
     */
    public ["-"](other: Vector2): Vector2;
    public ["-"](...params: any): any {
        Vector2.prototype["-"] = overload([Vector2], function (this: Vector2, value) {
            return Vector2.subtract(this, value);
        });

        return Vector2.prototype["-"].apply(this, params);
    }

    /**
     * 将当前 Vector2 与另一个 Vector2 相乘。
     * @param other 用于相乘的 Vector2。
     * @returns 相乘后的 Vector2。
     */
    public ["*"](other: Vector2): Vector2;
    /**
     * 将当前 Vector2 与一个标量值相乘。
     * @param scale 标量值。
     * @returns 相乘后的 Vector2。
     */
    public ["*"](scale: number): Vector2;
    public ["*"](...params: any): any {
        Vector2.prototype["*"] = overload([Vector2], function (this: Vector2, value) {
            return Vector2.multiply(this, value);
        }).any(function (this: Vector2, value: number) {
            return Vector2.multiply(this, value);
        });

        return Vector2.prototype["*"].apply(this, params);
    }

    /**
     * 将当前 Vector2 与另一个 Vector2 相除。
     * @param other 用于相除的 Vector2。
     * @returns 相除后的 Vector2。
     */
    public ["/"](other: Vector2): Vector2;
    /**
     * 将当前 Vector2 除以一个标量值。
     * @param divider 标量值。
     * @returns 相除后的 Vector2。
     */
    public ["/"](divider: number): Vector2;
    public ["/"](...params: any): any {
        Vector2.prototype["/"] = overload([Vector2], function (this: Vector2, value) {
            return Vector2.divide(this, value);
        }).any(function (this: Vector2, value: number) {
            return Vector2.divide(this, value);
        });

        return Vector2.prototype["/"].apply(this, params);
    }

    /**
     * 确定指定的 Vector2 是否等于当前 Vector2。
     * @param other 用于与当前 Vector2 比较的 Vector2。
     * @returns 是否相等。
     */
    public ["=="](other: Vector2): boolean;
    public ["=="](...params: any): any {
        Vector2.prototype["=="] = overload([Vector2], function (this: Vector2, value) {
            return this.equals(value);
        });

        return Vector2.prototype["=="].apply(this, params);
    }

    /**
     * 确定指定的 Vector2 是否不等于当前 Vector2。
     * @param other 用于与当前 Vector2 比较的 Vector2。
     * @returns 是否不相等。
     */
    public ["!="](other: Vector2): boolean;
    public ["!="](...params: any): any {
        Vector2.prototype["!="] = overload([Vector2], function (this: Vector2, value) {
            return !this.equals(value);
        });

        return Vector2.prototype["!="].apply(this, params);
    }

    /**
     * 计算矢量的长度。
     * @returns 矢量的长度。
     */
    public length(): number;
    public length(...params: any): any {
        Vector2.prototype.length = overload([], function (this: Vector2) {
            return Math.sqrt(this.#x ** 2 + this.#y ** 2);
        });

        return Vector2.prototype.length.apply(this, params);
    }

    /**
     * 计算平方矢量的长度。
     * @returns 平方矢量的长度。
     */
    public lengthSquared(): number;
    public lengthSquared(...params: any): any {
        Vector2.prototype.lengthSquared = overload([], function (this: Vector2) {
            return this.#x ** 2 + this.#y ** 2;
        });

        return Vector2.prototype.lengthSquared.apply(this, params);
    }

    /**
     * 将当前矢量转为单位矢量。结果是与原始矢量相同方向的长度矢量单位。
     */
    public normalize(): void;
    public normalize(...params: any): any {
        Vector2.prototype.normalize = overload([], function (this: Vector2) {
            const val = 1.0 / this.length();
            this.#x *= val;
            this.#y *= val;
        });

        return Vector2.prototype.normalize.apply(this, params);
    }

    /**
     * 确定指定的 Vector2 是否等于当前 Vector2。
     * @param other 用于与当前 Vector2 比较的 Vector2。
     * @returns 是否相等。
     */
    public equals(other: Vector2): boolean;
    public equals(...params: any): any {
        Vector2.prototype.equals = overload([Vector2], function (this: Vector2, other) {
            return this.#x === other.#x && this.#y === other.#y;
        }).any(() => false);

        return Vector2.prototype.equals.apply(this, params);
    }

    /**
     * 检索当前对象的字符串呈现。
     * @returns 当前对象的字符串呈现。
     */
    public toString(): string;
    public toString(...params: any): any {
        Vector2.prototype.toString = overload([], function (this: Vector2) {
            return JSON.stringify(this);
        });

        return Vector2.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 Vector2 的 JSON 表示形式。
     * @returns 当前 Vector2 的 JSON 表示形式。
     */
    public toJSON(): object {
        return { x: this.#x, y: this.#y };
    }
}
