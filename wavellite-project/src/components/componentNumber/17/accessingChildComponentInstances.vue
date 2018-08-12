<template>
  <div>

  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'accessingChildComponentInstances',
  data: function () {
    return {
      msg: '我到底如何才能显示这个数据'
    }
  },
  methods: {
    foo: function () {
      console.log(this.$refs)
      console.log('打印信息')
      return '获取完毕'
    }
  }
}
</script>
