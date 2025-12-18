
export interface BenchmarkResult {
    suite: string;
    name: string;
    opsPerSecond: number;
}

export class BenchmarkSuite {
    name: string;
    tests: { name: string, fn: () => void }[] = [];

    constructor(name: string) {
        this.name = name;
    }

    add(name: string, fn: () => void) {
        this.tests.push({ name, fn });
        return this;
    }

    async run(onProgress?: (result: BenchmarkResult) => void): Promise<BenchmarkResult[]> {
        const results: BenchmarkResult[] = [];
        
        for (const test of this.tests) {
            // Warmup
            let count = 100;
            let start = performance.now();
            for(let i=0; i<count; i++) test.fn();
            let end = performance.now();
            
            // Estimate count for ~50ms
            let duration = end - start;
            if (duration === 0) duration = 0.001; // Avoid division by zero
            
            // We want each batch to take about 50ms
            const batchSize = Math.max(100, Math.ceil((50 / duration) * count));
            
            // Run for ~500ms
            const targetTime = 500;
            let totalOps = 0;
            const runStart = performance.now();
            
            while (performance.now() - runStart < targetTime) {
                for(let i=0; i<batchSize; i++) test.fn();
                totalOps += batchSize;
            }
            
            const runEnd = performance.now();
            const opsPerSecond = (totalOps / (runEnd - runStart)) * 1000;
            
            const result = {
                suite: this.name,
                name: test.name,
                opsPerSecond
            };
            
            results.push(result);
            if (onProgress) onProgress(result);
            
            // Yield to UI
            await new Promise(resolve => setTimeout(resolve, 0));
        }
        return results;
    }
}

export const suites: BenchmarkSuite[] = [];

export function suite(name: string, setup: (s: BenchmarkSuite) => void) {
    const s = new BenchmarkSuite(name);
    setup(s);
    suites.push(s);
}
