
import { suite } from '../runner';
import Vector2 from '../../src/vector2';
import Matrix from '../../src/matrix';
import Quaternion from '../../src/quaternion';

suite('Vector2', (s) => {
    const v1 = new Vector2(1, 2);
    const v2 = new Vector2(3, 4);
    const result = Vector2.zero;
    const m = Matrix.identity;

    s.add('constructor', () => {
        new Vector2(1, 2);
    });

    s.add('add', () => {
        Vector2.add(v1, v2);
    });

    s.add('add (result)', () => {
        Vector2.add(v1, v2, result);
    });

    s.add('subtract', () => {
        Vector2.subtract(v1, v2);
    });

    s.add('subtract (result)', () => {
        Vector2.subtract(v1, v2, result);
    });

    s.add('multiply (scalar)', () => {
        Vector2.multiply(v1, 2.0);
    });

    s.add('multiply (scalar) (result)', () => {
        Vector2.multiply(v1, 2.0, result);
    });

    s.add('dot', () => {
        Vector2.dot(v1, v2);
    });

    s.add('length', () => {
        v1.length();
    });

    s.add('normalize', () => {
        Vector2.normalize(v1);
    });

    s.add('distance', () => {
        Vector2.distance(v1, v2);
    });

    s.add('transform (matrix)', () => {
        Vector2.transform(v1, m);
    });

    s.add('barycentric', () => {
        Vector2.barycentric(v1, v2, v2, 0.5, 0.5);
    });

    s.add('catmullRom', () => {
        Vector2.catmullRom(v1, v2, v2, v1, 0.5);
    });

    s.add('clamp', () => {
        Vector2.clamp(v1, v2, v2);
    });

    s.add('distanceSquared', () => {
        Vector2.distanceSquared(v1, v2);
    });

    s.add('divide (scalar)', () => {
        Vector2.divide(v1, 2.0);
    });

    s.add('divide (vector)', () => {
        Vector2.divide(v1, v2);
    });

    s.add('equals', () => {
        v1.equals(v2);
    });

    s.add('hermite', () => {
        Vector2.hermite(v1, v2, v2, v1, 0.5);
    });

    s.add('lerp', () => {
        Vector2.lerp(v1, v2, 0.5);
    });

    s.add('max', () => {
        Vector2.max(v1, v2);
    });

    s.add('min', () => {
        Vector2.min(v1, v2);
    });

    s.add('multiply (vector)', () => {
        Vector2.multiply(v1, v2);
    });

    s.add('negate', () => {
        Vector2.negate(v1);
    });

    s.add('reflect', () => {
        Vector2.reflect(v1, v2);
    });

    s.add('smoothStep', () => {
        Vector2.smoothStep(v1, v2, 0.5);
    });

    s.add('transform (quaternion)', () => {
        Vector2.transform(v1, Quaternion.identity);
    });

    s.add('transformNormal', () => {
        Vector2.transformNormal(v1, m);
    });
});
