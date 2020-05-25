let tableLoadData = {
  data() {
    return {
      name: '123456'
    }
  }
}

export default tableLoadData

// 会混入到引入地文件中
// 组件
/* import tableLoadData from '@/mixins/tableLoadData'
export default {
  mixin: [tableLoadData]
} */