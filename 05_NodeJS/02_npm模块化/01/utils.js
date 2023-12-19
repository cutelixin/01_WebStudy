/**
 * 目标：基于 CommonJS 标准语法，封装属性和方法并导出
 */

const baseURL = 'http://hmajajx.itheima.net'
const getArraySum = arr => arr.reduce((sum,val)=> sum += val , 0)

module.exports = {
    url: baseURL,
    arraySum: getArraySum
}