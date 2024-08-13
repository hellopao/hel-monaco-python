/*
|--------------------------------------------------------------------------
|
| 生成meta
|
|--------------------------------------------------------------------------
*/
const process = require('process');
const path = require('path');
const helDevUtils = require('hel-dev-utils');
const packageJson = require('../package.json');

const subApp = helDevUtils.createLibSubApp(packageJson, { npmCdnType: 'unpkg' });

helDevUtils.extractHelMetaJson({
  appInfo: subApp,
  buildDirFullPath: path.join(__dirname, '../dist'),
  packageJson,
}).catch(err => {
  console.error(err);
  process.exit(-1);
});
