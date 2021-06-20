<template>
  <nav  class="nav">
    <router-link v-for="link in links" :key="link.name" :to="link.to" class="nav__item">
      <font-awesome-icon :icon="link.icon" class="nav__icon" />
      {{ link.name }}
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Dashboard", to: "/", icon: "home" },
        { name: "Tickets", to: "tickets", icon: "ticket-alt" },
        { name: "Profile", to: "profile", icon: "user" },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_nav.scss";
</style>