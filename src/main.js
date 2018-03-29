// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Firebase from 'firebase'

Vue.config.productionTip = false

//var script = document.createElement('script');
//script.src = "https://www.gstatic.com/firebasejs/4.12.0/firebase.js";

var config = {
    apiKey: "AIzaSyCBsrELn5TShRC4CQ6_FMXJatd5WqX40fU",
    authDomain: "redbutton-alert.firebaseapp.com",
    databaseURL: "https://redbutton-alert.firebaseio.com",
    projectId: "redbutton-alert",
    storageBucket: "redbutton-alert.appspot.com",
    messagingSenderId: "554911665700"
  };
  Firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
