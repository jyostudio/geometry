import CurveKeyCollection from '../src/curve-key-collection';
import CurveKey from '../src/curve-key';

describe('CurveKeyCollection', () => {
    it('constructor', () => {
        const collection = new CurveKeyCollection();
        expect(collection.length).to.equal(0);
    });

    it('add', () => {
        const collection = new CurveKeyCollection();
        const key = new CurveKey(0, 0);
        collection.add(key);
        expect(collection.length).to.equal(1);
        expect(collection[0]).to.equal(key);
    });

    it('clear', () => {
        const collection = new CurveKeyCollection();
        collection.add(new CurveKey(0, 0));
        collection.clear();
        expect(collection.length).to.equal(0);
    });

    it('contains', () => {
        const collection = new CurveKeyCollection();
        const key = new CurveKey(0, 0);
        collection.add(key);
        expect(collection.contains(key)).to.be.true;
        expect(collection.contains(new CurveKey(1, 1))).to.be.false;
    });

    it('indexOf', () => {
        const collection = new CurveKeyCollection();
        const key1 = new CurveKey(0, 0);
        const key2 = new CurveKey(1, 1);
        collection.add(key1);
        collection.add(key2);
        expect(collection.indexOf(key1)).to.equal(0);
        expect(collection.indexOf(key2)).to.equal(1);
    });

    it('remove', () => {
        const collection = new CurveKeyCollection();
        const key = new CurveKey(0, 0);
        collection.add(key);
        collection.remove(key);
        expect(collection.length).to.equal(0);
    });

    it('removeAt', () => {
        const collection = new CurveKeyCollection();
        const key = new CurveKey(0, 0);
        collection.add(key);
        collection.removeAt(0);
        expect(collection.length).to.equal(0);
    });

    it('clone', () => {
        const collection = new CurveKeyCollection();
        const key = new CurveKey(0, 0);
        collection.add(key);
        const clone = collection.clone();
        expect(clone.length).to.equal(1);
        expect(clone[0]).to.equal(key);
        expect(clone).to.not.equal(collection);
    });
});
