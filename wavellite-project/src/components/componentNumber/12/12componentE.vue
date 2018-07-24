<template>
  <ul>
    <li v-for="item in todos" :key="item.id">
      <slot v-bind:todo="item">{{item.text}}</slot>
    </li>
  </ul>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'componentE12',
  props: ['todos']
}
</script>
