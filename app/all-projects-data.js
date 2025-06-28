// src/data/projectsData.js
import sparBackgroundMedium from '~/assets/spar-background-1024w.png';
import sparBackgroundPlaceholer from '~/assets/spar-background-placeholder.png';
import wmSimple from '~/assets/WM_Simple.png';
import wmSimplePlaceholder from '~/assets/WM_Simple2-placeholder.png';
import portfolioV2 from '~/assets/portfolioV2-peek.png';
import portfolioV2Small from '~/assets/portfolioV2-peek-320.png';
import portfolioV2Placeholder from '~/assets/portfolioV2-peek-placeholer.png';


const projectsData = [
  {
    title: 'SPAR',
    dateTime: 'Dec 2023 to Jan 2025',
    abstract:
      'Using LLM and Unreal Engine 5 to create an AI-driven virtual avatars which is streaming to a web app',
    // Use the imported variables directly
    imageSrcSet: `${sparBackgroundMedium} 1024w`,
    imagePlaceholder: `${sparBackgroundPlaceholer}`, // This will be the actual URL
    imageAlt:
      'The unreal app with Metahuman is streamed to the web application using pixelstreaming',
    linkTo: '/projects/spar',
    linkText: 'Read More',
    postTag: 'Unreal & React',
    sideTag: 'C++ & TypeScript',
  },
  {
    title: 'Wealth Management AR',
    dateTime: 'Late 2022 to Early 2023',
    abstract: 'Development for an Augmented Reality application built in Unity for RBC',
    imageSrcSet: `${wmSimple} 720w`,
    imagePlaceholder: `${wmSimplePlaceholder}`,
    imageAlt:
      'The app can use the phone&apos;s camera to scan the nearby objects and displace the RBC fund associated with that object.',
    linkTo: '/projects/wealth-management',
    postTag: 'Unity',
    sideTag: 'C#',
  },
  {
    title: 'Portfolio Website V2',
    dateTime: '2023',
    abstract: 'This project demonstrates my growing experties in React, SCSS and Javascript.',
    imageSrcSet: `${portfolioV2} 927w, ${portfolioV2Small} 320w`,
    imagePlaceholder: `${portfolioV2Placeholder}`,
    imageAlt:
      'The unreal app with Metahuman is streamed to the web application using pixelstreaming',
    linkTo: 'https://github.com/Gulshan1357/gulshan-portfolio-v2',
    linkText: 'GitHub Link',
    postTag: 'Unity',
    sideTag: 'C#',
  },
  {
    title: 'Test Streaming Metahuman Project 2',
    dateTime: '2023-11-15',
    abstract: 'This project demonstrates pixel streaming Unreal Metahuman to a web app.',
    imageSrcSet: `${sparBackgroundMedium} 640w`,
    imagePlaceholder: `${sparBackgroundPlaceholer}`,
    imageAlt:
      'The unreal app with Metahuman is streamed to the web application using pixelstreaming',
    linkTo: '/',
    postTag: 'Unreal',
    sideTag: 'Blueprints',
  },
];

export default projectsData;
