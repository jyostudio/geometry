import BoundingBox from '../src/bounding-box';
import Vector3 from '../src/vector3';
import BoundingSphere from '../src/bounding-sphere';
import Plane from '../src/plane';
import Ray from '../src/ray';
import ContainmentType from '../src/containment-type';
import PlaneIntersectionType from '../src/plane-intersection-type';
import List from '@jyostudio/list';

describe('BoundingBox', () => {
    describe('Static Properties', () => {
        it('cornerCount should be 8', () => {
            expect(BoundingBox.cornerCount).to.equal(8);
        });
    });

    describe('Constructor', () => {
        it('should default to zero min/max', () => {
            const box = new BoundingBox();
            expect(box.min.equals(Vector3.zero)).to.be.true;
            expect(box.max.equals(Vector3.zero)).to.be.true;
        });

        it('should accept min and max', () => {
            const min = new Vector3(0, 0, 0);
            const max = new Vector3(10, 10, 10);
            const box = new BoundingBox(min, max);
            expect(box.min.equals(min)).to.be.true;
            expect(box.max.equals(max)).to.be.true;
        });
    });

    describe('Static Methods', () => {
        it('createFromPoints', () => {
            const points = new List(Vector3, [
                new Vector3(0, 0, 0),
                new Vector3(10, 5, 1),
                new Vector3(-5, 2, 3)
            ]);
            const box = BoundingBox.createFromPoints(points);
            expect(box.min.x).to.equal(-5);
            expect(box.min.y).to.equal(0);
            expect(box.min.z).to.equal(0);
            expect(box.max.x).to.equal(10);
            expect(box.max.y).to.equal(5);
            expect(box.max.z).to.equal(3);
        });

        it('createFromSphere', () => {
            const sphere = new BoundingSphere(new Vector3(0, 0, 0), 5);
            const box = BoundingBox.createFromSphere(sphere);
            expect(box.min.x).to.equal(-5);
            expect(box.min.y).to.equal(-5);
            expect(box.min.z).to.equal(-5);
            expect(box.max.x).to.equal(5);
            expect(box.max.y).to.equal(5);
            expect(box.max.z).to.equal(5);
        });

        it('createMerged', () => {
            const b1 = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
            const b2 = new BoundingBox(new Vector3(-5, -5, -5), new Vector3(5, 5, 5));
            const box = BoundingBox.createMerged(b1, b2);
            expect(box.min.x).to.equal(-5);
            expect(box.min.y).to.equal(-5);
            expect(box.min.z).to.equal(-5);
            expect(box.max.x).to.equal(10);
            expect(box.max.y).to.equal(10);
            expect(box.max.z).to.equal(10);
        });
    });

    describe('Instance Methods', () => {
        it('contains (Point)', () => {
            const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
            expect(box.contains(new Vector3(5, 5, 5))).to.equal(ContainmentType.contains);
            expect(box.contains(new Vector3(0, 0, 0))).to.equal(ContainmentType.intersects);
            expect(box.contains(new Vector3(11, 5, 5))).to.equal(ContainmentType.disjoint);
        });

        it('contains (BoundingBox)', () => {
            const outer = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
            const inner = new BoundingBox(new Vector3(2, 2, 2), new Vector3(8, 8, 8));
            const intersecting = new BoundingBox(new Vector3(8, 8, 8), new Vector3(12, 12, 12));
            const disjoint = new BoundingBox(new Vector3(12, 12, 12), new Vector3(15, 15, 15));

            expect(outer.contains(inner)).to.equal(ContainmentType.contains);
            expect(outer.contains(intersecting)).to.equal(ContainmentType.intersects);
            expect(outer.contains(disjoint)).to.equal(ContainmentType.disjoint);
        });

        it('contains (BoundingSphere)', () => {
            const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
            const inside = new BoundingSphere(new Vector3(5, 5, 5), 2);
            const intersecting = new BoundingSphere(new Vector3(0, 0, 0), 2);
            const outside = new BoundingSphere(new Vector3(20, 20, 20), 1);

            expect(box.contains(inside)).to.equal(ContainmentType.contains);
            expect(box.contains(intersecting)).to.equal(ContainmentType.intersects);
            expect(box.contains(outside)).to.equal(ContainmentType.disjoint);
        });

        it('equals', () => {
            const b1 = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
            const b2 = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
            const b3 = new BoundingBox(new Vector3(1, 1, 1), new Vector3(10, 10, 10));
            expect(b1.equals(b2)).to.be.true;
            expect(b1.equals(b3)).to.be.false;
        });

        it('getCorners', () => {
            const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(1, 1, 1));
            const corners = box.getCorners();
            expect(corners.length).to.equal(8);
            expect(corners[0].equals(new Vector3(0, 1, 1))).to.be.true;
            expect(corners[7].equals(new Vector3(0, 0, 0))).to.be.true;
        });

        it('intersects (BoundingBox)', () => {
            const b1 = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
            const b2 = new BoundingBox(new Vector3(5, 5, 5), new Vector3(15, 15, 15));
            const b3 = new BoundingBox(new Vector3(20, 20, 20), new Vector3(30, 30, 30));
            expect(b1.intersects(b2)).to.be.true;
            expect(b1.intersects(b3)).to.be.false;
        });

        it('intersects (BoundingSphere)', () => {
            const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
            const s1 = new BoundingSphere(new Vector3(5, 5, 5), 1);
            const s2 = new BoundingSphere(new Vector3(20, 20, 20), 1);
            expect(box.intersects(s1)).to.be.true;
            expect(box.intersects(s2)).to.be.false;
        });

        it('intersects (Plane)', () => {
            const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
            const p1 = new Plane(new Vector3(0, 1, 0), -5); 
            const p2 = new Plane(new Vector3(0, 1, 0), -20);

            expect(box.intersects(p1)).to.equal(PlaneIntersectionType.intersecting);
            expect(box.intersects(p2)).to.equal(PlaneIntersectionType.back);
        });

        it('intersects (Ray)', () => {
            const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
            const ray = new Ray(new Vector3(5, 5, -10), new Vector3(0, 0, 1));
            const result = box.intersects(ray);
            expect(result).to.not.be.null;
            expect(result).to.be.closeTo(10, 0.001);
        });
    });
});
