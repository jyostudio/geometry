import Point from "./point";
declare const CONSTRUCTOR_SYMBOL: unique symbol;
/**
 * 定义一个矩形。
 * @class
 */
export default class Rectangle {
    #private;
    /**
     * 返回所有值均设置为零的 Rectangle。
     */
    static get empty(): Rectangle;
    /**
     * 获取矩形的 x 方向坐标。
     */
    get x(): number;
    /**
     * 设置矩形的 x 方向坐标。
     */
    set x(value: number);
    /**
     * 获取矩形的 y 方向坐标。
     */
    get y(): number;
    /**
     * 设置矩形的 y 方向坐标。
     */
    set y(value: number);
    /**
     * 获取矩形的宽度。
     */
    get width(): number;
    /**
     * 设置矩形的宽度。
     */
    set width(value: number);
    /**
     * 获取矩形的高度。
     */
    get height(): number;
    /**
     * 设置矩形的高度。
     */
    set height(value: number);
    /**
     * 获取矩形的位置。
     */
    get location(): Point;
    /**
     * 设置矩形的位置。
     */
    set location(value: Point);
    /**
     * 获取矩形的大小。
     */
    get size(): Point;
    /**
     * 设置矩形的大小。
     */
    set size(value: Point);
    /**
     * 获取一个指示 Rectangle 是否为空的值。
     */
    get isEmpty(): boolean;
    /**
     * 返回矩形底部的 y 方向坐标。
     */
    get bottom(): number;
    /**
     * 获取指定矩形中心的 Point。
     */
    get center(): Point;
    /**
     * 返回矩形左边的 x 方向坐标。
     */
    get left(): number;
    /**
     * 返回矩形右侧的 x 方向坐标。
     */
    get right(): number;
    /**
     * 返回矩形顶部的 y 方向坐标。
     */
    get top(): number;
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
    /**
     * 结构化构造函数。
     * @returns Rectangle 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"](): Rectangle;
    private static [CONSTRUCTOR_SYMBOL];
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * 创建一个 Rectangle，用于定义一个矩形与另一个矩形重叠的区域。
     * @param value1 要比较的第一个 Rectangle。
     * @param value2 要比较的第二个 Rectangle。
     * @returns 一个矩形与另一个矩形重叠的区域。
     */
    static intersect(value1: Rectangle, value2: Rectangle): Rectangle;
    /**
     * 创建一个 Rectangle，用于定义一个矩形与另一个矩形重叠的区域。
     * @param value1 要比较的第一个 Rectangle。
     * @param value2 要比较的第二个 Rectangle。
     * @param result [OutAttribute] 前两个参数重叠的区域。
     */
    static intersect(value1: Rectangle, value2: Rectangle, result: Rectangle): void;
    /**
     * 创建一个完全包含两个其他矩形的新 Rectangle。
     * @param value1 要包含的第一个 Rectangle。
     * @param value2 要包含的第二个 Rectangle。
     * @returns 完全包含两个其他矩形的新 Rectangle。
     */
    static union(value1: Rectangle, value2: Rectangle): Rectangle;
    /**
     * 创建一个完全包含两个其他矩形的新 Rectangle。
     * @param value1 要包含的第一个 Rectangle。
     * @param value2 要包含的第二个 Rectangle。
     * @param result [OutAttribute] 必须是前两个矩形并集的 Rectangle。
     */
    static union(value1: Rectangle, value2: Rectangle, result: Rectangle): void;
    /**
     * 确定指定的 Rectangle 是否等于当前 Rectangle。
     * @param other 用于与当前 Rectangle 比较的 Rectangle。
     * @returns 是否相等。
     */
    ["=="](other: Rectangle): boolean;
    /**
     * 确定指定的 Rectangle 是否不等于当前 Rectangle。
     * @param other 用于与当前 Rectangle 比较的 Rectangle。
     * @returns 是否不相等。
     */
    ["!="](other: Rectangle): boolean;
    /**
     * 确定该 Rectangle 中是否包含以 x 和 y 坐标呈现的指定点。
     * @param x 指定点的 x 方向坐标。
     * @param y 指定点的 y 方向坐标。
     * @returns 该 Rectangle 中是否包含以 x 和 y 坐标呈现的指定点。
     */
    contains(x: number, y: number): boolean;
    /**
     * 确定该 Rectangle 中是否包含指定的 Point。
     * @param value 要求值的 Point。
     * @returns 该 Rectangle 中是否包含指定的 Point。
     */
    contains(value: Point): boolean;
    /**
     * 确定该 Rectangle 条目中是否包含指定的 Rectangle。
     * @param value 要求值的 Rectangle。
     * @returns 该 Rectangle 条目中是否包含指定的 Rectangle。
     */
    contains(value: Rectangle): boolean;
    /**
     * 确定指定的 Object 是否等于 Rectangle。
     * @param other 用于与当前 Rectangle 比较的 Object。
     * @returns 指定的 Object 是否等于 Rectangle。
     */
    equals(other: Rectangle): boolean;
    /**
     * 按指定的垂直和水平值向外推动 Rectangle 的边缘。
     * @param horizontalAmount 向外推动边缘的值。
     * @param verticalAmount 向外推动顶部和底部的值。
     */
    inflate(horizontalAmount: number, verticalAmount: number): void;
    /**
     * 确定指定的 Rectangle 是否与该 Rectangle 相交。
     * @param value 要求值的 Rectangle。
     * @returns 指定的 Rectangle 是否与该 Rectangle 相交。
     */
    intersects(value: Rectangle): boolean;
    /**
     * 更改 Rectangle 的位置。
     * @param offsetX 更改 x 位置。
     * @param offsetY 更改 y 位置。
     */
    offset(offsetX: number, offsetY: number): void;
    /**
     * 更改 Rectangle 的位置。
     * @param amount 要调整 Rectangle 位置的值。
     */
    offset(amount: Point): void;
    /**
     * 检索当前对象的字符串呈现。
     * @returns 当前对象的字符串呈现。
     */
    toString(): string;
    /**
     * 返回当前 Rectangle 的 JSON 表示形式。
     * @returns 当前 Rectangle 的 JSON 表示形式。
     */
    toJSON(): object;
}
export {};
