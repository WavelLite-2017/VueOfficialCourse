<template>
  <div>
    <!-- 1.在组件之间写的内容是可以通过插槽来进行传递的 -->
    <componentA12>
      <componentB12></componentB12>
      <h2>我是插槽文字，组件之间的文字</h2>
    </componentA12>

    <componentC12>
      <!-- 2.用在template上的slot -->
      <template slot="header">
        <h4>头部信息</h4>
      </template>
      <!-- 3.未命名的插槽，用于默认插槽 -->
      <p>中间主要内容信息</p>
      <p>第二款的性价比很高</p>
      <!-- 4.直接用在普通元素上的slot -->
      <b slot="footer">页脚部分</b>
    </componentC12>

    <!-- 4.作为默认值并可替换的slot -->
    <!-- 4.1.不替换默认组件中自带的信息 Submit -->
    <componentD12></componentD12> 默认值
    <!-- 4.2.替换里面信息 -->
    <componentD12>Save</componentD12> 替换默认值

    <!-- 5.编译作用域，每个组件内部都是独立的（即作用域独立），在这儿不能访问到子组件内部的msg。 -->
    <componentD12>老子曰：{{msg}}</componentD12>

    <!-- 6.作用域插槽|带数据的插槽（网络用语）--（及组件可以从子组件中取数据来用） -->
    <!-- 6.1.在这里，父组件传递todos到子组件，通过slot-scope来接收子组件v-bind绑定的todo，在父组件随便定义一个名字作为新的作用域存放todo，最后在进行渲染 -->
    <!-- 可以不用传递数据，直接在子组件定义数据也行，这样也就实现了从子组件取数据来用 -->
    <componentE12 v-bind:todos="todos">
      <!-- 6.5.通过slot-scope定义作用域插槽，并取名称 -->
      <template slot-scope="suiBianQuMingZi">
        <!-- 6.2.todo是子组件v-bind绑定的todo，isComplete是数据里面定义的信息 -->
        <span v-if="suiBianQuMingZi.todo.text == 'CCCCCCCCCCCCCCCCCCCCCCCCC'">√</span>
        {{suiBianQuMingZi.todo}}
      </template>
    </componentE12>
    <!-- 6.3.如果在这组件之间就直接传递信息，那么子组件的一切绑定都是无用的，下面变成了匿名插槽 -->
    <componentE12 v-bind:todos="todos">
      <template slot-scope="suiBianQuMingZi">
        我让你变成匿名插槽了
      </template>
    </componentE12>

    <!-- 7.解构slot-scope（不定义slot-scope的名称，使用 { ...v-bind传递的名称... }） -->
    <componentE12 v-bind:todos="todos">
      <template slot-scope="{todo}">
        <span v-if="todo.text === 'BBBBBBBBBBBBBBBBBBBBBBBBB'">√</span>
        {{todo.text}}
      </template>
    </componentE12>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import componentA12 from './componentNumber/12/12componentA'
import componentB12 from './componentNumber/12/12componentB'
import componentC12 from './componentNumber/12/12componentC'
import componentD12 from './componentNumber/12/12componentD'
import componentE12 from './componentNumber/12/12componentE'

export default {
  name: 'slotContent',
  components: {
    componentA12,
    componentB12,
    componentC12,
    componentD12,
    componentE12
  },
  data: function () {
    return {
      msg: '你是猴子请来的逗比嘛！',
      todos: [{
        text: 'AAAAAAAAAAAAAAAAAAAAAAAAA',
        id: 1,
        isComplete: 0
      }, {
        text: 'BBBBBBBBBBBBBBBBBBBBBBBBB',
        id: 2,
        isComplete: 1
      }, {
        text: 'CCCCCCCCCCCCCCCCCCCCCCCCC',
        id: 3,
        isComplete: 0
      }, {
        text: 'DDDDDDDDDDDDDDDDDDDDDDDDD',
        id: 4,
        isComplete: 1
      }]
    }
  }
}
/*
* 总结：插槽内容
*   <slot>: 该元素作为承载内容的出口。但渲染的时候，父组件的之间的一切内容会被传递进子组件中。见 1
*   如果子组件中没有一个 slot 元素，那么任何传入它的内容都会被抛弃。见 A子组件中的 2
*
* 总结：具名插槽
*   通过在 template 上定义的 slot='插槽名'，在子组件中到对应的插槽位置，见 2 及 C组件中的 2
*   通过在普通标签上定义的 slot='插槽名'，在子组件中导对应的插槽位置，见 4 及 C组件中的 4
*   不定义 插槽名 的slot，可作为默认插槽使用。见 3 及 C组件中的 3
*
* 总结：插槽的默认内容
*   在子组件中的slot里面写一个值（Submit），作为默认值。 见 4.1 及 子组件 1
*   在引入的组件元素中间写入一个值（Save），替换掉默认值。见 4.2
*
* 总结：编译作用域
*   插槽内容可以访问跟他自身的作用域相同的数据（即相同的实例下的或者说相同作用域下的），也可以理解为只能访问自身页面上的数据。不能访问组件D12的msg，见 5
*   注意：父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。可以理解为私有作用域，不对外开放的
*
* 总结：作用域插槽
*   使用场景：把子组件的数据拿来在父组件进行使用或编辑。
*     - 通过v-bind传递给子组件数据，也可以直接在子组件中定义，见 6.1
*     - 接着在父组件中通过slot-scope来定义 作用域插槽，并取名字来接收数据，而子组件通过在slot上的v-bind传递过来数据。见 6.5
*     - 最后便是父组件上使用子组件传递过来的数据，见 6.2
*
*     - 如果直接在父组件中不使用slot-scope并且不使用子组件中的数据，那么子组件中的slot将变成匿名插槽，见 6.3
*
*   注意：在 2.5.0+版本中，slot-scope 不在限制在 template 元素上使用，而可以在插槽内的任意元素或组件上使用。
*     - 也就是用可以在 2.5.0+版本中，可以把A子组件的数据 传递到父组件上，再从父组件传递到B子组件中去。没做案例，自行理解
*
* 总结：解构slot-scope
*   结合上面的作用域插槽，在slot-scope的定义名称的时候使用 { 子组件slot上通过v-bind定义的名称 } 来进行传递数据，不用在单独定义名称了。见 7
* */
</script>
