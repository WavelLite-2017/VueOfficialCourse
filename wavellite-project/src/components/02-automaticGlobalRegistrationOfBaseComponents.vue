<template>
  <div>
    <BaseButton @click="search"></BaseButton>
    <BaseIcon name="search" />
    <BaseInput v-model="searchText" @keydown.enter="search"></BaseInput>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">

// 1.引入的很多的小组件
import BaseButton from './componentNumber/02/BaseButton'
import BaseIcon from './componentNumber/02/BaseIcon'
import BaseInput from './componentNumber/02/BaseInput'

// 2.这是组件是包含基础组件的长列表，我们很不方便使用。要写很多的类名，引入很多的组件
export default {
  name: 'automaticGlobalRegistrationOfBaseComponents',
  // 3.定义很多的组件名
  components: {
    BaseButton,
    BaseIcon,
    BaseInput
  },
  data: function () {
    return {
      searchText: 'inputText'
    }
  },
  methods: {
    search: function () {
      console.log(1)
    }
  }
}
/*
 * 总结：基础组件的自动化全局注册
 *   暂时看不懂，需要大神呀。（为了让我们更好的使用基础组件，webpack -- require.context）
 *   可能我们的许多组件只是包裹了一个输入框或按钮之类的元素，是相对通用的。我们有时候会把他们成为基础组件，他们会在各个组件中被频繁的用到。
 *
 *   require.context 只全局注册这些非常通过的基础组件。
 *   以下为示例代码，见 4
 *
 *   记住全局注册的行为必须在Vue实例（通过new Vue）创建之前发生。
 * */

// 4.在src/main.js中全局导入基础组件的示例代码
// import Vue from 'vue'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'
//
// const requireComponent = require.context(
//  // 其组件目录的相对路径
//  './components',
//  // 是否查询其子目录
//  false,
//  // 匹配基础组件文件名的正则表达式
//  /Base[A-Z]\w+\.(vue|js)$/
// )
//
// requireComponent.keys().forEach(fileName => {
//  // 获取组件配置
//  const componentConfig = requireComponent(fileName)
//
//  // 获取组件的 PascalCase 命名
//  const componentName = upperFirst(
//    camelCase(
//      // 剥去文件名开头的 `'./` 和结尾的扩展名
//      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
//    )
//  )
//
//  // 全局注册组件
//  Vue.component(
//    componentName,
//    // 如果这个组件选项是通过 `export default` 导出的，
//    // 那么就会优先使用 `.default`，
//    // 否则回退到使用模块的根。
//    componentConfig.default || componentConfig
//   )
// })
</script>
