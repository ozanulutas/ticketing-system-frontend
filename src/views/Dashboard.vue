<template>

  <section class="section">

    <header class="section__header">
      <font-awesome-icon icon="ticket-alt" class="section__icon"/>

      <div>
        <div>
          <h2 class="section__title">Daily Tickets</h2>
          <small class="section__notification">(5 Unread Notifications)</small>
        </div>
        <div class="section__desc">
          <small>List of updates about the tickets and tasks every day</small>
        </div>
      </div>
    </header>

    <section>
      <ul class="list">
        <li v-for="ticket in tickets" :key="ticket.id" class="ticket">
          <div class="ticket__urgency" :class="style[ticket.urgency]">{{ ticket.urgency }}</div>
          <p class="ticket__topic">{{ ticket.topic }}</p>
          <button class="ticket__operation"><font-awesome-icon icon="feather-alt"/></button>
          <button class="ticket__operation"><font-awesome-icon icon="trash-alt"/></button>
        </li>
      </ul>
    </section>
    
  </section>

</template>

<script>
export default {
  data() {
    return {
      tickets: [
        { 
          id: 1,
          urgency: "Urgent",
          topic: "Lorem ipsum dolor sit amet."
        },
        { 
          id: 2,
          urgency: "Urgent",
          topic: "Lorem ipsum dolor sit."
        },
        { 
          id: 3,
          urgency: "Normal",
          topic: "Lorem ipsum dolor sit amet consectetur."
        },
        { 
          id: 4,
          urgency: "Later",
          topic: "Lorem ipsum dolor sit amet consectetur."
        },
      ],

      style: {
        Urgent: "ticket__urgency--urgent",
        Normal: "ticket__urgency--normal",
        Later: "ticket__urgency--later",
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_ticket.scss";
</style>