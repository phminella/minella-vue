<template>
  <section
    id="home"
    class="sections home"
    :class="{ dark: $store.state.darkMode }"
  >
    <div
      id="left-frame"
      :style="{
        background: 'rgb(' + bgColor + ')',
      }"
    >
      <ul>
        <li v-if="$i18n.locale === 'ja'">
          <a
            @click="
              $i18n.locale = 'en';
              setLanguage('en');
            "
          >
            English
          </a>
        </li>
        <li v-if="$i18n.locale === 'en'">
          <a
            @click="
              $i18n.locale = 'ja';
              setLanguage('ja');
            "
          >
            日本語
          </a>
        </li>
        <li>
          <a href="minella-resume-design.zip"
            ><img width="20" src="/img/icon-photoshop.png" alt="" /> Mock-up
            File (.psd)
            <img
              width="25"
              class="icon-download"
              src="/img/icon-download.png"
              alt=""
              v-if="!$store.state.darkMode" />
            <img
              height="25"
              class="icon-download"
              src="/img/icon-download-dark.png"
              alt=""
              v-if="$store.state.darkMode"
          /></a>
        </li>
        <li>
          <a href="https://github.com/phminella/minella-vue/tree/master" target="_blank">
            <img width="20" src="/img/icon-vue.png" alt="" /> Vue Project
            <img
              height="25"
              class="icon-download"
              src="/img/icon-github.png"
              alt=""
              v-if="!$store.state.darkMode" />
            <img
              height="25"
              class="icon-download"
              src="/img/icon-github.svg"
              alt=""
              v-if="$store.state.darkMode"
          /></a>
        </li>
        <li v-scroll-to="'#contact'">
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 172 172"
              style="fill: #000000"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#ffffff">
                  <path
                    d="M28.66667,28.66667c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v86c0,7.91917 6.41417,14.33333 14.33333,14.33333h114.66667c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-86c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM28.66667,43h114.66667v7.18066l-57.33333,35.81934l-57.33333,-35.81934zM28.66667,64.514l57.33333,35.81934l57.33333,-35.81934v64.486h-114.66667z"
                  ></path>
                </g>
              </g>
            </svg>
            phminella@gmail.com</a
          >
        </li>
      </ul>
    </div>
    <vue-load-image>
      <template v-slot:image>
        <div
          id="main"
          :style="{
            background:
              'linear-gradient(to right bottom, rgb(' +
              bgColor +
              '), rgb(0, 82, 121, 0)), url(/img/index-bg.jpg)',
          }"
          data-src="/img/index-bg.jpg"
        >
          <div id="title">
            <div className="title-tabs">
              <a href="https://minella-react.web.app/">
                <div
                  className="title-tab"
                  :style="{
                    background: 'rgb(' + bgColor + ')',
                  }"
                >
                  <img height="50" src="/img/icon-react.svg" alt="" /></div
              ></a>
              <div className="title-tab">
                <img height="50" src="/img/icon-vue.svg" alt="" />
              </div>
            </div>
            <h1>Web Developer</h1>
          </div>
        </div>
      </template>
      <template v-slot:preloader>
        <div
          class="loader"
          :style="{
            background: 'rgb(' + bgColor + ')',
          }"
        >
          <img src="/img/loader.svg" />
        </div>
      </template>
      <template v-slot:error>Image load fails</template>
    </vue-load-image>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import VueLoadImage from "vue-load-image";

export default {
  components: {
    "vue-load-image": VueLoadImage,
  },
  computed: {
    ...mapGetters(["bgColor"]),
  },
  methods: {
    setLanguage(lang) {
      localStorage.setItem("language", lang);
    },
  },
};
</script>
<style lang="scss" scoped>
/* Index Parent Div */
#home {
  display: grid;
  grid-template-columns: 0.25fr 0.75fr;
  @extend %full-screen;
  @include media(1000px) {
    grid-template-columns: repeat(1, 1fr);
    #left-frame {
      display: none;
    }
  }
  #left-frame {
    @extend %center-div;
    color: white;
    li {
      border: 2px solid white;
      margin: 10px 0;
      @extend %center-div;
      &:hover {
        background: $red;
        border-color: $red;
      }
      a {
        padding: 20px;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: white;
        margin: 0 5px;
        cursor: pointer;
        @extend %center-div;
        img,
        svg {
          margin: 0 7px;
        }
      }
    }
  }
  .loader {
    @extend %full-screen;
    @extend %center-div;
  }
  #main {
    color: rgb(255, 255, 255);
    @extend %center-div;
    @extend %full-screen;
    background-attachment: fixed !important;
    // background-attachment:scroll;
    background-size: cover !important;
    @include media(700px) {
      background-attachment: scroll !important;
      background-position: 70% 65% !important;
    }
    #title {
      background: $red;

      .title-tabs {
        display: grid;
        text-align: center;
        grid-template-columns: repeat(2, 50%);

        .title-tab {
          padding: 10px;
        }
      }
      h1 {
        font-size: 6rem;
        letter-spacing: 0.2rem;
        margin: 0;
        line-height: 4.7rem;
        background-color: $red;
        padding: 50px;
        @include media(700px) {
          font-size: 5rem;
          letter-spacing: 0.2rem;
          text-align: left;
          padding: 40px 10px;
        }
      }
    }
  }
  //
  // Dark Mode
  //
  &.dark {
    h1,
    h2 {
      color: black;
    }
    #left-frame {
      li {
        border-color: black;
        &:hover {
          border-color: $red;
        }
        a,
        span {
          color: black;
        }
        svg {
          filter: invert(99%) sepia(43%) saturate(151%) hue-rotate(242deg)
            brightness(115%) contrast(93%);
        }
      }
    }
  }
}
// animations
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>