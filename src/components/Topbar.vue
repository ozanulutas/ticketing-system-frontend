<template>
  <section class="topbar">
    <!-- Sol -->
    <div class="topbar__section topbar__section--left">
      <button @click="$emit('toggle-nav')" class="toggle-nav">
        <i class="fas fa-hamburger"></i>
      </button>
    </div>

    <!-- Sağ -->
    <div class="topbar__section topbar__section--right">
      <div class="topbar__item">
        <button class="btn-notification btn-notification--active">
          <i class="far fa-bell"></i>
        </button>
      </div>
      <router-link to="profile" class="topbar__item">
        <img class="user__avatar" src="@/assets/img/avatar.jpg">
      </router-link>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/scss/components/_topbar.scss";
@import "@/assets/scss/components/_user.scss";
@import "@/assets/scss/components/_buttons.scss";
</style>