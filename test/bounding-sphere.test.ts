import BoundingSphere from '../src/bounding-sphere';
import BoundingBox from '../src/bounding-box';
import Vector3 from '../src/vector3';
import Matrix from '../src/matrix';
import Plane from '../src/plane';
import Ray from '../src/ray';
import ContainmentType from '../src/containment-type';
import PlaneIntersectionType from '../src/plane-intersection-type';
import List from '@jyostudio/list';

describe('BoundingSphere', () => {
    describe('Constructor', () => {
        it('should default to zero center and zero radius', () => {
            const sphere = new BoundingSphere();
            expect(sphere.center.equals(Vector3.zero)).to.be.true;
            expect(sphere.radius).to.equal(0);
        });

        it('should accept center and radius', () => {
            const center = new Vector3(1, 2, 3);
            const radius = 5;
            const sphere = new BoundingSphere(center, radius);
            expect(sphere.center.equals(center)).to.be.true;
            expect(sphere.radius).to.equal(5);
        });
    });

    describe('Static Methods', () => {
        it('createFromBoundingBox', () => {
            const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
            const sphere = BoundingSphere.createFromBoundingBox(box);
            // Center should be (5, 5, 5)
            expect(sphere.center.x).to.equal(5);
            expect(sphere.center.y).to.equal(5);
            expect(sphere.center.z).to.equal(5);
            // Radius should be distance from (5,5,5) to (10,10,10)
            // sqrt(25+25+25) = sqrt(75) approx 8.66
            expect(sphere.radius).to.be.closeTo(Math.sqrt(75), 0.001);
        });

        it('createFromPoints', () => {
            const points = new List(Vector3, [
                new Vector3(0, 0, 0),
                new Vector3(10, 0, 0),
                new Vector3(0, 10, 0),
                new Vector3(0, 0, 10),
                new Vector3(-10, 0, 0)
            ]);
            const sphere = BoundingSphere.createFromPoints(points);
            // Center should be roughly (0, 0, 0) or slightly adjusted depending on algorithm
            // The algorithm seems to find min/max box first, then refine.
            // Min: (-10, 0, 0), Max: (10, 10, 10). Center approx (0, 5, 5).
            // Let's just check it contains all points.
            for (const p of points) {
                expect(sphere.contains(p)).to.not.equal(ContainmentType.disjoint);
            }
        });

        it('createMerged', () => {
            const s1 = new BoundingSphere(new Vector3(0, 0, 0), 5);
            const s2 = new BoundingSphere(new Vector3(10, 0, 0), 5);
            const sphere = BoundingSphere.createMerged(s1, s2);
            // Center should be (5, 0, 0)
            expect(sphere.center.x).to.equal(5);
            expect(sphere.center.y).to.equal(0);
            expect(sphere.center.z).to.equal(0);
            // Radius should be 10 (distance 10 + 5 + 5 / 2 = 10)
            expect(sphere.radius).to.equal(10);
        });
    });

    describe('Instance Methods', () => {
        it('contains (Point)', () => {
            const sphere = new BoundingSphere(new Vector3(0, 0, 0), 10);
            expect(sphere.contains(new Vector3(5, 0, 0))).to.equal(ContainmentType.contains);
            expect(sphere.contains(new Vector3(10, 0, 0))).to.equal(ContainmentType.intersects); // Boundary
            expect(sphere.contains(new Vector3(11, 0, 0))).to.equal(ContainmentType.disjoint);
        });

        it('contains (BoundingBox)', () => {
            const sphere = new BoundingSphere(new Vector3(0, 0, 0), 10);
            const inside = new BoundingBox(new Vector3(-5, -5, -5), new Vector3(5, 5, 5));
            // Distance from 0 to corner (5,5,5) is sqrt(75) ~ 8.66 < 10. So contains.
            const intersecting = new BoundingBox(new Vector3(8, 0, 0), new Vector3(12, 2, 2));
            const outside = new BoundingBox(new Vector3(20, 0, 0), new Vector3(25, 5, 5));

            expect(sphere.contains(inside)).to.equal(ContainmentType.contains);
            expect(sphere.contains(intersecting)).to.equal(ContainmentType.intersects);
            expect(sphere.contains(outside)).to.equal(ContainmentType.disjoint);
        });

        it('contains (BoundingSphere)', () => {
            const sphere = new BoundingSphere(new Vector3(0, 0, 0), 10);
            const inside = new BoundingSphere(new Vector3(0, 0, 0), 5);
            const intersecting = new BoundingSphere(new Vector3(10, 0, 0), 5);
            const outside = new BoundingSphere(new Vector3(20, 0, 0), 5);

            expect(sphere.contains(inside)).to.equal(ContainmentType.contains);
            expect(sphere.contains(intersecting)).to.equal(ContainmentType.intersects);
            expect(sphere.contains(outside)).to.equal(ContainmentType.disjoint);
        });

        it('equals', () => {
            const s1 = new BoundingSphere(new Vector3(0, 0, 0), 10);
            const s2 = new BoundingSphere(new Vector3(0, 0, 0), 10);
            const s3 = new BoundingSphere(new Vector3(1, 0, 0), 10);
            expect(s1.equals(s2)).to.be.true;
            expect(s1.equals(s3)).to.be.false;
        });

        it('intersects (BoundingBox)', () => {
            const sphere = new BoundingSphere(new Vector3(0, 0, 0), 10);
            const box = new BoundingBox(new Vector3(5, 0, 0), new Vector3(15, 5, 5));
            expect(sphere.intersects(box)).to.be.true;
        });

        it('intersects (BoundingSphere)', () => {
            const s1 = new BoundingSphere(new Vector3(0, 0, 0), 10);
            const s2 = new BoundingSphere(new Vector3(15, 0, 0), 10); // Distance 15 < 10+10
            const s3 = new BoundingSphere(new Vector3(25, 0, 0), 10); // Distance 25 > 10+10
            expect(s1.intersects(s2)).to.be.true;
            expect(s1.intersects(s3)).to.be.false;
        });

        it('intersects (Plane)', () => {
            const sphere = new BoundingSphere(new Vector3(0, 0, 0), 10);
            const p1 = new Plane(new Vector3(0, 1, 0), -5); // Plane y=5
            const p2 = new Plane(new Vector3(0, 1, 0), -20); // Plane y=20

            expect(sphere.intersects(p1)).to.equal(PlaneIntersectionType.intersecting);
            expect(sphere.intersects(p2)).to.equal(PlaneIntersectionType.back); // Sphere is at y=0, plane at y=20. Normal up. Sphere is "below" plane.
        });

        it('intersects (Ray)', () => {
            const sphere = new BoundingSphere(new Vector3(0, 0, 0), 10);
            const ray = new Ray(new Vector3(0, 0, -20), new Vector3(0, 0, 1));
            const result = sphere.intersects(ray);
            expect(result).to.not.be.null;
            expect(result).to.be.closeTo(10, 0.001); // Hit at z=-10. Distance from -20 is 10.
        });

        it('transform', () => {
            const sphere = new BoundingSphere(new Vector3(1, 0, 0), 5);
            const matrix = Matrix.createTranslation(new Vector3(2, 3, 4));
            const transformed = sphere.transform(matrix);
            
            expect(transformed.center.x).to.equal(3); // 1+2
            expect(transformed.center.y).to.equal(3); // 0+3
            expect(transformed.center.z).to.equal(4); // 0+4
            expect(transformed.radius).to.equal(5); // Scale is 1
        });
    });
});
