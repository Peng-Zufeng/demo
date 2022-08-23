<template>
  <div id="app">
    <div>{{msg}}</div>
    <router-link to="/pageOne" class="nav-link">pageOne</router-link>
    <router-link to="/pageTwo" class="nav-link">pageTwo</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return{
      msg:"home"
    }
  }
}
</script>
<style scoped>
#app {
  margin: 10px auto;
  width: 100px;
  height: 65px;
}
.nav-link {
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
}
</style>
