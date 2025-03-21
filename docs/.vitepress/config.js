export default {
  base: '/docs/',
  title: 'DU3L73K',
  description: 'Official documentation for the Dueltek project',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is Dueltek?', link: '/guide/' },
            { text: 'Hosting', link: '/guide/host' },
            { text: 'Betting', link: '/guide/betting' }
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/du3l73K/' },
      { icon: 'telegram', link: 'https://t.me/BE_Base' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present DU3L73K'
    }
  }
} 