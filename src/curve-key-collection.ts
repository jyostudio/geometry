import List from "@jyostudio/list";
import overload from "@jyostudio/overload";
import CurveKey from "./curve-key";

/**
 * 包含组成 Curve 的 CurveKeys。
 * @class
 */
export default class CurveKeyCollection extends List<CurveKey> {
    /**
     * 初始化新的 CurveKeyCollection 实例。
     */
    constructor();
    constructor() {
        super(CurveKey);
    }

    /**
     * 确定指定的 CurveKeyCollection 是否等于当前 CurveKeyCollection。
     * @param other 用于与当前 CurveKeyCollection 比较的 CurveKeyCollection。
     * @returns 是否相等。
     */
    public ["=="](other: CurveKeyCollection): boolean;
    public ["=="](...params: any): any {
        return this.equals.apply(this, params);
    }

    /**
     * 确定指定的 CurveKeyCollection 是否不等于当前 CurveKeyCollection。
     * @param other 用于与当前 CurveKeyCollection 比较的 CurveKeyCollection。
     * @returns 是否不相等。
     */
    public ["!="](other: CurveKeyCollection): boolean;
    public ["!="](...params: any): any {
        return !this.equals.apply(this, params);
    }

    /**
     * 创建 CurveKeyCollection 的副本。
     * @returns CurveKeyCollection 的副本。
     */
    public clone(): CurveKeyCollection;
    public clone(...params: any): any {
        CurveKeyCollection.prototype.clone = overload([], function (this: CurveKeyCollection) {
            const newCurveKeyCollection = new CurveKeyCollection();
            const items = this.toArray();
            for (let i = 0; i < items.length; i++) {
                newCurveKeyCollection.add(items[i]);
            }
            return newCurveKeyCollection;
        });

        return CurveKeyCollection.prototype.clone.apply(this, params);
    }

    /**
     * 确定指定的 CurveKeyCollection 是否等于当前 CurveKeyCollection。
     * @param other 用于与当前 CurveKeyCollection 比较的 CurveKeyCollection。
     * @returns 是否相等。
     */
    public equals(other: CurveKeyCollection): boolean;
    public equals(...params: any): any {
        CurveKeyCollection.prototype.equals = overload([CurveKeyCollection], function (this: CurveKeyCollection, other) {
            if (this.length !== other.length) return false;
            const thisItems = this.toArray();
            const otherItems = other.toArray();
            for (let i = 0; i < thisItems.length; i++) {
                if (!thisItems[i].equals(otherItems[i])) return false;
            }
            return true;
        }).any(() => false);

        return CurveKeyCollection.prototype.equals.apply(this, params);
    }

    /**
     * 返回表示当前 CurveKeyCollection 的字符串。
     * @returns 表示当前 CurveKeyCollection 的字符串。
     */
    public toString(...params: any): any {
        CurveKeyCollection.prototype.toString = overload([], function (this: CurveKeyCollection) {
            return JSON.stringify(this);
        });

        return CurveKeyCollection.prototype.toString.apply(this, params);
    }

    /**
     * 返回当前 CurveKeyCollection 的 JSON 表示。
     * @returns 当前 CurveKeyCollection 的 JSON 表示。
     */
    public toJSON(): object {
        return this.toArray().map((curveKey: CurveKey) => curveKey.toJSON());
    }
}