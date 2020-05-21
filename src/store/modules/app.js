import { Login } from '@/api/login'
import { setToKen, setUserName, getUserName, removeToKen, removeUserName } from '@/utils/app'

const state = {
  isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
  to_ken: '',
  username: getUserName() || ''
}

const mutations = {
  SET_COLLAPSE(state) {
    state.isCollapse = !state.isCollapse
    sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
    // cookie.set('isCollapse', JSON.stringify(state.isCollapse))
  },
  SET_TOKEN(state, value) {
    state.to_ken = value
  },
  SET_USERNAME(state, value) {
    state.username = value
  }
}

const actions = {  // 可以回调处理事情 
  login({ commit }, repuestData) {
    return new Promise((resolve, reject) => {
      Login(repuestData).then((response) => {
        let data = response.data.data
        // console.log(data, '---')
        // 普通的
        // content.commit('SET_TOKEN', data.toKen);
        // content.commit('SET_USERNAME', data.username);
        // 解构的
        commit('SET_TOKEN', data.token);
        commit('SET_USERNAME', data.username);
        setToKen(data.token);
        setUserName(data.username);
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  exit({commit}) {
    removeToKen(),
    removeUserName()
    commit('SET_TOKEN', '')
    commit('SET_USERNAME', '')
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}

const getters = {
  isCollapse: state => state.isCollapse,
  username: state => state.username
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}