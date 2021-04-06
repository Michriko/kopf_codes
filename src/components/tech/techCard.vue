<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <p>{{ description }}</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TechCard extends Vue {
  @Prop(String) title?: string;
  @Prop(String) description?: string;
}
</script>
