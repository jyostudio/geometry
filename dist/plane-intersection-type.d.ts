import Enum from "@jyostudio/enum";
/**
 * 介绍平面和边界体间的交集。
 * @enum
 */
export default class PlaneIntersectionType extends Enum {
    /**
     * 无交集，边界体位于 Plane 的正半空间。
     */
    static readonly front: PlaneIntersectionType;
    /**
     * 无交集，边界体位于 Plane 的负半空间。
     */
    static readonly back: PlaneIntersectionType;
    /**
     * 与 Plane 相交。
     */
    static readonly intersecting: PlaneIntersectionType;
}
