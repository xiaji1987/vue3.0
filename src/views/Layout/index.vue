<template>
  <div id="layout" :class="[menuState ? 'close' : 'open']">
    <LayoutHeader />
    <LayoutMain />
    <LayoutNav />
  </div>
</template>

<script>
import LayoutHeader from './Components/Header'
import LayoutMain from './Components/Main'
import LayoutNav from './Components/Nav'
import { computed } from '@vue/composition-api'
export default {
  name: 'layout',
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutNav
  },
  setup (props, { root }) {
    const menuState = computed(() => root.$store.state.app.isCollapse)
    return {
      menuState
    }
  }
}
</script>

<style lang="scss" scoped>
#layout {
  background-color: #f7f7f7;
}
</style>