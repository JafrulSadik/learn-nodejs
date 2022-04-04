const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener for bellRing event
emitter.on('bellRing', () => {
    console.log('We need to run');
});

emitter.on('bellRing1', () => {
    console.log('It is emmiter 1');
});

emitter.emit('bellRing1');

// Raise an event
setTimeout(() => {
    emitter.emit('bellRing');
}, 5000);
