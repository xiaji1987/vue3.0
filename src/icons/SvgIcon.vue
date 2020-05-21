<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import { reactive, ref, isRef, toRefs, onMounted, watch, computed } from '@vue/composition-api';
export default {
  name: 'svgIcon',
  // props: ["iconClass", "className"],
  
  props: {
    iconClass: {
      type: String,
      default: '',
      // required: true,
      // validator: () => {} 
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    // console.log(props.iconClass)
    // console.log(props.className)
    const iconName = computed(() => `#icon-${props.iconClass}`)
    const svgClass = computed(() => {
      if(props.className) {
        return `svg-icon ${props.className}`
      } else {
        return 'svg-icon'
      }
    })

    return {
      iconName,
      svgClass
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>