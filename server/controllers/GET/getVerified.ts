const { db } = require('../../firebase-config');
const { getAuth, onAuthStateChanged } = require('firebase/auth');
import {Request, Response} from 'express'

const getVerified = async (req: Request, res: Response) => {
    try {
        const auth = getAuth()
        const isVerified = auth.currentUser?.emailVerified
       res.status(200).json(isVerified)
    } catch (error) {
        res.status(400).json(`Email no validado`);
    }
}

module.exports = getVerified;