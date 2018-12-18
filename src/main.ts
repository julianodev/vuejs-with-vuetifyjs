import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './Routes';


Vue.config.productionTip = false;
Vue.config.devtools = true;


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
