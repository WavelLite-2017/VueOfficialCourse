<template>
  <ul>
    <li v-for="item in folder" :key="item.id">
      <span>{{item.label}}</span>
      <!-- 2.组件内外都需要有共同的接收参数，如folder -->
      <!-- 3.在v-if条件中，提供的参数必须能保证最后都会变成false才行。 -->
      <tree :folder="item.children" v-if="item.children"></tree>
    </li>
  </ul>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  // 1.name是用于自调用时的名称
  name: 'tree',
  props: ['folder']
}
</script>
