<template>
  <transition name="fade">
    <!-- 
      Full Screen Menu
       -->
    <div class="menu" :class="{ dark: $store.state.darkMode, hideScroll: showMenu }" v-if="showMenu">
      <ul>
        <li @click="toggleMenu">
          <a class="ul-link" href="about" v-scroll-to="'#about'">{{
            $t("message.about")
          }}</a>
        </li>
        <li @click="toggleMenu">
          <a class="ul-link" href="work" v-scroll-to="'#work'">{{
            $t("message.work")
          }}</a>
        </li>
        <li @click="toggleMenu">
          <a class="ul-link" href="education" v-scroll-to="'#education'">{{
            $t("message.education")
          }}</a>
        </li>
        <li @click="toggleMenu">
          <a class="ul-link" href="contact" v-scroll-to="'#contact'">{{
            $t("message.contact")
          }}</a>
        </li>
        <li id="language">
          <button
            class="ul-link"
            @click="
              $i18n.locale = 'en';
              setLanguage('en');
            "
            :class="{ activeLang: $i18n.locale === 'en' }"
          >
            English
          </button>
          /
          <button
            class="ul-link"
            @click="
              $i18n.locale = 'ja';
              setLanguage('ja');
            "
            :class="{ activeLang: $i18n.locale === 'ja' }"
          >
            日本語
          </button>
        </li>
        <footer>
          <p>
            <img width="20" src="/img/icon-photoshop.png" alt="" />
            <a href="minella-resume-design.zip"
              >mock-up file (.psd)
              <img
                height="20"
                class="icon-download"
                src="/img/icon-download.png"
                alt=""
                v-if="$store.state.darkMode" />
              <img
                height="20"
                class="icon-download"
                src="/img/icon-download-dark.png"
                alt=""
                v-if="!$store.state.darkMode"
            /></a>
          </p>
          <p>
            <img height="20" src="/img/icon-vue.png" alt="" />
            <a href="https://github.com/phminella/minella-vue/tree/master" target="_blank"
              >vue project
              <img
              height="20"
              class="icon-download"
              src="/img/icon-github.png"
              alt=""
              v-if="$store.state.darkMode" />
            <img
              height="20"
              class="icon-download"
              src="/img/icon-github.svg"
              alt=""
              v-if="!$store.state.darkMode"
          />
            </a>
          </p>
          <p>
            <img height="20" src="/img/work/flags/uk.svg" alt="" />
            <a href="minella-resume-english.pdf" download
              >resume.pdf (english)
              <img
                height="20"
                class="icon-download"
                src="/img/icon-download.png"
                alt=""
                v-if="$store.state.darkMode" />
              <img
                height="20"
                class="icon-download"
                src="/img/icon-download-dark.png"
                alt=""
                v-if="!$store.state.darkMode"
            /></a>
          </p>
          <p>
              <img height="20" src="/img/work/flags/japan.svg" alt="" />
              <a href="minella-resume-ミネラパウロ履歴書.xlsx" download
              >履歴書.xlsx (japanese)
                <img
                  height="20"
                  v-if="$store.state.darkMode"
                  src="/img/icon-download.png"
                  alt="" />
                <img
                  height="20"
                  v-if="!$store.state.darkMode"
                  src="/img/icon-download-dark.png"
                  alt=""
                /></a>
            </p>
            <p>
              <img height="20" src="/img/work/flags/japan.svg" alt="" />
              <a href="職務経歴書.pdf" download
              >職務経歴書.pdf (japanese)
                <img
                  height="20"
                  v-if="$store.state.darkMode"
                  src="/img/icon-download.png"
                  alt="" />
                <img
                  height="20"
                  v-if="!$store.state.darkMode"
                  src="/img/icon-download-dark.png"
                  alt=""
                /></a>
            </p>
        </footer>
      </ul>
    </div>
  </transition>
  <!-- 
    End of Full Screen Menu
     -->
  <header class="header" :class="{ dark: $store.state.darkMode }">
    <!-- 
      Left Side Menu
       -->
    <div class="header__left" v-if="!showMenu">
      <button
        :class="{ activeColor: bgColor === '65, 184, 131' }"
        @click="changeColor('65, 184, 131')"
      ></button>
      <button
        :class="{ activeColor: bgColor === '128, 128, 128' }"
        @click="changeColor('128, 128, 128')"
      ></button>
      <button
        :class="{ activeColor: bgColor === '96, 171, 201' }"
        @click="changeColor('96, 171, 201')"
      ></button>
      <div>
        <input
          type="checkbox"
          class="checkbox"
          id="darkMode"
          v-model="$store.state.darkMode"
          @change="toggleDarkMode()"
        />
        <label for="darkMode" class="label">
          <img src="/img/icon-moon.png" alt="" />
          <img src="/img/icon-sun.png" alt="" />
          <i class="fas fa-sun"></i>
          <div class="ball" />
        </label>
      </div>
    </div>
    <!-- 
      Right Side Menu 
      -->
    <ul class="header__sections">
      <li id="link-about">
        <a href="#" v-scroll-to="'#about'">{{ $t("message.about") }}</a>
      </li>
      <li id="link-work">
        <a href="#" v-scroll-to="'#work'">{{ $t("message.work") }}</a>
      </li>
      <li id="link-education">
        <a href="#" v-scroll-to="'#education'">{{ $t("message.education") }}</a>
      </li>
      <li id="link-contact">
        <a href="#" v-scroll-to="'#contact'">{{ $t("message.contact") }}</a>
      </li>
      <li></li>
    </ul>
  </header>
  <div
    @click="toggleMenu"
    id="nav-icon3"
    :class="{ open: showMenu, dark: $store.state.darkMode }"
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      showMenu: false,
      langs: ["en", "ja"],
    };
  },
  computed: {
    ...mapGetters(["bgColor", "darkMode"]),
  },
  methods: {
    ...mapActions[("changeBgColor", "setDarkMode")],
    changeColor(color) {
      document.getElementById("arrow_box").style.opacity = 0;
      return this.$store.dispatch("changeBgColor", color);
    },
    toggleDarkMode() {
      document.getElementById("arrow_box").style.opacity = 0;
      return this.$store.dispatch("setDarkMode", this.darkMode);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
      if (this.showMenu) {
      var style = document.createElement("style");
        style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
        document.head.appendChild(style);
      } else {
         document.head.removeChild(document.head.lastChild);
      }
    },
    setLanguage(lang) {
      localStorage.setItem("language", lang);
    },
  },
};
</script>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
  opacity: 1;
}

