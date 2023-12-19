import React, { useEffect, useRef } from 'react';
import './HoverVideoPlayer.css';

function HoverVideoPlayer({src, width, height}) {
  const video = useRef(null);

  useEffect(() => {
    if (video.current) {
      video.current.load();
    }
  }, [src]);

  const handleMouseOver = () => {
    if (video.current) {
      video.current.play();
    }
  };

  const handleMouseOut = () => {
    if (!video.current) return; // verifier si videoRef existe
    video.current.pause();
    let rewind = setInterval(function(){
      if(video.current.currentTime <= 0){ // Lorsqu'on atteint le début de la vidéo
        clearInterval(rewind);
        video.current.pause();
      } else {
        video.current.currentTime -= 0.1; // Décrémente currentTime
      }
    }, 30);
  };

  return (
    <video
      ref={video}
      src={src}
      muted
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      width={width} // Ajouter la largeur ici
      height={height} // Ajouter la hauteur ici
    />
  );
}

export default HoverVideoPlayer;