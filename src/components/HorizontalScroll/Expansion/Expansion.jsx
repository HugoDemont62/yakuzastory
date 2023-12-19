import React, {useEffect, useRef} from 'react';
import HoverVideoPlayer from '../../HoverVideoPlayer/HoverVideoPlayer.jsx';
import video from '../../../assets/video/Extension.mp4';
import './Expansion.css';
import photo from '../../../assets/Kobe-Japon.jpg';
import photo2 from '../../../assets/Tokyo.jpeg';
import photo3 from '../../../assets/yokohama.jpg';
import gsap from 'gsap';

function Expansion() {
  let sectionRefs = useRef([]);
  sectionRefs.current = [];

  // Automagically fill the refs array
  const addToRefs = el => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    sectionRefs.current.forEach((section, i) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, x: '100%' },
        {
          duration: 1,
          autoAlpha: 1,
          x: '0',
          ease: 'none',
          scrollTrigger: {
            id: `section-${i + 1}`,
            trigger: section,
            start: 'top top',   // Change is here
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);
  return (
    <div className="content">
      <div className="title">
        <HoverVideoPlayer src={video} width="200">
        </HoverVideoPlayer>
      </div>
      <div className="content-center">
        <div className="cont" ref={addToRefs}>
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
          <div className="image-column" ref={addToRefs}>
            <img src={photo} alt="Kobe" />
            <img src={photo2} alt="Tokyo" />
            <img src={photo3} alt="Yokohama" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expansion;