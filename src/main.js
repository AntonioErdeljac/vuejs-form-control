import Vue from 'vue'
import App from './App.vue'

import formHelper from './components/formHelper';

Vue.component('form-helper', formHelper)

new Vue({
  el: '#app',
  render: h => h(App)
})
