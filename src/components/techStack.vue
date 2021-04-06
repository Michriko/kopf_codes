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
              <tech-card :description="tech.description" :title="tech.title" />
            </v-col>
          </v-row>
        </v-container>
        <p>
          Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
          yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
          grog yardarm hempen halter furl. Swab barque interloper chantey
          doubloon starboard grog black jack gangway rutters. Deadlights jack
          lad schooner scallywag dance the hempen jig carouser broadside cable
          strike colors. Bring a spring upon her cable holystone blow the man
          down spanker Shiver me timbers to go on account lookout wherry
          doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm
          spyglass sheet transom heave to. Trysail Sail ho Corsair red ensign
          hulk smartly boom jib rum gangway. Case shot Shiver me timbers
          gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest
          rutters. Fluke jib scourge of the seven seas boatswain schooner gaff
          booty Jack Tar transom spirits.
        </p>
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
  techs: { title: string; description: string }[] = [
    {
      title: "Frontend",
      description: "VueJS & Vuetify, Angular, ASP.Net Core MVC",
    },
    {
      title: "Backend",
      description:
        ".NET Core, .NET Framework, EntityFramework, T-SQL, REST, GraphQL",
    },
    {
      title: "Misc",
      description:
        "Kubernetes, GIT, SVN, Teamcity, Linux, Prometheus/Grafana, ELK ",
    },
  ];
}
</script>

<style language="scss" scoped></style>
