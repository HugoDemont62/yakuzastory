import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useLayoutEffect, useRef} from 'react';
import './HorizontalScroll.css';
import Story from './Story/Story';
import Origine from './Origine/Origine';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  //Animation
  const component = useRef();
  const slider = useRef();
  const redBall = useRef();

  useLayoutEffect(() => {
    // Red ball animation
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: redBall.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 2,
      },
    });

    tl.fromTo(redBall.current, {scale: 0.1}, {scale: 1});

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
        <div className="panel ">TWO</div>
        <div className="panel ">THREE</div>
        <div className="panel ">FOUR</div>
        <div className="panel ">FIVE</div>
        <div className="panel ">SIX</div>
        <div className="panel ">SEVEN</div>
        <div className="panel ">EIGHT</div>
      </div>
    </div>
  );
}
