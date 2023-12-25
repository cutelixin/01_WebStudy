---
title: TypeScript
date: 2023-12-21 
---

> 以下是观看尚硅谷TS课程所做的笔记。
>
> [尚硅谷TS](https://www.bilibili.com/video/BV1Xy4y1v7S2/?spm_id_from=333.337.search-card.all.click)

# TypeScript 入门

## 开发环境搭建

npm i -g typescript

## 初步使用ts

1.  创建ts文件 (a1_helloTS.ts)

2.  使用tsc命令对ts文件进行编译

    例：tsc a1_helloTS.ts

# TS的基本数据类型

## 类型声明

```js
// 声明一个变量a，同时指定它的类型位number
let a : number;

// a的类型设置为了number，在以后的使用中a的值只能为数字
a = 10;
a = 44;

function sum(a:number,b:number):number{
    return a + b
}
```
## 自动类型判断

1.  TS拥有自动的类型判断机制

2.  当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型

```js
// 声明变量直接进行赋值
// let c : boolean = false

// 如果变量声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c = true
```

## 类型

  |  类型   |       例子        |              描述              |
  | :-----: | :---------------: | :----------------------------: |
  | number  |    1, -33, 2.5    |            任意数字            |
  | string  | 'hi', "hi", `hi`  |           任意字符串           |
  | boolean |    true、false    |       布尔值true或false        |
  | 字面量  |      其本身       |  限制变量的值就是该字面量的值  |
  |   any   |         *         |            任意类型            |
  | unknown |         *         |         类型安全的any          |
  |  void   | 空值（undefined） |     没有值（或undefined）      |
  |  never  |      没有值       |          不能是任何值          |
  | object  |  {name:'孙悟空'}  |          任意的JS对象          |
  |  array  |      [1,2,3]      |           任意JS数组           |
  |  tuple  |       [4,5]       | 元素，TS新增类型，固定长度数组 |
  |  enum   |    enum{A, B}     |       枚举，TS中新增类型       |

### number

```ts
  let a : number;
  a = 10;
  let b : number = 6;
  let c : number = 0xf00d
```

### string

```ts
  let b : string;
  b = 'hello'
  let b : string = 'hello';
```

### boolean
```ts
  let c : boolean = false
```

### 字面量
- 可以通过字面量去指定变量的类型，通过字面量决定取值的范围
```ts
  // 可以使用 | 来连接多个类型（联合类型）
  let  b : 'male' | 'female';
  let c : boolean | string;

  // & 表示同时
  let j : {name:string} & {age:number};
  j = {name:'lily',age:19}

  // 类型别名 (统一名字，降低耦合)
  type myType = 1 | 2 | 3 | 4 | 5;
  let k : myType;
  let l : myType;
  let m : myType;
```

### any

- `any` 表示任意类型，一个变量设置类型为`any`后相当于对该变量关闭了TS的类型检测
- 使用TS时，不建议使用`any`类型
- 声明变量不指定类型，则TS解析器会自动判断变量类型为`any`（隐式`any`）

```ts 
  let d : any;
  let d;
  d = true;
  d = 123
  d = '123'
```

### unknown

- `unknown` 表示未知类型的值

```ts
  let e : unknown;
  e = 10;
  e = true;
```

> any 和 unknown 的区别
>- unknown 实际上是一个安全的any
>- unknown 类型的变量，不能直接赋值给其他变量

```ts
  let d : any;
  d = '123'
  let s : string;
  // d 的类型是any，它可以赋给任意变量值
  s = d;

  let e : unknown;
  e = 'hello'
  // unknown 类型的变量，不能直接赋值给其他变量
  if(typeof e === 'string'){
      s = e;
  }
```

> 类型断言，可以用来告诉解析器变量的实际类型
>- 语法
>- 变量 as 类型
>- <类型>变量

```ts
  s = e as string;
  s = <string>e
```

### void

- `void` 用来表示空，以函数为例，就表示没有返回值的函数

```ts
  function fn() : void {
      return ;
  }
```

### never

- `never` 表示永远不会返回结果（少见）

```ts
  function fn2() : never {
      throw new Error('oops')
  }
```

### object

- `object` 表示一个js对象

```ts
  let a : object ;
  a = {};
  a = function(){};
```

> { } 用来指定对象中可以包含哪些属性
>
>- 语法：{ 属性名 : 属性值 , 属性名 : 属性值}
>- 在属性名后加 ? ，表示可选属性
>- `[propName:string]:any` 表示任意类型的属性

```ts
  let b : {name:string,age?:number}
  b = {name : 'lily'}

  let c : {name : string,[propName:string] : any};
  c = {name: 'lily', age: 28}
```

>设置函数结构的类型声明：
>- 语法：(形参:类型，形参:类型...)=> 返回值

```ts
  let d : (a:number,b:number)=>number;
  d = function (a,b):number{
      return a + b
  }
```

### array

数组的类型声明：
- 类型[ ]
- Array<类型>

```ts
  // string[] 表示字符串数组
  let e : string[]
  e = ['1','2']

  // number[] 表示数值数组
  let f:number[]
  f = [1,2,3]

  // Array<number> 表示数值数组
  let g : Array<number>
  g = [1,23]
```

### tuple(元组)

- 元组：元组就是固定长度的数组
- 语法：[类型, 类型, 类型]

```ts
  let h : [string,string]
  h = ['12','12']
```

### enum(枚举)

```ts
  enum Gender{
      Male,
      Female
  }

  let i : {name: string,gender: Gender}
  i = {
      name:'lily',
      gender:Gender.Male
  }
```













