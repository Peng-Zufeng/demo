<template>
  <div class="app">
    <v-mymenu :routes="routes" class="menu left" />
    <div class="right">
      <v-exit class="exit" />
      <v-page class="page" />
      <v-copyright class="copyright" />
    </div>
  </div>
</template>
<script>
import vExit from "@/components/v-exit.vue";
import vMymenu from "@/components/v-mymenu.vue";
import vPage from "@/components/v-page.vue";
import vCopyright from "@/components/v-copyright.vue";
import router from "@/router";
export default {
  data() {
    return {
      msg: "home",
      routes: router.options.routes,
    };
  },
  components: {
    vExit,
    vMymenu,
    vPage,
    vCopyright,
  },
};
</script>
<style scoped>
.app {
  height: 100%;
}
.left {
  position: absolute;
  top: 0;
  left: 0;
}
.right {
  width: calc(100% - 230px);
  height: 100%;
  position: relative;
  top: 0;
  left: 230px;
}
.exit {
  position: absolute;
  top: 0;
}
.page {
  position: absolute;
  top: 56px;
}
.copyright {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
