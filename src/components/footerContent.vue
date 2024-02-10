<template>
  <div class="d-flex justify-center">
    <span>&copy; {{ new Date().getFullYear() }} - Michael Kopf</span>
    <router-link class="mx-2" to="about">Impressum</router-link>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
div {
  * {
    margin-right: 8px;
    margin-left: 8px;
  }
}
</style>
