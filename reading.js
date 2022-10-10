//* Streams = objects we can use to read data from source or write data to destination.
//* Readable - Stream used for read operation.
//* Writable - Stream used for write operation.
//* Duplex - Used for both read/write.
//* Transform - Type of duplex where output is computed based on input.

//* Each type of stream is an EventEmitter and throws several events, Example of some:
//* Data - Event fired when data is available to read.
//* End - Event fired when there is no more data to read.
//* Error - Event fired when there is any error reading OR writing data.
//* Finish - Event fired when all data has been processed.

var fs = require('fs');
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8.
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
//* Here we can obviously add our own function if we want.
readerStream.on('data', function (chunk) {
  data += chunk;
});

readerStream.on('end', function () {
  console.log(data);
});

readerStream.on('error', function (err) {
  console.log(err.stack);
});

console.log('Program Ended');
