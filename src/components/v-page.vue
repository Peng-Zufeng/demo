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
    overflow: auto;
    width: calc(100% - 230px);
    height: 100%;
    margin-top: 14px;
    margin-left: 30px;
}
</style>