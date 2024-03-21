import React from 'react'
import Recover from './recover'
import RedirectAuthenticated from '@/app/RedirectAuthenticated'


const page = () => {
  return (
    <RedirectAuthenticated>
    <Recover/>
    </RedirectAuthenticated>
  )
}

export default page