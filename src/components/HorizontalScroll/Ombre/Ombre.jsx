import React, {useEffect} from 'react';
import video from '../../../assets/video/… à l’ombre.mp4';
import HoverVideoPlayer from '../../HoverVideoPlayer/HoverVideoPlayer';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import videoSang from '../../../assets/video/sang.mp4';

function Ombre() {
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
          <div>
            <p>
              <div className="title">
                <HoverVideoPlayer src={video} width="600"/>
              </div>
              Le 1er Mars 1992 la loi Antigang est votée au Japon. Cette loi a
              pour but de recenser les bandes selon un certain nombre de
              critères et de réguler les activités de ses groupes. Les
              conséquences de cette loi sont nombreuses sur les yakuza, en effet
              leur image a peu à peu été dégradée, la pertes de certains
              privilèges et de fonctions sociales, puis l’influence extérieure
              notamment des Etats Unis qui constatent la présence des yakuza sur
              leur territoire et la diminution du nombre de membres.A la suite
              de la défaite de la seconde guerre mondiale le japon est occupé
              par les Etats Unis, à ce moment là les Yakuzas vont asseoir leur
              pouvoir peu à peu en régulant le marché noir devenue vital pour
              les japonais à l’époque, mais aussi en collaborant avec les force
              de police massivement diminué par l’occupant et l’occupant lui
              même trouve une utilité à cette présence abondante de yakuza en
              effet il y voyez une “force régulatrice”. Par cette évolution et
              au fur et à mesure des années les différents clans se font la
              guerre pour des parcelles de territoire ou par conflit économique.
              Mais grâce à Yoshio Kodama la paix s’installe entre les clans et
              dans les années 1980 les grandes familles possèdent et contrôlent
              une bonne partie de l’économie japonaise. Cette situation va se
              maintenir jusqu’au début des années 1990 ou une loi déterminante
              soit votée.
            </p>
          </div>
          <video src={videoSang} autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
}

export default Ombre;