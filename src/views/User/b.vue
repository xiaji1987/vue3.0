<template>
  <div>孙组件
    {{testB}}
    <el-button @click="callback">调用index.vue的方法</el-button>
  </div>
</template>

<script>
import { reactive, inject } from '@vue/composition-api'
export default {
  setup (props, { attrs, emit }) {
    const testB = reactive(attrs)
    
    // console.log(inject('provideA'))
    // console.log(testB)
    const callback = () => {
      emit('update')
    }
    return {
      testB,
      callback
    }
  }
  
}
</script>

<style>

</style>