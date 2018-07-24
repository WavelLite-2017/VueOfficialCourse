<template>
  <div>
    <p>data中将prop中的值重新初始值了，子组件中直接对data中的值进行改变即可（不会报错了）：{{newCounterInitial()}}</p>
    <p>{{normalizedSize}}</p>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'componentA05',
  props: ['initialCounter', 'info'],
  data: function () {
    return {
      // 2.子组件想把prop中的数据作为一个本地的数据来使用时，就用data来定义一个新的变量，把这个prop的值作为初始值。
      counterInitial: this.initialCounter
    }
  },
  computed: {
    // 这个prop以原始的值传入，且需要进行转换，这时最好用prop的值来定义一个计算属性
    normalizedSize: function () {
      // 1.在这里直接改变initialCounter会发出警告，但不影响渲染。
      // Prop being mutated: xxx
      // this.initialCounter = 2
      // return this.counterInitial

      // 4.info以原始值传入后，需要进行改变
      return this.info.toLowerCase()
    }
  },
  methods: {
    // 3.通过data重新定义值后，就可以在这里重新赋值了，不会报错
    newCounterInitial: function () {
      this.counterInitial = 2
      return this.counterInitial
    }
  }
}
/*
* 总结：单向数据流
*   所有的prop都使得其父子prop之间形成一个 单向下行绑定，父级prop的更新会向下流动到子组件中，反过来则不行。
*   也就是说prop是一个单向数据流。
*
*   额外的，每次父组件发生更新时，子组件中所有的prop都会将刷新为最新的值，也就意味着我们不应该在子组件中内部改变prop中的值。如果这样做了，Vue会在浏览器中发出警告
*   以下两种常见的试图改变一个prop的情形：
*     - 将传递过来的prop在子组件内部的data中重新定义变量并赋值，从而改变重新定义的变量。见 2
*     - 将传递过来的prop以一种原始的值，在计算属性中进行转换。从而调用定义的计算属性。见 4
*
*   注意：如果传递过来的对象或数组时通过 引用传入的，所以对于一个数组或者对象类型的prop来说，在子组件中该阿斌这个对象或数组，其对象或数组本身也将会受影响，从而影响到父组件。
*   引用传入：就是传递过来的是指针，而不是值。所以改变值也就改变了原始数据
* */
</script>
