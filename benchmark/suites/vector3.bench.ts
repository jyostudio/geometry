
import { suite } from '../runner';
import Vector3 from '../../src/vector3';
import Matrix from '../../src/matrix';
import Quaternion from '../../src/quaternion';

suite('Vector3', (s) => {
    const v1 = new Vector3(1, 2, 3);
    const v2 = new Vector3(4, 5, 6);
    const result = Vector3.zero;
    const m = Matrix.identity;

    s.add('constructor', () => {
        new Vector3(1, 2, 3);
    });

    s.add('add', () => {
        Vector3.add(v1, v2);
    });

    s.add('add (result)', () => {
        Vector3.add(v1, v2, result);
    });

    s.add('subtract', () => {
        Vector3.subtract(v1, v2);
    });

    s.add('subtract (result)', () => {
        Vector3.subtract(v1, v2, result);
    });

    s.add('multiply (scalar)', () => {
        Vector3.multiply(v1, 2.0);
    });

    s.add('multiply (scalar) (result)', () => {
        Vector3.multiply(v1, 2.0, result);
    });

    s.add('dot', () => {
        Vector3.dot(v1, v2);
    });

    s.add('cross', () => {
        Vector3.cross(v1, v2);
    });

    s.add('cross (result)', () => {
        Vector3.cross(v1, v2, result);
    });

    s.add('normalize', () => {
        Vector3.normalize(v1);
    });

    s.add('normalize (result)', () => {
        Vector3.normalize(v1, result);
    });
    
    s.add('transform (Matrix)', () => {
        Vector3.transform(v1, m);
    });

    s.add('transform (Matrix) (result)', () => {
        Vector3.transform(v1, m, result);
    });
    
    s.add('distance', () => {
        Vector3.distance(v1, v2);
    });

    s.add('barycentric', () => {
        Vector3.barycentric(v1, v2, v2, 0.5, 0.5);
    });

    s.add('catmullRom', () => {
        Vector3.catmullRom(v1, v2, v2, v1, 0.5);
    });

    s.add('clamp', () => {
        Vector3.clamp(v1, v2, v2);
    });

    s.add('distanceSquared', () => {
        Vector3.distanceSquared(v1, v2);
    });

    s.add('divide (scalar)', () => {
        Vector3.divide(v1, 2.0);
    });

    s.add('divide (vector)', () => {
        Vector3.divide(v1, v2);
    });

    s.add('equals', () => {
        v1.equals(v2);
    });

    s.add('hermite', () => {
        Vector3.hermite(v1, v2, v2, v1, 0.5);
    });

    s.add('lerp', () => {
        Vector3.lerp(v1, v2, 0.5);
    });

    s.add('max', () => {
        Vector3.max(v1, v2);
    });

    s.add('min', () => {
        Vector3.min(v1, v2);
    });

    s.add('multiply (vector)', () => {
        Vector3.multiply(v1, v2);
    });

    s.add('negate', () => {
        Vector3.negate(v1);
    });

    s.add('reflect', () => {
        Vector3.reflect(v1, v2);
    });

    s.add('smoothStep', () => {
        Vector3.smoothStep(v1, v2, 0.5);
    });

    s.add('transform (quaternion)', () => {
        Vector3.transform(v1, Quaternion.identity);
    });

    s.add('transformNormal', () => {
        Vector3.transformNormal(v1, m);
    });
});
