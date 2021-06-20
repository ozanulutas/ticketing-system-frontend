import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from "@fortawesome/vue-fontawesome";
import { faHome, faUser, faTicketAlt, faHamburger, faFeatherAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
library.add(faHome, faUser, faTicketAlt, faBell, faHamburger, faFeatherAlt, faTrashAlt);


const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("font-awesome-layers", FontAwesomeLayers);
app.component("font-awesome-layers-text", FontAwesomeLayersText);

app.use(store).use(router);
app.mount("#app");
 