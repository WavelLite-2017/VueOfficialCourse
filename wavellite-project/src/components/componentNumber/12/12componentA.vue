<template>
  <div>
    <!-- 2.在子组件中定义一个slot元素，让父组件之间的内容通过它来传递进来，如果没有的话内容会被抛弃 -->
    <slot></slot>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'componentA12'
}
</script>
