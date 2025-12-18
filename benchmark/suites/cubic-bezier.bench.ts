import { CubicBezier } from "../../src";
import { suite } from "../runner";

suite("CubicBezier", s => {
    const bezier = CubicBezier.ease;
    const other = CubicBezier.linear;

    s.add("constructor", () => {
        new CubicBezier(0.25, 0.1, 0.25, 1);
    });

    s.add("linear", () => {
        const b = CubicBezier.linear;
    });

    s.add("ease", () => {
        const b = CubicBezier.ease;
    });

    s.add("easeIn", () => {
        const b = CubicBezier.easeIn;
    });

    s.add("easeOut", () => {
        const b = CubicBezier.easeOut;
    });

    s.add("easeInOut", () => {
        const b = CubicBezier.easeInOut;
    });

    s.add("easeInSine", () => {
        const b = CubicBezier.easeInSine;
    });

    s.add("easeOutSine", () => {
        const b = CubicBezier.easeOutSine;
    });

    s.add("easeInOutSine", () => {
        const b = CubicBezier.easeInOutSine;
    });

    s.add("easeInQuad", () => {
        const b = CubicBezier.easeInQuad;
    });

    s.add("easeOutQuad", () => {
        const b = CubicBezier.easeOutQuad;
    });

    s.add("easeInOutQuad", () => {
        const b = CubicBezier.easeInOutQuad;
    });

    s.add("easeInCubic", () => {
        const b = CubicBezier.easeInCubic;
    });

    s.add("easeOutCubic", () => {
        const b = CubicBezier.easeOutCubic;
    });

    s.add("easeInOutCubic", () => {
        const b = CubicBezier.easeInOutCubic;
    });

    s.add("easeInQuart", () => {
        const b = CubicBezier.easeInQuart;
    });

    s.add("easeOutQuart", () => {
        const b = CubicBezier.easeOutQuart;
    });

    s.add("easeInOutQuart", () => {
        const b = CubicBezier.easeInOutQuart;
    });

    s.add("easeInQuint", () => {
        const b = CubicBezier.easeInQuint;
    });

    s.add("easeOutQuint", () => {
        const b = CubicBezier.easeOutQuint;
    });

    s.add("easeInOutQuint", () => {
        const b = CubicBezier.easeInOutQuint;
    });

    s.add("easeInExpo", () => {
        const b = CubicBezier.easeInExpo;
    });

    s.add("easeOutExpo", () => {
        const b = CubicBezier.easeOutExpo;
    });

    s.add("easeInOutExpo", () => {
        const b = CubicBezier.easeInOutExpo;
    });

    s.add("easeInCirc", () => {
        const b = CubicBezier.easeInCirc;
    });

    s.add("easeOutCirc", () => {
        const b = CubicBezier.easeOutCirc;
    });

    s.add("easeInOutCirc", () => {
        const b = CubicBezier.easeInOutCirc;
    });

    s.add("easeInBack", () => {
        const b = CubicBezier.easeInBack;
    });

    s.add("easeOutBack", () => {
        const b = CubicBezier.easeOutBack;
    });

    s.add("easeInOutBack", () => {
        const b = CubicBezier.easeInOutBack;
    });

    s.add("easeInElastic", () => {
        const b = CubicBezier.easeInElastic;
    });

    s.add("easeOutElastic", () => {
        const b = CubicBezier.easeOutElastic;
    });

    s.add("easeInOutElastic", () => {
        const b = CubicBezier.easeInOutElastic;
    });

    s.add("easeInBounce", () => {
        const b = CubicBezier.easeInBounce;
    });

    s.add("easeOutBounce", () => {
        const b = CubicBezier.easeOutBounce;
    });

    s.add("easeInOutBounce", () => {
        const b = CubicBezier.easeInOutBounce;
    });

    s.add("solve", () => {
        bezier.solve(0.5);
    });

    s.add("getX", () => {
        bezier.getX(0.5);
    });

    s.add("getY", () => {
        bezier.getY(0.5);
    });

    s.add("equals", () => {
        bezier.equals(other);
    });
});
