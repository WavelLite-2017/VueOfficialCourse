<template>
  <div>
    <!-- 1.通过ref绑定该元素，再通过$refs进行访问获取信息,下面同理，只是访问的是组件而已 -->
    <p ref="vue_p">我到底在哪里才能显示</p>
    <!-- 2.绑定组件里面的信息，可以通过$refs获取组件中的 msg 和 foo方法等 -->
    <accessingChildComponentInstances ref="com_component"></accessingChildComponentInstances>
    <div ref="box"></div>
    <!-- 3.必须要等实例化完成才能获取数据，所以这里做个点击事件。或者在生命周期实例化结束后调用方法 -->
    <button @click="fatherFoo">按钮</button>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import accessingChildComponentInstances from './componentNumber/17/accessingChildComponentInstances'

export default {
  name: 'accessingChildComponentInstances_ChildElements',
  components: {
    accessingChildComponentInstances
  },
  methods: {
    fatherFoo: function () {
      // {} 获取一个页面上绑定了ref属性的 $refs 对象 {vue_p: p, com_component: VueComponent, box: div}
      console.log(this.$refs)
      // 获取$refs下指定的 vue_p 的信息，从而进一步获取数据 <p data-v-28bc61da>我到底在哪里才能显示</p>
      console.log(this.$refs.vue_p)
      // 获取子组件 accessingChildComponentInstances 下的 msg 信息 与 foo方法  --- 我到底如何才能显示这个数据 --- 打印信息 --- 获取完毕
      console.log(this.$refs.com_component.msg)
      console.log(this.$refs.com_component.foo())

      this.$refs.box.innerHTML = '显示数据：' + this.$refs.com_component.msg + '，并打印：' + this.$refs.com_component.foo()
    }
  }
}

/*
* 总结：访问子组件实例或者子元素
*   prop：是父组件通过它绑定并传递数据到子组件中。
*   ref：是在当前页面中进行所需数据的绑定(见 子组件中的打印数据 this.$refs) 再通过$refs对象进行获取数据，见 1,2
*
*   $refs只会在组件渲染完成之后生效，并且他们不是响应式的（改变一个值后其他已被渲染的地方不会自动重新渲染）。所以我们应该避免在组件中的模板或计算属性中访问它
* */
</script>
