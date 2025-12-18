import Plane from '../src/plane';
import Vector3 from '../src/vector3';
import Vector4 from '../src/vector4';
import Matrix from '../src/matrix';
import Quaternion from '../src/quaternion';
import PlaneIntersectionType from '../src/plane-intersection-type';
import BoundingBox from '../src/bounding-box';
import BoundingSphere from '../src/bounding-sphere';
import MathHelper from '../src/math-helper';

describe('Plane', () => {
    describe('Constructor', () => {
        it('should default to zero normal and 0 d', () => {
            const p = new Plane();
            expect(p.normal.x).to.equal(0);
            expect(p.normal.y).to.equal(0);
            expect(p.normal.z).to.equal(0);
            expect(p.d).to.equal(0);
        });

        it('should accept a, b, c, d', () => {
            const p = new Plane(1, 2, 3, 4);
            expect(p.normal.x).to.equal(1);
            expect(p.normal.y).to.equal(2);
            expect(p.normal.z).to.equal(3);
            expect(p.d).to.equal(4);
        });

        it('should accept Vector3 and d', () => {
            const normal = new Vector3(1, 2, 3);
            const p = new Plane(normal, 4);
            expect(p.normal.x).to.equal(1);
            expect(p.normal.y).to.equal(2);
            expect(p.normal.z).to.equal(3);
            expect(p.d).to.equal(4);
        });

        it('should accept Vector4', () => {
            const v = new Vector4(1, 2, 3, 4);
            const p = new Plane(v);
            expect(p.normal.x).to.equal(1);
            expect(p.normal.y).to.equal(2);
            expect(p.normal.z).to.equal(3);
            expect(p.d).to.equal(4);
        });

        it('should accept 3 points', () => {
            const p1 = new Vector3(0, 0, 0);
            const p2 = new Vector3(1, 0, 0);
            const p3 = new Vector3(0, 1, 0);
            const p = new Plane(p1, p2, p3);
            // Normal should be Z (0, 0, 1)
            expect(p.normal.x).to.equal(0);
            expect(p.normal.y).to.equal(0);
            expect(p.normal.z).to.equal(1);
            expect(p.d).to.equal(0);
        });
    });

    describe('Static Methods', () => {
        it('normalize', () => {
            const p = new Plane(0, 10, 0, 20);
            const normalized = Plane.normalize(p);
            expect(normalized.normal.y).to.equal(1);
            expect(normalized.d).to.equal(2);
        });

        it('transform', () => {
            const p = new Plane(0, 1, 0, 0); // XZ plane
            const q = Quaternion.createFromAxisAngle(Vector3.unitX, MathHelper.piOver2);
            // Rotate 90 deg around X. Y becomes Z.
            const result = Plane.transform(p, q);
            expect(result.normal.y).to.be.closeTo(0, 0.0001);
            expect(result.normal.z).to.be.closeTo(1, 0.0001);
        });
    });

    describe('Instance Methods', () => {
        it('dot', () => {
            const p = new Plane(1, 2, 3, 4);
            const v = new Vector4(1, 1, 1, 1);
            expect(p.dot(v)).to.equal(10);
        });

        it('dotCoordinate', () => {
            const p = new Plane(0, 1, 0, -10);
            const v = new Vector3(0, 20, 0);
            expect(p.dotCoordinate(v)).to.equal(10);
        });

        it('dotNormal', () => {
            const p = new Plane(0, 1, 0, -10);
            const v = new Vector3(0, 1, 0);
            expect(p.dotNormal(v)).to.equal(1);
        });

        it('intersects BoundingBox', () => {
            const p = new Plane(0, 1, 0, 0); // XZ plane
            const box = new BoundingBox(new Vector3(-1, -1, -1), new Vector3(1, 1, 1));
            expect(p.intersects(box)).to.equal(PlaneIntersectionType.intersecting);
            
            const p2 = new Plane(0, 1, 0, -10); // Plane at y=10
            expect(p2.intersects(box)).to.equal(PlaneIntersectionType.back);
        });

        it('intersects BoundingSphere', () => {
            const p = new Plane(0, 1, 0, 0);
            const sphere = new BoundingSphere(new Vector3(0, 0, 0), 1);
            expect(p.intersects(sphere)).to.equal(PlaneIntersectionType.intersecting);
            
            const p2 = new Plane(0, 1, 0, -10);
            expect(p2.intersects(sphere)).to.equal(PlaneIntersectionType.back);
        });

        it('normalize', () => {
            const p = new Plane(0, 10, 0, 20);
            p.normalize();
            expect(p.normal.y).to.equal(1);
            expect(p.d).to.equal(2);
        });
    });
});
