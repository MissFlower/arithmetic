/*
 * @Description: 深度优先遍历
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-09-23 15:59:01
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-09-23 16:01:50
 */
const tree = {
  value: 'a',
  children: [
    {
      value: 'b',
      children: [
        {
          value: 'd',
          children: []
        },
        {
          value: 'e',
          children: []
        }
      ]
    },
    {
      value: 'c',
      children: [
        {
          value: 'f',
          children: []
        },
        {
          value: 'g',
          children: []
        }
      ]
    }
  ]
}

const dfs = root => {
  console.log(root.value)
  root.children.forEach(dfs)
}
dfs(tree)
