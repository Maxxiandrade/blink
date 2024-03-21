"use client";
import axios from "axios";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import useAuth from "../hooks/useIsAuthed";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter()
  const {login} = useAuth()
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
      console.log(result);
      setCredentials((prevState) => ({
        ...prevState,
      }));
      login(result.data)
      router.push('/')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.data) {
          case "Error al iniciar sesion FirebaseError: Firebase: Error (auth/invalid-credential).":
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
