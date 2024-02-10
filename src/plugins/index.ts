import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { de } from "vuetify/locale";

import type { App } from "vue";

import colors from "vuetify/util/colors";
import { createVuetify, ThemeDefinition } from "vuetify";
import { mdi } from "vuetify/iconsets/mdi";
import { ownIconSet } from "@/icons/ownIcons";

const dark: ThemeDefinition = {
  colors: {
    primary: colors.blueGrey.base,
    secondary: colors.grey.darken3,
    error: "#FF5252",
    info: "#f3a221",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};
const light: ThemeDefinition = {
  colors: {
    primary: colors.blueGrey.base,
  },
};

const vuetify = createVuetify({
  locale: {
    locale: "de",
    messages: { de },
  },
  theme: {
    defaultTheme: "dark",
    themes: { dark, light },
  },
  icons: {
    defaultSet: "mdi",
    sets: { mdi, kc: ownIconSet },
  },
});

export function registerPlugins(app: App) {
  app.use(vuetify);
}
