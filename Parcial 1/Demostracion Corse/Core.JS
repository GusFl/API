let http = require('http');
 
let servidor = http.createServer(function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.write('Servidor HTTP contestando');
    res.end();
})
servidor.listen(8080);