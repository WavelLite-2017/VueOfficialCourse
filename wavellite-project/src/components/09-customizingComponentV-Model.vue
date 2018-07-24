<template>
  <div>
    <!-- 1.自定义组件的 v-model -->
    <componentA09 v-model="lovingVue"></componentA09>
    {{lovingVue}}
    <hr>
    <my-model v-model="myNum"></my-model>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import Vue from 'vue'
import componentA09 from './componentNumber/09/09componentA'

Vue.component('my-model', {
  // 2.传递参数和事件类型(click的名字可以随便改变，只要跟$emit中的事件名一致就行)
  model: {
    prop: 'myNum',
    event: 'click'
  },
  // 3.验证类型及接收值
  props: {
    myNum: Number
  },
  methods: {
    numFoo: function () {
      console.dir(this, 2)
      return this.myNum + 1
    }
  },
  template: `
    <div>
        <button
            v-bind:myData="myNum + 1"
            v-on:click="$emit('click', myNum+1)"
        >按钮改变一切</button>
        <p>我是否能通过v-model来改变父组件的值呢？ {{myNum}}</p>
        <p>{{numFoo()}}</p>
    </div>
  `
})

export default {
  name: 'customizingComponentV-Model',
  components: {
    componentA09
  },
  data: function () {
    return {
      lovingVue: true,
      myNum: 10
    }
  }
}
/*
* 总结：自定义组件的v-model
*   组件上的v-model默认会利用名为 value的prop和名为input的事件。见 39-sendingMessageToParentsWithEvents.html 7
*   但是在单选框、复选框等输入控件可能会见value特性用于不同的目的。而组件中的 --model-- 选项可以用来避免这样的冲突。见 子组件 5 和 全局组件 2
*
*   v-model的特性就是在组件中可以通过 组件的model属性和props属性来进行数据的接收与事件的接收（并用$emit触发事件）。也就是说v-model自带数据和事件
* */
</script>
