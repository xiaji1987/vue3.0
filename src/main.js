import Vue from "vue";
import VueCompostion from '@vue/composition-api'
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './icons' // 全局组件
import './router/premit' // 路由拦截，检测token

Vue.use(ElementUI)
Vue.use(VueCompostion)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
