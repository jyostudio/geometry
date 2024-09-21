import List from "@jyostudio/list";
import Matrix from "../src/matrix.js";
import Quaternion from "../src/quaternion.js";
import Vector2 from "../src/vector2.js";
import Vector3 from "../src/vector3.js";

describe("Vector3 类", () => {
    test("静态只读属性正确", () => {
        const { backward, down, forward, left, one, right, unitX, unitY, unitZ, up, zero } = Vector3;
        expect(backward).toEqual(new Vector3(0, 0, 1));
        expect(down).toEqual(new Vector3(0, -1, 0));
        expect(forward).toEqual(new Vector3(0, 0, -1));
        expect(left).toEqual(new Vector3(-1, 0, 0));
        expect(one).toEqual(new Vector3(1, 1, 1));
        expect(right).toEqual(new Vector3(1, 0, 0));
        expect(unitX).toEqual(new Vector3(1, 0, 0));
        expect(unitY).toEqual(new Vector3(0, 1, 0));
        expect(unitZ).toEqual(new Vector3(0, 0, 1));
        expect(up).toEqual(new Vector3(0, 1, 0));
        expect(zero).toEqual(new Vector3(0, 0, 0));
    });

    test("通过各种构造函数构造 Vector3", () => {
        const v = new Vector3();
        expect(v.x).toBe(0);
        expect(v.y).toBe(0);
        expect(v.z).toBe(0);

        const v1 = new Vector3(1);
        expect(v1.x).toBe(1);
        expect(v1.y).toBe(1);
        expect(v1.z).toBe(1);

        const v2 = new Vector3(1, 2, 3);
        expect(v2.x).toBe(1);
        expect(v2.y).toBe(2);
        expect(v2.z).toBe(3);

        const v3 = new Vector3(new Vector2(-1, 0), 1);
        expect(v3.x).toBe(-1);
        expect(v3.y).toBe(0);
        expect(v3.z).toBe(1);
    });

    test("实例对象可读写属性正确", () => {
        const v = new Vector3();
        v.x = 1;
        v.y = 2;
        v.z = 3;
        expect(v.x).toBe(1);
        expect(v.y).toBe(2);
        expect(v.z).toBe(3);
    });

    test("Symbol.iterator 可以正确迭代", () => {
        const v = new Vector3(1, 2, 3);
        const arr = [...v];
        expect(arr).toEqual([1, 2, 3]);
    });

    test("运算符函数可以正常使用", () => {
        expect(Vector3["-"](new Vector3(1, 2, 3)).equals(new Vector3(-1, -2, -3))).toBeTruthy();
        expect(new Vector3(1, 2, 3)["+"](new Vector3(1, 2, 3)).equals(new Vector3(2, 4, 6))).toBeTruthy();
        expect(new Vector3(1, 2, 3)["-"](new Vector3(1, 2, 3)).equals(new Vector3(0, 0, 0))).toBeTruthy();
        expect(new Vector3(1, 2, 3)["*"](2).equals(new Vector3(2, 4, 6))).toBeTruthy();
        expect(new Vector3(1, 2, 3)["/"](2).equals(new Vector3(0.5, 1, 1.5))).toBeTruthy();
        expect(new Vector3(1, 2, 3)["=="](new Vector3(1, 2, 3))).toBeTruthy();
        expect(new Vector3(1, 2, 3)["!="](new Vector3(1, 2, 3))).toBeFalsy();
        expect(new Vector3(1, 2, 3)["=="](new Vector3(3, 4, 5))).toBeFalsy();
        expect(new Vector3(1, 2, 3)["!="](new Vector3(3, 4, 5))).toBeTruthy();
    });

    test("静态方法 add 应该正确计算两个向量的和", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        const v3 = Vector3.add(v1, v2);
        expect(v3.x).toBe(5);
        expect(v3.y).toBe(7);
        expect(v3.z).toBe(9);
    });

    test("静态方法 barycentric 应该正确计算重心坐标", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        const v3 = new Vector3(7, 8, 9);
        const v4 = Vector3.barycentric(v1, v2, v3, 0.25, 0.25);
        expect(v4.x).toBeCloseTo(3.25);
        expect(v4.y).toBeCloseTo(4.25);
        expect(v4.z).toBeCloseTo(5.25);
    });

    test("静态方法 catmullRom 应该正确计算 Catmull-Rom 插值", () => {
        const v0 = new Vector3(1, 2, 3);
        const v1 = new Vector3(4, 5, 6);
        const v2 = new Vector3(7, 8, 9);
        const v3 = new Vector3(2, 3, 4);
        const v4 = Vector3.catmullRom(v0, v1, v2, v3, 0.5);
        expect(v4.x).toBe(6);
        expect(v4.y).toBe(7);
        expect(v4.z).toBe(8);
    });

    test("静态方法 clamp 应该正确计算向量的分量限制", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(0, 1, 2);
        const v3 = new Vector3(2, 3, 4);
        const v4 = Vector3.clamp(v1, v2, v3);
        expect(v4.x).toBe(1);
        expect(v4.y).toBe(2);
        expect(v4.z).toBe(3);
    });

    test("静态方法 cross 应该正确计算两个向量的叉积", () => {
        const v1 = new Vector3(1, 0, 0);
        const v2 = new Vector3(0, 1, 0);
        const v3 = Vector3.cross(v1, v2);
        expect(v3.x === 0).toBeTruthy();
        expect(v3.y === 0).toBeTruthy();
        expect(v3.z === 1).toBeTruthy();
    });

    test("静态方法 distance 应该正确计算两个向量的距离", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 6, 8);
        const distance = Vector3.distance(v1, v2);
        expect(distance).toBeCloseTo(7.071068);
    });

    test("静态方法 distanceSquared 应该正确计算两个向量的距离的平方", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 6, 8);
        const distanceSquared = Vector3.distanceSquared(v1, v2);
        expect(distanceSquared).toBeCloseTo(50);
    });

    test("静态方法 divide 应该正确计算向量与标量的除法", () => {
        const v1 = new Vector3(2, 4, 6);
        const v2 = Vector3.divide(v1, 2);
        expect(v2.x).toBe(1);
        expect(v2.y).toBe(2);
        expect(v2.z).toBe(3);

        const v3 = Vector3.divide(v1, new Vector3(2, 2, 2));
        expect(v3.x).toBe(1);
        expect(v3.y).toBe(2);
        expect(v3.z).toBe(3);
    });

    test("静态方法 dot 应该正确计算两个向量的点积", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        const dot = Vector3.dot(v1, v2);
        expect(dot).toBe(32);
    });

    test("静态方法 hermite 应该正确计算 Hermite 插值", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        const v3 = new Vector3(7, 8, 9);
        const v4 = new Vector3(2, 3, 4);
        const v5 = Vector3.hermite(v1, v2, v3, v4, 0.5);
        expect(v5.x).toBe(4.25);
        expect(v5.y).toBe(5.25);
        expect(v5.z).toBe(6.25);
    });

    test("静态方法 lerp 应该正确计算线性插值", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        const v3 = Vector3.lerp(v1, v2, 0.5);
        expect(v3.x).toBe(2.5);
        expect(v3.y).toBe(3.5);
        expect(v3.z).toBe(4.5);
    });

    test("静态方法 max 应该正确计算向量的分量最大值", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        const v3 = Vector3.max(v1, v2);
        expect(v3.x).toBe(4);
        expect(v3.y).toBe(5);
        expect(v3.z).toBe(6);
    });

    test("静态方法 min 应该正确计算向量的分量最小值", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        const v3 = Vector3.min(v1, v2);
        expect(v3.x).toBe(1);
        expect(v3.y).toBe(2);
        expect(v3.z).toBe(3);
    });

    test("静态方法 multiply 应该正确计算向量与标量的乘法", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = Vector3.multiply(v1, 2);
        expect(v2.x).toBe(2);
        expect(v2.y).toBe(4);
        expect(v2.z).toBe(6);

        const v3 = Vector3.multiply(v1, new Vector3(2, 2, 2));
        expect(v3.x).toBe(2);
        expect(v3.y).toBe(4);
        expect(v3.z).toBe(6);
    });

    test("静态方法 negate 应该正确计算向量的取反", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = Vector3.negate(v1);
        expect(v2.x).toBe(-1);
        expect(v2.y).toBe(-2);
        expect(v2.z).toBe(-3);
    });

    test("静态方法 normalize 应该正确计算向量的单位向量", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = Vector3.normalize(v1);
        expect(v2.x).toBeCloseTo(0.267261);
        expect(v2.y).toBeCloseTo(0.534522);
        expect(v2.z).toBeCloseTo(0.801784);
    });

    test("静态方法 reflect 应该正确计算向量的反射向量", () => {
        const v1 = new Vector3(1, -1, 0);
        const v2 = new Vector3(0, 1, 0);
        const v3 = Vector3.reflect(v1, v2);
        expect(v3.x).toBe(1);
        expect(v3.y).toBe(1);
        expect(v3.z).toBe(0);
    });

    test("静态方法 smoothStep 应该正确计算平滑插值", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        const v3 = Vector3.smoothStep(v1, v2, 0.5);
        expect(v3.x).toBe(2.5);
        expect(v3.y).toBe(3.5);
        expect(v3.z).toBe(4.5);
    });

    test("静态方法 subtract 应该正确计算两个向量的差", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        const v3 = Vector3.subtract(v1, v2);
        expect(v3.x).toBe(-3);
        expect(v3.y).toBe(-3);
        expect(v3.z).toBe(-3);
    });

    test("静态方法 transform 应该正确计算向量的仿射变换", () => {
        const v1 = new Vector3(1, 2, 3);
        const m = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const v2 = Vector3.transform(v1, m);
        expect(v2.x).toBe(51);
        expect(v2.y).toBe(58);
        expect(v2.z).toBe(65);

        const q = new Quaternion(1, 2, 3, 4);
        const v3 = Vector3.transform(v1, q);
        expect(v3.x).toBe(1);
        expect(v3.y).toBe(2);
        expect(v3.z).toBe(3);

        const sourceArray = new List(Vector3, [v1]);
        const destinationArray = new List(Vector3, [Vector3.zero]);

        const errDestinationArray = new List(Vector3);

        expect(() => Vector3.transform(sourceArray, 0, m, errDestinationArray, 2, 1)).toThrow();
        expect(() => Vector3.transform(sourceArray, 0, m, errDestinationArray, 0, 2)).toThrow();

        Vector3.transform(sourceArray, 0, m, destinationArray, 0, 1);
        expect(destinationArray[0].x).toBe(51);
        expect(destinationArray[0].y).toBe(58);
        expect(destinationArray[0].z).toBe(65);

        expect(() => Vector3.transform(sourceArray, 0, q, errDestinationArray, 2, 1)).toThrow();
        expect(() => Vector3.transform(sourceArray, 0, q, errDestinationArray, 0, 2)).toThrow();

        Vector3.transform(sourceArray, 0, q, destinationArray, 0, 1);
        expect(destinationArray[0].x).toBe(1);
        expect(destinationArray[0].y).toBe(2);
        expect(destinationArray[0].z).toBe(3);

        Vector3.transform(sourceArray, m, destinationArray);
        expect(destinationArray[0].x).toBe(51);
        expect(destinationArray[0].y).toBe(58);
        expect(destinationArray[0].z).toBe(65);

        Vector3.transform(sourceArray, q, destinationArray);
        expect(destinationArray[0].x).toBe(1);
        expect(destinationArray[0].y).toBe(2);
        expect(destinationArray[0].z).toBe(3);
    });

    test("静态方法 transformNormal 应该正确计算法线的仿射变换", () => {
        const v1 = new Vector3(1, 2, 3);
        const m = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const v2 = Vector3.transformNormal(v1, m);
        expect(v2.x).toBe(38);
        expect(v2.y).toBe(44);
        expect(v2.z).toBe(50);

        const sourceArray = new List(Vector3, [v1]);
        const destinationArray = new List(Vector3, [Vector3.zero]);

        const errDestinationArray = new List(Vector3);

        expect(() => Vector3.transformNormal(sourceArray, 0, m, errDestinationArray, 2, 1)).toThrow();
        expect(() => Vector3.transformNormal(sourceArray, 0, m, errDestinationArray, 0, 2)).toThrow();

        Vector3.transformNormal(sourceArray, 0, m, destinationArray, 0, 1);
        expect(destinationArray[0].x).toBe(38);
        expect(destinationArray[0].y).toBe(44);
        expect(destinationArray[0].z).toBe(50);

        expect(() => Vector3.transformNormal(sourceArray, m, new List(Vector3))).toThrow();

        Vector3.transformNormal(sourceArray, m, destinationArray);
        expect(destinationArray[0].x).toBe(38);
        expect(destinationArray[0].y).toBe(44);
        expect(destinationArray[0].z).toBe(50);
    });

    test("equals 方法应该正确判断两个向量是否相等", () => {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(1, 2, 3);
        expect(v1.equals(v2)).toBeTruthy();

        expect(v1.equals({ x: 1, y: 2, z: 3 })).toBeFalsy();
    });

    test("length 方法应该正确计算向量的长度", () => {
        const v = new Vector3(1, 2, 3);
        const length = v.length();
        expect(length).toBeCloseTo(3.741657);
    });

    test("lengthSquared 方法应该正确计算向量的长度的平方", () => {
        const v = new Vector3(1, 2, 3);
        const lengthSquared = v.lengthSquared();
        expect(lengthSquared).toBe(14);
    });

    test("normalize 方法应该正确计算向量的单位向量", () => {
        const v = new Vector3(1, 2, 3);
        v.normalize();
        expect(v.x).toBeCloseTo(0.267261);
        expect(v.y).toBeCloseTo(0.534522);
        expect(v.z).toBeCloseTo(0.801784);
    });

    test("toString 方法应该正确返回字符串", () => {
        const v = new Vector3(1, 2, 3);
        const str = v.toString();
        expect(str).toBe(`{"x":1,"y":2,"z":3}`);
    });

    test("toJSON 方法应该正确返回 JSON 对象", () => {
        const v = new Vector3(1, 2, 3);
        const json = v.toJSON();
        expect(json).toEqual({ x: 1, y: 2, z: 3 });
    });
});