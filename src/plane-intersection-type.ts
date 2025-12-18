import Enum from "@jyostudio/enum";

/**
 * 介绍平面和边界体间的交集。
 * @enum
 */
export default class PlaneIntersectionType extends Enum {
    /**
     * 无交集，边界体位于 Plane 的正半空间。
     */
    declare static readonly front: PlaneIntersectionType;

    /**
     * 无交集，边界体位于 Plane 的负半空间。
     */
    declare static readonly back: PlaneIntersectionType;

    /**
     * 与 Plane 相交。
     */
    declare static readonly intersecting: PlaneIntersectionType;

    static {
        this.set({
            front: 0,
            back: 1,
            intersecting: 2
        })
    }
}
