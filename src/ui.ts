import * as PIXI from "pixi.js";
import { Game } from "./Game";


export class ui extends PIXI.Container {

    scoreField:PIXI.Text
    score:number = 0
    private game: Game;

    constructor(game: Game){
        super();
        this.game = game;
        const style = new PIXI.TextStyle({
            fontFamily: 'ArcadeFont',
            fontSize: 40,
            fontWeight: 'bold',
            fill: ['#ffffff']
        })
    
        this.scoreField = new PIXI.Text(`Score : 0`, style)
        this.addChild(this.scoreField)
        this.scoreField.x = 10
        this.scoreField.y = 10
    }

    addScore(n:number) {
        this.score -= n
        this.scoreField.text = `Score : ${this.score}`
    }

}

