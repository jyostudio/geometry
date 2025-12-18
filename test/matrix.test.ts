import Matrix from '../src/matrix';
import Vector3 from '../src/vector3';
import Quaternion from '../src/quaternion';
import Plane from '../src/plane';
import MathHelper from '../src/math-helper';

describe('Matrix', () => {
    describe('Static Properties', () => {
        it('identity', () => {
            const m = Matrix.identity;
            expect(m.m11).to.equal(1);
            expect(m.m22).to.equal(1);
            expect(m.m33).to.equal(1);
            expect(m.m44).to.equal(1);
            expect(m.m12).to.equal(0);
        });
    });

    describe('Constructor', () => {
        it('should default to zero', () => {
            const m = new Matrix();
            expect(m.m11).to.equal(0);
        });

        it('should accept 16 values', () => {
            const m = new Matrix(
                1, 2, 3, 4,
                5, 6, 7, 8,
                9, 10, 11, 12,
                13, 14, 15, 16
            );
            expect(m.m11).to.equal(1);
            expect(m.m12).to.equal(2);
            expect(m.m44).to.equal(16);
        });
    });

    describe('Static Methods', () => {
        it('add', () => {
            const m1 = Matrix.identity;
            const m2 = Matrix.identity;
            const result = Matrix.add(m1, m2);
            expect(result.m11).to.equal(2);
            expect(result.m22).to.equal(2);
        });

        it('createLookAt', () => {
            const cameraPosition = new Vector3(0, 0, 10);
            const cameraTarget = new Vector3(0, 0, 0);
            const cameraUpVector = Vector3.up;
            const view = Matrix.createLookAt(cameraPosition, cameraTarget, cameraUpVector);
            
            expect(view.m11).to.be.closeTo(1, 0.0001);
            expect(view.m22).to.be.closeTo(1, 0.0001);
            expect(view.m33).to.be.closeTo(1, 0.0001);
            expect(view.m43).to.be.closeTo(-10, 0.0001); // Translation Z
        });

        it('createPerspectiveFieldOfView', () => {
            const fov = MathHelper.piOver4;
            const aspectRatio = 1.333;
            const nearPlaneDistance = 1;
            const farPlaneDistance = 1000;
            const projection = Matrix.createPerspectiveFieldOfView(fov, aspectRatio, nearPlaneDistance, farPlaneDistance);
            
            expect(projection.m11).to.not.equal(0);
            expect(projection.m22).to.not.equal(0);
            expect(projection.m33).to.not.equal(0);
            expect(projection.m34).to.equal(-1);
        });

        it('createRotationX', () => {
            const angle = MathHelper.piOver2;
            const m = Matrix.createRotationX(angle);
            expect(m.m11).to.be.closeTo(1, 0.0001);
            expect(m.m22).to.be.closeTo(0, 0.0001);
            expect(m.m23).to.be.closeTo(1, 0.0001);
            expect(m.m32).to.be.closeTo(-1, 0.0001);
            expect(m.m33).to.be.closeTo(0, 0.0001);
        });

        it('createScale', () => {
            const scale = new Vector3(2, 3, 4);
            const m = Matrix.createScale(scale);
            expect(m.m11).to.equal(2);
            expect(m.m22).to.equal(3);
            expect(m.m33).to.equal(4);
            expect(m.m44).to.equal(1);
        });

        it('createTranslation', () => {
            const position = new Vector3(10, 20, 30);
            const m = Matrix.createTranslation(position);
            expect(m.m11).to.equal(1);
            expect(m.m41).to.equal(10);
            expect(m.m42).to.equal(20);
            expect(m.m43).to.equal(30);
        });

        it('invert', () => {
            const m = Matrix.createScale(new Vector3(2, 2, 2));
            const inv = Matrix.invert(m);
            expect(inv.m11).to.equal(0.5);
            expect(inv.m22).to.equal(0.5);
            expect(inv.m33).to.equal(0.5);
        });

        it('multiply', () => {
            const m1 = Matrix.createTranslation(new Vector3(10, 0, 0));
            const m2 = Matrix.createTranslation(new Vector3(0, 20, 0));
            const result = Matrix.multiply(m1, m2);
            expect(result.m41).to.equal(10);
            expect(result.m42).to.equal(20);
        });

        it('transpose', () => {
            const m = new Matrix(
                1, 2, 3, 4,
                5, 6, 7, 8,
                9, 10, 11, 12,
                13, 14, 15, 16
            );
            const t = Matrix.transpose(m);
            expect(t.m12).to.equal(5);
            expect(t.m21).to.equal(2);
        });
    });
});
