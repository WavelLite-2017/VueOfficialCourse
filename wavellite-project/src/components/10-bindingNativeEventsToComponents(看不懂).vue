<template>
  <div>
    <componentA10 v-bind:label="num" v-bind:value="123"></componentA10>
    {{num}}
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import componentA10 from './componentNumber/10/10componentA'

export default {
  name: 'bindingNativeEventsToComponents',
  components: {
    componentA10
  },
  data: function () {
    return {
      num: 22
    }
  },
  methods: {
    onFocus: function () {
      console.log(1)
    }
  }
}
/*
* 总结：将原生事件绑定到组件
*   原生事件：系统自带的一些属性事件，如input的onFocus事件。
* */
</script>
