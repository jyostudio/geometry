import Vector4 from '../src/vector4';
import Vector2 from '../src/vector2';
import Vector3 from '../src/vector3';
import Matrix from '../src/matrix';
import Quaternion from '../src/quaternion';

describe('Vector4', () => {
    describe('Static Properties', () => {
        it('zero should return (0, 0, 0, 0)', () => {
            const v = Vector4.zero;
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(0);
            expect(v.z).to.equal(0);
            expect(v.w).to.equal(0);
        });

        it('one should return (1, 1, 1, 1)', () => {
            const v = Vector4.one;
            expect(v.x).to.equal(1);
            expect(v.y).to.equal(1);
            expect(v.z).to.equal(1);
            expect(v.w).to.equal(1);
        });

        it('unitX should return (1, 0, 0, 0)', () => {
            const v = Vector4.unitX;
            expect(v.x).to.equal(1);
            expect(v.y).to.equal(0);
            expect(v.z).to.equal(0);
            expect(v.w).to.equal(0);
        });

        it('unitY should return (0, 1, 0, 0)', () => {
            const v = Vector4.unitY;
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(1);
            expect(v.z).to.equal(0);
            expect(v.w).to.equal(0);
        });

        it('unitZ should return (0, 0, 1, 0)', () => {
            const v = Vector4.unitZ;
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(0);
            expect(v.z).to.equal(1);
            expect(v.w).to.equal(0);
        });

        it('unitW should return (0, 0, 0, 1)', () => {
            const v = Vector4.unitW;
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(0);
            expect(v.z).to.equal(0);
            expect(v.w).to.equal(1);
        });
    });

    describe('Constructor', () => {
        it('should default to (0, 0, 0, 0)', () => {
            const v = new Vector4();
            expect(v.x).to.equal(0);
            expect(v.y).to.equal(0);
            expect(v.z).to.equal(0);
            expect(v.w).to.equal(0);
        });

        it('should accept single value', () => {
            const v = new Vector4(5);
            expect(v.x).to.equal(5);
            expect(v.y).to.equal(5);
            expect(v.z).to.equal(5);
            expect(v.w).to.equal(5);
        });

        it('should accept x, y, z, w', () => {
            const v = new Vector4(1, 2, 3, 4);
            expect(v.x).to.equal(1);
            expect(v.y).to.equal(2);
            expect(v.z).to.equal(3);
            expect(v.w).to.equal(4);
        });

        it('should accept Vector2, z, w', () => {
            const v2 = new Vector2(1, 2);
            const v = new Vector4(v2, 3, 4);
            expect(v.x).to.equal(1);
            expect(v.y).to.equal(2);
            expect(v.z).to.equal(3);
            expect(v.w).to.equal(4);
        });

        it('should accept Vector3, w', () => {
            const v3 = new Vector3(1, 2, 3);
            const v = new Vector4(v3, 4);
            expect(v.x).to.equal(1);
            expect(v.y).to.equal(2);
            expect(v.z).to.equal(3);
            expect(v.w).to.equal(4);
        });
    });

    describe('Static Methods', () => {
        it('add', () => {
            const v1 = new Vector4(1, 2, 3, 4);
            const v2 = new Vector4(5, 6, 7, 8);
            const result = Vector4.add(v1, v2);
            expect(result.x).to.equal(6);
            expect(result.y).to.equal(8);
            expect(result.z).to.equal(10);
            expect(result.w).to.equal(12);
        });

        it('distance', () => {
            const v1 = new Vector4(0, 0, 0, 0);
            const v2 = new Vector4(1, 1, 1, 1);
            // sqrt(1+1+1+1) = 2
            expect(Vector4.distance(v1, v2)).to.equal(2);
        });

        it('distanceSquared', () => {
            const v1 = new Vector4(0, 0, 0, 0);
            const v2 = new Vector4(1, 1, 1, 1);
            expect(Vector4.distanceSquared(v1, v2)).to.equal(4);
        });

        it('dot', () => {
            const v1 = new Vector4(1, 2, 3, 4);
            const v2 = new Vector4(1, 1, 1, 1);
            expect(Vector4.dot(v1, v2)).to.equal(10);
        });

        it('lerp', () => {
            const v1 = new Vector4(0, 0, 0, 0);
            const v2 = new Vector4(10, 10, 10, 10);
            const result = Vector4.lerp(v1, v2, 0.5);
            expect(result.x).to.equal(5);
            expect(result.y).to.equal(5);
            expect(result.z).to.equal(5);
            expect(result.w).to.equal(5);
        });

        it('max', () => {
            const v1 = new Vector4(1, 10, 2, 20);
            const v2 = new Vector4(5, 5, 5, 5);
            const result = Vector4.max(v1, v2);
            expect(result.x).to.equal(5);
            expect(result.y).to.equal(10);
            expect(result.z).to.equal(5);
            expect(result.w).to.equal(20);
        });

        it('min', () => {
            const v1 = new Vector4(1, 10, 2, 20);
            const v2 = new Vector4(5, 5, 5, 5);
            const result = Vector4.min(v1, v2);
            expect(result.x).to.equal(1);
            expect(result.y).to.equal(5);
            expect(result.z).to.equal(2);
            expect(result.w).to.equal(5);
        });

        it('multiply', () => {
            const v1 = new Vector4(1, 2, 3, 4);
            const v2 = new Vector4(2, 2, 2, 2);
            const result = Vector4.multiply(v1, v2);
            expect(result.x).to.equal(2);
            expect(result.y).to.equal(4);
            expect(result.z).to.equal(6);
            expect(result.w).to.equal(8);
        });

        it('multiply scalar', () => {
            const v1 = new Vector4(1, 2, 3, 4);
            const result = Vector4.multiply(v1, 2);
            expect(result.x).to.equal(2);
            expect(result.y).to.equal(4);
            expect(result.z).to.equal(6);
            expect(result.w).to.equal(8);
        });

        it('negate', () => {
            const v = new Vector4(1, -2, 3, -4);
            const result = Vector4.negate(v);
            expect(result.x).to.equal(-1);
            expect(result.y).to.equal(2);
            expect(result.z).to.equal(-3);
            expect(result.w).to.equal(4);
        });

        it('normalize', () => {
            const v = new Vector4(2, 2, 2, 2);
            const result = Vector4.normalize(v);
            // length = sqrt(4+4+4+4) = 4
            expect(result.x).to.equal(0.5);
            expect(result.y).to.equal(0.5);
            expect(result.z).to.equal(0.5);
            expect(result.w).to.equal(0.5);
        });

        it('subtract', () => {
            const v1 = new Vector4(5, 6, 7, 8);
            const v2 = new Vector4(1, 2, 3, 4);
            const result = Vector4.subtract(v1, v2);
            expect(result.x).to.equal(4);
            expect(result.y).to.equal(4);
            expect(result.z).to.equal(4);
            expect(result.w).to.equal(4);
        });
    });

    describe('Instance Methods', () => {
        it('equals', () => {
            const v1 = new Vector4(1, 2, 3, 4);
            const v2 = new Vector4(1, 2, 3, 4);
            const v3 = new Vector4(5, 6, 7, 8);
            expect(v1.equals(v2)).to.be.true;
            expect(v1.equals(v3)).to.be.false;
        });

        it('length', () => {
            const v = new Vector4(1, 1, 1, 1);
            expect(v.length()).to.equal(2);
        });

        it('lengthSquared', () => {
            const v = new Vector4(1, 1, 1, 1);
            expect(v.lengthSquared()).to.equal(4);
        });
    });
});
