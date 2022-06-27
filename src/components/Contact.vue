<template>
  <section
    id="contact"
    class="sections contact"
    :class="{ dark: $store.state.darkMode }"
    :style="{
      background: 'rgb(' + bgColor + ')',
    }"
  >
    <div class="built-with">
      built with <b>CSS Grid</b><br />
      and <b>Options API</b>
    </div>
    <div class="contact__container">
      <div class="contact__item" id="contact-form">
        <div class="form">
          <transition name="fade">
            <div
              class="form-sent"
              v-if="formSubmitted"
              :style="{
                background: 'rgb(' + bgColor + ')',
              }"
            >
              <div>
                <h2>{{ $t("message.formThanks1") }}</h2>
                <p>{{ $t("message.formThanks2") }}</p>
              </div>
            </div>
          </transition>
          <form ref="form" @submit.prevent="submitForm">
            <div>
              <h2>{{ $t("message.contactForm") }}</h2>
            </div>
            <!-- Contact name -->

            <div>
              <input
                type="text"
                class="text"
                id="contactName"
                name="contactName"
                :placeholder="$t('message.formName')"
                autocomplete="off"
                v-model="contact.name"
              />
            </div>
            <!-- Contact Company -->
            <div>
              <input
                type="text"
                id="contactCompany"
                name="contactCompany"
                :placeholder="$t('message.formCompany')"
                autocomplete="off"
                v-model="contact.company"
              />
            </div>
            <!-- Contact E-mail -->
            <div>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                :placeholder="$t('message.formEmail')"
                autocomplete="off"
                v-model="contact.email"
              />
            </div>
            <!-- Contact Comments -->
            <div>
              <input
                type="text"
                id="contactComments"
                name="contactComments"
                :placeholder="$t('message.formComments')"
                autocomplete="off"
                v-model="contact.comments"
              />
            </div>
            <!-- Submit Button -->
            <p>{{ $t("message.requiredFields") }}</p>
            <div>
              <button>{{ $t("message.formSend") }}</button>
            </div>
          </form>
        </div>
      </div>
      <div class="contact__item" id="contact-details">
          <div class="contact-details-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 226 226"
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
                <path d="M0,226v-226h226v226z" fill="none"></path>
                <g fill="#ffffff">
                  <path
                    d="M155.375,9.41667h-84.75c-12.995,0 -23.54167,10.54667 -23.54167,23.54167v160.08333c0,12.995 10.54667,23.54167 23.54167,23.54167h84.75c12.995,0 23.54167,-10.54667 23.54167,-23.54167v-160.08333c0,-12.995 -10.54667,-23.54167 -23.54167,-23.54167zM113,198.92708c-5.85717,0 -10.59375,-4.73658 -10.59375,-10.59375c0,-5.85717 4.73658,-10.59375 10.59375,-10.59375c5.85717,0 10.59375,4.73658 10.59375,10.59375c0,5.85717 -4.73658,10.59375 -10.59375,10.59375zM160.08333,169.5h-94.16667v-131.83333h94.16667z"
                  ></path>
                </g>
              </g>
            </svg>
            (070)-2797-1994
            <svg
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
            phminella@gmail.com
          </div>
        </div>
      </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import emailjs from "@emailjs/browser";
