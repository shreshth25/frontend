// CreatePost.js
import React, { useState } from 'react';
import notify from '../helpers/notification'; // Update the path accordingly
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { UseUserContext } from '../contexts/UserContext';


const CreatePost = () => {
  const {token} = UseUserContext()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const savePost = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('location', location);
    if (image){
      formData.append('image', image);
    }
    
  
    try {
      const response = await fetch(`https://shreshthbansal.pythonanywhere.com/api/post/`, {
        method: 'POST',
        headers:{
          'Authorization': `Token ${token}`
        },
        body: formData,
      });
      console.log(response);
  
      if (response.ok) {
        notify("Post Created")
        setTitle("")
        setDescription("")
        setLocation("")
        setImage(null)
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
    <div className='container'>
      <div className='border p-5 m-2'>
        <div className='text-muted text-center'>Create New Post</div>
        <form onSubmit={savePost}>
        <div className="mb-3">
            <label className="form-label">Title</label>
                <input 
                type="text" 
                className="form-control"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" 
                className="form-control"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Location</label>
                <input type="text" 
                className="form-control"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Image</label>
                <input type="file" 
                className="form-control"
                onChange={(e)=>setImage(e.target.files[0])}/>
            </div>
          <button type='submit' className='btn btn-secondary'>
            Create
          </button>
        </form>
      </div>
        <ToastContainer/>
    </div>
  );
};

export default CreatePost;
