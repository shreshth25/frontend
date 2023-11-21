// CreateReel.js
import React, { useState } from 'react';
import notify from '../helpers/notification'; // Update the path accordingly
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const CreateReel = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState(null);

  const saveReel = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (video){
      formData.append('video', video);
    }
    
  
    try {
      const response = await fetch(`https://shreshthbansal.pythonanywhere.com/api/reel/`, {
        method: 'POST',
        body: formData,
      });
  
      console.log(response);
  
      if (response.ok) {
        notify("Reel Uploded")
        setTitle("")
        setDescription("")
        setVideo(null)
      } else {
        // Handle the error case, you can log the error or show an error message
        console.error('Error:', response.statusText);
        notify("Error in Reel creation", "error")
      }
    } catch (error) {
      notify("Error in Reel creation", "error")
      console.error('Error:', error);
      // Re-throw the error to propagate it to the calling function
      throw error;
    }
  };
  

  return (
    <div className='container'>
      <div className='border p-5 m-2'>
        <div className='text-muted text-center'>Create New Reel</div>
        <form onSubmit={saveReel}>
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
                <label className="form-label">Video</label>
                <input type="file" 
                className="form-control"
                onChange={(e)=>setVideo(e.target.files[0])}/>
            </div>
          <button type='submit' className='btn btn-secondary'>
            Create Reel
          </button>
        </form>
      </div>
        <ToastContainer/>
    </div>
  );
};

export default CreateReel;
