import { CurveKey, CurveKeyCollection } from "../../src";
import { suite } from "../runner";

suite("CurveKeyCollection", s => {
    const collection = new CurveKeyCollection();
    collection.add(new CurveKey(0, 0));
    collection.add(new CurveKey(1, 10));

    const other = collection.clone();

    s.add("constructor", () => {
        new CurveKeyCollection();
    });

    s.add("clone", () => {
        collection.clone();
    });

    s.add("equals", () => {
        collection.equals(other);
    });
});
