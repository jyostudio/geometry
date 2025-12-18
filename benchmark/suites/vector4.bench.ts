
import { suite } from '../runner';
import Vector4 from '../../src/vector4';
import Matrix from '../../src/matrix';
import Quaternion from '../../src/quaternion';

suite('Vector4', (s) => {
    const v1 = new Vector4(1, 2, 3, 4);
    const v2 = new Vector4(5, 6, 7, 8);
    const result = Vector4.zero;
    const m = Matrix.identity;

    s.add('constructor', () => {
        new Vector4(1, 2, 3, 4);
    });

    s.add('add', () => {
        Vector4.add(v1, v2);
    });

    s.add('add (result)', () => {
        Vector4.add(v1, v2, result);
    });

    s.add('subtract', () => {
        Vector4.subtract(v1, v2);
    });

    s.add('subtract (result)', () => {
        Vector4.subtract(v1, v2, result);
    });

    s.add('multiply (scalar)', () => {
        Vector4.multiply(v1, 2.0);
    });

    s.add('multiply (scalar) (result)', () => {
        Vector4.multiply(v1, 2.0, result);
    });

    s.add('dot', () => {
        Vector4.dot(v1, v2);
    });

    s.add('length', () => {
        v1.length();
    });

    s.add('normalize', () => {
        Vector4.normalize(v1);
    });

    s.add('distance', () => {
        Vector4.distance(v1, v2);
    });

    s.add('transform (matrix)', () => {
        Vector4.transform(v1, m);
    });

    s.add('barycentric', () => {
        Vector4.barycentric(v1, v2, v2, 0.5, 0.5);
    });

    s.add('catmullRom', () => {
        Vector4.catmullRom(v1, v2, v2, v1, 0.5);
    });

    s.add('clamp', () => {
        Vector4.clamp(v1, v2, v2);
    });

    s.add('distanceSquared', () => {
        Vector4.distanceSquared(v1, v2);
    });

    s.add('divide (scalar)', () => {
        Vector4.divide(v1, 2.0);
    });

    s.add('divide (vector)', () => {
        Vector4.divide(v1, v2);
    });

    s.add('equals', () => {
        v1.equals(v2);
    });

    s.add('hermite', () => {
        Vector4.hermite(v1, v2, v2, v1, 0.5);
    });

    s.add('lerp', () => {
        Vector4.lerp(v1, v2, 0.5);
    });

    s.add('max', () => {
        Vector4.max(v1, v2);
    });

    s.add('min', () => {
        Vector4.min(v1, v2);
    });

    s.add('multiply (vector)', () => {
        Vector4.multiply(v1, v2);
    });

    s.add('negate', () => {
        Vector4.negate(v1);
    });

    s.add('smoothStep', () => {
        Vector4.smoothStep(v1, v2, 0.5);
    });

    s.add('transform (quaternion)', () => {
        Vector4.transform(v1, Quaternion.identity);
    });
});
