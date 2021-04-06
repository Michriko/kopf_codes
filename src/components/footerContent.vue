<template>
  <div class="d-flex justify-center">
    <span>&copy; {{ new Date().getFullYear() }} - Michael Kopf</span>
    <router-link to="about" class="mx-2">Impressum</router-link>
  </div>
</template>

<script language="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class FooterContent extends Vue {}
</script>
<style lang="scss" scoped>
div {
  * {
    margin-right: 8px;
    margin-left: 8px;
  }
}
</style>
