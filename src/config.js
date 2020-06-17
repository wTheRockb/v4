module.exports = {
  siteTitle: 'Woody Butler | Software Engineer',
  siteDescription:
    'Woody Butler is a software engineer based in Los Angeles, CA who excels at creating customer-first applications.',
  siteKeywords:
    'Woody Butler, Woody, Butler, software engineer, front-end engineer, full-stack engineer, twitch developer, web developer, javascript, python, Tufts, viewcount analytics',
  siteUrl: 'https://wtherockb.com',
  siteLanguage: 'en_US',
  // googleAnalyticsID: 'UA-45666519-2', TODO
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Woody Butler',
  location: 'Los Angeles, CA',
  email: 'forrestwbutler@gmail.com',
  github: 'https://github.com/wTheRockb',
  twitterHandle: '@forrestwbutler',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/wTheRockb',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/woodybutler/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/forrestwbutler',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
