<template>
  <div>
    <async_example></async_example>
    <asyncSonComponent></asyncSonComponent>
    <my_async></my_async>
    <my_home></my_home>
    <routineComponent>常规组件书写方式</routineComponent>
    <async_webpack_example></async_webpack_example>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import Vue from 'vue'
// 3.常规组件调用方式
import routineComponent from './componentNumber/14/14-asyncSonComponent'
import LoadingComponent from './componentNumber/14/my_home'

// 1.全局注册组件，异步调用，缓存起来渲染的时候进行调用组件
Vue.component('async_example', function (resolve, reject) {
  setTimeout(function () {
    resolve({
      // 加载成功
      template: '<div>我是异步组件, 1</div>'
    })
  }, 1000)
})

// 2.异步调用组件方法 全局中的写法
Vue.component('my_async', () => import('./componentNumber/14/14-asyncSonComponent'))

// 5.异步调用组件方法 webpack的code-splitting功能一起使用
Vue.component('async_webpack_example', function (resolve) {
  require(['./componentNumber/14/webpack_example'], resolve)
})

export default {
  name: 'asyncComponent',
  // 2.1.异步调用组件方法 components中的写法
  components: {
    'asyncSonComponent': function (resolve) {
      setTimeout(function () {
        resolve({
          template: '<div>333</div>'
        })
      }, 2000)
    },
    // 4.当使用局部注册的时候，我们也可以直接提供一个返回的 Promise 的函数
    'my_home': function () {
      return import('./componentNumber/14/my_home')
    },
    // 3.1.常规组件的书写方式
    routineComponent
  }
}

const AsyncComponent = () => ({
  // 需要加载的组件（是一个Promise对象）
  component: import('./componentNumber/14/14-asyncSonComponent'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  // error: ErrorComponent,
  // 展示加载时组件的延时时间，默认200毫秒
  delay: 400,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件，默认为 infinity
  timeout: 3000
})
console.dir(AsyncComponent)
/*
* 总结：异步组件
*   对官网解说和理解不完全，以后有机会可以接触后再看
*   该使用方法看看即可，如果需要用到再进行具体查看。
*   异步组件的使用不会被Browserify支持，至少官方不会。建议推荐直接使用webpack，已拥有内建的被作为第一公民的异步支持。
*
* 总结：处理加载状态
*   这里的异步组件工厂函数也可以返回一个如下格式的对象（官方说明）
*   表示也是一脸懵逼中...
* */
</script>
