/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-09-18 17:23:10
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-09-18 17:36:23
 */
const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const e = { val: 'e' }
const f = { val: 'f' }
const g = { val: 'g' }

const linkedList = { val: '链表开头' }
linkedList.next = a
a.next = b
b.next = c
c.next = e
e.next = f
f.next = g
g.next = b

// function mapLinkedList(linkedList) {
//   // 遍历链表
//   let p = linkedList
//   while (p) {
//     console.log(p.val)
//     p = p.next
//   }
// }
// mapLinkedList(linkedList)

var hasCycle = function (head) {
  let fast = head // 快指针
  let slow = head // 慢指针
  let i = 0
  let flag = false
  let end = 0
  while (fast) {
    // 如果快指针跑完都没有和慢指针相遇 就没有闭环
    if (!fast.next) {
      return false
    }
    fast = fast.next.next
    slow = slow.next
    if (flag) {
      i++
    }
    if (fast === slow) {
      end++
      console.log(slow)
      flag = true
      if (end === 2) {
        console.log(i)
        return true
      }
      // return true
    }
  }
}
hasCycle(linkedList)
