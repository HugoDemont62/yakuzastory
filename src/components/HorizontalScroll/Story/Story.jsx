import React from 'react';
import './Story.css';
import video from '../../../assets/video/Yakuza.mp4';
import videoReverse from '../../../assets/video/Yakuza.mp4';
import HoverVideoPlayer from '../../HoverVideoPlayer/HoverVideoPlayer';
import videoMap from '../../../assets/video/Drapeau.mp4';

function story() {
  return (
    <div className="storysection">
      <div className="title">
        <HoverVideoPlayer src={video} reverseSrc={videoReverse} width="200"/>
        <p>Story</p>
      </div>
      <div className="content-center">
        <div className="cont">
          <div>
            <p>
              Yakuzas Story est un site web one pages qui retracent dans les
              grandes lignes l’histoire des yakuzas.
              Cette histoire évoque leurs diverses origines, leurs expansions,
              leur montée en puissance et leur chute.
              Mais aussi les diverses pratiques et traditions qu’il entretient
              et enfin leur impact dans la pop culture.
            </p>
          </div>
          <HoverVideoPlayer src={videoMap} width="500" height="500">
          </HoverVideoPlayer>
        </div>
      </div>
    </div>
  );
}

export default story;