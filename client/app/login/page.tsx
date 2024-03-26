import React from 'react'
import LoginPage from './login'
import Blink from '../components/Blink'
import RedirectAuthenticated from '../RedirectAuthenticated'

const page = () => {
  return (
    <>
    {/* <Blink/> */}
    <RedirectAuthenticated>
    <Blink/>
    <LoginPage/>
    </RedirectAuthenticated>
    </>
  )
}

export default page