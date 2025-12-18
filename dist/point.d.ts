declare const CONSTRUCTOR_SYMBOL: unique symbol;
/**
 * 定义 2D 空间中的点。
 * @class
 */
export default class Point {
    #private;
    /**
     * 返回点 (0,0)。
     */
    static get zero(): Point;
    /**
     * 获取 Point 的 x 方向坐标。
     */
    get x(): number;
    /**
     * 设置 Point 的 x 方向坐标。
     */
    set x(value: number);
    /**
     * 获取 Point 的 y 方向坐标。
     */
    get y(): number;
    /**
     * 设置 Point 的 y 方向坐标。
     */
    set y(value: number);
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
    /**
     * 结构化构造函数。
     * @returns Point 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"](): Point;
    private static [CONSTRUCTOR_SYMBOL];
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * 对传入的 Point 取反。
     * @param other 用于取反的 Point。
     * @returns 取反后的 Point。
     */
    static ["-"](other: Point): Point;
    /**
     * 将当前 Point 与另一个 Point 相加。
     * @param other 用于相加的 Point。
     * @returns 相加后的 Point。
     */
    ["+"](other: Point): Point;
    /**
     * 将当前 Point 与另一个 Point 相减。
     * @param other 用于相减的 Point。
     * @returns 相减后的 Point。
     */
    ["-"](other: Point): Point;
    /**
     * 将当前 Point 与另一个 Point 相乘。
     * @param other 用于相乘的 Point。
     * @returns 相乘后的 Point。
     */
    ["*"](other: Point): Point;
    /**
     * 将当前 Point 与另一个 Point 相除。
     * @param other 用于相除的 Point。
     * @returns 相除后的 Point。
     */
    ["/"](other: Point): Point;
    /**
     * 确定指定的 Point 是否等于当前 Point。
     * @param other 用于与当前 Point 比较的 Point。
     * @returns 是否相等。
     */
    ["=="](other: Point): boolean;
    /**
     * 确定指定的 Point 是否不等于当前 Point。
     * @param other 用于与当前 Point 比较的 Point。
     * @returns 是否不相等。
     */
    ["!="](other: Point): boolean;
    /**
     * 确定两个 Point 实例是否相等。
     * @param other 用于与此实例比较的 Point。
     * @returns 如果指定的 Point 等于当前 Point，则为 true，否则为 false。
     */
    equals(other: Point): boolean;
    /**
     * 返回呈现当前 Point 的 String。
     * @returns 呈现当前 Point 的 String。
     */
    toString(): string;
    /**
     * 返回当前 Point 的 JSON 表示形式。
     * @returns 当前 Point 的 JSON 表示形式。
     */
    toJSON(): object;
}
export {};
