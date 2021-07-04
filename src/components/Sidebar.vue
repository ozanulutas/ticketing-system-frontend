<template>

  <aside :class="{'sidebar--hidden' : !isSidebarOpen}" class="sidebar">
  <!-- <aside :class="isSidebarOpen ? '' : 'sidebar--hidden'" class="sidebar"> -->

    <header class="sidebar__header">
      <h1>Ticket</h1>
    </header>

    <div class="sidebar__body">
      <Nav/>
      <Agents/>
    </div>

  </aside>

</template>

<script>
import Nav from "./Nav.vue";
import Agents from "./Agents.vue";

export default {
  components: {
    Nav,
    Agents,
  },

  props: {
    isSidebarOpen: Boolean
  },

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_sidebar.scss";
</style>