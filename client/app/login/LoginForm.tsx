import Link from 'next/link'
import React from 'react'

interface Credentials{
    email: string
    password: string
    error: string
}

interface Props{
    credentials: Credentials
    handleChange:  (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit:  (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const LoginForm:React.FC<Props> = ({credentials, handleChange, handleSubmit}) => {
  return (
    <div className="flex justify-center items-center h-screen">
        <form
          className="border border-zinc-100 p-8 rounded-md shadow-lg"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl mb-8">
            <span className="text-yellow-300 hover:underline">B</span>link💡 -
            Inicia sesion!
          </h1>
          {credentials.error && (
            <div>
              <p className="text-red-700">{credentials.error}</p>
            </div>
          )}
          <label htmlFor="email" className="block mb-4">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              value={credentials.email}
              className="border border-gray-300 rounded-md px-4 py-2 w-full text-black"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password" className="block mb-4">
            Contraseña:
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              className="border border-gray-300 rounded-md px-4 py-2 w-full text-black"
              onChange={handleChange}
            />
          </label>
          <button
            disabled={credentials.email == "" || credentials.password == ""}
            className={`bg-yellow-600 p-3 mb-3 rounded-md text-black font-bold hover:scale-105 transition ${
              credentials.email == "" || credentials.password == ""
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-yellow-700"
            }`}
          >
            Iniciar sesion
          </button>
          <div className="flex justify-between">
            <Link href={"/login/[recover]"} as={"/login/recover"}>
              <p className="cursor-pointer hover:underline">
                Olvide mi contraseña
              </p>
            </Link>
          </div>
        </form>
      </div>
  )
}

export default LoginForm;