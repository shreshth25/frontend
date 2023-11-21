// CreatePost.js
import React, { useState } from 'react';
import notify from '../helpers/notification'; // Update the path accordingly
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { NavLink, json, useLocation, useNavigate } from 'react-router-dom';


const SignUp = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async (e) => {
    
    e.preventDefault();
    const formData = {
      'name' : name,
      'email' : email,
      'password' : password
    }  
  
    try {
      const response = await fetch(`https://shreshthbansal.pythonanywhere.com/api/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // You may need to adjust this based on your API requirements
          // Add any other headers if needed
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        notify("Success Complete In")
        setEmail("")
        setName("")
        setPassword("")
        navigate("/login")
      } else {
        // Handle the error case, you can log the error or show an error message
        console.error('Error:', response.statusText);
        notify("Error in post creation", "error")
      }
    } catch (error) {
      notify("Error in post creation", "error")
      console.error('Error:', error);
      // Re-throw the error to propagate it to the calling function
      throw error;
    }
  };
  

  return (
    <div className='container mt-5' style={{maxWidth:"500px"}}>
      <div className='border shadow-lg p-5 m-2'>
        <h1 className='text-muted text-center mb-5 fontStyle'>Sign Up</h1>
        <form onSubmit={signup}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" 
            className="form-control"
            value={name}
            placeholder='Enter a username'
            onChange={(e)=>setName(e.target.value)}
            required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
            type="email" 
            className="form-control"
            value={email}
            placeholder='Enter a valid email'
            onChange={(e)=>setEmail(e.target.value)}
            required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" 
            className="form-control"
            placeholder='Enter a strong password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required/>
          </div>
          <button type='submit' className='btn btn-secondary'>
            Create Account
          </button>
        </form>
        <div className='text-center mt-5'>
          <NavLink to="/login" className="text-muted " style={{ color: 'inherit', textDecoration: 'inherit'}}>Already had account? Login</NavLink>
        </div>
      </div>
        <ToastContainer/>
    </div>
  );
};

export default SignUp;
