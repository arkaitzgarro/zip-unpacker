'use strict'

class ZipUnpacker {

  constructor () {
    this._options = {}
  }

  set options (options) {
    this._options = options
  }

  get options () {
    return this._options
  }
}

export default new ZipUnpacker()
export {ZipUnpacker}
