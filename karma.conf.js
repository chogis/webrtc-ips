
module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    reporters: ['mocha'],
    browsers: [
      'ChromeWithLocalIPsAllowed',
      'FirefoxWithLocalIPsAllowed',
    ],
    customLaunchers: {
      ChromeWithLocalIPsAllowed: {
        base: 'Chrome',
        flags: [
          '--flag-switches-begin',
          '--disable-features=WebRtcHideLocalIpsWithMdns',
          '--flag-switches-end'
        ]
      },
      FirefoxWithLocalIPsAllowed: {
        base: 'Firefox',
        prefs: {
          'media.peerconnection.ice.obfuscate_host_addresses': false
        }
      },
    },
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
