import {defaultTheme, defineUserConfig} from "vuepress";
import {backToTopPlugin} from "@vuepress/plugin-back-to-top";
import {mediumZoomPlugin} from "@vuepress/plugin-medium-zoom";


export default defineUserConfig({
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Vuepress Docs Boilerplate",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: defaultTheme({
    repo: '',
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    navbar: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v2.vuepress.vuejs.org'
      }
    ],
    sidebar: [
        {
            text: 'Guide',
            link: '/guide/',
            children: []
        }
    ]

  }),

    /**
   * Apply plugins，ref：https://v2.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
        backToTopPlugin(),
        mediumZoomPlugin({})
  ]
})
