import Vue from "vue";
import App from "./App.vue";
import ReasyUi from "@reasy-team/reasy-ui/dist/ipcom/reasy-ui.js";
import "@reasy-team/reasy-ui/dist/ipcom/style.css";
import VueRouter from "vue-router";
import global from "./common/global";
import router from "@/router/index";

Vue.use(VueRouter);
Vue.use(global);
Vue.use(ReasyUi);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
