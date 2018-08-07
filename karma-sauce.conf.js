// Sauce platform configurator:
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator

const baseFn = require('./karma.conf');

module.exports = function (config) {
  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
    process.exit(1)
  }

  baseFn(config);

  const customLaunchers = {
    chrome_latest_win10: {
      base: 'SauceLabs',
      browserName: 'Chrome',
      platform: 'Windows 10',
      version: 'latest'
    },

    firefox_latest_win7: {
      base: 'SauceLabs',
      browserName: 'Firefox',
      platform: 'Windows 7',
      version: 'latest'
    },

    chrome_latest_osx: {
      base: 'SauceLabs',
      browserName: 'Chrome',
      platform: 'macOS 10.13',
      version: 'latest'
    },

    chrome_latest_android: {
      base: 'SauceLabs',
      browserName: 'Chrome',
      appiumVersion: '1.8.1',
      platformName: 'Android',
      platformVersion: '7.0',
      deviceName: 'Samsung Galaxy S7 GoogleAPI Emulator',
    },

    // Edge is not supported due to lack of 'createDataChannel' support
    // See: https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/17929639-rtc-data-channels
    // edge_win10: {
    //   base: 'SauceLabs',
    //   browserName: 'MicrosoftEdge',
    //   platform: 'Windows 10',
    //   version: '17'
    // },

    // Safari does not support WebRTC at all :(
    // See: http://iswebrtcreadyyet.com
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
