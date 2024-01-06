(function(){
    class Animal{
        name:string;

        constructor(name:string){
            this.name = name
        }

        sayHello(){
            console.log('animal is talking with you')
        }
    }

    class Dog extends Animal{
        age:number;

        constructor(name:string,age:number){
            // 如果子类写了构造函数，子类构造函数必须对父类的构造函数进行调用
            super(name)  // 调用父类构造函数
            this.age = age
        }

        sayHello(): void {
            // 这里的super表示当前类的父类
            super.sayHello()
            console.log('汪汪汪')
        }
    }

    const dog = new Dog('旺财',3)
    dog.sayHello()
})()