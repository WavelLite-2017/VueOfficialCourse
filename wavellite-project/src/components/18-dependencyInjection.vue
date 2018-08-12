<template>
  <div>
    <!-- 1.场景展现 组件嵌套组件，twoComponent需要引入本页面的msg数据 -->
    <oneComponent>
      <twoComponent></twoComponent>
    </oneComponent>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import oneComponent from './componentNumber/18/oneComponent'
import twoComponent from './componentNumber/18/twoComponent'

export default {
  name: 'dependencyInjection',
  components: {
    oneComponent,
    twoComponent
  },
  data: function () {
    return {
      msg: 'lIVE is True!'
    }
  },
  /* 2.把该组件中的数据或者方法写入在这里即可 */
  provide: function () {
    return {
      msg: this.msg
    }
  }
}

/*
* 总结：依赖注入
*   使用场景：当我们在页面中嵌套了多层次的组件，而最深层次组件中需要访问最大父组件的数据或者方法时。见 1
*
*   可以通过 provide 或 inject 两种属性来进行 发送和接收数据或者方法，见 2，见 twoComponent中的 3
*
*   注意：依赖注入让代码以目前的组件组织方式耦合在一起，使重构更加困难。
*        同时，所提供的属性都是非响应式的，父组件该了子组件的信息不回被改变。如果需要响应式的，那么我们就需要通过 Vuex 来进行真正的状态管理方案。
*
*   相对于$parent的属性比较：
*     - 这个用法可以在任意的子组件中访问到父组件的信息。而且还是局部暴露数据或者方法。
*     - 我们可以把依赖注入看作一部分的 '大范围有效的prop'。即祖组件不需要知道那些后代接收了并使用了它提供的数据或者方法。而后代组件中也不需要知道被注入的属性来自哪里。
* */
</script>
