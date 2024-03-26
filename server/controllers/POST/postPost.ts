import {Request, Response} from 'express'
const {db, fs} = require('../../firebase-config')
const {doc, Timestamp, arrayUnion, updateDoc} = require('firebase/firestore')

const postPost = async(req:Request, res:Response)=>{
    try {

        const {uuid, body, author} = req.body;
        // Obtener la referencia del documento del usuario
        const userRef = doc(fs, 'usuarios', author);

        // Actualizar el array de posts personales del usuario
        await updateDoc(userRef, {
            // Utilizar arrayUnion para agregar el UUID del nuevo post al array posts
            posts: arrayUnion(uuid)
        });
        const currentDate = Timestamp.now().toDate();

        await db.collection('post').doc(uuid).set({
           fecha: currentDate,
           uuid,
           body,
           author
        });
        res.status(200).json(`Post guardado`)
    } catch (error) {
        res.status(400).json(`Error : ${error}`)
    }
};

module.exports = postPost;