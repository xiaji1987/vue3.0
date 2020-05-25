<template>
  <div class="page404">
    <div>页面404了</div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  computed: {
    message() {
      return "The webmaster said that you can enter this page..."
    }
  },
}
</script>

<style lang="scss" scoped>
.page404 {
  height: 100vh;
  text-align: center;
  display: flex;
  font-weight: bold;
  font-size: 40px;
}
</style>