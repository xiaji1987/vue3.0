import { GetCategory, GetCategoryAll } from "@/api/news";
import { reactive } from '@vue/composition-api'
import service from '@/utils/request'

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
      categoryItem.item = response.data.data
      // console.log(categoryItem.item, '15616')
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

export function QiniuToken(data) {
  return service.request({
    methods: 'post',
    url: '/uploadImgToken/',
    data
  })
}