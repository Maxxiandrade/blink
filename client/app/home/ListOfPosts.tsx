'use client'
import React, { useEffect, useState } from 'react'
import usePosts from '../hooks/usePosts'


const ListOfPosts = () => {
    const {getPosts} = usePosts()
    const [posts, setPosts] = useState<any>([])
    useEffect(()=>{
        const fetchPosts = async () => {
            try {
              const data = await getPosts();
            setPosts(data);
            } catch (error) {
              console.error('Error al obtener la información del usuario:', error);
            }
          };
      
          fetchPosts();

         
    },[])
    return (
        <>
        <div className='flex flex-col items-center'>

            {
                posts.map((post: any) => {
                    const fechaEpoch = post.fecha._seconds * 1000 + post.fecha._nanoseconds / 1000000; // Convertir a milisegundos
                    const fechaDate = new Date(fechaEpoch); // Crear objeto de fecha
                    
                    // Formatear la fecha
                    const options: Intl.DateTimeFormatOptions  = {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        timeZone: 'UTC' // Ajusta la zona horaria según sea necesario
                    };
                    
                    const fechaFormateada = fechaDate.toLocaleString('es-ES', options); // Formatear la fecha según la configuración
                    
                    return (
                        <div key={post.uuid} className="mb-4">
                            <p className="text-lg">{post.authorProfile[0].nombre}</p>
                            <p className="text-gray-600">{fechaFormateada}</p>
                        <h1 className="text-md font-bold">{post.body}</h1>
                        </div>
                    )
                })
            }
            <button onClick={getPosts}>Aver</button>
            </div>
        </>
  )
}

export default ListOfPosts