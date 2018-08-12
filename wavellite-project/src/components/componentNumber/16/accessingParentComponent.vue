<template>
  <div>
    <!-- 1.我可以从子组件中修改这个值，从而让其他依赖于这个值得位置也变更了，但我们却不能明确到底在哪里做了修改 -->
    {{this.$parent.msg = 2}} - 没有通过Prop传递，通过$parent进行获取父组件数据
    <slot></slot>
    {{this.$parent.msg == 2?'我被修改了': 2}}
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'accessingParentComponent'
}
</script>
