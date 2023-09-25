import Vue from 'vue'
import App from './App.vue'

import router from "./router";


Vue.config.productionTip = false

import baseMixin from "@/mixins/baseMixin";
Vue.mixin(baseMixin);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


