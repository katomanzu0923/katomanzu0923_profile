import Vue from 'vue'
import App from './App.vue'
import Programing from './components/Programing.vue'

Vue.config.productionTip = false
Vue.component("Programing",Programing)


new Vue({
  render: h => h(App),
}).$mount('#app')
