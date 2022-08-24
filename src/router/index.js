import VueRouter from 'vue-router';

const routes = [
  {
    path: "/",
    name: "Basic",
    redict: "/basic/CableTest",
    meta: {
      title: "Basic Function"
    },
    children: [
      {
        path: "CableTest",
        name: "CableTest",
        component: () => require("@/view/basic/CableTest.vue"),
        meta: {
          title: "Cable Test"
        }
      },
      {
        path: "CloudManagement",
        name: "CloudManagement",
        component: () => require("@/view/basic/CloudManagement.vue"),
        meta: {
          title: "Cloud Management"
        }
      },
      {
        path: "Configuration",
        name: "Configuration",
        component: () => require("@/view/basic/Configuration.vue"),
        meta: {
          title: "Configuration"
        }
      },
      {
        path: "Diagnosis",
        name: "Diagnosis",
        component: () => require("@/view/basic/Diagnosis.vue"),
        meta: {
          title: "Diagnosis"
        }
      },
      {
        path: "Maintain",
        name: "Maintain",
        component: () => require("@/view/basic/Maintain.vue"),
        meta: {
          title: "Maintain"
        }
      },
      {
        path: "SystemView",
        name: "SystemView",
        component: () => require("@/view/basic/SystemView.vue"),
        meta: {
          title: "System overview"
        }
      },
      {
        path: "VLan",
        name: "VLan",
        component: () => require("@/view/basic/VLan.vue"),
        meta: {
          title: "vlan Management",
        }
      },
      {
        path: "UserManage",
        name: "UserManage",
        component: () => require("@/view/basic/UserManage.vue"),
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
    meta: {
      title: "Network Security"
    },
    children: [
      {
        path: "DHCPSnooping",
        name: "DHCPSnooping",
        component: () => require("@/view/network/DHCPSnooping.vue"),
        meta: {
          title: "DHCP Snooping"
        }
      },
      {
        path: "MACBinding",
        name: "MACBinding",
        component: () => require("@/view/network/MACBinding.vue"),
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
    component: () => require("@/view/poe/PoEPower.vue")
  },
  {
    path: "/switch",
    name: "Switch",
    redict: "/switch/LoopGuard",
    meta: {
      title: "Switching"
      },
    children: [
      {
        path: "LoopGuard",
        name: "LoopGuard",
        meta: {
          title: "Loop Guard"
        },
        component: () => require("@/view/switch/LoopGuard.vue")
      },
      {
        path: "Mirroring",
        name: "Mirroring",
        meta: {
          title: "Port Mirroring"
        },
        component: () => require("@/view/switch/Mirroring.vue")
      },
      {
        path: "NetworkExtension",
        name: "NetworkExtension",
        meta: {
          title: "Network Extension"
        },
        component: () => require("@/view/switch/NetworkExtension.vue")
      },
      {
        path: "Statistics",
        name: "Statistics",
        meta: {
          title: "Port Statistics"
        },
        component: () => require("@/view/switch/Statistics.vue")
      },
      {
        path: "RateLimit",
        name: "RateLimit",
        meta: {
          title: "Port Rate Limit"
        },
        component: () => require("@/view/switch/RateLimit.vue")
      }
    ]
  }
];
export default new VueRouter(
  {
    routes
  }
);
