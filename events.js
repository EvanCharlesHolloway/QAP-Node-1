const EventEmitter = require('events');

// Create a custom event emitter
const myEmitter = new EventEmitter();

// Define an event handler
myEmitter.on('customEvent', (message) => {
  console.log(`Received message: ${message}`);
});

// Emit the custom event
myEmitter.emit('customEvent', 'This is a custom event.');
