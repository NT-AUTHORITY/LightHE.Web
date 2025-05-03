import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LightHE SMP",
  description: "A MINECRAFT SERVER",
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
