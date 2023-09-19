const EventEmitter = require('events');

class Saludo extends EventEmitter{
saludar(){
setTimeout(()=>this.emit('saluda',' Gustavo'),1000);
setTimeout(()=>this.emit('saluda',' Gustavo'),3000);
setTimeout(()=>this.emit('saluda',' Gustavo'),5000);
}
}
const sal=new Saludo();


sal.on('saluda',(nombre)=>{
    console.log('Hola'+nombre)
});

sal.saludar();