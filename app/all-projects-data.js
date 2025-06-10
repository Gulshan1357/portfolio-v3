// src/data/projectsData.js
import sparBackgroundMedium from '~/assets/spar-background-1024w.png';
import wmSimple from '~/assets/WM_Simple.png';

import sparBackgroundPlaceholer from '~/assets/spar-background-placeholder.png';

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
    postTag: 'Unreal & React',
    sideTag: 'C++ & TypeScript',
  },
  {
    title: 'Wealth Management AR',
    dateTime: 'Late 2022 to Early 2023',
    abstract: 'Development for an Augmented Reality application built in Unity for RBC',
    imageSrcSet: `${wmSimple} 720w`,
    imagePlaceholder: `${sparBackgroundPlaceholer}`,
    imageAlt:
      'The unreal app with Metahuman is streamed to the web application using pixelstreaming',
    linkTo: '/projects/wealth-management',
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
