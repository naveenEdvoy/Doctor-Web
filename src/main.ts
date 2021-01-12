import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "./assets/main.css";

const firebaseConfig = {
  apiKey: "AIzaSyB2p2s_2vRTCXqTPrcNbs3O5txg_gal-lU",
  authDomain: "docassitant-dee21.firebaseapp.com",
  databaseURL: "https://docassitant-dee21.firebaseio.com",
  projectId: "docassitant-dee21",
  storageBucket: "docassitant-dee21.appspot.com",
  messagingSenderId: "824600281830",
  appId: "1:824600281830:web:35f7a40204929f6b9ef127",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
