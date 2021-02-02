# WebRTC IPs
[![Build Status](https://travis-ci.org/vitalets/webrtc-ips.svg?branch=master)](https://travis-ci.org/vitalets/webrtc-ips)
[![npm](https://img.shields.io/npm/v/webrtc-ips.svg)](https://www.npmjs.com/package/webrtc-ips)
[![license](https://img.shields.io/npm/l/webrtc-ips.svg)](https://www.npmjs.com/package/webrtc-ips)

A library to detect your local IP address via WebRTC on the web page.

## Security notes
All modern browsers now require special flags to allow leaking local IP address.

### Chrome:
Set `enable-webrtc-hide-local-ips-with-mdns` to `disabled` on `chrome://flags` page.

Or run chrome with arguments:
`--flag-switches-begin --disable-features=WebRtcHideLocalIpsWithMdns --flag-switches-end`

### Firefox:
Set `media.peerconnection.ice.obfuscate_host_addresses` to `false` on `about:config` page.

### Safari:
Set `Disable ICE Candidate Restrictions` in `Developer` menu.
<details>
  <summary>Screenshot</summary>

![image](https://user-images.githubusercontent.com/1473072/106584660-800fa080-6557-11eb-96da-74d1a7ca5bb6.png)
</details>

## Live demo
https://vitalets.github.io/webrtc-ips/demo/

> Please ensure that you enabled browser flags from previous section

## Installation
```bash
npm i webrtc-ips
```

## Usage
```js
import {getIPs, getIPv4, getIPv6} from 'webrtc-ips';

const ips = await getIPs();
// => [{address: '95.108.174.12', v6: false}, {address: '2a02:6b8::408:5830:47a6:d045:a9ac', v6: true}]

// You can pass in your custom stun server urls
const ips = await getIPs({ urls: "stun:stun.stunprotocol.org:3478" });
// => [{address: '95.108.174.12', v6: false}, {address: '2a02:6b8::408:5830:47a6:d045:a9ac', v6: true}]

const ipv4 = await getIPv4();
// => '95.108.174.12'

const ipv6 = await getIPv6();
// => '2a02:6b8::408:5830:47a6:d045:a9ac'

```

## Credits
This is a fork of original [diafygi/webrtc-ips](https://github.com/diafygi/webrtc-ips) project
with refactored source code, added tests and published to npm.

## Related links
* [WebRTC on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
* [Is WebRTC ready yet?](http://iswebrtcreadyyet.com)

## License
MIT
