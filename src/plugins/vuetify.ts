import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import de from "vuetify/src/locale/de";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { de },
    current: "de",
  },
  iconfont: "mdi",
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blueGrey.base,
        secondary: colors.grey.darken3,
        accent: "#FF4081",
        error: "#FF5252",
        info: "#f3a221",
        success: "#4CAF50",
        warning: "#FB8C00",
      },
      light: {
        primary: colors.blueGrey.base,
      },
    },
  },
});
