import Vector2 from "./vector2";
declare const CONSTRUCTOR_SYMBOL: unique symbol;
/**
 * 三次贝塞尔曲线
 * @class
 */
export default class CubicBezier {
    #private;
    /**
     * 获取以相同速度开始至结束的三次贝塞尔曲线。
     * @returns 以相同速度开始至结束的三次贝塞尔曲线。
     */
    static get linear(): CubicBezier;
    /**
     * 获取慢速开始，然后变快，然后慢速结束的三次贝塞尔曲线。
     * @returns 慢速开始，然后变快，然后慢速结束的三次贝塞尔曲线。
     */
    static get ease(): CubicBezier;
    /**
     * 获取以慢速开始的三次贝塞尔曲线。
     * @returns 以慢速开始的三次贝塞尔曲线。
     */
    static get easeIn(): CubicBezier;
    /**
     * 获取以慢速结束的三次贝塞尔曲线。
     * @returns 以慢速结束的三次贝塞尔曲线。
     */
    static get easeOut(): CubicBezier;
    /**
     * 获取以慢速开始和结束的三次贝塞尔曲线。
     * @returns 以慢速开始和结束的三次贝塞尔曲线。
     */
    static get easeInOut(): CubicBezier;
    /**
     * 获取正弦缓动（Sine）的三次贝塞尔曲线（慢速开始）。
     * @returns 正弦缓动（Sine）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInSine(): CubicBezier;
    /**
     * 获取正弦缓动（Sine）的三次贝塞尔曲线（慢速结束）。
     * @returns 正弦缓动（Sine）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutSine(): CubicBezier;
    /**
     * 获取正弦缓动（Sine）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 正弦缓动（Sine）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutSine(): CubicBezier;
    /**
     * 获取二次方缓动（Quad）的三次贝塞尔曲线（慢速开始）。
     * @returns 二次方缓动（Quad）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInQuad(): CubicBezier;
    /**
     * 获取二次方缓动（Quad）的三次贝塞尔曲线（慢速结束）。
     * @returns 二次方缓动（Quad）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutQuad(): CubicBezier;
    /**
     * 获取二次方缓动（Quad）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 二次方缓动（Quad）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutQuad(): CubicBezier;
    /**
     * 获取三次方缓动（Cubic）的三次贝塞尔曲线（慢速开始）。
     * @returns 三次方缓动（Cubic）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInCubic(): CubicBezier;
    /**
     * 获取三次方缓动（Cubic）的三次贝塞尔曲线（慢速结束）。
     * @returns 三次方缓动（Cubic）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutCubic(): CubicBezier;
    /**
     * 获取三次方缓动（Cubic）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 三次方缓动（Cubic）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutCubic(): CubicBezier;
    /**
     * 获取四次方缓动（Quart）的三次贝塞尔曲线（慢速开始）。
     * @returns 四次方缓动（Quart）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInQuart(): CubicBezier;
    /**
     * 获取四次方缓动（Quart）的三次贝塞尔曲线（慢速结束）。
     * @returns 四次方缓动（Quart）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutQuart(): CubicBezier;
    /**
     * 获取四次方缓动（Quart）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 四次方缓动（Quart）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutQuart(): CubicBezier;
    /**
     * 获取五次方缓动（Quint）的三次贝塞尔曲线（慢速开始）。
     * @returns 五次方缓动（Quint）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInQuint(): CubicBezier;
    /**
     * 获取五次方缓动（Quint）的三次贝塞尔曲线（慢速结束）。
     * @returns 五次方缓动（Quint）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutQuint(): CubicBezier;
    /**
     * 获取五次方缓动（Quint）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 五次方缓动（Quint）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutQuint(): CubicBezier;
    /**
     * 获取指数缓动（Expo）的三次贝塞尔曲线（慢速开始）。
     * @returns 指数缓动（Expo）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInExpo(): CubicBezier;
    /**
     * 获取指数缓动（Expo）的三次贝塞尔曲线（慢速结束）。
     * @returns 指数缓动（Expo）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutExpo(): CubicBezier;
    /**
     * 获取指数缓动（Expo）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 指数缓动（Expo）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutExpo(): CubicBezier;
    /**
     * 获取圆形缓动（Circ）的三次贝塞尔曲线（慢速开始）。
     * @returns 圆形缓动（Circ）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInCirc(): CubicBezier;
    /**
     * 获取圆形缓动（Circ）的三次贝塞尔曲线（慢速结束）。
     * @returns 圆形缓动（Circ）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutCirc(): CubicBezier;
    /**
     * 获取圆形缓动（Circ）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 圆形缓动（Circ）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutCirc(): CubicBezier;
    /**
     * 获取回退缓动（Back）的三次贝塞尔曲线（慢速开始）。
     * @returns 回退缓动（Back）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInBack(): CubicBezier;
    /**
     * 获取回退缓动（Back）的三次贝塞尔曲线（慢速结束）。
     * @returns 回退缓动（Back）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutBack(): CubicBezier;
    /**
     * 获取回退缓动（Back）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 回退缓动（Back）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutBack(): CubicBezier;
    /**
     * 获取弹性缓动（Elastic）的三次贝塞尔曲线（慢速开始）。
     * @returns 弹性缓动（Elastic）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInElastic(): CubicBezier;
    /**
     * 获取弹性缓动（Elastic）的三次贝塞尔曲线（慢速结束）。
     * @returns 弹性缓动（Elastic）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutElastic(): CubicBezier;
    /**
     * 获取弹性缓动（Elastic）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 弹性缓动（Elastic）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutElastic(): CubicBezier;
    /**
     * 获取弹跳缓动（Bounce）的三次贝塞尔曲线（慢速开始）。
     * @returns 弹跳缓动（Bounce）的三次贝塞尔曲线（慢速开始）。
     */
    static get easeInBounce(): CubicBezier;
    /**
     * 获取弹跳缓动（Bounce）的三次贝塞尔曲线（慢速结束）。
     * @returns 弹跳缓动（Bounce）的三次贝塞尔曲线（慢速结束）。
     */
    static get easeOutBounce(): CubicBezier;
    /**
     * 获取弹跳缓动（Bounce）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 弹跳缓动（Bounce）的三次贝塞尔曲线（慢速开始和结束）。
     */
    static get easeInOutBounce(): CubicBezier;
    /**
     * 获取三次贝塞尔曲线第二个控制点的 x 轴坐标。
     */
    get x1(): number;
    /**
     * 设置三次贝塞尔曲线第二个控制点的 x 轴坐标。
     */
    set x1(value: number);
    /**
     * 获取三次贝塞尔曲线第二个控制点的 y 轴坐标。
     */
    get y1(): number;
    /**
     * 设置三次贝塞尔曲线第二个控制点的 y 轴坐标。
     */
    set y1(value: number);
    /**
     * 获取三次贝塞尔曲线第三个控制点的 x 轴坐标。
     */
    get x2(): number;
    /**
     * 设置三次贝塞尔曲线第三个控制点的 x 轴坐标。
     */
    set x2(value: number);
    /**
     * 获取三次贝塞尔曲线第三个控制点的 y 轴坐标。
     */
    get y2(): number;
    /**
     * 设置三次贝塞尔曲线第三个控制点的 y 轴坐标。
     */
    set y2(value: number);
    /**
     * 获取三次贝塞尔曲线起点向量坐标 (P0)。
     */
    get p0(): Vector2;
    /**
     * 获取三次贝塞尔曲线第一个控制点向量坐标 (P1)。
     */
    get p1(): Vector2;
    /**
     * 获取三次贝塞尔曲线第二个控制点向量坐标 (P2)。
     */
    get p2(): Vector2;
    /**
     * 获取三次贝塞尔曲线终点向量坐标 (P3)。
     */
    get p3(): Vector2;
    /**
     * 构造并返回一个三次贝塞尔曲线。
     */
    constructor();
    /**
     * 构造并返回一个三次贝塞尔曲线。
     * @param p1 第一个控制点向量坐标 (P1)。
     * @param p2 第二个控制点向量坐标 (P2)。
     */
    constructor(p1: Vector2, p2: Vector2);
    /**
     * 构造并返回一个三次贝塞尔曲线。
     * @param x1 第二个控制点的 x 轴坐标。
     * @param y1 第二个控制点的 y 轴坐标。
     * @param x2 第三个控制点的 x 轴坐标。
     * @param y2 第三个控制点的 y 轴坐标。
     */
    constructor(x1: number, y1: number, x2: number, y2: number);
    /**
     * 结构化构造函数。
     * @returns CubicBezier 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"](): CubicBezier;
    private static [CONSTRUCTOR_SYMBOL];
    /**
     * 确定指定的 CubicBezier 是否等于当前 CubicBezier。
     * @param other 用于与当前 CubicBezier 比较的 CubicBezier。
     * @returns 是否相等。
     */
    ["=="](other: CubicBezier): boolean;
    /**
     * 确定指定的 CubicBezier 是否不等于当前 CubicBezier。
     * @param other 用于与当前 CubicBezier 比较的 CubicBezier。
     * @returns 是否不相等。
     */
    ["!="](other: CubicBezier): boolean;
    /**
     * 求解贝塞尔曲线上的 x 轴坐标。
     * @param t 时间。
     * @returns x轴坐标。
     */
    getX(t: number): number;
    /**
     * 求解贝塞尔曲线上的 y 轴坐标。
     * @param t 时间。
     * @returns y轴坐标。
     */
    getY(t: number): number;
    /**
     * 求解贝塞尔曲线上的 y 轴坐标。
     * @param x x轴坐标。
     * @returns y轴坐标。
     */
    solve(x: number): number;
    /**
     * 确定指定的三次贝塞尔曲线是否等于当前三次贝塞尔曲线。
     * @param value 用于与当前三次贝塞尔曲线进行比较的三次贝塞尔曲线。
     * @returns 是否相等。
     */
    equals(value: CubicBezier): boolean;
    /**
     * 返回当前三次贝塞尔曲线的字符串表示。
     */
    toString(): string;
    /**
     * 返回当前三次贝塞尔曲线的 JSON 格式表示。
     */
    toJSON(): object;
}
export {};
