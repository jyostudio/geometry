import Enum from "@jyostudio/enum";

export default class CurveContinuity extends Enum {
    static {
        this.set({
            smooth: 0,
            step: 1
        });
    }
}
