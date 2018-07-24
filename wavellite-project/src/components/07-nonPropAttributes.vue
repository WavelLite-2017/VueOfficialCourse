<template>
  <div>
    <!-- 1.通过传递非Prop的特性，通过根目录在$attr中进行获取 34 -->
    <componentA07 data-item="34"></componentA07>
    <!-- 2.替换/合并已有的特性，把如text='date'替换为text='text'，把如class类名的进行合并，让两者并存 -->
    <!-- 2.1.传递进去的type属性和类名class都是直接作用于根元素上，如果你们的input不是根元素，那么也就不会被改变 -->
    <componentB07 type="text" class="color"></componentB07>
    <!-- 3.这里的颜色没有被禁用，原因是class类名具有合并的特性，所以不会被影响，但data就会被影响传递，因为data具有替换的特性。 -->
    <!-- 3.1.inheritAttrs:false只对具有 替换 的特性有用 -->
    <componentC07 class="color" data="24"></componentC07>
  </div>
</template>

<style scoped>
  .color {
    background-color: #f3f3f3;
  }
</style>

<script type="text/ecmascript-6">
import componentA07 from './componentNumber/07/07componentA'
import componentB07 from './componentNumber/07/07componentB'
import componentC07 from './componentNumber/07/07componentC'

export default {
  name: 'nonPropAttributes',
  components: {
    componentA07,
    componentB07,
    componentC07
  }
}
/*
* 总结：非Prop的特性
*   一个非prop特性是指：传向一个组件，但该组件并没有相应的prop定义的特性。见 1
*   使用场景：因为有时我们自己都不知道下一次需要传递什么信息，所以组件可以接受任意的特性，而把这些传递过来的特性添加到这个组件的根元素上。见 子组件componentA07中的信息
*
* 总结：替换/合并已有的特性
*   我们通过外部传递进去的特性都会直接作用于根元素上面，如 1 组件上的 34 就是直接绑定在子组件内部的div（根元素）上。见 1
*   如果我们在根元素上设置了某些属性，那么我们传递的属性等就会把原有的进行替换或者合并。
*     - 如 type的date属性被改为text属性。见 2.1
*     - 而如类名从子组件中的border_box到外部传入的color进行合并。见 2.1
*
* 总结：禁用特性继承
*   如果我们不希望根元素继承传递过来的特性（这里的特性指：需要被替换一类的特性），我们可以在子组件中设定 inheritAttrs: false。
*     - 具有合并特性的不会受到 禁用特性继承的影响，见 3 class
*     - 具有替换特性的会受到 inheritAttrs属性的影响，导致无法传递进去，见 3 data
*
*   但是，虽然不能在根元素上显示传递的特性，却可以在实例中的 $attrs中保存该特性及特性值，通过 $attrs 进行在组件内部调用。见 componentC07中的 2
*     - 有了 inheritAttrs:false和$attrs，我们可以手动决定这些特性会被赋予那个元素上（在任意元素上都可以调用）。在撰写 基础组件 的时候是常会用到的。
*       Vue.component('base-input', {
*         inheritAttrs: false,
*         props: ['label', 'value'],
*         template: `
*           <label>
*             {{ label }}
*             <input
*               v-bind="$attrs"
*               v-bind:value="value"
*               v-on:input="$emit('input', $event.target.value)"
*             >
*           </label>
*         `
*       })
*
*     - 这个模式允许我们在使用基础组件的时候更像是在使用原始的HTML元素，而不会担心那个元素是真正的根元素。见下代码
*       <base-input
*         v-model="username"
*         class="username-input"
*         placeholder="Enter your username"
*       ></base-input>
* */
</script>
