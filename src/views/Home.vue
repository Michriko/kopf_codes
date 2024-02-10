<template>
  <v-container class="pa-0" fluid>
    <v-row class="ma-0">
      <v-col class="pa-0">
        <banner id="banner" width="100vw" />
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col class="pa-0">
        <about-me id="about-me" />
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col class="pa-0">
        <tech-stack />
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col class="pa-0">
        <contact />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import AboutMe from "@/components/aboutMe.vue";
import Banner from "@/components/banner.vue";
import Contact from "@/components/contact.vue";
import TechStack from "@/components/techStack.vue";
</script>

<style lang="scss" scoped>
v-row {
  margin: 0;
}
</style>
