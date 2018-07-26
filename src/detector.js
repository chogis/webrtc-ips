import PromiseController from 'promise-controller';
import ipRegex from 'ip-regex';
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

  getIPs() {
    return this._detecting.call(() => {
      this._ips = [];
      this._peer.open();
      this._timer.start(() => this._finish());
      this._detecting.promise.catch(() => this._cleanup());
    });
  }

  _finish() {
    this._detecting.resolve(this._ips);
    this._cleanup();
  }

  _handleCandidate(info) {
    const matches = ipRegex({exact: false}).exec(info);
    if (matches) {
      this._push(matches[0]);
    }
  }

  _push(address) {
    const exists = this._ips.some(ip => ip.address === address);
    if (!exists) {
      const v6 = ipRegex.v6({exact: true}).test(address);
      this._ips.push({address, v6});
    }
  }

  _cleanup() {
    this._peer.close();
    this._timer.clear();
  }
}

export default new Detector();
