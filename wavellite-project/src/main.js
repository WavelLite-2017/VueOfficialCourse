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
import ComponentAll from './components/12-slotContent'

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
