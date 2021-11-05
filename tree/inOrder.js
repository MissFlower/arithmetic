/*
 * @Description: 中序遍历
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-09-23 17:59:07
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-09-24 17:17:42
 */
const bt = require('./bt')

// const inOrder = root => {
//   if (!root) {
//     return
//   }
//   inOrder(root.left)
//   console.log(root.value)
//   inOrder(root.right)
// }
// inOrder(bt)
const inOrder = root => {
  if (!root) {
    return
  }
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }

    const n = stack.pop()
    console.log(n.value)

    p = n.right
  }
}
inOrder(bt)
