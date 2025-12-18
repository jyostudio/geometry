
import { suite } from '../runner';
import List from '@jyostudio/list';
import BoundingSphere from '../../src/bounding-sphere';
import BoundingBox from '../../src/bounding-box';
import Vector3 from '../../src/vector3';
import Ray from '../../src/ray';
import BoundingFrustum from '../../src/bounding-frustum';
import Plane from '../../src/plane';
import Matrix from '../../src/matrix';

suite('BoundingSphere', (s) => {
    const sphere1 = new BoundingSphere(new Vector3(0, 0, 0), 10);
    const sphere2 = new BoundingSphere(new Vector3(5, 0, 0), 10);
    const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
    const point = new Vector3(5, 5, 5);
    const ray = new Ray(new Vector3(-20, 0, 0), new Vector3(1, 0, 0));

    s.add('constructor', () => {
        new BoundingSphere(new Vector3(0, 0, 0), 10);
    });

    s.add('intersects (sphere)', () => {
        sphere1.intersects(sphere2);
    });

    s.add('intersects (box)', () => {
        sphere1.intersects(box);
    });

    s.add('intersects (ray)', () => {
        sphere1.intersects(ray);
    });

    s.add('contains (sphere)', () => {
        sphere1.contains(sphere2);
    });

    s.add('contains (box)', () => {
        sphere1.contains(box);
    });

    s.add('contains (point)', () => {
        sphere1.contains(point);
    });

    s.add('createMerged', () => {
        BoundingSphere.createMerged(sphere1, sphere2);
    });

    s.add('createFromBoundingBox', () => {
        BoundingSphere.createFromBoundingBox(box);
    });

    s.add('createFromFrustum', () => {
        BoundingSphere.createFromFrustum(new BoundingFrustum(Matrix.identity));
    });

    s.add('createFromPoints', () => {
        const points = new List(Vector3);
        points.add(Vector3.zero);
        points.add(Vector3.one);
        BoundingSphere.createFromPoints(points);
    });

    s.add('contains (frustum)', () => {
        sphere1.contains(new BoundingFrustum(Matrix.identity));
    });

    s.add('intersects (frustum)', () => {
        sphere1.intersects(new BoundingFrustum(Matrix.identity));
    });

    s.add('intersects (plane)', () => {
        sphere1.intersects(new Plane(Vector3.up, 0));
    });

    s.add('equals', () => {
        sphere1.equals(sphere2);
    });

    s.add('transform (matrix)', () => {
        sphere1.transform(Matrix.identity);
    });
});
