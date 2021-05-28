const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//on - listens to an event
// emit - emit an event

customEmitter.on('response', () => {
    console.log('data received')
})

customEmitter.emit('response');