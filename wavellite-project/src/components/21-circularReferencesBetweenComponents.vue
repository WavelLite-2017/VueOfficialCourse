<template>
  <div>
    <h2>我是父组件</h2>
    <!-- 1.这里只是当一个传递数据作用。在里面才是相互引入组件效果 -->
    <componentA :arr="msgArr"></componentA>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import componentA from './componentNumber/21/componentA'

export default {
  name: 'circularReferencesBetweenComponents',
  components: {
    componentA
  },
  data: function () {
    return {
      msgArr: [{
        id: 1,
        text: 'AAAAAAAAAA'
      }, {
        id: 2,
        text: 'BBBBBBBBBB',
        children: [{
          id: 2.1,
          text: 'B_B_'
        }]
      }, {
        id: 3,
        text: 'CCCCCCCCCC'
      }]
    }
  }
}

/*
* 总结：组件之间的循环引用
*   使用场景：当我们有 A B 两组件时，A 需要引入B，而 B 也需要引入 A。如果按正常引入则会报错。
*     - 在这种情况我们就需要对某一个进行设定，让解析的时候谁不需要先解析。见 组件B 里面的 4
*     - 相互引用也会考虑到 v-if 的 false 问题。不然也会成死循环。 见 组件A 里面的 2
*     - webpack的解决方案：异步引入，import('...')。见组件 B 里面的 4
*     - 另一个解决方案：beforeCreate
*       beforeCreate: function() {
*         this.$options.components.TreeFolderContents = require('./tree-folder-contents.vue').default
*       }
* */
</script>
