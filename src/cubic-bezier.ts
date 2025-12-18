import overload from "@jyostudio/overload";
import { checkSetterType } from "@jyostudio/overload/dist/decorator";
import MathHelper from "./math-helper";
import Vector2 from "./vector2";

const CONSTRUCTOR_SYMBOL = Symbol("constructor");

/**
 * 三次贝塞尔曲线
 * @class
 */
export default class CubicBezier {
    /**
     * 获取以相同速度开始至结束的三次贝塞尔曲线。
     * @returns 以相同速度开始至结束的三次贝塞尔曲线。
     */
    public static get linear(): CubicBezier {
        return new CubicBezier(0, 0, 1, 1);
    }

    /**
     * 获取慢速开始，然后变快，然后慢速结束的三次贝塞尔曲线。
     * @returns 慢速开始，然后变快，然后慢速结束的三次贝塞尔曲线。
     */
    public static get ease(): CubicBezier {
        return new CubicBezier(0.25, 0.1, 0.25, 1);
    }

    /**
     * 获取以慢速开始的三次贝塞尔曲线。
     * @returns 以慢速开始的三次贝塞尔曲线。
     */
    public static get easeIn(): CubicBezier {
        return new CubicBezier(0.42, 0, 1, 1);
    }

    /**
     * 获取以慢速结束的三次贝塞尔曲线。
     * @returns 以慢速结束的三次贝塞尔曲线。
     */
    public static get easeOut(): CubicBezier {
        return new CubicBezier(0, 0, 0.58, 1);
    }

    /**
     * 获取以慢速开始和结束的三次贝塞尔曲线。
     * @returns 以慢速开始和结束的三次贝塞尔曲线。
     */
    public static get easeInOut(): CubicBezier {
        return new CubicBezier(0.42, 0, 0.58, 1);
    }

    /**
     * 获取正弦缓动（Sine）的三次贝塞尔曲线（慢速开始）。
     * @returns 正弦缓动（Sine）的三次贝塞尔曲线（慢速开始）。
     */
    public static get easeInSine(): CubicBezier {
        return new CubicBezier(0.12, 0, 0.39, 0);
    }

    /**
     * 获取正弦缓动（Sine）的三次贝塞尔曲线（慢速结束）。
     * @returns 正弦缓动（Sine）的三次贝塞尔曲线（慢速结束）。
     */
    public static get easeOutSine(): CubicBezier {
        return new CubicBezier(0.61, 1, 0.88, 1);
    }

    /**
     * 获取正弦缓动（Sine）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 正弦缓动（Sine）的三次贝塞尔曲线（慢速开始和结束）。
     */
    public static get easeInOutSine(): CubicBezier {
        return new CubicBezier(0.37, 0, 0.63, 1);
    }

    /**
     * 获取二次方缓动（Quad）的三次贝塞尔曲线（慢速开始）。
     * @returns 二次方缓动（Quad）的三次贝塞尔曲线（慢速开始）。
     */
    public static get easeInQuad(): CubicBezier {
        return new CubicBezier(0.11, 0, 0.5, 0);
    }

    /**
     * 获取二次方缓动（Quad）的三次贝塞尔曲线（慢速结束）。
     * @returns 二次方缓动（Quad）的三次贝塞尔曲线（慢速结束）。
     */
    public static get easeOutQuad(): CubicBezier {
        return new CubicBezier(0.5, 1, 0.89, 1);
    }

    /**
     * 获取二次方缓动（Quad）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 二次方缓动（Quad）的三次贝塞尔曲线（慢速开始和结束）。
     */
    public static get easeInOutQuad(): CubicBezier {
        return new CubicBezier(0.45, 0, 0.55, 1);
    }

    /**
     * 获取三次方缓动（Cubic）的三次贝塞尔曲线（慢速开始）。
     * @returns 三次方缓动（Cubic）的三次贝塞尔曲线（慢速开始）。
     */
    public static get easeInCubic(): CubicBezier {
        return new CubicBezier(0.32, 0, 0.67, 0);
    }

