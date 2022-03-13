import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './data.js'

let data = {
  books: mock
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
