<template>
  <v-container fluid>
    <v-row>
      <v-col class="pa-0">
        <banner id="banner" width="100vw" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <about-me id="about-me" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <tech-stack />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import AboutMe from "@/components/aboutMe.vue";
import Banner from "@/components/banner.vue";
import TechStack from "@/components/techStack.vue";

@Component({
  components: {
    AboutMe,
    Banner,
    TechStack,
  },
})
export default class Home extends Vue {}
</script>
