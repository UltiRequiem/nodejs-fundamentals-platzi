const fs = require('fs');

const FILE = `${__dirname}/hi.txt`;

const readableStream = fs.createReadStream(FILE).setEncoding('utf-8');

readableStream.on('data', (chunk) => console.log(chunk));
