
import { suite } from '../runner';
import List from '@jyostudio/list';
import BoundingBox from '../../src/bounding-box';
import BoundingSphere from '../../src/bounding-sphere';
import Vector3 from '../../src/vector3';
import Ray from '../../src/ray';
import BoundingFrustum from '../../src/bounding-frustum';
import Plane from '../../src/plane';
import Matrix from '../../src/matrix';

suite('BoundingBox', (s) => {
    const box1 = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
    const box2 = new BoundingBox(new Vector3(5, 5, 5), new Vector3(15, 15, 15));
    const sphere = new BoundingSphere(new Vector3(5, 5, 5), 5);
    const point = new Vector3(5, 5, 5);
    const ray = new Ray(new Vector3(-5, 5, 5), new Vector3(1, 0, 0));

    s.add('constructor', () => {
        new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
    });

    s.add('intersects (box)', () => {
        box1.intersects(box2);
    });

    s.add('intersects (sphere)', () => {
        box1.intersects(sphere);
    });

    s.add('intersects (ray)', () => {
        box1.intersects(ray);
    });

    s.add('contains (box)', () => {
        box1.contains(box2);
    });

    s.add('contains (sphere)', () => {
        box1.contains(sphere);
    });

    s.add('contains (point)', () => {
        box1.contains(point);
    });

    s.add('createMerged', () => {
        BoundingBox.createMerged(box1, box2);
    });

    s.add('createFromPoints', () => {
        const points = new List(Vector3);
        points.add(Vector3.zero);
        points.add(Vector3.one);
        BoundingBox.createFromPoints(points);
    });

    s.add('createFromSphere', () => {
        BoundingBox.createFromSphere(sphere);
    });

    s.add('contains (frustum)', () => {
        box1.contains(new BoundingFrustum(Matrix.identity));
    });

    s.add('intersects (frustum)', () => {
        box1.intersects(new BoundingFrustum(Matrix.identity));
    });

    s.add('intersects (plane)', () => {
        box1.intersects(new Plane(Vector3.up, 0));
    });

    s.add('equals', () => {
        box1.equals(box2);
    });

    s.add('getCorners', () => {
        box1.getCorners();
    });
});
