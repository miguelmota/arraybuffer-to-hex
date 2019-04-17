;(function (root) {
  function arrayBufferToHex(buffer) {
    const byteArray = new Uint8Array(buffer)
    const hexCodes = [...byteArray].map(value => {
      return value.toString(16).padStart(2, '0')
    })

    return hexCodes.join('')
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = arrayBufferToHex
    }
    exports.arrayBufferToHex = arrayBufferToHex
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return arrayBufferToHex
    })
  } else {
    root.arrayBufferToHex = arrayBufferToHex
  }
})(this);
