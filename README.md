# arraybuffer-to-hex

> Convert [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) to hex string

## Install

```bash
npm install @npmlib/arraybuffer-to-hex
```

## Getting started

```javascript
const arrayBufferToHex = require('arraybuffer-to-hex')

const buffer = new Uint8Array([4, 8, 12, 16])
console.log(arrayBufferToHex(buffer)) // "04080c10"
```

## License

[MIT](LICENSE)
