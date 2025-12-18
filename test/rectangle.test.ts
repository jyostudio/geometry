import Rectangle from '../src/rectangle';
import Point from '../src/point';

describe('Rectangle', () => {
    describe('Static Properties', () => {
        it('empty should return a zero rectangle', () => {
            const r = Rectangle.empty;
            expect(r.x).to.equal(0);
            expect(r.y).to.equal(0);
            expect(r.width).to.equal(0);
            expect(r.height).to.equal(0);
            expect(r.isEmpty).to.be.true;
        });
    });

    describe('Constructor', () => {
        it('should default to zero', () => {
            const r = new Rectangle();
            expect(r.x).to.equal(0);
            expect(r.y).to.equal(0);
            expect(r.width).to.equal(0);
            expect(r.height).to.equal(0);
        });

        it('should accept x, y, width, height', () => {
            const r = new Rectangle(10, 20, 100, 200);
            expect(r.x).to.equal(10);
            expect(r.y).to.equal(20);
            expect(r.width).to.equal(100);
            expect(r.height).to.equal(200);
        });
    });

    describe('Properties', () => {
        it('location', () => {
            const r = new Rectangle(10, 20, 100, 200);
            expect(r.location.x).to.equal(10);
            expect(r.location.y).to.equal(20);
            
            r.location = new Point(30, 40);
            expect(r.x).to.equal(30);
            expect(r.y).to.equal(40);
        });

        it('size', () => {
            const r = new Rectangle(10, 20, 100, 200);
            expect(r.size.x).to.equal(100);
            expect(r.size.y).to.equal(200);

            r.size = new Point(300, 400);
            expect(r.width).to.equal(300);
            expect(r.height).to.equal(400);
        });

        it('left/right/top/bottom', () => {
            const r = new Rectangle(10, 20, 100, 200);
            expect(r.left).to.equal(10);
            expect(r.top).to.equal(20);
            expect(r.right).to.equal(110);
            expect(r.bottom).to.equal(220);
        });

        it('center', () => {
            const r = new Rectangle(0, 0, 100, 100);
            expect(r.center.x).to.equal(50);
            expect(r.center.y).to.equal(50);
        });
    });

    describe('Static Methods', () => {
        it('intersect', () => {
            const r1 = new Rectangle(0, 0, 100, 100);
            const r2 = new Rectangle(50, 50, 100, 100);
            const result = Rectangle.intersect(r1, r2);
            expect(result.x).to.equal(50);
            expect(result.y).to.equal(50);
            expect(result.width).to.equal(50);
            expect(result.height).to.equal(50);

            const r3 = new Rectangle(200, 200, 100, 100);
            const empty = Rectangle.intersect(r1, r3);
            expect(empty.isEmpty).to.be.true;
        });

        it('union', () => {
            const r1 = new Rectangle(0, 0, 100, 100);
            const r2 = new Rectangle(50, 50, 100, 100);
            const result = Rectangle.union(r1, r2);
            expect(result.x).to.equal(0);
            expect(result.y).to.equal(0);
            expect(result.width).to.equal(150);
            expect(result.height).to.equal(150);
        });
    });

    describe('Instance Methods', () => {
        it('contains (x, y)', () => {
            const r = new Rectangle(0, 0, 100, 100);
            expect(r.contains(50, 50)).to.be.true;
            expect(r.contains(100, 100)).to.be.false; // Exclusive max
            expect(r.contains(-1, -1)).to.be.false;
        });

        it('contains (Point)', () => {
            const r = new Rectangle(0, 0, 100, 100);
            expect(r.contains(new Point(50, 50))).to.be.true;
            expect(r.contains(new Point(100, 100))).to.be.false;
        });

        it('contains (Rectangle)', () => {
            const r = new Rectangle(0, 0, 100, 100);
            const inside = new Rectangle(10, 10, 80, 80);
            const intersecting = new Rectangle(50, 50, 100, 100);
            const outside = new Rectangle(200, 200, 100, 100);

            expect(r.contains(inside)).to.be.true;
            expect(r.contains(intersecting)).to.be.false;
            expect(r.contains(outside)).to.be.false;
        });

        it('equals', () => {
            const r1 = new Rectangle(10, 20, 30, 40);
            const r2 = new Rectangle(10, 20, 30, 40);
            const r3 = new Rectangle(0, 0, 0, 0);
            expect(r1.equals(r2)).to.be.true;
            expect(r1.equals(r3)).to.be.false;
        });

        it('inflate', () => {
            const r = new Rectangle(10, 10, 100, 100);
            r.inflate(10, 10);
            expect(r.x).to.equal(0);
            expect(r.y).to.equal(0);
            expect(r.width).to.equal(120);
            expect(r.height).to.equal(120);
        });

        it('intersects', () => {
            const r1 = new Rectangle(0, 0, 100, 100);
            const r2 = new Rectangle(50, 50, 100, 100);
            const r3 = new Rectangle(200, 200, 100, 100);
            expect(r1.intersects(r2)).to.be.true;
            expect(r1.intersects(r3)).to.be.false;
        });

        it('offset', () => {
            const r = new Rectangle(10, 10, 100, 100);
            r.offset(10, 10);
            expect(r.x).to.equal(20);
            expect(r.y).to.equal(20);
            
            r.offset(new Point(-10, -10));
            expect(r.x).to.equal(10);
            expect(r.y).to.equal(10);
        });
    });
});
