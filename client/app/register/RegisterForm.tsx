import Link from 'next/link'
import React from 'react'

interface FormData{
    email: string
    confirmEmail: string
    password: string
    confirmPassword: string
    aviso: string
    error: string
}

interface FormErrors{
    email: string
    confirmEmail: string
    password: string
    confirmPassword: string
}

interface Props{
    formData: FormData
    formErrors: FormErrors
    handleChange:  (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit:  (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const RegisterForm:React.FC<Props> = ({formData, formErrors, handleChange, handleSubmit}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="border border-zinc-100 p-8 rounded-md shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl mb-8">
          Regístrate en{" "}
          <span className="text-yellow-300 hover:underline">B</span>link💡!
        </h1>
        {formData.aviso && <div><p className="text-green-700">{formData.aviso}</p></div>}
        {formData.error && <div><p className="text-red-700">{formData.error}</p></div>}
        <label htmlFor="email" className="block mb-4">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-black"
            onChange={handleChange}
            placeholder="email@email.com"
          />
        </label>
        {formErrors.email ? <div className="text-red-700 underline">{formErrors.confirmEmail}</div> : null}
        <label htmlFor="confirmEmail" className="block mb-4">
          Confirme su email:
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={formData.confirmEmail}
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-black"
            onChange={handleChange}
          />
        </label>
        {formErrors.confirmEmail ? <div className="text-red-700 underline">{formErrors.confirmEmail}</div> : null}
        <label htmlFor="password" className="block mb-4">
          Contraseña:
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-black"
            onChange={handleChange}
            placeholder="6 Caracteres mínimo - 12 máximo."
          />
        </label>
        {formErrors.password ? <div className="text-red-700 underline">{formErrors.password}</div>: null}
        <label htmlFor="confirmPassword" className="block mb-4">
          Confirme su contraseña:
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-black"
            onChange={handleChange}
          />
        {formErrors.confirmPassword ? <div className="text-red-700 underline">{formErrors.confirmPassword}</div>: null}
        </label>
        <button
  className={`bg-yellow-600 p-5 rounded-md text-black font-bold hover:scale-105 transition mb-5 ${formErrors.email !== '' || formErrors.confirmEmail !== '' || formErrors.password !== '' || formErrors.confirmPassword !== '' ? 'cursor-not-allowed opacity-50' : 'hover:bg-yellow-700'}`}
  disabled={formErrors.email !== '' || formErrors.confirmEmail !== '' || formErrors.password !== '' || formErrors.confirmPassword !== ''}
>
  Crear cuenta
</button>


        <div className="flex justify-between">
          <p>¿Ya tienes una cuenta?</p>
          <Link href={"/login"}>
            <span className="cursor-pointer hover:underline hover:text-yellow-400">
              Inicia sesión
            </span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm