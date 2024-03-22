import {Request, Response} from 'express'
const {getAuth, createUserWithEmailAndPassword} = require('firebase/auth')
const {db} = require('../../firebase-config')

const postRegister = async(req:Request, res:Response)=>{
    try {
        const auth = getAuth();
        const {email, password} = req.body;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const uid = userCredential.user.uid;
        await db.collection('usuarios').doc(uid).set({
            email,
            uid,
        });
        res.status(200).json(`${uid}`)
    } catch (error) {
        res.status(400).json(error)
    }
};

module.exports = postRegister;