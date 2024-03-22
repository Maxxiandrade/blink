'use client'
import React, { useEffect } from 'react';
import useAuth from '../hooks/useIsAuthed';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const uid = localStorage.getItem('uid')
  const handleLogout =  () => {
    try {
       logout();
      router.push('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
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
 
  return (
    <>
    <div className='flex justify-center '>
      <button className='size-96 bg-yellow-600' onClick={handleLogout}>Cerrar sesión</button>
      <br />
    </div>
      {uid}
    </>
  );
};

export default Home;
