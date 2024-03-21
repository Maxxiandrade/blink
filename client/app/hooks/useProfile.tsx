import axios from "axios"


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
    return {setProfile}
}

export default useProfile;