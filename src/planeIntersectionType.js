import Enum from "@jyostudio/enum";

export default class PlaneIntersectionType extends Enum {
    static {
        this.set({
            front: 0,
            back: 1,
            intersecting: 2
        })
    }
}
