<template>
  <v-app class="grey--text text--lighten-2">
    <v-app-bar app color="primary" class="d-flex">
      <router-link to="home">
        <v-img
          :src="require('@/assets/logo.svg')"
          contain
          alt="kopf.codes logo"
          class="shrink mr-2"
          transition="scale-transition"
          width="40"
        />
      </router-link>
      <h1 class="display-1">kopf.codes</h1>
    </v-app-bar>
    <v-main><router-view /></v-main>
    <v-footer class="justify-center" height="100">
      <footer-content />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import footerContent from "@/components/footerContent.vue";

@Component({
  components: {
    footerContent,
  },
})
export default class App extends Vue {}
</script>
