<template>
  <div>
    {{this.$root.msg}} - 我是子 子 组件中引用的
    <myRoot></myRoot>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'myComponent'
}

</script>
