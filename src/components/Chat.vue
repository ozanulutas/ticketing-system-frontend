<template>
  <section class="chat">
    <header class="chat__header">
      <h2 class="chat__title">Chat</h2>
    </header>

    <section class="chat__body">
      <p class="chat__message chat__message--left">
        Lorem ipsum dolor sit amet.
        <small class="chat__time">18.05.2021 11:45</small>
      </p>
      <p class="chat__message chat__message--right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam
        optio cumque recusandae nihil.
        <small class="chat__time">18.05.2021 11:45</small>
      </p>
      <p class="chat__message chat__message--right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam
        optio cumque recusandae nihil.
        <small class="chat__time">18.05.2021 11:45</small>
      </p>
      <p class="chat__message chat__message--left">
        Lorem ipsum dolor sit amet.
        <small class="chat__time">18.05.2021 11:45</small>
      </p>

    </section>

    <form class="form">
      <div class="form__item form__item--with-icon">
        <input class="form__input" type="text" placeholder="Your message" />
        <button class="form__icon form__icon--blue">
          <font-awesome-icon icon="paper-plane"/>
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_chat.scss";
@import "@/assets/scss/components/_form.scss";
</style>