    /**
     * 获取三次方缓动（Cubic）的三次贝塞尔曲线（慢速结束）。
     * @returns 三次方缓动（Cubic）的三次贝塞尔曲线（慢速结束）。
     */
    public static get easeOutCubic(): CubicBezier {
        return new CubicBezier(0.33, 1, 0.68, 1);
    }

    /**
     * 获取三次方缓动（Cubic）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 三次方缓动（Cubic）的三次贝塞尔曲线（慢速开始和结束）。
     */
    public static get easeInOutCubic(): CubicBezier {
        return new CubicBezier(0.65, 0, 0.35, 1);
    }

    /**
     * 获取四次方缓动（Quart）的三次贝塞尔曲线（慢速开始）。
     * @returns 四次方缓动（Quart）的三次贝塞尔曲线（慢速开始）。
     */
    public static get easeInQuart(): CubicBezier {
        return new CubicBezier(0.5, 0, 0.75, 0);
    }

    /**
     * 获取四次方缓动（Quart）的三次贝塞尔曲线（慢速结束）。
     * @returns 四次方缓动（Quart）的三次贝塞尔曲线（慢速结束）。
     */
    public static get easeOutQuart(): CubicBezier {
        return new CubicBezier(0.25, 1, 0.5, 1);
    }

    /**
     * 获取四次方缓动（Quart）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 四次方缓动（Quart）的三次贝塞尔曲线（慢速开始和结束）。
     */
    public static get easeInOutQuart(): CubicBezier {
        return new CubicBezier(0.76, 0, 0.24, 1);
    }

    /**
     * 获取五次方缓动（Quint）的三次贝塞尔曲线（慢速开始）。
     * @returns 五次方缓动（Quint）的三次贝塞尔曲线（慢速开始）。
     */
    public static get easeInQuint(): CubicBezier {
        return new CubicBezier(0.64, 0, 0.78, 0);
    }

    /**
     * 获取五次方缓动（Quint）的三次贝塞尔曲线（慢速结束）。
     * @returns 五次方缓动（Quint）的三次贝塞尔曲线（慢速结束）。
     */
    public static get easeOutQuint(): CubicBezier {
        return new CubicBezier(0.22, 1, 0.36, 1);
    }

    /**
     * 获取五次方缓动（Quint）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 五次方缓动（Quint）的三次贝塞尔曲线（慢速开始和结束）。
     */
    public static get easeInOutQuint(): CubicBezier {
        return new CubicBezier(0.83, 0, 0.17, 1);
    }

    /**
     * 获取指数缓动（Expo）的三次贝塞尔曲线（慢速开始）。
     * @returns 指数缓动（Expo）的三次贝塞尔曲线（慢速开始）。
     */
    public static get easeInExpo(): CubicBezier {
        return new CubicBezier(0.7, 0, 0.84, 0);
    }

    /**
     * 获取指数缓动（Expo）的三次贝塞尔曲线（慢速结束）。
     * @returns 指数缓动（Expo）的三次贝塞尔曲线（慢速结束）。
     */
    public static get easeOutExpo(): CubicBezier {
        return new CubicBezier(0.16, 1, 0.3, 1);
    }

    /**
     * 获取指数缓动（Expo）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 指数缓动（Expo）的三次贝塞尔曲线（慢速开始和结束）。
     */
    public static get easeInOutExpo(): CubicBezier {
        return new CubicBezier(0.87, 0, 0.13, 1);
    }

    /**
     * 获取圆形缓动（Circ）的三次贝塞尔曲线（慢速开始）。
     * @returns 圆形缓动（Circ）的三次贝塞尔曲线（慢速开始）。
     */
    public static get easeInCirc(): CubicBezier {
        return new CubicBezier(0.55, 0, 1, 0.45);
    }

    /**
     * 获取圆形缓动（Circ）的三次贝塞尔曲线（慢速结束）。
     * @returns 圆形缓动（Circ）的三次贝塞尔曲线（慢速结束）。
     */
    public static get easeOutCirc(): CubicBezier {
        return new CubicBezier(0, 0.55, 0.45, 1);
    }

