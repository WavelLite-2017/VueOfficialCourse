<template>
  <div>
    <!-- 1.@绑定一个事件，在子组件通过 this.$emit('事件名')来触发事件 -->
    <componentA08 @my-event="clickEvent"></componentA08>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import componentA08 from './componentNumber/08/08componentA'

export default {
  name: 'eventNames',
  components: {
    componentA08
  },
  methods: {
    clickEvent: function () {
      console.log(1)
    }
  }
}

/*
* 总结：事件名
*   父组件向子组件传递事件时，内外的事件名必须一样。才能由子组件触发父组件的事件。
*   事件传递跟组件和prop不同，事件名不会被用作一个 JavaScript 变量名或属性名，所以没有理由使用 camelCase或PascalCase。
*     - 并且 v-on 事件监听器在DOM模板中会被自动转换为全小写（因为HTML是大小写不敏感的，所以不使用驼峰式命名法。）（官方解说）
*     - 所以 v-on:myEvent 将会变成 v-on:myevent 导致名字不同且不能被监听到）（官方解说）
*
*     - 内外事件名只要一样即可保证内部触发外部事件，所以再次说明名称不管在何时，都需要保证一样即可避免意想不到的错误。）（自我理解）
*     - 最后我们强烈推荐 始终是使用 kebab-case 的事件名，见 1 可配合子组件中信息看
* */
</script>
