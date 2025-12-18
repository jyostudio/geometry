
import { suite } from '../runner';
import BoundingFrustum from '../../src/bounding-frustum';
import Matrix from '../../src/matrix';
import BoundingBox from '../../src/bounding-box';
import BoundingSphere from '../../src/bounding-sphere';
import Vector3 from '../../src/vector3';
import Ray from '../../src/ray';
import Plane from '../../src/plane';

suite('BoundingFrustum', (s) => {
    const view = Matrix.createLookAt(new Vector3(0, 0, 10), Vector3.zero, Vector3.up);
    const projection = Matrix.createPerspectiveFieldOfView(Math.PI / 4, 1, 1, 100);
    const viewProjection = Matrix.multiply(view, projection);
    const frustum = new BoundingFrustum(viewProjection);
    
    const box = new BoundingBox(new Vector3(-1, -1, -1), new Vector3(1, 1, 1));
    const sphere = new BoundingSphere(Vector3.zero, 1);
    const point = Vector3.zero;
    const ray = new Ray(new Vector3(0, 0, 20), new Vector3(0, 0, -1));

    s.add('constructor', () => {
        new BoundingFrustum(viewProjection);
    });

    s.add('contains (box)', () => {
        frustum.contains(box);
    });

    s.add('contains (sphere)', () => {
        frustum.contains(sphere);
    });

    s.add('contains (point)', () => {
        frustum.contains(point);
    });

    s.add('intersects (box)', () => {
        frustum.intersects(box);
    });

    s.add('intersects (sphere)', () => {
        frustum.intersects(sphere);
    });

    s.add('intersects (ray)', () => {
        frustum.intersects(ray);
    });

    s.add('contains (frustum)', () => {
        frustum.contains(frustum);
    });

    s.add('intersects (frustum)', () => {
        frustum.intersects(frustum);
    });

    s.add('intersects (plane)', () => {
        frustum.intersects(new Plane(Vector3.up, 0));
    });

    s.add('equals', () => {
        frustum.equals(frustum);
    });

    s.add('getCorners', () => {
        frustum.getCorners();
    });
});
