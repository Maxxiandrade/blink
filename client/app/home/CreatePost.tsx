import Image from "next/image";
import React, { useState } from "react";
import {v4 as uuid} from "uuid"
import axios from "axios";

function CreatePost() {
   const uid = localStorage.getItem('uid')
  const [toggleForm, setToggleForm] = useState(false);
  const [postForm, setPostForm] = useState({
    uuid:'',
    body: "",
    author: uid
});

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
  
    setPostForm((prevPostForm) => ({
      ...prevPostForm,
      uuid: uuid(),
      [name]: value,
    }));
  
    // Verifica si el campo de texto no está vacío para mostrar el botón
    setToggleForm(value !== "");
  };
  
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setPostForm((prevPostForm) => ({
        ...prevPostForm,
      body:''
      }))
    
    await axios.post('http://localhost:3001/postpost', postForm)
    
  }

  return (
    <form action="" className="flex" onSubmit={handleSubmit}>
        <Image src="/avatar1.jpg" alt="" width={200} height={200} className="rounded-full h-14 w-14 mr-5"/>
      <textarea
        name="body"
        value={postForm.body}
        onChange={handleChange}
        placeholder="Comparte tu idea!"
        className="border border-gray-300 rounded-md px-4 py-2 w-96 text-white bg-black resize-none"
      />
      {toggleForm && (
        <button
          className={`bg-yellow-500 p-3 ml-5 rounded-md text-black font-bold hover:scale-105 transition mb-5 `}
        >
          Postear
        </button>
      )}
    </form>
  );
}

export default CreatePost;
