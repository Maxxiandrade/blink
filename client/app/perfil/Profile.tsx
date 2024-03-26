'use client'
import React, { useEffect, useState } from 'react';
import useProfile from '../hooks/useProfile';

// Definir un tipo para la información del usuario
interface UserInfo {
  nombre: string;
  pronombres: string;
  descripcion: string;
  // Otras propiedades si las hay
}

const Profile = () => {
  const [userInfo, setUserInfo] = useState<UserInfo[]>([]); // Especifica el tipo UserInfo[] para userInfo
  const { fetchData } = useProfile();
  const uid = localStorage.getItem('uid');
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData(uid);
        setUserInfo(data);
      } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
      }
    };

    fetchUserData();
  }, [fetchData, uid]);
  
  return (
    <div>
      {Array.isArray(userInfo) && userInfo.length > 0 && (
        <>
        <div className='border border-sky-100 justify-center item'>
          <h1 className='text-4xl'>{userInfo[0]?.nombre}</h1>
          <h2 className='text-3xl'>({userInfo[0]?.pronombres})</h2>
          <h2>{userInfo[0]?.descripcion}</h2>
        </div>
        </>
      )}
    </div>
  );
};

export default Profile;
