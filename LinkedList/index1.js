/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-09-18 10:24:18
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-09-18 10:37:44
 */
const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const d = { val: 'd' }

function mapLinkedList(linkedList) {
  // 遍历链表
  let p = linkedList
  while (p) {
    console.log(p.val)
    p = p.next
  }
}

// 创建链表
const linkedList = { val: '链表开头' }
linkedList.next = a
a.next = b
b.next = c
c.next = d

// 遍历链表
mapLinkedList(linkedList)

// 增加元素 c d中添加e
const e = { val: 'e' }
c.next = e
e.next = d

// 遍历链表
mapLinkedList(linkedList)

// 删除元素 a c中删除b
a.next = c

// 遍历链表
mapLinkedList(linkedList)
