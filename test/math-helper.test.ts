import MathHelper from '../src/math-helper';

describe('MathHelper', () => {
    describe('Constants', () => {
        it('pi', () => {
            expect(MathHelper.pi).to.be.closeTo(Math.PI, 0.00001);
        });
        it('piOver2', () => {
            expect(MathHelper.piOver2).to.be.closeTo(Math.PI / 2, 0.00001);
        });
        it('piOver4', () => {
            expect(MathHelper.piOver4).to.be.closeTo(Math.PI / 4, 0.00001);
        });
        it('twoPi', () => {
            expect(MathHelper.twoPi).to.be.closeTo(Math.PI * 2, 0.00001);
        });
        it('e', () => {
            expect(MathHelper.e).to.be.closeTo(Math.E, 0.00001);
        });
        it('log10e', () => {
            expect(MathHelper.log10e).to.be.closeTo(Math.LOG10E, 0.00001);
        });
        it('log2e', () => {
            expect(MathHelper.log2e).to.be.closeTo(Math.LOG2E, 0.00001);
        });
    });

    describe('Static Methods', () => {
        it('barycentric', () => {
            // value1 + (value2 - value1) * amount1 + (value3 - value1) * amount2
            const result = MathHelper.barycentric(10, 20, 30, 0.5, 0.5);
            // 10 + (10)*0.5 + (20)*0.5 = 10 + 5 + 10 = 25
            expect(result).to.equal(25);
        });

        it('catmullRom', () => {
            // Just a basic check, exact math is complex
            const result = MathHelper.catmullRom(0, 10, 20, 30, 0.5);
            expect(result).to.equal(15);
        });

        it('clamp', () => {
            expect(MathHelper.clamp(10, 0, 5)).to.equal(5);
            expect(MathHelper.clamp(-10, 0, 5)).to.equal(0);
            expect(MathHelper.clamp(3, 0, 5)).to.equal(3);
        });

        it('distance', () => {
            expect(MathHelper.distance(10, 20)).to.equal(10);
            expect(MathHelper.distance(-10, 10)).to.equal(20);
        });

        it('hermite', () => {
            // value1=0, tangent1=0, value2=10, tangent2=0, amount=0.5 => 5
            const result = MathHelper.hermite(0, 0, 10, 0, 0.5);
            expect(result).to.equal(5);
        });

        it('lerp', () => {
            expect(MathHelper.lerp(0, 10, 0.5)).to.equal(5);
            expect(MathHelper.lerp(0, 10, 0.25)).to.equal(2.5);
        });

        it('max', () => {
            expect(MathHelper.max(10, 20)).to.equal(20);
        });

        it('min', () => {
            expect(MathHelper.min(10, 20)).to.equal(10);
        });

        it('smoothStep', () => {
            expect(MathHelper.smoothStep(0, 10, 0)).to.equal(0);
            expect(MathHelper.smoothStep(0, 10, 1)).to.equal(10);
            expect(MathHelper.smoothStep(0, 10, 0.5)).to.equal(5);
        });

        it('toDegrees', () => {
            expect(MathHelper.toDegrees(Math.PI)).to.be.closeTo(180, 0.001);
            expect(MathHelper.toDegrees(Math.PI / 2)).to.be.closeTo(90, 0.001);
        });

        it('toRadians', () => {
            expect(MathHelper.toRadians(180)).to.be.closeTo(Math.PI, 0.001);
            expect(MathHelper.toRadians(90)).to.be.closeTo(Math.PI / 2, 0.001);
        });

        it('wrapAngle', () => {
            expect(MathHelper.wrapAngle(Math.PI)).to.be.closeTo(Math.PI, 0.001);
            expect(MathHelper.wrapAngle(Math.PI * 3)).to.be.closeTo(Math.PI, 0.001);
            expect(MathHelper.wrapAngle(-Math.PI * 3)).to.be.closeTo(-Math.PI, 0.001);
            expect(MathHelper.wrapAngle(0)).to.equal(0);
        });

        it('isPowerOfTwo', () => {
            expect(MathHelper.isPowerOfTwo(1)).to.be.true;
            expect(MathHelper.isPowerOfTwo(2)).to.be.true;
            expect(MathHelper.isPowerOfTwo(4)).to.be.true;
            expect(MathHelper.isPowerOfTwo(3)).to.be.false;
            expect(MathHelper.isPowerOfTwo(0)).to.be.false;
            expect(MathHelper.isPowerOfTwo(-2)).to.be.false;
        });

        it('floorPowerOfTwo', () => {
            expect(MathHelper.floorPowerOfTwo(1)).to.equal(0); // Implementation says if value===1 return 0.
            expect(MathHelper.floorPowerOfTwo(2)).to.equal(2);
            expect(MathHelper.floorPowerOfTwo(3)).to.equal(2);
            expect(MathHelper.floorPowerOfTwo(4)).to.equal(4);
            expect(MathHelper.floorPowerOfTwo(5)).to.equal(4);
            expect(MathHelper.floorPowerOfTwo(1023)).to.equal(512);
            expect(MathHelper.floorPowerOfTwo(1024)).to.equal(1024);
        });
    });
});
