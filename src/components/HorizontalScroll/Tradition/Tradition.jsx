import React, {useEffect} from 'react';
import video from '../../../assets/video/Traditions.mp4';
import HoverVideoPlayer from '../../HoverVideoPlayer/HoverVideoPlayer';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import videoEmbl1 from '../../../assets/logo/Logo Inagawa-kaï.mp4';
import videoEmbl2 from '../../../assets/logo/Logo Yamaguchi-gumi.mp4';
import videoEmbl3 from '../../../assets/logo/Logo Tōa Yuai Jigyō Kummiai.mp4';
import videoEmbl4 from '../../../assets/logo/Logo Sumiyoshi-rengō.mp4';
import './Tradition.css';

function Tradition() {
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
            <div className="title">
              <HoverVideoPlayer src={video} width="400"/>
            </div>
            <p>
              Depuis leur création, les yakuzas ont toujours été divisés en
              plusieurs clans. Mais quatre familles principales dominent ce
              milieu: Les Yamaguchi-gumi , la famille de yakuza la plus
              puissante du Japon, Les Sumiyoshi-rengo, les Inagawa-kaï et les
              Toa Yuai Jigyo Kummiai. Comme la tradition de clans les yakuza ont
              diverses tradition comme les tatouages qui est un rite encore
              pratiqué de manière traditionnelle avec des aiguille fixé sur un
              manche en bambou. Pour eux les tatouages ont plusieurs buts :
              celui de se différencier des autres clans, prouver son courage,
              prouver sa fidélité envers sa famille ou encore pour représenter
              les caractères. Il ya également les rite de fautes en effet en cas
              de fautes il arrive qu’un yakuza réalise Yubitsume, c’est un
              rituel qui a pour but de se couper une phalange et de la donné au
              chef pour se faire pardonner, cela marche aussi pour un départ
              volontaire chez les yakuza. Dans des cas plus extrêmes de fautes
              très graves, il peut arriver que le rite de seppuku soit pratiqué.
              Aussi connue sous le nom d’hara-kiri qui est un suicide rituel par
              éventration.
            </p>
          </div>
          <div className="embl">
            <HoverVideoPlayer src={videoEmbl1} width={200}>
            </HoverVideoPlayer>
            <HoverVideoPlayer src={videoEmbl2} width={200}>
            </HoverVideoPlayer>
            <HoverVideoPlayer src={videoEmbl3} width={200}>
            </HoverVideoPlayer>
            <HoverVideoPlayer src={videoEmbl4} width={200}>
            </HoverVideoPlayer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tradition;