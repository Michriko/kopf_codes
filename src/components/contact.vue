<template>
  <v-container class="secondary text-center" fluid>
    <h2>Kontakt</h2>
    <p class="py-3">
      Sie erreichen mich unter Xing, LinkedIn, oder per Mail. Ich freue mich auf
      Ihre Nachricht.
    </p>
    <v-row class="py-3">
      <v-col v-for="(contactType, index) in contactTypes" :key="index">
        <v-btn
          :href="contactType.url"
          :icon="contactType.icon"
          target="_blank"
          x-large
          v-on:click="onButtonClick(contactType)"
        >
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
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

const contactTypes: ContactType[] = [
  {
    url: "https://www.xing.com/profile/Michael_Kopf29/",
    icon: "kc:xing",
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

function onButtonClick(contactType: ContactType): void {
  if (!contactType.onClick) {
    return;
  }
  contactType.onClick();
}
</script>
