<template>
  <div>
    <!-- 1.在命名上面有两种，camelCase和kebab-case，不管怎么样，只要他们都用一样的就肯定不报错 -->
    <!-- 1.1. blog-post :post-title -->
    <blog-post :post-title="postTitle"></blog-post>
    <!-- 2.以数组形式列出的prop -->
    <prop-obj
      v-bind:title="title"
      v-bind:likes="likes"
      v-bind:isPublished="isPublished"
      v-bind:commentIds="commentIds"
      v-bind:author="author"
      v-bind:myData="myData"
    ></prop-obj>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import Vue from 'vue'
// 1.3.在接收当中，props中的也可以用两种方式命名（camelCase || kebab-case）
// blog-post post-title
Vue.component('blog-post', {
//  props: ['post-title'],
  props: ['post-title'],
  template: '<div>{{postTitle}}</div>'
})

Vue.component('prop-obj', {
  // 2.1.以 字符串数组 形式接收数据，列出prop
  // props: ['title', 'likes', 'isPublished', 'commentIds', 'author'],
  // 2.2.以 对象形式，指定出prop接收的值类型。这些属性分别是prop各自的名称和类型
  props: {
    title: String,
    // 只能写一个，不能写多个 如 Number | String
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    // 2.3.传递过来的数据先检测，匹配不上会警告，当不影响数据渲染
    myData: Number
  },
  template: `<div>
              <ul>
                <li>{{title}}</li>
                <li>{{likes}}</li>
                <li>{{isPublished}}</li>
                <li>{{commentIds}}</li>
                <li>{{author}}</li>
                <li>{{myData}}</li>
              </ul>
            </div>`
})
export default {
  name: 'propCasing_camelcaseVsKebab-case',
  data: function () {
    return {
      // 1.0.的初始值
      postTitle: '标题就是你了',
      // 2.0.的初始值
      title: 'abc', // string
      likes: 3, // Number
      isPublished: true, // Boolen
      commentIds: [1, 2, 3, 4], // Array
      author: {x: 'abc', y: '123', z: 'lli'}, // Object
      // 2.2.0.测试过滤数据警告，但不影响渲染
      myData: 'Sar'
    }
  }
}
/*
* 总结：Prop
*   Prop是用来向子组件传递信息的
*
* 总结：Prop的大小写（camelCase vs kebab-case）
*   在HTML中的特性名时大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。也就是说我们使用时，大小写基本不会影响我们。
*   但我们最好是一一对应，见 1
*
* 总结：Prop类型
*   第一种：字符串数组形式 -> ['likes', 'author', '...'] ,见 2.1
*   第二种：对象形式 -> {likes: String, author: Object, ...} , 见 2.2
*
*   当为对象形式的时候，prop接收的各自的名称和过来的值类型。如果不匹配就会报错，但不影响渲染，见 2.3
*   Invalid prop: type check failed for prop "myData". Expected Number, got String.
* */
</script>
