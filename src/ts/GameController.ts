import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameController{

    food:Food;
    scorePanel:ScorePanel;
    snake:Snake;
    //direction of movement
    direction:string;
    gameOver:boolean;

    constructor(){
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake = new Snake();
        this.direction = "ArrowRight";
        this.gameOver=false;
        this.init();
        
    }
    //init game 
    init(){
        //add keyboard event
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        this.move();

    }
    keydownHandler(event:KeyboardEvent){
        //console.log(event.key);
        //console.log(this);
        this.direction = event.key;
    }
    //move based on direction
    move(){
        let x = this.snake.X;
        let y = this.snake.Y;
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                y = y - 10;
                break;
            case "ArrowDown":
            case "Down":
                y = y + 10;
                break; 
            case "ArrowLeft":
            case "Left":
                x = x - 10;
                break;   
            case "ArrowRight":
            case "Right":
                x = x + 10;
                break;                           
        }
        if(this.checkFood(x,y)){
            console.log("eat!");
            this.food.generate();
            this.scorePanel.getScore();
            this.snake.growth();
            
        }
        try{
            this.snake.X = x;
            this.snake.Y = y;
        }catch(e){
            alert(e.message);
            this.gameOver= true;

        }

        !(this.gameOver)&&setTimeout(this.move.bind(this),200);

    }
    
    checkFood(x:number,y:number){
        return x===this.food.X && y===this.food.Y;
    }



    
}
export default GameController;