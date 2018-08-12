<template>
  <div>
    <accessingParentComponent>
      <twoParentComponent></twoParentComponent>
    </accessingParentComponent>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import accessingParentComponent from './componentNumber/16/accessingParentComponent'
import twoParentComponent from './componentNumber/16/twoParentComponent'

export default {
  name: 'accessingTheParentComponentInstance',
  components: {
    accessingParentComponent,
    twoParentComponent
  },
  data: function () {
    // 1.共享数据msg，在其他子组件或子子组件中都可以访问到
    return {
      msg: '我是父级组件所属文字'
    }
  }
}

/*
* 总结：访问父级组件实例
*   $root: 作用在于能获取new Vue() 实例下的数据、方法等。 this.$root.msg
*   $parent: 作用于获取子组件获取父组件的数据、方法等。 this.$parent.msg
*   他们的用法差不多。
*
*   该特性可以适当的共享一些组件库。比如在父组件下，所有的子组件都需要访问父组件下的数据、方法等，且会被修改的可能。见 本页面的 1
*
*   注意：在绝大多数情况下，触达父级组件会使得我们的调试和理解更难，尤其当我们改变了父级组件的数据时，我们不能明确的找到变更从哪里发起的。
*        见 accessingParentComponent 组件的 1
* */
</script>
