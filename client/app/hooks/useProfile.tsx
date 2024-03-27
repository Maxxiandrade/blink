'use client'
import axios from "axios"
import { useState } from "react"


const useProfile = ()=>{

   
    const setProfile = async(info:object)=>{
        try {
           const result = await axios.post('http://localhost:3001/postprofile', info)
           if(result.data == 'Perfil guardado'){
            localStorage.setItem('profile', 'true')
           }
        } catch (error) {
            console.log(error);  
        }
    }

    const fetchData = async (uid: string | null) => {
        try {
            
            const response = await axios.get(`http://localhost:3001/getuserinfo?uid=${uid}`);    
            return response.data
        } catch (error) {
            console.error('Error al obtener la información del usuario:', error);
        }
    }
    return {setProfile, fetchData}
}

export default useProfile;