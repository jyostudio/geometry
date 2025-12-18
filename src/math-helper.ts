import overload from "@jyostudio/overload";

/**
 * 包含常用的预计算值。
 * @class
 */
export default class MathHelper {
    constructor() {
        throw new Error("MathHelper 类不能被实例化。");
    }

    /**
     * 呈现数学常量 e。
     */
    public static get e(): number {
        return 2.71828175;
    }

    /**
     * 呈现以 10 为底 e 的对数。
     */
    public static get log10e(): number {
        return 0.4342945;
    }

    /**
     * 呈现以 2 为底 e 的对数。
     */
    public static get log2e(): number {
        return 1.442695;
    }

    /**
     * 呈现 pi 的值。
     */
    public static get pi(): number {
        return 3.14159274;
    }

    /**
     * 呈现 pi 除以二的值。
     */
    public static get piOver2(): number {
        return 1.57079637;
    }

    /**
     * 呈现 pi 除以四的值。
     */
    public static get piOver4(): number {
        return 0.7853982;
    }

    /**
     * 呈现 2π 的值。
     */
    public static get twoPi(): number {
        return 6.28318548;
    }

    /**
     * 返回给定三角形定义的某个点在一个轴上的 Cartesian 坐标，以及两个法线化质心（重心）坐标。
     * @param value1 定义三角形的顶点 1 在一个轴上的坐标。
     * @param value2 定义三角形的顶点 2 在一个轴上的坐标。
     * @param value3 定义三角形的顶点 3 在一个轴上的坐标。
     * @param amount1 法线化质心（重心）坐标 b2，等于顶点 2 的权重因子，该顶点的坐标已在 value2 中指定。
     * @param amount2 法线化质心（重心）坐标 b3，等于顶点 3 的权重因子，该顶点的坐标已在 value3 中指定。
     * @returns 给定三角形定义的某个点在一个轴上的 Cartesian 坐标，以及两个法线化质心（重心）坐标。
     */
    public static barycentric(
        value1: number,
        value2: number,
        value3: number,
        amount1: number,
        amount2: number
    ): number;
    public static barycentric(...params: any): any {
        MathHelper.barycentric = overload([Number, Number, Number, Number, Number], (value1, value2, value3, amount1, amount2) =>
            value1 + (value2 - value1) * amount1 + (value3 - value1) * amount2
        );

        return MathHelper.barycentric.apply(this, params);
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
        value1: number,
        value2: number,
        value3: number,
        value4: number,
        amount: number
    ): number;
    public static catmullRom(...params: any): any {
        MathHelper.catmullRom = overload([Number, Number, Number, Number, Number], function (value1, value2, value3, value4, amount) {
            const amountSquared = amount * amount;
            const amountCubed = amountSquared * amount;
            return 0.5 * (2.0 * value2 +
                (value3 - value1) * amount +
                (2.0 * value1 - 5.0 * value2 + 4.0 * value3 - value4) * amountSquared +
                (3.0 * value2 - value1 - 3.0 * value3 + value4) * amountCubed);
        });

        return MathHelper.catmullRom.apply(this, params);
    }

    /**
     * 将值限制在指定范围内。
     * @param value 要限制的值。
     * @param min 最小值。如果 value 小于 min，将返回 min。
     * @param max 最大值。如果 value 大于 max，将返回 max。
     * @returns 限制后的值。
     */
    public static clamp(value: number, min: number, max: number): number;
    public static clamp(...params: any): any {
        MathHelper.clamp = overload([Number, Number, Number], (value, min, max) => Math.min(Math.max(value, min), max))

        return MathHelper.clamp.apply(this, params);
    }

    /**
     * 计算两个值之差的绝对值。
     * @param value1 源值。
     * @param value2 源值。
     * @returns 两个值之差的绝对值。
     */
    public static distance(value1: number, value2: number): number;
    public static distance(...params: any): any {
        MathHelper.distance = overload([Number, Number], (value1, value2) => Math.abs(value1 - value2));

        return MathHelper.distance.apply(this, params);
    }

    /**
     * 执行 Hermite 样条插值。
     * @param value1 源位置。
     * @param tangent1 源切线。
     * @param value2 源位置。
     * @param tangent2 源切线。
     * @param amount 权重因子。
     * @returns 插值结果。
     */
    public static hermite(
        value1: number,
        tangent1: number,
        value2: number,
        tangent2: number,
        amount: number
    ): number;
    public static hermite(...params: any): any {
        MathHelper.hermite = overload([Number, Number, Number, Number, Number], function (value1, tangent1, value2, tangent2, amount) {
            const sCubed = amount * amount * amount;
            const sSquared = amount * amount;

            return (amount === 0) ? value1 :
                (amount === 1) ? value2 :
                    (2 * value1 - 2 * value2 + tangent2 + tangent1) * sCubed +
                    (3 * value2 - 3 * value1 - 2 * tangent1 - tangent2) * sSquared +
                    tangent1 * amount +
                    value1;
        });

        return MathHelper.hermite.apply(this, params);
    }

