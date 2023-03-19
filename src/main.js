import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersist from 'pinia-plugin-persist';
import "./index.css";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
const pinia = createPinia()
pinia.use(piniaPluginPersist);
app.use(router).use(pinia).mount("#app");
