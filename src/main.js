// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCordova from 'vue-cordova'

Vue.use(VueCordova)

Vue.config.productionTip = false


//var script = document.createElement('script');
//script.src = "https://www.gstatic.com/firebasejs/4.12.0/firebase.js";

/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App),

  created ()
  {

     console.log(Vue.cordova);

  },

  mounted (){

     document.addEventListener('deviceReady', this.onDeviceReady, false);

  },

  methods: {

    onDeviceReady ()
    {

       console.log('device is ready');

    }

  }

})

/*const createApp = function () {

  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })
  window.componentHandler.upgradeDom()
}


if (window.location.protocol === 'file:') {
  let cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)

  let cordovaApp = {
    initialize () {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
    },
    onDeviceReady () {
      createApp()
    }
  }

  cordovaApp.initialize()
}

// Permite rodar com "npm run dev"
if (process && process.env && process.env.NODE_ENV === 'development') {
  createApp()
}*/
