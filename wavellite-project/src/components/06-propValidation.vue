<template>
  <div>
    <!-- 1.传递需要验证的参数，如果验证失败会发出警告 关键字（无效的（Invalid prop）、期望（Expected）） -->
    <!-- 1.1.对于必填的 mustString，意思就是必须要要传递这个参数，如果不传递就会警告（缺少所需prop（Missing required prop）） -->
    <!-- 1.2.对于有默认值多的defaultNumber、defaultObj，意思就是哪怕你不传递这个prop，系统也会从默认值里面去取来用。 -->
    <componentA06
      :isNumber="post.isNumber"
      :isMulti_="post.isMulti_"
      :mustString="post.mustString"
      :customFunction="post.customFunction"
      :isBoolean="post.isBoolean"
      :isDate="post.isDate"
      :isFunction="post.isFunction"
      :isAuthor="post.isAuthor"
    ></componentA06>
    <!--
      :defaultNumber="post.defaultNumber"
      :defaultObj="post.defaultObj"

      :isSymbol="post.isSymbol"
    -->
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import Vue from 'vue'

// 3.5.1.自定义的构造函数
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Vue.component('componentA06', {
  props: {
    // 2.prop类型检测
    // 2.1.基础类型检测（null为匹配任意类型）
    isNumber: Number,
    // 2.2.多个可能的类型（[String, Number]）
    isMulti_: [String, Number],
    // 2.3.必填的字符串，就是说该prop必须要传递，不然就会发出警告
    mustString: {
      type: String,
      required: true
    },
    // 2.4.带有默认值的数字，就是说哪怕你不传递这个prop，也会被默认设置为 default的值
    defaultNumber: {
      type: Number,
      default: 100
    },
    // 2.5.带有默认值的对象，就是说哪怕你不传递这个prop，也会被默认设置为 default的值
    defaultObj: {
      type: Object,
      // 对象或数组，一定会从工厂函数中返回默认值，就是说默认值为一个 function
      default: function () {
        return {
          message: 'hello'
        }
      }
    },
    // 2.6.自定义验证函数，自定规则，满足条件则即可，必须定义validator函数，不然验证不起作用
    customFunction: {
      validator: function (value) {
        // 传递过来的值会在通过这里进行验证
        console.log(value)
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    },
    // 3.数据类型验证效果
    // 3.1.布尔值验证
    isBoolean: Boolean,
    // 3.2.日期验证，只能传递过来 new Date()的值
    isDate: Date,
    // 3.3.函数验证
    isFunction: Function,
    // 3.4.符号验证
    // isSymbol: Symbol
    // 3.5.自定义构造函数，用来验证是否是通过new Person创建出来的
    isAuthor: Person
  },
  template: `<div>
    <p>基础类型检测2.1 {{isNumber}}</p>
    <br>
    <p>多个类型检测2.2 {{isMulti_}}</p>
    <br>
    <p>必填的字符串2.3 {{mustString}}</p>
    <br>
    <p>带有默认值的数字2.4 {{defaultNumber}}</p>
    <br>
    <p v-for="item in defaultObj">带有默认值的对象2.5 {{item}}</p>
    <br>
    <p>自定义验证函数2.6 {{customFunction}}</p>
    <hr>
    <hr>
    <p>boolean验证 {{isBoolean}}</p>
    <br>
    <p>日期验证 {{isDate}}</p>
    <br>
    <p>是否为函数验证 {{isFunction}}</p>
    <br>
    <!--<p>符号验证 {{isSymbol}}</p>-->
    <br>
    <p>自定义构造函数 {{isAuthor}}</p>
  </div>`
})

export default {
  name: 'propValidation',
  data: function () {
    return {
      post: {
        // 错误的实例
        // isNumber: [1, 1, 1],
        isNumber: 1618,
        isMulti_: 'abc',
        mustString: 'string',
        defaultNumber: 11,
        defaultObj: {
          i1: 'a',
          i2: 'b'
        },
        customFunction: 'success',
        isBoolean: false,
        // 只能传递 new Date()，传递其他任何都警告
        isDate: new Date(),
        isFunction: function () {
          const myNum = 2
          return myNum
        },
        // Symbol 类型没有明白是什么意思
        // isSymbol: Symbol(),
        isAuthor: new Person('S', 'ar')
      }
    }
  }
}

/*
* 总结：Prop验证
*   我们给组件内部的prop指定验证要求，如果没有满足，则会在浏览器控制台中发出警告。在开发一个会被别人用到的组件时，尤其有帮助。
*
*   为了定制prop的验证方式，可以通过props的验证需求对象。就是说以前是[]用来接收。现在则用哦{}用来接收数据而进行验证数据
*     - 1、基础的类型验证（null匹配所有类型）见 2.1
*     - 2、多个可能的类型 见 2.2
*     - 3、必传的参数 见 2.3
*     - 4、带有默认值的类型 见 2.4
*     - 5、带有默认值的对象（对象或者数组），需要以函数来返回默认值 见 2.5
*     - 6、自定义验证函数，对象里面必须定义validator函数才可以起到验证作用 见 2.6
*
*   注意：prop会在一个组件 实例创建之前 进行验证，所以实例的属性（如data、computed等）在default或者validator函数中是不可以用的
*
* 总结：类型检测
*   type可以定义为以下类型
*     - String
*     - Number
*     - Boolean 见 3.1
*     - Array
*     - Object
*     - Date 见 3.2
*     - Function 见 3.3
*     - Symbol 见 未知
*   额外的，type还可以是一个自定义的构造函数，并且通过instanceof来进行检测确认。用来验证prop的值是否通过new Xxx创建的。见 3.5
* */
</script>
