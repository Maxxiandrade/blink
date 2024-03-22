"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import RecoverForm from "./RecoverForm";

const Recover = () => {
  const [emailToRecover, setEmailToRecover] = useState("");
  const [aviso, setAviso] = useState({
    aviso: "",
    error: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAviso({
      aviso: "",
      error: "",
    });
    setEmailToRecover(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = {
      email: emailToRecover,
    };
    try {
      console.log(email);
      const result = await axios.post("http://localhost:3001/recover", email);
      setAviso((prevState) => ({
        ...prevState,
        aviso: result.data,
      }));
      console.log(result);
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.data?.code) {
          case "auth/invalid-email":
            setAviso((prevState) => ({
              ...prevState,
              error: "Email no existente.",
            }));
          default:
            console.log(error);
        }
      }
    }
  };
  return (
   <RecoverForm  aviso={aviso} handleChange={handleChange} handleSubmit={handleSubmit}/>
  );
};

export default Recover;
