import React from 'react';
import HoverVideoPlayer from '../../HoverVideoPlayer/HoverVideoPlayer.jsx';
import video from '../../../assets/video/Extension.mp4';
import './Expansion.css';

function story() {
  return (
    <div className="content">
      <div className="title">
        <HoverVideoPlayer src={video} width="200">
        </HoverVideoPlayer>
      </div>
      <div className="content-center">
        <div className="cont">
          <div>
            <p>
              Par la suite de l’époque Meiji (1868 - 1912 ) à 1945 les
              différents groupes et clans de yakuza vont continuer leur
              expansion et évolution en s'immisçant dans les activités
              importantes du pays jusqu’à atteindre les sphères politiques et la
              structure hiérarchique du pays. Grâce à ces liens avec le
              gouvernement les yakuza vont être légalisés. A cette époque les
              yakuzas sont les gardiens des traditions et rejettent les échanges
              avec les pays extérieurs comme l'Europe et les Etats Unis.
            </p>
          </div>
          <div className="image-column">
            <img src="https://picsum.photos/300/300" alt="Random Image 1"/>
            <img src="https://picsum.photos/300/300" alt="Random Image 2"/>
            <img src="https://picsum.photos/300/300" alt="Random Image 3"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default story;