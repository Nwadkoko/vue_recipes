import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";
import RecipesList from "./components/recipes/RecipesList.vue";
import PlanningView from "./components/planning/PlanningView.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

library.add(faUserSecret, faCircle);

const routes = [
  { path: "/", component: RecipesList },
  { path: "/planning", component: PlanningView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.config.unwrapInjectedRef = true;
app.component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");
