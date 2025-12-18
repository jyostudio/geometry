
import * as esbuild from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const entryPoint = path.resolve(__dirname, '../benchmark/index.ts');
const outfile = path.resolve(__dirname, '../benchmark/bundle.js');

async function build() {
    try {
        await esbuild.build({
            entryPoints: [entryPoint],
            outfile: outfile,
            bundle: true,
            format: 'iife', // Immediately Invoked Function Expression for browser
            minify: false,
            sourcemap: true,
            target: ['es2020'],
            platform: 'browser',
        });
        console.log('Benchmark build completed successfully!');
    } catch (error) {
        console.error('Benchmark build failed:', error);
        process.exit(1);
    }
}

build();
