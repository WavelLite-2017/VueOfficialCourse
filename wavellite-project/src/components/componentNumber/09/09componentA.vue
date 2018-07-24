<template>
  <div>
    $event.target 直接找到input元素的信息的 .checked属性值
    <br>
    <!-- 5.在这里进行绑定数据，绑定事件，改变事件后通过第二个参数发送给父组件，并改变原值 -->
    <input
      type="checkbox"
      v-bind:checked="isCheckedTrue"
      v-on:change="$emit('change1', $event.target.checked)"
    > {{lookVm()}}
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'componentA09',
  model: {
    // 2.v-model绑定进来的数据为 isCheckedTrue
    prop: 'isCheckedTrue',
    // 3.绑定进来的事件，change1 只是名字而已，不是说是change事件
    event: 'change1'
  },
  props: {
    // 4.再通过props来进行验证
    isCheckedTrue: Boolean
  },
  methods: {
    lookVm: function () {
      console.log(this)
      return 'v-model事件改变外部data值'
    }
  }
}
/*
* 总结：数据流程按编号走
* */
</script>
