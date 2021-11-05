/*
 * @Description: 先序遍历
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-09-23 17:48:41
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-09-23 18:15:21
 */
const bt = require('./bt')

// 递归版先序遍历
// const btOrder = root => {
//   if (!root) {
//     return
//   }

//   console.log(root.value)
//   btOrder(root.left)
//   btOrder(root.right)
// }
// 非递归版的先序遍历 使用栈模拟
const btOrder = root => {
  if (!root) {
    return
  }
  const stack = [root]
  while (stack.length) {
    const top = stack.pop()
    console.log(top.value)
    if (top.right) {
      stack.push(top.right)
    }
    if (top.left) {
      stack.push(top.left)
    }
  }
}

btOrder(bt)
