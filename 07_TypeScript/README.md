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

# 编译选项

## 自动编译文件

  - 编译文件时，使用 `tsc xxx.ts -w` 指令后，TS编译器会自动监视文件的变化，并在文件变化后对文件进行重新编译

## 自动编译整个项目

  - 在根目录下使用 `tsc --init`指令后，TS编译器会自动生成 `tsconfig.json` 文件

  - `tsconfig.json` 是ts编译器的配置文件，ts编译器可以根据它的信息对代码进行编译

  - 编译文件时，直接使用 `tsc` 指令，则可以自动将当前项目下的所有ts文件编译为js文件。

## `tsconfig.json` 文件的配置项

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


# 使用webpack打包ts代码

## 使用步骤

  1.初始化项目

  - 进入根目录文件，使用指令 `npm init -y`，创建package.json文件

  2.下载构建工具

  - ```npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin```

  - 共安装了7个包
      - webpack
        - 构建工具webpack
      - webpack-cli
        - webpack的命令行工具
      - webpack-dev-server
        - webpack的开发服务器
      - typescript
        - ts编译器
      - ts-loader
        - ts加载器，用于在webpack中编译ts文件
      - html-webpack-plugin
        - webpack中html插件，用来自动创建html文件
      - clean-webpack-plugin
        - webpack中的清除插件，每次构建都会先清除目录

  3.根目录下创建webpack的配置文件 webpack.config.js

  ```javascript
      const path = require("path");
      const HtmlWebpackPlugin = require("html-webpack-plugin");
      const { CleanWebpackPlugin } = require("clean-webpack-plugin");
      
      module.exports = {
          optimization:{
              minimize: false // 关闭代码压缩，可选
          },
          // 指定入口文件
          entry: "./src/index.ts",
          // 控制是否生成，以及如何生成 source ma
          devtool: "inline-source-map",
          // webpack-dev-server 提供了一个基本的 web serve
          // 告诉 dev server 应从什么位置开始查找文件
          devServer: {
              contentBase: './dist'
          },
          // 指定打包文件所在的目录
          output: {
              // 指定打包文件的目录
              path: path.resolve(__dirname, "dist"),
              // 指定打包文件的名字
              filename: "bundle.js",
              // 告诉webpack不要使用箭头函数（低版本浏览器配置）
              environment: {
                  arrowFunction: false // 关闭webpack的箭头函数，可选
              }
          },
           // 用来设置引用模块
          resolve: {
              extensions: [".ts", ".js"]
          },
          // 指定webpack打包时要使用的模块
          module: {
              // 指定加载规则
              rules: [
                  {
                      // test 指定规则生效的文件
                      test: /\.ts$/,
                      // 要使用的loader
                      use: {
                        loader: "ts-loader"     
                      },
                      // 要排除的文件
                      exclude: /node_modules/
                  }
              ]
          },
      
          // 配置webpack插件
          plugins: [
              // 清除缓存的打包文件
              new CleanWebpackPlugin(),
              // 自动生成html文件配置
              new HtmlWebpackPlugin({
                  title:'自定义title',
                  // 定义以某个文件为html文件模板
                  template:'./src/index.html'
              }),
          ]
      
      }
  ```

  4.根目录下创建tsconfig.json，指令 `tsc --init`，根据需要修改配置。

  ```json
      {
          "compilerOptions": {
              "target": "ES2015",
              "module": "ES2015",
              "strict": true
          }
      }
  ```

  5.修改package.json添加如下配置

  ```json
      {
        ...略...
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "build": "webpack --mode=production",
          "start": "webpack server --open --mode=development"
        },
        ...略...
      }
  ```

  6.在src下创建ts文件，并在并命令行执行```npm run build```对代码进行编译，或者执行```npm start```来启动开发服务器


## Babel

- 结合babel对代码进行转换，兼容到更多的浏览器，根据以下步骤使用babel

  1.安装依赖包

    - ```npm i -D @babel/core @babel/preset-env babel-loader core-js```

    - 共安装了4个包，分别是：
      - @babel/core
        - babel的核心工具
      - @babel/preset-env
        - babel的预定义环境
      - @babel-loader
        - babel在webpack中的加载器
      - core-js
        - core-js用来使老版本的浏览器支持新版ES语法

  2. 修改webpack.config.js配置文件

     - ```javascript
       ...略...
       // 指定webpack打包时要使用的模块
       module: {
           // 指定加载规则
           rules: [
               {
                   // test 指定规则生效的文件
                   test: /\.ts$/,
                   // 要使用的loader
                   use: [
                        // 配置babel
                       {
                           // 指定加载器
                           loader: "babel-loader",
                           options:{
                               // 设置预定义环境
                               presets: [
                                   [
                                      // 指定环境插件
                                       "@babel/preset-env",
                                       // 配置信息
                                       {
                                           // targets 需要兼容到的浏览器
                                           "targets":{
                                               "chrome": "58",
                                               "ie": "11"
                                           },
                                           "corejs":"3",
                                           // 使用corejs的方式 "usage" 表示按需加载
                                           "useBuiltIns": "usage"
                                       }
                                   ]
                               ]
                           }
                       },
                       {
                           loader: "ts-loader",
       
                       }
                   ],
                   exclude: /node_modules/
               }
           ]
       }
       ...略...
       ```

     - 如此一来，使用ts编译后的文件将会再次被babel处理，使得代码可以在大部分浏览器中直接使用，可以在配置选项的targets中指定要兼容的浏览器版本。

