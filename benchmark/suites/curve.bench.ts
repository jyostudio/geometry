import { Curve, CurveKey, CurveLoopType, CurveTangent } from "../../src";
import { suite } from "../runner";

suite("Curve", s => {
    const curve = new Curve();
    curve.keys.add(new CurveKey(0, 0));
    curve.keys.add(new CurveKey(1, 10));
    curve.keys.add(new CurveKey(2, 20));
    curve.keys.add(new CurveKey(3, 30));
    curve.computeTangents(CurveTangent.flat);

    const other = curve.clone();

    s.add("constructor", () => {
        new Curve();
    });

    s.add("isConstant", () => {
        const b = curve.isConstant;
    });

    s.add("clone", () => {
        curve.clone();
    });

    s.add("computeTangent", () => {
        curve.computeTangent(1, CurveTangent.smooth);
    });

    s.add("computeTangents", () => {
        curve.computeTangents(CurveTangent.flat);
    });

    s.add("evaluate", () => {
        curve.evaluate(1.5);
    });

    s.add("equals", () => {
        curve.equals(other);
    });
});
