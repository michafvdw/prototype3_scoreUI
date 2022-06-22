import * as PIXI from "pixi.js"
import { Game } from "./Game"


import catImage from "./images/cat.png"

import bgImage from "./images/background.jpg"


export class AssetLoader extends PIXI.Loader {

    private graphics:PIXI.Graphics
    private game:Game

    constructor(game:Game) {
        super()

        this.game = game
        this.graphics = new PIXI.Graphics()
        game.pixi.stage.addChild(this.graphics)

        this.add("cat", catImage)
            .add("background", bgImage)
            //.add("spritesheet", "explosion.json")


    }

  
}