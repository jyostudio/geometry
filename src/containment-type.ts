import Enum from "@jyostudio/enum";

/**
 * 指示边界体相互插入或包含的程度。
 * @enum
 */
export default class ContainmentType extends Enum {
    /**
     * 指示边界体不相互重叠。
     */
    declare static readonly disjoint: ContainmentType;

    /**
     * 指示一个边界体完全包含另一个边界体。
     */
    declare static readonly contains: ContainmentType;

    /**
     * 指示边界体部分重叠。
     */
    declare static readonly intersects: ContainmentType;

    static {
        this.set({
            disjoint: 0,
            contains: 1,
            intersects: 2
        });
    }
}
