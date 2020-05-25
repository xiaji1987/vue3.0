<template>
  <div>子组件
    {{testA}}
    <B attrsC="爸爸传给B" v-on="$listeners"/>
  </div>
</template>

<script>
import { reactive, provide } from '@vue/composition-api'
import B from './b'
export default {
  components: { B },
  setup (props, { attrs }) {
    const testA = reactive(attrs)
    // provide('provideA', '看看吧')
    console.log(testA)
    return {
      testA
    }
  }
}
</script>

<style>

</style>