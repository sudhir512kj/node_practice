// events and eventEmitter

var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent', function(arg1, arg2) {
    console.log(arg1+arg2);
});

setTimeout(function() {
    eventEmitter.emit('myCustomEvent', 'String1 ', 'and String2');
}, 2000)

// document.querySelector('yourTag').onclick = function() {....};

