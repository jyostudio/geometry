import List from "@jyostudio/list";
import Matrix from "../src/matrix.js";
import Quaternion from "../src/quaternion.js";
import Vector2 from "../src/vector2.js";
import Vector3 from "../src/vector3.js";
import Vector4 from "../src/vector4.js";

describe("Vector4 类", () => {
    test("静态只读属性正确", () => {
        const { one, unitW, unitX, unitY, unitZ, zero } = Vector4;
        expect(one).toEqual(new Vector4(1, 1, 1, 1));
        expect(unitW).toEqual(new Vector4(0, 0, 0, 1));
        expect(unitX).toEqual(new Vector4(1, 0, 0, 0));
        expect(unitY).toEqual(new Vector4(0, 1, 0, 0));
        expect(unitZ).toEqual(new Vector4(0, 0, 1, 0));
        expect(zero).toEqual(new Vector4(0, 0, 0, 0));
    });

    test("通过各种构造函数构造 Vector4", () => {
        const v1 = new Vector4();
        expect(v1).toEqual(new Vector4(0, 0, 0, 0));

        const v2 = new Vector4(Number.MIN_SAFE_INTEGER);
        expect(v2).toEqual(new Vector4(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER));

        const v3 = new Vector4(new Vector3(1, 2, 3), 4);
        expect(v3).toEqual(new Vector4(1, 2, 3, 4));

        const v4 = new Vector4(new Vector2(1, 2), 3, 4);
        expect(v4).toEqual(new Vector4(1, 2, 3, 4));
    });

    test("实例对象可读写属性正确", () => {
        const v = new Vector4();
        v.x = 1;
        v.y = 2;
        v.z = 3;
        v.w = 4;
        expect(v).toEqual(new Vector4(1, 2, 3, 4));
    });

    test("Symbol.iterator 可以正确迭代", () => {
        const v = new Vector4(1, 2, 3, 4);
        const arr = [];
        for (const item of v) {
            arr.push(item);
        }
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    test("运算符函数可以正常使用", () => {
        expect(Vector4["-"](new Vector4(1, 2, 3, 4)).equals(new Vector4(-1, -2, -3, -4))).toBeTruthy();
        expect(new Vector4(1, 2, 3, 4)["+"](new Vector4(1, 2, 3, 4)).equals(new Vector4(2, 4, 6, 8))).toBeTruthy();
        expect(new Vector4(1, 2, 3, 4)["-"](new Vector4(1, 2, 3, 4)).equals(new Vector4(0, 0, 0, 0))).toBeTruthy();
        expect(new Vector4(1, 2, 3, 4)["*"](2).equals(new Vector4(2, 4, 6, 8))).toBeTruthy();
        expect(new Vector4(1, 2, 3, 4)["/"](2).equals(new Vector4(0.5, 1, 1.5, 2))).toBeTruthy();
        expect(new Vector4(1, 2, 3, 4)["=="](new Vector4(1, 2, 3, 4))).toBeTruthy();
        expect(new Vector4(1, 2, 3, 4)["!="](new Vector4(1, 2, 3, 4))).toBeFalsy();
        expect(new Vector4(1, 2, 3, 4)["=="](new Vector4(2, 3, 4, 5))).toBeFalsy();
        expect(new Vector4(1, 2, 3, 4)["!="](new Vector4(2, 3, 4, 5))).toBeTruthy();
    });

    test("静态方法 add 应该正确计算两个向量的和", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const v3 = Vector4.add(v1, v2);
        expect(v3).toEqual(new Vector4(6, 8, 10, 12));
    });

    test("静态方法 barycentric 应该正确计算重心坐标", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const v3 = new Vector4(9, 10, 11, 12);
        const v4 = Vector4.barycentric(v1, v2, v3, 0.1, 0.2);
        expect(v4).toEqual(new Vector4(3, 4, 5, 6));
    });

    test("静态方法 catmullRom 应该正确计算 Catmull-Rom 插值", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const v3 = new Vector4(9, 10, 11, 12);
        const v4 = new Vector4(13, 14, 15, 16);
        const v5 = Vector4.catmullRom(v1, v2, v3, v4, 0.1);
        expect(v5).toEqual(new Vector4(5.4, 6.4, 7.4, 8.4));
    });

    test("静态方法 clamp 应该正确计算向量的分量限制", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const min = new Vector4(2, 2, 2, 2);
        const max = new Vector4(3, 3, 3, 3);
        const v2 = Vector4.clamp(v1, min, max);
        expect(v2).toEqual(new Vector4(2, 2, 3, 3));
    });

    test("静态方法 distance 应该正确计算两个向量的距离", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const d = Vector4.distance(v1, v2);
        expect(d).toBeCloseTo(8);
    });

    test("静态方法 distanceSquared 应该正确计算两个向量的距离的平方", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const d = Vector4.distanceSquared(v1, v2);
        expect(d).toBeCloseTo(64);
    });

    test("静态方法 divide 应该正确计算向量与标量的除法", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const v3 = Vector4.divide(v1, v2);
        expect(v3).toEqual(new Vector4(0.2, 1 / 3, 3 / 7, 0.5));

        const v4 = Vector4.divide(v1, 2);
        expect(v4).toEqual(new Vector4(0.5, 1, 1.5, 2));
    });

    test("静态方法 dot 应该正确计算两个向量的点积", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const d = Vector4.dot(v1, v2);
        expect(d).toBeCloseTo(70);
    });

    test("静态方法 hermite 应该正确计算 Hermite 插值", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const v3 = new Vector4(9, 10, 11, 12);
        const v4 = new Vector4(13, 14, 15, 16);
        const v5 = Vector4.hermite(v1, v2, v3, v4, 0.1);
        expect(v5).toEqual(new Vector4(1.512, 2.584, 3.656, 4.728));
    });

    test("静态方法 lerp 应该正确计算线性插值", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const v3 = Vector4.lerp(v1, v2, 0.1);
        expect(v3).toEqual(new Vector4(1.4, 2.4, 3.4, 4.4));
    });

    test("静态方法 max 应该正确计算向量的分量最大值", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const v3 = Vector4.max(v1, v2);
        expect(v3).toEqual(new Vector4(5, 6, 7, 8));
    });

    test("静态方法 min 应该正确计算向量的分量最小值", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const v3 = Vector4.min(v1, v2);
        expect(v3).toEqual(new Vector4(1, 2, 3, 4));
    });

    test("静态方法 multiply 应该正确计算向量与标量的乘法", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = Vector4.multiply(v1, 2);
        expect(v2).toEqual(new Vector4(2, 4, 6, 8));

        const v3 = new Vector4(5, 6, 7, 8);
        const v4 = Vector4.multiply(v1, v3);
        expect(v4).toEqual(new Vector4(5, 12, 21, 32));
    });

    test("静态方法 negate 应该正确计算向量的取反", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = Vector4.negate(v1);
        expect(v2).toEqual(new Vector4(-1, -2, -3, -4));
    });

    test("静态方法 normalize 应该正确计算向量的单位向量", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = Vector4.normalize(v1);
        expect(v2).toEqual(new Vector4(0.18257418583505536, 0.3651483716701107, 0.5477225575051661, 0.7302967433402214));
    });

    test("静态方法 smoothStep 应该正确计算平滑步进插值", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const v3 = Vector4.smoothStep(v1, v2, 0.1);
        expect(v3).toEqual(new Vector4(1.112, 2.112, 3.112, 4.112));
    });

    test("静态方法 subtract 应该正确计算两个向量的差", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(5, 6, 7, 8);
        const v3 = Vector4.subtract(v1, v2);
        expect(v3).toEqual(new Vector4(-4, -4, -4, -4));
    });

    test("静态方法 transform 应该正确计算向量的仿射变换", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const m = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const v2 = Vector4.transform(v1, m);
        expect(v2).toEqual(new Vector4(90, 100, 110, 120));

        const q = new Quaternion(5, 6, 7, 8);
        const v3 = Vector4.transform(v1, q);
        expect(v3).toEqual(new Vector4(225, -110, -61, 4));

        const v4 = new Vector3(1, 2, 3);
        const v5 = Vector4.transform(v4, m);
        expect(v5).toEqual(new Vector4(51, 58, 65, 72));

        const v6 = Vector4.transform(v4, q);
        expect(v6).toEqual(new Vector4(225, -110, -61, 1));

        const v7 = new Vector2(1, 2);
        const v8 = Vector4.transform(v7, m);
        expect(v8).toEqual(new Vector4(24, 28, 32, 36));

        const v9 = Vector4.transform(v7, q);
        expect(v9).toEqual(new Vector4(-273, -122, 302, 1));

        const sourceArray = new List(Vector4, [new Vector4(1, 2, 3, 4), new Vector4(5, 6, 7, 8)]);
        const destinationArray = new List(Vector4, [new Vector4(), new Vector4()]);
        Vector4.transform(sourceArray, 0, m, destinationArray, 0, 2);

        const errDestinationArray = new List(Vector4, [new Vector4()]);
        expect(() => Vector4.transform(sourceArray, 0, m, errDestinationArray, 0, 2)).toThrow();
        expect(() => Vector4.transform(sourceArray, 0, m, errDestinationArray, 0, 3)).toThrow();

        expect(destinationArray[0].x).toBe(90);
        expect(destinationArray[0].y).toBe(100);
        expect(destinationArray[0].z).toBe(110);
        expect(destinationArray[0].w).toBe(120);
        expect(destinationArray[1].x).toBe(202);
        expect(destinationArray[1].y).toBe(228);
        expect(destinationArray[1].z).toBe(254);
        expect(destinationArray[1].w).toBe(280);

        Vector4.transform(sourceArray, m, destinationArray);

        expect(destinationArray[0].x).toBe(90);
        expect(destinationArray[0].y).toBe(100);
        expect(destinationArray[0].z).toBe(110);
        expect(destinationArray[0].w).toBe(120);
        expect(destinationArray[1].x).toBe(202);
        expect(destinationArray[1].y).toBe(228);
        expect(destinationArray[1].z).toBe(254);
        expect(destinationArray[1].w).toBe(280);

        Vector4.transform(sourceArray, q, destinationArray);

        expect(destinationArray[0].x).toBe(225);
        expect(destinationArray[0].y).toBe(-110);
        expect(destinationArray[0].z).toBe(-61);
        expect(destinationArray[0].w).toBe(4);
        expect(destinationArray[1].x).toBe(5);
        expect(destinationArray[1].y).toBe(6);
        expect(destinationArray[1].z).toBe(7);
        expect(destinationArray[1].w).toBe(8);
    });

    test("方法 equals 应该正确判断两个向量是否相等", () => {
        const v1 = new Vector4(1, 2, 3, 4);
        const v2 = new Vector4(1, 2, 3, 4);
        const v3 = new Vector4(5, 6, 7, 8);
        expect(v1.equals(v2)).toBeTruthy();
        expect(v1.equals(v3)).toBeFalsy();
        expect(v1.equals({ x: 1, y: 2, z: 3, w: 4 })).toBeFalsy();
    });

    test("方法 length 应该正确计算向量的长度", () => {
        const v = new Vector4(1, 2, 3, 4);
        const l = v.length();
        expect(l).toBeCloseTo(5.477225575051661);
    });

    test("方法 lengthSquared 应该正确计算向量的长度的平方", () => {
        const v = new Vector4(1, 2, 3, 4);
        const l = v.lengthSquared();
        expect(l).toBeCloseTo(30);
    });

    test("方法 normalize 应该正确计算向量的单位向量", () => {
        const v = new Vector4(1, 2, 3, 4);
        v.normalize();
        expect(v).toEqual(new Vector4(0.18257418583505536, 0.3651483716701107, 0.5477225575051661, 0.7302967433402214));
    });

    test("方法 toString 应该正确返回字符串表示", () => {
        const v = new Vector4(1, 2, 3, 4);
        const s = v.toString();
        expect(s).toBe(`{"x":1,"y":2,"z":3,"w":4}`);
    });

    test("toJSON 方法应该正确返回 JSON 对象", () => {
        const v = new Vector4(1, 2, 3, 4);
        const json = v.toJSON();
        expect(json).toEqual({ x: 1, y: 2, z: 3, w: 4 });
    });
});