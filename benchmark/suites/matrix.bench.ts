
import { suite } from '../runner';
import Matrix from '../../src/matrix';
import Vector3 from '../../src/vector3';
import Plane from '../../src/plane';
import Quaternion from '../../src/quaternion';

suite('Matrix', (s) => {
    const m1 = Matrix.identity;
    const m2 = Matrix.createTranslation(new Vector3(10, 20, 30));
    const v = new Vector3(1, 2, 3);
    const result = new Matrix();
    const plane = new Plane(new Vector3(0, 1, 0), 0);

    s.add('multiply', () => {
        Matrix.multiply(m1, m2);
    });

    s.add('multiplyWithResult', () => {
        Matrix.multiply(m1, m2, result);
    });

    s.add('invert', () => {
        Matrix.invert(m2);
    });

    s.add('invertWithResult', () => {
        Matrix.invert(m2, result);
    });

    s.add('transpose', () => {
        Matrix.transpose(m2);
    });

    s.add('transposeWithResult', () => {
        Matrix.transpose(m2, result);
    });

    s.add('createLookAt', () => {
        Matrix.createLookAt(new Vector3(0, 0, 10), Vector3.zero, Vector3.up);
    });

    s.add('createLookAtWithResult', () => {
        Matrix.createLookAt(new Vector3(0, 0, 10), Vector3.zero, Vector3.up, result);
    });
    
    s.add('createPerspectiveFieldOfView', () => {
        Matrix.createPerspectiveFieldOfView(Math.PI / 4, 1.33, 0.1, 1000);
    });

    s.add('createPerspectiveFieldOfViewWithResult', () => {
        Matrix.createPerspectiveFieldOfView(Math.PI / 4, 1.33, 0.1, 1000, result);
    });

    s.add('createWorld', () => {
        Matrix.createWorld(new Vector3(10, 20, 30), Vector3.forward, Vector3.up);
    });

    s.add('createWorldWithResult', () => {
        Matrix.createWorld(new Vector3(10, 20, 30), Vector3.forward, Vector3.up, result);
    });

    s.add('createReflection', () => {
        Matrix.createReflection(plane);
    });

    s.add('createReflectionWithResult', () => {
        Matrix.createReflection(plane, result);
    });

    s.add('createFromYawPitchRoll', () => {
        Matrix.createFromYawPitchRoll(1, 2, 3);
    });

    s.add('createFromYawPitchRollWithResult', () => {
        Matrix.createFromYawPitchRoll(1, 2, 3, result);
    });

    s.add('createBillboard', () => {
        Matrix.createBillboard(new Vector3(10, 20, 30), new Vector3(0, 0, 0), Vector3.up, null);
    });

    s.add('createBillboardWithResult', () => {
        Matrix.createBillboard(new Vector3(10, 20, 30), new Vector3(0, 0, 0), Vector3.up, null, result);
    });

    s.add('createConstrainedBillboard', () => {
        Matrix.createConstrainedBillboard(new Vector3(10, 20, 30), new Vector3(0, 0, 0), Vector3.up, null, null);
    });

    s.add('createConstrainedBillboardWithResult', () => {
        Matrix.createConstrainedBillboard(new Vector3(10, 20, 30), new Vector3(0, 0, 0), Vector3.up, null, null, result);
    });

    s.add('add', () => {
        Matrix.add(m1, m2);
    });

    s.add('createFromAxisAngle', () => {
        Matrix.createFromAxisAngle(Vector3.up, Math.PI / 4);
    });

    s.add('createFromQuaternion', () => {
        Matrix.createFromQuaternion(Quaternion.identity);
    });

    s.add('createOrthographic', () => {
        Matrix.createOrthographic(800, 600, 0.1, 1000);
    });

    s.add('createOrthographicOffCenter', () => {
        Matrix.createOrthographicOffCenter(0, 800, 600, 0, 0.1, 1000);
    });

    s.add('createPerspective', () => {
        Matrix.createPerspective(800, 600, 0.1, 1000);
    });

    s.add('createPerspectiveOffCenter', () => {
        Matrix.createPerspectiveOffCenter(0, 800, 600, 0, 0.1, 1000);
    });

    s.add('createRotationX', () => {
        Matrix.createRotationX(Math.PI / 4);
    });

    s.add('createRotationY', () => {
        Matrix.createRotationY(Math.PI / 4);
    });

    s.add('createRotationZ', () => {
        Matrix.createRotationZ(Math.PI / 4);
    });

    s.add('createScale', () => {
        Matrix.createScale(new Vector3(2, 2, 2));
    });

    s.add('createShadow', () => {
        Matrix.createShadow(Vector3.up, plane);
    });

    s.add('createTranslation', () => {
        Matrix.createTranslation(new Vector3(10, 20, 30));
    });

    s.add('decompose', () => {
        m2.decompose(new Vector3(), new Quaternion(), new Vector3());
    });

    s.add('determinant', () => {
        m2.determinant();
    });

    s.add('divide', () => {
        Matrix.divide(m1, m2);
    });

    s.add('equals', () => {
        m1.equals(m2);
    });

    s.add('lerp', () => {
        Matrix.lerp(m1, m2, 0.5);
    });

    s.add('negate', () => {
        Matrix.negate(m1);
    });

    s.add('subtract', () => {
        Matrix.subtract(m1, m2);
    });

    s.add('transform (quaternion)', () => {
        Matrix.transform(m1, Quaternion.identity);
    });
});
