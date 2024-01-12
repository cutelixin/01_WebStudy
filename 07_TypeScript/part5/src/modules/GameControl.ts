import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制所有类
class GameControl{
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel

    // 创建一个属性来存储蛇的移动方向（也就是按键方向）
    direction:string = '';
    // 创建一个属性用来记录游戏是否结束
    isLive:boolean = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,2);

        this.init()
    }

    // 游戏的初始化方法
    init(){
        // 绑定键盘按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        this.run()
    }
    

    /* 
        ArrowDown   down
        ArrowUp     up
        ArrowLeft   left
        ArrowRight  right
    */

    keydownHandler(event:KeyboardEvent){
        // 需要检查 event.key 是否合法（用户是否按了正确的键）

        // 修改 direction 属性
        this.direction = event.key
    }

    run(){
        /* 
            根据方向（direction）来使蛇的位置发生改变
            向上 top 减少
            向下 top 增加
            向左 left 减少
            向右 left 增加
        */
       let Y = this.snake.Y;
       let X = this.snake.X;
         
        // 根据方向修改X，Y值
       switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10;
                break;

            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
                
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;

            case 'ArrowRight':
            case 'Right':
                X += 10;
                break;
            default:
                break;
       }

        //检查蛇是否吃到食物    
       this.checkEat(X,Y)

       
       try {
           // 修改蛇的 X、Y 值    
          this.snake.X = X;
          this.snake.Y = Y;  
           
       } catch (error) {
            console.log(error)
            // 进入catch说明进入异常，游戏结束，弹出提示信息 
            alert('GAME OVER !')
            // 将isLive设置为false
            this.isLive = false
       }

        // 开启定时器
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level-1) * 30)    
    }

    // 定义一个方法，检查蛇是否吃到食物
    checkEat(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            console.log('snake ate')
            // 分数增加
            this.scorePanel.addScore();
            // 蛇要增加一节
            this.snake.addBody()
            // 食物的位置改变
            this.food.change();
        } 
    }

}

export default GameControl