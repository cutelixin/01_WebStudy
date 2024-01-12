// 定义食物类
class Food{
    element:HTMLElement;
    constructor(){
        this.element = document.querySelector('.food')!;
    }
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }

    change(){
        // 生成一个随机数
        // 食物的最小位置是0，最大是290
        // 蛇移动一次就是一格，一格大小为10，所以要求食物的坐标能够整除10
        this.element.style.left = Math.round(Math.random()*29) * 10 + 'px';
        this.element.style.top = Math.round(Math.random()*29) * 10 + 'px';
    }
}

// 测试代码
/* const food = new Food()
food.change() */

export default Food