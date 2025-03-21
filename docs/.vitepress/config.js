export default {
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
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Basic Usage', link: '/guide/basic-usage' },
            { text: 'Advanced Features', link: '/guide/advanced-features' }
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