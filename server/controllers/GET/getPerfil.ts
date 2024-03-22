import { Request, Response } from 'express';
const { db } = require('../../firebase-config');

const getProfile = async (req: Request, res: Response) => {
        try {
            const { uid } = req.query;
    
            // Crear una referencia al documento en la colección "usuarios" usando el UID
            const docRef = db.collection('usuarios').doc(uid);
    
            // Obtener el documento
            const docSnap = await docRef.get();
            const perfil = docSnap.data().perfil
            // Devolver true si el documento tiene la propiedad "perfil", de lo contrario, false
            if(perfil){
             res.status(200).json('true');}
             else{
                res.status(200).json(false)
             }
        } catch (error) {
         res.status(400).json(`Error al buscar al usuario: ${error}`);
    }
}

module.exports = getProfile;