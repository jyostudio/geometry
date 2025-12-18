
import { suite } from '../runner';
import Plane from '../../src/plane';
import Vector3 from '../../src/vector3';
import Vector4 from '../../src/vector4';
import Matrix from '../../src/matrix';
import Quaternion from '../../src/quaternion';
import BoundingBox from '../../src/bounding-box';
import BoundingFrustum from '../../src/bounding-frustum';
import BoundingSphere from '../../src/bounding-sphere';

suite('Plane', (s) => {
    const p = new Plane(0, 1, 0, 10);
    const v3 = new Vector3(1, 2, 3);
    const v4 = new Vector4(1, 2, 3, 1);

    s.add('dot', () => {
        p.dot(v4);
    });

    s.add('dotCoordinate', () => {
        p.dotCoordinate(v3);
    });

    s.add('dotNormal', () => {
        p.dotNormal(v3);
    });
    
    s.add('normalize', () => {
        Plane.normalize(p);
    });

    s.add('transform (matrix)', () => {
        Plane.transform(p, Matrix.identity);
    });

    s.add('transform (quaternion)', () => {
        Plane.transform(p, Quaternion.identity);
    });

    s.add('intersects (box)', () => {
        p.intersects(new BoundingBox(Vector3.zero, Vector3.one));
    });

    s.add('intersects (frustum)', () => {
        p.intersects(new BoundingFrustum(Matrix.identity));
    });

    s.add('intersects (sphere)', () => {
        p.intersects(new BoundingSphere(Vector3.zero, 1));
    });

    s.add('intersects (point)', () => {
        p.intersects(Vector3.zero);
    });
});
