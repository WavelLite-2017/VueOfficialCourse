<template>
  <div>
    <button
      v-for="(item, index) in btn"
      :key="index"
      @click="btnTab(item)"
    >{{item}}</button>
    <p>观察下面中的BtnCenter中子栏目选中后，是否在切换的时候被Vue重新实例了</p>
    <div class="box">
      <h5 v-if="!defaultName">默认文字：该页面假设你已经阅读过了组件基础。如果你还对组件不太了解，推荐你先阅读它</h5>
      <!-- 1.没有keep-alive的元素包裹中，每次进行切换的时候Vue都会重新创建一个 defaultName 实例 -->
      <component :is="defaultName"></component>

      <!-- 2.被keep-alive包裹的组件，里面的切换会被缓存下来（失活的组件将会被缓存！） -->
      <keep-alive>
        <h1 :is="defaultName"></h1>
      </keep-alive>
    </div>
  </div>
</template>

<style scoped>
.box {
  border: 1px solid #000;
  width: 600px;
  height: 100%;
  padding: 10px;
}
</style>

<script type="text/ecmascript-6">
import btnLeft from './componentNumber/13/btnLeft'
import btnCenter from './componentNumber/13/btnCenter'
import btnRight from './componentNumber/13/btnRight'

export default {
  // 3.是否是组件的name属性
  name: 'keepAliveWithDynamicComponent',
  data: function () {
    return {
      btn: ['btnLeft', 'btnCenter', 'btnRight'],
      defaultName: ''
    }
  },
  components: {
    btnLeft,
    btnCenter,
    btnRight
  },
  methods: {
    btnTab: function (item) {
      this.defaultName = item
    }
  }
}

/*
* 总结：在动态组件上使用keep-alive
*   切换组件通过 v-bind:is 特性来进行切换，至于绑定在那个标签这个不重要，一般用 component 表示这是一个组件切换，也可以用在其他标签上。见 1 和 2
*
*   场景使用：但我们在切换组件的时候，有时想要保持这些组件的状态，避免反复重新渲染，导致性能等问题。见 1 （运行项目在页面上看）
*     - 选中btnCenter下的其中 ‘中内容’ 栏目，再次切换一级栏目后回到btnCenter上，发现页面重新回到了‘上栏目’上。（没有包裹keep-alive标签）
*     - 原因在于：每次切换后，Vue都会重新创建一个新的 组件（defaultName对应的组件名） 实例。见 1 中的 defaultName的值
*
*   keep-alive 保持该组件下的状态
*     - 在组件外面包裹一个 keep-alive 标签，见 2
*     - 我们再次去切换栏目时发现 btnCenter 下的信息没有变，说明我们保持了之前我们的操作（被选中的文章）。见 2 （运行项目在页面上查看）
*
*   注意： keep-alive 要求被切换到的组件都有自己的名字，不论是通过组件的 name 选项还是局部/全局注册。
*     - 暂时不明白墨子意思（可查看具体的API，现在就记住该标签可以缓存组件的状态（被选中状态）），组件的 name 估摸是 export default 下的 name 属性，见 3
* */
</script>
