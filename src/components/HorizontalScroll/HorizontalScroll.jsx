import {useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Origine from './Origine/Origine';
import Expansion from './Expansion/Expansion.jsx';
import Story from './Story/Story';
import Lumiere from './Lumiere/Lumiere.jsx';
import Ombre from './Ombre/Ombre.jsx';
import Tradition from './Tradition/Tradition.jsx';
import Influences from './Influences/Influences.jsx';
import Disparition from './Disparition/Disparition.jsx';
import './HorizontalScroll.css';
import video from '../../assets/video/Yakuza v2.mp4';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.panel');
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          end: () => '+=' + slider.current.offsetWidth,
        },
      });

    }, component);

    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      <div ref={slider} className="container">
        <div className="panel">
          <Story/>
        </div>
        <div className="panel">
          <Origine/>
        </div>
        <div className="panel">
          <Expansion/>
        </div>
        <div className="panel">
          <Lumiere/>
        </div>

        <div className="panel black">
          <Ombre/>
        </div>
        <div className="panel black">
          <Disparition/>
        </div>
        <div className="panel black">
          <Tradition/>
        </div>
        <div className="panel black">
          <Influences/>
        </div>
      </div>
    </div>
  );
}