<template>
  <Sidebar :toggleSidebar="toggleSidebar"/>

  <div :class="{'page-wrapper--expanded' : !toggleSidebar}" class="page-wrapper">
    <Topbar @toggle-sidebar="toggleSidebar = !toggleSidebar"/>
    
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
      toggleSidebar: true,
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_layout.scss";
</style>