    /**
     * 获取圆形缓动（Circ）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 圆形缓动（Circ）的三次贝塞尔曲线（慢速开始和结束）。
     */
    public static get easeInOutCirc(): CubicBezier {
        return new CubicBezier(0.85, 0, 0.15, 1);
    }

    /**
     * 获取回退缓动（Back）的三次贝塞尔曲线（慢速开始）。
     * @returns 回退缓动（Back）的三次贝塞尔曲线（慢速开始）。
     */
    public static get easeInBack(): CubicBezier {
        return new CubicBezier(0.36, 0, 0.66, -0.56);
    }

    /**
     * 获取回退缓动（Back）的三次贝塞尔曲线（慢速结束）。
     * @returns 回退缓动（Back）的三次贝塞尔曲线（慢速结束）。
     */
    public static get easeOutBack(): CubicBezier {
        return new CubicBezier(0.34, 1.56, 0.64, 1);
    }

    /**
     * 获取回退缓动（Back）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 回退缓动（Back）的三次贝塞尔曲线（慢速开始和结束）。
     */
    public static get easeInOutBack(): CubicBezier {
        return new CubicBezier(0.68, -0.6, 0.32, 1.6);
    }

    /**
     * 获取弹性缓动（Elastic）的三次贝塞尔曲线（慢速开始）。
     * @returns 弹性缓动（Elastic）的三次贝塞尔曲线（慢速开始）。
     */
    public static get easeInElastic(): CubicBezier {
        return new CubicBezier(0.7, -1, 0.84, 1);
    }

    /**
     * 获取弹性缓动（Elastic）的三次贝塞尔曲线（慢速结束）。
     * @returns 弹性缓动（Elastic）的三次贝塞尔曲线（慢速结束）。
     */
    public static get easeOutElastic(): CubicBezier {
        return new CubicBezier(0.16, -1, 0.3, 2);
    }

    /**
     * 获取弹性缓动（Elastic）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 弹性缓动（Elastic）的三次贝塞尔曲线（慢速开始和结束）。
     */
    public static get easeInOutElastic(): CubicBezier {
        return new CubicBezier(0.87, -1, 0.13, 2);
    }

    /**
     * 获取弹跳缓动（Bounce）的三次贝塞尔曲线（慢速开始）。
     * @returns 弹跳缓动（Bounce）的三次贝塞尔曲线（慢速开始）。
     */
    public static get easeInBounce(): CubicBezier {
        return new CubicBezier(0.7, 1.56, 0.84, 1);
    }

    /**
     * 获取弹跳缓动（Bounce）的三次贝塞尔曲线（慢速结束）。
     * @returns 弹跳缓动（Bounce）的三次贝塞尔曲线（慢速结束）。
     */
    public static get easeOutBounce(): CubicBezier {
        return new CubicBezier(0.16, -0.56, 0.3, 1);
    }

    /**
     * 获取弹跳缓动（Bounce）的三次贝塞尔曲线（慢速开始和结束）。
     * @returns 弹跳缓动（Bounce）的三次贝塞尔曲线（慢速开始和结束）。
     */
    public static get easeInOutBounce(): CubicBezier {
        return new CubicBezier(0.87, 1.56, 0.13, 1);
    }

    /**
     * 防止在构造函数中计算。
     */
    #dontCalc = false;

    /**
     * 三次贝塞尔曲线第二个控制点的 x 轴坐标。
     */
    #x1 = 0;

    /**
     * 获取三次贝塞尔曲线第二个控制点的 x 轴坐标。
     */
    public get x1(): number {
        return this.#x1;
    }

    /**
     * 设置三次贝塞尔曲线第二个控制点的 x 轴坐标。
     */
    @checkSetterType(Number)
    public set x1(value: number) {
        this.#x1 = MathHelper.clamp(value, 0, 1);
        this.#calc();
    }

    /**
     * 三次贝塞尔曲线第二个控制点的 y 轴坐标。
     */
    #y1 = 0;

    /**
     * 获取三次贝塞尔曲线第二个控制点的 y 轴坐标。
     */
    public get y1(): number {
        return this.#y1;
    }

