
module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    reporters: ['mocha'],
    browsers: [
      'Chrome',
      'Firefox',
    ],
    files: [
      'test/test.js'
    ],
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'test/**/*.js': ['webpack']
    },
    webpack: {
      mode: 'development',
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
    },
    singleRun: true,
  });
};
