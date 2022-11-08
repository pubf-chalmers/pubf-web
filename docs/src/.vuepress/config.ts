import {defaultTheme, defineUserConfig, viteBundler} from "vuepress";
import {backToTopPlugin} from "@vuepress/plugin-back-to-top";
import {mediumZoomPlugin} from "@vuepress/plugin-medium-zoom";
import {PubfTheme} from "./theme/theme";


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
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/vuetify@3.0.0/dist/vuetify.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: PubfTheme({}),

    /**
   * Apply plugins，ref：https://v2.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
  ]
})
