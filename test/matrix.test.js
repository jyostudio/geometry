import Matrix from "../src/matrix.js";
import Plane from "../src/plane.js";
import Quaternion from "../src/quaternion.js";
import Vector3 from "../src/vector3.js";

function toBeMatrix(matrix, ...params) {
    expect(matrix).toBeInstanceOf(Matrix);
    expect(matrix.m11).toBeCloseTo(params[0]);
    expect(matrix.m12).toBeCloseTo(params[1]);
    expect(matrix.m13).toBeCloseTo(params[2]);
    expect(matrix.m14).toBeCloseTo(params[3]);
    expect(matrix.m21).toBeCloseTo(params[4]);
    expect(matrix.m22).toBeCloseTo(params[5]);
    expect(matrix.m23).toBeCloseTo(params[6]);
    expect(matrix.m24).toBeCloseTo(params[7]);
    expect(matrix.m31).toBeCloseTo(params[8]);
    expect(matrix.m32).toBeCloseTo(params[9]);
    expect(matrix.m33).toBeCloseTo(params[10]);
    expect(matrix.m34).toBeCloseTo(params[11]);
    expect(matrix.m41).toBeCloseTo(params[12]);
    expect(matrix.m42).toBeCloseTo(params[13]);
    expect(matrix.m43).toBeCloseTo(params[14]);
    expect(matrix.m44).toBeCloseTo(params[15]);
}

