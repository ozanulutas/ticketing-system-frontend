<template>
  <section class="topbar">
    <!-- Sol -->
    <div class="topbar__section topbar__section--left">
      <button @click="$emit('toggle-sidebar')" class="toggle-sidebar">
          <font-awesome-icon icon="hamburger"/>
      </button>
    </div>

    <!-- Sağ -->
    <div class="topbar__section topbar__section--right">
      <div class="topbar__item">
        <button class="btn-notification btn-notification--active">
          <font-awesome-icon :icon="['far', 'bell']"/>
        </button>
      </div>

      <router-link to="profile" class="topbar__item">
        <img class="agent__avatar" src="@/assets/img/avatar.jpg">
      </router-link>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_topbar.scss";
@import "@/assets/scss/components/_agent.scss";
@import "@/assets/scss/components/_buttons.scss";
</style>