 const express = require('express');
 const https = require('https');
 const fs = require('fs');
 const path = require('path')
 const app = express();

 const opciones = {
    key: fs.readFileSync(path.join(__dirname,"ssl/key.pem")),
    cert: fs.readFileSync(path.join(__dirname,"ssl/cert.pem"))
 }

app.get("/alumnos",(req,res)=>{
    res.json (respuesta="Contestando a peticion get");
})

app.post("/alumnos",(req,res)=>{
    res.send("Contestando a peticion post");
})

https.createServer(opciones,app).listen(8080,function(){
    console.log("Servidor Express Seguro")
})

