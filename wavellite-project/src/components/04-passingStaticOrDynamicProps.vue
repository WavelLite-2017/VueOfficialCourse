<template>
  <div>
    <!-- 1.title为静态传递数据，直接把值写在组件上，不管是绑定数据进入组件（如），还是不绑定数据（在这里如title、msgTxt）等 -->
    <!-- 2.:msg是通过v-bind来绑定的数据，这就是动态赋值，比如动态赋值一个变量的值，如:msg -->
    <!-- 3.:number也是通过v-bind来绑定的数据，当这个是动态赋予一个复杂表达式的值，如:number -->
    <h3>静态与动态赋值</h3>
    <componentA04
      title="我是静态名字，意思就是说我是直接在这里写的文字"
      :msg="msg"
      msgTxt="msgText"
      :number="1+2+3+4+5+6+7+8+9+10"
      :abc="123"
    ></componentA04>

    <hr>
    <!-- 4.传递一个静态数字 links（静态赋值），传递一个动态数字 postLinks（动态赋值） -->
    <h3>传递一个静态数字links（静态赋值）和一个动态数字postLinks（动态赋值）</h3>
    <componentA04
      :links="42"
      :postLinks="post.links"
    ></componentA04>

    <hr>
    <!-- 5.传递一个布尔值 is-pulished 不明白什么意思，传递一个静态赋值的true，传递一个动态赋值的post.isPublished -->
    <h3>传递一个布尔值</h3>
    <p>--1、包含该prop没有值的情况下在内，都意味着true。 -> 不明白什么意思--</p>
    <componentA04
      isPulished
    ></componentA04>
    <p>--2、下面传递静态的布尔值和动态的布尔值--</p>
    <componentA04
      :isPulished="true"
    ></componentA04>
    <componentA04
      :isPulished="post.isPulished"
    ></componentA04>

    <hr>
    <!-- 6.传递一个数组，静态赋值和动态赋值 -->
    <p>3、传递一个数组，静态赋值和动态赋值</p>
    <componentA04
      :commentIds="[1, 2, 3, 4]"
    ></componentA04>
    <componentA04
      :commentIds="post.commentIds"
    ></componentA04>

    <hr>
    <!-- 7.传递一个对象，静态赋值和动态赋值 -->
    <p>4、传递一个对象，静态赋值和动态赋值</p>
    <componentA04
      :author="{name: 'Sar', age: 22}"
    ></componentA04>
    <componentA04
      :commentIds="post.author"
    ></componentA04>

    <hr>
    <!-- 8.传递一个对象的所有属性，即没有propName，直接赋值过去 -->
    <p>5、传递一个对象的所有属性，即没有绑定姓名，直接赋值过去后再里面进行调用</p>
    <componentA04
      :obj="true"
      v-bind="post.noPostName"
    ></componentA04>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import componentA04 from './componentNumber/04/04componentA'

export default {
  name: 'passingStaticOrDynamicProps',
  components: {
    componentA04
  },
  data: function () {
    return {
      msg: '我是自己写的文字',
      post: {
        links: 1618,
        isPulished: true,
        commentIds: [4, 5, 6],
        author: {
          name: '1618',
          age: 28
        },
        noPostName: {
          i1: '省略定义绑定对象的名称',
          i2: '传递一个对象的所有所以属性'
        }
      }
    }
  }
}
/*
* 总结：传递静态或动态Prop
*   传递静态：通过直接赋值的形式传递数据，如title、msgTxt、abc，见 1
*   传递动态：通过v-bind绑定的数据，在子组件中用props接收的数据均为动态传递prop
*     - 普通动态赋值  见 2
*     - 复杂表达式赋值 见 3
*     - 我们可以传递任何类型的值给prop。
*
* 总结：传入一个数字
*   静态prop：静态值，如42，我们也需要通过v-bind来告诉Vue，这是javaScript表达式而不是一个字符串，见 4
*   动态prop：动态值，用一个变量进行动态赋值（值存放在data中或者其他（如methods方法中等））见 4
*
* 总结：传入一个布尔值
*   包含该 prop 没有值的情况在内，都意味着 `true`。 ----- 不明白什么意思，也没找到对应的解释
*   静态prop：静态值，如false、true，我们也需要通过v-bind来告诉Vue，这是javaScript表达式而不是一个字符串，见 5
*   动态prop：动态值，用一个变量进行动态赋值（值存放在data中或者其他（如methods方法中等））见 5-2
*
* 总结：传入一个数组
*   静态prop：静态值，如[1, 2, 3]，我们也需要通过v-bind来告诉Vue，这是javaScript表达式而不是一个字符串，见 6
*   动态prop：动态值，用一个变量进行动赋值（值存放在data中或者其他（如methods方法中等））见 6-3
*
* 总结：传入一个对象
*   静态prop：静态值，如{i1: 'abc', i1: 'cbd'}，我们也需要通过v-bind来告诉Vue，这是javaScript表达式而不是一个字符串，见 7
*   动态prop：动态值，用一个变量进行动赋值（值存放在data中或者其他（如methods方法中等））见 7-4
*
* 总结：传入一个对象的所有属性
*   传递一个对象的所有属性，通过v-bind不带参数的传递。比如 v-bind:='post.noPropName',等同于 v-bind:i1='post.noPropName.i1' \ v-bind:i2='post.noPropName.i2'
*   传递一个对象的所有属性时，只能通过动态传递来完成。见 8-5
* */
</script>
