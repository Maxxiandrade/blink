import { Request, Response } from 'express';
const { auth } = require('../../firebase-config');
const {signInWithEmailAndPassword} = require('firebase/auth')
const postLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Iniciar sesión con el correo electrónico y contraseña proporcionados
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Si se inicia sesión correctamente, devolver el UID del usuario
        return res.status(200).json(user.uid);
    } catch (error) {
        // Si hay un error al iniciar sesión, devolver el mensaje de error
        return res.status(400).json(`Error al iniciar sesión: email no encontrado` );
    }
};

module.exports = postLogin;