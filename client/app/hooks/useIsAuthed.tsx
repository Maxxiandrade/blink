import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuth');
    if (storedAuth) {
      setIsAuth(JSON.parse(storedAuth));
    }
  }, []);

  const login = async(uid:string) => {
    localStorage.setItem('isAuth', 'true');
    setIsAuth(true);
    localStorage.setItem('uid', uid)
    try {
      const result = await axios.get(`http://localhost:3001/getprofile?uid=${uid}`)
      if(result.data == 'true'){
        localStorage.setItem('profile', 'true')
      }else{
        localStorage.setItem('profile','false')
      }
      console.log(result.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('profile');
    localStorage.removeItem('uid');
    setIsAuth(false);
  };

  const verifyEmail = async()=>{
    try {
      const result = await axios.get('http://localhost:3001/getverified')
      if(result.data == true){
        localStorage.setItem('email', 'verified')
      } else{
        localStorage.setItem('email','false')
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return { isAuth, login, logout, verifyEmail };
};

export default useAuth;
