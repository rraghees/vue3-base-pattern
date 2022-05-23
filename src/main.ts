import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";

//Global Coimponent Registration
import Icon from "@/shared/components/general/Icon.vue";
import Card from "@/shared/components/general/Card.vue";
import Input from "@/shared/components/general/Input.vue";
import Modal from "@/shared/components/general/Modal.vue";
import Select from "@/shared/components/general/Select.vue";
import Toggle from "@/shared/components/general/Toggle.vue";
import Checkbox from "@/shared/components/general/Checkbox.vue";
import Button from "@/shared/components/general/Button.vue";
import Table from "@/shared/components/general/Table/Table.vue";

createApp(App)
  .use(router)
  .use(Quasar, quasarUserOptions)
  .use(createPinia().use(piniaPersist))
  .component("Icon", Icon)
  .component("Card", Card)
  .component("Modal", Modal)
  .component("Table", Table)
  .component("Input", Input)
  .component("Toggle", Toggle)
  .component("Select", Select)
  .component("Button", Button)
  .component("Checkbox", Checkbox)
  .mount("#app");
