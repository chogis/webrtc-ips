(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WebRTC_IPs"] = factory();
	else
		root["WebRTC_IPs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/promise-controller/lib/bundle.prod.js":
/*!************************************************************!*\
  !*** ./node_modules/promise-controller/lib/bundle.prod.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();var r=i(1),o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=Object.assign({},r,t),this._resolve=null,this._reject=null,this._isPending=!1,this._isFulfilled=!1,this._isRejected=!1,this._value=void 0,this._promise=null,this._timer=null}return n(e,[{key:"call",value:function(e){return this._isPending||(this.reset(),this._createPromise(),this._createTimer(),this._callFn(e)),this._promise}},{key:"resolve",value:function(e){this._isPending&&(s(e)?this._tryAttachToPromise(e):(this._settle(e),this._isFulfilled=!0,this._resolve(e)))}},{key:"reject",value:function(e){this._isPending&&(this._settle(e),this._isRejected=!0,this._reject(e))}},{key:"reset",value:function(){this._isPending&&this.reject(new Error(this._options.resetReason)),this._promise=null,this._isPending=!1,this._isFulfilled=!1,this._isRejected=!1,this._value=void 0,this._clearTimer()}},{key:"configure",value:function(e){Object.assign(this._options,e)}},{key:"_createPromise",value:function(){var e=this;this._promise=new Promise(function(t,i){e._isPending=!0,e._resolve=t,e._reject=i})}},{key:"_handleTimeout",value:function(){var e=this._options.timeoutReason;if("function"==typeof e)e();else{var t="string"==typeof e?new Error(e):e;this.reject(t)}}},{key:"_createTimer",value:function(){var e=this;this._options.timeout&&(this._timer=setTimeout(function(){return e._handleTimeout()},this._options.timeout))}},{key:"_clearTimer",value:function(){this._timer&&(clearTimeout(this._timer),this._timer=null)}},{key:"_settle",value:function(e){this._isPending=!1,this._value=e,this._clearTimer()}},{key:"_callFn",value:function(e){if("function"==typeof e)try{var t=e();this._tryAttachToPromise(t)}catch(e){this.reject(e)}}},{key:"_tryAttachToPromise",value:function(e){var t=this;s(e)&&e.then(function(e){return t.resolve(e)},function(e){return t.reject(e)})}},{key:"promise",get:function(){return this._promise}},{key:"value",get:function(){return this._value}},{key:"isPending",get:function(){return this._isPending}},{key:"isFulfilled",get:function(){return this._isFulfilled}},{key:"isRejected",get:function(){return this._isRejected}},{key:"isSettled",get:function(){return this._isFulfilled||this._isRejected}}]),e}();function s(e){return e&&"function"==typeof e.then}e.exports=o},function(e,t,i){"use strict";e.exports={timeout:0,timeoutReason:"Promise rejected by timeout",resetReason:"Promise rejected by reset"}}])});

/***/ }),

/***/ "./src/detector.js":
/*!*************************!*\
  !*** ./src/detector.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _promiseController = __webpack_require__(/*! promise-controller */ "./node_modules/promise-controller/lib/bundle.prod.js");

var _promiseController2 = _interopRequireDefault(_promiseController);

var _ipRegex = __webpack_require__(/*! ./ip-regex */ "./src/ip-regex.js");

var _peer = __webpack_require__(/*! ./peer */ "./src/peer.js");

var _peer2 = _interopRequireDefault(_peer);

var _timer = __webpack_require__(/*! ./timer */ "./src/timer.js");

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DETECTION_TIME = 1000;

var Detector = function () {
  function Detector() {
    var _this = this;

    _classCallCheck(this, Detector);

    this._ips = [];
    this._peer = new _peer2.default(function (info) {
      return _this._handleCandidate(info);
    });
    this._detecting = new _promiseController2.default();
    this._timer = new _timer2.default(null, DETECTION_TIME);
  }

  _createClass(Detector, [{
    key: 'getIPs',
    value: function getIPs(urls) {
      var _this2 = this;

      return this._detecting.call(function () {
        _this2._ips = [];
        _this2._peer.open(urls);
        _this2._timer.start(function () {
          return _this2._finish();
        });
        _this2._detecting.promise.catch(function () {
          return _this2._cleanup();
        });
      });
    }
  }, {
    key: '_finish',
    value: function _finish() {
      this._detecting.resolve(this._ips);
      this._cleanup();
    }
  }, {
    key: '_handleCandidate',
    value: function _handleCandidate(info) {
      var _arr = [_ipRegex.IPV4_REGEX, _ipRegex.IPV6_REGEX];

      for (var _i = 0; _i < _arr.length; _i++) {
        var reg = _arr[_i];
        var matches = reg.exec(info);
        if (matches) {
          this._push(matches[0], reg === _ipRegex.IPV6_REGEX);
          return;
        }
      }
    }
  }, {
    key: '_push',
    value: function _push(address, v6) {
      var exists = this._ips.some(function (ip) {
        return ip.address === address;
      });
      if (!exists) {
        this._ips.push({ address: address, v6: v6 });
      }
    }
  }, {
    key: '_cleanup',
    value: function _cleanup() {
      this._peer.close();
      this._timer.clear();
    }
  }]);

  return Detector;
}();

