<template>
  <div>
    <h2>我是组件B</h2>
    <componentA :arr="arrText"></componentA>
  </div>
</template>

<style scoped>
div {
  border: 1px solid #000;
  padding: 20px;
}
</style>

<script type="text/ecmascript-6">
/* 3.这么正常引入父组件是没法渲染的。通过webpack异步引入进来 */
// import componentA from './componentA'

export default {
  name: 'componentB',
  props: ['arrText'],
  components: {
    /* 4.通过webpack的异步import方法引入的组件，表明我们不需要先解析A  ||  在A组件中设置相同操作（表明我们不先解析B） */
    componentA: function () {
      return import('./componentA')
    }
  }
}
</script>
