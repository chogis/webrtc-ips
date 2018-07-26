/**
 * Timer
 */

export default class Timer {
  constructor(fn, timeout) {
    this._fn = fn;
    this._timeout = timeout;
    this._timer = null;
  }

  start(fn, timeout) {
    if (this._timer) {
      this.clear();
    }
    fn = fn !== undefined ? fn : this._fn;
    timeout = timeout !== undefined ? timeout : this._timeout;
    this._timer = setTimeout(fn, timeout);
  }

  clear() {
    clearTimeout(this._timer);
  }
}
