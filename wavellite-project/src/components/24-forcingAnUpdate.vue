<template>
  <div>
    <button @click="forceUpdate">强制更新</button>
    <div>这是页面中所有得子组件个数。{{$children.length}}</div>
    <div>{{num}}</div>
    <children_component></children_component>
    <children_component></children_component>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import Vue from 'vue'

Vue.component('children_component', {
  template: '<div>children</div>'
})

export default {
  name: 'forcingAnUpdate',
  data: function () {
    return {
      num: 0
    }
  },
  methods: {
    forceUpdate: function () {
      /* 1.强制更新页面信息，这个强制需要有待深究。只能说暂时通过 $children.length的个数来进行理解噶 */
      this.$forceUpdate()
    }
  },
  /* 2.强制更新后，这个状态必然会被触发，可在这里面做一些逻辑处理。 */
  updated: function () {
    /* 3.这里通过更新num的值后，该状态下的信息会被执行两次，这里只是为了表明数据更新必然会执行这个函数。嘎哈 */
    this.num = 12
    console.log('我是实例完成后，组件更新时的状态')
  }
}

/*
* 总结：强制更新
*   如果需要我们强制更新，说明我们在之前的代码中，99.99%都是写错了，嘎哈。
*   不过做错了事，我们就需要来在现在来弥补这个美丽的错误，使用$forceUpdate 来强制更新。见 1
* */
</script>
