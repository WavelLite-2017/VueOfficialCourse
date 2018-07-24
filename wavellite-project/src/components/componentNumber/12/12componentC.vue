<template>
  <div>
    <!-- 1.通过插槽特性 name，用来定义额外的插槽（需要定义多个slot且内容不同的情况） -->
    <header>
      <!-- 2.我希望把页头放在这里 -->
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 3.我希望把主要内容放在这里 -->
      <slot></slot>
    </main>
    <footer>
      <!-- 4.我希望把页脚放在这里 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'componentC12'
}
</script>
