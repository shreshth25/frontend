import React, { useEffect, useState } from 'react'

import { FaUserPlus } from "react-icons/fa";
import { PiUserSquareBold } from "react-icons/pi";
import { PiSquaresFour } from "react-icons/pi";
import { MdSmartDisplay } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import MyProfilePost from './MyProfilePost';
import MyProfileReel from './MyProfileReel';
import { UseUserContext } from '../contexts/UserContext';


const Profile = () => {
  const {token} = UseUserContext()
  const [userData, setUserData] = useState({})
  const [view, setView] = useState(0)

  const get_profile = async () => {
    try {
      const res = await fetch('https://shreshthbansal.pythonanywhere.com/api/profile/', {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
          // Add other headers if needed
        },
      });
      const response_data = await res.json();
      setUserData(response_data.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    get_profile()
  }, [])

  return (
    <div className='container mt-1'>
      <div className='row'>
        <div className='col-4'>
          <div><img src='https://www.seekpng.com/png/detail/514-5147412_default-avatar-icon.png' style={{height:"45px", width: "45px", borderRadius:"50%" }}/><RiVerifiedBadgeFill style={{color: "blue" }}/></div>
          <div>{userData ? userData.name : ''}</div>
          <div>{userData ? userData.email : ''}</div>
        </div>
        <div className='col-8'>
          <div className='row'>
            <div className='col-4 text-center'>
              <b>2</b>
              <div>Posts</div>
            </div>
            <div className='col-4 text-center'>
              <b>11.2K</b>
              <div>Followers</div> 
            </div>
            <div className='col-4 text-center'>
              <b>10</b>
              <div>Following</div>   
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-4'>
        <button className='btn btn-light col-5 text-center m-1' >
          Edit Profile
        </button>
        <button className='btn btn-light col-5 text-center m-1' >
          Share Profile
        </button>
        <button className='btn btn-light col-1 text-center m-1' >
          <FaUserPlus/>
        </button>
      </div>
      <div className='row mt-4'>
        <button className='btn btn-light col-4 text-center' onClick={()=>setView(0)}>
          <PiSquaresFour/>
        </button>
        <button className='btn btn-light col-4 text-center' onClick={()=>setView(1)}>
          <MdSmartDisplay/>
        </button>
        <button className='btn btn-light col-4 text-center' onClick={()=>setView(2)}>
          <PiUserSquareBold/>
        </button>
      </div>
      <div className='row mt-4'>
        { view ==0 && (
          <MyProfilePost/>
        )}
        { view ==1 && (
          <MyProfileReel/>
        )}
        { view ==2 && (
          <Tag/>
        )}
        
      </div>

    </div>
  )
}

export default Profile
