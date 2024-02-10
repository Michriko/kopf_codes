<template>
  <v-app class="grey--text text--lighten-2">
    <v-app-bar app class="d-flex" color="primary">
      <template v-slot:prepend>
        <router-link to="home">
          <v-img
            alt="kopf.codes logo"
            class="shrink mr-2"
            contain
            src="./assets/logo.svg"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </template>
      <v-app-bar-title class="text-h4">kopf.codes</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="justify-center" height="100">
      <footer-content />
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.text-h4 {
  line-height: 2.5rem;
}
</style>
