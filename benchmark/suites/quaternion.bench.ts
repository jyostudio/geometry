
import { suite } from '../runner';
import Quaternion from '../../src/quaternion';
import Vector3 from '../../src/vector3';
import Matrix from '../../src/matrix';

suite('Quaternion', (s) => {
    const q1 = Quaternion.identity;
    const q2 = Quaternion.createFromAxisAngle(Vector3.unitY, Math.PI / 2);

    s.add('multiply', () => {
        Quaternion.multiply(q1, q2);
    });

    s.add('slerp', () => {
        Quaternion.slerp(q1, q2, 0.5);
    });

    s.add('lerp', () => {
        Quaternion.lerp(q1, q2, 0.5);
    });
    
    s.add('inverse', () => {
        Quaternion.inverse(q2);
    });

    s.add('add', () => {
        Quaternion.add(q1, q2);
    });

    s.add('concatenate', () => {
        Quaternion.concatenate(q1, q2);
    });

    s.add('conjugate', () => {
        Quaternion.conjugate(q2);
    });

    s.add('createFromAxisAngle', () => {
        Quaternion.createFromAxisAngle(Vector3.up, Math.PI / 4);
    });

    s.add('createFromRotationMatrix', () => {
        Quaternion.createFromRotationMatrix(Matrix.identity);
    });

    s.add('createFromYawPitchRoll', () => {
        Quaternion.createFromYawPitchRoll(1, 2, 3);
    });

    s.add('divide', () => {
        Quaternion.divide(q1, q2);
    });

    s.add('dot', () => {
        Quaternion.dot(q1, q2);
    });

    s.add('equals', () => {
        q1.equals(q2);
    });

    s.add('negate', () => {
        Quaternion.negate(q1);
    });

    s.add('normalize', () => {
        Quaternion.normalize(q2);
    });

    s.add('subtract', () => {
        Quaternion.subtract(q1, q2);
    });
});
