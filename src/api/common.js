import { GetCategory, GetCategoryAll } from "@/api/news";
import { reactive } from '@vue/composition-api'

export function common() {
  const categoryItem = reactive({
    item: []
  })
  const getInfoCategory = () => {
    GetCategory({}).then(res => {
      categoryItem.item = res.data.data.data
    }).catch((error) => {
      console.log(error)
    })
  }
  const getInfoCategoryAll = () => {
    GetCategoryAll({}).then(response => {
      // console.log(response)
      categoryItem.item = response.data.data.data
      console.log(categoryItem.item)
    }).catch(error => {
      console.log(error)
    })
  }
  return {
    getInfoCategory,
    getInfoCategoryAll,
    categoryItem
  }
}