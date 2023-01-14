import { createApp } from "vue";
import { setupRouter } from "@/router";
import { setupStore } from "@/store";
import {
  setupCustomComponents,
  setupGlobalMethods,
  setupDirectives,
  setupAssets,
} from "@/plugins";
import App from "./App.vue";

async function bootStrap() {
  setupAssets();
  const app = createApp(App);

  setupCustomComponents(app);
  setupGlobalMethods(app);
  setupDirectives(app);
  await setupStore(app);
  await setupRouter(app);

  app.mount("#app");
}
bootStrap();
