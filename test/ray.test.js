import BoundingBox from "../src/boundingBox.js";
import Ray from "../src/ray.js";
import Vector3 from "../src/vector3.js";

describe("Ray 类", () => {
    test("通过各种构造函数构造 Ray", () => {
        const r1 = new Ray();
        expect(r1.position).toEqual(Vector3.zero);
        expect(r1.direction).toEqual(Vector3.zero);

        const r2 = new Ray(Vector3.zero, Vector3.one);
        expect(r2.position).toEqual(Vector3.zero);
        expect(r2.direction).toEqual(Vector3.one);
    });

    test("实例对象的可读写属性正确", () => {
        const r = new Ray();
        r.position = Vector3.one;
        r.direction = Vector3.zero;
        expect(r.position).toEqual(Vector3.one);
        expect(r.direction).toEqual(Vector3.zero);
    });

    test("Symbol.iterator 可以正确迭代", () => {
        const r = new Ray(Vector3.zero, Vector3.one);
        const [p, d] = r;
        expect(p).toEqual(Vector3.zero);
        expect(d).toEqual(Vector3.one);
    });

    test("intersects 方法可以正确计算", () => {
        let box = new BoundingBox();
        box.min = new Vector3(-10, -20, -30);
        box.max = new Vector3(10, 20, 30);
        let center = box.min["+"](box.max)["*"](0.5);

        let unitX40 = Vector3.unitX["*"](40);
        let unitY40 = Vector3.unitY["*"](40);
        let unitZ40 = Vector3.unitZ["*"](40);

        let unitX10 = Vector3.unitX["*"](10);
        let unitY10 = Vector3.unitY["*"](10);
        let unitZ10 = Vector3.unitZ["*"](10);

        expect(new Ray(center["-"](unitX40), Vector3["-"](Vector3.unitX)).intersects(box)).toBe(null);
        expect(new Ray(center["+"](unitX40), Vector3.unitX).intersects(box)).toBe(null);
        expect(new Ray(center["-"](unitY40), Vector3["-"](Vector3.unitY)).intersects(box)).toBe(null);
        expect(new Ray(center["+"](unitY40), Vector3.unitY).intersects(box)).toBe(null);
        expect(new Ray(center["-"](unitZ40), Vector3["-"](Vector3.unitZ)).intersects(box)).toBe(null);
        expect(new Ray(center["+"](unitZ40), Vector3.unitZ).intersects(box)).toBe(null);

        expect(new Ray(center["-"](unitX40), Vector3.unitX).intersects(box)).toBe(30);
        expect(new Ray(center["+"](unitX40), Vector3["-"](Vector3.unitX)).intersects(box)).toBe(30);
        expect(new Ray(center["-"](unitY40), Vector3.unitY).intersects(box)).toBe(20);
        expect(new Ray(center["+"](unitY40), Vector3["-"](Vector3.unitY)).intersects(box)).toBe(20);
        expect(new Ray(center["-"](unitZ40), Vector3.unitZ).intersects(box)).toBe(10);
        expect(new Ray(center["+"](unitZ40), Vector3["-"](Vector3.unitZ)).intersects(box)).toBe(10);

        expect(new Ray(box.min["-"](unitX10), Vector3.unitX).intersects(box)).toBe(10);
        expect(new Ray(box.min["-"](unitY10), Vector3.unitY).intersects(box)).toBe(10);
        expect(new Ray(box.min["-"](unitZ10), Vector3.unitZ).intersects(box)).toBe(10);
        expect(new Ray(box.max["+"](unitX10), Vector3["-"](Vector3.unitX)).intersects(box)).toBe(10);
        expect(new Ray(box.max["+"](unitY10), Vector3["-"](Vector3.unitY)).intersects(box)).toBe(10);
        expect(new Ray(box.max["+"](unitZ10), Vector3["-"](Vector3.unitZ)).intersects(box)).toBe(10);

        expect(new Ray(center, Vector3.unitX).intersects(box)).toBe(0);
        expect(new Ray(center, Vector3["-"](Vector3.unitX)).intersects(box)).toBe(0);
        expect(new Ray(center, Vector3.unitY).intersects(box)).toBe(0);
        expect(new Ray(center, Vector3["-"](Vector3.unitY)).intersects(box)).toBe(0);
        expect(new Ray(center, Vector3.unitZ).intersects(box)).toBe(0);
        expect(new Ray(center, Vector3["-"](Vector3.unitZ)).intersects(box)).toBe(0);
    });

    test("equals 方法可以正确比较", () => {
        const r1 = new Ray(Vector3.zero, Vector3.one);
        const r2 = new Ray(Vector3.zero, Vector3.one);
        expect(r1.equals(r2)).toBeTruthy();
        expect(r1.equals({})).toBeFalsy();
    });

    test("toString 方法可以正确输出", () => {
        const r = new Ray(Vector3.zero, Vector3.one);
        expect(r.toString()).toBe(`{"position":{"x":0,"y":0,"z":0},"direction":{"x":1,"y":1,"z":1}}`);
    });

    test("toJSON 方法可以正确输出", () => {
        const r = new Ray(Vector3.zero, Vector3.one);
        expect(r.toJSON()).toEqual({ position: Vector3.zero, direction: Vector3.one });
    });
});