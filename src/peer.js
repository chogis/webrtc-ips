/**
 * Opens WebRTC connection to get candidates (with IPs)
 */
const RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

export default class Peer {
  constructor(onCandidate) {
    this._rtcPeerConnection = null;
    this._onCandidate = onCandidate;
  }

  open(urls) {
    this._createRTCConnection(urls);
    this._makeStunRequest();
  }

  close() {
    if (this._rtcPeerConnection) {
      try {
        this._rtcPeerConnection.close();
      } finally {
        this._rtcPeerConnection.onicecandidate = () => {};
        this._rtcPeerConnection = null;
      }
    }
  }

  _createRTCConnection(urls) {
    // Chrome and Firefox works with empty iceServers
    // Although some examples use [{urls: 'stun:stun.services.mozilla.com'}]
    const iceServers = urls ? [urls] : [];
    this._rtcPeerConnection = new RTCPeerConnection({iceServers});
    this._rtcPeerConnection.onicecandidate = ice => this._handleCandidate(ice);
    this._rtcPeerConnection.createDataChannel('');
  }

  _makeStunRequest() {
    return this._rtcPeerConnection.createOffer()
      .then(offer => this._rtcPeerConnection.setLocalDescription(offer));
  }

  _handleCandidate(ice) {
    const info = ice && ice.candidate && ice.candidate.candidate;
    if (info) {
      this._onCandidate(info);
    }
  }
}
