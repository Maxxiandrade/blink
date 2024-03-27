'use client'
import React, { useEffect } from 'react';
import useAuth from '../hooks/useIsAuthed';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import CreatePost from './CreatePost';
import ListOfPosts from './ListOfPosts';

const Home = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const uid = localStorage.getItem('uid')
  
  const isAuth = localStorage.getItem('isAuth')
  const profile = localStorage.getItem('profile')
  useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
     if(profile == 'false'){
      router.push('/perfil/crearperfil')
    }
  }, [profile]);
 
   const handleLogout = async()=>{
    localStorage.removeItem('isAuth')
    localStorage.removeItem('uid')
    localStorage.removeItem('profile')
     await axios.post('http://localhost:3001/logout')
     router.push('/')
   }
  return (
    <>
    <div className='flex justify-center'>
      <CreatePost/>
    </div>
    <br />
    <div className='flex justify-center'>
      <ListOfPosts/>
    </div>
    <div className='flex justify-center'>
      <button className='size-96 bg-yellow-600' onClick={handleLogout}>Cerrar sesión</button>
      <br />
    </div>
    {uid}
  </>
  );
};

export default Home;
