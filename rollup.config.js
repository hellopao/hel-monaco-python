const typescript = require('@rollup/plugin-typescript').default;
const helDevUtils = require('hel-dev-utils');

const plugins = [
  typescript(),
];

module.exports = [{
  input: 'src/entrance/libTypes.ts',
  plugins,
  output: {
    format: 'esm',
    name: 'hel-monaco-python',
    file: `${helDevUtils.cst.HEL_PROXY_DIR}_es/entry.js`,
  }
},
{
  input: 'src/entrance/libTypes.ts',
  plugins,
  output: {
    format: 'umd',
    name: 'hel-monaco-python',
    file: `${helDevUtils.cst.HEL_PROXY_DIR}_es/entry.js`,
  }
}];
