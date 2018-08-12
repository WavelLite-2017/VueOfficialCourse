<template>
  <div class="fatherBox">
    <ul class="left">
      <li v-for="(item, index) in sonTab" :key="index" @click="comCenterBtn(index)" :class="{bgColor: index==numIndex}">{{item}}</li>
    </ul>
    <!-- 2.通过v-if来判断是否显示某个组件 -->
    <comPageComponent class="right" v-if="0 == numIndex">
      <p>人生三为，和为贵，善为本，诚为先。一个人的品行，决定着他的福报，所以越想接近幸福，就越要懂得诚信和善良，待人和善谦逊。</p>
      <p>一辈子走走停停，你要过得了鲜衣努马，也能经得住花落尘香，能走好平湖秋月，也能走得了山川风雨，经得起尘世冷暖，也能看淡生命荣枯。</p>
      <p>可总会有幸福为你等待，总有温暖为你停留，总有一个人跋山深水为你而来，总有一处风景因你而美丽，你要做的就是照顾好自己。</p>
    </comPageComponent>

    <comPageComponent class="right" v-if="1 == numIndex">
      <p>我永远不够好，也不完美，可这又有什么关系呢 ，我哭是因为我真实，我笑是因为我乐观，我面对是因为我坚强，我努力是因为想拥有一个更好的自己。</p>
    </comPageComponent>

    <comPageComponent class="right" v-if="2 == numIndex">
      <p>将感恩植一株菩提，种在心中，对生活怀有一定的温度，心态阳光，积极向上，命运总是偏袒那些热爱它的人。</p>
      <p>无论脚下的路有多寂寥，都要做好自己，无论世界是否与你深情，你都要心存善念，保持对生活的珍重，岁月也定会与你温柔相待。</p>
    </comPageComponent>
  </div>
</template>

<style scoped>
  .fatherBox {
    display: flex;
  }
  .left {
    flex-grow: 1;
    border-right: 1px solid #000;
  }
  .left li {
    height: 24px;
    border-bottom: 1px solid #000;
  }
  .right {
    flex-grow: 2;
    width: 70%;
    padding-left: 20px;
  }
  .bgColor {
    background: #b70000;
    color: #fff;
  }
</style>

<script type="text/ecmascript-6">
import comPageComponent from './comPageComponent'

export default {
//  name: 'btnCenter',
  data: function () {
    return {
      sonTab: ['上栏目', '中内容', '下底部'],
      numIndex: 0
    }
  },
  components: {
    comPageComponent
  },
  methods: {
    comCenterBtn: function (i) {
      this.numIndex = i
    }
  }
}
</script>
