<template>
  <section class="section">
    <header class="section__header">
      <div class="section__icon">
        <slot name="icon"> </slot>
      </div>

      <div>
        <div>
          <h2 class="section__title">
            <slot name="title"> </slot>
          </h2>
          <small class="section__notification">
            <slot name="notification"> </slot>
          </small>
        </div>
        <div class="section__desc">
          <small>
            <slot name="description"> </slot>
          </small>
        </div>
      </div>
    </header>

    <section>
      <slot name="body"></slot>
    </section>
  </section>
</template>