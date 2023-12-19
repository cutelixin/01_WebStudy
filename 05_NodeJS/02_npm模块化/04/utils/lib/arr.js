/**
 * 目标：封装数组常用的方法
 */
// 数组求和函数
const getArraySum = arr => arr.reduce((prev,item)=> prev += item ,0)

module.exports = {
  getArraySum
}