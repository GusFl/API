const events = require('events');

function saludar(){
const emisor = new events.EventEmitter();
setTimeout(()=>emisor.emit('saluda',' Gustavo'),1000);
setTimeout(()=>emisor.emit('saluda',' Gustavo'),3000);
setTimeout(()=>emisor.emit('saluda',' Gustavo'),5000);
return emisor;
}

let sal=saludar();

sal.on('saluda',(nombre)=>{
    console.log('Hola'+nombre)
});

sal.addListener('saluda',(nombre)=>{
    console.log('Hola'+nombre)
});

