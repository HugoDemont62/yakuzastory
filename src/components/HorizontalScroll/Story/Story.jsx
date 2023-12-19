import React, {useEffect} from 'react';
import './Story.css';
import video from '../../../assets/video/Yakuza.mp4';
import HoverVideoPlayer from '../../HoverVideoPlayer/HoverVideoPlayer';
import videoMap from '../../../assets/video/Drapeau.mp4';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function story() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(".title", {
      x: '100%',
      opacity: 0,
      delay: 0.2
    }, {
      x: '0%',
      opacity: 1,
      duration: 1.5
    });

    gsap.fromTo(".cont", {
      x: '100%',
      opacity: 0,
      delay: 0.2
    }, {
      x: '0%',
      opacity: 1,
      duration: 2
    });
  }, []);

  return (
    <div className="storysection">

      <div className="content-center">
        <div className="cont">
          <div>
            <p>
              <div className="title">
                <HoverVideoPlayer src={video} width="600"/>
                <h2>Story</h2>
              </div>
              Yakuzas Story est un site web one pages qui retracent dans les
              grandes lignes l’histoire des yakuzas.
              Cette histoire évoque leurs diverses origines, leurs expansions,
              leur montée en puissance et leur chute.
              Mais aussi les diverses pratiques et traditions qu’il entretient
              et enfin leur impact dans la pop culture.
            </p>
          </div>
          <HoverVideoPlayer src={videoMap} width="800" height="800">
          </HoverVideoPlayer>
        </div>
      </div>
    </div>
  );
}

export default story;