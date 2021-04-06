<template>
  <v-card class="py-4">
    <v-icon x-large>{{ icon }}</v-icon>
    <v-card-title class="block text-center">{{ title }}</v-card-title>
    <v-card-text>
      <v-chip v-for="(item, index) in description" :key="index" class="ma-1">
        {{ item }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TechCard extends Vue {
  @Prop(String) title!: string;
  @Prop(Array) description!: string[];
  @Prop(String) icon?: string;
}
</script>
<style lang="scss" scoped>
.block {
  display: block;
}
</style>
