"use strict";
(function () {
    /*
        以 abstract 开头的类是抽象类
            - 抽象和其他类区别不大，只是不能用来创建对象
            - 抽象类就是专门用来被继承的类
            - 抽象类可以添加抽象方法
    */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('www');
        }
    }
    const dog = new Dog('旺财');
    dog.sayHello();
})();
