const fs = require('fs');

// Read a file asynchronously
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File content:');
  console.log(data);
});

// Write to a file asynchronously
fs.writeFile('newfile.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been written.');
});
