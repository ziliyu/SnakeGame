class Snake{

    head:HTMLElement;
    //body is the snake itself includes head
    body:HTMLCollection;
    //container of the snake
    element:HTMLElement;

    constructor(){
        this.head = document.querySelector('#snake>div') as HTMLElement;
        this.body = document.getElementById('snake')!.getElementsByTagName('div');
        this.element = document.getElementById('snake')!;

    }

    //get position of snake head
    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }

    //set position of snake head
    set X(value:number){
        //check if position changes
        if(this.X===value){return;}
        //check value 
        if(value<0||value>290){
            throw new Error("Game Over!");
        }
        //snake cannot move in oppsite direction
        if(this.body[1] &&(this.body[1] as HTMLElement).offsetLeft=== value){
            //console.log('wrong movement!');
            //snake is going to move in right direction
            if(value>this.X){
                value = this.X - 10;
            }
            // snake is going to move in left direction
            else{value = this.X + 10;}
        }
        this.moveBody();

        this.head.style.left = value +'px';
        this.checkCollider();

    }
    set Y(value:number){
        //check if position changes
        if(this.Y===value){return;}
        //check value
        if(value<0||value>290){
            throw new Error("Snake hit the wall,Game Over!");
        }
        if(this.body[1] &&(this.body[1] as HTMLElement).offsetTop=== value){
            //console.log('wrong movement!');
            //snake is going to move in down direction
            if(value>this.Y){
                value = this.Y - 10;
            }
            // snake is going to move in top direction
            else{value = this.Y + 10;}
        }
        this.moveBody();

        this.head.style.top = value +'px';
        this.checkCollider();
    }

    //growth
    growth(){
        this.element.insertAdjacentHTML("beforeend","<div></div>");
        
    }

    //setBody position
    moveBody(){
        for(let i =this.body.length-1;i>0;i--){
            let x = (this.body[i-1] as HTMLElement).offsetLeft;
            let y = (this.body[i-1] as HTMLElement).offsetTop;

            (this.body[i] as HTMLElement).style.left = x + 'px';
            (this.body[i] as HTMLElement).style.top = y + 'px';


        }
    }
    checkCollider(){
        for(let i =1;i<this.body.length;i++){
            let items = this.body[i] as HTMLElement;
            if(this.X === items.offsetLeft && this.Y === items.offsetTop){
                throw new Error("Snake hit itself, Game over!");
            }
            
        }
    }


}
export default Snake;