<template>
  <div class="content">
    <img :src='require("@/assets/img/logo.png")' alt="logo">
    <router-link v-for="menuFirst in routes" :key="menuFirst.name" :to=" menuFirst.redict" class="rootLink">
      <div :class="['menuFirst',`menuFir-${menuFirst.name}`,{'active':menuFirst.name==activeFirst},{'Firstactive':(!menuFirst.children)&&(menuFirst.name==activeSecond)}]" :ref="`menuFir-${menuFirst.name}`" @click="changeShow(menuFirst.name)">
        <span :class="['menuFir-title',`icon-${menuFirst.name}`]">{{menuFirst.meta.title}}
        </span>
        <span v-if="menuFirst.children" :class="['v-icon-down',{'menuUp':menuFirst.name==activeFirst}]"></span>
      </div>
      <div :class="['menuSecond',`menuSec-${menuFirst.name}`]" :ref="`menuSec-${menuFirst.name}`" v-show="openSec">
        <router-link v-for="menuSecond in menuFirst.children" :key="menuSecond.name" :to="menuSecond.path">
          <span>{{menuSecond.meta.title}}</span>
        </router-link>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFirst: "",
      activeSecond: "",
      openSec: false,
    };
  },
  props: {
    routes: Array,
  },
  methods: {
    changeShow(name) {
      let secDom = this.$refs[`menuSec-${name}`][0];
      let allDom = document.getElementsByClassName("menuSecond");
      for (let i = 0; i < allDom.length; i++) {
        if (allDom[i].classList === secDom.classList) {
          this.activeSecond = name;
          continue;
        } else {
          allDom[i].style.display = "none";
        }
      }
      if (secDom.style.display == "none") {
        secDom.style.display = "block";
        this.activeFirst = name;
        this.activeSecond = name;
      } else {
        secDom.style.display = "none";
        // this.activeFirst = "";
      }
    },
    initMenu() {
      let rootLink = document.getElementsByClassName("rootLink");
      for (let j = 0; j < rootLink.length; j++) {
        if (rootLink[j].classList.contains("router-link-exact-active")) {
          console.log(rootLink[j].classList);
          this.activeFirst = this.getFirstName(rootLink[j].href);
          this.activeSecond = this.getFirstName(rootLink[j].href);
          rootLink[j].children[1].style.display = "block";
        }
      }
    },
    //点击自身一级菜单时，保存子菜单路由；点击其他一级菜单，默认路由
    redirectPath(menuFirst) {
      if (menuFirst.name == this.activeFirst) {
        return "";
      } else {
        return menuFirst.redict;
      }

      // return menuFirst.name == this.activeFirst &&
      //   menuFirst.children &&
      //   menuFirst.children[0].name == this.activeSecond
      //   ? ""
      //   : menuFirst.path;
    },
    getFirstName(string) {
      let str1 = string.split("#/")[1];
      let str2 = str1.split("/")[0];
      return str2;
    },
  },
  mounted() {
    window.addEventListener("load", () => {
      this.initMenu();
    });
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 230px;
  height: 100%;
  background-color: black;
  img {
    width: 230px;
    height: 72px;
    padding: 23px 27px;
  }
  a {
    display: block;
    color: rgba(255, 255, 255, 0.65);
    text-decoration: none;
    .active {
      color: #fff;
    }
  }
  a:hover {
    color: #fff;
  }
}
.menuFirst {
  height: 54px;
  font-size: 15px;
  line-height: 54px;
  .menuFir-title {
    padding-left: 50px;
  }
  .menuFir-title::before {
    margin: 0 15px 0 -30px;
  }
  [class^="v-icon"] {
    position: absolute;
    right: 20px;
    margin: 20px 0;
  }
  .menuUp {
    transform: rotate(180deg);
    transform-origin: center;
    transition: transform 0.3s;
  }
}
.Firstactive {
  background-color: red;
}
.menuSecond {
  // display: none;
  a {
    height: 40px;
    padding-left: 50px;
    margin: 10px 0;
    font-size: 14px;
    line-height: 40px;
  }
  .router-link-exact-active {
    color: #fff;
    background-color: red;
  }
}
</style>