describe("Matrix 类", function () {
    test("静态只读属性正确", () => {
        const m = Matrix.identity;
        toBeMatrix(m, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    });

    test("通过各种构造函数构造 Matrix", () => {
        const m1 = new Matrix();
        toBeMatrix(m1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

        const m2 = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        toBeMatrix(m2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
    });

    test("实例对象可读写属性正确", () => {
        const m = new Matrix();
        m.m11 = 1;
        m.m12 = 2;
        m.m13 = 3;
        m.m14 = 4;
        m.m21 = 5;
        m.m22 = 6;
        m.m23 = 7;
        m.m24 = 8;
        m.m31 = 9;
        m.m32 = 10;
        m.m33 = 11;
        m.m34 = 12;
        m.m41 = 13;
        m.m42 = 14;
        m.m43 = 15;
        m.m44 = 16;
        toBeMatrix(m, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

        m.backward = new Vector3(1, 2, 3);
        expect(m.backward).toBeInstanceOf(Vector3);
        expect(m.backward.x).toBe(1);
        expect(m.backward.y).toBe(2);
        expect(m.backward.z).toBe(3);

        m.down = new Vector3(4, 5, 6);
        expect(m.down).toBeInstanceOf(Vector3);
        expect(m.down.x).toBe(4);
        expect(m.down.y).toBe(5);
        expect(m.down.z).toBe(6);

        m.forward = new Vector3(7, 8, 9);
        expect(m.forward).toBeInstanceOf(Vector3);
        expect(m.forward.x).toBe(7);
        expect(m.forward.y).toBe(8);
        expect(m.forward.z).toBe(9);

        m.left = new Vector3(10, 11, 12);
        expect(m.left).toBeInstanceOf(Vector3);
        expect(m.left.x).toBe(10);
        expect(m.left.y).toBe(11);
        expect(m.left.z).toBe(12);

        m.right = new Vector3(13, 14, 15);
        expect(m.right).toBeInstanceOf(Vector3);
        expect(m.right.x).toBe(13);
        expect(m.right.y).toBe(14);
        expect(m.right.z).toBe(15);

        m.up = new Vector3(16, 17, 18);
        expect(m.up).toBeInstanceOf(Vector3);
        expect(m.up.x).toBe(16);
        expect(m.up.y).toBe(17);
        expect(m.up.z).toBe(18);

        m.translation = new Vector3(19, 20, 21);
        expect(m.translation).toBeInstanceOf(Vector3);
        expect(m.translation.x).toBe(19);
        expect(m.translation.y).toBe(20);
        expect(m.translation.z).toBe(21);
    });

    test("Symbol.iterator 可以正确迭代", () => {
        const m = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        let i = 1;
        for (const value of m) {
            expect(value).toBe(i++);
        }
    });

    test("运算符函数可以正常使用", () => {
        const m1 = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const m2 = new Matrix(16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);

        const m3 = m1["+"](m2);
        toBeMatrix(m3, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17);

        const m4 = m1["-"](m2);
        toBeMatrix(m4, -15, -13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15);

        const m5 = m1["*"](2);
        toBeMatrix(m5, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32);

        const m6 = m1["*"](m2);
        toBeMatrix(m6, 80, 70, 60, 50, 240, 214, 188, 162, 400, 358, 316, 274, 560, 502, 444, 386);

        const m7 = m1["/"](2);
        toBeMatrix(m7, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8);

        const m8 = m1["/"](m2);
        toBeMatrix(m8, 0.0625, 0.13333334, 0.214285716, 0.307692319, 0.416666657, 0.545454562, 0.7, 0.8888889, 1.125, 1.42857146, 1.83333337, 2.4, 3.25, 4.66666651, 7.5, 16.0);

        const m9 = Matrix["-"](m1);
        toBeMatrix(m9, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16);

        const m10 = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const e1 = m1["=="](m10);
        expect(e1).toBe(true);

        const e2 = m1["!="](m10);
        expect(e2).toBe(false);

        const e3 = m1["=="](m2);
        expect(e3).toBe(false);
    });

    test("静态方法 add 应该正确计算两个矩阵的和", () => {
        const m1 = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const m2 = new Matrix(16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        const m3 = Matrix.add(m1, m2);
        toBeMatrix(m3, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17);
    });

    test("静态方法 createBillboard 应该正确创建面向摄像机的矩阵", () => {
        const m = Matrix.createBillboard(new Vector3(1, 2, 3), new Vector3(4, 5, 6), new Vector3(7, 8, 9), null);
        toBeMatrix(m, 0.408248276, -0.816496551, 0.408248276, 0.0, -0.707106769, 0.0, 0.707106769, 0.0, -0.577350259, -0.577350259, -0.577350259, 0.0, 1.0, 2.0, 3.0, 1.0);

        const m2 = Matrix.createBillboard(new Vector3(1, 2, 3), new Vector3(4, 5, 6), new Vector3(7, 8, 9), new Vector3(10, 11, 12));
        toBeMatrix(m2, 0.408248276, -0.816496551, 0.408248276, 0.0, -0.707106769, 0.0, 0.707106769, 0.0, -0.577350259, -0.577350259, -0.577350259, 0.0, 1.0, 2.0, 3.0, 1.0);
    });

    test("静态方法 createConstrainedBillboard 应该正确创建面向摄像机的矩阵", () => {
        const m = Matrix.createConstrainedBillboard(new Vector3(1, 2, 3), new Vector3(4, 5, 6), new Vector3(7, 8, 9), null, new Vector3(10, 11, 12));
        toBeMatrix(m, 0.0, 0.747409344, -0.664363861, 0.0, 7.0, 8.0, 9.0, 0.0, 0.864536047, -0.333889782, -0.375626, 0.0, 1.0, 2.0, 3.0, 1.0);

        const m2 = Matrix.createConstrainedBillboard(new Vector3(1, 2, 3), new Vector3(4, 5, 6), new Vector3(7, 8, 9), new Vector3(10, 11, 12), new Vector3(13, 14, 15));
        toBeMatrix(m2, 0.0, 0.747409344, -0.664363861, 0.0, 7.0, 8.0, 9.0, 0.0, 0.864536047, -0.333889782, -0.375626, 0.0, 1.0, 2.0, 3.0, 1.0);
    });

    test("静态方法 createFromAxisAngle 应该正确创建旋转矩阵", () => {
        const m = Matrix.createFromAxisAngle(new Vector3(1, 0, 0), 0.5);
        toBeMatrix(m, 1.0, 0.0, 0.0, 0.0, 0.0, 0.87758255, 0.47942555, 0.0, 0.0, -0.47942555, 0.87758255, 0.0, 0.0, 0.0, 0.0, 1.0);
    });

    test("静态方法 createFromQuaternion 应该正确创建旋转矩阵", () => {
        const m = Matrix.createFromQuaternion(new Quaternion(0.5, 0.5, 0.5, 0.5));
        toBeMatrix(m, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    });

    test("静态方法 createFromYawPitchRoll 应该正确创建旋转矩阵", () => {
        const m = Matrix.createFromYawPitchRoll(0.5, 0.5, 0.5);
        toBeMatrix(m, 0.880346537, 0.4207355, -0.219024152, 0.0, -0.219024152, 0.770151138, 0.599079, 0.0, 0.4207355, -0.47942555, 0.770151138, 0.0, 0.0, 0.0, 0.0, 1.0);
    });

    test("静态方法 createLookAt 应该正确创建观察矩阵", () => {
        const m = Matrix.createLookAt(new Vector3(1, 2, 3), new Vector3(4, 5, 6), new Vector3(7, 8, 9));
        toBeMatrix(m, 0.408248276, -0.707106769, -0.577350259, 0.0, -0.816496551, 0.0, -0.577350259, 0.0, 0.408248276, 0.707106769, -0.577350259, 0.0, 0.0, -1.41421354, 3.46410155, 1.0);
    });

    test("静态方法 createOrthographic 应该正确创建正交投影矩阵", () => {
        const m = Matrix.createOrthographic(1, 2, 3, 4);
        toBeMatrix(m, 2.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, -3.0, 1.0);
    });

    test("静态方法 createOrthographicOffCenter 应该正确创建正交投影矩阵", () => {
        const m = Matrix.createOrthographicOffCenter(1, 2, 3, 4, 5, 6);
        toBeMatrix(m, 2.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, -3.0, -7.0, -5.0, 1.0);
    });

    test("静态方法 createPerspective 应该正确创建透视投影矩阵", () => {
        const m = Matrix.createPerspective(1, 2, 3, 4);
        toBeMatrix(m, 6.0, 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, -4.0, -1.0, 0.0, 0.0, -12.0, 0.0);

        expect(() =>Matrix.createPerspective(1, 2, -3, 4)).toThrow();
        expect(() =>Matrix.createPerspective(1, 2, 3, -4)).toThrow();
        expect(() =>Matrix.createPerspective(1, 2, 4, 3)).toThrow();
    });

    test("静态方法 createPerspectiveFieldOfView 应该正确创建透视投影矩阵", () => {
        const m = Matrix.createPerspectiveFieldOfView(0.5, 1, 2, 3);
        toBeMatrix(m, 3.91631746, 0.0, 0.0, 0.0, 0.0, 3.91631746, 0.0, 0.0, 0.0, 0.0, -3.0, -1.0, 0.0, 0.0, -6.0, 0.0);

        expect(() => Matrix.createPerspectiveFieldOfView(0, 1, 2, 3)).toThrow();
        expect(() => Matrix.createPerspectiveFieldOfView(4, 1, 2, 3)).toThrow();
        expect(() => Matrix.createPerspectiveFieldOfView(1, 2, -2, 3)).toThrow();
        expect(() => Matrix.createPerspectiveFieldOfView(1, 2, 2, -3)).toThrow();
        expect(() => Matrix.createPerspectiveFieldOfView(1, 2, 4, 3)).toThrow();
    });

    test("静态方法 createPerspectiveOffCenter 应该正确创建透视投影矩阵", () => {
        const m = Matrix.createPerspectiveOffCenter(1, 2, 3, 4, 5, 6);
        toBeMatrix(m, 10.0, 0.0, 0.0, 0.0, 0.0, 10.0, 0.0, 0.0, 3.0, 7.0, -6.0, -1.0, 0.0, 0.0, -30.0, 0.0);

        expect(() => Matrix.createPerspectiveOffCenter(1, 2, 3, 4, -5, 6)).toThrow();
        expect(() => Matrix.createPerspectiveOffCenter(1, 2, 3, 4, 5, -6)).toThrow();
        expect(() => Matrix.createPerspectiveOffCenter(1, 2, 3, 4, 5, 4)).toThrow();
    });

    test("静态方法 createReflection 应该正确创建反射矩阵", () => {
        const m = Matrix.createReflection(new Plane(1, 2, 3, 4));
        toBeMatrix(m, 0.857142866, -0.285714269, -0.4285714, 0.0, -0.285714269, 0.428571463, -0.8571428, 0.0, -0.4285714, -0.8571428, -0.285714149, 0.0, -0.571428537, -1.14285707, -1.71428561, 1.0);
    });

    test("静态方法 createRotationX 应该正确创建旋转矩阵", () => {
        const m = Matrix.createRotationX(0.5);
        toBeMatrix(m, 1.0, 0.0, 0.0, 0.0, 0.0, 0.87758255, 0.47942555, 0.0, 0.0, -0.47942555, 0.87758255, 0.0, 0.0, 0.0, 0.0, 1.0);
    });

    test("静态方法 createRotationY 应该正确创建旋转矩阵", () => {
        const m = Matrix.createRotationY(0.5);
        toBeMatrix(m, 0.87758255, 0.0, -0.47942555, 0.0, 0.0, 1.0, 0.0, 0.0, 0.47942555, 0.0, 0.87758255, 0.0, 0.0, 0.0, 0.0, 1.0);
    });

    test("静态方法 createRotationZ 应该正确创建旋转矩阵", () => {
        const m = Matrix.createRotationZ(0.5);
        toBeMatrix(m, 0.87758255, 0.47942555, 0.0, 0.0, -0.47942555, 0.87758255, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    });

    test("静态方法 createScale 应该正确创建缩放矩阵", () => {
        const m = Matrix.createScale(1, 2, 3);
        toBeMatrix(m, 1.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 1.0);

        const m2 = Matrix.createScale(new Vector3(4, 5, 6));
        toBeMatrix(m2, 4.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0, 1.0);

        const m3 = Matrix.createScale(7);
        toBeMatrix(m3, 7.0, 0.0, 0.0, 0.0, 0.0, 7.0, 0.0, 0.0, 0.0, 0.0, 7.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    });

    test("静态方法 createShadow 应该正确创建阴影矩阵", () => {
        const m = Matrix.createShadow(new Vector3(1, 2, 3), new Plane(4, 5, 6, 7));
        toBeMatrix(m, 28, -8, -12, 0, -5, 22, -15, 0, -6, -12, 14, 0, -7, -14, -21, 32);
    });

    test("静态方法 createTranslation 应该正确创建平移矩阵", () => {
        const m = Matrix.createTranslation(1, 2, 3);
        toBeMatrix(m, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 2.0, 3.0, 1.0);

        const m2 = Matrix.createTranslation(new Vector3(4, 5, 6));
        toBeMatrix(m2, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 4.0, 5.0, 6.0, 1.0);
    });

    test("静态方法 createWorld 应该正确创建世界矩阵", () => {
        const m = Matrix.createWorld(new Vector3(1, 2, 3), new Vector3(4, 5, 6), new Vector3(7, 8, 9));
        toBeMatrix(m, -0.4082486, 0.816496551, -0.408248037, 0.0, 0.790911436, 0.0930487663, -0.6048149, 0.0, -0.455842316, -0.5698029, -0.6837635, 0.0, 1.0, 2.0, 3.0, 1.0);
    });

    test("静态方法 divide 应该正确计算两个矩阵的商", () => {
        const m1 = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const m2 = new Matrix(16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        const m3 = Matrix.divide(m1, m2);
        toBeMatrix(m3, 0.0625, 0.13333334, 0.214285716, 0.307692319, 0.416666657, 0.545454562, 0.7, 0.8888889, 1.125, 1.42857146, 1.83333337, 2.4, 3.25, 4.66666651, 7.5, 16.0);
    });

    test("静态方法 invert 应该正确计算矩阵的逆矩阵", () => {
        const m = new Matrix(-0.4082486, 0.816496551, -0.408248037, 0.0, 0.790911436, 0.0930487663, -0.6048149, 0.0, -0.455842316, -0.5698029, -0.6837635, 0.0, 1.0, 2.0, 3.0, 1.0);
        const m2 = Matrix.invert(m);
        toBeMatrix(m2, -0.408248574, 0.7909114, -0.455842257, 0.0, 0.816496551, 0.09304876, -0.5698028, 0.0, -0.408248, -0.6048149, -0.683763444, 0.0, -0.000000424970551, 0.8374357, 3.64673829, 1.0);
    });

    test("静态方法 lerp 应该正确计算两个矩阵的线性插值", () => {
        const m1 = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const m2 = new Matrix(16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        const m3 = Matrix.lerp(m1, m2, 0.5);
        toBeMatrix(m3, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5);
    });

    test("静态方法 multiply 应该正确计算两个矩阵的积", () => {
        const m1 = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const m2 = new Matrix(16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        const m3 = Matrix.multiply(m1, m2);
        toBeMatrix(m3, 80, 70, 60, 50, 240, 214, 188, 162, 400, 358, 316, 274, 560, 502, 444, 386);
    });

    test("静态方法 transform 应该正确计算矩阵与四元数的乘积", () => {
        const m = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const q = new Quaternion(0.5, 0.5, 0.5, 0.5);
        const m2 = Matrix.transform(m, q);
        toBeMatrix(m2, 3.0, 1.0, 2.0, 4.0, 7.0, 5.0, 6.0, 8.0, 11.0, 9.0, 10.0, 12.0, 15.0, 13.0, 14.0, 16.0);
    });

    test("静态方法 transpose 应该正确计算矩阵的转置矩阵", () => {
        const m = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const m2 = Matrix.transpose(m);
        toBeMatrix(m2, 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, 16);
    });

    test("decompose 方法应该正确分解矩阵", () => {
        const m = new Matrix(0.408248276, -0.816496551, 0.408248276, 0.0, -0.707106769, 0.0, 0.707106769, 0.0, -0.577350259, -0.577350259, -0.577350259, 0.0, 1.0, 2.0, 3.0, 1.0);
        let scale = new Vector3();
        let rotation = new Quaternion();
        let translation = new Vector3();
        m.decompose(scale, rotation, translation);
        expect(scale).toBeInstanceOf(Vector3);
        expect(scale.x).toBeCloseTo(0.99999994);
        expect(scale.y).toBeCloseTo(0.99999994);
        expect(scale.z).toBeCloseTo(0.99999994);
        expect(rotation).toBeInstanceOf(Quaternion);
        expect(rotation.x).toBeCloseTo(0.704556346);
        expect(rotation.y).toBeCloseTo(-0.540625155);
        expect(rotation.z).toBeCloseTo(-0.060003);
        expect(rotation.w).toBeCloseTo(0.455768049);
        expect(translation).toBeInstanceOf(Vector3);
        expect(translation.x).toBeCloseTo(1);
        expect(translation.y).toBeCloseTo(2);
        expect(translation.z).toBeCloseTo(3);
    });

    test("determinant 方法应该正确计算行列式", () => {
        const m = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        expect(m.determinant()).toBe(0);
    });

    test("equals 方法应该正确判断两个矩阵是否相等", () => {
        const m1 = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const m2 = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const m3 = new Matrix(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17);
        expect(m1.equals(m2)).toBe(true);
        expect(m1.equals(m3)).toBe(false);
        expect(m1.equals({})).toBe(false);
    });

    test("toString 方法应该正确返回字符串", () => {
        const m = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        expect(m.toString()).toBe(`{"m11":1,"m12":2,"m13":3,"m14":4,"m21":5,"m22":6,"m23":7,"m24":8,"m31":9,"m32":10,"m33":11,"m34":12,"m41":13,"m42":14,"m43":15,"m44":16}`);
    });

    test("toJSON 方法应该正确返回 JSON 对象", () => {
        const m = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        expect(m.toJSON()).toEqual({
            m11: 1,
            m12: 2,
            m13: 3,
            m14: 4,
            m21: 5,
            m22: 6,
            m23: 7,
            m24: 8,
            m31: 9,
            m32: 10,
            m33: 11,
            m34: 12,
            m41: 13,
            m42: 14,
            m43: 15,
            m44: 16
        });
    });
});