import Ray from '../src/ray';
import Vector3 from '../src/vector3';
import BoundingBox from '../src/bounding-box';
import BoundingSphere from '../src/bounding-sphere';
import Plane from '../src/plane';

describe('Ray', () => {
    describe('Constructor', () => {
        it('should default to zero position and direction', () => {
            const ray = new Ray();
            expect(ray.position.equals(Vector3.zero)).to.be.true;
            expect(ray.direction.equals(Vector3.zero)).to.be.true;
        });

        it('should accept position and direction', () => {
            const pos = new Vector3(1, 2, 3);
            const dir = new Vector3(0, 1, 0);
            const ray = new Ray(pos, dir);
            expect(ray.position.equals(pos)).to.be.true;
            expect(ray.direction.equals(dir)).to.be.true;
        });
    });

    describe('Instance Methods', () => {
        it('equals', () => {
            const r1 = new Ray(new Vector3(0, 0, 0), new Vector3(0, 1, 0));
            const r2 = new Ray(new Vector3(0, 0, 0), new Vector3(0, 1, 0));
            const r3 = new Ray(new Vector3(1, 0, 0), new Vector3(0, 1, 0));
            expect(r1.equals(r2)).to.be.true;
            expect(r1.equals(r3)).to.be.false;
        });

        it('intersects (BoundingBox)', () => {
            const ray = new Ray(new Vector3(5, 5, -10), new Vector3(0, 0, 1));
            const box = new BoundingBox(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
            const result = ray.intersects(box);
            expect(result).to.not.be.null;
            expect(result).to.be.closeTo(10, 0.001); // Distance from -10 to 0 is 10.

            const missRay = new Ray(new Vector3(20, 20, -10), new Vector3(0, 0, 1));
            expect(missRay.intersects(box)).to.be.null;
            
            // Ray starting inside box
            const insideRay = new Ray(new Vector3(5, 5, 5), new Vector3(0, 0, 1));
            expect(insideRay.intersects(box)).to.equal(0);
        });

        it('intersects (BoundingSphere)', () => {
            const ray = new Ray(new Vector3(0, 0, -10), new Vector3(0, 0, 1));
            const sphere = new BoundingSphere(new Vector3(0, 0, 0), 5);
            const result = ray.intersects(sphere);
            expect(result).to.not.be.null;
            expect(result).to.be.closeTo(5, 0.001); // Distance from -10 to -5 (surface) is 5.

            const missRay = new Ray(new Vector3(10, 0, -10), new Vector3(0, 0, 1));
            expect(missRay.intersects(sphere)).to.be.null;

            // Ray starting inside sphere
            const insideRay = new Ray(new Vector3(0, 0, 0), new Vector3(0, 0, 1));
            expect(insideRay.intersects(sphere)).to.equal(0);
        });

        it('intersects (Plane)', () => {
            const ray = new Ray(new Vector3(0, 10, 0), new Vector3(0, -1, 0));
            const plane = new Plane(new Vector3(0, 1, 0), 0); // Plane y=0
            const result = ray.intersects(plane);
            expect(result).to.not.be.null;
            expect(result).to.be.closeTo(10, 0.001);

            const parallelRay = new Ray(new Vector3(0, 10, 0), new Vector3(1, 0, 0));
            expect(parallelRay.intersects(plane)).to.be.null;
            
            const awayRay = new Ray(new Vector3(0, 10, 0), new Vector3(0, 1, 0));
            expect(awayRay.intersects(plane)).to.be.null;
        });
    });
});
