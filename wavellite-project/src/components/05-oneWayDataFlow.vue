<template>
  <div>
    <componentA05
      :initialCounter="0"
      :info="'  AB CD EFG '"
    ></componentA05>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import componentA05 from './componentNumber/05/05componentA'

export default {
  name: 'oneWayDataFlow',
  components: {
    componentA05
  }
}
</script>
