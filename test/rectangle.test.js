import Point from "../src/point";
import Rectangle from "../src/rectangle";

describe("Rectangle 类", () => {
    test("静态只读属性正确", () => {
        const rectangle = Rectangle.empty;
        expect(rectangle.isEmpty).toBe(true);
    });

    test("通过各种构造函数构造 Rectangle", () => {
        const rectangle = new Rectangle(1, 2, 3, 4);
        expect(rectangle.x).toBe(1);
        expect(rectangle.y).toBe(2);
        expect(rectangle.width).toBe(3);
        expect(rectangle.height).toBe(4);

        const rectangle2 = new Rectangle();
        expect(rectangle2.x).toBe(0);
        expect(rectangle2.y).toBe(0);
        expect(rectangle2.width).toBe(0);
        expect(rectangle2.height).toBe(0);
    });

    test("实例对象可读写属性正确", () => {
        const rectangle = new Rectangle();
        rectangle.x = Number.MIN_SAFE_INTEGER;
        rectangle.y = Number.MAX_SAFE_INTEGER;
        rectangle.width = Number.MIN_SAFE_INTEGER;
        rectangle.height = Number.MAX_SAFE_INTEGER;
        expect(rectangle.x).toBe(Number.MIN_SAFE_INTEGER);
        expect(rectangle.y).toBe(Number.MAX_SAFE_INTEGER);
        expect(rectangle.width).toBe(Number.MIN_SAFE_INTEGER);
        expect(rectangle.height).toBe(Number.MAX_SAFE_INTEGER);
        rectangle.location = new Point(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
        expect(rectangle.location instanceof Point).toBe(true);
        expect(rectangle.location.x).toBe(Number.MAX_SAFE_INTEGER);
        expect(rectangle.location.y).toBe(Number.MIN_SAFE_INTEGER);
    });

    test("实例对象的只读属性正确", () => {
        const rectangle = new Rectangle(1, 2, 3, 4);
        expect(rectangle.isEmpty).toBe(false);
        expect(rectangle.bottom).toBe(6);
        expect(rectangle.center instanceof Point).toBe(true);
        expect(rectangle.center.x).toBe(2);
        expect(rectangle.center.y).toBe(4);
        expect(rectangle.left).toBe(1);
        expect(rectangle.right).toBe(4);
        expect(rectangle.top).toBe(2);
    });

    test("Symbol.iterator 可以正确迭代", () => {
        const rectangle = new Rectangle(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        const values = [...rectangle];
        expect(values).toEqual([Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]);
    });

    test("静态方法 intersect 应该正确计算两个 Rectangle 的交集", () => {
        const rectangle1 = new Rectangle(0, 0, 3, 4);
        const rectangle2 = new Rectangle(2, 2, 3, 4);
        const intersect = Rectangle.intersect(rectangle1, rectangle2);
        expect(intersect.x).toBe(2);
        expect(intersect.y).toBe(2);
        expect(intersect.width).toBe(1);
        expect(intersect.height).toBe(2);

        const rectangle3 = new Rectangle(5, 5, 1, 1);
        const intersect2 = Rectangle.intersect(rectangle1, rectangle3);
        expect(intersect2.isEmpty).toBe(true);
    });

    test("静态方法 union 应该正确计算两个 Rectangle 的并集", () => {
        const rectangle1 = new Rectangle(0, 0, 3, 4);
        const rectangle2 = new Rectangle(2, 2, 3, 4);
        const union = Rectangle.union(rectangle1, rectangle2);
        expect(union.x).toBe(0);
        expect(union.y).toBe(0);
        expect(union.width).toBe(5);
        expect(union.height).toBe(6);
    });

    test("contains 方法应该正确判断一个点或另一个 Rectangle 是否在 Rectangle 内", () => {
        const rectangle = new Rectangle(0, 0, 3, 4);
        const point = new Point(1, 2);
        const rectangle2 = new Rectangle(1, 2, 1, 1);
        expect(rectangle.contains(1, 2)).toBe(true);
        expect(rectangle.contains(point)).toBe(true);
        expect(rectangle.contains(rectangle2)).toBe(true);
    });

    test("inflate 方法应该正确调整 Rectangle 的大小", () => {
        const rectangle = new Rectangle(0, 0, 3, 4);
        rectangle.inflate(1, 1);
        expect(rectangle.x).toBe(-1);
        expect(rectangle.y).toBe(-1);
        expect(rectangle.width).toBe(5);
        expect(rectangle.height).toBe(6);
    });

    test("intersects 方法应该正确判断两个 Rectangle 是否相交", () => {
        const rectangle1 = new Rectangle(0, 0, 3, 4);
        const rectangle2 = new Rectangle(2, 2, 3, 4);
        expect(rectangle1.intersects(rectangle2)).toBe(true);
    });

    test("offset 方法应该正确调整 Rectangle 的位置", () => {
        const rectangle = new Rectangle(0, 0, 3, 4);
        rectangle.offset(1, 1);
        expect(rectangle.x).toBe(1);
        expect(rectangle.y).toBe(1);
        rectangle.offset(new Point(1, 1));
        expect(rectangle.x).toBe(2);
        expect(rectangle.y).toBe(2);
    });

    test("equals 方法应该正确比较 Rectangle", () => {
        const rectangle1 = new Rectangle(0, 0, 3, 4);
        const rectangle2 = new Rectangle(0, 0, 3, 4);
        const rectangle3 = new Rectangle(0, 0, 5, 6);
        expect(rectangle1.equals(rectangle2)).toBe(true);
        expect(rectangle1.equals(rectangle3)).toBe(false);
        expect(rectangle1.equals({ x: 0, y: 0, width: 3, height: 4 })).toBe(false);
    });

    test("toString 方法应该返回一个字符串化的 JSON 对象", () => {
        const rectangle = new Rectangle(0, 0, 3, 4);
        expect(rectangle.toString()).toBe(`{"x":0,"y":0,"width":3,"height":4}`);
    });

    test("toJSON 方法应该返回一个包含 x、y、width 和 height 属性的对象", () => {
        const rectangle = new Rectangle(0, 0, 3, 4);
        expect(rectangle.toJSON()).toEqual({ x: 0, y: 0, width: 3, height: 4 });
    });

});