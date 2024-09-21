import overload from "@jyostudio/overload";
import Point from "./point.js";

const CONSTURCTOR_SYMBOL = Symbol("constructor");

export default class Rectangle {
    static get empty() {
        return new Rectangle();
    }

    #x = 0;

    #y = 0;

    #width = 0;

    #height = 0;

    get isEmpty() {
        return !this.#x && !this.#y && !this.#width && !this.#height;
    }

    get bottom() {
        return this.#y + this.#height;
    }

    get center() {
        return new Point(this.#x + this.#width / 2, this.#y + this.#height / 2);
    }

    get left() {
        return this.#x;
    }

    get right() {
        return this.#x + this.#width;
    }

    get top() {
        return this.#y;
    }

    static ["##STRUCT_CONSTURCTOR##"]() {
        return Rectangle.empty;
    }

    static [CONSTURCTOR_SYMBOL] = function (...params) {
        Rectangle[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () { })
            .add([Number, Number, Number, Number], function (x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            });

        return Rectangle[CONSTURCTOR_SYMBOL].apply(this, params);
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
            },
            width: {
                get: () => this.#width,
                set: overload([Number], value => this.#width = parseInt(value))
            },
            height: {
                get: () => this.#height,
                set: overload([Number], value => this.#height = parseInt(value))
            },
            location: {
                get: () => new Point(this.#x, this.#y),
                set: overload([Point], value => {
                    this.#x = value.x;
                    this.#y = value.y;
                })
            }
        });

        return Rectangle[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    *[Symbol.iterator]() {
        yield this.#x;
        yield this.#y;
        yield this.#width;
        yield this.#height;
    }

    static intersect(...params) {
        Rectangle.intersect = overload([Rectangle, Rectangle], function (value1, value2) {
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
        });

        return Rectangle.intersect.apply(this, params);
    }

    static union(...params) {
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

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    contains(...params) {
        Rectangle.prototype.contains = overload()
            .add([Number, Number], function (x, y) {
                const withinXBounds = this.#x <= x && x < this.#x + this.#width;
                const withinYBounds = this.#y <= y && y < this.#y + this.#height;
                return withinXBounds && withinYBounds;
            })
            .add([Point], function (value) {
                const withinXBounds = (this.#x <= value.x) && (value.x < (this.#x + this.#width));
                const withinYBounds = (this.#y <= value.y) && (value.y < (this.#y + this.#height));
                return withinXBounds && withinYBounds;
            })
            .add([Rectangle], function (value) {
                const isXWithinBounds = this.#x <= value.#x && (value.#x + value.#width) <= (this.#x + this.#width);
                const isYWithinBounds = this.#y <= value.#y && (value.#y + value.#height) <= (this.#y + this.#height);
                return isXWithinBounds && isYWithinBounds;
            });

        return Rectangle.prototype.contains.apply(this, params);
    }

    equals(...params) {
        Rectangle.prototype.equals = overload([Rectangle], function (other) {
            const x = other.#x, y = other.#y, width = other.#width, height = other.#height;
            return this.#x === x && this.#y === y && this.#width === width && this.#height === height;
        }).any(() => false);

        return Rectangle.prototype.equals.apply(this, params);
    }

    inflate(...params) {
        Rectangle.prototype.inflate = overload([Number, Number], function (horizontalAmount, verticalAmount) {
            this.x -= horizontalAmount;
            this.y -= verticalAmount;
            this.width += horizontalAmount * 2;
            this.height += verticalAmount * 2;
        });

        return Rectangle.prototype.inflate.apply(this, params);
    }

    intersects(...params) {
        Rectangle.prototype.intersects = overload([Rectangle], function (value) {
            const left = value.left, right = value.right, top = value.top, bottom = value.bottom;
            const thisLeft = this.left, thisRight = this.right, thisTop = this.top, thisBottom = this.bottom;
            return left < thisRight && thisLeft < right && top < thisBottom && thisTop < bottom;
        });

        return Rectangle.prototype.intersects.apply(this, params);
    }

    offset(...params) {
        Rectangle.prototype.offset = overload()
            .add([Number, Number], function (offsetX, offsetY) {
                this.x += offsetX;
                this.y += offsetY;
            })
            .add([Point], function (amount) {
                this.#x += amount.x;
                this.#y += amount.y;
            });

        return Rectangle.prototype.offset.apply(this, params);
    }

    toString(...params) {
        Rectangle.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return Rectangle.prototype.toString.apply(this, params);
    }

    toJSON() {
        return {
            x: this.#x,
            y: this.#y,
            width: this.#width,
            height: this.#height
        };
    }
}
