/**
 * 目标：基于 ECMAScript 标准语法，"默认"导入，工具属性和方法使用
 */
// 默认导入

import obj from './utils.js'

console.log(obj.url)

const res = obj.arraySum([0,2,5,6])

console.log(res)