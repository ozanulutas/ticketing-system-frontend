<template>
  <section>
    <h2>Çevrimiçi Temsilciler</h2>
    
    <ul class="list">
      <li v-for="agent in agents" :key="agent" class="list__item">
        <div class="agent">
          <img class="agent__avatar" src="@/assets/img/avatar.jpg">
          <span class="agent__name">{{ agent }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      agents: [
        "Pembe Panter",
        "Scooby Doo",
        "Sünger Bob"
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_agent.scss";
</style>