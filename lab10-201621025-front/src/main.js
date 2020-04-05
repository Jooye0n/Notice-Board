import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// axios init
Vue.axios.get(api).then((response) => {
    console.log(response.data)
})

this.axios.get(api).then((response) => {
    console.log(response.data)
})

this.$http.get(api).then((response) => {
    console.log(response.data)
})

Vue.use(VueAxios, axios)
