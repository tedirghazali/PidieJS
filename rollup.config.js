import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'js/app.js',
  output: [
    {
      file: 'dist/alga.js',
      format: 'es'
    },
    {
      file: 'dist/alga.min.js',
      format: 'es',
      plugins: [terser()]
    },
    {
      file: 'dist/alga-common.js',
      format: 'cjs',
      plugins: [terser()]
    },
    {
      file: 'dist/alga-iife.js',
      format: 'iife',
      name: '_',
      plugins: [terser()]
    },
    {
      file: 'dist/alga-umd.js',
      format: 'umd',
      name: '_',
      plugins: [terser()]
    }
  ],
  plugins: [ resolve(), babel({ babelHelpers: 'bundled' }) ]
};
