  <template>
  <div>
    <componentA></componentA>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import Vue from 'vue'

// 1.v-once 只执行一次，在这里会把内容缓存下来。
Vue.component('componentA', {
  template: '<div v-once>这样说了，我还能说什么呢？！哈哈哈哈</div>'
})

export default {
  name: 'cheapStaticComponentsWithVOnce'
}

/*
* 总结：通过 v-once 创建低开销的静态组件
*   渲染普通的HTML在Vue中是 非常快 的。但当一个组件的静态信息量特别大的时候，我们可以通过 v-once 来对页面进行缓存，让页面在后期的时候对渲染提升。
*   使用方法：见 1
*
*   注意：在这种模式下，尽量少的使用这种情况。
*     - 优点：能加快二次渲染页面情况（针对静态组件信息量过大的情况下）。
*     - 缺点：首先这种情况在极少的情况下能给我们带来便利，且后期可能会给我们带来很大困惑，尤其针对共同开发的情况下，别人不知道或者没注意 v-once 时。
* */
</script>
