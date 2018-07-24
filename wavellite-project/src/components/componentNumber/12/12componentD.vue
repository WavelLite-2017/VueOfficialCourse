<template>
  <div>
    <!-- 1.设置默认值 -->
    <button><slot>Submit</slot></button>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'componentD12',
  data: function () {
    return {
      msg: '我是子组件的msg'
    }
  }
}
</script>
