import Vue from "vue";
import App from "./App.vue";
import { Vuelidate } from "./common";

Vue.use(Vuelidate);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
