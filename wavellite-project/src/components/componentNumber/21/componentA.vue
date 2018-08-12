<template>
  <div>
    <hr>
    <h2>我是组件A</h2>
    <ul>
      <li v-for="item in arr" :key="item.id">
        <span>{{item.text}}</span>
        <!-- 2.通过遍历时判断item.children是否存在，从而引入B组件，并传递数据过去 -->
        <componentB v-if="item.children" :arrText="item.children"></componentB>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import componentB from './componentB'

export default {
  name: 'componentA',
  props: ['arr'],
  components: {
    componentB
  }
}
</script>
