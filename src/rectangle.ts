import overload from "@jyostudio/overload";
import { checkSetterType, lazyCheckSetterType } from "@jyostudio/overload/dist/decorator";
import Point from "./point";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 定义一个矩形。
 * @class
 */
export default class Rectangle {
    /**
     * 返回所有值均设置为零的 Rectangle。
     */
    public static get empty(): Rectangle {
        return new Rectangle();
    }

    /**
     * 矩形的 x 方向坐标。
     */
    #x = 0;

    /**
     * 获取矩形的 x 方向坐标。
     */
    public get x(): number {
        return this.#x;
    }

    /**
     * 设置矩形的 x 方向坐标。
     */
    @checkSetterType(Number)
    public set x(value: number) {
        this.#x = value | 0;
    }

    /**
     * 矩形的 y 方向坐标。
     */
    #y = 0;

    /**
     * 获取矩形的 y 方向坐标。
     */
    public get y(): number {
        return this.#y;
    }

    /**
     * 设置矩形的 y 方向坐标。
     */
    @checkSetterType(Number)
    public set y(value: number) {
        this.#y = value | 0;
    }

    /**
     * 矩形的宽度。
     */
    #width = 0;

    /**
     * 获取矩形的宽度。
     */
    public get width(): number {
        return this.#width;
    }

    /**
     * 设置矩形的宽度。
     */
    @checkSetterType(Number)
    public set width(value: number) {
        this.#width = value | 0;
    }

    /**
     * 矩形的高度。
     */
    #height = 0;

    /**
     * 获取矩形的高度。
     */
    public get height(): number {
        return this.#height;
    }

    /**
     * 设置矩形的高度。
     */
    @checkSetterType(Number)
    public set height(value: number) {
        this.#height = value | 0;
    }

