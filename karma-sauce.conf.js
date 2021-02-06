// Sauce platform configurator:
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator

const baseFn = require('./karma.conf');

module.exports = function (config) {
  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
    process.exit(1)
  }

  baseFn(config);

  // enable leaking local IP
  // see: https://github.com/karma-runner/karma-sauce-launcher/issues/240
  const chromeOptions = {
    args: [
      '--flag-switches-begin',
      '--disable-features=WebRtcHideLocalIpsWithMdns',
      '--flag-switches-end'
    ]
  };

  const customLaunchers = {
    chrome_latest_win10: {
      base: 'SauceLabs',
      browserName: 'Chrome',
      platform: 'Windows 10',
      version: 'latest',
      'goog:chromeOptions': chromeOptions
    },

    firefox_latest_win10: {
      base: 'SauceLabs',
      browserName: 'Firefox',
      platform: 'Windows 10',
      version: 'latest',
      'moz:firefoxOptions': {
        prefs: {
          'media.peerconnection.ice.obfuscate_host_addresses': false
        }
      }
    },

    chrome_latest_osx: {
      base: 'SauceLabs',
      browserName: 'Chrome',
      platform: 'macOS 10.13',
      version: 'latest',
      'goog:chromeOptions': chromeOptions
    },

    chrome_latest_android: {
      base: 'SauceLabs',
      browserName: 'Chrome',
      appiumVersion: '1.8.1',
      platformName: 'Android',
      platformVersion: '7.0',
      deviceName: 'Samsung Galaxy S7 GoogleAPI Emulator',
      'goog:chromeOptions': chromeOptions
    },

    edge_latest_win10: {
      base: 'SauceLabs',
      browserName: 'MicrosoftEdge',
      platform: 'Windows 10',
      version: 'latest',
      'ms:edgeOptions': chromeOptions
    },

  };

  config.set({
    sauceLabs: {
      testName: 'webrtc-ips',
      recordScreenshots: false,
      public: 'public'
    },
    // Increase timeout in case connection in CI is slow
    captureTimeout: 120 * 1000,
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    reporters: ['dots', 'saucelabs'],
    singleRun: true
  })
};
