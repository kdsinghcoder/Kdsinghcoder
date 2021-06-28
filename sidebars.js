module.exports = {
  docs: [
    {
      type: 'category',
      label: 'About me',
      collapsed: false,
      items: ['main/introduction'],
    },
    {
      type: 'category',
      label: 'Projects',
      collapsed: false,
      items: [
        'projects/intro',{
        type: 'category',
        label: 'Full Stack',
        items: [
          'projects/docstream', 
          'projects/sayhello', 
          'projects/BondMantainer',
          'projects/travelbuddy',
          'projects/portfolio',

        ],
      },
      {
        type: 'category',
        label: 'Bots',
        items: [
          'projects/instabot', 
        ],
      },
      {
        type: 'category',
        label: 'Hackathons',
        items: [
          'hackathons', 
        ],
      },
      {
        type: 'category',
        label: 'Freelancing',
        items: [
          'freelancing', 
        ],
      },
      ],
    },
    'achievements',

  ],
};