    /**
     * 设置三次贝塞尔曲线第二个控制点的 y 轴坐标。
     */
    @checkSetterType(Number)
    public set y1(value: number) {
        this.#y1 = value;
        this.#calc();
    }

    /**
     * 三次贝塞尔曲线第三个控制点的 x 轴坐标。
     */
    #x2 = 0;

    /**
     * 获取三次贝塞尔曲线第三个控制点的 x 轴坐标。
     */
    public get x2(): number {
        return this.#x2;
    }

    /**
     * 设置三次贝塞尔曲线第三个控制点的 x 轴坐标。
     */
    @checkSetterType(Number)
    public set x2(value: number) {
        this.#x2 = MathHelper.clamp(value, 0, 1);
        this.#calc();
    }

    /**
     * 三次贝塞尔曲线第三个控制点的 y 轴坐标。
     */
    #y2 = 0;

    /**
     * 获取三次贝塞尔曲线第三个控制点的 y 轴坐标。
     */
    public get y2(): number {
        return this.#y2;
    }

    /**
     * 设置三次贝塞尔曲线第三个控制点的 y 轴坐标。
     */
    @checkSetterType(Number)
    public set y2(value: number) {
        this.#y2 = value;
        this.#calc();
    }

    /**
     * 三次贝塞尔曲线第一个控制点向量坐标。
     */
    #v1: Vector2 = null!;

    /**
     * 三次贝塞尔曲线第二个控制点向量坐标。
     */
    #v2: Vector2 = null!;

    /**
     * 三次贝塞尔曲线第三个控制点向量坐标。
     */
    #v3: Vector2 = null!;

    /**
     * 获取三次贝塞尔曲线起点向量坐标 (P0)。
     */
    public get p0(): Vector2 {
        return new Vector2(0, 0);
    }

