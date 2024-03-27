import { Request, Response } from "express"
const {db} = require('../../firebase-config')

const getPosts = async(req:Request,res:Response)=>{
    try {
        const postsRef = await db.collection('post').get();
        const postsData = postsRef.docs.map((doc: any) => ({
            id: doc.id,
            ...doc.data()
        }));
        res.status(200).json(postsData)
    } catch (error) {
        res.status(400).json(`Error: ${error}`)
    }
};

module.exports = getPosts;