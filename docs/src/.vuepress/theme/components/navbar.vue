<template>
    <v-app-bar>
        <v-app-bar-nav-icon @click="$router.push('/')"> <v-img width="48px" src="/pubf-logo.png"/> </v-app-bar-nav-icon>
        <v-app-bar-title>
            <v-btn to="/" variant="text" color="" :active="false">
                <span class="hidden-sm-and-down"> Lindholmens Pubförening </span>
                <span class="hidden-md-and-up"> PubF </span>
            </v-btn>
        </v-app-bar-title>
        <v-spacer/>
        <v-tabs height="100%">
            <v-tab to="/"> Home </v-tab>
            <v-tab to="/guide"> Docs </v-tab>
            <v-tab to="/config"> About </v-tab>
        </v-tabs>
    </v-app-bar>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Navbar extends Vue {}
</script>
