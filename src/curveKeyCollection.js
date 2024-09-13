import overload from "@jyostudio/overload";
import List from "@jyostudio/list";
import CurveKey from "./curveKey.js";

export default class CurveKeyCollection extends List {
    constructor() {
        super(CurveKey);
    }

    ["=="](...params) {
        return this.equals(...params);
    }

    ["!="](...params) {
        return !this.equals(...params);
    }

    clone(...params) {
        CurveKeyCollection.prototype.clone = overload([], function () {
            const newCurveKeyCollection = new CurveKeyCollection();
            for (let i = 0; i < this.length; i++) {
                newCurveKeyCollection.add(this[i]);
            }
            return newCurveKeyCollection;
        });

        return CurveKeyCollection.prototype.clone.apply(this, params);
    }

    equals(...params) {
        CurveKeyCollection.prototype.equals = overload([CurveKeyCollection], function (other) {
            if (this.length !== other.length) return false;
            for (let i = 0; i < this.length; i++) {
                if (!this[i].equals(other[i])) return false;
            }
            return true;
        }).any(() => false);

        return CurveKeyCollection.prototype.equals.apply(this, params);
    }

    toString(...params) {
        CurveKeyCollection.prototype.toString = overload([], function () {
            return JSON.stringify(this);
        });

        return CurveKeyCollection.prototype.toString.apply(this, params);
    }

    toJSON() {
        return this.map(curveKey => curveKey.toJSON());
    }
}
