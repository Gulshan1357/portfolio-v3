// src/data/projectsData.js
import sparHigh from '~/assets/spar-gif.gif';
import sparLow from '~/assets/spar-gif-240w.gif';
import sparBackgroundPlaceholder from '~/assets/spar-background-placeholder.png';
import wmGifHigh from '~/assets/WM-gif.gif';
import wmGifLow from '~/assets/WM-gif-320w.gif';
import wmSimplePlaceholder from '~/assets/WM_Simple2-placeholder.png';
import portfolioV2 from '~/assets/portfolioV2-peek.png';
import portfolioV2Small from '~/assets/portfolioV2-peek-320.png';
import portfolioV2Placeholder from '~/assets/portfolioV2-peek-placeholer.png';
import lacrosseHigh from '~/assets/lacrosse_gif.gif';
import lacrosseLow from '~/assets/lacrosse_gif-320w.gif';
import lacrossePlaceholder from '~/assets/lacrosse-vr-placeholer.png';
import compGraHigh from '~/assets/ComputerGraphics.gif';
import compGraLow from '~/assets/computerGraphics-320w.gif';
import compGraPlaceholder from '~/assets/computerGraphics-placeholer.png';
import predictiveHigh from '~/assets/predictive.png';
import predictiveLow from '~/assets/predictive-320.png';
import predictivePlaceholder from '~/assets/predictive-placeholder.png';
import floorcan1High from '~/assets/floorcan1-1920w.png';
import floorcan1Low from '~/assets/floorcan1-960w.png';
import floorcanPlaceholder from '~/assets/floorcan-placeholder.png';

const projectsData = [
  {
    title: 'SPAR',
    dateTime: 'Dec 2023 to Jan 2025',
    abstract:
      'Using LLM and Unreal Engine 5 to create an AI-driven virtual avatars which is streaming to a web app',
    imageSrcSet: `${sparHigh} 480w, ${sparLow} 240w`,
    imagePlaceholder: `${sparBackgroundPlaceholder}`,
    imageAlt:
      'The unreal app with Metahuman is streamed to the web application using pixelstreaming',
    linkTo: '/projects/spar',
    linkText: 'Read More',
    postTag: 'Unreal & React',
    sideTag: 'C++ & TypeScript',
  },
  {
    title: 'Portfolio Websites',
    dateTime: '2020 to 2025',
    abstract: 'I have made 3 portfolio websites over the years. Each providing an opportunity to learn something new and highlight my expanding skill set and professional journey.',
    imageSrcSet: `${portfolioV2} 927w, ${portfolioV2Small} 320w`,
    imagePlaceholder: `${portfolioV2Placeholder}`,
    imageAlt:
      'The hero section of the portfolio website',
    linkTo: '/projects/portfolio',
    linkText: 'Read More',
    postTag: 'React',
    sideTag: 'JavaScript & SCSS',
  },
    {
    title: 'Final Project for Computer Graphics and Animation Course (6CG3)',
    dateTime: 'July 2023',
    abstract: 'For this project, I utilized techniques like stencil buffers, logical cutoffs, world reflection, rim lightings, vertex shaders, fragment shaders etc.',
    imageSrcSet: `${compGraHigh} 1532w, ${compGraLow} 320w`,
    imagePlaceholder: `${compGraPlaceholder}`,
    imageAlt:
      'The Unity projects demonstrates the skills I acquired from Computer Graphics and Animation Course',
    linkTo: 'https://vimeo.com/857297919',
    linkText: 'Vimeo Link',
    postTag: 'Unity',
    sideTag: 'C#',
  },
   {
    title: 'Floorcan Insights',
    dateTime: 'Early 2023',
    abstract: 'I designed and developed a geographical data visualization tool using Figma and React for RBC',
    imageSrcSet: `${floorcan1Low} 960w, ${floorcan1High} 1920w`,
    imagePlaceholder: `${floorcanPlaceholder}`,
    imageAlt:
      'A design thinking project.',
    linkTo: '/projects/floorcan-insights',
    linkText: 'Read More',
    postTag: 'React',
    sideTag: 'JavaScript',
  },
  {
    title: 'Lacrosse VR',
    dateTime: 'Early 2023',
    abstract: 'I worked as a Unity developer for RBC to build an virtual reality lacrosse game for North American Indigenous Games 2023 (NAIG)',
    imageSrcSet: `${lacrosseHigh} 554w, ${lacrosseLow} 320w`,
    imagePlaceholder: `${lacrossePlaceholder}`,
    imageAlt:
      'The Virtual Reality Lacrosse game targeting Meta Quest 2',
    linkTo: '/projects/lacrosse-vr',
    postTag: 'Unity',
    sideTag: 'C#',
  },
   {
    title: 'Wealth Management AR',
    dateTime: 'Late 2022 to Early 2023',
    abstract: 'I developed an Augmented Reality application using Unity and C# for RBC',
    imageSrcSet: `${wmGifHigh} 2532w, ${wmGifLow} 320w`,
    imagePlaceholder: `${wmSimplePlaceholder}`,
    imageAlt:
      'The app can use the phone&apos;s camera to scan the nearby objects and displace the RBC fund associated with that object.',
    linkTo: '/projects/wealth-management',
    postTag: 'Unity',
    sideTag: 'C#',
  }, 
   {
    title: 'Predictive Modelling Tool',
    dateTime: 'January to August 2022',
    abstract: 'I worked with St. Joseph\'s Healthcare Hamilton (SJHH) to enhance the discharge journey of patients to Alternate Level of Care (ALC) through a Predictive Modelling Tool.',
    imageSrcSet: `${predictiveHigh} 1918w, ${predictiveLow} 320w`,
    imagePlaceholder: `${predictivePlaceholder}`,
    imageAlt:
      'A design thinking project.',
    linkTo: '/projects/predictive-tool',
    linkText: 'Read More',
    postTag: 'Design Thinking',
    sideTag: 'UI/UX',
  },
];

export default projectsData;
