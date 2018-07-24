<template>
  <div>
    <p v-if="msg">我是动态赋值过来的 -----{{msg}}-----, -----{{number}}-----； 我是静态赋值过来的-----{{abc}}-----</p>
    <p v-if="links">今天温度为 {{links}} ℃</p>
    <p v-if="postLinks">我的名字化成数字为 {{postLinks}}</p>
    <p v-if="isPulished">{{isPulished}}</p>
    <p v-if="commentIds">{{commentIds}}</p>
    <p v-if="author">{{author}}</p>
    <p v-if="obj">虽然没有名字，但是在prop数组里面还是得接收他们 -> ---{{i1}}---, ---{{i2}}---</p>
    <p>----- 我是分割线，调用即显示（无状态下的） -----</p>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
  name: 'componentA04',
  props: ['msg', 'number', 'abc', 'links', 'postLinks', 'isPulished', 'commentIds', 'author', 'obj', 'i1', 'i2']
}
</script>
