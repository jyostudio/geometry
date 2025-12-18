import ContainmentType from '../src/containment-type';
import PlaneIntersectionType from '../src/plane-intersection-type';
import CurveLoopType from '../src/curve-loop-type';
import CurveContinuity from '../src/curve-continuity';
import CurveTangent from '../src/curve-tangent';

describe('Enums', () => {
    describe('ContainmentType', () => {
        it('should have correct values', () => {
            expect(ContainmentType.disjoint).to.equal(0);
            expect(ContainmentType.contains).to.equal(1);
            expect(ContainmentType.intersects).to.equal(2);
        });
    });

    describe('PlaneIntersectionType', () => {
        it('should have correct values', () => {
            expect(PlaneIntersectionType.front).to.equal(0);
            expect(PlaneIntersectionType.back).to.equal(1);
            expect(PlaneIntersectionType.intersecting).to.equal(2);
        });
    });

    describe('CurveLoopType', () => {
        it('should have correct values', () => {
            expect(CurveLoopType.constant).to.equal(0);
            expect(CurveLoopType.cycle).to.equal(1);
            expect(CurveLoopType.cycleOffset).to.equal(2);
            expect(CurveLoopType.oscillate).to.equal(3);
            expect(CurveLoopType.linear).to.equal(4);
        });
    });

    describe('CurveContinuity', () => {
        it('should have correct values', () => {
            expect(CurveContinuity.smooth).to.equal(0);
            expect(CurveContinuity.step).to.equal(1);
        });
    });

    describe('CurveTangent', () => {
        it('should have correct values', () => {
            expect(CurveTangent.flat).to.equal(0);
            expect(CurveTangent.linear).to.equal(1);
            expect(CurveTangent.smooth).to.equal(2);
        });
    });
});