.fade-leave-active {
  transition: all 0s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
//
// Full Screen Menu
//
.menu {
  position: fixed;
  @extend %full-screen;
  top: 0;
  right: 0;
  @extend %center-div;
  z-index: 9999;
  background: $light;
  ul {
    .active {
      color: rgb(202, 202, 202);
      &:hover {
        &:after {
          transform: scaleX(0);
        }
      }
    }
    .ul-link {
      font-size: 2.5rem;
      line-height: 3rem;
      text-decoration: none;
      color: black;
      display: inline-block;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: black;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
      &:hover {
        &:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }
    }
    button {
      background: none;
      border: none;
      font-size: 1.5rem;
      font-weight: bold;
    }
    #language {
      margin-top: 20px;
      .ul-link {
        font-size: 1.5rem;
      }
      .activeLang {
        color: rgb(202, 202, 202);
        &:hover {
          &:after {
            transform: scaleX(0);
          }
        }
      }
    }
  }
  footer {
    margin-top: 20px;
    p {
      img {
        margin: 0 10px 0 0;
      }
      a {
        font-size: 1rem;
        color: black;
        cursor: pointer;
        img {
          float: right;
          margin-left: 10px;
        }
        &:hover {
          color: $red;
        }
      }
      img {
        width: 20px;
      }
    }
  }
  //
  // Dark Mode MENU
  //
  &.dark {
    background: $dark;
    color: white;
    a,
    button {
      color: white;
      &:after {
        background-color: white;
      }
    }
    #language .activeLang {
      color: rgb(0, 0, 0);
    }
  }
  //
  // End Dark Mode
  //
}
//
// End Full Screen Menu
//
header {
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9996;
  //
  // Left Side Menu
  //
  .header__left {
    @extend %center-div;
    //
    // Dark Toggle
    //
    .checkbox {
      opacity: 0;
      position: absolute;
    }
    .label {
      display: block;
      border: 2px solid white;
      @include media(1000px) {
        border: none;
      }
      background-color: rgb(255, 150, 89);
      width: 52px;
      height: 25px;
      border-radius: 50px;
      align-items: center;
      justify-content: space-between;
      position: relative;
      cursor: pointer;
      margin-left: 10px;
      transition: all 0.25s ease;
      img {
        height: 19px;
        position: absolute;
        top: 0.5px;
        @include media(1000px) {
          top: 2.5px;
        }
        &:nth-child(1) {
          left: 3px;
        }
        &:nth-child(2) {
          right: 3.5px;
        }
      }
    }

    .ball {
      width: 20.5px;
      height: 20.5px;
      background-color: rgb(255, 150, 89);
      position: absolute;
      top: 0px;
      left: 2px;
      @include media(1000px) {
        top: 2px;
        left: 2.5px;
      }
      border-radius: 50%;
      transition: transform 0.2s linear;
    }

    /*  target the elemenent after the label*/
    .checkbox:checked + .label .ball {
      transform: translateX(23px);
      @include media(1000px) {
        transform: translateX(25.7px);
      }
    }
    padding: 15px 25px;
    @include media(620px) {
      padding: 15px 10px;
    }
    //
    // Dark Toggle End
    //
    button {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      border: none;
      margin: 0 2px;
      &:hover {
        border-color: white;
      }
      &:nth-child(1) {
        background-color: rgb(65, 184, 131);
      }
      &:nth-child(2) {
        background-color: rgb(128, 128, 128);
      }
      &:nth-child(3) {
        background-color: rgb(96, 171, 201);
      }
      &.activeColor {
        border: 2px solid white;
      }
    }
  }
  //
  // Right Side Menu
  //
  .header__sections {
    background: $light;
    position: absolute;
    right: 0;
    top: 0;
    list-style: none;
    @extend %center-div;
    @include media(620px) {
      display: none;
    }
    // Menu Buttons
    li {
      padding: 15px 25px;
      border-right: 1px solid #f5f1eb;
      a {
        text-decoration: none;
        color: rgb(0, 0, 0);
        display: inline-block;
        position: relative;
        font-weight: 600;
        &:hover {
          &:after {
            transform: scaleX(1);
            transform-origin: bottom left;
            background-color: $red;
          }
        }
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 3px;
          bottom: 0;
          left: 0;
          background-color: $red;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
      }
      button {
        background: none;
        border: none;
        font-weight: 600;
        font-size: 1rem;
      }
    }
    // Active Menu Button Style
    .actived {
      background: $red;
      a {
        color: white;
        &:hover {
          &:after {
            background-color: white;
          }
        }
        &:after {
          transform: scaleX(1);
          transform-origin: bottom left;
          background-color: white;
        }
      }
    }
  }
}
//
// Burger Menu Button
//
#nav-icon3 {
  position: fixed;
  width: 50px;
  height: 55px;
  background: $light;
  top: 0px;
  right: 0px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: transform 0.5s ease-in-out;
  -moz-transition: transform 0.5s ease-in-out;
  -o-transition: transform 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  z-index: 9999;
  @media (hover: hover) {
    &:hover {
      background: $red;
      span {
        background: white;
      }
    }
  }
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 65%;
    background: black;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: transform 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: transform 0.25s ease-in-out;
  }
  //
  // Dark Mode
  //
  /* Burger Menu */
  :nth-child(1) {
    top: 15px;
    left: 8px;
  }
  :nth-child(2),
  :nth-child(3) {
    top: 25px;
    left: 8px;
  }
  :nth-child(4) {
    top: 35px;
    right: 9.4px;
  }
}
#nav-icon3.open span:nth-child(1) {
  top: 25px;
  width: 0%;
  right: 0%;
}
#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
#nav-icon3.open span:nth-child(4) {
  top: 25px;
  width: 0%;
  right: 0%;
}
//
// Dark Mode
//
.dark {
  .header__left {
    .label,
    .ball {
      background-color: $dark;
    }
  }
  .header__sections {
    background: $dark;
    li {
      padding: 15px 25px;
      border-right: 1px solid black;
      a {
        color: white;
        &:hover {
          &:after {
            background-color: $red;
          }
        }
        &:after {
          background-color: $red;
        }
      }
    }
    .actived {
      background: $red;
      a {
        color: white;
        &:hover {
          &:after {
            background-color: white;
          }
        }

        &:after {
          background-color: white;
        }
      }
    }
  }
}
#nav-icon3.dark {
  background: $dark;
  span {
    background: white;
  }
  @media (hover: hover) {
    &:hover {
      background: $red;
    }
  }
}
</style>