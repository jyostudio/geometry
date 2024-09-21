import MathHelper from "../src/math_helper.js";
import Matrix from "../src/matrix.js";
import Quaternion from "../src/quaternion.js";
import Vector3 from "../src/vector3.js";

describe("Quaternion 类", () => {
    test("静态只读属性正确", () => {
        const quaternion = Quaternion.identity;
        expect(quaternion.x).toBe(0);
        expect(quaternion.y).toBe(0);
        expect(quaternion.z).toBe(0);
        expect(quaternion.w).toBe(1);
    });

    test("通过各种构造函数构造 Quaternion", () => {
        const q1 = new Quaternion();
        expect(q1.x).toBe(0);
        expect(q1.y).toBe(0);
        expect(q1.z).toBe(0);
        expect(q1.w).toBe(0);

        const q2 = new Quaternion(1, 2, 3, 4);
        expect(q2.x).toBe(1);
        expect(q2.y).toBe(2);
        expect(q2.z).toBe(3);
        expect(q2.w).toBe(4);

        const q3 = new Quaternion(new Vector3(1, 2, 3), 4);
        expect(q3.x).toBe(1);
        expect(q3.y).toBe(2);
        expect(q3.z).toBe(3);
        expect(q3.w).toBe(4);
    });

    test("实例对象的可读写属性正确", () => {
        const quaternion = new Quaternion();
        quaternion.x = 1;
        quaternion.y = 2;
        quaternion.z = 3;
        quaternion.w = 4;
        expect(quaternion.x).toBe(1);
        expect(quaternion.y).toBe(2);
        expect(quaternion.z).toBe(3);
        expect(quaternion.w).toBe(4);
    });

    test("Symbol.iterator 可以正确迭代", () => {
        const quaternion = new Quaternion(1, 2, 3, 4);
        const arr = [...quaternion];
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    test("运算符函数可以正常使用", () => {
        expect(Quaternion["-"](new Quaternion(1, 2, 3, 4)).equals(new Quaternion(-1, -2, -3, -4))).toBeTruthy();
        expect(new Quaternion(1, 2, 3, 4)["+"](new Quaternion(1, 2, 3, 4)).equals(new Quaternion(2, 4, 6, 8))).toBeTruthy();
        expect(new Quaternion(1, 2, 3, 4)["-"](new Quaternion(1, 2, 3, 4)).equals(new Quaternion(0, 0, 0, 0))).toBeTruthy();
        expect(new Quaternion(1, 2, 3, 4)["*"](2).equals(new Quaternion(2, 4, 6, 8))).toBeTruthy();
        expect(new Quaternion(1, 2, 3, 4)["/"](new Quaternion(1, 2, 3, 4)).equals(new Quaternion(0, 0, 0, 1))).toBeTruthy();
        expect(new Quaternion(1, 2, 3, 4)["=="](new Quaternion(1, 2, 3, 4))).toBeTruthy();
        expect(new Quaternion(1, 2, 3, 4)["!="](new Quaternion(1, 2, 3, 4))).toBeFalsy();
        expect(new Quaternion(1, 2, 3, 4)["=="](new Quaternion(2, 3, 4, 5))).toBeFalsy();
        expect(new Quaternion(1, 2, 3, 4)["!="](new Quaternion(2, 3, 4, 5))).toBeTruthy();
    });

    test("静态方法 add 可以正确相加", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = new Quaternion(5, 6, 7, 8);
        const q3 = Quaternion.add(q1, q2);
        expect(q3.x).toBe(6);
        expect(q3.y).toBe(8);
        expect(q3.z).toBe(10);
        expect(q3.w).toBe(12);
    });

    test("静态方法 concatenate 可以正确叠加", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = new Quaternion(5, 6, 7, 8);
        const q3 = Quaternion.concatenate(q1, q2);
        expect(q3.x).toBe(32);
        expect(q3.y).toBe(32);
        expect(q3.z).toBe(56);
        expect(q3.w).toBe(-6);
    });

    test("静态方法 conjugate 可以正确求共轭", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = Quaternion.conjugate(q1);
        expect(q2.x).toBe(-1);
        expect(q2.y).toBe(-2);
        expect(q2.z).toBe(-3);
        expect(q2.w).toBe(4);
    });

    test("静态方法 createFromAxisAngle 可以正确创建", () => {
        const axis = new Vector3(1, 0, 0);
        const angle = Math.PI / 2;
        const q = Quaternion.createFromAxisAngle(axis, angle);
        expect(q.x).toBe(Math.sin(angle / 2));
        expect(q.y).toBe(0);
        expect(q.z).toBe(0);
        expect(q.w).toBe(Math.cos(angle / 2));
    });

    test("静态方法 createFromRotationMatrix 可以正确创建", () => {
        const matrix = new Matrix(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1);
        const q = Quaternion.createFromRotationMatrix(matrix);
        expect(q.x).toBeCloseTo(0.707106769);
        expect(q.y).toBeCloseTo(0);
        expect(q.z).toBeCloseTo(0);
        expect(q.w).toBeCloseTo(0.707106769);

        const matrix2 = new Matrix(-1, 0, 0, 0, 0, -2, -1, 0, 0, 1, -2, 0, 0, 0, 0, 1);
        const q2 = Quaternion.createFromRotationMatrix(matrix2);
        expect(q2.x).toBeCloseTo(1);
        expect(q2.y).toBeCloseTo(0);
        expect(q2.z).toBeCloseTo(0);
        expect(q2.w).toBeCloseTo(-0.5);

        const matrix3 = new Matrix(-3, 0, 1, 0, 1, -1, 0, 0, 0, 1, -2, 0, 0, 0, 0, 1);
        const q3 = Quaternion.createFromRotationMatrix(matrix3);
        expect(q3.x).toBeCloseTo(0.22360679774997896);
        expect(q3.y).toBeCloseTo(1.118033988749895);
        expect(q3.z).toBeCloseTo(0.22360679774997896);
        expect(q3.w).toBeCloseTo(-0.22360679774997896);

        const matrix4 = new Matrix(-3, 0, 0, 0, 0, -2, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1);
        const q4 = Quaternion.createFromRotationMatrix(matrix4);
        expect(q4.x).toBeCloseTo(0);
        expect(q4.y).toBeCloseTo(0);
        expect(q4.z).toBeCloseTo(1.118033988749895);
        expect(q4.w).toBeCloseTo(0);
    });

    test("静态方法 createFromYawPitchRoll 可以正确创建", () => {
        const yaw = MathHelper.pi / 2;
        const pitch = MathHelper.pi / 2;
        const roll = MathHelper.pi / 2;
        const q = Quaternion.createFromYawPitchRoll(yaw, pitch, roll);
        expect(q.x).toBeCloseTo(0.707106769);
        expect(q.y).toBeCloseTo(0);
        expect(q.z).toBeCloseTo(0);
        expect(q.w).toBeCloseTo(0.707106769);
    });

    test("静态方法 divide 可以正确相除", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = new Quaternion(5, 6, 7, 8);
        const q3 = Quaternion.divide(q1, q2);
        expect(q3.x).toBeCloseTo(-0.045977015);
        expect(q3.y).toBeCloseTo(-0.09195402);
        expect(q3.z).toBeCloseTo(-7.450581e-9);
        expect(q3.w).toBeCloseTo(0.402298868);
    });

    test("静态方法 dot 可以正确求点积", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = new Quaternion(5, 6, 7, 8);
        const dot = Quaternion.dot(q1, q2);
        expect(dot).toBe(70);
    });

    test("静态方法 inverse 可以正确求逆", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = Quaternion.inverse(q1);
        expect(q2.x).toBeCloseTo(-0.0333333351);
        expect(q2.y).toBeCloseTo(-0.06666667);
        expect(q2.z).toBeCloseTo(-0.1);
        expect(q2.w).toBeCloseTo(0.13333334);
    });

    test("静态方法 lerp 可以正确插值", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = new Quaternion(5, 6, 7, 8);
        const q3 = Quaternion.lerp(q1, q2, 0.5);
        expect(q3.x).toBeCloseTo(0.3234983);
        expect(q3.y).toBeCloseTo(0.4313311);
        expect(q3.z).toBeCloseTo(0.5391639);
        expect(q3.w).toBeCloseTo(0.6469966);

        const q4 = new Quaternion(-0.01, -0.02, -0.03, -0.04);
        const q5 = new Quaternion(5, 6, 7, 8);
        const q6 = Quaternion.lerp(q4, q5, 0.5);
        expect(q6.x).toBeCloseTo(-0.3782851);
        expect(q6.y).toBeCloseTo(-0.454546183);
        expect(q6.z).toBeCloseTo(-0.530807257);
        expect(q6.w).toBeCloseTo(-0.6070683);
    });

    test("静态方法 multiply 可以正确相乘", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = new Quaternion(5, 6, 7, 8);
        const q3 = Quaternion.multiply(q1, q2);
        expect(q3.x).toBe(24);
        expect(q3.y).toBe(48);
        expect(q3.z).toBe(48);
        expect(q3.w).toBe(-6);

        const q4 = Quaternion.multiply(q2, 2);
        expect(q4.x).toBe(10);
        expect(q4.y).toBe(12);
        expect(q4.z).toBe(14);
        expect(q4.w).toBe(16);
    });

    test("静态方法 negate 可以正确取反", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = Quaternion.negate(q1);
        expect(q2.x).toBe(-1);
        expect(q2.y).toBe(-2);
        expect(q2.z).toBe(-3);
        expect(q2.w).toBe(-4);
    });

    test("静态方法 normalize 可以正确归一化", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = Quaternion.normalize(q1);
        expect(q2.x).toBeCloseTo(0.182574183);
        expect(q2.y).toBeCloseTo(0.365148365);
        expect(q2.z).toBeCloseTo(0.5477226);
        expect(q2.w).toBeCloseTo(0.730296731);
    });

    test("静态方法 slerp 可以正确球面插值", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = new Quaternion(5, 6, 7, 8);
        const q3 = Quaternion.slerp(q1, q2, 0.5);
        expect(q3.x).toBeCloseTo(3);
        expect(q3.y).toBeCloseTo(4);
        expect(q3.z).toBeCloseTo(5);
        expect(q3.w).toBeCloseTo(6);

        const q4 = new Quaternion(-1, -2, -3, -4);
        const q5 = new Quaternion(5, 6, 7, 8);
        const q6 = Quaternion.slerp(q4, q5, 0.5);
        expect(q6.x).toBeCloseTo(-3);
        expect(q6.y).toBeCloseTo(-4);
        expect(q6.z).toBeCloseTo(-5);
        expect(q6.w).toBeCloseTo(-6);

        const q7 = new Quaternion(-0.01, -0.02, -0.03, -0.04);
        const q8 = new Quaternion(5, 6, 7, 8);
        const q9 = Quaternion.slerp(q7, q8, 0.5);
        expect(q9.x).toBeCloseTo(-2.71705413);
        expect(q9.y).toBeCloseTo(-3.26480341);
        expect(q9.z).toBeCloseTo(-3.812553);
        expect(q9.w).toBeCloseTo(-4.36030245);
    });

    test("静态方法 subtract 可以正确相减", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = new Quaternion(5, 6, 7, 8);
        const q3 = Quaternion.subtract(q1, q2);
        expect(q3.x).toBe(-4);
        expect(q3.y).toBe(-4);
        expect(q3.z).toBe(-4);
        expect(q3.w).toBe(-4);
    });

    test("conjugate 方法可以正确求共轭", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        q1.conjugate();
        expect(q1.x).toBe(-1);
        expect(q1.y).toBe(-2);
        expect(q1.z).toBe(-3);
        expect(q1.w).toBe(4);
    });

    test("length 方法可以正确求长度", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const length = q1.length();
        expect(length).toBeCloseTo(5.47722578);
    });

    test("lengthSquared 方法可以正确求长度的平方", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const lengthSquared = q1.lengthSquared();
        expect(lengthSquared).toBe(30);
    });

    test("normalize 方法可以正确归一化", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        q1.normalize();
        expect(q1.x).toBeCloseTo(0.182574183);
        expect(q1.y).toBeCloseTo(0.365148365);
        expect(q1.z).toBeCloseTo(0.5477226);
        expect(q1.w).toBeCloseTo(0.730296731);
    });

    test("equals 方法可以正确判断相等", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const q2 = new Quaternion(1, 2, 3, 4);
        const q3 = new Quaternion(5, 6, 7, 8);
        expect(q1.equals(q2)).toBeTruthy();
        expect(q1.equals(q3)).toBeFalsy();
        expect(q1.equals({ x: 1, y: 2, z: 3, w: 4 })).toBeFalsy();
    });

    test("toString 方法可以正确转换为字符串", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const str = q1.toString();
        expect(str).toBe(`{"x":1,"y":2,"z":3,"w":4}`);
    });

    test("toJSON 方法可以正确转换为 JSON", () => {
        const q1 = new Quaternion(1, 2, 3, 4);
        const json = q1.toJSON();
        expect(json).toEqual({ x: 1, y: 2, z: 3, w: 4 });
    });
});