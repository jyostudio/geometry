import overload from "@jyostudio/overload";

export default class MathHelper {
    static get e() {
        return 2.71828175;
    }

    static get log10e() {
        return 0.4342945;
    }

    static get log2e() {
        return 1.442695;
    }

    static get pi() {
        return 3.14159274;
    }

    static get piOver2() {
        return 1.57079637;
    }

    static get piOver4() {
        return 0.7853982;
    }

    static get twoPi() {
        return 6.28318548;
    }

    static barycentric = overload([Number, Number, Number, Number, Number], (value1, value2, value3, amount1, amount2) =>
        value1 + (value2 - value1) * amount1 + (value3 - value1) * amount2
    )

    static catmullRom = overload([Number, Number, Number, Number, Number], function (value1, value2, value3, value4, amount) {
        const amountSquared = amount * amount;
        const amountCubed = amountSquared * amount;
        return 0.5 * (2.0 * value2 +
            (value3 - value1) * amount +
            (2.0 * value1 - 5.0 * value2 + 4.0 * value3 - value4) * amountSquared +
            (3.0 * value2 - value1 - 3.0 * value3 + value4) * amountCubed);
    })

    static clamp = overload([Number, Number, Number], (value, min, max) => Math.min(Math.max(value, min), max))

    static distance = overload([Number, Number], (value1, value2) => Math.abs(value1 - value2))

    static hermite = overload([Number, Number, Number, Number, Number], function (value1, tangent1, value2, tangent2, amount) {
        const sCubed = amount * amount * amount;
        const sSquared = amount * amount;

        return (amount === 0) ? value1 :
            (amount === 1) ? value2 :
                (2 * value1 - 2 * value2 + tangent2 + tangent1) * sCubed +
                (3 * value2 - 3 * value1 - 2 * tangent1 - tangent2) * sSquared +
                tangent1 * amount +
                value1;
    })

    static lerp = overload([Number, Number, Number], (value1, value2, amount) => value1 + (value2 - value1) * amount)

    static max = overload([Number, Number], (value1, value2) => Math.max(value1, value2))

    static min = overload([Number, Number], (value1, value2) => Math.min(value1, value2))

    static smoothStep = overload([Number, Number, Number], (value1, value2, amount) => MathHelper.hermite(value1, 0, value2, 0, MathHelper.clamp(amount, 0, 1)))

    // 57.29577793714917 = 180 / MathHelper.pi
    static toDegrees = overload([Number], radians => radians * 57.29577793714917)

    // 0.017453293 = MathHelper.pi / 180
    static toRadians = overload([Number], degrees => degrees * 0.017453293)

    static wrapAngle = overload([Number], function (angle) {
        const { pi, twoPi } = MathHelper;

        if (angle > -pi && angle <= pi) return angle;
        
        angle %= twoPi;
        
        return (angle <= -pi) ? angle + twoPi : angle;
    })

    static isPowerOfTwo = overload([Number], value => (value > 0) && ((value & (value - 1)) === 0))

    static closestMSAAPower = overload([Number], function (value) {
        if (value === 1) return 0;

        let result = value - 1;
        result |= result >> 1;
        result |= result >> 2;
        result |= result >> 4;
        result |= result >> 8;
        result |= result >> 16;
        result += 1;

        if (result > value) return result >> 1;
        return result;
    })

    constructor() {
        throw new Error("This is a static class");
    }
}
