import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { VueConfiguration } from 'vue/types/vue';


Vue.config = <VueConfiguration>{
  productionTip: false,
  devtools: true

}

new Vue({
  render: h => h(App),
}).$mount('#app')
