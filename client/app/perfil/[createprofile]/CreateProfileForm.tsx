"use client";
import React, { use, useState } from "react";
import useProfile from "../../hooks/useProfile";
import { useRouter } from "next/navigation";

const CreateProfileForm = () => {
  const router = useRouter()
  const {setProfile} = useProfile()
  const uid = localStorage.getItem('uid')
  const [info, setInfo] = useState({
    nombre: "",
    pronombres: "El",
    descripcion: "",
    uid
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await setProfile(info)
    router.push('/')
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="border border-zinc-100 p-8 rounded-md shadow-lg spa"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl mb-8">
          Bienvenido a{" "}
          <span className="text-yellow-300 hover:underline">B</span>link💡. Por
          favor, crea tu perfil para continuar.
        </h1>
        <h2 className="text-2xl mb-8">No tardarás más de un minuto.</h2>
        <label htmlFor="nombre" className="block mb-4">
          Nombre:
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={info.nombre}
            className="text-black rounded-sm ml-2"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="pronombres" className="block mb-4">
          Pronombres:
          <select
            name="pronombres"
            id="pronombres"
            value={info.pronombres}
            className="text-black rounded-sm ml-2 mb-2"
            onChange={handleChange}
          >
            <option value="El">El</option>
            <option value="Ella">Ella</option>
            <option value="Otro">Otro</option>
          </select>
        </label>
        <label htmlFor="descripcion" className="block mb-4">
          <div className="flex flex-col">
            <span className="mb-2">Descripcion:</span>
            <textarea
              placeholder="260 caracteres máx."
              name="descripcion"
              value={info.descripcion}
              className="text-black rounded-sm ml-2 w-56 max-h-52 min-h-28"
              onChange={handleChange}
            />
          </div>
        </label>
        <button
          type="submit"
          disabled={!info.nombre || !info.pronombres || !info.descripcion}
          className={`bg-yellow-600 p-3 mb-3 rounded-md text-black font-bold hover:scale-105 transition ${
            !info.nombre || !info.pronombres || !info.descripcion
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-yellow-700"
          }`}
        >
          Crear perfil
        </button>
      </form>
    </div>
  );
};

export default CreateProfileForm;
