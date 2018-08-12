<template>
  <div>
    我是一级子组件 - one - {{this.$parent.msg}} ... 这是通过 parent 获取的 msg
    <slot></slot>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'oneComponent'
}
</script>
