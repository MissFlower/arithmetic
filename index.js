/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-09-17 14:59:57
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-09-24 17:37:29
 */
// function fn1() {
//   fn2()
// }

// function fn2() {
//   fn3()
// }

// function fn3() {}

// fn1()c

const combinationSum = function (candidates, target) {
  let res = []
  let ans = []
  let minLengthRes = []
  //先排序
  candidates = candidates.sort((a, b) => a - b)
  dfsFn(target, candidates, res, ans, 0, minLengthRes)
  return {
    ans,
    res: minLengthRes.length ? minLengthRes : ''
  }
}

const dfsFn = function (target, candidates, res, ans, index, minLengthRes) {
  if (target == 0) {
    const tmp = res.slice()
    ans.push(tmp)
    if (!minLengthRes.length || minLengthRes.length > tmp.length) {
      minLengthRes.length = 0
      minLengthRes.push(...tmp)
    }
    return
  }
  if (target < 0) {
    return
  }
  for (let i = index; i < candidates.length; i++) {
    if (target - candidates[i] >= 0) {
      res.push(candidates[i])
      dfsFn(target - candidates[i], candidates, res, ans, i, minLengthRes)
      res.pop()
    } else {
      //排完顺序过后的数组target - candidates[i] >= 0后面的candidates[i]就不用考虑了
      break
    }
  }
}
// 【20， 9】 47
const discount = [50, 13]
const { ans, res } = combinationSum(discount, 65)
ans.forEach(item => console.log(item))
console.log(`最优：${res}`)
// console.log(screenMinDiscount(discount, 80))
