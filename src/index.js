import { bro } from "./bro";
import "./styles/main.scss";
import Vue from "vue";
import App from "./components/App.vue";

console.log("Environment variable demo: " + process.env.DEMO);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

document.querySelector("h1").textContent = bro(`How's it going`);
