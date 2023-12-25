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






