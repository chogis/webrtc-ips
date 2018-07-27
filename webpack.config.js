const path = require('path');

const outPath = path.resolve(__dirname, 'dist');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const isProd = mode === 'production';
  const filename = isProd ? 'bundle.prod.js' : 'bundle.dev.js';
  return {
    mode,
    entry: './src',
    output: {
      path: outPath,
      library: 'WebRTC_IPs',
      libraryTarget: 'umd',
      filename,
      // see: https://github.com/markdalgleish/static-site-generator-webpack-plugin/issues/130
      globalObject: 'this',
    },
    devtool: isProd ? '' : 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    },
  };
};
