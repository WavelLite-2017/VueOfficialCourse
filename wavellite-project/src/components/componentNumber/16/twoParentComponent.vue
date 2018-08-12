<template>
  <div>
    {{this.$parent.msg || this.$parent.$parent.msg}} - 我的msg在父级组件中没有，实在父父级组件才有
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'twoParentComponent'
}
</script>
