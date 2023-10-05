const express = require('express');
const app = express();
const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

app.use(express.json());
chai.use(chaiHttp);

app.post("/usuario", (req, res) => {
    // Realiza las comprobaciones utilizando Chai
    const { id, correo } = req.body;

    try {
        expect(id).to.be.a('number'); // Comprobar que 'id' sea un número
        expect(correo).to.match(/^\S+@\S+\.\S{2,}$/); // Aceptará correos en el estilo "nombre@dominio.extensión"

        res.json({ mensaje: "Respuesta exito" }); // Respondemos con éxito
    } catch (error) {
        res.json({ error: "Las validaciones de Chai fallaron" }); // Respondemos en caso de error de aserción
    }
});

app.listen(8080, () => {
    console.log("Servidor Express escuchando");
});


