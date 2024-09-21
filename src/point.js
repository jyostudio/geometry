import overload from "@jyostudio/overload";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class Point {
    static get zero() {
        return new Point(0, 0);
    }

    #x = 0;

    #y = 0;

    static ["##STRUCT_CONSTURCTOR##"]() {
        return Point.zero;
    }

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        Point[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number, Number], function (x, y) {
                this.x = x;
                this.y = y;
            });

        return Point[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        Object.defineProperties(this, {
            x: {
                get: () => this.#x,
                set: overload([Number], value => this.#x = parseInt(value))
            },
            y: {
                get: () => this.#y,
                set: overload([Number], value => this.#y = parseInt(value))
            }
        });

        return Point[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        yield this.#x;
        yield this.#y;
    }

    static ["-"](...params) {
        Point.prototype["-"] = overload([Point], function (other) {
            return new Point(-other.#x, -other.#y);
        });

        return Point.prototype["-"].apply(this, params);
    }

    ["+"](...params) {
        Point.prototype["+"] = overload([Point], function (other) {
            return new Point(this.#x + other.#x, this.#y + other.#y);
        });

        return Point.prototype["+"].apply(this, params);
    }

    ["-"](...params) {
        Point.prototype["-"] = overload([Point], function (other) {
            return new Point(this.#x - other.#x, this.#y - other.#y);
        });

        return Point.prototype["-"].apply(this, params);
    }

    ["*"](...params) {
        Point.prototype["*"] = overload()
            .add([Number], function (scalar) {
                return new Point(this.#x * scalar, this.#y * scalar);
            })
            .add([Point], function (other) {
                return new Point(this.#x * other.#x, this.#y * other.#y);
            });

        return Point.prototype["*"].apply(this, params);
    }

    ["/"](...params) {
        Point.prototype["/"] = overload()
            .add([Number], function (scalar) {
                return new Point(this.#x / scalar, this.#y / scalar);
            })
            .add([Point], function (other) {
                return new Point(this.#x / other.x, this.#y / other.y);
            });

        return Point.prototype["/"].apply(this, params);
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    equals(...params) {
        Point.prototype.equals = overload([Point], function (other) {
            return this.#x === other.#x && this.#y === other.#y;
        }).any(() => false);

        return Point.prototype.equals.apply(this, params);
    }

    toString(...params) {
        Point.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return Point.prototype.toString.apply(this, params);
    }

    toJSON() {
        return {
            x: this.#x,
            y: this.#y
        }
    }
}