import i18n from "../plugins/i18n";
export default {
  data() {
    return {
      contact: {
        name: "",
        company: "",
        email: "",
        comments: "",
      },
      formSubmitted: false,
      calendarMonth: "march",
    };
  },
  computed: {
    ...mapGetters(["bgColor"]),
  },
  methods: {
    // Submit Form
    submitForm: function () {
      //
      // Name
      //
      if (!this.contact.name) {
        if (i18n.global.locale === "en") {
          document.getElementById("contactName").placeholder =
            "Your name is required to send the form. :)";
        } else {
          document.getElementById("contactName").placeholder =
            "フォームの送信にはお名前が必要です。＾＿～";
        }
        document.getElementById("contactName").focus();
        //
        // Company Name
        //
      } else if (!this.contact.company) {
        if (i18n.global.locale === "en") {
          document.getElementById("contactCompany").placeholder =
            "Company name is required. :)";
        } else {
          document.getElementById("contactCompany").placeholder =
            "フォームの送信には会社名が必要です。＾＿～";
        }
        document.getElementById("contactCompany").focus();
        //
        // Email
        //
      } else if (!this.contact.email) {
        if (i18n.global.locale === "en") {
          document.getElementById("contactEmail").placeholder =
            "I need your e-mail to reach you back! :)";
        } else {
          document.getElementById("contactEmail").placeholder =
            "返信のためにメールアドレスを教えてください。";
        }
        document.getElementById("contactEmail").focus();
      } else if (!this.validEmail(this.contact.email)) {
        this.errors.push("Valid email required.");
        //
        // Additional Comments
        //
      } else if (!this.contact.comments) {
        if (i18n.global.locale === "en") {
          document.getElementById("contactComments").placeholder =
            "Let me know why you reaching me for. :D";
        } else {
          document.getElementById("contactComments").placeholder =
            "連絡の理由を教えて下さい。＾＿～";
        }
        document.getElementById("contactComments").focus();
      } else {
        this.formSubmitted = true;
        //
        // EmailJS
        //
        emailjs
          .send(
            "service_2y6kd6p",
            "template_5u6oitw",
            {
              contactName: this.contact.name,
              contactCompany: this.contact.company,
              contactEmail: this.contact.email,
              contactComments: this.contact.comments,
            },
            "user_5NXJynGZ33bybD0lZTtE7"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.text);
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      }
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
<style lang="scss" scoped>
.contact {
  @extend %full-screen;
  @extend %center-div;
  font-weight: bold;
  position: relative;
  .contact__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @include media(1100px) {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-flow: revert;
      #contact-details {
        grid-row: 1;
        margin: 20px 0 10px 0;
        .contact-details-info {
          display: none;
        }
      }
      #contact-form {
        grid-row: 2;
        margin-bottom: 20px;
      }
    }
    color: white;
    .contact__item {
      @extend %center-div;
      .form {
        position: relative;
        width: 500px;
        @include media(550px) {
          width: 100vw;
          padding: 0 15px;
          margin-bottom: 40px;
        }
        h2 {
          font-size: 2.2rem;
          margin: 1rem 0;
          @include media(550px) {
            font-size: 1.8rem;
          }
        }
        .fade-enter-active,
        .fade-leave-active {
          transition: all 1s ease;
          opacity: 1;
        }

        .fade-enter-from,
        .fade-leave-to {
          opacity: 0;
        }
        .form-sent {
          position: absolute;
          top: 0;
          right: 0;
          @extend %full-screen;
          @extend %center-div;
          h2 {
            margin: 0;
          }
          p {
            font-size: 1.1rem;
          }
        }
        input {
          width: 100%;
          border: 2px solid rgb(255, 255, 255);
          height: 70px;
          font-size: 1.1rem;
          background: none;
          margin: 10px 0;
          &:focus {
            background: $red;
            outline: none !important;
            color: white;
            transition: all 0.6s ease;
          }
          &::placeholder {
            color: white;
          }
        }
        #contactComments {
          height: 10rem;
        }
        button {
          width: 100%;
          margin-top: 20px;
          border: none;
          background: $red;
          color: white;
          padding: 20px;
          font-size: 1.2rem;
          &:hover {
            background: rgb(170, 5, 82);
            transition: all 0.6s ease;
          }
        }
      }
    }
    #contact-details {
      .contact-details-info {
        margin-top: 10px;
        @extend %center-div;
        svg {
          margin: 10px;
        }
      }
    }
  }
  //
  // Dark Moder
  //
  &.dark {
    .contact__container {
      color: $dark;
      .contact__item {
        input {
          border-color: $dark;
          &::placeholder {
            color: $dark;
          }
        }
      }
      #contact-details {
        .calendar,
        .square {
          border-color: black;
        }

        .calendar-month {
          border-bottom: 2px solid black;
          button {
            border: 2px solid black;
            border-bottom: none;
            color: black;
            &.deactive {
              background: black !important;
              color: white;
            }
          }
        }
      }
      svg {
        filter: invert(99%) sepia(43%) saturate(151%) hue-rotate(242deg)
          brightness(115%) contrast(93%);
      }
    }
  }
}
</style>