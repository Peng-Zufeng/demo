<template>
  <div class="container">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  height: calc(100% - 105px);
  width: 1690px;
  overflow: auto;
}
.view {
  /* margin-top: 14px; */
  /* margin-left: 30px; */
  margin: 14px 30px;
}
</style>