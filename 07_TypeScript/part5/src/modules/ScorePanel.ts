class ScorePanel{
    score = 0;
    level = 1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    
    // 设置一个变量限制等级
    maxLevel:number
    // 设置变量表示多少分升一级
    upLevel:number

    constructor(maxLevel:number = 10,upLevel:number = 10){
        this.scoreEle = document.querySelector('.score')!;
        this.levelEle = document.querySelector('.level')!;
        this.maxLevel = maxLevel;
        this.upLevel = upLevel
    }


    //  设置一个加分的方法
    addScore(){
        this.scoreEle.innerHTML = ++this.score + ''
        // 判断分数多少
        if(this.score % this.upLevel === 0){
            this.levelUp()
        }
    }

    // 提升等级的方法
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}


export default ScorePanel