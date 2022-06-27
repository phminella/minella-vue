<template>
  <section
    id="work"
    class="work sections"
    :class="{ dark: $store.state.darkMode }"
  >
    <div class="built-with">
      built with <b>Flexbox</b><br />
      and <b>Composition API</b>
    </div>
    <h1>{{ $t("message.workExperience") }}</h1>
    <swiper
      :slidesPerView="5"
      :spaceBetween="10"
      :slidesPerGroup="5"
      :loop="false"
      :loopFillGroupWithBlank="false"
      :pagination="{
        clickable: true,
      }"
      :centeredSlides="true"
      :centeredSlidesBounds="true"
      :navigation="true"
      :breakpoints="{
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        650: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1400: {
          slidesPerView: 5,
          slidesPerGroup: 6,
        },
      }"
      class="work__items"
    >
      <swiper-slide
        class="work__item"
        v-for="work in workExperience.value"
        :key="work.id"
      >
        <div
          class="work__item__card work__item__card-front"
          :style="{
            background:
              'linear-gradient(rgba(' +
              bgColor +
              ',.4), rgba(0,0,0,.2)), url(' +
              work.bgImg +
              ')',
          }"
        >
          <p>
            {{ work.location }} <img width="18" :src="work.flagImg" alt="" />
          </p>
          <h2>{{ work.company }}</h2>
          <h3>{{ work.year }}</h3>
        </div>

        <div class="work__item__card work__item__card-back">
          <h2>{{ work.position }}</h2>
          <p>{{ work.details }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import { ref, reactive, watch, computed } from "vue";
import useGetData from "../hooks/getData";
import { useStore } from "vuex";
import i18n from "../plugins/i18n";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
// install Swiper modules
SwiperCore.use([Navigation]);
export default {
  components: {
    SwiperSlide,
    Swiper,
  },
  setup() {
    const store = useStore();
    // Get data
    // useGetData props
    // data json url and store mutation name to save the data to the state
    // so it can be accessed from any page
    // Store state, getter, action, mutation have to have the same name
    // useGetData will return a COMPUTED variable
    let data = useGetData(
      "https://vuefire-849fd-default-rtdb.firebaseio.com/work.json",
      "workExperience"
    );
    let locale = computed(() => ref(i18n.global.locale));
    let workExperience = reactive([
      {
        id: "",
        company: "",
        location: "",
        year: "",
        position: "",
        details: "",
        bgImg: "",
        flagImg: "",
      },
    ]);
    workExperience.value = data;
    watch([locale], function () {
      fetch("https://vuefire-849fd-default-rtdb.firebaseio.com/work.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const dataArray = [];
          let temp = data[i18n.global.locale];
          for (const id in temp) {
            // Change array structure to adapt to your data
            dataArray.push({
              id: id,
              company: temp[id].company,
              location: temp[id].location,
              year: temp[id].year,
              position: temp[id].position,
              details: temp[id].details,
              bgImg: temp[id].bgImg,
              flagImg: temp[id].flagImg,
            });
          }
          store.dispatch("workExperience", dataArray);
        })
        .catch((error) => {
          console.log("error:" + error);
        });
    });
    // return variables to template
    return {
      bgColor: computed(() => store.getters.bgColor),
      workExperience,
    };
  },
};
</script>
<style lang="scss" scoped>
.work {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  @include media(1000px) {
    min-height: 80vh;
    h1 {
      margin: 0;
      padding: 10px 0;
    }
  }
  .work__items {
    list-style: none;
    padding: 0 40px;
    background: $light;
    overflow: hidden;
    .work__item {
      height: 573px;
      color: white;
      perspective: 50rem;
      &__card {
        @extend %center-div;
        flex-wrap: wrap;
        transition: all 0.6s ease;
        position: absolute;
        top: 53px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 260px;
        height: 468px;
        backface-visibility: hidden;
        border: 1px solid black;
        text-align: center;
        h2 {
          width: 80%;
          font-size: 2.2rem;
          line-height: 2.2rem;
          margin: 0 2px;
        }
        h3 {
          position: absolute;
          bottom: 80px;
        }
        &-front {
          background-size: contain !important;
          p {
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 0.95rem;
          }
        }
        &-back {
          transform: rotateY(180deg);
          background: white;
          color: #363636;
          h2 {
            width: 100%;
            padding: 0 10px;
          }
          p {
            text-align: left;
            padding: 15px;
          }
        }
      }
      &:hover,
      &:active {
        .work__item__card-front {
          transform: rotateY(180deg);
        }
        .work__item__card-back {
          transform: rotateY(360deg);
        }
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
    .work__items {
      background: $dark;
      .work__item__card-back {
        background: $dark;
        color: white;
      }
    }
  }
  //
  // End Dark Mode
  //
}
</style>