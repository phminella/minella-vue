<template>
  <section id="about" class="sections about" ref="about-div">
    <div class="about-background">
      <h1>{{ $t("message.about2") }}</h1>
    </div>
    <div class="built-with">built with <b>CSS Grid</b></div>
    <div class="about__container" :class="{ dark: $store.state.darkMode }">
      <div class="about__items" id="about-details">
        <div>
          <ul>
            <li>
              <b>Paulo Henrique Minella</b>
            </li>
            <li>06/12/1985</li>
            <li>Male</li>
            <li>
              〒169-0075 <br />
              東京都新宿区高田馬場３－３－１５グランハイツ高田馬場
            </li>
            <li>(070)-2797-1994</li>
            <li>phminella@gmail.com</li>
            <li>
              Visa Status: Engineer/Specialist in Humanities/Int'l Services
            </li>
            <li>Expires 12/10/2026</li>
          </ul>
        </div>
      </div>
      <div class="about__items">
        <div id="residence-card">
          <vue-load-image v-if="isBlur">
            <template v-slot:image>
              <img
                id="residence-card-img"
                class="card-img"
                src="/img/about/residence-card-blurred.jpg"
                alt=""
              />
            </template>
            <template v-slot:preloader>
              <img src="/img/loader.svg" />
            </template>
            <template v-slot:error>Image load fails</template>
          </vue-load-image>
          <vue-load-image v-if="!isBlur">
            <template v-slot:image>
              <img
                class="card-img"
                src="/img/about/residence-card.png"
                alt=""
              />
            </template>
            <template v-slot:preloader>
              <img src="/img/loader.svg" />
            </template>
            <template v-slot:error>Image load fails</template>
          </vue-load-image>

          <p v-show="error" ref="error-msg">
            <img src="/img/error.png" alt="" />
            {{ $t("message.passwordError") }}
          </p>
          <div id="about-form" :class="{ 'height-zero': !isBlur }">
            <form ref="form" @submit.prevent="toggleBlur">
              <input
                type="password"
                :placeholder="$t('message.password')"
                v-model="password"
              />
              <button>
                {{ $t("message.showCard") }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import VueLoadImage from "vue-load-image";
export default {
  components: {
    "vue-load-image": VueLoadImage,
  },
  data() {
    return {
      isBlur: true,
      error: false,
      password: "",
    };
  },
  methods: {
    toggleBlur: function () {
      if (this.password === "minellarc") {
        this.error = false;
        this.isBlur = !this.isBlur;
        document.activeElement.blur();
        this.$refs["about-div"].scrollIntoView({ behavior: "smooth" });
      } else {
        this.error = true;
        this.$refs["error-msg"].scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
.about {
  position: relative;
  @extend %full-screen;
  @include media(1000px) {
    min-height: 70vh;
  }
  .about-background {
    position: absolute;
    top: 0;
    left: 0;
    @extend %full-screen;
    @extend %center-div;
    @include media(1000px) {
      display: none;
    }
  }
  .about__container {
    display: grid;
    min-height: 100vh;
    @include media(1000px) {
      min-height: 70vh;
    }
    grid-template-columns: repeat(2, 50%);
    @include media(1000px) {
      grid-template-columns: repeat(1, 100%);
    }
    z-index: 9994;
    .about__items {
      background: $light;
      @extend %center-div;
      padding: 20px;
      z-index: 9994;
      b {
        font-size: 1.5rem;
      }
      #residence-card {
        .card-img {
          border-radius: 10px;
          border: 3px solid white;
          width: 100%;
          max-width: 400px;
          @include media(1200px) {
            min-width: 0;
          }
        }
        p {
          color: red;
        }
        #about-form {
          transition: all 0.6s ease-in-out;
          overflow: hidden;
          max-height: 160px;
          input {
            text-align: center;
            width: 100%;
            max-width: 400px;
            margin-top: 10px;
            border: none;
            border-bottom: 1px solid white;
            background: $red;
            font-size: 1.1rem;
            transition: all 0.5s ease;
            &::placeholder {
              color: white;
            }
            &:focus {
              background: rgb(238, 238, 238);
            }
          }
          button,
          button::after {
            width: 100%;
            max-width: 400px;
            height: 86px;
            font-size: 1.5rem;
            font-family: "Bebas Neue", cursive;
            background: linear-gradient(45deg, #09d8e7 5%, $red 5%);
            border: 0;
            color: #fff;
            letter-spacing: 3px;
            line-height: 88px;
            box-shadow: 6px 0px 0px #09d8e7;
            outline: transparent;
            position: relative;
            text-transform: uppercase;
          }
          button {
            transition: all 0.5s ease;
          }
          button:hover {
            background: black;
            color: white;
          }

          button::after {
            --slice-0: inset(50% 50% 50% 50%);
            --slice-1: inset(80% -6px 0 0);
            --slice-2: inset(50% -6px 30% 0);
            --slice-3: inset(10% -6px 85% 0);
            --slice-4: inset(40% -6px 43% 0);
            --slice-5: inset(80% -6px 5% 0);

            content: "Show Image";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              45deg,
              transparent 3%,
              #00e6f6 3%,
              #00e6f6 5%,
              #ffffff 5%
            );
            text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #008f99;
            clip-path: var(--slice-0);
          }

          button:hover::after {
            animation: 1s glitch;
            animation-timing-function: steps(2, end);
          }

          @keyframes glitch {
            0% {
              clip-path: var(--slice-1);
              transform: translate(-20px, -10px);
            }
            10% {
              clip-path: var(--slice-3);
              transform: translate(10px, 10px);
            }
            20% {
              clip-path: var(--slice-1);
              transform: translate(-10px, 10px);
            }
            30% {
              clip-path: var(--slice-3);
              transform: translate(0px, 5px);
            }
            40% {
              clip-path: var(--slice-2);
              transform: translate(-5px, 0px);
            }
            50% {
              clip-path: var(--slice-3);
              transform: translate(5px, 0px);
            }
            60% {
              clip-path: var(--slice-4);
              transform: translate(5px, 10px);
            }
            70% {
              clip-path: var(--slice-2);
              transform: translate(-10px, 10px);
            }
            80% {
              clip-path: var(--slice-5);
              transform: translate(20px, -10px);
            }
            90% {
              clip-path: var(--slice-1);
              transform: translate(-10px, 0px);
            }
            100% {
              clip-path: var(--slice-1);
              transform: translate(0);
            }
          }
          &.height-zero {
            max-height: 0 !important;
          }
        }
      }
    }
    #about-details {
      @extend %center-div;
      div {
        max-width: 400px;
        @include media(1000px) {
          max-width: 1000px;
        }
      }
      ul {
        font-size: 1.2rem;
        line-height: 1.8rem;
        min-width: 50vw;
      }
    }
    //
    // Dark Mode
    //
    &.dark {
      .about__items {
        background: $dark;
        color: white;
      }
    }
    //
    // End Dark Mode
    //
  }
}
</style>