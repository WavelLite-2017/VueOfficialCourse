<template>
  <div>
    我是子组件 - two - {{this.$parent.$parent.msg}} ... 这是通过 parent.parent 获取的 msg
    <p>{{msg}} ::::::::: 我是通过 依赖注入传递的数据，父组件通过provide发出数据或者方法，任何子组件（深层次的一样）在组件中通过inject属性来接收数据 :::::::::</p>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'twoComponent',
  /* 3.在任意子组件中通过inject来获取发出的数据或者方法 */
  inject: ['msg']
}
</script>
