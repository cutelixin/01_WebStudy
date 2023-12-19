/**
 * 目标：在 Node.js 环境的代码中，应使用绝对路径
 * 原因：代码的相对路径是以终端所在文件夹为起点，而不是 Vscode 资源管理器
 *  容易造成目标文件找不到的错误
 */


const fs = require('fs')
const path = require('path')
console.log('path',__dirname) 

fs.readFile(path.join(__dirname , '../test.txt'),(err,data)=>{
    if(err) console.log(err)
    else console.log(data.toString())
})