    /**
     * 在两个值之间执行线性插值。
     * @param value1 源值。
     * @param value2 源值。
     * @param amount 指示 value2 权重的 0 到 1 之间的值。
     * @returns 插值结果。
     */
    public static lerp(value1: number, value2: number, amount: number): number;
    public static lerp(...params: any): any {
        MathHelper.lerp = overload([Number, Number, Number], (value1, value2, amount) => value1 + (value2 - value1) * amount);

        return MathHelper.lerp.apply(this, params);
    }

    /**
     * 返回两个值中的较大值。
     * @param value1 源值。
     * @param value2 源值。
     * @returns 两个值中的较大值。
     */
    public static max(value1: number, value2: number): number;
    public static max(...params: any): any {
        MathHelper.max = overload([Number, Number], (value1, value2) => Math.max(value1, value2));

        return MathHelper.max.apply(this, params);
    }

    /**
     * 返回两个值中的较小值。
     * @param value1 源值。
     * @param value2 源值。
     * @returns 两个值中的较小值。
     */
    public static min(value1: number, value2: number): number;
    public static min(...params: any): any {
        MathHelper.min = overload([Number, Number], (value1, value2) => Math.min(value1, value2))

        return MathHelper.min.apply(this, params);
    }

    /**
     * 使用三次方程计算两个值之间的插值。
     * @param value1 源值。
     * @param value2 源值。
     * @param amount 权重值。
     * @returns 插值结果。
     */
    public static smoothStep(value1: number, value2: number, amount: number): number;
    public static smoothStep(...params: any): any {
        MathHelper.smoothStep = overload([Number, Number, Number], (value1, value2, amount) => MathHelper.hermite(value1, 0, value2, 0, MathHelper.clamp(amount, 0, 1)));

        return MathHelper.smoothStep.apply(this, params);
    }

    /**
     * 将弧度转换为角度。
     * @param radians 以弧度表示的角。
     * @returns 角度。
     */
    public static toDegrees(radians: number): number;
    public static toDegrees(...params: any): any {
        // 57.29577793714917 = 180 / MathHelper.pi
        MathHelper.toDegrees = overload([Number], radians => radians * 57.29577793714917);

        return MathHelper.toDegrees.apply(this, params);
    }

    /**
     * 将角度转换为弧度。
     * @param degrees 以角度表示的角。
     * @returns 弧度。
     */
    public static toRadians(degrees: number): number;
    public static toRadians(...params: any): any {
        // 0.017453293 = MathHelper.pi / 180
        MathHelper.toRadians = overload([Number], degrees => degrees * 0.017453293);

        return MathHelper.toRadians.apply(this, params);
    }

    /**
     * 将一个给定角度减小到介于 π 和 -π 的值。
     * @param angle 要减少的角度，以弧度计。
     * @returns 角度减小到介于 π 和 -π 的值。
     */
    public static wrapAngle(angle: number): number;
    public static wrapAngle(...params: any): any {
        MathHelper.wrapAngle = overload([Number], function (angle) {
            const { pi, twoPi } = MathHelper;

            if (angle > -pi && angle <= pi) return angle;

            angle %= twoPi;

            if (angle <= -pi) return angle + twoPi;
            if (angle > pi) return angle - twoPi;

            return angle;
        });

        return MathHelper.wrapAngle.apply(this, params);
    }

    /**
     * 判断一个数值是否为 2 的次方。
     * @param value 要判断的数值。
     * @returns 是否为 2 的次方。
     */
    public static isPowerOfTwo(value: number): boolean;
    public static isPowerOfTwo(...params: any): any {
        MathHelper.isPowerOfTwo = overload([Number], value => (value > 0) && ((value & (value - 1)) === 0));

        return MathHelper.isPowerOfTwo.apply(this, params);
    }

    /**
     * 计算给定数字的最接近的（为了安全向下取整）多重采样抗锯齿（MSAA）功率值。
     * @param value 指定的值。
     * @returns 最接近的 MSAA 功率值。
     */
    public static floorPowerOfTwo(value: number): number;
    public static floorPowerOfTwo(...params: any): any {
        MathHelper.floorPowerOfTwo = overload([Number], function (value) {
            if (value === 1) return 0;

            let result = value - 1;
            result |= result >> 1;
            result |= result >> 2;
            result |= result >> 4;
            result |= result >> 8;
            result |= result >> 16;
            result += 1;

            if (result > value) return result >> 1;
            return result;
        });

        return MathHelper.floorPowerOfTwo.apply(this, params);
    }
}
