class ScorePanel{
    score:number;
    scoreElement : HTMLElement;

    constructor(){
        this.score = 0;
        this.scoreElement = document.getElementById('score')!;
    }

    getScore(){
        this.score++;
        this.scoreElement.innerHTML = this.score + '';
    }
}
export default ScorePanel;