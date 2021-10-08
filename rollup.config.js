import { createSpaConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-copy';
import gzipPlugin from 'rollup-plugin-gzip';
import { terser } from 'rollup-plugin-terser';

const STATIC_ASSET_REV = '1';

const config = createSpaConfig({
  outputDir: 'dist',
  developmentMode: process.env.ROLLUP_WATCH === 'true',
  injectServiceWorker: true,
});

export default {
  ...config,
  preventAssignment: false,
  input: './src/index.html',
  output: [
    {
      ...config.output[0],
      entryFileNames: '[name]-[hash].js',
      chunkFileNames: '[name]-[hash].js',
      assetFileNames: '[name]-[hash][extname[',
      format: 'es',
      dir: 'dist',
    },
    {
      ...config.output[1],
      entryFileNames: 'nomodule-[name]-[hash].js',
      chunkFileNames: 'nomodule-[name]-[hash].js',
      assetFileNames: 'nomodule-[name]-[hash][extname[',
      format: 'es',
      dir: 'dist',
    },
  ],
  plugins: [
    ...config.plugins,
    gzipPlugin(),
    terser(),
    copy({
      targets: [
        { src: 'src/assets/*', dest: 'dist/assets/' },
        { src: 'src/robots.txt', dest: 'dist/' },
      ],
    }),
  ],
};
