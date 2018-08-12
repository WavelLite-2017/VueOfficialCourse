<template>
  <div>
    {{this.$root.msg}}
    <hr>
    <myComponent></myComponent>
    <hr>
    <myRoot></myRoot>
    <hr>
    {{test()}}
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import myComponent from './componentNumber/15/myComponent'
import Vue from 'vue'

// 2.定义的全局组件，在myComponent.vue组件中引用了该组件
Vue.component('myRoot', {
  template: '<div>{{this.$root.msg}} - 我是全局注册的组件中引用了$root的数据（根实例数据）</div>'
})

export default {
  name: 'elementComponentAccess',
  components: {
    myComponent
  },
  methods: {
    // 1.修改了根实例中的数据
    test: function () {
      this.$root.msg = '我在修改这个全局数据，而其他渲染的数据也跟着改变了数据'
      return this.$root.msg
    }
  }
}

/*
* 总结：访问根实例
*   每个项目肯定有一个new Vue() 的根实例，而我们要设定的全局数据就需要在这里面进行设置，见 main.js中的data数据。
*   在其他子组件中可以对全局数据进行修改，被引用了的地方都会被变动数据。见 1
*   通过访问根实例，我们还可以还可以调用全局注册的组件。见 2
* */
</script>
