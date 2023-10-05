const express = require('express');
const { check,validationResult } = require('express-validator');
const app = express();
app.use(express.json());

app.post("/usuario",[check('id').isNumeric(),check('correo').isEmail()],(req,res)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        console.log(req.body);
        res.json({mensaje:"Respuesta a peticion post"});
    } else{
        res.json(result);
    }
    
   

});

app.listen(8084,()=>{
    console.log("servidor express escuchando")
});

app.get("/Error",(req,res,next)=>{
    try{
        throw new Error("Error prueba")
    } catch(error){
        next(error)
    }
});

app.use((err,req,res,next)=>{
    console.error(err.stacck);

    res.status(500).send("Error en servidor:"+err.message);
});
