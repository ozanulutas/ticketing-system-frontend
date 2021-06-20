<template>
  <Sidebar :toggleSidebar="toggleSidebar"/>

  <main :class="toggleSidebar ? '' : 'page-content--expanded'" class="page-content">
    <Topbar @toggle-sidebar="toggleSidebar = !toggleSidebar"/>
    
    <router-view></router-view>
  </main>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Topbar from "./components/Topbar.vue";

export default {
  components: {
    Sidebar,
    Topbar
  },

  data() {
    return {
      toggleSidebar: true,
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_layout.scss";
</style>