# 面向对象

一个事物到了程序中就变成了一个对象。在程序中所有的对象都被分成了两个部分数据和功能，以人为例，人的姓名、性别、年龄、身高、体重等属于数据，人可以说话、走路、吃饭、睡觉这些属于人的功能。数据在对象中被成为属性，而功能就被称为方法。

## 1.类

创建对象，必须要先定义类，所谓的类可以理解为对象的模型，程序中可以根据类创建指定类型的对象，举例来说：可以通过Person类来创建人的对象

- 定义类：

```typescript
    class 类名 {
    	属性名: 类型;
    	
    	constructor(参数: 类型){
    		this.属性名 = 参数;
    	}
    	
    	方法名(){
    		....
    	}
    
    }
```

- 示例：
```typescript
    class Person {
    	name:string;
      age:number;
    	
    	constructor(name: string,age:number){
    		this.name = name;
    		this.age = age;
    	}
    	
    	sayHi(){
    		alert('hi')
    	}
    }
```
- 使用类：

```typescript
  const per = new Person('lily', 18);
  per.sayHi();
```

## 2.面向对象的特点

- 封装

  - 对象实质上就是属性和方法的容器，它的主要作用就是存储属性和方法，这就是所谓的封装。

  - 默认情况下，对象的属性是可以任意修改的，为了确保数据的安全，在TS中可以对属性权限进行设置

  - readonly（只读属性）

    - 如果在声明属性时添加一个 readonly ，则属性为只读属性无法修改

  - TS中具有三种修饰符：

    - public（默认值），可以在类、子类和对象中修改
    - protected，，可以在类、子类中修改
    - private，可以在类中修改

  - 示例：

    - public

      - ```typescript
        class Person{
            public name: string; // 写或什么都不写都是public
            public age: number;
        
            constructor(name: string, age: number){
                this.name = name; // 可以在类中修改
                this.age = age;
            }
        
            sayHello(){
                console.log(`大家好，我是${this.name}`);
            }
        }
        
        class Employee extends Person{
            constructor(name: string, age: number){
                super(name, age);
                this.name = name; //子类中可以修改
            }
        }
        
        const p = new Person('孙悟空', 18);
        p.name = '猪八戒';// 可以通过对象修改
        ```

    - protected

      - ```typescript
        class Person{
            protected name: string;
            protected age: number;
        
            constructor(name: string, age: number){
                this.name = name; // 可以修改
                this.age = age;
            }
        
            sayHello(){
                console.log(`大家好，我是${this.name}`);
            }
        }
        
        class Employee extends Person{
        
            constructor(name: string, age: number){
                super(name, age);
                this.name = name; //子类中可以修改
            }
        }
        
        const p = new Person('孙悟空', 18);
        p.name = '猪八戒';// 不能修改
        ```

    - private

      - ```typescript
        class Person{
            private name: string;
            private age: number;
        
            constructor(name: string, age: number){
                this.name = name; // 可以修改
                this.age = age;
            }
        
            sayHello(){
                console.log(`大家好，我是${this.name}`);
            }
        }
        
        class Employee extends Person{
        
            constructor(name: string, age: number){
                super(name, age);
                this.name = name; //子类中不能修改
            }
        }
        
        const p = new Person('孙悟空', 18);
        p.name = '猪八戒';// 不能修改
        ```

  - 属性存储器

    - 我们可以在类中定义一组读取、设置属性的方法，这种对属性读取或设置的属性被称为属性的存取器

    - 读取属性的方法叫做setter方法，设置属性的方法叫做getter方法

    - 示例：

      - ```typescript
        class Person{
            private _name: string;
        
            constructor(name: string){
                this._name = name;
            }
        
            get name(){
                return this._name;
            }
        
            set name(name: string){
                this._name = name;
            }
        
        }
        
        const p1 = new Person('孙悟空');
        console.log(p1.name); // 通过getter读取name属性
        p1.name = '猪八戒'; // 通过setter修改name属性
        ```

  - 类的简化版（语法糖）

  ```ts
    class C{
        // 可以将属性定义在构造函数中
        constructor(public name:string,public age:number){}
    }

    const c = new C('xxx',111)
    // console.log(c)
  ```

  - 静态属性

    - 静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用

    - 静态属性（方法）使用static开头

    - 示例：

      ```typescript
        class Person{
          // 只读类属性（静态属性）
          static readonly firstName :string = 'lily'

          // 在属性前使用 static 关键字可以定义类属性（静态属性）
          static age: number = 18

          // 定义方法
          /* 
              如果方法以 static 开头则方法就是类方法，可以直接通过类调用
          */
          static sayHello(){
              console.log('hello')
          }
        }
        
        console.log(Person.age)
        Person.sayHello()
      ```

  - this

    - 在类中，使用this表示当前对象

  - 继承

    - 通过继承可以将其他类（父类）中的属性和方法引入到当前类中

    - 示例

    ```ts
      class Animal{
          name:string;
          age:number;

          constructor(name:string,age:number){
              this.name = name
              this.age = age
          }

          sayHello(){
              console.log(this.name+'say hi')
          }
      }

      /* 
          class Dog extends Animal
              - 此时，Animal被称为父类，Dog被称为子类
              - 使用继承后，子类将会拥有父类所有的方法和属性
              - 通过继承，可以将多个类中共有的代码写在一个父类中
                  这样只需要写一次即可让所有的子类同时拥有父类的属性
                  如果希望在子类中添加一些父类没有的属性或方法直接加就可以
      */

      // 定义一个表示狗Dog的类
      // 使Dog继承Animal类
      class Dog extends Animal{

          constructor(name:string,age:number){
              // 如果子类写了构造函数，子类构造函数必须对父类的构造函数进行调用
              super(name)  // 调用父类构造函数
              this.age = age
          }

          run(){
              console.log(this.name+'run~~')
          }

          //发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写
          sayHello(): void {
              // 这里的super表示当前类的父类
              super.sayHello()
              console.log('汪汪汪')
          }
      }

      const dog = new Dog('旺财',3)

      console.log(dog)

      dog.run()
      dog.sayHello()
    ```

    - 在子类中可以使用super来完成对父类的引用

  - 抽象类 (abstract class)

    - 以 abstract 开头的类是抽象类
      - 抽象和其他类区别不大，只是不能用来创建对象
      - 抽象类就是专门用来被继承的类
      - 抽象类可以添加抽象方法

    - 示例

    ```ts
      abstract class Animal{
          name:string;

          constructor(name:string){
              this.name = name
          }

          /* 
              定义一个抽象方法：
                  - 抽象方法用 abstract 开头，没有方法体
                  - 抽象方法只能定义在抽象类中，子类必须对抽象方法重写
          */
          abstract sayHello():void;
      }

      class Dog extends Animal{
          sayHello(): void {
              console.log('www')
          }
      }


      const dog = new Dog('旺财')
      dog.sayHello()
    ```

