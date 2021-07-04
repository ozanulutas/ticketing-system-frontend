<template>
  <Sidebar :isSidebarOpen="isSidebarOpen"/>

  <div :class="{'page-wrapper--expanded' : !isSidebarOpen}" class="page-wrapper">
    <Topbar @toggle-sidebar="isSidebarOpen = !isSidebarOpen"/>
    
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
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
      isSidebarOpen: window.matchMedia("(min-width: 850px)").matches,
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_layout.scss";
</style>
