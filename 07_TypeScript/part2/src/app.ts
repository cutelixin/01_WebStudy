import {h1} from './m.js'

console.log(11)
let a : number = 3

console.log(h1)
// 这是一个注释

function fn(a:number,b:number){
    return a + b
}

function fn2(this:any){
    alert(this)
}

let box1 = document.getElementById('box')
box1.addEventListener('click',()=>{
    console.log(1)
})