const maboii = require('maboii');
const fs = require('fs');

// Read keys from file
let fileBuffer = fs.readFileSync('./keys.bin');
let keyData = [...fileBuffer];
console.log(keyData);

const keys = maboii.loadMasterKeys(keyData);
console.log('Keys', keys);

// let dumpFileBuffer = fs.readFileSync('./text.bin');
// let unpackResult = maboii.unpack(keys, [...dumpFileBuffer]);

// // If decrypt is successful
// if (unpackResult.result) {
//   console.log(unpackResult.unpacked);
//   // The plain data is available through unpackResult.unpacked
// }
