import overload from "@jyostudio/overload";
import { checkSetterType } from "@jyostudio/overload/dist/decorator";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 定义 2D 空间中的点。
 * @class
 */
export default class Point {
    /**
     * 返回点 (0,0)。
     */
    public static get zero(): Point {
        return new Point(0, 0);
    }

    /**
     * Point 的 x 方向坐标。
     */
    #x = 0;

    /**
     * 获取 Point 的 x 方向坐标。
     */
    public get x(): number {
        return this.#x;
    }

    /**
     * 设置 Point 的 x 方向坐标。
     */
    @checkSetterType(Number)
    public set x(value: number) {
        this.#x = value | 0;
    }

    /**
     * Point 的 y 方向坐标。
     */
    #y = 0;

    /**
     * 获取 Point 的 y 方向坐标。
     */
    public get y(): number {
        return this.#y;
    }

    /**
     * 设置 Point 的 y 方向坐标。
     */
    @checkSetterType(Number)
    public set y(value: number) {
        this.#y = value | 0;
    }

    /**
     * 新建一个空的 Point 实例。
     */
    constructor();
    /**
     * 初始化新的 Point 实例。
     * @param x Point 的 x 方向坐标。
     * @param y Point 的 y 方向坐标。
     */
    constructor(x: number, y: number);
    constructor(...params: any) {
        Point[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    /**
     * 结构化构造函数。
     * @returns Point 实例。
     */
    public static ["##STRUCT_CONSTRUCTOR##"](): Point {
        return Point.zero;
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        Point[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number, Number], function (this: Point, x, y) {
                this.x = x;
                this.y = y;
            });

        return Point[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    public *[Symbol.iterator](): IterableIterator<number> {
        yield this.#x;
        yield this.#y;
    }

    /**
     * 对传入的 Point 取反。
     * @param other 用于取反的 Point。
     * @returns 取反后的 Point。
     */
    public static ["-"](other: Point): Point;
    public static ["-"](...params: any): any {
        Point["-"] = overload([Point], function (other) {
            return new Point(-other.x, -other.y);
        });

        return Point["-"].apply(this, params);
    }

    /**
     * 将当前 Point 与另一个 Point 相加。
     * @param other 用于相加的 Point。
     * @returns 相加后的 Point。
     */
    public ["+"](other: Point): Point;
    public ["+"](...params: any): any {
        Point.prototype["+"] = overload([Point], function (this: Point, other) {
            return new Point(this.#x + other.#x, this.#y + other.#y);
        });

        return Point.prototype["+"].apply(this, params);
    }

    /**
     * 将当前 Point 与另一个 Point 相减。
     * @param other 用于相减的 Point。
     * @returns 相减后的 Point。
     */
    public ["-"](other: Point): Point;
    public ["-"](...params: any): any {
        Point.prototype["-"] = overload([Point], function (this: Point, other) {
            return new Point(this.#x - other.#x, this.#y - other.#y);
        });

        return Point.prototype["-"].apply(this, params);
    }

    /**
     * 将当前 Point 与另一个 Point 相乘。
     * @param other 用于相乘的 Point。
     * @returns 相乘后的 Point。
     */
    public ["*"](other: Point): Point;
    public ["*"](...params: any): any {
        Point.prototype["*"] = overload()
            .add([Number], function (this: Point, scalar) {
                return new Point(this.#x * scalar, this.#y * scalar);
            })
            .add([Point], function (this: Point, other) {
                return new Point(this.#x * other.#x, this.#y * other.#y);
            });

        return Point.prototype["*"].apply(this, params);
    }

    /**
     * 将当前 Point 与另一个 Point 相除。
     * @param other 用于相除的 Point。
     * @returns 相除后的 Point。
     */
    public ["/"](other: Point): Point;
    public ["/"](...params: any): any {
        Point.prototype["/"] = overload()
            .add([Number], function (this: Point, scalar) {
                return new Point(this.#x / scalar, this.#y / scalar);
            })
            .add([Point], function (this: Point, other) {
                return new Point(this.#x / other.x, this.#y / other.y);
            });

        return Point.prototype["/"].apply(this, params);
    }

    /**
     * 确定指定的 Point 是否等于当前 Point。
     * @param other 用于与当前 Point 比较的 Point。
     * @returns 是否相等。
     */
    public ["=="](other: Point): boolean;
    public ["=="](...params: any): any {
        Point.prototype["=="] = overload([Point], function (this: Point, other) {
            return this.equals(other);
        }).any(() => false);

        return Point.prototype["=="].apply(this, params);
    }

    /**
     * 确定指定的 Point 是否不等于当前 Point。
     * @param other 用于与当前 Point 比较的 Point。
     * @returns 是否不相等。
     */
    public ["!="](other: Point): boolean;
    public ["!="](...params: any): any {
        Point.prototype["!="] = overload([Point], function (this: Point, other) {
            return !this.equals(other);
        }).any(() => true);

        return Point.prototype["!="].apply(this, params);
    }

    /**
     * 确定两个 Point 实例是否相等。
     * @param other 用于与此实例比较的 Point。
     * @returns 如果指定的 Point 等于当前 Point，则为 true，否则为 false。
     */
    public equals(other: Point): boolean;
    public equals(...params: any): any {
        Point.prototype.equals = overload([Point], function (this: Point, other) {
            return this.#x === other.#x && this.#y === other.#y;
        }).any(() => false);

        return Point.prototype.equals.apply(this, params);
    }

    /**
     * 返回呈现当前 Point 的 String。
     * @returns 呈现当前 Point 的 String。
     */
    public toString(): string;
    public toString(...params: any): any {
        Point.prototype.toString = overload([], function (this: Point) {
            return JSON.stringify(this);
        });

        return Point.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 Point 的 JSON 表示形式。
     * @returns 当前 Point 的 JSON 表示形式。
     */
    public toJSON(): object {
        return {
            x: this.x,
            y: this.y
        }
    }
}
