import { GetCategory } from "@/api/news";

const state = {
  qiniuUrl: "http://qasf8jmkn.bkt.clouddn.com"
}
const getters = {
  qiniuUrl: state => state.qiniuUrl
}

const actions = {
  getInfoCategory(conntent, requestData) {
    return new Promise((resolve, reject) => {
      GetCategory({}).then(res => {
        resolve(res)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters
}