<template>

  <nav :class="toggleNav ? '' : 'nav--hidden'" class="nav">
    <div class="nav__header">
      <h1>Ticket</h1>
    </div>

    <div class="nav__body">
      <router-link v-for="link in links" :key="link.name" :to="link.to" class="nav__item">
        <i :class="link.icon" class="nav__icon"></i>
        {{ link.name }}
      </router-link>


      <h2>Çevrimiçi Temsilciler</h2>
      <ul class="list">
        <li class="list__item">
          <div class="user">
            <img class="user__avatar" src="@/assets/img/avatar.jpg">
            <span class="user__name">Pembe Panter</span>
          </div>
        </li>
        <li class="list__item">
          <div class="user">
            <img class="user__avatar" src="@/assets/img/avatar.jpg">
            <span class="user__name">Scooby Doo</span>
          </div>
        </li>
        <li class="list__item">
          <div class="user">
            <img class="user__avatar" src="@/assets/img/avatar.jpg">
            <span class="user__name">Sünger Bob</span>
          </div>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  props: {
    toggleNav: Boolean
  },

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

<style lang="scss">
@import "@/assets/scss/components/_nav.scss";
</style>