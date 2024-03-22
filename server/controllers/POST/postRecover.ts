import {Request, Response} from 'express'
const {getAuth, sendPasswordResetEmail } = require('firebase/auth')


const postRecover = async(req:Request, res:Response)=>{
    try {
        const auth = getAuth()
        const {email} = req.body
        await sendPasswordResetEmail(auth, email);
        res.status(200).json('Email de recuperacion enviado.')
    } catch (error) {
        res.status(400).json(error)
    }
};

module.exports = postRecover;