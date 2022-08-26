<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style scoped>
div {
    /* width: 1690px;
    height: 846px; */
    width: calc(100% - 230px);
    height: calc(100% - 115px);
    margin: 28px 30px;
}
</style>