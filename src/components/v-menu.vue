<template>
    <div>
        <router-link v-for="menuFirst in routes" :key="menuFirst.name" @click="toRedict(menuFirst)" to="">
            <div  class="menuFirst" >
                <span >{{menuFirst.meta.title}}</span>
            </div>
            <div  class="menuSecond">
                <router-link v-for="menuSecond in menuFirst.children" :key="menuSecond.name" to="">
                <span >{{menuSecond.meta.title}}</span>
            </router-link>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        routes: Array
    },
    methods: {
        toRedict(menuFirst) {
            console.log(menuFirst.path);
            return menuFirst.path;
        },
        changeActive(name) {
            if (name === this.$routes.meta.title) {
                return ;
            }
        }
    }
}
</script>

<style scoped>
div {
    width: 230px;
    /* height: 961px; */
    height: 100%;
    background-color: black;
}
a {
    display: block;
    color: white;
    text-decoration: none;
}
.menuFirst {
    padding-left: 50px;
    margin: 20px 0;
    font-size: 16px;
    font-weight: bold;
}
.menuSecond a{
    padding-left: 50px;
    margin: 10px 0;
    font-size: 14px;
}
/* .menuSecond{
    display: none;
} */
</style>