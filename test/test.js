var test = require('tape')
var arrayBufferToHex = require('../')

test('arrayBufferToHex', function (t) {
  t.plan(1)

  const buffer = new Uint8Array([ 4, 8, 12, 16 ])
  t.equal(arrayBufferToHex(buffer), '04080c10')
})
