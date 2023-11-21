import React, { useRef, useState, useEffect } from "react";
import "../Video.css"

const Reel = ({ url }) => {
    const [isVideoPlaying, setisVideoPlaying] = useState(false);

    const vidRef = useRef();
  
    const onVideoClick = () => {
      if (isVideoPlaying) {
        vidRef.current.pause();
        setisVideoPlaying(false);
      } else {
        vidRef.current.play();
        setisVideoPlaying(true);
      }
    };
  
    useEffect(() => {
        const scroll = document.getElementById("video-container");
      
        const handleScroll = () => {
          vidRef.current.pause();
        };
      
        if (scroll) {
          scroll.addEventListener("scroll", handleScroll);
      
          return () => {
            scroll.removeEventListener("scroll", handleScroll);
          };
        }
    }, []);
      
  
    return (
      <div className="video-cards">
        <video
        onClick={onVideoClick}
        className="video-player"
        ref={vidRef}
        src={url}
        loop
        />
      </div>
    );
}

export default Reel
