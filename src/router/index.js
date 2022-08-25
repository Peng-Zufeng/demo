import VueRouter from 'vue-router';
const Menu = {
  render(h) {
    return h("router-view");
  }
};
const routes = [
  {
    path: "/",
    name: "Basic",
    redict: "/basic/CableTest",
    component: Menu,
    meta: {
      title: "Basic Function"
    },
    children: [
      {
        path: "/basic/CableTest",
        name: "CableTest",
        component: () => import("@/view/basic/CableTest.vue"),
        meta: {
          title: "Cable Test"
        }
      },
      {
        path: "/basic/CloudManagement",
        name: "CloudManagement",
        component: () => import("@/view/basic/CloudManagement.vue"),
        meta: {
          title: "Cloud Management"
        }
      },
      {
        path: "/basic/Configuration",
        name: "Configuration",
        component: () => import("@/view/basic/Configuration.vue"),
        meta: {
          title: "Configuration"
        }
      },
      {
        path: "/basic/Diagnosis",
        name: "Diagnosis",
        component: () => import("@/view/basic/Diagnosis.vue"),
        meta: {
          title: "Diagnosis"
        }
      },
      {
        path: "/basic/Maintain",
        name: "Maintain",
        component: () => import("@/view/basic/Maintain.vue"),
        meta: {
          title: "Maintain"
        }
      },
      {
        path: "/basic/SystemView",
        name: "SystemView",
        component: () => import("@/view/basic/SystemView.vue"),
        meta: {
          title: "System overview"
        }
      },
      {
        path: "/basic/VLan",
        name: "VLan",
        component: () => import("@/view/basic/VLan.vue"),
        meta: {
          title: "vlan Management",
        }
      },
      {
        path: "/basic/UserManage",
        name: "UserManage",
        component: () => import("@/view/basic/UserManage.vue"),
        meta: {
          title: "User Management"
        }
      }
    ]
  },
  {
    path: "/network",
    name: "Network",
    redict: "/network/DHCPSnooping",
    component: Menu,
    meta: {
      title: "Network Security"
    },
    children: [
      {
        path: "/network/DHCPSnooping",
        name: "DHCPSnooping",
        component: () => import("@/view/network/DHCPSnooping.vue"),
        meta: {
          title: "DHCP Snooping"
        }
      },
      {
        path: "/network/MACBinding",
        name: "MACBinding",
        component: () => import("@/view/network/MACBinding.vue"),
        meta: {
          title: "MAC Binding"
        }
      }
    ]
  },
  {
    path: "/PoeManagement",
    name: "Poe",
    redict: "/PoeManagement",
    meta: {
      title: "Poe Management"
    },
    component: () => import("@/view/poe/PoEPower.vue")
  },
  {
    path: "/switch",
    name: "Switch",
    redict: "/switch/LoopGuard",
    component: Menu,
    meta: {
      title: "Switching"
      },
    children: [
      {
        path: "/switch/LoopGuard",
        name: "LoopGuard",
        meta: {
          title: "Loop Guard"
        },
        component: () => import("@/view/switch/LoopGuard.vue")
      },
      {
        path: "/switch/Mirroring",
        name: "Mirroring",
        meta: {
          title: "Port Mirroring"
        },
        component: () => import("@/view/switch/Mirroring.vue")
      },
      {
        path: "/switch/NetworkExtension",
        name: "NetworkExtension",
        meta: {
          title: "Network Extension"
        },
        component: () => import("@/view/switch/NetworkExtension.vue")
      },
      {
        path: "/switch/Statistics",
        name: "Statistics",
        meta: {
          title: "Port Statistics"
        },
        component: () => import("@/view/switch/Statistics.vue")
      },
      {
        path: "/switch/RateLimit",
        name: "RateLimit",
        meta: {
          title: "Port Rate Limit"
        },
        component: () => import("@/view/switch/RateLimit.vue")
      }
    ]
  }
];
export default new VueRouter(
  {
    routes
  }
);
