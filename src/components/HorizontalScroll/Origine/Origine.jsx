import React from 'react';
import './Origine.css';
import video from '../../../assets/video/Origine.mp4';
import HoverVideoPlayer from '../../HoverVideoPlayer/HoverVideoPlayer.jsx';
import videoFirst from '../../../assets/video/Animation 1.mp4';
import videoSecond from '../../../assets/video/Image 2.mp4';
import videoThird from '../../../assets/video/Image 3.mp4';

function Origine() {
  return (
    <div className="content">
      <HoverVideoPlayer src={video} width="200">
      </HoverVideoPlayer>
      <div className="content-row">
        <div className="content-block text-first">
          <p>
            L’origine des yakuzas remonte à l’ère Édo entre 1603 et 1868. En
            effet ils descendent de trois corporations différentes les bakuto (joueurs professionnels qui travaillaient dans les villes les marchés
            et les foires dont la spécialité était les jeux de hasard)
          </p>
          <HoverVideoPlayer src={videoSecond} width={500} height={500}>
          </HoverVideoPlayer>
        </div>
        <div className="content-block image-first">
          <p>
            Les tekiya (Les colporteurs qui voyagé sur les routes)
          </p>
          <HoverVideoPlayer src={videoFirst} width={500} height={500}>
          </HoverVideoPlayer>
        </div>
        <div className="content-block text-first">
          <p>
            Et les machi-yokko (groupes se considèrent comme protecteur du
            peuple lors de la démilitarisation du pays dans les années 1600
            durant laquelle les attaques de ronins qui se multipliait)
          </p>
          <HoverVideoPlayer src={videoThird} width={500} height={500}>
          </HoverVideoPlayer>
        </div>
      </div>
    </div>
  );
}

export default Origine;