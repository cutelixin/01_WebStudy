// 也可以直接使用字面量进行类型声明
let a : 10;

// 可以使用 | 来连接多个类型（联合类型）
let  b : 'male' | 'female';

b = 'male';
b = 'female'

let c : boolean | string;
c = true;
c = 'happy'

// any 表示任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let d : any;

// 声明变量不指定类型，则TS解析器会自动判断变量类型为any（隐式any）
let d;
d = true;
d = 123
d = '123'

// unknown 表示未知类型的值
let e : unknown;
e = 10;
e = true;

let s : string;
// d 的类型是any，它可以赋给任意变量值
s = d;

e = 'hello';
// unknown 实际上是一个安全的any
// unknown 类型的变量，不能直接赋值给其他变量
if(typeof e === 'string'){
    s = e;
}

// 类型断言 ，可以用来告诉解析器变量的实际类型
/* 
    * 语法：
    * 变量 as 类型;
    * <类型>变量
*/
s = e as string;
s = <string>e

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn() : void {
    return ;
}

// never 表示永远不会返回结果
function fn2() : never {
    throw new Error('oops')
}

