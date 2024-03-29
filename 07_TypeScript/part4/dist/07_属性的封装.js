"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        /*
            getter方法来读取属性
            setter方法来设置属性
                - 它们被称为属性的存取器
        */
        // 定义方法获取name属性
        get _name() {
            console.log('get');
            return this.name;
        }
        // 定义方法设置name属性
        set _name(value) {
            console.log('set');
            this.name = value;
        }
        get _age() {
            return this.age;
        }
        set _age(value) {
            if (value >= 0) {
                this.age = value;
            }
        }
    }
    /*
        现在属性是在对象中设置的，属性可以任意的被修改
            属性可以任意修改将会导致对象中的数据变得非常不安全
    */
    const per = new Person('孙悟空', 18);
    per._name = 'qq';
    // console.log(per)
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(1);
    // b.num = 1
    // 语法糖
    class C {
        // 可以将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xxx', 111);
    console.log(c);
})();
