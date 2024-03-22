"use client";
import axios from "axios";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import useAuth from "../hooks/useIsAuthed";
import { useRouter } from "next/navigation";
import useProfile from "../hooks/useProfile";

const LoginPage = () => {
  const router = useRouter()
  const {login} = useAuth()
  const {fetchData} = useProfile()
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    error: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
      error: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = {
        email: credentials.email,
        password: credentials.password,
      };
      console.log(
        `Peticion enviada con credenciales ${user.email} y ${user.password}`
      );
      const result = await axios.post("http://localhost:3001/login", user);
      const emailVerified = await axios.get('http://localhost:3001/getverified')
      console.log(emailVerified.data);
      
      if(emailVerified.data == true){
       
        console.log(result);
        setCredentials((prevState) => ({
          ...prevState,
        }));
        login(result.data)
        fetchData(result.data)
  
        router.push('/')
      }else{
        setCredentials((prevState)=>({
          ...prevState,
          error: 'Verifica el mail para continuar'
        }))
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.data) {
          case 'Error al iniciar sesión: email no encontrado':
            setCredentials((prevState) => ({
              ...prevState,
              error: "Email o Contraseña incorrectos.",
            }));
          default:
        }
      }
      console.log(error);
    }
  };

  return (
    <>
      <LoginForm credentials={credentials} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </>
  );
};

export default LoginPage;
