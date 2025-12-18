import * as esbuild from 'esbuild';

try {
    await esbuild.build({
        entryPoints: ['test/all.ts'],
        bundle: true,
        outfile: 'test/bundle.js',
        sourcemap: true,
        format: 'iife',
        target: ['es2020'],
        platform: 'browser',
    });
    console.log('Test bundle built successfully.');
} catch (e) {
    console.error('Build failed:', e);
    process.exit(1);
}
