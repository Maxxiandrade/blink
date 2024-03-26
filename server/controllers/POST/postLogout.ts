import { Request, Response } from 'express';
const {getAuth, signOut} = require('firebase/auth')

const postLogout = async(req:Request, res:Response)=>{
    try {
        const auth = getAuth();
        signOut(auth)
        res.status(200).json('Sesion cerrada exitosamente')
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = postLogout