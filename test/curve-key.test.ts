import CurveKey from '../src/curve-key';
import CurveContinuity from '../src/curve-continuity';

describe('CurveKey', () => {
    it('constructor', () => {
        const key = new CurveKey(0, 10);
        expect(key.position).to.equal(0);
        expect(key.value).to.equal(10);
        expect(key.tangentIn).to.equal(0);
        expect(key.tangentOut).to.equal(0);
        expect(key.continuity).to.equal(CurveContinuity.smooth);
    });

    it('constructor full', () => {
        const key = new CurveKey(1, 2, 3, 4, CurveContinuity.step);
        expect(key.position).to.equal(1);
        expect(key.value).to.equal(2);
        expect(key.tangentIn).to.equal(3);
        expect(key.tangentOut).to.equal(4);
        expect(key.continuity).to.equal(CurveContinuity.step);
    });

    it('clone', () => {
        const key = new CurveKey(1, 2, 3, 4, CurveContinuity.step);
        const clone = key.clone();
        expect(clone.position).to.equal(key.position);
        expect(clone.value).to.equal(key.value);
        expect(clone.tangentIn).to.equal(key.tangentIn);
        expect(clone.tangentOut).to.equal(key.tangentOut);
        expect(clone.continuity).to.equal(key.continuity);
        expect(clone).to.not.equal(key);
    });
});
