import Vue from "vue";
import VueCompostion from '@vue/composition-api'
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import global from './utils/global'// vue2.0自拟定义全局方法
import './icons' // 全局组件
import './router/premit' // 路由拦截，检测token
import { buttonPermission } from '@/utils/buttonPermission'
import '@/utils/buttonPerm'

Vue.prototype.btnPerm = buttonPermission
Vue.use(VueCompostion)
// Vue.use(global)
Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
