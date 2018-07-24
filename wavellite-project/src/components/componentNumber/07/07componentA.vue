<template>
  <div>
    <p>从组件上面传递过来的数据，没有经过v-bind绑定，即非Prop {{dataItem()}}</p>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'componentA07',
  methods: {
    // 1.不通过v-bind传递的非prop，通过获取根目录下面的$attr的属性来获取值
    dataItem: function () {
      console.log(this.$attrs['data-item'])
      return this.$attrs['data-item']
    }
  }
}
</script>
