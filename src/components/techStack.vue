<template>
  <v-container fluid class="blue-grey text-center">
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
                :title="tech.title"
                :icon="tech.icon"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TechCard from "./tech/techCard.vue";

@Component({
  components: { TechCard },
})
export default class TechStack extends Vue {
  techs: { title: string; items: string[]; icon?: string }[] = [
    {
      title: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "TypeScript",
        "VueJS",
        "Vuetify",
        "Angular",
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
        "Java",
        "Python",
        "R",
      ],
      icon: "mdi-server-network",
    },
    {
      title: "Misc",
      items: [
        "Kubernetes",
        "GIT",
        "SVN",
        "Teamcity",
        "Linux",
        "Docker",
        "Prometheus/Grafana",
        "ELK",
        "pyTorch",
        "openCV",
      ],
      icon: "mdi-xml",
    },
  ];
}
</script>

<style language="scss" scoped></style>
