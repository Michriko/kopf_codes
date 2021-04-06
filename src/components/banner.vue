<template>
  <v-img src="../assets/macbook_gray.jpg">
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

<script language="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Banner extends Vue {}
</script>

<style lang="scss" scoped>
span {
  text-shadow: -1px -1px 0 #aaa, 1px -1px 0 #aaa, -1px 1px 0 #000,
    1px 1px 0 #000;
  color: #424242;
}
</style>
