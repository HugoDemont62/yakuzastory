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
    if (video.current) {
      video.current.pause();
      video.current.currentTime = 0; // Retourne à la 1ère frame
    }
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