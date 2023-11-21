import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const Post = ({post}) => {
    const [like, setLike] = useState(false); // Use a boolean to represent the like state

    const handleLikeClick = () => {
      setLike((prevLike) => !prevLike); // Toggle the like state
    }

    return ( 
        <div className="col-md-4 mt-2" key={post.id}>
        <div className="card" style={{ height: '500px' }}>
        <div className='container p-2'>
            <div className='row'>
            <div className='col-1'>
                <img src='https://www.seekpng.com/png/detail/514-5147412_default-avatar-icon.png' style={{height:"25px", width: "25px", borderRadius:"50%", border: "2px solid grey" }}/>
            </div>
            <div className='col-10'>
                <b className='font-weight-bold align-middle' style={{ marginLeft: '5px' }}>{post.title}</b>
            </div>
            </div>
        </div>
        <img src={post.image} className="card-img-top" alt="..." style={{ height: '250px', width: '100%' }} />
        <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.description}</p>
            <div className="d-flex justify-content-between">
            <div>
                {like ==0  && (
                    <FiHeart  style={{marginRight:'15px'}} onClick={handleLikeClick}/>
                )}

                {like > 0 && (
                    <FaHeart style={{marginRight:'15px', color: "red" }} onClick={handleLikeClick}/>
                )}
                
                <IoChatbubbleOutline  style={{marginRight:'15px' }} />
                <BsSend style={{ marginRight:'15px' }} />
            </div>
            <div><FaRegBookmark /></div>
            </div>
            <div> 5,038 likes </div>
            
            <div className="mt-2">
            <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png' style={{height:"15px", width: "15px", borderRadius:"50%", marginRight:"10px"}}/>
            Liked by <b>shreshth</b> and <b>40 others</b>
            <h6 className='text-muted'> 1 hour ago </h6>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Post
