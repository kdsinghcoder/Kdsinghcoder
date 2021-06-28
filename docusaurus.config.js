const { Agile, generateId } = require('@agile-ts/core');
const { AgileHOC, useAgile, useWatcher, useProxy } = require('@agile-ts/react');
const { Event, useEvent } = require('@agile-ts/event');
const { toast } = require('react-toastify');

const githubOrgUrl = 'https://github.com/kdsinghcoder';
const domain = 'https://kdsinghcoder.github.io';
const npmOrgUrl = 'https://www.npmjs.com/package/@agile-ts';

const customFields = {
  copyright: `Created with 💜 in India     |    Copyright © ${new Date().getFullYear()} <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/karandchandi">Karandeep Singh</a>`,
  meta: {
    title: "Let's code",
    image: '/img/kd.png',
    description:
      'AgileTs is a global open source State and Logic Framework, which makes State Management fast, easy and overall fun.',
    color: '#6c69a0',
  },
  domain,
  githubOrgUrl,
  githubUrl: `${githubOrgUrl}`,
  githubDocsUrl: `${githubOrgUrl}/documentation`,
  npmCoreUrl: `${npmOrgUrl}/core`,
  instagram: `https://www.instagram.com/karandeepsingh_chandi/`,
  stackoverflowUrl: 'https://stackoverflow.com/questions/tagged/agile-ts',
  twitterUrl: 'https://twitter.com/karandchandi',
  redditUrl: 'https://www.reddit.com/r/AgileTs/',
  GitStats: 'https://gitstats.me/kdsinghcoder',
  version: '0.0.1',
  announcementBar: {
    id: 'announcement',
    content: [
      `❓ If you have any questions, don't hesitate simply connect to me on <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/karandeepsingh_chandi/">Insta</a> ️`,
      `🎉 !️If you like my work, follow me on <a target="_blank" rel="noopener noreferrer" href="https://github.com/kdsinghcoder">GitHub</a>`,
      `⏰ My project Docstream is open for contributions, check this out  <a target="_blank" rel="noopener noreferrer" href="https://github.com/kdsinghcoder/docstream">Docstream</a>`,
    ],
    random: false,
    interval: 100000,
  },
  liveCodeScope: {
    Agile,
    useAgile,
    useProxy,
    useEvent,
    useWatcher,
    AgileHOC,
    generateId,
    toast,
    Event,
  },
};

const config = {
  title: 'Kd Singh',
  tagline: 'A Bug is not a four letter word… but often your reaction to it is! 😂',
  url: customFields.domain,
  baseUrlIssueBanner: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/kd.png',
  organizationName: 'AgileTs',
  projectName: 'agilets',
  themes: ['@docusaurus/theme-live-codeblock'],
  scripts: [{ src: 'https://snack.expo.io/embed.js', async: true }], // https://github.com/expo/snack/blob/main/docs/embedding-snacks.md
  plugins: [
    'docusaurus-plugin-sass',
    // @docusaurus/plugin-google-analytics (Not necessary because it automatically gets added)
  ],
  customFields: { ...customFields },
  themeConfig: {
    hideableSidebar: false,
    algolia: {
      apiKey: '6b7b98565bb82e16996fd185f378d618',
      indexName: 'agile-ts',
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: '/img/kd.png', // Gets used in Head as Meta Image (og:image)
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: ' ',
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        src: 'img/kd.png',
      },
      items: [
        // left
        {
          label: 'About',
          position: 'left',
          to: '/docs/introduction/',
        },
        {
          label: 'Projects',
          position: 'left',
          items: [
            {
              label: 'all',
              to: '/docs/intro',
            },
            {
              label: 'DocStream ❤',
              to: '/docs/docstream',
            },
            {
              label: 'Say Hello 👋',
              to: '/docs/sayhello',
            },
            {
              label: 'Bond Mantainer 👩🏼‍🤝',
              to: '/docs/bondmantainer',
            },
            {
              label: 'Travel Buddy 🚄',
              to: '/docs/travelbuddy',
            },
            {
              label: 'Insta Bot 🤖',
              to: '/docs/instabot',
            },
          ],
        },
        {
          label: 'Connect',
          position: 'left',
          items: [
            {
              label: 'GitHub',
              href: customFields.githubUrl,
            },
            {
              label: 'Instagram',
              href: customFields.instagram,
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
            },
            {
              label: "Git Stats",
              href: customFields.GitStats,
            },
          ],
        },
        {
          label: 'Resume',
          position: 'right',
          to: 'docs/instabot',
        },
      ],
    },
    footer: {
      copyright: customFields.copyright,
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Introduction',
              to: 'docs/introduction',
            }
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'all',
              to: '/docs/intro',
            },
            {
              label: 'DocStream ❤',
              to: '/docs/docstream',
            },
            {
              label: 'Say Hello 👋',
              to: '/docs/sayhello',
            },
            {
              label: 'Bond Mantainer 👩🏼‍🤝',
              to: '/docs/bondmantainer',
            },
            {
              label: 'Travel Buddy 🚄',
              to: '/docs/travelbuddy',
            },
            {
              label: 'Insta Bot 🤖',
              to: '/docs/instabot',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: customFields.githubUrl,
            },
            {
              label: 'Instagram',
              href: customFields.instagram,
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
            },
            {
              label: "Git Stats",
              href: customFields.GitStats,
            },
          ],
        },
      ],
    },
    googleAnalytics: {
      trackingID: 'UA-189394644-1',
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          admonitions: {
            icons: 'emoji',
          },
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${customFields.githubDocsUrl}/tree/develop`,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
          editUrl: `${customFields.githubDocsUrl}/tree/develop`,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
      },
    ],
  ],
};

module.exports = { ...config };
