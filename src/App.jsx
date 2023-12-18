import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // ---------- gsap context
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ---------- selecting all horizontal sections
      const horizontalSections = gsap.utils.toArray('.horizontal-section');

      // ---------- applying horizontal scroll animation
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '#container',
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => '+=' + document.querySelector('#container').offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="h-screen flex flex-nowrap" id="container">
      {/* ---------- section 01 ---------- */}
      <section className="horizonal-section bg-red-400 flex">
        <h1 className="heading">Horizontal Scroll</h1>
      </section>

      {/* ---------- section 02 ---------- */}
      <section className="horizonal-section bg-black flex">
        <h1 className="heading">01</h1>
      </section>

      {/* ---------- section 02 ---------- */}
      <section className="horizonal-section bg-amber-400 flex">
        <h1 className="heading">02</h1>
      </section>

      {/* ---------- section 03 ---------- */}
      <section className="horizonal-section bg-blue-400 flex">
        <h1 className="heading">03</h1>
      </section>
    </main>
  );
}

export default App;
