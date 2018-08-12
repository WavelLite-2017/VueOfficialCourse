<template>
  <div>
    <!-- 1.在组件上直接书写 inline-template 可以替换掉原组件上的信息 -->
    <myTemplate inline-template>
      <div>
        <p>inline-template到底是什么意思呢！！</p>
        <p>这里的信息直接把子组件的信息覆盖掉了！</p>
      </div>
    </myTemplate>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import myTemplate from './componentNumber/22/my-template'

export default {
  name: 'inlineTemplate',
  components: {
    myTemplate
  }
}

/*
* 总结：内联模板
*   该模板感觉没有太大作用，顶多在全局组件中可以把组件的 template 信息放在页面中去书写。
*   在现在这种情况下，没有任何意义，暂时没有发现可以动态赋值 inline-template 的情况。见 1
*
*   官网：当 inline-template 出现在一个组件上，这个组件会使其里面的内容作为模板，而不是将其作为分发的内容（比如发送给组件内的slot）。
*
*   官网推荐：优先使用new Vue实例的 template 属性 或者.vue文件里的一个 <template> 元素来定义模板
* */
</script>
