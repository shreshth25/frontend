import React, { useState, useEffect } from 'react'
import Reel from './Reel'

const Reels = () => {

    const [reels, setReels] = useState([])

    const getReels = async ()=>{
        try{
            const res = await fetch('https://shreshthbansal.pythonanywhere.com/api/reel/')
            const data = await res.json()
            console.log(data)
            setReels(data.data)
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
      getReels()
    }, [])

    return (
      <div className="App">
        <div className="video-container" id="video-container">
        {
                reels.map((reel) => {
                return (
                    <Reel url = {reel.video} key={reel.id}/>
                );
            })
          }
        </div>
      </div>
    );
}

export default Reels
