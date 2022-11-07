import { defineClientConfig } from '@vuepress/client'
import {createVuetify} from "vuetify";
import * as vuetifyComponents from "vuetify/components";
import * as vuetifyDirectives from "vuetify/directives";

/**
 * Client app enhancement file.
 *
 * https://v2.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default defineClientConfig({
    enhance({app}){
        const vuetify = createVuetify({
            components: vuetifyComponents,
            directives: vuetifyDirectives,
        })
        app.use(vuetify)
    }
})
