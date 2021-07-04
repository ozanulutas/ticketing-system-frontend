<template>
  <Section class="section--sm">
    <template #icon>
        <font-awesome-icon icon="user"/>
    </template>
    <template #title>{{ name }}</template>

    <template #body>
      <form @submit.prevent="" class="form">
        <input v-model="name" class="form__input" type="text" placeholder="User name">

        <div class="form__item form__item--with-icon">
          <input v-model="password" class="form__input" :type="isPasswordVisible ? 'text' : 'password'" placeholder="Password">
          <button @click.prevent="togglePassword()" class="form__icon">
            <font-awesome-icon :icon="isPasswordVisible ? 'eye-slash' : 'eye'"/>
          </button>
        </div>

        <input v-model="email" class="form__input" type="email" placeholder="E-mail">

        <button class="btn btn--outline btn--blue" type="submit">Save</button>
      </form>
    </template>
  </Section>
</template>

<script>
import Section from "@/components/Section";

export default {
  components: {
    Section
  },

  data() {
    return {
      name: "User Name",
      password: "Password",
      email: "user@email.com",

      isPasswordVisible: false
    }
  },

  methods: {
    togglePassword() {
      this.isPasswordVisible = !this.isPasswordVisible;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_form.scss";
@import "@/assets/scss/components/_buttons.scss";
</style>