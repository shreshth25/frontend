import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react'
import { UseUserContext } from "../contexts/UserContext";

const Protected = (props) => {
  const {Component} = props
  const {token} = UseUserContext()
  const navigate = useNavigate()

  useEffect(()=>{
    if (token)
    {
        navigate('/login')
    }
  })
  return (
    <div>
      <Component/>
    </div>
  )
}

export default Protected
