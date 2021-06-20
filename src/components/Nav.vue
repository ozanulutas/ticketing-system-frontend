<template>
  <nav  class="nav">
    <router-link v-for="link in links" :key="link.name" :to="link.to" class="nav__item">
      <i :class="link.icon" class="nav__icon"></i>
      {{ link.name }}
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Dashboard", to: "/", icon: "fas fa-home" },
        { name: "Tickets", to: "tickets", icon: "fas fa-ticket-alt" },
        { name: "Profile", to: "profile", icon: "fas fa-user" },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_nav.scss";
</style>