import React from 'react'
import Recover from './recover'
import RedirectAuthenticated from '@/app/RedirectAuthenticated'
import Blink from '@/app/components/Blink'


const page = () => {
  return (
    <RedirectAuthenticated>
    <Blink/>
    <Recover/>
    </RedirectAuthenticated>
  )
}

export default page