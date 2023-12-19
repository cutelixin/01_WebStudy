/**
 * 目标：基于 fs 模块读写文件内容
 *  1. 加载 fs 模块对象
 *  2. 写入文件内容
 *  3. 读取文件内容
 */

const fs = require('fs')
fs.writeFile('./test.txt','hello ,node.js',err =>{
    if(err) console.log(err)
    else console.log('succ')
})

fs.readFile('./test.txt',(err,data) => {
    if(err) console.log(err)
    // data 是 buffer 16 进制数据流对象
    // .toString() 转换成字符串
    else console.log(data.toString())
})
