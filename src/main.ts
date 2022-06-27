import { createApp } from 'vue';

import App from './App.vue';
import router from './route';
import store from './store';
// smooth scrolling plugin
import VueScrollTo from 'vue-scrollto';
// multi languages app plugin
import i18n from './plugins/i18n';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueScrollTo);
app.use(i18n);

// Firebase Analytics
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABRYO_Oj3DU94TLmcz-pECfNP8VR7Us9E",
    authDomain: "minella-vue.firebaseapp.com",
    projectId: "minella-vue",
    storageBucket: "minella-vue.appspot.com",
    messagingSenderId: "65704841515",
    appId: "1:65704841515:web:1f582d9153acd72a82f56e",
    measurementId: "G-CWR2XS7JVR"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
getAnalytics(firebaseApp);
//
//
app.mount("#app");