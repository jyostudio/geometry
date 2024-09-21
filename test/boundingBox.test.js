import List from "@jyostudio/list";
import BoundingBox from "../src/boundingBox.js";
import Vector3 from "../src/vector3.js";
import BoundingSphere from "../src/boundingSphere.js";
import ContainmentType from "../src/containmentType.js";
import BoundingFrustum from "../src/boundingFrustum.js";
import Matrix from "../src/matrix.js";

describe("BoundingBox 类", () => {
    test("静态只读属性正确", () => {
        expect(BoundingBox.cornerCount).toBe(8);
    });

    test("通过各种构造函数构造 BoundingBox", () => {
        const box = new BoundingBox();
        expect(box.min.x).toBe(0);
        expect(box.min.y).toBe(0);
        expect(box.min.z).toBe(0);
        expect(box.max.x).toBe(0);
        expect(box.max.y).toBe(0);
        expect(box.max.z).toBe(0);

        const box2 = new BoundingBox(new Vector3(1, 2, 3), new Vector3(4, 5, 6));
        expect(box2.min.x).toBe(1);
        expect(box2.min.y).toBe(2);
        expect(box2.min.z).toBe(3);
        expect(box2.max.x).toBe(4);
        expect(box2.max.y).toBe(5);
        expect(box2.max.z).toBe(6);
    });

    test("实例对象的可读写属性正确", () => {
        const box = new BoundingBox();
        box.min = new Vector3(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
        box.max = new Vector3(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        expect(box.min.x).toBe(Number.MIN_SAFE_INTEGER);
        expect(box.min.y).toBe(Number.MIN_SAFE_INTEGER);
        expect(box.min.z).toBe(Number.MIN_SAFE_INTEGER);
        expect(box.max.x).toBe(Number.MAX_SAFE_INTEGER);
        expect(box.max.y).toBe(Number.MAX_SAFE_INTEGER);
        expect(box.max.z).toBe(Number.MAX_SAFE_INTEGER);
    });

    test("Symbol.iterator 可以正确迭代", () => {
        const box = new BoundingBox(new Vector3(1, 2, 3), new Vector3(4, 5, 6));
        const values = [...box];
        expect(values).toEqual([new Vector3(1, 2, 3), new Vector3(4, 5, 6)]);
    });

    test("静态方法 createFromPoints 可以正确创建 BoundingBox", () => {
        const box = BoundingBox.createFromPoints(new List(Vector3, [
            new Vector3(1, 2, 3),
            new Vector3(4, 5, 6),
            new Vector3(7, 8, 9)
        ]));
        expect(box.min.x).toBe(1);
        expect(box.min.y).toBe(2);
        expect(box.min.z).toBe(3);
        expect(box.max.x).toBe(7);
        expect(box.max.y).toBe(8);
        expect(box.max.z).toBe(9);
    });

    test("静态方法 createFromSphere 可以正确创建 BoundingBox", () => {
        const box = BoundingBox.createFromSphere(new BoundingSphere(new Vector3(1, 2, 3), 10));
        expect(box.min.x).toBe(-9);
        expect(box.min.y).toBe(-8);
        expect(box.min.z).toBe(-7);
        expect(box.max.x).toBe(11);
        expect(box.max.y).toBe(12);
        expect(box.max.z).toBe(13);
    });

    test("静态方法 createMerged 可以正确合并 BoundingBox", () => {
        const box1 = new BoundingBox(new Vector3(1, 2, 3), new Vector3(4, 5, 6));
        const box2 = new BoundingBox(new Vector3(7, 8, 9), new Vector3(10, 11, 12));
        const box = BoundingBox.createMerged(box1, box2);
        expect(box.min.x).toBe(1);
        expect(box.min.y).toBe(2);
        expect(box.min.z).toBe(3);
        expect(box.max.x).toBe(10);
        expect(box.max.y).toBe(11);
        expect(box.max.z).toBe(12);
    });

    test("contains 方法可以正确判断是否包含相应内容", () => {
        const box = new BoundingBox(new Vector3(1, 2, 3), new Vector3(4, 5, 6));
        expect(box.contains(new Vector3(2, 3, 4))).toBe(ContainmentType.contains);
        expect(box.contains(new Vector3(0, 0, 0))).toBe(ContainmentType.disjoint);

        const box2 = new BoundingBox(new Vector3(1, 2, 3), new Vector3(4, 5, 6));
        expect(box.contains(box2)).toBe(ContainmentType.contains);
        expect(box.contains(new BoundingBox(new Vector3(0, 0, 0), new Vector3(1, 1, 1)))).toBe(ContainmentType.disjoint);
        expect(box.contains(new BoundingBox(new Vector3(1, 2, 3), new Vector3(4, 9, 10)))).toBe(ContainmentType.intersects);

        expect(box.contains(new BoundingSphere(new Vector3(2, 3, 4), 1))).toBe(ContainmentType.contains);
        expect(box.contains(new BoundingSphere(new Vector3(0, 0, 0), 1))).toBe(ContainmentType.disjoint);
        expect(box.contains(new BoundingSphere(new Vector3(2, 3, 4), 10))).toBe(ContainmentType.intersects);

        expect(box.contains(new BoundingFrustum(new Matrix(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -1, -2, -3, 1)))).toBe(ContainmentType.intersects);
    });

});