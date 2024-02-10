<template>
  <v-card class="py-4 h-100">
    <v-icon size="x-large">{{ props.icon }}</v-icon>
    <v-card-title class="block text-center">{{ title }}</v-card-title>
    <v-card-text>
      <v-chip v-for="(item, index) in description" :key="index" class="ma-1">
        {{ item }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string[];
  icon: string | undefined;
}>();
</script>
<style lang="scss" scoped>
.block {
  display: block;
}
</style>
