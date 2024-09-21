import Vector2 from "../src/vector2.js";
import Matrix from "../src/matrix.js";
import Quaternion from "../src/quaternion.js";
import List from "@jyostudio/list";

describe("Vector2 类", () => {
    test("静态只读属性正确", () => {
        const { zero, one, unitX, unitY } = Vector2;

        expect(zero.x).toBe(0);
        expect(zero.y).toBe(0);

        expect(one.x).toBe(1);
        expect(one.y).toBe(1);

        expect(unitX.x).toBe(1);
        expect(unitX.y).toBe(0);

        expect(unitY.x).toBe(0);
        expect(unitY.y).toBe(1);
    });

    test("通过各种构造函数构造 Vector2", () => {
        const vector = new Vector2();
        expect(vector.x).toBe(0);
        expect(vector.y).toBe(0);

        const vector1 = new Vector2(5);
        expect(vector1.x).toBe(5);
        expect(vector1.y).toBe(5);

        const vector2 = new Vector2(1, 2);
        expect(vector2.x).toBe(1);
        expect(vector2.y).toBe(2);
    });

    test("实例对象可读写属性正确", () => {
        const vector = new Vector2();
        vector.x = Number.MIN_SAFE_INTEGER;
        vector.y = Number.MAX_SAFE_INTEGER;
        expect(vector.x).toBe(Number.MIN_SAFE_INTEGER);
        expect(vector.y).toBe(Number.MAX_SAFE_INTEGER);
    });

    test("Symbol.iterator 可以正确迭代", () => {
        const vector = new Vector2(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        const values = [...vector];
        expect(values).toEqual([Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]);
    });

    test("运算符函数可以正常使用", () => {
        expect(Vector2["-"](new Vector2(1, 2)).equals(new Vector2(-1, -2))).toBeTruthy();
        expect(new Vector2(1, 2)["+"](new Vector2(1, 2)).equals(new Vector2(2, 4))).toBeTruthy();
        expect(new Vector2(1, 2)["-"](new Vector2(1, 2)).equals(new Vector2(0, 0))).toBeTruthy();
        expect(new Vector2(1, 2)["*"](2).equals(new Vector2(2, 4))).toBeTruthy();
        expect(new Vector2(1, 2)["/"](2).equals(new Vector2(0.5, 1))).toBeTruthy();
        expect(new Vector2(1, 2)["=="](new Vector2(1, 2))).toBeTruthy();
        expect(new Vector2(1, 2)["!="](new Vector2(1, 2))).toBeFalsy();
        expect(new Vector2(1, 2)["=="](new Vector2(3, 4))).toBeFalsy();
        expect(new Vector2(1, 2)["!="](new Vector2(3, 4))).toBeTruthy();
    });

    test("静态方法 add 应该正确计算两个 Vector2 的和", () => {
        const vector1 = new Vector2(1, 2);
        const vector2 = new Vector2(3, 4);
        const result = Vector2.add(vector1, vector2);
        expect(result.x).toBe(4);
        expect(result.y).toBe(6);
    });

    test("静态方法 barycentric 应该正确计算三个 Vector2 的重心坐标", () => {
        const vector1 = new Vector2(1, 2);
        const vector2 = new Vector2(3, 4);
        const vector3 = new Vector2(5, 6);
        const result = Vector2.barycentric(vector1, vector2, vector3, 0.5, 0.5);
        expect(result.x).toBe(4);
        expect(result.y).toBe(5);
    });

    test("静态方法 catmullRom 应该正确计算 Catmull-Rom 插值", () => {
        const vector1 = new Vector2(1, 2);
        const vector2 = new Vector2(3, 4);
        const vector3 = new Vector2(5, 6);
        const vector4 = new Vector2(7, 8);
        const result = Vector2.catmullRom(vector1, vector2, vector3, vector4, 0.5);
        expect(result.x).toBe(4);
        expect(result.y).toBe(5);
    });

    test("静态方法 clamp 应该正确计算 Vector2 的分量限制", () => {
        const vector = new Vector2(1, 2);
        const min = new Vector2(2, 3);
        const max = new Vector2(3, 4);
        const result = Vector2.clamp(vector, min, max);
        expect(result.x).toBe(2);
        expect(result.y).toBe(3);
    });

    test("静态方法 distance 应该正确计算两个 Vector2 之间的距离", () => {
        const vector1 = new Vector2(1, 2);
        const vector2 = new Vector2(4, 6);
        const distance = Vector2.distance(vector1, vector2);
        expect(distance).toBe(5);
    });

    test("静态方法 distanceSquared 应该正确计算两个 Vector2 之间的距离的平方", () => {
        const vector1 = new Vector2(1, 2);
        const vector2 = new Vector2(4, 6);
        const distance = Vector2.distanceSquared(vector1, vector2);
        expect(distance).toBe(25);
    });

    test("静态方法 divide 应该正确计算两个 Vector2 的商", () => {
        const vector1 = new Vector2(4, 6);
        const vector2 = new Vector2(2, 3);
        const result = Vector2.divide(vector1, vector2);
        expect(result.x).toBe(2);
        expect(result.y).toBe(2);

        const result2 = Vector2.divide(vector1, 2);
        expect(result2.x).toBe(2);
        expect(result2.y).toBe(3);
    });

    test("静态方法 dot 应该正确计算两个 Vector2 的点积", () => {
        const vector1 = new Vector2(1, 2);
        const vector2 = new Vector2(3, 4);
        const dot = Vector2.dot(vector1, vector2);
        expect(dot).toBe(11);
    });

    test("静态方法 hermite 应该正确计算 Hermite 插值", () => {
        const vector1 = new Vector2(1, 2);
        const tangent1 = new Vector2(3, 4);
        const vector2 = new Vector2(5, 6);
        const tangent2 = new Vector2(7, 8);
        const result = Vector2.hermite(vector1, tangent1, vector2, tangent2, 0.5);
        expect(result.x).toBe(2.5);
        expect(result.y).toBe(3.5);
    });

    test("静态方法 lerp 应该正确计算两个 Vector2 的线性插值", () => {
        const vector1 = new Vector2(1, 2);
        const vector2 = new Vector2(3, 4);
        const result = Vector2.lerp(vector1, vector2, 0.5);
        expect(result.x).toBe(2);
        expect(result.y).toBe(3);
    });

    test("静态方法 max 应该正确计算两个 Vector2 的分量最大值", () => {
        const vector1 = new Vector2(1, 2);
        const vector2 = new Vector2(3, 4);
        const result = Vector2.max(vector1, vector2);
        expect(result.x).toBe(3);
        expect(result.y).toBe(4);

        const result2 = Vector2.max(vector2, vector1);
        expect(result2.x).toBe(3);
        expect(result2.y).toBe(4);
    });

    test("静态方法 min 应该正确计算两个 Vector2 的分量最小值", () => {
        const vector1 = new Vector2(1, 2);
        const vector2 = new Vector2(3, 4);
        const result = Vector2.min(vector1, vector2);
        expect(result.x).toBe(1);
        expect(result.y).toBe(2);

        const result2 = Vector2.min(vector2, vector1);
        expect(result2.x).toBe(1);
        expect(result2.y).toBe(2);
    });

    test("静态方法 multiply 应该正确计算两个 Vector2 的积", () => {
        const vector1 = new Vector2(1, 2);
        const vector2 = new Vector2(3, 4);
        const result = Vector2.multiply(vector1, vector2);
        expect(result.x).toBe(3);
        expect(result.y).toBe(8);

        const result2 = Vector2.multiply(vector1, 2);
        expect(result2.x).toBe(2);
        expect(result2.y).toBe(4);
    });

    test("静态方法 negate 应该正确计算 Vector2 的负值", () => {
        const vector = new Vector2(1, 2);
        const result = Vector2.negate(vector);
        expect(result.x).toBe(-1);
        expect(result.y).toBe(-2);
    });

    test("静态方法 normalize 应该正确计算 Vector2 的单位向量", () => {
        const vector = new Vector2(3, 4);
        const result = Vector2.normalize(vector);
        expect(result.x).toBeCloseTo(0.6);
        expect(result.y).toBeCloseTo(0.8);
    });

    test("静态方法 reflect 应该正确计算 Vector2 的反射向量", () => {
        const vector = new Vector2(1, -1);
        const normal = new Vector2(0, 1);
        const result = Vector2.reflect(vector, normal);
        expect(result.x).toBe(1);
        expect(result.y).toBe(1);
    });

    test("静态方法 smoothStep 应该正确计算两个 Vector2 的平滑插值", () => {
        const vector1 = new Vector2(1, 2);
        const vector2 = new Vector2(3, 4);
        const result = Vector2.smoothStep(vector1, vector2, 0.5);
        expect(result.x).toBe(2);
        expect(result.y).toBe(3);
    });

    test("静态方法 subtract 应该正确计算两个 Vector2 的差", () => {
        const vector1 = new Vector2(3, 4);
        const vector2 = new Vector2(1, 2);
        const result = Vector2.subtract(vector1, vector2);
        expect(result.x).toBe(2);
        expect(result.y).toBe(2);
    });

    test("静态方法 transform 应该正确计算 Vector2 的仿射变换", () => {
        const vector = new Vector2(1, 2);
        const matrix = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const result = Vector2.transform(vector, matrix);
        expect(result.x).toBe(24);
        expect(result.y).toBe(28);

        const quaternion = new Quaternion(1, 2, 3, 4);
        const result2 = Vector2.transform(vector, quaternion);
        expect(result2.x).toBe(-65);
        expect(result2.y).toBe(-10);

        const sourceArray = new List(Vector2, [new Vector2(1, 2), new Vector2(3, 4)]);
        const destinationArray = new List(Vector2, [Vector2.zero, Vector2.zero]);

        const errDestinationArray = new List(Vector2, [Vector2.zero]);

        expect(() => Vector2.transform(sourceArray, 0, matrix, destinationArray, 0, 3)).toThrow();
        expect(() => Vector2.transform(sourceArray, 0, matrix, errDestinationArray, 0, 2)).toThrow();

        Vector2.transform(sourceArray, 0, matrix, destinationArray, 0, 2);
        expect(destinationArray[0].x).toBe(24);
        expect(destinationArray[0].y).toBe(28);
        expect(destinationArray[1].x).toBe(36);
        expect(destinationArray[1].y).toBe(44);

        Vector2.transform(sourceArray, matrix, destinationArray);
        expect(destinationArray[0].x).toBe(24);
        expect(destinationArray[0].y).toBe(28);
        expect(destinationArray[1].x).toBe(36);
        expect(destinationArray[1].y).toBe(44);

        const sourceArray2 = new List(Vector2, [new Vector2(1, 2), new Vector2(3, 4)]);
        const destinationArray2 = new List(Vector2, [Vector2.zero, Vector2.zero]);

        expect(() => Vector2.transform(sourceArray2, 1, quaternion, destinationArray2, 0, 2)).toThrow();
        expect(() => Vector2.transform(sourceArray2, 0, quaternion, errDestinationArray, 0, 2)).toThrow();

        Vector2.transform(sourceArray2, 0, quaternion, destinationArray2, 0, 2);
        expect(destinationArray2[0].x).toBe(-65);
        expect(destinationArray2[0].y).toBe(-10);
        expect(destinationArray2[1].x).toBe(-155);
        expect(destinationArray2[1].y).toBe(8);

        Vector2.transform(sourceArray2, quaternion, destinationArray2);
        expect(destinationArray2[0].x).toBe(-65);
        expect(destinationArray2[0].y).toBe(-10);
        expect(destinationArray2[1].x).toBe(-155);
        expect(destinationArray2[1].y).toBe(8);
    });

    test("静态方法 transformNormal 应该正确计算 Vector2 的法线变换", () => {
        const vector = new Vector2(1, 2);
        const matrix = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        const result = Vector2.transformNormal(vector, matrix);
        expect(result.x).toBe(11);
        expect(result.y).toBe(14);

        const sourceArray = new List(Vector2, [new Vector2(1, 2), new Vector2(3, 4)]);
        const destinationArray = new List(Vector2, [Vector2.zero, Vector2.zero]);

        const errDestinationArray = new List(Vector2, [Vector2.zero]);

        expect(() => Vector2.transformNormal(sourceArray, 0, matrix, destinationArray, 0, 3)).toThrow();
        expect(() => Vector2.transformNormal(sourceArray, 0, matrix, errDestinationArray, 0, 2)).toThrow();

        Vector2.transformNormal(sourceArray, 0, matrix, destinationArray, 0, 2);
        expect(destinationArray[0].x).toBe(11);
        expect(destinationArray[0].y).toBe(14);
        expect(destinationArray[1].x).toBe(23);
        expect(destinationArray[1].y).toBe(30);

        expect(() => Vector2.transformNormal(sourceArray, matrix, errDestinationArray)).toThrow();

        Vector2.transformNormal(sourceArray, matrix, destinationArray);
        expect(destinationArray[0].x).toBe(11);
        expect(destinationArray[0].y).toBe(14);
        expect(destinationArray[1].x).toBe(23);
        expect(destinationArray[1].y).toBe(30);
    });

    test("length 方法应该正确计算 Vector2 的长度", () => {
        const vector = new Vector2(3, 4);
        const length = vector.length();
        expect(length).toBe(5);
    });

    test("lengthSquared 方法应该正确计算 Vector2 的长度的平方", () => {
        const vector = new Vector2(3, 4);
        const length = vector.lengthSquared();
        expect(length).toBe(25);
    });

    test("normalize 方法应该正确计算 Vector2 的单位向量", () => {
        const vector = new Vector2(3, 4);
        vector.normalize();
        expect(vector.x).toBeCloseTo(0.6);
        expect(vector.y).toBeCloseTo(0.8);
    });

    test("equals 方法应该正确判断两个 Vector2 是否相等", () => {
        const vector1 = new Vector2(1, 2);
        const vector2 = new Vector2(1, 2);
        expect(vector1.equals(vector2)).toBeTruthy();

        expect(vector1.equals({ x: 1, y: 2 })).toBe(false);
    });

    test("toString 方法应该正确返回 Vector2 的字符串表示", () => {
        const vector = new Vector2(1, 2);
        const string = vector.toString();
        expect(string).toBe(`{"x":1,"y":2}`);
    });

    test("toJSON 方法应该正确返回 Vector2 的 JSON 表示", () => {
        const vector = new Vector2(1, 2);
        const json = vector.toJSON();
        expect(json).toEqual({ x: 1, y: 2 });
    });
});