<template>
  <div>
    <!-- 2.设置内部事件 -->
    <button @click="eventOne">点击按钮子</button>
    <!-- 3.绑定外部父组件绑定的事件 -->
    <button @click="$emit('my-event')">点击按钮父</button>
    <!-- 3.1.因绑定外部事件的事件名对不上，所以不能触发事件 -->
    <button @click="$emit('my-event')">内外两个事件名称需要一样，外面是kebab-case，里面是camelCase，这样不能触发事件，原因见总结</button>
    <p>内部组件值在变化：{{num}}</p>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'componentA08',
  data: function () {
    return {
      num: 0
    }
  },
  methods: {
    eventOne: function () {
      return this.num++
    }
  }
}
</script>
