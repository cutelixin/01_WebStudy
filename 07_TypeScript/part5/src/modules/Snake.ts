class Snake{
    // 蛇 头
    head:HTMLElement;
    // 蛇 的身体
    bodies:HTMLCollection;
    // 获取蛇的容器
    element:HTMLElement
    constructor(){
        this.element = document.querySelector('.snake')!;
        this.head = document.querySelector('.snake > div')!;
        this.bodies = this.element.getElementsByTagName('div')!;
    }

    // 获取蛇头的坐标（X）
    get X(){
        return this.head.offsetLeft
    }

    // 获取蛇头的坐标（Y）
    get Y(){
        return this.head.offsetTop
    }

    // 设置蛇头的坐标（X）
    set X(val){
        // 如果新值和旧值相同，则直接返回无需修改
        if(this.X === val)return;
        // X的值的合法范围在0-290之间
        if(val < 0 || val > 290){
            // 进入判断则说明蛇撞墙了 
            throw new Error('DEAD')
        }

        // 修改 x 时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时不能掉头，反之亦然
        // 如果蛇头的水平坐标 X 和 第二节的水平坐标相同则说明掉头了
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val){
            // console.log('水平方向发生掉头')
            // 如果 val 大于 X ，则代表此时向右走，此时发生掉头，应该让蛇继续左走
            if(val > this.X){
                // 改变方向时是修改水平坐标，向右则加 10 ，抵消已经改变的方向则是减 10
                val = this.X - 10 
            }else{
                val = this.X + 10 
            }
        }
        
        // 移动身体
        this.moveBody()

        this.head.style.left = val + 'px'

        // 检查是否撞到自己
        this.checkHeadBody()
    }

    // 设置蛇头的坐标（Y）
    set Y(val){
        // 如果新值和旧值相同，则直接返回无需修改
        if(this.Y === val)return;
        if(val < 0 || val > 290){
            // 进入判断则说明蛇撞墙了
            throw new Error('DEAD')
        }

        // 修改 y 时，是在修改垂直坐标，蛇在上下移动，蛇在向左移动时不能掉头，反之亦然
        // 如果蛇头的水平坐标 Y 和 第二节的垂直坐标相同则说明掉头了
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val){
            // console.log('垂直方向发生掉头')
            // 如果 val 大于 X ，则代表此时向下走，此时发生掉头，应该让蛇继续下走
            if(val > this.Y){
                val = this.Y - 10 
            }else{
                val = this.Y + 10 
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.top = val + 'px'

        // 检查是否撞到身体
        this.checkHeadBody()

    }

    // 添加蛇身
    addBody(){ 
        this.element.insertAdjacentHTML('beforeend',`<div></div>`)
    }

    // 添加蛇移动的方法
    moveBody(){
        /* 
            将后面的身体设置为前面身体的位置
                举例子：
                    弟 4 节 = 弟 3 节的位置
                    弟 3 节 = 弟 2 节的位置
                    弟 2 节 = 蛇头的位置
        */
       for(let i = this.bodies.length-1; i>0; i--){
            let x = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i-1] as HTMLElement).offsetTop;



            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
       }

    }

    // 检查蛇头和身体坐标是否重叠
    checkHeadBody(){
        for(let i = 1; i < this.bodies.length; i++){
            let x = (this.bodies[i] as HTMLElement).offsetLeft;
            let y = (this.bodies[i] as HTMLElement).offsetTop;

            if(this.X === x && this.Y === y){
                throw new Error('蛇头撞身体了')
            }
        }
    }
}

export default Snake