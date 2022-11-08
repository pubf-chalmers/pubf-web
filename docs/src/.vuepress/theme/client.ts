import {defineClientConfig} from "@vuepress/client";
import {createVuetify} from "vuetify";
import * as vuetifyComponents from "vuetify/components";
import * as vuetifyDirectives from "vuetify/directives";
import { md2 } from "vuetify/blueprints";
import Layout from "./layouts/default.vue";
import NotFound from "./layouts/error404.vue";


export default defineClientConfig({
    enhance({app}){
        const vuetify = createVuetify({
            components: vuetifyComponents,
            directives: vuetifyDirectives,
            blueprint: md2,
            theme: {
                defaultTheme: 'pubf',
                themes: {
                    pubf: {
                        dark: true,
                        colors: {
                            primary: '#CF1312',
                        }
                    }
                }
            }
        })
        app.use(vuetify)
    },

    layouts: {
        Layout,
        NotFound
    }
})
