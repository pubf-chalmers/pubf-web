<template>
    <basic-layout>
        <v-container>
            <v-card style="padding: 8px 8px 0; margin-bottom: 60px;">
                <v-card-title v-intersect="onScroll">
                    <h1> {{ $page.title }} </h1>
                </v-card-title>
                <v-card-text>
                    <Content id="content"/>
                </v-card-text>
            </v-card>
        </v-container>
        <v-fab-transition>
            <v-btn
                v-show="showBtn"
                position="fixed" size="large"
                style="margin: 32px;"
                location="bottom right"
                icon="mdi-arrow-up-circle"
                href="#"
            />
        </v-fab-transition>
        <v-navigation-drawer :permanent="$vuetify.display.smAndUp" expand-on-hover :rail="$vuetify.display.smAndDown">
            <v-list color="primary" nav>
                <h5 style="padding-left: 8px"> Rubriker </h5>
                <v-list-item class="sidebar-item" href="#" :active="!$router.currentRoute.value.hash">
                    <v-list-item-title> {{$page.title}} </v-list-item-title>
                </v-list-item>
                <v-list-item
                    class="sidebar-item"
                    v-for="header of pageHeaders"
                    :key="header.slug"
                    :to="header.link"
                    :active="$router.currentRoute.value.hash === header.link"
                >
                    <v-list-item-title :style="'margin-left:' + (header.level - 2) * 8 + 'px; font-size: ' + (0.8 - (header.level - 2) * 0.07)  + 'em;' "> {{ header.title }} </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </basic-layout>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import BasicLayout from "../components/basicLayout.vue";

@Options({
    components: {
        BasicLayout
    }
})
export default class DefaultLayout extends Vue {
    showBtn = false;

    onScroll(isIntersecting: boolean) {
        this.showBtn = !isIntersecting;
    }

    get pageHeaders(){
        const flatten = (a: any[]) => {
            const arr = []
            for (const h of a){
                arr.push(h, ...flatten(h.children))
            }
            console.log(arr)
            return arr
        }

        return flatten((this as any).$page.headers)
    }
}
</script>

<style>
.v-main > .v-container > .v-card > .v-card-text > div > * {
    margin: 12px 0;
}

#content > h1:first-of-type{
    display: none;
}
</style>
