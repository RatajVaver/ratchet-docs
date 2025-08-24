import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  title: "Ratchet",
  description: "Conan Exiles Script Extender",
  appearance: "dark",
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Setup', link: '/getting-started' },
      { text: 'Development', link: '/functions' },
    ],

    sidebar: [
      {
        text: 'Server Configuration',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Plugin Manager', link: '/plugin-manager' },
          { text: 'Hot Reload', link: '/hot-reload' },
          { text: 'Web Server', link: '/web-server' },
          { text: 'Scheduler', link: '/scheduler' },
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Functions', link: '/functions' },
          { text: 'Variables', link: '/variables' },
          { text: 'Objects', link: '/objects' },
          { text: 'Files', link: '/files' },
          { text: 'Events', link: '/events' },
          { text: 'Exports', link: '/exports' },
          { text: 'Timers', link: '/timers' },
          { text: 'Database', link: '/database' },
          { text: 'Vectors', link: '/vectors' },
          { text: 'Characters', link: '/characters' },
        ]
      },
      {
        text: 'Libraries',
        items: [
          { text: 'Dice', link: '/dice' },
          { text: 'Web', link: '/web' },
          { text: 'JSON', link: '/json' },
        ]
      },
      {
        text: 'Mods',
        items: [
          { text: 'Mod compatibility', link: '/mods' },
          { text: 'Tot ! Chat', link: '/totchat' },
          { text: 'Tot ! Sudo', link: '/totsudo' },
          { text: 'Tot ! Admin', link: '/totadmin' },
          { text: 'Tot ! Custom', link: '/totcustom' },
          { text: 'Roleplay Redux', link: '/redux' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RatajVaver/ratchet-docs' },
      { icon: 'discord', link: 'https://discord.gg/3WJNxCTn8m' },
      { icon: 'kofi', link: 'https://ko-fi.com/rataj' },
    ],

    search: {
      provider: 'local'
    }
  }
})
