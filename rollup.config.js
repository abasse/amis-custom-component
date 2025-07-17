import babel from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs"
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: "./src/index.js",
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'],
      exclude: 'node_modules/**'
    })
  ],
  output: [
    {
      file: './dist/amiscp.js',
      format: 'umd',
      name: 'amiscp'   
      // When the entry file has exports, the 'umd' format must specify a name.
      // This way, when importing via <script> tag, you can access the exported content through the name.
    },
    {
      file: './dist/esm/amiscp.js',
      format: 'es'
    },
    {
      file: './dist/cjs/amiscp.js',
      format: 'cjs'
    }
  ]
}