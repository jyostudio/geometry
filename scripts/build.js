import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, '../src');
const distDir = path.resolve(__dirname, '../dist');
const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8'));

// Get all .ts files in src directory
const entryPoints = fs.readdirSync(srcDir)
    .filter(file => file.endsWith('.ts'))
    .map(file => path.join(srcDir, file));

async function build() {
    try {
        await esbuild.build({
            entryPoints: entryPoints,
            outdir: distDir,
            bundle: true, // Bundle to handle dependencies and path rewriting
            splitting: true, // Enable code splitting for shared chunks
            format: 'esm', // Output ESM
            minify: true, // Minify output
            sourcemap: true, // Generate source maps
            target: ['es2020'], // Target modern environments
            platform: 'browser', // Neutral platform (works for browser and node)
            mainFields: ['module', 'main'], // Explicitly configure main fields for neutral platform
        });
        console.log('Build completed successfully!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

build();