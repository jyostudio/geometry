import Enum from "@jyostudio/enum";

export default class ContainmentType extends Enum {
    static {
        this.set({
            disjoint: 0,
            contains: 1,
            intersects: 2
        });
    }
}
