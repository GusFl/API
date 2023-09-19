 const express = require('express');
 const app = express();

app.get("/alumnos",(req,res)=>{
    res.json (respuesta="Contestando a peticion get en ruta empleado");
})

app.post("/alumnos",(req,res)=>{
    res.send("Contestando a peticion post en ruta empleado");
})

app.listen(8080,()=>{
    console.log("Server express escuchando en el puerto 8080");
})