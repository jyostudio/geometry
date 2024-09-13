import overload from "@jyostudio/overload";
import MathHelper from "./math_helper.js";
import Vector2 from "./vector2.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class CubicBezier {
    static get linear() {
        return new CubicBezier(0, 0, 1, 1);
    }

    static get ease() {
        return new CubicBezier(0.25, 0.1, 0.25, 1);
    }

    static get easeIn() {
        return new CubicBezier(0.42, 0, 1, 1);
    }

    static get easeOut() {
        return new CubicBezier(0, 0, 0.58, 1);
    }

    static get easeInOut() {
        return new CubicBezier(0.42, 0, 0.58, 1);
    }

    static get easeInSine() {
        return new CubicBezier(0.12, 0, 0.39, 0);
    }

    static get easeOutSine() {
        return new CubicBezier(0.61, 1, 0.88, 1);
    }

    static get easeInOutSine() {
        return new CubicBezier(0.37, 0, 0.63, 1);
    }

    static get easeInQuad() {
        return new CubicBezier(0.11, 0, 0.5, 0);
    }

    static get easeOutQuad() {
        return new CubicBezier(0.5, 1, 0.89, 1);
    }

    static get easeInOutQuad() {
        return new CubicBezier(0.45, 0, 0.55, 1);
    }

    static get easeInCubic() {
        return new CubicBezier(0.32, 0, 0.67, 0);
    }

    static get easeOutCubic() {
        return new CubicBezier(0.33, 1, 0.68, 1);
    }

    static get easeInOutCubic() {
        return new CubicBezier(0.65, 0, 0.35, 1);
    }

    static get easeInQuart() {
        return new CubicBezier(0.5, 0, 0.75, 0);
    }

    static get easeOutQuart() {
        return new CubicBezier(0.25, 1, 0.5, 1);
    }

    static get easeInOutQuart() {
        return new CubicBezier(0.76, 0, 0.24, 1);
    }

    static get easeInQuint() {
        return new CubicBezier(0.64, 0, 0.78, 0);
    }

    static get easeOutQuint() {
        return new CubicBezier(0.22, 1, 0.36, 1);
    }

    static get easeInOutQuint() {
        return new CubicBezier(0.83, 0, 0.17, 1);
    }

    static get easeInExpo() {
        return new CubicBezier(0.7, 0, 0.84, 0);
    }

    static get easeOutExpo() {
        return new CubicBezier(0.16, 1, 0.3, 1);
    }

    static get easeInOutExpo() {
        return new CubicBezier(0.87, 0, 0.13, 1);
    }

    static get easeInCirc() {
        return new CubicBezier(0.55, 0, 1, 0.45);
    }

    static get easeOutCirc() {
        return new CubicBezier(0, 0.55, 0.45, 1);
    }

    static get easeInOutCirc() {
        return new CubicBezier(0.85, 0, 0.15, 1);
    }

    static get easeInBack() {
        return new CubicBezier(0.36, 0, 0.66, -0.56);
    }

    static get easeOutBack() {
        return new CubicBezier(0.34, 1.56, 0.64, 1);
    }

    static get easeInOutBack() {
        return new CubicBezier(0.68, -0.6, 0.32, 1.6);
    }

    static get easeInElastic() {
        return new CubicBezier(0.7, -1, 0.84, 1);
    }

    static get easeOutElastic() {
        return new CubicBezier(0.16, -1, 0.3, 2);
    }

    static get easeInOutElastic() {
        return new CubicBezier(0.87, -1, 0.13, 2);
    }

    static get easeInBounce() {
        return new CubicBezier(0.7, 1.56, 0.84, 1);
    }

    static get easeOutBounce() {
        return new CubicBezier(0.16, -0.56, 0.3, 1);
    }

    static get easeInOutBounce() {
        return new CubicBezier(0.87, 1.56, 0.13, 1);
    }

    #dontCalc = false;

    #x1 = 0;

    #y1 = 0;

    #x2 = 0;

    #y2 = 0;

    #v1 = null;

    #v2 = null;

    #v3 = null;

    get v1() {
        return new Vector2(0, 0);
    }

    get v2() {
        return new Vector2(this.x1, this.y1);
    }

    get v3() {
        return new Vector2(this.x2, this.y2);
    }

    get v4() {
        return new Vector2(1, 1);
    }

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        CubicBezier[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () {
                return CubicBezier[CONSTURCTOR_SYMBOL].call(this, 0, 0, 1, 1);
            })
            .add([Vector2, Vector2], function (v1, v2) {
                return CubicBezier[CONSTURCTOR_SYMBOL].call(this, v1.x, v1.y, v2.x, v2.y);
            })
            .add([Number, Number, Number, Number], function (x1, y1, x2, y2) {
                this.#dontCalc = true;
                [this.x1, this.y1, this.x2, this.y2] = [x1, y1, x2, y2];
                this.#v1 = new Vector2();
                this.#v2 = new Vector2();
                this.#v3 = new Vector2();
                this.#dontCalc = false;
                this.#calc();
            });

        return CubicBezier[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        Object.defineProperties(this, {
            x1: {
                get: () => this.#x1,
                set: overload([Number], function (value) {
                    this.#x1 = MathHelper.clamp(value, 0, 1);
                    this.#calc();
                })
            },
            y1: {
                get: () => this.#y1,
                set: overload([Number], function (value) {
                    this.#y1 = value;
                    this.#calc();
                })
            },
            x2: {
                get: () => this.#x2,
                set: overload([Number], function (value) {
                    this.#x2 = MathHelper.clamp(value, 0, 1);
                    this.#calc();
                })
            },
            y2: {
                get: () => this.#y2,
                set: overload([Number], function (value) {
                    this.#y2 = value;
                    this.#calc();
                })
            }
        });

        return CubicBezier[CONSTURCTOR_SYMBOL].apply(this, params);
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

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    getX(...params) {
        CubicBezier.prototype.getX = overload([Number], function (t) {
            return ((this.#v1.x * t + this.#v2.x) * t + this.#v3.x) * t;
        });

        return CubicBezier.prototype.getX.apply(this, params);
    }

    getY(...params) {
        CubicBezier.prototype.getY = overload()
            .add([Number], function (t) {
                return ((this.#v1.y * t + this.#v2.y) * t + this.#v3.y) * t;
            });

        return CubicBezier.prototype.getY.apply(this, params);
    }

    solve(...params) {
        CubicBezier.prototype.solve = overload()
            .add([Number], function (x) {
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

    equals(...params) {
        CubicBezier.prototype.equals = overload([CubicBezier], function (cubicBezier) {
            return this.v1.equals(cubicBezier.v1) && this.v2.equals(cubicBezier.v2) && this.v3.equals(cubicBezier.v3) && this.v4.equals(cubicBezier.v4);
        }).any(() => false);

        return CubicBezier.prototype.equals.apply(this, params);
    }

    toString(...params) {
        CubicBezier.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return CubicBezier.prototype.toString.apply(this, params);
    }

    toJSON() {
        return {
            v1: this.v1.toJSON(),
            v2: this.v2.toJSON(),
            v3: this.v3.toJSON(),
            v4: this.v4.toJSON()
        }
    }
}