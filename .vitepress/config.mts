import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "blaze🔥",
  description: "Docs for blaze go template",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Get started', link: '/markdown-examples' },
    ],
    search: { provider: "local" },
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/docs/overview.md' },
          { text: 'Create a project', link: '/docs/new-project' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/paologaleotti/blaze' }
    ]
  }
})
