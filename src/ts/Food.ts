class Food{
    element:HTMLElement;
    constructor(){
        this.element = document.getElementById('food')!;
    }

    //get postion of food
    get X(){
        return this.element.offsetLeft;
    }

    get Y(){
        return this.element.offsetTop;
    }

    generate(){
        //genetate food at random position
        // 0< position <290
        // snake movement is based on "10" so the X,Y of the food has to be 10*number
       let x = Math.round(Math.random()*29)*10;
       let y = Math.round(Math.random()*29)*10;
        this.element.style.left = x+'px';
        this.element.style.top = y +'px';
    }
}
export default Food;