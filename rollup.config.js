import commonjs from "@rollup/plugin-commonjs"

export default {
  input: "./src/index.js",
  plugins: [
    commonjs()  
  ],
  output: [
    {
      file: './dist/amiscp.js',
      format: 'umd',
      name: 'amiscp'   
      //当入口文件有export时，'umd'格式必须指定name
      //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
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