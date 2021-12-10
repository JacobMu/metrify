import esbuild from 'esbuild';

esbuild.build({
  bundle: true,
  entryPoints: ['./src/contentScript.ts'],
  outdir: 'build',
  target: 'es2020',
  format: 'iife',
  platform: 'browser',
  sourcemap: true,
  treeShaking: true,
  logLevel: 'debug',
});
esbuild.build({
  bundle: true,
  entryPoints: ['./src/backgroundScript.ts'],
  outdir: 'build',
  format: 'esm',
  platform: 'browser',
  sourcemap: true,
  treeShaking: true,
  splitting: true,
  logLevel: 'debug',
});
esbuild.build({
  bundle: true,
  entryPoints: ['./src/treeWalker/traversingService.ts'],
  outdir: 'build',
  format: 'esm',
  platform: 'browser',
  sourcemap: true,
  treeShaking: true,
  logLevel: 'debug',
  splitting: true,
});
