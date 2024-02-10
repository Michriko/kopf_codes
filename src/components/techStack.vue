<template>
  <v-container class="bg-blue-grey text-center" fluid>
    <v-row>
      <v-col>
        <h2>Techstack</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-container>
          <v-row>
            <v-col v-for="(tech, index) in techs" :key="index">
              <tech-card
                :description="tech.items"
                :icon="tech.icon"
                :title="tech.title"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import TechCard from "./tech/techCard.vue";
import { ref } from "vue";

const techs = ref<{ title: string; items: string[]; icon?: string }[]>([
  {
    title: "Frontend",
    items: [
      "Angular",
      "HTML5",
      "CSS3",
      "TypeScript",
      "VueJS",
      "Vuetify",
      "ASP.Net Core MVC",
    ],
    icon: "mdi-monitor-dashboard",
  },
  {
    title: "Backend",
    items: [
      "C#",
      ".NET Core",
      ".NET Framework",
      "EntityFramework",
      "T-SQL",
      "REST",
      "GraphQL",
    ],
    icon: "mdi-server-network",
  },
  {
    title: "DevOps",
    icon: "mdi-all-inclusive-box",
    items: [
      "Kubernetes",
      "Azure",
      "Teamcity",
      "Linux",
      "Docker",
      "Terraform",
      "Prometheus/Grafana",
      "Elasticsearch",
    ],
  },
  {
    title: "Misc",
    items: ["GIT", "DomainDrivenDesign", "Clean Code", "Agile", "jira"],
    icon: "mdi-xml",
  },
  {
    title: "Zertifizierungen",
    icon: "mdi-certificate",
    items: ["CKAD-2022", "Microsoft AZ 900 - 2023"],
  },
]);
</script>

<style lang="scss" scoped></style>
