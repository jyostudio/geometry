import Vector3 from '../src/vector3';
import Vector2 from '../src/vector2';
import Matrix from '../src/matrix';
import Quaternion from '../src/quaternion';

describe('Vector3', () => {
    describe('Static Properties', () => {
        it('zero should return (0, 0, 0)', () => {
            const v = Vector3.zero;
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(0);
            expect(v.z).to.equal(0);
        });

        it('one should return (1, 1, 1)', () => {
            const v = Vector3.one;
            expect(v.x).to.equal(1);
            expect(v.y).to.equal(1);
            expect(v.z).to.equal(1);
        });

        it('unitX should return (1, 0, 0)', () => {
            const v = Vector3.unitX;
            expect(v.x).to.equal(1);
            expect(v.y).to.equal(0);
            expect(v.z).to.equal(0);
        });

        it('unitY should return (0, 1, 0)', () => {
            const v = Vector3.unitY;
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(1);
            expect(v.z).to.equal(0);
        });

        it('unitZ should return (0, 0, 1)', () => {
            const v = Vector3.unitZ;
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(0);
            expect(v.z).to.equal(1);
        });

        it('up should return (0, 1, 0)', () => {
            const v = Vector3.up;
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(1);
            expect(v.z).to.equal(0);
        });

        it('down should return (0, -1, 0)', () => {
            const v = Vector3.down;
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(-1);
            expect(v.z).to.equal(0);
        });

        it('right should return (1, 0, 0)', () => {
            const v = Vector3.right;
            expect(v.x).to.equal(1);
            expect(v.y).to.equal(0);
            expect(v.z).to.equal(0);
        });

        it('left should return (-1, 0, 0)', () => {
            const v = Vector3.left;
            expect(v.x).to.equal(-1);
            expect(v.y).to.equal(0);
            expect(v.z).to.equal(0);
        });

        it('forward should return (0, 0, -1)', () => {
            const v = Vector3.forward;
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(0);
            expect(v.z).to.equal(-1);
        });

        it('backward should return (0, 0, 1)', () => {
            const v = Vector3.backward;
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(0);
            expect(v.z).to.equal(1);
        });
    });

    describe('Constructor', () => {
        it('should default to (0, 0, 0)', () => {
            const v = new Vector3();
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(0);
            expect(v.z).to.equal(0);
        });

        it('should accept single value', () => {
            const v = new Vector3(5);
            expect(v.x).to.equal(5);
            expect(v.y).to.equal(5);
            expect(v.z).to.equal(5);
        });

        it('should accept x, y, z', () => {
            const v = new Vector3(1, 2, 3);
            expect(v.x).to.equal(1);
            expect(v.y).to.equal(2);
            expect(v.z).to.equal(3);
        });

        it('should accept Vector2 and z', () => {
            const v2 = new Vector2(1, 2);
            const v = new Vector3(v2, 3);
            expect(v.x).to.equal(1);
            expect(v.y).to.equal(2);
            expect(v.z).to.equal(3);
        });
    });

    describe('Static Methods', () => {
        it('add', () => {
            const v1 = new Vector3(1, 2, 3);
            const v2 = new Vector3(4, 5, 6);
            const result = Vector3.add(v1, v2);
            expect(result.x).to.equal(5);
            expect(result.y).to.equal(7);
            expect(result.z).to.equal(9);
        });

        it('cross', () => {
            const v1 = new Vector3(1, 0, 0);
            const v2 = new Vector3(0, 1, 0);
            const result = Vector3.cross(v1, v2);
            expect(result.x).to.equal(0);
            expect(result.y).to.equal(0);
            expect(result.z).to.equal(1);
        });

        it('distance', () => {
            const v1 = new Vector3(0, 0, 0);
            const v2 = new Vector3(0, 3, 4);
            expect(Vector3.distance(v1, v2)).to.equal(5);
        });

        it('distanceSquared', () => {
            const v1 = new Vector3(0, 0, 0);
            const v2 = new Vector3(0, 3, 4);
            expect(Vector3.distanceSquared(v1, v2)).to.equal(25);
        });

        it('dot', () => {
            const v1 = new Vector3(1, 2, 3);
            const v2 = new Vector3(4, 5, 6);
            // 1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32
            expect(Vector3.dot(v1, v2)).to.equal(32);
        });

        it('lerp', () => {
            const v1 = new Vector3(0, 0, 0);
            const v2 = new Vector3(10, 10, 10);
            const result = Vector3.lerp(v1, v2, 0.5);
            expect(result.x).to.equal(5);
            expect(result.y).to.equal(5);
            expect(result.z).to.equal(5);
        });

        it('max', () => {
            const v1 = new Vector3(1, 10, 2);
            const v2 = new Vector3(5, 5, 5);
            const result = Vector3.max(v1, v2);
            expect(result.x).to.equal(5);
            expect(result.y).to.equal(10);
            expect(result.z).to.equal(5);
        });

        it('min', () => {
            const v1 = new Vector3(1, 10, 2);
            const v2 = new Vector3(5, 5, 5);
            const result = Vector3.min(v1, v2);
            expect(result.x).to.equal(1);
            expect(result.y).to.equal(5);
            expect(result.z).to.equal(2);
        });

        it('multiply', () => {
            const v1 = new Vector3(2, 3, 4);
            const v2 = new Vector3(5, 6, 7);
            const result = Vector3.multiply(v1, v2);
            expect(result.x).to.equal(10);
            expect(result.y).to.equal(18);
            expect(result.z).to.equal(28);
        });

        it('multiply scalar', () => {
            const v1 = new Vector3(2, 3, 4);
            const result = Vector3.multiply(v1, 2);
            expect(result.x).to.equal(4);
            expect(result.y).to.equal(6);
            expect(result.z).to.equal(8);
        });

        it('negate', () => {
            const v = new Vector3(1, -2, 3);
            const result = Vector3.negate(v);
            expect(result.x).to.equal(-1);
            expect(result.y).to.equal(2);
            expect(result.z).to.equal(-3);
        });

        it('normalize', () => {
            const v = new Vector3(0, 3, 4);
            const result = Vector3.normalize(v);
            expect(result.x).to.equal(0);
            expect(result.y).to.be.closeTo(0.6, 0.0001);
            expect(result.z).to.be.closeTo(0.8, 0.0001);
        });

        it('reflect', () => {
            const vector = new Vector3(1, 1, 0);
            const normal = new Vector3(0, 1, 0);
            const result = Vector3.reflect(vector, normal);
            expect(result.x).to.equal(1);
            expect(result.y).to.equal(-1);
            expect(result.z).to.equal(0);
        });

        it('subtract', () => {
            const v1 = new Vector3(5, 6, 7);
            const v2 = new Vector3(2, 3, 4);
            const result = Vector3.subtract(v1, v2);
            expect(result.x).to.equal(3);
            expect(result.y).to.equal(3);
            expect(result.z).to.equal(3);
        });
    });

    describe('Instance Methods', () => {
        it('equals', () => {
            const v1 = new Vector3(1, 2, 3);
            const v2 = new Vector3(1, 2, 3);
            const v3 = new Vector3(4, 5, 6);
            expect(v1.equals(v2)).to.be.true;
            expect(v1.equals(v3)).to.be.false;
        });

        it('length', () => {
            const v = new Vector3(0, 3, 4);
            expect(v.length()).to.equal(5);
        });

        it('lengthSquared', () => {
            const v = new Vector3(0, 3, 4);
            expect(v.lengthSquared()).to.equal(25);
        });

        it('normalize', () => {
            const v = new Vector3(0, 3, 4);
            v.normalize();
            expect(v.x).to.equal(0);
            expect(v.y).to.be.closeTo(0.6, 0.0001);
            expect(v.z).to.be.closeTo(0.8, 0.0001);
        });
    });
});
