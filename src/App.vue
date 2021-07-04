<template>
  <Sidebar :isSidebarOpen="isSidebarOpen"/>

  <div :class="{'page-wrapper--expanded' : !isSidebarOpen}" class="page-wrapper">
    <Topbar @toggle-sidebar="isSidebarOpen = !isSidebarOpen"/>
    
    <main class="main">
      <router-view></router-view>
      <Chat/>
    </main>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Topbar from "./components/Topbar.vue";
import Chat from "./components/Chat.vue";

export default {
  components: {
    Sidebar,
    Topbar,
    Chat
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
