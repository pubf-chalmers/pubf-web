<template>
    <basic-layout>
        <v-container>
            <v-card style="padding: 8px 8px 0; margin-bottom: 60px;">
                <v-card-title v-intersect="onScroll">
                    <h1> {{ $page.title }} </h1>
                </v-card-title>
                <v-card-text>
                    <Content />
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
    </basic-layout>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import BasicLayout from "../components/basicLayout.vue";

@Options({
    components: {
        BasicLayout,
    }
})
export default class DefaultLayout extends Vue {
    showBtn = false;

    onScroll(isIntersecting: boolean) {
        this.showBtn = !isIntersecting;
    }
}
</script>

<style>
.v-main > .v-container > .v-card > .v-card-text > div > * {
    margin: 12px 0;
}
</style>