exports.default = new Detector();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIPs = getIPs;
exports.getIPv4 = getIPv4;
exports.getIPv6 = getIPv6;

var _detector = __webpack_require__(/*! ./detector */ "./src/detector.js");

var _detector2 = _interopRequireDefault(_detector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIPs(urls) {
  return _detector2.default.getIPs(urls);
}

function getIPv4() {
  return getIPs().then(function (ips) {
    var ip = ips.find(function (ip) {
      return !ip.v6;
    });
    return ip ? ip.address : '';
  });
}

function getIPv6() {
  return getIPs().then(function (ips) {
    var ip = ips.find(function (ip) {
      return ip.v6;
    });
    return ip ? ip.address : '';
  });
}

/***/ }),

/***/ "./src/ip-regex.js":
/*!*************************!*\
  !*** ./src/ip-regex.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * See: https://bitbucket.org/intermapper/ipv6-validator/overview
 */

var IPV4_REGEX = exports.IPV4_REGEX = /((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])/;
// eslint-disable-next-line  max-len
var IPV6_REGEX = exports.IPV6_REGEX = /((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))/;

/***/ }),

/***/ "./src/peer.js":
/*!*********************!*\
  !*** ./src/peer.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Opens WebRTC connection to get candidates (with IPs)
 */
var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

var Peer = function () {
  function Peer(onCandidate) {
    _classCallCheck(this, Peer);

    this._rtcPeerConnection = null;
    this._onCandidate = onCandidate;
  }

  _createClass(Peer, [{
    key: 'open',
    value: function open(urls) {
      this._createRTCConnection(urls);
      this._makeStunRequest();
    }
  }, {
    key: 'close',
    value: function close() {
      if (this._rtcPeerConnection) {
        try {
          this._rtcPeerConnection.close();
        } finally {
          this._rtcPeerConnection.onicecandidate = function () {};
          this._rtcPeerConnection = null;
        }
      }
    }
  }, {
    key: '_createRTCConnection',
    value: function _createRTCConnection(urls) {
      var _this = this;

      // Chrome and Firefox works with empty iceServers
      // Although some examples use [{urls: 'stun:stun.services.mozilla.com'}]
      var iceServers = urls ? [urls] : [];
      this._rtcPeerConnection = new RTCPeerConnection({ iceServers: iceServers });
      this._rtcPeerConnection.onicecandidate = function (ice) {
        return _this._handleCandidate(ice);
      };
      this._rtcPeerConnection.createDataChannel('');
    }
  }, {
    key: '_makeStunRequest',
    value: function _makeStunRequest() {
      var _this2 = this;

      return this._rtcPeerConnection.createOffer().then(function (offer) {
        return _this2._rtcPeerConnection.setLocalDescription(offer);
      });
    }
  }, {
    key: '_handleCandidate',
    value: function _handleCandidate(ice) {
      var info = ice && ice.candidate && ice.candidate.candidate;
      if (info) {
        this._onCandidate(info);
      }
    }
  }]);

  return Peer;
}();

exports.default = Peer;

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Timer
 */

var Timer = function () {
  function Timer(fn, timeout) {
    _classCallCheck(this, Timer);

    this._fn = fn;
    this._timeout = timeout;
    this._timer = null;
  }

  _createClass(Timer, [{
    key: "start",
    value: function start(fn, timeout) {
      if (this._timer) {
        this.clear();
      }
      fn = fn !== undefined ? fn : this._fn;
      timeout = timeout !== undefined ? timeout : this._timeout;
      this._timer = setTimeout(fn, timeout);
    }
  }, {
    key: "clear",
    value: function clear() {
      clearTimeout(this._timer);
    }
  }]);

  return Timer;
}();

exports.default = Timer;

/***/ })

/******/ });
});
//# sourceMappingURL=bundle.dev.js.map