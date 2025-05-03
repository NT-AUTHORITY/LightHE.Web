import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LightHE SMP",
  description: "A MINECRAFT SERVER",

  // Configure localization
  locales: {
    zh: {
      label: '中文',
      lang: 'zh-CN',
      description: "A MINECRAFT SERVER",
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '加入服务器', link: '/zh/join-server' }
        ],
        sidebar: [
          {
            text: '如何加入',
            items: [
              { text: '加入服务器', link: '/zh/join-server' },
              { text: '直连IP', link: '/zh/direct-ip' },
              { text: '下载RadminVPN', link: '/zh/get-radmin' }
            ]
          },
          {
            text: '信息',
            items: [
              { text: '服务器信息', link: '/zh/server-info' },
              { text: '发送反馈', link: '/zh/send-feedback' }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      description: "A MINECRAFT SERVER",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Join Server', link: '/en/join-server' }
        ],
        sidebar: [
          {
            text: 'How to join',
            items: [
              { text: 'Join Server', link: '/en/join-server' },
              { text: 'Direct IP', link: '/en/direct-ip' },
              { text: 'RadminVPN Download', link: '/en/get-radmin' }
            ]
          },
          {
            text: 'Information',
            items: [
              { text: 'Server Info', link: '/en/server-info' },
              { text: 'Send Feedback', link: '/en/send-feedback' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Join Server', link: '/join-server' }
    ],

    sidebar: [
      {
        text: 'How to join',
        items: [
          { text: 'Join Server', link: '/join-server' },
          { text: 'Direct IP', link: '/direct-ip' },
          { text: 'RadminVPN Download', link: '/get-radmin' }
        ]
      },
      {
        text: 'Information',
        items: [
          { text: 'Server Info', link: '/server-info' },
          { text: 'Send Feedback', link: '/send-feedback' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NT-AUTHORITY' }
    ]
  }
})
