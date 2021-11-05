/*
 * @Description: 广度优先搜索
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-09-23 16:02:31
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-09-23 16:10:49
 */
const tree1 = {
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
/**
 * 1、维护一个队列 queue 并把根节点推入队列中
 * 2、遍历队列直到队列为空
 * 3、每次访问列头 并出队列 将队列头下的children推入队列中
 */
const bfs = root => {
  const queue = [root]
  while (queue.length) {
    const head = queue.shift()
    console.log(head.value)
    head.children.forEach(item => {
      queue.push(item)
    })
  }
}

bfs(tree1)
