import { MathHelper } from "../../src";
import { suite } from "../runner";

suite("MathHelper", s => {
    s.add("barycentric", () => {
        MathHelper.barycentric(0, 10, 20, 0.3, 0.3);
    });

    s.add("catmullRom", () => {
        MathHelper.catmullRom(0, 10, 20, 30, 0.5);
    });

    s.add("clamp", () => {
        MathHelper.clamp(15, 0, 10);
    });

    s.add("distance", () => {
        MathHelper.distance(10, 20);
    });

    s.add("hermite", () => {
        MathHelper.hermite(0, 10, 20, 10, 0.5);
    });

    s.add("lerp", () => {
        MathHelper.lerp(0, 10, 0.5);
    });

    s.add("max", () => {
        MathHelper.max(10, 20);
    });

    s.add("min", () => {
        MathHelper.min(10, 20);
    });

    s.add("smoothStep", () => {
        MathHelper.smoothStep(0, 10, 0.5);
    });

    s.add("toDegrees", () => {
        MathHelper.toDegrees(MathHelper.pi);
    });

    s.add("toRadians", () => {
        MathHelper.toRadians(180);
    });

    s.add("wrapAngle", () => {
        MathHelper.wrapAngle(MathHelper.twoPi + 1);
    });

    s.add("isPowerOfTwo", () => {
        MathHelper.isPowerOfTwo(16);
    });

    s.add("floorPowerOfTwo", () => {
        MathHelper.floorPowerOfTwo(15);
    });
});
