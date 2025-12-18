
import { suite } from '../runner';
import Ray from '../../src/ray';
import Vector3 from '../../src/vector3';
import BoundingBox from '../../src/bounding-box';
import BoundingSphere from '../../src/bounding-sphere';
import Plane from '../../src/plane';
import BoundingFrustum from '../../src/bounding-frustum';
import Matrix from '../../src/matrix';

suite('Ray', (s) => {
    const ray = new Ray(new Vector3(0, 0, 0), new Vector3(0, 0, 1));
    const box = new BoundingBox(new Vector3(-5, -5, 5), new Vector3(5, 5, 15));
    const sphere = new BoundingSphere(new Vector3(0, 0, 10), 5);
    const plane = new Plane(new Vector3(0, 0, 1), -10);

    s.add('constructor', () => {
        new Ray(new Vector3(0, 0, 0), new Vector3(0, 0, 1));
    });

    s.add('intersects (box)', () => {
        ray.intersects(box);
    });

    s.add('intersects (sphere)', () => {
        ray.intersects(sphere);
    });

    s.add('intersects (plane)', () => {
        ray.intersects(plane);
    });

    s.add('intersects (frustum)', () => {
        ray.intersects(new BoundingFrustum(Matrix.identity));
    });

    s.add('equals', () => {
        ray.equals(new Ray(Vector3.zero, Vector3.forward));
    });
});
