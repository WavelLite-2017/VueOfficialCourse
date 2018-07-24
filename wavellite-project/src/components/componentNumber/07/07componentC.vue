<template>
  <div>
    <p>{{msg}}</p>
    <p>{{attr()}}</p>
    <!-- 2.通过实例的 $attrs 属性保存了传递给组件的一个特性和特性值，从而可以在组件中通过$attrs来使用里面的特性 -->
    <p v-bind="$attrs">我是通过 $attrs 取的数据，通过v-bind来绑定该特性（见该元素的data='24'） {{$attrs}}</p>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'componentC07',
  inheritAttrs: false,
  data: function () {
    return {
      msg: '今天下了好大的暴雨'
    }
  },
  methods: {
    // 1.虽然根元素上通过 inheritAttrs 的作用从而不能显示该传递过来的特性，但$attrs中还是会保存该特性
    attr: function () {
      console.log(this.$attrs)
      return this.$attrs
    }
  }
}
</script>
