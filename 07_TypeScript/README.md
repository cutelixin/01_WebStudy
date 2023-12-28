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

## 基本数据类型

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

## 编译选项

### 自动编译文件

  - 编译文件时，使用 `tsc xxx.ts -w` 指令后，TS编译器会自动监视文件的变化，并在文件变化后对文件进行重新编译

### 自动编译整个项目

  - 在根目录下使用 `tsc --init`指令后，TS编译器会自动生成 `tsconfig.json` 文件

  - `tsconfig.json` 是ts编译器的配置文件，ts编译器可以根据它的信息对代码进行编译

  - 编译文件时，直接使用 `tsc` 指令，则可以自动将当前项目下的所有ts文件编译为js文件。

### `tsconfig.json` 文件的配置项

  - include

    - 用来指定哪些ts文件需要被编译

    - 默认值：["\*\*/\*"]

    - 路径：** 表示任意目录
        * 表示任意文件

    - 示例：

    ```json
      // src 下的任意目录下的任意文件都会编译
      "include": ["./src/**/*"],
    ```

  - exclude

    - 用来指定哪些ts文件不需要被编译（可选）

    - 默认值：["node_modules", "bower_components", "jspm_packages"]

    - 示例：

    ```json
      "exclude": ["./src/hello/**/*"]
    ```

  - extends

    - 定义被继承的配置文件

    - 示例：

      ```json
        "extends": "./configs/base"
      ```

    - 上述示例中，当前配置文件中会自动包含config目录下base.json中的所有配置信息

  - files 
  
    - 指定被编译文件的列表，只有需要编译的文件少时才会用到（类似于 include）

    - 示例：

    ```json
      "files": [
          "core.ts",
          "sys.ts",
          "types.ts",
          "scanner.ts",
          "parser.ts",
          "utilities.ts",
          "binder.ts",
          "checker.ts",
          "tsc.ts"
        ]
      ```

  - compilerOptions

    - 编译器选项 是配置文件中非常重要也比较复杂的配置选项

    - 在compilerOptions中包含多个子选项，用来完成对编译的配置

    - 项目选项

      - target

        - 指定ts文件被编译为的ES版本

        - 可选值：'es3'（默认）, 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'es2022', 'esnext'.

        - 示例:

        ```json
          "compilerOptions": {
              "target": "ES6"
          }
        ```
      
      - module

        - 指定要使用的模块化规范

        - 可选值：'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'es2022', 'esnext', 'node16', 'nodenext'.

        - 示例：

        ```json
          "compilerOptions": {
            "module": "CommonJS"
          }
        ```

      - lib

        - 用来指定项目中要使用的库

        - 可选值：'es5', 'es6', 'es2015', 'es7', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'es2022', 'es2023', 'esnext', 'dom', 'dom.iterable', 'webworker', 'webworker.importscripts', 'webworker.iterable', 'scripthost'...

        - 示例：

          ```json
            "compilerOptions": {
                "lib": ["ES6", "DOM"],
            }
          ```
      - outDir

        - 用来指定编译后所在的目录

        - 默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置

        - 示例：

          ```json
            "compilerOptions": {
                "outDir": "dist"
            }
          ```

        - 设置后编译后的js文件将会生成到dist目录

      - outFile

        - 用来将代码合并为一个文件

        - 设置 outFile 后，所有的全局作用域中的代码都会合并到同一个文件中，如果module制定了None、System或AMD则会将模块一起合并到文件之中

        - 示例：

        ```json
          "compilerOptions": {
              "outFile": "dist/app.js"
          }
        ```

      - rootDir

        - 指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录

        - 示例：

          ```json
            "compilerOptions": {
                "rootDir": "./src"
            }
          ```

      - allowJS

        - 是否对 js 文件进行编译，默认是false

      - checkJs

        - 是否检查 js 代码是否符合语法规范，默认是false

        - 示例：

        ```json 
          "compilerOptions": {
              "allowJs": true,
              "checkJs": true
          }
        ```

      - removeComments

        - 是否移除注释，默认是false

      - noEmit

        - 是否不生成编译后的文件（用的地方不多），默认是false

      - sourceMap

        - 是否生成sourceMap，默认是false

      - 严格检查

        - strict
          - 所有严格检查的总开关，默认值为true
        - alwaysStrict
          - 总是以严格模式对代码进行编译
        - noImplicitAny
          - 禁止隐式的any类型
        - noImplicitThis
          - 禁止类型不明确的this
        - strictBindCallApply
          - 严格检查bind、call和apply的参数列表
        - strictFunctionTypes
          - 严格检查函数的类型
        - strictNullChecks
          - 严格的空值检查
        - strictPropertyInitialization
          - 严格检查属性是否初始化

      - 额外检查

        - noFallthroughCasesInSwitch
          - 检查switch语句包含正确的break
        - noImplicitReturns
          - 检查函数没有隐式的返回值
        - noUnusedLocals
          - 检查未使用的局部变量
        - noUnusedParameters
          - 检查未使用的参数

      - 高级

        - allowUnreachableCode
          - 检查不可达代码
          - 可选值：
            - true，忽略不可达代码
            - false，不可达代码将引起错误
        - noEmitOnError
          - 有错误的情况下不进行编译
          - 默认值：false











