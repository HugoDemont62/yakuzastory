import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useLayoutEffect, useRef} from 'react';
import './HorizontalScroll.css';

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
        <div className="story panel">
          <div>
            <h1>
              Yakuzas Story
            </h1>
            <div className="description">
              <p>
                L’origine des yakuzas remonte à l’ère Édo entre 1603 et 1868. En
                effet ils descendent de trois corporations différentes les
                bakuto
                ( joueurs professionnels qui travaillaient dans les villes les
                marchés et les foires dont la spécialité était les jeux de
                hasard)
                Les tekiya ( les colporteurs qui voyagé sur les routes)
                Et les machi-yokko ( groupes se considèrent comme protecteur du
                peuple lors de la démilitarisation du pays dans les années 1600
                durant laquelle les attaques de ronins qui se multipliait)
              </p>
            </div>
          </div>
        </div>
        <div className="panel ">ONE</div>
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
