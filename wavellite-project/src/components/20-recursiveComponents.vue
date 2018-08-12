<template>
  <div>
    <treeComponent :folder="trees"></treeComponent>
  </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import treeComponent from './componentNumber/20/tree'

export default {
  name: 'recursiveComponents',
  components: {
    treeComponent
  },
  data: function () {
    return {
      trees: [
        {
          id: 1,
          label: '1级目录1',
          show: false,
          children: [
            {
              id: '1-1',
              label: '1.1目录'
            },
            {
              id: '1-2',
              label: '1.2目录'
            },
            {
              id: '1-3',
              label: '1.3目录'
            }
          ]
        },
        {
          id: 2,
          label: '1级目录2',
          show: false
        },
        {
          id: 3,
          label: '1级目录3',
          show: false,
          children: [
            {
              id: '3-1',
              label: '3.1目录'
            },
            {
              id: '3-2',
              label: '3.2目录',
              show: false,
              children: [
                {
                  id: '3-2-1',
                  label: '3.2.1目录'
                },
                {
                  id: '3-2-2',
                  label: '3.2.2目录'
                },
                {
                  id: '3-2-3',
                  label: '3.2.3目录'
                }
              ]
            }
          ]
        },
        {
          id: 4,
          label: '1级目录4',
          show: false,
          children: [
            {
              id: '4-1',
              label: '4.1目录'
            },
            {
              id: '4-2',
              label: '4.2目录',
              show: false,
              children: [
                {
                  id: '4-2-1',
                  label: '4.2.1目录'
                }
              ]
            }
          ]
        },
        {
          id: 5,
          label: '1级目录5',
          show: false,
          children: [
            {
              id: '5-1',
              label: '5.1目录',
              show: false,
              children: [
                {
                  id: '5-1-1',
                  label: '5.1.1目录'
                },
                {
                  id: '5-1-2',
                  label: '5.1.2目录',
                  show: false,
                  children: [
                    {
                      id: '5-1-2-1',
                      label: '5.1.2.1目录'
                    }
                  ]
                }
              ]
            },
            {
              id: '5-2',
              label: '5.2目录',
              show: false
            }
          ]
        }
      ]
    }
  }
}

/*
* 总结：递归组件
*   使用场景：树结构组件
*     - 通过 组件的 name 进行自调用，且必须是 name 才可以。全局组件自动把组件名设定为 name。见 tree组件中的 1
*     - 类似上述的组件将可能导致 'max stack size exceeded'（超出了栈的最大空间） 错误；
*     - 所以我们得保证自调用时（递归调用是条件性的），组件上能确保最后能得到一个 false 的 v-if，见 tree组件中 3
* */
</script>
