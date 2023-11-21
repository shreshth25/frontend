import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import { UseUserContext } from '../contexts/UserContext'

const Layout = () => {

  const {token} = UseUserContext()
  const navigate = useNavigate()

  useEffect(()=>{
    if (!token)
    {
        navigate('/login')
    }
  })

  return (
    <div>
      <Header></Header>
      <Outlet/>
    </div>
  )
}

export default Layout
