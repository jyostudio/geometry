import Enum from "@jyostudio/enum";

export default class CurveTangent extends Enum {
    static {
        this.set({
            flat: 0,
            linear: 1,
            smooth: 2
        });
    }
}
