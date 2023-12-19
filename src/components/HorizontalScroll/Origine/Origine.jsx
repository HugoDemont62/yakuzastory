import React from 'react';
import './Origine.css';
import video from '../../../assets/video/Origine.mp4';
import HoverVideoPlayer from '../../HoverVideoPlayer/HoverVideoPlayer.jsx';

function Origine() {
  return (
    <div className="content">
      <HoverVideoPlayer src={video} width="200">

      </HoverVideoPlayer>
      <div className="content-row">
        <div className="content-block text-first">
          <p>
            L’origine des yakuzas remonte à l’ère Édo entre 1603 et 1868. En effet ils descendent de trois corporations différentes les bakuto ( joueurs professionnels qui travaillaient dans les villes les marchés et les foires dont la spécialité était les jeux de hasard)
          </p>
          <img src="https://via.placeholder.com/250x500" alt="Yakuza"/>
        </div>
        <div className="content-block image-first">
          <p>
            Les tekiya ( les colporteurs qui voyagé sur les routes)
          </p>
          <img src="https://via.placeholder.com/250x500" alt="Yakuza"/>
        </div>
        <div className="content-block text-first">
          <p>
            Et les machi-yokko ( groupes se considèrent comme protecteur du peuple lors de la démilitarisation du pays dans les années 1600 durant laquelle les attaques de ronins qui se multipliait)
          </p>
          <img src="https://via.placeholder.com/250x500" alt="Yakuza"/>
        </div>
      </div>
    </div>
  );
}

export default Origine;