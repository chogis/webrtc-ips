import PromiseController from 'promise-controller';
import {IPV4_REGEX, IPV6_REGEX} from './ip-regex';
import Peer from './peer';
import Timer from './timer';

const DETECTION_TIME = 1000;

class Detector {
  constructor() {
    this._ips = [];
    this._peer = new Peer(info => this._handleCandidate(info));
    this._detecting = new PromiseController();
    this._timer = new Timer(null, DETECTION_TIME);
  }

  getIPs(urls) {
    return this._detecting.call(() => {
      this._ips = [];
      this._peer.open(urls);
      this._timer.start(() => this._finish());
      this._detecting.promise.catch(() => this._cleanup());
    });
  }

  _finish() {
    this._detecting.resolve(this._ips);
    this._cleanup();
  }

  _handleCandidate(info) {
    for (let reg of [IPV4_REGEX, IPV6_REGEX]) {
      const matches = reg.exec(info);
      if (matches) {
        this._push(matches[0], reg === IPV6_REGEX);
        return;
      }
    }
  }

  _push(address, v6) {
    const exists = this._ips.some(ip => ip.address === address);
    if (!exists) {
      this._ips.push({address, v6});
    }
  }

  _cleanup() {
    this._peer.close();
    this._timer.clear();
  }
}

export default new Detector();

