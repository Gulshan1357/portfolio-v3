import config from '~/config.json';

export const navLinks = [
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'Email',
    url: `mailto:${config.email}`,
    icon: 'email',
  },
];
