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
    if(to.path == '/login') {
      removeToKen()
      removeUserName()
      store.commit('app/SET_TOKEN', '')
      store.commit('app/SET_USERNAME', '')
    }
    next()
    // console.log('存在')
  } else {
    // console.log('不存在')
    if(whiteRouter.indexOf(to.path) != -1) {
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