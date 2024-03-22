import {Request, Response} from 'express'
const {db} = require('../../firebase-config')

const postPerfil = async(req:Request, res:Response)=>{
    try {
        const { nombre, pronombres, descripcion, uid } = req.body;

        // Obtener referencia al documento del usuario
        const userRef = db.collection('usuarios').doc(uid);
   
        const userDoc = await userRef.get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'El usuario no existe.' });
        }
        await userRef.update({
            perfil: {
                nombre,
                pronombres,
                descripcion
            }
        });

        res.status(200).json('Perfil guardado');
    } catch (error) {
        res.status(400).json(`Eror ${error}`)
    }
};

module.exports = postPerfil;