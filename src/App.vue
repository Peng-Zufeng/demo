<template>
  <div>
    <v-exit class="exit"/>
    <v-menu :routes="routes" class="menu"/>
    <v-page class="page"/>
    <v-copyright class="copyright"/>
  </div>
</template>
<script>
import vExit from '@/components/v-exit.vue';
import vMenu from '@/components/v-menu.vue';
import vPage from '@/components/v-page.vue';
import vCopyright from '@/components/v-copyright.vue';
import router from '@/router';
export default {
  data(){
    return{
      msg:"home",
      // routes: [{meta:{title:"Home"}}]
      routes: router.options.routes
    }
  },
  components: {
    vExit,
    vMenu,
    vPage,
    vCopyright
  }
}
</script>
<style scoped>
.exit {
  position: fixed;
  left: 230px;
  top: 0;
}
.copyright {
  position: fixed;
  left: 230px;
  bottom: 0;
}
.menu {
  position: fixed;
  left: 0;
  top: 0;
}
.page {
  position: fixed;
  top: 56px;
  left: 230px;
}
</style>