    /**
     * 获取矩形的位置。
     */
    public get location(): Point {
        return new Point(this.#x, this.#y);
    }

    /**
     * 设置矩形的位置。
     */
    @lazyCheckSetterType(() => Point)
    public set location(value: Point) {
        this.#x = value.x | 0;
        this.#y = value.y | 0;
    }

    /**
     * 获取矩形的大小。
     */
    public get size(): Point {
        return new Point(this.#width, this.#height);
    }

    /**
     * 设置矩形的大小。
     */
    @lazyCheckSetterType(() => Point)
    public set size(value: Point) {
        this.#width = value.x | 0;
        this.#height = value.y | 0;
    }

    /**
     * 获取一个指示 Rectangle 是否为空的值。
     */
    public get isEmpty(): boolean {
        return !this.#x && !this.#y && !this.#width && !this.#height;
    }

    /**
     * 返回矩形底部的 y 方向坐标。
     */
    public get bottom(): number {
        return this.#y + this.#height;
    }

    /**
     * 获取指定矩形中心的 Point。
     */
    public get center(): Point {
        return new Point(this.#x + this.#width / 2, this.#y + this.#height / 2);
    }

    /**
     * 返回矩形左边的 x 方向坐标。
     */
    public get left(): number {
        return this.#x;
    }

    /**
     * 返回矩形右侧的 x 方向坐标。
     */
    public get right(): number {
        return this.#x + this.#width;
    }

    /**
     * 返回矩形顶部的 y 方向坐标。
     */
    public get top(): number {
        return this.#y;
    }

    /**
     * 新建一个空的 Rectangle 实例。
     */
    constructor();
    /**
     * 初始化新的 Rectangle 实例。
     * @param x 矩形的 x 方向坐标。
     * @param y 矩形的 y 方向坐标。
     * @param width 矩形宽度。
     * @param height 矩形高度。
     */
    constructor(x: number, y: number, width: number, height: number);
    constructor(...params: any) {
        Rectangle[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    /**
     * 结构化构造函数。
     * @returns Rectangle 实例。
     */
    public static ["##STRUCT_CONSTRUCTOR##"](): Rectangle {
        return Rectangle.empty;
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        Rectangle[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number, Number, Number, Number], function (this: Rectangle, x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            });

        return Rectangle[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    public *[Symbol.iterator](): IterableIterator<number> {
        yield this.#x;
        yield this.#y;
        yield this.#width;
        yield this.#height;
    }

    /**
     * 创建一个 Rectangle，用于定义一个矩形与另一个矩形重叠的区域。
     * @param value1 要比较的第一个 Rectangle。
     * @param value2 要比较的第二个 Rectangle。
     * @returns 一个矩形与另一个矩形重叠的区域。
     */
    public static intersect(value1: Rectangle, value2: Rectangle): Rectangle;
    /**
     * 创建一个 Rectangle，用于定义一个矩形与另一个矩形重叠的区域。
     * @param value1 要比较的第一个 Rectangle。
     * @param value2 要比较的第二个 Rectangle。
     * @param result [OutAttribute] 前两个参数重叠的区域。
     */
    public static intersect(value1: Rectangle, value2: Rectangle, result: Rectangle): void;
    public static intersect(...params: any): any {
        Rectangle.intersect = overload()
            .add([Rectangle, Rectangle], function (value1, value2) {
                if (value1.intersects(value2)) {
                    const x1 = value1.#x, y1 = value1.#y, w1 = value1.#width, h1 = value1.#height;
                    const x2 = value2.#x, y2 = value2.#y, w2 = value2.#width, h2 = value2.#height;

                    const rightSide = Math.min(x1 + w1, x2 + w2);
                    const leftSide = Math.max(x1, x2);
                    const topSide = Math.max(y1, y2);
                    const bottomSide = Math.min(y1 + h1, y2 + h2);

                    return new Rectangle(leftSide, topSide, rightSide - leftSide, bottomSide - topSide);
                }

                return Rectangle.empty;
            })
            .add([Rectangle, Rectangle, Rectangle], function (value1, value2, result) {
                if (value1.intersects(value2)) {
                    const x1 = value1.#x, y1 = value1.#y, w1 = value1.#width, h1 = value1.#height;
                    const x2 = value2.#x, y2 = value2.#y, w2 = value2.#width, h2 = value2.#height;

                    const rightSide = Math.min(x1 + w1, x2 + w2);
                    const leftSide = Math.max(x1, x2);
                    const topSide = Math.max(y1, y2);
                    const bottomSide = Math.min(y1 + h1, y2 + h2);

                    result.x = leftSide;
                    result.y = topSide;
                    result.width = rightSide - leftSide;
                    result.height = bottomSide - topSide;
                } else {
                    result.x = 0;
                    result.y = 0;
                    result.width = 0;
                    result.height = 0;
                }
            });

        return Rectangle.intersect.apply(this, params);
    }

    /**
     * 创建一个完全包含两个其他矩形的新 Rectangle。
     * @param value1 要包含的第一个 Rectangle。
     * @param value2 要包含的第二个 Rectangle。
     * @returns 完全包含两个其他矩形的新 Rectangle。
     */
    public static union(value1: Rectangle, value2: Rectangle): Rectangle;
    /**
     * 创建一个完全包含两个其他矩形的新 Rectangle。
     * @param value1 要包含的第一个 Rectangle。
     * @param value2 要包含的第二个 Rectangle。
     * @param result [OutAttribute] 必须是前两个矩形并集的 Rectangle。
     */
    public static union(value1: Rectangle, value2: Rectangle, result: Rectangle): void;
    public static union(...params: any): any {
        Rectangle.union = overload([Rectangle, Rectangle], function (value1, value2) {
            const x1 = value1.#x, y1 = value1.#y, right1 = value1.right, bottom1 = value1.bottom;
            const x2 = value2.#x, y2 = value2.#y, right2 = value2.right, bottom2 = value2.bottom;

            const x = Math.min(x1, x2);
            const y = Math.min(y1, y2);
            const right = Math.max(right1, right2);
            const bottom = Math.max(bottom1, bottom2);

            return new Rectangle(x, y, right - x, bottom - y);
        });

        return Rectangle.union.apply(this, params);
    }

    /**
     * 确定指定的 Rectangle 是否等于当前 Rectangle。
     * @param other 用于与当前 Rectangle 比较的 Rectangle。
     * @returns 是否相等。
     */
    public ["=="](other: Rectangle): boolean;
    public ["=="](...params: any): any {
        Rectangle.prototype["=="] = overload([Rectangle], function (this: Rectangle, other) {
            return this.equals(other);
        });

        return Rectangle.prototype["=="].apply(this, params);
    }

    /**
     * 确定指定的 Rectangle 是否不等于当前 Rectangle。
     * @param other 用于与当前 Rectangle 比较的 Rectangle。
     * @returns 是否不相等。
     */
    public ["!="](other: Rectangle): boolean;
    public ["!="](...params: any): any {
        Rectangle.prototype["!="] = overload([Rectangle], function (this: Rectangle, other) {
            return !this.equals(other);
        }).any(() => true);

        return Rectangle.prototype["!="].apply(this, params);
    }

    /**
     * 确定该 Rectangle 中是否包含以 x 和 y 坐标呈现的指定点。
     * @param x 指定点的 x 方向坐标。
     * @param y 指定点的 y 方向坐标。
     * @returns 该 Rectangle 中是否包含以 x 和 y 坐标呈现的指定点。
     */
    public contains(x: number, y: number): boolean;
    /**
     * 确定该 Rectangle 中是否包含指定的 Point。
     * @param value 要求值的 Point。
     * @returns 该 Rectangle 中是否包含指定的 Point。
     */
    public contains(value: Point): boolean;
    /**
     * 确定该 Rectangle 条目中是否包含指定的 Rectangle。
     * @param value 要求值的 Rectangle。
     * @returns 该 Rectangle 条目中是否包含指定的 Rectangle。
     */
    public contains(value: Rectangle): boolean;
    public contains(...params: any): any {
        Rectangle.prototype.contains = overload()
            .add([Number, Number], function (this: Rectangle, x, y) {
                const withinXBounds = this.#x <= x && x < this.#x + this.#width;
                const withinYBounds = this.#y <= y && y < this.#y + this.#height;
                return withinXBounds && withinYBounds;
            })
            .add([Point], function (this: Rectangle, value) {
                const withinXBounds = (this.#x <= value.x) && (value.x < (this.#x + this.#width));
                const withinYBounds = (this.#y <= value.y) && (value.y < (this.#y + this.#height));
                return withinXBounds && withinYBounds;
            })
            .add([Rectangle], function (this: Rectangle, value) {
                const isXWithinBounds = this.#x <= value.#x && (value.#x + value.#width) <= (this.#x + this.#width);
                const isYWithinBounds = this.#y <= value.#y && (value.#y + value.#height) <= (this.#y + this.#height);
                return isXWithinBounds && isYWithinBounds;
            });

        return Rectangle.prototype.contains.apply(this, params);
    }

    /**
     * 确定指定的 Object 是否等于 Rectangle。
     * @param other 用于与当前 Rectangle 比较的 Object。
     * @returns 指定的 Object 是否等于 Rectangle。
     */
    public equals(other: Rectangle): boolean;
    public equals(...params: any): any {
        Rectangle.prototype.equals = overload([Rectangle], function (this: Rectangle, other) {
            const x = other.#x, y = other.#y, width = other.#width, height = other.#height;
            return this.#x === x && this.#y === y && this.#width === width && this.#height === height;
        }).any(() => false);

        return Rectangle.prototype.equals.apply(this, params);
    }

    /**
     * 按指定的垂直和水平值向外推动 Rectangle 的边缘。
     * @param horizontalAmount 向外推动边缘的值。
     * @param verticalAmount 向外推动顶部和底部的值。
     */
    public inflate(horizontalAmount: number, verticalAmount: number): void;
    public inflate(...params: any): any {
        Rectangle.prototype.inflate = overload([Number, Number], function (this: Rectangle, horizontalAmount, verticalAmount) {
            this.x -= horizontalAmount;
            this.y -= verticalAmount;
            this.width += horizontalAmount * 2;
            this.height += verticalAmount * 2;
        });

        return Rectangle.prototype.inflate.apply(this, params);
    }

    /**
     * 确定指定的 Rectangle 是否与该 Rectangle 相交。
     * @param value 要求值的 Rectangle。
     * @returns 指定的 Rectangle 是否与该 Rectangle 相交。
     */
    public intersects(value: Rectangle): boolean;
    public intersects(...params: any): any {
        Rectangle.prototype.intersects = overload()
            .add([Rectangle], function (this: Rectangle, value) {
                const left = value.left, right = value.right, top = value.top, bottom = value.bottom;
                const thisLeft = this.left, thisRight = this.right, thisTop = this.top, thisBottom = this.bottom;
                return left < thisRight && thisLeft < right && top < thisBottom && thisTop < bottom;
            });

        return Rectangle.prototype.intersects.apply(this, params);
    }

    /**
     * 更改 Rectangle 的位置。
     * @param offsetX 更改 x 位置。
     * @param offsetY 更改 y 位置。
     */
    public offset(offsetX: number, offsetY: number): void;
    /**
     * 更改 Rectangle 的位置。
     * @param amount 要调整 Rectangle 位置的值。
     */
    public offset(amount: Point): void;
    public offset(...params: any): any {
        Rectangle.prototype.offset = overload()
            .add([Number, Number], function (this: Rectangle, offsetX, offsetY) {
                this.x += offsetX;
                this.y += offsetY;
            })
            .add([Point], function (this: Rectangle, amount) {
                this.x += amount.x;
                this.y += amount.y;
            });

        return Rectangle.prototype.offset.apply(this, params);
    }

    /**
     * 检索当前对象的字符串呈现。
     * @returns 当前对象的字符串呈现。
     */
    public toString(): string;
    public toString(...params: any): any {
        Rectangle.prototype.toString = overload([], function (this: Rectangle) {
            return JSON.stringify(this);
        });

        return Rectangle.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 Rectangle 的 JSON 表示形式。
     * @returns 当前 Rectangle 的 JSON 表示形式。
     */
    public toJSON(): object {
        return {
            x: this.#x,
            y: this.#y,
            width: this.#width,
            height: this.#height
        };
    }
}