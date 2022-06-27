<template>
  <section
    id="education"
    class="education sections"
    :class="{ dark: $store.state.darkMode }"
  >
    <div class="built-with">built with <b>Flexbox</b></div>
    <h1>{{ $t("message.education2") }}</h1>
    <div class="education__history">
      <div class="education__history__items">
        <div>
          <img src="img/education/estacio-logo.png" alt="" />
          <h2>Estacio de Sa</h2>
          <p>{{ $t("message.business") }}</p>
          <p><b>2003 - 2004</b></p>
        </div>
      </div>
      <div class="education__history__items">
        <div>
          <img src="img/education/unisul-logo.png" alt="" />
          <h2>Unisul</h2>
          <p>{{ $t("message.it") }}</p>
          <p><b>2004 - 2009</b></p>
        </div>
      </div>
      <div class="education__history__items">
        <div>
          <img src="img/education/ala-logo.png" alt="" />
          <h2>Academy of Language Arts</h2>
          <p>{{ $t("message.language") }}</p>
          <p><b>2018 - 2019</b></p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.education {
  position: relative;
  @extend %full-screen;
  overflow: hidden;
  .education__history {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @include media(1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include media(600px) {
      grid-template-columns: repeat(1, 1fr);
    }
    min-height: 65vh;
    .slide-down {
      transform: translateY(0);
    }
    &__items {
      text-align: center;
      transform: translateY(-43rem);
      transition: all ease 0.5s;
      padding: 20px;
      @extend %center-div;
      background-size: cover !important;
      color: white;
      h2 {
        font-size: 2.5rem;
        line-height: 3rem;
      }
      p {
        font-size: 1.6rem;
        letter-spacing: -0.1rem;
        font-weight: bold;
      }
      img {
        height: 130px;
      }
      &:nth-child(1) {
        background: linear-gradient(
            to right bottom,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.2)
          ),
          url(/img/education/estacio-bg.png);
      }
      &:nth-child(2) {
        background: linear-gradient(
            to right bottom,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.2)
          ),
          url(/img/education/unisul-bg.png);
      }
      &:nth-child(3) {
        background: linear-gradient(
            to right bottom,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.2)
          ),
          url(/img/education/ala-bg.png);
      }
    }
  }
  //
  // Dark Mode
  //
  &.dark {
    background: black;
    h1 {
      color: white;
    }
    .education__history {
      background: $dark;
      color: white;
    }
  }
  //
  // End Dark Mode
  //
}
</style>