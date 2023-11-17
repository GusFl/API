import { Router } from 'express';
import dotenv from 'dotenv'

const authRouter = Router()
const SECRET_KEY = process.env.SECRET_KEY

authRouter
    .get('/',(req,res)=>{
        res.json({message:'Ruta desprotegida'})
    })

    .post('/login',(req,res)=>{
        const {user,password}=req.body
        console.log('User ${user} is trying to login.')
        if(user == 'admin' && password =='admin'){
            return res.status(201).json({
                token:JsonWebTokenError.sign({user:'admin'},SECRET_KEY)
            })
        }
    })

    .get('/priv/rutaprivada'(req,res),)