<template>
  <v-img
    class="full-height"
    src="../assets/macbook_gray.jpg"
    :srcset="srcSet"
    gradient="to top, rgba(255,255,255,0), rgba(38, 50, 56,.5)"
  >
    <v-container>
      <v-row class="mt-1">
        <v-col class="text-center text--orange">
          <span
            :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
            >Willkommen auf
          </span>
          <br />
          <span
            :class="[$vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4']"
            >kopf.codes</span
          >
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="text-center">
          <v-btn fab outlined @click="$vuetify.goTo('#about-me')">
            <v-icon>mdi-chevron-double-down</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Banner extends Vue {
  get srcSet(): string {
    return `
    ${require("@/assets/macbook_gray.500.jpg")} 500w,
    ${require("@/assets/macbook_gray.800.jpg")} 800w,
    ${require("@/assets/macbook_gray.1024.jpg")} 1024w,
    ${require("@/assets/macbook_gray.1400.jpg")} 1400w,
    ${require("@/assets/macbook_gray.2000.jpg")} 2000w,
    ${require("@/assets/macbook_gray.2600.jpg")} 2600w,
    ${require("@/assets/macbook_gray.3840.jpg")} 3840w`;
  }
}
</script>

<style lang="scss" scoped>
.full-height {
  height: 100vh;
}

span {
  text-shadow: -1px -1px 0 #aaa, 1px -1px 0 #aaa, -1px 1px 0 #000,
    1px 1px 0 #000;
  color: #424242;
}
</style>
