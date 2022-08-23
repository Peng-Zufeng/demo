import Vue from "vue";
import App from "./App.vue";
import ReasyUi from "@reasy-team/reasy-ui/dist/ipcom/reasy-ui.js";
import "@reasy-team/reasy-ui/dist/ipcom/style.css";
import VueRouter from 'vue-router';
    
Vue.use(VueRouter);

import routes from "@/router/index";
Vue.use(ReasyUi);

Vue.config.productionTip = false;
const router = new VueRouter({
  routes
});


new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
