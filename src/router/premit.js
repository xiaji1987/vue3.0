import router from './index'
import { getToKen, removeToKen, removeUserName } from '../utils/app'
import store from '../store/index'

const whiteRouter = ['/login']
// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // console.log(next)
  if (getToKen()) {
    if (to.path == '/login') {
      removeToKen()
      removeUserName()
      store.commit('app/SET_TOKEN', '')
      store.commit('app/SET_USERNAME', '')
      next()
    } else {
      // if()
      if (store.getters['app/roles'].length === 0) {
        // console.log(store.getters['app/roles'])
        store.dispatch('permission/getRoles').then(response => {
          // console.log(response)
          let role = response.role;
          let button = response.button; // 这是上学时说的内容
          let btnPerm = response.btnPerm;
          store.commit("app/SET_ROLES", role);
          store.commit("app/SET_BUTTON", btnPerm);
          // 存储角色 
          store.dispatch('permission/createRouter', role).then(response => {
            let addRouters = store.getters['permission/addRouters'];
            let allRouters = store.getters['permission/allRouters'];
            // 路由更新
            router.options.routes = allRouters;
            // 添加动态路由
            router.addRoutes(addRouters)
            next({ ...to, replace: true });
            // es6扩展运算符，防止内容发生变化的情况
            // 不被记录历史记录
          })
        });
      } else {
        next()
      }
    }
    // console.log('存在')
  } else {
    // console.log('不存在')
    if (whiteRouter.indexOf(to.path) != -1) {
      next()
    } else {
      next('/login')
    }
    /**
     * 1、直接进入index的时候，参数to被改变成了 "/index"，触发路由指向，就会跑beforeEach
     * 2、再一次 next 指向了login，再次发生路由指向，再跑beforeEach，参数的to被改变成了"/login"
     * 3、白名单判断存在，则直接执行next()，因为没有参数，所以不会再次beforeEach。
     */
  }
})