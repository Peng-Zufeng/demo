const routes = [
  {
    path: "/",
    alias: "/menu1",
    name: "menu1",
    redirect: "/menu1",
    component: () => require("@/view/pageOne.vue"),
    meta: {
      title: "菜单1"
    }
  },
  {
    path: "/menu2",
    name: "menu2",
    component: () => require("@/view/pageTwo.vue"),
    meta: {
      title: "菜单2"
    }
  }
];
export default routes;
