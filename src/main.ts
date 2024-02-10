import { createApp } from "vue";
import { registerPlugins } from "./plugins";
import { registerRouter } from "@/router";
import App from "@/App.vue";

const app = createApp(App);
registerPlugins(app);
registerRouter(app);

app.mount("#app");
