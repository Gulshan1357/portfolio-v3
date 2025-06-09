import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const InteractibleParticles = props => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async engine => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = container => {
    // console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 30,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'attract',
            parallax: { enable: false, force: 60, smooth: 10 },
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          attract: {
            distance: 200,
            duration: 0.4,
            factor: 5,
          },
        },
      },
      particles: {
        color: {
          value: props.color,
        },
        links: {
          color: props.color,
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
          bounce: false,
          direction: 'none',
          enable: true,
          out_mode: 'out',
          random: false,
          speed: 0.1,
          straight: false,
        },
        number: { density: { enable: true, value_area: 600 }, value: 80 },
        opacity: {
          animation: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
          random: false,
          value: 0.4,
        },
        shape: {
          character: {
            fill: false,
            font: 'Verdana',
            style: '',
            value: '*',
            weight: '400',
          },
          image: {
            height: 100,
            replace_color: true,
            src: 'images/github.svg',
            width: 100,
          },
          polygon: { nb_sides: 5 },
          stroke: { color: '#000000', width: 0 },
          type: 'circle',
        },
        size: {
          anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
      polygon: {
        draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
        move: { radius: 10 },
        scale: 1,
        type: 'none',
        url: '',
      },
      smooth: true,
      pauseOnOutsideViewport: true,
      fullScreen: { enable: false },
    }),
    []
  );

  if (init) {
    return (
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
    );
  }

  return <></>;
};

export default InteractibleParticles;