    /**
     * 获取三次贝塞尔曲线第一个控制点向量坐标 (P1)。
     */
    public get p1(): Vector2 {
        return new Vector2(this.#x1, this.#y1);
    }

    /**
     * 获取三次贝塞尔曲线第二个控制点向量坐标 (P2)。
     */
    public get p2(): Vector2 {
        return new Vector2(this.#x2, this.#y2);
    }

    /**
     * 获取三次贝塞尔曲线终点向量坐标 (P3)。
     */
    public get p3(): Vector2 {
        return new Vector2(1, 1);
    }

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
    constructor(...params: any) {
        CubicBezier[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    /**
     * 结构化构造函数。
     * @returns CubicBezier 实例。
     */
    public static ["##STRUCT_CONSTRUCTOR##"](): CubicBezier {
        return new CubicBezier();
    }

    private static [CONSTRUCTOR_SYMBOL](...params: any): void {
        CubicBezier[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function (this: CubicBezier) {
                CubicBezier[CONSTRUCTOR_SYMBOL].call(this, 0, 0, 1, 1);
            })
            .add([Vector2, Vector2], function (this: CubicBezier, p1, p2) {
                CubicBezier[CONSTRUCTOR_SYMBOL].call(this, p1.x, p1.y, p2.x, p2.y);
            })
            .add([Number, Number, Number, Number], function (this: CubicBezier, x1, y1, x2, y2) {
                this.#dontCalc = true;
                this.#x1 = x1;
                this.#y1 = y1;
                this.#x2 = x2;
                this.#y2 = y2;
                this.#v1 = new Vector2();
                this.#v2 = new Vector2();
                this.#v3 = new Vector2();
                this.#dontCalc = false;
                this.#calc();
            });

        return CubicBezier[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    #calc() {
        if (this.#dontCalc) return;

        this.#v3.x = 3 * this.#x1;
        this.#v3.y = 3 * this.#y1;
        this.#v2.x = 3 * (this.#x2 - this.#x1) - this.#v3.x;
        this.#v2.y = 3 * (this.#y2 - this.#y1) - this.#v3.y;
        this.#v1.x = 1 - this.#v3.x - this.#v2.x;
        this.#v1.y = 1 - this.#v3.y - this.#v2.y;
    }

    /**
     * 确定指定的 CubicBezier 是否等于当前 CubicBezier。
     * @param other 用于与当前 CubicBezier 比较的 CubicBezier。
     * @returns 是否相等。
     */
    public ["=="](other: CubicBezier): boolean;
    public ["=="](...params: any): any {
        CubicBezier.prototype["=="] = overload([CubicBezier], function (this: CubicBezier, other) {
            return this.equals(other);
        }).any(() => false);

        return CubicBezier.prototype["=="].apply(this, params);
    }

    /**
     * 确定指定的 CubicBezier 是否不等于当前 CubicBezier。
     * @param other 用于与当前 CubicBezier 比较的 CubicBezier。
     * @returns 是否不相等。
     */
    public ["!="](other: CubicBezier): boolean;
    public ["!="](...params: any): any {
        CubicBezier.prototype["!="] = overload([CubicBezier], function (this: CubicBezier, other) {
            return !this.equals(other);
        }).any(() => true);

        return CubicBezier.prototype["!="].apply(this, params);
    }

    /**
     * 求解贝塞尔曲线上的 x 轴坐标。
     * @param t 时间。
     * @returns x轴坐标。
     */
    public getX(t: number): number;
    public getX(...params: any): any {
        CubicBezier.prototype.getX = overload([Number], function (this: CubicBezier, t) {
            return ((this.#v1.x * t + this.#v2.x) * t + this.#v3.x) * t;
        });

        return CubicBezier.prototype.getX.apply(this, params);
    }

    /**
     * 求解贝塞尔曲线上的 y 轴坐标。
     * @param t 时间。
     * @returns y轴坐标。
     */
    public getY(t: number): number;
    public getY(...params: any): any {
        CubicBezier.prototype.getY = overload()
            .add([Number], function (this: CubicBezier, t) {
                return ((this.#v1.y * t + this.#v2.y) * t + this.#v3.y) * t;
            });

        return CubicBezier.prototype.getY.apply(this, params);
    }

    /**
     * 求解贝塞尔曲线上的 y 轴坐标。
     * @param x x轴坐标。
     * @returns y轴坐标。
     */
    public solve(x: number): number;
    public solve(...params: any): any {
        CubicBezier.prototype.solve = overload()
            .add([Number], function (this: CubicBezier, x) {
                if (x === 0 || x === 1) return this.getY(x);

                let t = x;
                for (let i = 0; i < 8; i++) {
                    const g = this.getX(t) - x;
                    if (Math.abs(g) < Number.EPSILON) return this.getY(t);

                    const d = (3 * this.#v1.x * t + 2 * this.#v2.x) * t + this.#v3.x;
                    if (Math.abs(d) < Number.EPSILON) break;

                    t -= g / d;
                }

                return this.getY(t);
            });

        return CubicBezier.prototype.solve.apply(this, params);
    }

    /**
     * 确定指定的三次贝塞尔曲线是否等于当前三次贝塞尔曲线。
     * @param value 用于与当前三次贝塞尔曲线进行比较的三次贝塞尔曲线。
     * @returns 是否相等。
     */
    public equals(value: CubicBezier): boolean;
    public equals(...params: any): any {
        CubicBezier.prototype.equals = overload([CubicBezier], function (this: CubicBezier, cubicBezier) {
            return this.p1.equals(cubicBezier.p1) && this.p2.equals(cubicBezier.p2);
        }).any(() => false);

        return CubicBezier.prototype.equals.apply(this, params);
    }

    /**
     * 返回当前三次贝塞尔曲线的字符串表示。
     */
    public toString(): string;
    public toString(...params: any): any {
        CubicBezier.prototype.toString = overload([], function (this: CubicBezier) {
            return JSON.stringify(this);
        });

        return CubicBezier.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前三次贝塞尔曲线的 JSON 格式表示。
     */
    public toJSON(): object {
        return {
            p0: this.p0.toJSON(),
            p1: this.p1.toJSON(),
            p2: this.p2.toJSON(),
            p3: this.p3.toJSON()
        }
    }
}