## 3.接口

  - 接口的作用类似于抽象类，不同点在于接口中的所有方法和属性都是没有实值的，换句话说接口中的所有方法都是抽象方法。

  - 接口主要负责定义一个类的结构，接口可以去限制一个对象的接口，对象只有包含接口中定义的所有属性和方法时才能匹配接口。同时，可以让一个类去实现接口，实现接口时类中要保护接口中的所有属性。

  - 示例

  ```ts
      // 概括一个对象的类型
      type myType = {
          name:string;
          age:number
      }

      /* 
          接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
            同时接口也可以当成类型声明去使用
      */

      interface myInterface{
          name:string;
          age:number
      }

      interface myInterface{
          gender:string
      }

      const obj:myInterface = {
          name:'sss',
          age:11,
          gender:'男'
      }

      /* 
          接口可以在定义类的时候去限制类的结构
              接口中的所有属性都不能有实际的值
              接口中只定义对象的结构，而不考虑实际值
                  在接口中所有的方法都是抽象方法
      */

      interface myInter{
          name:string;
          sayHello():void;
      }

      /* 
          定义类时，可以使类去实现一个接口，
          实现接口就是使类满足接口的要求
      */
    class MyClass implements myInter{
          name: string;
          constructor(name:string){
              this.name = name
          }
          sayHello(): void {
              console.log('hello')
          }
    }
  ```

## 4.泛型

定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定），此时泛型便能够发挥作用。

  - 使用泛型

  ```ts
    function fn<T>(a:T):T{
        return a;
    }
  ```

  - 这里的```<T>```就是泛型，T是我们给这个类型起的名字（不一定非叫T），设置泛型后即可在函数中使用T来表示该类型。所以泛型其实很好理解，就表示某个类型。

  - 调用泛型

    - 方式一（直接使用）
    - 方式二（指定类型）

  ```ts
    // 可以直接调用具有泛型的函数
    let res1 =fn(10)  // 不指定泛型，TS自动对类型进行判断
    let res2 =fn<string>('hello') // 指定泛型

    // 泛型可以同时指定多个
    function fn2<T,K>(a:T,b:K):T{
        console.log(b)
        return a
    }

    fn2<number,string>(10,'hello')
  ```

  - 类中同样可以使用泛型：

  ```typescript
    class MyClass<T>{
        name:T;
        constructor(name:T){
            this.name = name
        }
    }

    const mc = new MyClass<string>('123')
  ```

  - 除此之外，也可以对泛型的范围进行约束

  ```typescript
    interface MyInter{
        length: number;
    }

    // T extends Inter 表示泛型T必须为Inter实现类
    function test<T extends MyInter>(a:T):number{
        return a.length
    }

    test({length:10})
  ```

  - 使用T extends MyInter表示泛型T必须是MyInter的子类，不一定非要使用接口类和抽象类同样适用。