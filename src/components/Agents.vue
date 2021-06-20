<template>
  <section>
    <!-- <h2>Çevrimiçi Temsilciler</h2> -->
    <h2>Who is online</h2>
    
    <ul class="list">
      <li v-for="agent in agents" :key="agent.id" class="list__item">
        <div class="agent">
          <div class="agent__status" :class="style[agent.status]">
            <img class="agent__avatar" src="@/assets/img/avatar.jpg">
          </div>
          <span class="agent__name">{{ agent.name }}</span>
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
        { id:1, name: "Pembe Panter", status: "busy"},
        { id:2, name: "Scooby Doo", status: "afk"},
        { id:3, name: "Sünger Bob", status: "available"},        
      ],

      style: {
        busy: "agent__status--yellow",
        afk: "agent__status--red",
        available: "agent__status--green"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_agent.scss";
@import "@/assets/scss/components/_status-icons.scss";
</style>