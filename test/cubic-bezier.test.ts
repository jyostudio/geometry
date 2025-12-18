import CubicBezier from '../src/cubic-bezier';
import Vector2 from '../src/vector2';

describe('CubicBezier', () => {
    describe('Static Properties', () => {
        it('linear', () => {
            const cb = CubicBezier.linear;
            expect(cb.x1).to.equal(0);
            expect(cb.y1).to.equal(0);
            expect(cb.x2).to.equal(1);
            expect(cb.y2).to.equal(1);
        });

        it('ease', () => {
            const cb = CubicBezier.ease;
            expect(cb.x1).to.equal(0.25);
            expect(cb.y1).to.equal(0.1);
            expect(cb.x2).to.equal(0.25);
            expect(cb.y2).to.equal(1);
        });
    });

    describe('Constructor', () => {
        it('should default to linear (0,0,1,1)', () => {
            const cb = new CubicBezier();
            expect(cb.x1).to.equal(0);
            expect(cb.y1).to.equal(0);
            expect(cb.x2).to.equal(1);
            expect(cb.y2).to.equal(1);
        });

        it('should accept x1, y1, x2, y2', () => {
            const cb = new CubicBezier(0.1, 0.2, 0.8, 0.9);
            expect(cb.x1).to.equal(0.1);
            expect(cb.y1).to.equal(0.2);
            expect(cb.x2).to.equal(0.8);
            expect(cb.y2).to.equal(0.9);
        });

        it('should accept Vector2, Vector2', () => {
            const p1 = new Vector2(0.1, 0.2);
            const p2 = new Vector2(0.8, 0.9);
            const cb = new CubicBezier(p1, p2);
            expect(cb.x1).to.equal(0.1);
            expect(cb.y1).to.equal(0.2);
            expect(cb.x2).to.equal(0.8);
            expect(cb.y2).to.equal(0.9);
        });
    });

    describe('Instance Methods', () => {
        it('solve (linear)', () => {
            const cb = CubicBezier.linear;
            expect(cb.solve(0)).to.equal(0);
            expect(cb.solve(0.5)).to.equal(0.5);
            expect(cb.solve(1)).to.equal(1);
        });

        it('solve (easeIn)', () => {
            const cb = CubicBezier.easeIn;
            // easeIn starts slow, so at x=0.5, y should be < 0.5
            expect(cb.solve(0.5)).to.be.lessThan(0.5);
        });

        it('solve (easeOut)', () => {
            const cb = CubicBezier.easeOut;
            // easeOut starts fast, so at x=0.5, y should be > 0.5
            expect(cb.solve(0.5)).to.be.greaterThan(0.5);
        });

        it('equals', () => {
            const cb1 = new CubicBezier(0.1, 0.2, 0.3, 0.4);
            const cb2 = new CubicBezier(0.1, 0.2, 0.3, 0.4);
            const cb3 = new CubicBezier(0.5, 0.6, 0.7, 0.8);
            expect(cb1.equals(cb2)).to.be.true;
            expect(cb1.equals(cb3)).to.be.false;
        });
    });
});
