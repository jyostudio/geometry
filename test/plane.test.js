import BoundingBox from "../src/boundingBox.js";
import BoundingFrustum from "../src/boundingFrustum.js";
import BoundingSphere from "../src/boundingSphere.js";
import Matrix from "../src/matrix.js";
import Plane from "../src/plane.js";
import PlaneIntersectionType from "../src/planeIntersectionType.js";
import Quaternion from "../src/quaternion.js";
import Vector3 from "../src/vector3.js";
import Vector4 from "../src/vector4.js";

describe("Plane 类", () => {
    test("通过各种构造函数构造 Plane", () => {
        const plane = new Plane();
        expect(plane.normal.x).toBe(0);
        expect(plane.normal.y).toBe(0);
        expect(plane.normal.z).toBe(0);
        expect(plane.d).toBe(0);

        const plane2 = new Plane(1, 2, 3, 4);
        expect(plane2.normal.x).toBe(1);
        expect(plane2.normal.y).toBe(2);
        expect(plane2.normal.z).toBe(3);
        expect(plane2.d).toBe(4);

        const plane3 = new Plane(new Vector3(1, 2, 3), 4);
        expect(plane3.normal.x).toBe(1);
        expect(plane3.normal.y).toBe(2);
        expect(plane3.normal.z).toBe(3);
        expect(plane3.d).toBe(4);

        const plane4 = new Plane(new Vector3(1, 2, 3), new Vector3(4, 5, 6), new Vector3(7, 8, 9));
        expect(plane4.normal.x).toBe(NaN);
        expect(plane4.normal.y).toBe(NaN);
        expect(plane4.normal.z).toBe(NaN);
        expect(plane4.d).toBe(NaN);

        const plane5 = new Plane(new Vector4(1, 2, 3, 4));
        expect(plane5.normal.x).toBe(1);
        expect(plane5.normal.y).toBe(2);
        expect(plane5.normal.z).toBe(3);
        expect(plane5.d).toBe(4);

    });

    test("实例对象的可读写属性正确", () => {
        const plane = new Plane();
        plane.normal = new Vector3(1, 2, 3);
        plane.d = 4;

        expect(plane.normal.x).toBe(1);
        expect(plane.normal.y).toBe(2);
        expect(plane.normal.z).toBe(3);
        expect(plane.d).toBe(4);
    });

    test("Symbol.iterator 可以正确迭代", () => {
        const plane = new Plane(1, 2, 3, 4);
        const array = [...plane];
        expect(array[0].x).toBe(1);
        expect(array[0].y).toBe(2);
        expect(array[0].z).toBe(3);
        expect(array[1]).toBe(4);
    });

    test("静态方法 normalize 可以正确返回法向量单位化的 Plane", () => {
        const plane = Plane.normalize(new Plane(1, 2, 3, 4));
        expect(plane.normal.x).toBeCloseTo(0.2672612419124244);
        expect(plane.normal.y).toBeCloseTo(0.5345224838248488);
        expect(plane.normal.z).toBeCloseTo(0.8017837257372732);
        expect(plane.d).toBeCloseTo(1.0723805294763645);
    });

    test("静态方法 transform 可以正确返回变换后的 Plane", () => {
        let plane = new Plane(1, 2, 3, 4);
        let matrix = new Matrix(1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1);
        let result = Plane.transform(plane, matrix);
        expect(result.normal.x).toBe(1);
        expect(result.normal.y).toBe(2);
        expect(result.normal.z).toBe(3);
        expect(result.d).toBe(4);

        let quaternion = new Quaternion(1, 0, 0, 0);
        result = Plane.transform(plane, quaternion);
        expect(result.normal.x).toBe(1);
        expect(result.normal.y).toBe(-2);
        expect(result.normal.z).toBe(-3);
        expect(result.d).toBe(4);
    });

    test("dot 方法可以正确返回点乘结果", () => {
        let plane = new Plane(1, 2, 3, 4);
        let vector = new Vector4(1, 2, 3, 4);
        let result = plane.dot(vector);
        expect(result).toBe(30);
    });

    test("dotCoordinate 方法可以正确返回点乘坐标结果", () => {
        let plane = new Plane(1, 2, 3, 4);
        let vector = new Vector3(1, 2, 3);
        let result = plane.dotCoordinate(vector);
        expect(result).toBe(18);
    });

    test("dotNormal 方法可以正确返回点乘法向量结果", () => {
        let plane = new Plane(1, 2, 3, 4);
        let vector = new Vector3(1, 2, 3);
        let result = plane.dotNormal(vector);
        expect(result).toBe(14);
    });

    test("equals 方法可以正确判断两个 Plane 是否相等", () => {
        let plane = new Plane(1, 2, 3, 4);
        let plane2 = new Plane(1, 2, 3, 4);
        let result = plane.equals(plane2);
        expect(result).toBe(true);

        plane2 = new Plane(1, 2, 3, 5);
        result = plane.equals(plane2);
        expect(result).toBe(false);

        expect(plane.equals()).toBe(false);
    });

    test("intersects 方法可以正确判断两个 Plane 是否相交", () => {
        let plane = new Plane(1, 2, 3, 4);
        let boundingBox = new BoundingBox(new Vector3(1, 1, 1), new Vector3(2, 2, 2));
        let result = plane.intersects(boundingBox);
        expect(result).toBe(PlaneIntersectionType.front);

        let boundingFrustum = new BoundingFrustum(new Matrix(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1));
        result = plane.intersects(boundingFrustum);
        expect(result).toBe(PlaneIntersectionType.front);

        let boundingSphere = new BoundingSphere(new Vector3(1, 1, 1), 1);
        result = plane.intersects(boundingSphere);
        expect(result).toBe(PlaneIntersectionType.front);
    });

    test("normalize 方法可以正确返回法向量单位化的 Plane", () => {
        const plane = new Plane(1, 2, 3, 4);
        plane.normalize();
        expect(plane.normal.x).toBeCloseTo(0.2672612419124244);
        expect(plane.normal.y).toBeCloseTo(0.5345224838248488);
        expect(plane.normal.z).toBeCloseTo(0.8017837257372732);
        expect(plane.d).toBeCloseTo(1.0723805294763645);
    });

    test("toString 方法可以正确返回字符串", () => {
        const plane = new Plane(1, 2, 3, 4);
        expect(plane.toString()).toBe(`{"normal":{"x":1,"y":2,"z":3},"d":4}`);
    });

    test("toJSON 方法可以正确返回 JSON", () => {
        const plane = new Plane(1, 2, 3, 4);
        const obj = plane.toJSON();
        expect(obj.normal.x).toBe(1);
        expect(obj.normal.y).toBe(2);
        expect(obj.normal.z).toBe(3);
        expect(obj.d).toBe(4);
    });
});