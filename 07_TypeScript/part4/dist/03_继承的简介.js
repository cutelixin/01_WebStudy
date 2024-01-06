"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log(this.name + 'say hi');
        }
    }
    /*
        class Dog extends Animal
            - 此时，Animal被称为父类，Dog被称为子类
            - 使用继承后，子类将会拥有父类所有的方法和属性
            - 通过继承，可以将多个类中共有的代码写在一个父类中
                这样只需要写一次即可让所有的子类同时拥有父类的属性
                如果希望在子类中添加一些父类没有的属性或方法直接加就可以
            - 如果子类中添加了和父类相同的方法，则子类会覆盖掉父类的方法
                这种子类覆盖掉父类方法的形式，我们成为方法的重写
    */
    // 定义一个表示狗Dog的类
    // 使Dog继承Animal类
    class Dog extends Animal {
        run() {
            console.log(this.name + 'run~~');
        }
        sayHello() {
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('旺财', 3);
    console.log(dog);
    dog.run();
    dog.sayHello();
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵');
        }
    }
    const cat = new Cat('喵喵', 2);
    console.log(cat);
    cat.sayHello();
})();
