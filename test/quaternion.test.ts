import Quaternion from '../src/quaternion';
import Vector3 from '../src/vector3';
import Matrix from '../src/matrix';
import MathHelper from '../src/math-helper';

describe('Quaternion', () => {
    describe('Static Properties', () => {
        it('identity', () => {
            const q = Quaternion.identity;
            expect(q.x).to.equal(0);
            expect(q.y).to.equal(0);
            expect(q.z).to.equal(0);
            expect(q.w).to.equal(1);
        });
    });

    describe('Constructor', () => {
        it('should default to (0, 0, 0, 0)', () => {
            const q = new Quaternion();
            expect(q.x).to.equal(0);
            expect(q.y).to.equal(0);
            expect(q.z).to.equal(0);
            expect(q.w).to.equal(0);
        });

        it('should accept x, y, z, w', () => {
            const q = new Quaternion(1, 2, 3, 4);
            expect(q.x).to.equal(1);
            expect(q.y).to.equal(2);
            expect(q.z).to.equal(3);
            expect(q.w).to.equal(4);
        });

        it('should accept Vector3 and w', () => {
            const v = new Vector3(1, 2, 3);
            const q = new Quaternion(v, 4);
            expect(q.x).to.equal(1);
            expect(q.y).to.equal(2);
            expect(q.z).to.equal(3);
            expect(q.w).to.equal(4);
        });
    });

    describe('Static Methods', () => {
        it('add', () => {
            const q1 = new Quaternion(1, 2, 3, 4);
            const q2 = new Quaternion(5, 6, 7, 8);
            const result = Quaternion.add(q1, q2);
            expect(result.x).to.equal(6);
            expect(result.y).to.equal(8);
            expect(result.z).to.equal(10);
            expect(result.w).to.equal(12);
        });

        it('concatenate', () => {
            const q1 = Quaternion.createFromAxisAngle(Vector3.unitY, MathHelper.piOver2);
            const q2 = Quaternion.createFromAxisAngle(Vector3.unitY, MathHelper.piOver2);
            const result = Quaternion.concatenate(q1, q2);
            // 90 + 90 = 180 degrees rotation around Y
            // cos(180/2) = cos(90) = 0 -> w
            // sin(180/2) = sin(90) = 1 -> y
            expect(result.w).to.be.closeTo(0, 0.0001);
            expect(result.y).to.be.closeTo(1, 0.0001);
        });

        it('conjugate', () => {
            const q = new Quaternion(1, 2, 3, 4);
            const result = Quaternion.conjugate(q);
            expect(result.x).to.equal(-1);
            expect(result.y).to.equal(-2);
            expect(result.z).to.equal(-3);
            expect(result.w).to.equal(4);
        });

        it('createFromAxisAngle', () => {
            const axis = Vector3.unitX;
            const angle = MathHelper.piOver2;
            const q = Quaternion.createFromAxisAngle(axis, angle);
            // cos(45) = 0.7071, sin(45) = 0.7071
            expect(q.x).to.be.closeTo(0.7071, 0.0001);
            expect(q.y).to.equal(0);
            expect(q.z).to.equal(0);
            expect(q.w).to.be.closeTo(0.7071, 0.0001);
        });

        it('createFromRotationMatrix', () => {
            const m = Matrix.createRotationZ(MathHelper.piOver2);
            const q = Quaternion.createFromRotationMatrix(m);
            // 90 deg around Z
            expect(q.x).to.equal(0);
            expect(q.y).to.equal(0);
            expect(q.z).to.be.closeTo(0.7071, 0.0001);
            expect(q.w).to.be.closeTo(0.7071, 0.0001);
        });

        it('createFromYawPitchRoll', () => {
            const yaw = MathHelper.piOver2; // Y
            const pitch = 0; // X
            const roll = 0; // Z
            const q = Quaternion.createFromYawPitchRoll(yaw, pitch, roll);
            expect(q.x).to.equal(0);
            expect(q.y).to.be.closeTo(0.7071, 0.0001);
            expect(q.z).to.equal(0);
            expect(q.w).to.be.closeTo(0.7071, 0.0001);
        });

        it('dot', () => {
            const q1 = new Quaternion(1, 2, 3, 4);
            const q2 = new Quaternion(1, 1, 1, 1);
            expect(Quaternion.dot(q1, q2)).to.equal(10);
        });

        it('inverse', () => {
            const q = Quaternion.createFromAxisAngle(Vector3.unitX, MathHelper.piOver2);
            const inv = Quaternion.inverse(q);
            // Inverse of rotation is negative rotation
            // sin(-45) = -0.7071
            expect(inv.x).to.be.closeTo(-0.7071, 0.0001);
            expect(inv.w).to.be.closeTo(0.7071, 0.0001);
        });

        it('lerp', () => {
            const q1 = new Quaternion(0, 0, 0, 1);
            const q2 = new Quaternion(1, 0, 0, 0); // Not normalized, but lerp works on components
            const result = Quaternion.lerp(q1, q2, 0.5);
            expect(result.x).to.be.closeTo(0.7071, 0.0001);
            expect(result.w).to.be.closeTo(0.7071, 0.0001);
        });

        it('slerp', () => {
            const q1 = Quaternion.createFromAxisAngle(Vector3.unitZ, 0);
            const q2 = Quaternion.createFromAxisAngle(Vector3.unitZ, MathHelper.piOver2);
            const result = Quaternion.slerp(q1, q2, 0.5);
            // Should be 45 degrees
            expect(result.z).to.be.closeTo(0.3826, 0.0001); // sin(22.5)
            expect(result.w).to.be.closeTo(0.9238, 0.0001); // cos(22.5)
        });

        it('multiply', () => {
            const q1 = new Quaternion(1, 0, 0, 1); // Not unit
            const q2 = new Quaternion(0, 1, 0, 1);
            const result = Quaternion.multiply(q1, q2);
            // (1, 0, 0, 1) * (0, 1, 0, 1)
            // x = w1x2 + x1w2 + y1z2 - z1y2 = 1*0 + 1*1 + 0*0 - 0*1 = 1
            // y = w1y2 - x1z2 + y1w2 + z1x2 = 1*1 - 1*0 + 0*1 + 0*0 = 1
            // z = w1z2 + x1y2 - y1x2 + z1w2 = 1*0 + 1*1 - 0*0 + 0*1 = 1
            // w = w1w2 - x1x2 - y1y2 - z1z2 = 1*1 - 1*0 - 0*1 - 0*0 = 1
            expect(result.x).to.equal(1);
            expect(result.y).to.equal(1);
            expect(result.z).to.equal(1);
            expect(result.w).to.equal(1);
        });
    });

    describe('Instance Methods', () => {
        it('length', () => {
            const q = new Quaternion(1, 1, 1, 1);
            expect(q.length()).to.equal(2);
        });

        it('lengthSquared', () => {
            const q = new Quaternion(1, 1, 1, 1);
            expect(q.lengthSquared()).to.equal(4);
        });

        it('normalize', () => {
            const q = new Quaternion(1, 1, 1, 1);
            q.normalize();
            expect(q.x).to.equal(0.5);
            expect(q.y).to.equal(0.5);
            expect(q.z).to.equal(0.5);
            expect(q.w).to.equal(0.5);
        });
    });
});
