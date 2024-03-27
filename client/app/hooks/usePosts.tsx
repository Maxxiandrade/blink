import axios from 'axios';
import React from 'react'
import useProfile from './useProfile';

const usePosts = () => {
    const {fetchData} = useProfile()
    const getPosts = async()=>{
        try {
            const response = await axios.get('http://localhost:3001/getposts');
            const posts = response.data;

            // Obtener perfiles de autores de forma concurrente
            const authorProfiles = await Promise.all(posts.map(async (post:any) => {
                const authorProfile = await fetchData(post.author);
                return { ...post, authorProfile }; // Utiliza el mismo nombre de propiedad "author"
            }));

            const sortedPosts = authorProfiles.sort((a, b) => {
                const dateA = new Date(a.fecha?._seconds * 1000 + (a.fecha?._nanoseconds || 0) / 1000000);
                const dateB = new Date(b.fecha?._seconds * 1000 + (b.fecha?._nanoseconds || 0) / 1000000);
                return dateB.getTime() - dateA.getTime();
            });
            console.log(authorProfiles);
            return sortedPosts;
        } catch (error) {
            console.log(error);
            
        }
    }
    return {getPosts}
}

export default usePosts