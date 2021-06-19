<template>
  <Nav :toggleNav="toggleNav"/>

  <div :class="toggleNav ? '' : 'page-content--expanded'" class="page-content">
    <Topbar @toggle-nav="toggleNav = !toggleNav"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Topbar from "./components/Topbar.vue";

export default {
  components: {
    Nav,
    Topbar
  },

  data() {
    return {
      toggleNav: true,
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_layout.scss";
</style>
