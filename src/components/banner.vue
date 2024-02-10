<template>
  <v-img
    :srcset="srcSet"
    class="full-height"
    cover
    gradient="to top, rgba(255,255,255,0), rgba(38, 50, 56,.5)"
    src="@/assets/macbook_gray.jpg"
  >
    <v-container>
      <v-row class="mt-1">
        <v-col class="text-center text--orange">
          <span :class="[smAndDown ? 'text-h4' : 'text-h3']"
            >Willkommen auf
          </span>
          <br />
          <span :class="[smAndDown ? 'text-h2' : 'text-h1']">kopf.codes</span>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="text-center">
          <v-btn
            icon="mdi-chevron-double-down"
            variant="tonal"
            @click="goto('#about-me')"
          >
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script lang="ts" setup>
import { useDisplay, useGoTo } from "vuetify";

const { smAndDown } = useDisplay();
const goto = useGoTo();

const srcSet = `
  ./src/assets/macbook_gray.500.jpg 500w,
  ./src/assets/macbook_gray.800.jpg 800w,
  ./src/assets/macbook_gray.1024.jpg 1024w,
  ./src/assets/macbook_gray.1400.jpg 1400w,
  ./src/assets/macbook_gray.2000.jpg 2000w,
  ./src/assets/macbook_gray.2600.jpg 2600w,
  ./src/assets/macbook_gray.3840.jpg 3840w`;
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
