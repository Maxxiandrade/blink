import Link from 'next/link'
import React from 'react'

interface Aviso{
    aviso:string
    error:string
}

interface Props{
    aviso: Aviso
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const RecoverForm:React.FC<Props> = ({aviso, handleChange, handleSubmit}) => {
  return (
    <div className="flex justify-center items-center h-screen">
    <form
      className="border border-zinc-100 p-8 rounded-md shadow-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl mb-8">
        <span className="text-yellow-300 hover:underline">B</span>link💡 -
        Recupera tu cuenta
      </h1>
      <label htmlFor="email" className="block mb-4">
        Ingresa el email registrado:
        <input
          type="text"
          id="email"
          className="border border-gray-300 rounded-md px-4 py-2 w-full text-black"
          onChange={handleChange}
        />
        {aviso.aviso && (
          <div>
            <p className="text-green-700">{aviso.aviso}</p>
          </div>
        )}
        {aviso.error && (
          <div>
            <p className="text-red-700">{aviso.error}</p>
          </div>
        )}
      </label>
      <div className="flex justify-between">
        <button className="bg-yellow-600 p-3 mb-3 rounded-md text-black font-bold hover:scale-105 transition">
          Enviar
        </button>
        <Link href={"/login"}>
          <button className="bg-yellow-600 p-3 mb-3 rounded-md text-black font-bold hover:scale-105 transition">
            Volver
          </button>
        </Link>
      </div>
    </form>
  </div>
  )
}

export default RecoverForm