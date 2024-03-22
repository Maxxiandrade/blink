'use client'
import React, { useEffect, useState } from 'react';
import useProfile from '../hooks/useProfile';

const Profile = () => {
  const { fetchData } = useProfile();
  const [userData, setUserData] = useState(null);
  let uid = localStorage.getItem('uid');
  if (uid) {
    uid = JSON.parse(uid)
  }

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const uid1 = uid // Asigna un valor válido a uid
        if (!uid1) return; // Salir si uid es null o undefined

        const data = await fetchData(uid1);
        setUserData(data);
      } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
      }
    };

    fetchDataAsync();
  }, [fetchData]);

  return (
    <div>
      {/* Renderiza los datos del usuario aquí */}
      {userData && (
        <>
          <h1>{userData}</h1>
          {/* <p>{userData.email}</p> */}
          {/* Renderiza otros datos del usuario aquí */}
        </>
      )}
    </div>
  );
};

export default Profile;
