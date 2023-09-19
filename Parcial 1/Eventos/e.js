const events = require('events');
const emisor = new events.EventEmitter();

emisor.on('saluda',(nombre)=>{
    console.log('Hola'+nombre)
});

emisor.addListener('saluda',(nombre)=>{
    console.log('Hola'+nombre)
});

emisor.emit('saluda',' Gustavo');