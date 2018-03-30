// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//var script = document.createElement('script');
//script.src = "https://www.gstatic.com/firebasejs/4.12.0/firebase.js";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
