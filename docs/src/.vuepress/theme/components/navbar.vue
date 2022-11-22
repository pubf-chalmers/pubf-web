<template>
    <v-app-bar>
        <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" style="color: inherit !important;" @click="drawer = !drawer"/>
        <v-btn height="100%" density="compact" style="padding: 0;" to="/" :active="false">
            <v-img width="48px" src="/pubf-logo.png"/>
        </v-btn>
        <v-app-bar-title style="margin: 0;">
            <v-btn to="/" variant="text" color="" :active="false">
                <span v-if="$vuetify.display.smAndUp"> Lindholmens Pubförening </span>
                <span v-else> PubF </span>
            </v-btn>
        </v-app-bar-title>

        <v-spacer/>

        <v-tabs v-if="$vuetify.display.mdAndUp" height="100%">
            <v-tab> Dokument </v-tab>
            <v-tab to="/guide"> Boka </v-tab>
            <v-tab to="/config"> Om PubF </v-tab>
            <v-tab> Hitta </v-tab>
        </v-tabs>
        <v-btn icon color="" :size="$vuetify.display.xs ? 'small' : 'default'"> <v-icon> mdi-instagram </v-icon> </v-btn>
        <v-btn icon color="" :size="$vuetify.display.xs ? 'small' : 'default'"> <v-icon> mdi-facebook </v-icon> </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-if="$vuetify.display.smAndDown" v-model="drawer">
        <v-list color="primary" nav>
            <v-list-item to="/">
                <template #prepend> <v-icon> mdi-home </v-icon> </template>
                <v-list-item-title> Startsida </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <template #prepend> <v-icon> mdi-home </v-icon> </template>
                <v-list-item-title> Dokument </v-list-item-title>
            </v-list-item>
            <v-list-item to="/guide">
                <template #prepend> <v-icon> mdi-file </v-icon> </template>
                <v-list-item-title> Boka </v-list-item-title>
            </v-list-item>
            <v-list-item to="/config">
                <template #prepend> <v-icon> mdi-account </v-icon> </template>
                <v-list-item-title> Om PubF </v-list-item-title>
            </v-list-item>
            <v-list-item to="/config">
                <template #prepend> <v-icon> mdi-pin </v-icon> </template>
                <v-list-item-title> Hitta 11:an</v-list-item-title>
            </v-list-item>

        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Navbar extends Vue {
    drawer = false;
}
</script>

<style>
.v-toolbar-title__placeholder{
    width: fit-content;
}
</style>
