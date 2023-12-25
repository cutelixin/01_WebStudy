// 声明一个变量a，同时指定它的类型位number
var a;
// a的类型设置为了number，在以后的使用中a的值只能为数字
a = 10;
a = 44;
var b;
b = 'hello';
// 声明变量直接进行赋值
// let c : boolean = false
// 如果变量声明和赋值是同时进行的，TS可以自动对变量进行类型检测
var c = true;
function sum(a, b) {
    return a + b;
}
sum(123, 456);
