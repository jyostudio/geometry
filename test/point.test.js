import Point from "../src/point";

describe("Point 类", () => {
    test("静态只读属性正确", () => {
        const point = Point.zero;
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
    });

    test("通过各种构造函数构造 Point", () => {
        const point = new Point(3, 4);
        expect(point.x).toBe(3);
        expect(point.y).toBe(4);

        const point2 = new Point();
        expect(point2.x).toBe(0);
        expect(point2.y).toBe(0);
    });

    test("实例对象的可读写属性正确", () => {
        const point = new Point();
        point.x = Number.MIN_SAFE_INTEGER;
        point.y = Number.MAX_SAFE_INTEGER;
        expect(point.x).toBe(Number.MIN_SAFE_INTEGER);
        expect(point.y).toBe(Number.MAX_SAFE_INTEGER);
    });

    test("Symbol.iterator 可以正确迭代", () => {
        const point = new Point(1, 2);
        const values = [...point];
        expect(values).toEqual([1, 2]);
    });

    test("运算符函数可以正常使用", () => {
        const p1 = new Point(1, 2);
        const p2 = new Point(3, 4);

        const s = p1["-"](p2);

        expect(Point["-"](p1)).toEqual(new Point(-1, -2));
        expect(p1["+"](p2)).toEqual(new Point(4, 6));
        expect({ x: s.x, y: s.y }).toEqual({ x: -2, y: -2 });
        expect(p1["*"](p2)).toEqual(new Point(3, 8));
        expect(p1["*"](5)).toEqual(new Point(5, 10));
        expect(p1["/"](p2)).toEqual(new Point(1 / 3, 2 / 4));
        expect(p1["/"](2)).toEqual(new Point(1 / 2, 2 / 2));

        const p3 = new Point(1, 2);
        expect(p3["=="](p2)).toBe(false);
        expect(p3["=="](new Point(1, 2))).toBe(true);
        expect(p3["!="](p2)).toBe(true);
        expect(p3["!="](new Point(1, 2))).toBe(false);
    });

    test("equals 方法应该正确比较 Point", () => {
        const point1 = new Point(3, 4);
        const point2 = new Point(3, 4);
        const point3 = new Point(5, 6);
        expect(point1.equals(point2)).toBe(true);
        expect(point1.equals(point3)).toBe(false);
        expect(point1.equals({ x: 3, y: 4 })).toBe(false);
    });

    test("toString 方法应该返回一个字符串化的 JSON 对象", () => {
        const point = new Point(3, 4);
        expect(point.toString()).toBe(`{"x":3,"y":4}`);
    });

    test("toJSON 方法应该返回一个包含 x 和 y 属性的对象", () => {
        const point = new Point(3, 4);
        expect(point.toJSON()).toEqual({ x: 3, y: 4 });
    });
});