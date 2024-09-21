import MathHelper from "../src/math_helper.js";

describe("MathHelper 静态类", () => {
    test("类不能被实例化", () => {
        expect(() => new MathHelper()).toThrow();
    });

    test("静态只读属性正确", () => {
        expect(MathHelper.e).toBeCloseTo(2.718281828459045);
        expect(MathHelper.log10e).toBeCloseTo(0.4342944819032518);
        expect(MathHelper.log2e).toBeCloseTo(1.4426950408889634);
        expect(MathHelper.pi).toBeCloseTo(3.141592653589793);
        expect(MathHelper.piOver2).toBeCloseTo(1.5707963267948966);
        expect(MathHelper.piOver4).toBeCloseTo(0.7853981633974483);
        expect(MathHelper.twoPi).toBeCloseTo(6.283185307179586);
    });

    test("静态方法 barycentric 应该正确计算重心坐标", () => {
        expect(MathHelper.barycentric(1, 2, 3, 0.5, 0.5)).toBe(2.5);
    });

    test("静态方法 catmullRom 应该正确计算 Catmull-Rom 插值", () => {
        expect(MathHelper.catmullRom(0, 1, 2, 3, 0.5)).toBe(1.5);
    });

    test("静态方法 clamp 应该正确限制数值的范围", () => {
        expect(MathHelper.clamp(5, 0, 10)).toBe(5);
        expect(MathHelper.clamp(-5, 0, 10)).toBe(0);
        expect(MathHelper.clamp(15, 0, 10)).toBe(10);
    });

    test("静态方法 distance 应该正确计算两个数值之间的距离", () => {
        expect(MathHelper.distance(5, 10)).toBe(5);
        expect(MathHelper.distance(10, 5)).toBe(5);
    });

    test("静态方法 hermite 应该正确计算 Hermite 插值", () => {
        expect(MathHelper.hermite(0, 0, 1, 1, 0.5)).toBe(0.375);
    });

    test("静态方法 lerp 应该正确计算线性插值", () => {
        expect(MathHelper.lerp(0, 10, 0.5)).toBe(5);
        expect(MathHelper.lerp(0, 10, 0)).toBe(0);
        expect(MathHelper.lerp(0, 10, 1)).toBe(10);
    });

    test("静态方法 max 应该正确计算两个数的最大值", () => {
        expect(MathHelper.max(5, 10)).toBe(10);
        expect(MathHelper.max(10, 5)).toBe(10);
    });

    test("静态方法 min 应该正确计算两个数的最小值", () => {
        expect(MathHelper.min(5, 10)).toBe(5);
        expect(MathHelper.min(10, 5)).toBe(5);
    });

    test("静态方法 smoothStep 应该正确计算平滑插值", () => {
        expect(MathHelper.smoothStep(0, 10, 0.5)).toBeCloseTo(5);
        expect(MathHelper.smoothStep(0, 10, 0)).toBe(0);
        expect(MathHelper.smoothStep(0, 10, 1)).toBe(10);
    });

    test("静态方法 toDegrees 应该正确将弧度转换为角度", () => {
        expect(MathHelper.toDegrees(MathHelper.pi)).toBeCloseTo(180);
        expect(MathHelper.toDegrees(-MathHelper.pi)).toBeCloseTo(-180);
        expect(MathHelper.toDegrees(0)).toBe(0);
    });

    test("静态方法 toRadians 应该正确将角度转换为弧度", () => {
        expect(MathHelper.toRadians(180)).toBeCloseTo(MathHelper.pi);
        expect(MathHelper.toRadians(-180)).toBeCloseTo(-MathHelper.pi);
        expect(MathHelper.toRadians(0)).toBe(0);
    });

    test("静态方法 wrapAngle 应该正确将角度限制在 -π 到 π 之间", () => {
        expect(MathHelper.wrapAngle(MathHelper.pi)).toBeCloseTo(MathHelper.pi);
        expect(MathHelper.wrapAngle(-MathHelper.pi)).toBeCloseTo(MathHelper.pi);
        expect(MathHelper.wrapAngle(MathHelper.twoPi)).toBeCloseTo(0);
        expect(MathHelper.wrapAngle(-MathHelper.twoPi)).toBeCloseTo(0);
    });

    test("静态方法 isPowerOfTwo 应该正确判断一个数是否是 2 的幂", () => {
        expect(MathHelper.isPowerOfTwo(1)).toBe(true);
        expect(MathHelper.isPowerOfTwo(2)).toBe(true);
        expect(MathHelper.isPowerOfTwo(3)).toBe(false);
        expect(MathHelper.isPowerOfTwo(4)).toBe(true);
        expect(MathHelper.isPowerOfTwo(5)).toBe(false);
        expect(MathHelper.isPowerOfTwo(8)).toBe(true);
    });

    test("静态方法 closestMSAAPower 应该正确计算最接近的 MSAA 采样次数", () => {
        expect(MathHelper.closestMSAAPower(1)).toBe(0);
        expect(MathHelper.closestMSAAPower(2)).toBe(2);
        expect(MathHelper.closestMSAAPower(3)).toBe(2);
        expect(MathHelper.closestMSAAPower(4)).toBe(4);
        expect(MathHelper.closestMSAAPower(5)).toBe(4);
        expect(MathHelper.closestMSAAPower(8)).toBe(8);
    });
});