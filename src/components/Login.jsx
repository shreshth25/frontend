// CreatePost.js
import React, { useState } from 'react';
import notify from '../helpers/notification'; // Update the path accordingly
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { NavLink, json, useLocation, useNavigate } from 'react-router-dom';
import { UseUserContext } from '../contexts/UserContext';


const Login = () => {
  const {setToken} = UseUserContext()
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    
    e.preventDefault();
    const formData = {
      'email':email,
      'password':password
    }  
  
    try {
      const response = await fetch(`https://shreshthbansal.pythonanywhere.com/api/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // You may need to adjust this based on your API requirements
          // Add any other headers if needed
        },
        body: JSON.stringify(formData),
      });

      
      const data = await response.json()
      if (response.ok) {
        notify("Logged In")
        setEmail("")
        setPassword("")
        setToken(data['data']['token'])
        localStorage.setItem('token', data['data']['token'])
        notify(data['data']['message'])
        navigate("/")
      } else {
        console.error('Error:', response.statusText);
        notify(data['message'], "error")
      }
    } catch (error) {
      notify("Something Went Wrong", "error")
      console.error('Error:', error);
      throw error;
    }
  };
  

  return (
    <div className='container mt-5' style={{maxWidth:"500px"}}>
      <div className='border shadow-lg p-5 m-2'>
      <h1 className='text-muted text-center mb-5 fontStyle'>Login</h1>
        <form onSubmit={login}>
        <div className="mb-3">
            <label className="form-label">Email</label>
                <input 
                type="email" 
                className="form-control"
                value={email}
                placeholder='Enter your email'
                onChange={(e)=>setEmail(e.target.value)}
                required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" 
                className="form-control"
                value={password}
                placeholder='Enter your password'
                onChange={(e)=>setPassword(e.target.value)}
                required/>
            </div>
          <button type='submit' className='btn btn-secondary'>
            Login
          </button>
        </form>
        <div className='text-center mt-5'>
          <NavLink to="/signup" className="text-muted " style={{ color: 'inherit', textDecoration: 'inherit'}}>Don't have account ? Create an account </NavLink>
        </div>
      </div>
        <ToastContainer/>
    </div>
  );
};

export default Login;
