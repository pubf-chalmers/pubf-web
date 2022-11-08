<template>
    <v-app>
        <navbar/>
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Navbar from "./navbar.vue";

@Options({
    components: {
        Navbar
    }
})
export default class Basic extends Vue {}
</script>

<style>
    .v-main {
        background-image: url("/wallpaper.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
    }
</style>
