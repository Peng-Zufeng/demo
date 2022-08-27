<template>
    <div>
        <router-link v-for="menuFirst in routes" :key="menuFirst.name" :to="menuFirst.redict">
            <div  class="menuFirst" @click="changeShow(menuFirst.name)">
                <span >{{menuFirst.meta.title}}</span>
            </div>
            <div  :class="['menuSecond',`menuSec-${menuFirst.name}`]" :ref="`menuSec-${menuFirst.name}`" v-show="openSec">
                <router-link v-for="menuSecond in menuFirst.children" :key="menuSecond.name" :to="menuSecond.path" @click="clickSecond(menuSecond)">
                <span >{{menuSecond.meta.title}}</span>
                </router-link>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeFirst: '',
            activeSecond: '',
            openSec: false
        }
    },
    props: {
        routes: Array
    },
    // watch: {
    //     $route:{
    //         handler(obj) {
    //             this.routes.forEach(element => {
    //                 if(element.name == obj.name) {
    //                     this.activeFirst = obj.name;
    //                     this.activeSecond = "";
    //                     return;
    //                 }else if(element.children){
    //                     element.children.forEach(el => {
    //                         if(el.name == obj.name) {
    //                             this.activeFirst = element.name;
    //                             this.activeSecond = el.name;
    //                             return;
    //                         }
    //                     });
    //                 }
    //             });
    //             this.openSec = true;
    //         },
    //         immediate: true
    //     },

    //     activeFirst: {
    //         handler(newVal,oldVal) {
    //             this.$nextTick(()=>{
    //                 if(oldVal){
    //                     this.$refs[`menuSec-${oldVal}`] && this.setSecHeight(oldVal,false);
    //                     this.$emit("close",oldVal);
    //                 }
    //                 newVal && this.activeSecond && this.setSecHeight(newVal,true);
    //                 this.$emit("open",newVal);
    //             })
    //         },
    //         immediate: true
    //     }
    // },
    methods: {
        changeShow(name){
            let dom =this.$refs[`menuSec-${name}`][0]
            if(dom.style.display == "none"){
                dom.style.display = "block";
            }else{
                dom.style.display = "none";
            }
        },
        initMenu(){
            this.activeFirst = this.routes[0].name;
            if(this.routes[0].children){
                this.activeSecond = this.routes[0].children[0].name;
                this.openSec = true;
            }
        },
        setSecHeight(name,isShow){
            this.$nextTick(()=>{
                let dom = this.$refs[`menuSec-${name}`][0];
                dom.style.height = isShow ?  window.getComputedStyle(dom).height : 0;
            });
        },
        clickFirst(menuFirst){
            if(this.activeFirst== menuFirst.name){
                this.openSec = !this.openSec;
                console.log(this.openSec);
                menuFirst.children && this.setSecHeight(menuFirst.name,this.openSec);
            }else {
                this.activeFirst = menuFirst.name;
                this.activeSecond = menuFirst.children? menuFirst.children[0].name : "";
                this.openSec = true;
            }
            this.$emit("clickFirst",menuFirst)
        },
        clickSecond(menuSecond){
            this.activeSecond = menuSecond.name;
            this.$emit("clickSecond",menuSecond)
        }
    },
    // mounted(){
    //     this.initMenu();
    // }
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
.menuSecond{
    /* height: 0; */
    /* overflow: hidden; */
}
/* .menuFirst:first-child{
    display: block;
} */

</style>