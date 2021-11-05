/*
 * @Description: 后序遍历
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-09-23 18:04:34
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-09-24 17:28:43
 */
const bt = require('./bt')

// const postOrder = root => {
//   if (!root) {
//     return
//   }
//   postOrder(root.left)
//   postOrder(root.right)
//   console.log(root.value)
// }
// postOrder(bt)
const postOrder = root => {
  if (!root) {
    return
  }
  const stack = [root]
  const outputStack = []
  while (stack.length) {
    const n = stack.pop()
    outputStack.push(n)
    if (n.left) {
      stack.push(n.left)
    }
    if (n.right) {
      stack.push(n.right)
    }
  }
  while (outputStack.length) {
    const n = outputStack.pop()
    console.log(n.value)
  }
}
postOrder(bt)
