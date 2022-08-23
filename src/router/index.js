import pageOne from "../view/pageOne.vue"
import pageTwo from "../view/pageTwo.vue"
const routes = [
  // {
  //   path: "/",
  //   alias: "/menu1",
  //   name: "menu1",
  //   component: () => require("@/view/pageOne.vue"),
  //   meta: {
  //     title: "菜单1"
  //   }
  // },
  {
    path: "/pageOne",
    component:pageOne
  },
  {
    path: "/pageTwo",
    component:pageTwo
  }
];
export default routes;
