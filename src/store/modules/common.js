import { GetCategory } from "@/api/news";

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
  actions
}