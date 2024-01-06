class Dog{
    name:string
    age:number
    
    // constructor 被称为构造函数
    // 构造函数会在对象创建时调用
    constructor(name:string,age:number){
        // 在实例方法中，this 就表示当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this，向新建的对象添加属性
        this.name = name
        this.age = age
    }
    bark(){
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this)
        alert('www')
    }
}

const dog1 = new Dog('旺财',8)
const dog2 = new Dog('富贵',1)
const dog3 = new Dog('福贵',2)
const dog4 = new Dog('小黑',5)


console.log(dog1)
console.log(dog2)
console.log(dog3)
console.log(dog4)
