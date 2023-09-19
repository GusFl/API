const express = require('express');
const morgan = require ('morgan');
const fs = require('fs');
var cors=require('cors')
const path = require('path');
const mysql = require('mysql2/promise');
const app = express();
app.use(cors())


var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'),{flags:'a'})
app.use(morgan('combined', {stream: accessLogStream}));

app.get("/usuarios", async(req,res)=>{
    try{
        const conn = await mysql.createConnection({host:'localhost', user:'root',password:'',database:'apix', port:3307})
        const [rows,fields] = await conn.query('SELECT * from usuario');
        res.json(rows);
    } catch{
        res.json({mensaje:"Error de conexion"});
    }
});

app.get("/usuarios/:id", async (req,res)=>{
    console.log(req.params.id);
    const conn = await mysql.createConnection({host:'localhost', user:'root', password:'', database:'apix',port:3307})
    const [rows,fields] = await conn.query('SELECT * from usuario where idusuario='+req.params.id);
    if(rows.length==0){
        res.json({mensaje:"Usuario no existe"});
    } else {
        res.json(rows);
    }
});

app.delete("/usuarios", async (req, res) => {
    console.log(req.query);
    const idUsuario = req.query.idusuario;
    try {
        // Crea una conexión a la base de datos
        const conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'apix',
            port: 3307
        });
        const [result] = await conn.query('DELETE FROM usuario WHERE idusuario = ?', [idUsuario]);

        // Comprueba si se eliminó un registro
        if (result.affectedRows === 1) {
            res.json({ mensaje: "Registro eliminado correctamente" });
        } else {
            res.json({ mensaje: "No se encontró ningún registro para eliminar" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error de conexión" });
    }
});

app.listen(8080,()=>{
    console.log("Server express escuchando en el puerto 8080");
})