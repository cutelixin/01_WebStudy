// 使用class关键字来定义一个类
/* 
    对象中主要包含两部分：
        属性；
        方法；
*/
class Person{

    /* 
        直接定义的属性为实例属性，需要通过对象的实例去访问
            const per = new Person()
            per.name

        使用 static 开头的是静态属性（类属性），可以直接通过类访问
            Person.age

        readonly 开头的属性表示一个只读的属性无法修改
    */

    // 定义实例属性（可读可写）
    name: string = 'lily'

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

const per = new Person();

console.log(per)

console.log(Person.age)

Person.sayHello()