import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import BaseCard from "./components/ui/BaseCard.vue";

import "./index.css";

library.add(faUserSecret, faCircle);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("base-card", BaseCard)
  .mount("#app");
