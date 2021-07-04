<template>
  <Section>
    <template #icon>
      <router-link to="tickets">
        <font-awesome-icon icon="ticket-alt"/>
      </router-link>
    </template>
    <template #title> Daily Tickets </template>
    <template #notification>(5 Unread Notifications)</template>
    <template #description>List of updates about the tickets and tasks every day</template>
    <template #body>
      <ul class="list">
        <li v-for="ticket in tickets" :key="ticket.id" class="ticket">
          <div class="ticket__urgency" :class="style[ticket.urgency]">
            {{ ticket.urgency }}
          </div>
          <p class="ticket__topic">{{ ticket.topic }}</p>
          <button class="ticket__operation ticket__operation--reply">
            <font-awesome-icon icon="feather-alt" />
          </button>
          <button @click="deleteTicket(ticket.id)" class="ticket__operation ticket__operation--delete">
            <font-awesome-icon icon="trash-alt" />
          </button>
        </li>
      </ul>
    </template>
  </Section>
</template>

<script>
import Section from "@/components/Section";
export default {
  components: {
    Section,
  },

  data() {
    return {
      tickets: [
        {
          id: 1,
          urgency: "Urgent",
          topic: "Lorem ipsum dolor sit amet.",
        },
        {
          id: 2,
          urgency: "Urgent",
          topic: "Lorem ipsum dolor sit.",
        },
        {
          id: 3,
          urgency: "Normal",
          topic: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 4,
          urgency: "Later",
          topic: "Lorem ipsum dolor sit amet consectetur.",
        },
      ],

      style: {
        Urgent: "ticket__urgency--urgent",
        Normal: "ticket__urgency--normal",
        Later: "ticket__urgency--later",
      },
    };
  },

  methods: {
    deleteTicket(id) {
      this.tickets = this.tickets.filter((ticket) => ticket.id !== id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_ticket.scss";
</style>