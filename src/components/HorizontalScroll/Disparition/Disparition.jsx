import React, {useEffect} from 'react';
import video from '../../../assets/video/Disparition.mp4';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import videoDisp from '../../../assets/video/enquête.mp4';

function Disparition() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo('.title', {
      x: '100%',
      opacity: 0,
      delay: 0.2,
    }, {
      x: '0%',
      opacity: 1,
      duration: 1.5,
    });

    gsap.fromTo('.cont', {
      x: '100%',
      opacity: 0,
      delay: 0.2,
    }, {
      x: '0%',
      opacity: 1,
      duration: 2,
    });
  }, []);

  return (
    <div className="storysection">
      <div className="content-center">
        <div className="cont">
          <video src={videoDisp} loop muted autoPlay></video>
          <div>
            <p>
              Mais c’est en 2010 que le gouvernement décide de porter un autre
              coup à l’organisation des yakuzas. En effet une nouvelle
              ordonnance préfectorale déclare toute association de civils avec
              de yakuza interdite. Que ce soit des particuliers, des entreprises
              ou encore des associations. Cette ordonnance oblige également les
              banques à mieux vérifier la provenance d’argent des personnes
              ayant des liens de près ou de loin avec les yakuzas pour mieux
              surveiller les échanges bancaires et repérer les trafics. Par
              ailleurs la mise en place de ce système fait craindre à la police
              l’émergence de nouveaux groupes de criminels non organisés et sans
              code d’honneur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disparition;