const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const createFolder = function(to) { //文件写入
  const sep = path.sep
  const folders = path.dirname(to).split(sep);
  let p = '';
  while (folders.length) {
    p += folders.shift() + sep;
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p);
    }
  }
};

module.exports = function (config) {
  // config.plugins.push(
  //   new webpack.DllReferencePlugin({
  //     manifest:require(path.resolve(__dirname,'dll','manifest.json'))
  //   })
  // );
  createFolder('./out.txt');
  fs.writeFile('./out.txt',JSON.stringify(config))
  return config
}
