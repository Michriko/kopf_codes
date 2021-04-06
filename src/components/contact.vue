<template>
  <v-container fluid class="secondary text-center">
    <h2>Kontakt</h2>
    <p class="py-3">
      Sie erreichen mich unter Xing, LinkedIn, oder per Mail. Ich freue mich auf
      Ihre Nachricht.
    </p>
    <v-row class="py-3">
      <v-col v-for="(contactType, index) in contactTypes" :key="index">
        <v-btn
          icon
          x-large
          :href="contactType.url"
          target="_blank"
          v-on:click="onButtonClick(contactType)"
        >
          <v-icon x-large>{{ contactType.icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getMailToInfoLink } from "@/util/email";

interface ContactType {
  url?: string;
  onClick?: () => void;
  icon: string;
}

function sendMail(): void {
  //prevent crawling the email address by bots
  const target = getMailToInfoLink();
  window.open(target);
}

@Component
export default class Contact extends Vue {
  contactTypes: ContactType[] = [
    {
      url: "https://www.xing.com/profile/Michael_Kopf29/",
      icon: "mdi-xing",
    },
    {
      url: "https://www.linkedin.com/in/michael-kopf-52018016b/",
      icon: "mdi-linkedin",
    },
    {
      url: "https://github.com/Michriko/",
      icon: "mdi-github",
    },
    {
      icon: "mdi-email",
      onClick: sendMail,
    },
  ];

  onButtonClick(contactType: ContactType): void {
    if (!contactType.onClick) {
      return;
    }
    contactType.onClick();
  }
}
</script>
