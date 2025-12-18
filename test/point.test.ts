import Point from '../src/point';

describe('Point', () => {
    describe('Static Properties', () => {
        it('zero should return (0, 0)', () => {
            const p = Point.zero;
            expect(p.x).to.equal(0);
            expect(p.y).to.equal(0);
        });
    });

    describe('Constructor', () => {
        it('should default to (0, 0)', () => {
            const p = new Point();
            expect(p.x).to.equal(0);
            expect(p.y).to.equal(0);
        });

        it('should accept x, y', () => {
            const p = new Point(10, 20);
            expect(p.x).to.equal(10);
            expect(p.y).to.equal(20);
        });

        it('should truncate floating point values', () => {
            const p = new Point(10.5, 20.9);
            expect(p.x).to.equal(10);
            expect(p.y).to.equal(20);
        });
    });

    describe('Static Methods', () => {
        it('negate (static ["-"])', () => {
            const p = new Point(10, 20);
            const result = Point["-"](p);
            expect(result.x).to.equal(-10);
            expect(result.y).to.equal(-20);
        });
    });

    describe('Instance Methods', () => {
        it('add (["+"])', () => {
            const p1 = new Point(10, 20);
            const p2 = new Point(5, 5);
            const result = p1["+"](p2);
            expect(result.x).to.equal(15);
            expect(result.y).to.equal(25);
        });

        it('subtract (["-"])', () => {
            const p1 = new Point(10, 20);
            const p2 = new Point(5, 5);
            const result = p1["-"](p2);
            expect(result.x).to.equal(5);
            expect(result.y).to.equal(15);
        });

        it('multiply (["*"])', () => {
            const p1 = new Point(10, 20);
            const p2 = new Point(2, 3);
            const result = p1["*"](p2);
            expect(result.x).to.equal(20);
            expect(result.y).to.equal(60);

            const resultScalar = p1["*"](2);
            expect(resultScalar.x).to.equal(20);
            expect(resultScalar.y).to.equal(40);
        });

        it('divide (["/"])', () => {
            const p1 = new Point(10, 20);
            const p2 = new Point(2, 5);
            const result = p1["/"](p2);
            expect(result.x).to.equal(5);
            expect(result.y).to.equal(4);

            const resultScalar = p1["/"](2);
            expect(resultScalar.x).to.equal(5);
            expect(resultScalar.y).to.equal(10);
        });

        it('equals', () => {
            const p1 = new Point(10, 20);
            const p2 = new Point(10, 20);
            const p3 = new Point(5, 5);
            expect(p1.equals(p2)).to.be.true;
            expect(p1.equals(p3)).to.be.false;
        });
    });
});
