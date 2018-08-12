// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 新模板
// 1.引入组件
import Vue from 'vue'
// import ComponentAll from './components/01-componentRegistration'
// import ComponentAll from './components/02-automaticGlobalRegistrationOfBaseComponents'

// import ComponentAll from './components/03-propCasing_camelCaseVsKebab-case'
// import ComponentAll from './components/04-passingStaticOrDynamicProps'
// import ComponentAll from './components/05-oneWayDataFlow'
// import ComponentAll from './components/06-propValidation'
// import ComponentAll from './components/07-nonPropAttributes'

// import ComponentAll from './components/08-eventNames'
// import ComponentAll from './components/09-customizingComponentV-Model'
// import ComponentAll from './components/10-bindingNativeEventsToComponents(看不懂)'

// import ComponentAll from './components/12-slotContent'

// import ComponentAll from './components/13-keepAliveWithDynamicComponent'
// import ComponentAll from './components/14-asyncComponents'

// import ComponentAll from './components/15-element&componentAccess'
// import ComponentAll from './components/16-accessingTheParentComponentInstance'
// import ComponentAll from './components/17-accessingChildComponentInstances&ChildElements'
// import ComponentAll from './components/18-dependencyInjection'
// import ComponentAll from './components/20-recursiveComponents'
// import ComponentAll from './components/21-circularReferencesBetweenComponents'
// import ComponentAll from './components/22-inlineTemplates'
// import ComponentAll from './components/24-forcingAnUpdate'
import ComponentAll from './components/25-cheapStaticComponentsWithVOnce'

Vue.config.productionTip = false

// 全局定义的组件-见 03-propCasing...
// Vue.component('blog-post', {
//   props: ['postTitle'],
//   template: `<div>{{postTitle}}</div>`
// })

/* eslint-disable no-new */
new Vue({
  // 2.绑定index页面的id #app
  el: '#app',
  data: {
    msg: '我来自main.js的数据，是用来测试注册的根实例数据'
  },
  // 3.绑定主页面
  components: {
    ComponentAll
  },
  // 4.渲染主页面
  template: '<ComponentAll/>'
})

// 原始模板
// import Vue from 'vue'
// import App from './App'
// import router from './router'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
