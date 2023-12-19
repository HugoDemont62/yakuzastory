import React from 'react';
import HoverVideoPlayer from '../../HoverVideoPlayer/HoverVideoPlayer.jsx';
import video from '../../../assets/video/Disparition.mp4';

function Disparition() {
  return (
    <div>
      <HoverVideoPlayer src={video} width="250" height="500"/>
    </div>
  );
}

export default Disparition;