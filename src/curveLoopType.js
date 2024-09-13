import Enum from "@jyostudio/enum";

export default class CurveLoopType extends Enum {
    static {
        this.set({
            constant: 0,
            cycle: 1,
            cycleOffset: 2,
            oscillate: 3,
            linear: 4
        });
    }
}
