<template>
  <div>
    {{msg}}
    <!-- 2.1.把注册的组件渲染在页面中 -->
    <ComponentA></ComponentA>
    <ComponentB></ComponentB>
  </div>
</template>

<style scoped>

</style>

<script>
/* 3.导入组件 */
import ComponentA from './componentNumber/01/ComponentA'
import ComponentB from './componentNumber/01/ComponentB'

// 1.把引入的组件信息导出数据到当前组件中 export default
export default {
  // 2.注册导入的组件
  components: {
    ComponentB,
    ComponentA
  },
  data: function () {
    return {
      msg: '我是主页面'
    }
  }
}
/*
 * 总结：模块系统
 *   我们可以通过import/require使用一个模块系统。这里使用import（webpack中的引入方式）来引入
 *
 * 总结：在模块系统中局部注册
 *   在我们使用了Babel和webpack的模块系统，这种情况下，我们创建一个components目录，用于放置组件，见 左侧目录文件夹
 *   我们引入了子组件ComponentA和ComponentB，这里只是局部引入，在其他组件中需要使用也得单独引入，见 3
 *   通过export default {} 对象中的components {} 注册组件，这样就可以在页面上进行调用了。见 2.1
 * */
</script>
