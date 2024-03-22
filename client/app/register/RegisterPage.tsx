"use client";
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import validation from './validation'
import axios from "axios";
import RegisterForm from "./RegisterForm";


const RegisterPage = () => {

  const router = useRouter()

  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    aviso:'',
    error:''
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      aviso:'',
      error:''
    }));

  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = {
        email: formData.email,
        password: formData.password
      }
      console.log(`Peticion enviada con credenciales ${user.email} y ${user.password}`);
      const result =  await axios.post('http://localhost:3001/registeruser', user)
      console.log(result);
      setFormData((prevState) => ({
        ...prevState,
        aviso: 'Email de verificación enviado! (Chequear carpeta spam)',
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
       switch(error.response?.data?.code){
          case "auth/email-already-in-use":
            setFormData((prevState) => ({
              ...prevState,
              error: 'Este email ya está en uso.',
            }));
          default: console.log(error);
          }
      } 
    }
  };

  useEffect(()=>{
    const formValidated = validation(formData)
    setFormErrors(formValidated)
},[formData])

  return (
    <RegisterForm formData={formData} formErrors={formErrors} handleChange={handleChange} handleSubmit={handleSubmit}/>
  );
};

export default RegisterPage;
