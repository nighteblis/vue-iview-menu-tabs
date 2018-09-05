// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */

var store = new Vuex.Store({
  state:{
    selectedEnv: 'env_150',
    alert:{
    success:{
      display:false,
      message:''
    },
    warning:{
display:false,
message:''
    },
    error:{
display:false,
message:''
    }

    }
  }
  ,
  mutations: {
    noneed (state) {
      state.selectedEnv = ''
    }
  }
})


new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>',
  beforeCreate: function() {
}
})
