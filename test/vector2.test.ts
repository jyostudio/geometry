import Vector2 from '../src/vector2';
import Matrix from '../src/matrix';
import Quaternion from '../src/quaternion';

describe('Vector2', () => {
    describe('Static Properties', () => {
        it('zero should return (0, 0)', () => {
            const v = Vector2.zero;
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(0);
        });

        it('one should return (1, 1)', () => {
            const v = Vector2.one;
            expect(v.x).to.equal(1);
            expect(v.y).to.equal(1);
        });

        it('unitX should return (1, 0)', () => {
            const v = Vector2.unitX;
            expect(v.x).to.equal(1);
            expect(v.y).to.equal(0);
        });

        it('unitY should return (0, 1)', () => {
            const v = Vector2.unitY;
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(1);
        });
    });

    describe('Constructor', () => {
        it('should default to (0, 0)', () => {
            const v = new Vector2();
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(0);
        });

        it('should accept x and y', () => {
            const v = new Vector2(10, 20);
            expect(v.x).to.equal(10);
            expect(v.y).to.equal(20);
        });

        it('should accept a single value for both x and y', () => {
            const v = new Vector2(5);
            expect(v.x).to.equal(5);
            expect(v.y).to.equal(5);
        });
    });

    describe('Static Methods', () => {
        it('add', () => {
            const v1 = new Vector2(1, 2);
            const v2 = new Vector2(3, 4);
            const result = Vector2.add(v1, v2);
            expect(result.x).to.equal(4);
            expect(result.y).to.equal(6);
        });

        it('barycentric', () => {
            const v1 = new Vector2(1, 1);
            const v2 = new Vector2(2, 3);
            const v3 = new Vector2(3, 1);
            let result = Vector2.barycentric(v1, v2, v3, 0, 0);
            expect(result.x).to.equal(1);
            expect(result.y).to.equal(1);

            result = Vector2.barycentric(v1, v2, v3, 1, 0);
            expect(result.x).to.equal(2);
            expect(result.y).to.equal(3);
        });

        it('catmullRom', () => {
             const v1 = new Vector2(0, 0);
             const v2 = new Vector2(1, 1);
             const v3 = new Vector2(2, 2);
             const v4 = new Vector2(3, 3);
             const result = Vector2.catmullRom(v1, v2, v3, v4, 0.5);
             expect(result.x).to.equal(1.5);
             expect(result.y).to.equal(1.5);
        });

        it('clamp', () => {
            const v = new Vector2(10, 20);
            const min = new Vector2(0, 0);
            const max = new Vector2(5, 5);
            const result = Vector2.clamp(v, min, max);
            expect(result.x).to.equal(5);
            expect(result.y).to.equal(5);
        });

        it('distance', () => {
            const v1 = new Vector2(0, 0);
            const v2 = new Vector2(3, 4);
            expect(Vector2.distance(v1, v2)).to.equal(5);
        });

        it('distanceSquared', () => {
            const v1 = new Vector2(0, 0);
            const v2 = new Vector2(3, 4);
            expect(Vector2.distanceSquared(v1, v2)).to.equal(25);
        });

        it('divide', () => {
            const v1 = new Vector2(10, 20);
            const v2 = new Vector2(2, 4);
            const result = Vector2.divide(v1, v2);
            expect(result.x).to.equal(5);
            expect(result.y).to.equal(5);
        });

        it('divide by scalar', () => {
            const v1 = new Vector2(10, 20);
            const result = Vector2.divide(v1, 2);
            expect(result.x).to.equal(5);
            expect(result.y).to.equal(10);
        });

        it('dot', () => {
            const v1 = new Vector2(1, 2);
            const v2 = new Vector2(3, 4);
            // 1*3 + 2*4 = 3 + 8 = 11
            expect(Vector2.dot(v1, v2)).to.equal(11);
        });

        it('lerp', () => {
            const v1 = new Vector2(0, 0);
            const v2 = new Vector2(10, 10);
            const result = Vector2.lerp(v1, v2, 0.5);
            expect(result.x).to.equal(5);
            expect(result.y).to.equal(5);
        });

        it('max', () => {
            const v1 = new Vector2(1, 10);
            const v2 = new Vector2(5, 5);
            const result = Vector2.max(v1, v2);
            expect(result.x).to.equal(5);
            expect(result.y).to.equal(10);
        });

        it('min', () => {
            const v1 = new Vector2(1, 10);
            const v2 = new Vector2(5, 5);
            const result = Vector2.min(v1, v2);
            expect(result.x).to.equal(1);
            expect(result.y).to.equal(5);
        });

        it('multiply', () => {
            const v1 = new Vector2(2, 3);
            const v2 = new Vector2(4, 5);
            const result = Vector2.multiply(v1, v2);
            expect(result.x).to.equal(8);
            expect(result.y).to.equal(15);
        });

        it('multiply by scalar', () => {
            const v1 = new Vector2(2, 3);
            const result = Vector2.multiply(v1, 2);
            expect(result.x).to.equal(4);
            expect(result.y).to.equal(6);
        });

        it('negate', () => {
            const v = new Vector2(1, -2);
            const result = Vector2.negate(v);
            expect(result.x).to.equal(-1);
            expect(result.y).to.equal(2);
        });

        it('normalize', () => {
            const v = new Vector2(3, 4);
            const result = Vector2.normalize(v);
            expect(result.x).to.be.closeTo(0.6, 0.0001);
            expect(result.y).to.be.closeTo(0.8, 0.0001);
        });

        it('reflect', () => {
            const vector = new Vector2(1, 1);
            const normal = new Vector2(0, 1); // Wall is horizontal
            // Reflection of (1, 1) against (0, 1) should be (1, -1) ?
            // Formula: v - 2 * (v . n) * n
            // v . n = 1
            // v - 2 * 1 * n = (1, 1) - (0, 2) = (1, -1)
            const result = Vector2.reflect(vector, normal);
            expect(result.x).to.equal(1);
            expect(result.y).to.equal(-1);
        });

        it('smoothStep', () => {
            const v1 = new Vector2(0, 0);
            const v2 = new Vector2(1, 1);
            const result = Vector2.smoothStep(v1, v2, 0.5);
            expect(result.x).to.equal(0.5);
            expect(result.y).to.equal(0.5);
        });

        it('subtract', () => {
            const v1 = new Vector2(5, 6);
            const v2 = new Vector2(2, 3);
            const result = Vector2.subtract(v1, v2);
            expect(result.x).to.equal(3);
            expect(result.y).to.equal(3);
        });
    });

    describe('Instance Methods', () => {
        it('equals', () => {
            const v1 = new Vector2(1, 2);
            const v2 = new Vector2(1, 2);
            const v3 = new Vector2(3, 4);
            expect(v1.equals(v2)).to.be.true;
            expect(v1.equals(v3)).to.be.false;
        });

        it('length', () => {
            const v = new Vector2(3, 4);
            expect(v.length()).to.equal(5);
        });

        it('lengthSquared', () => {
            const v = new Vector2(3, 4);
            expect(v.lengthSquared()).to.equal(25);
        });

        it('normalize', () => {
            const v = new Vector2(3, 4);
            v.normalize();
            expect(v.x).to.be.closeTo(0.6, 0.0001);
            expect(v.y).to.be.closeTo(0.8, 0.0001);
        });
    });
});
