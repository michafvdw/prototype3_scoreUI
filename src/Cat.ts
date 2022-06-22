import * as PIXI from "pixi.js";
import { Game } from "./Game";

export class Cat extends PIXI.Sprite {
  private speed: number = 0;
  private game: Game;
  constructor(texture: PIXI.Texture, game: Game) {
    super(texture);
    this.game = game;
    console.log("cat created");
    this.x = Math.random() * game.pixi.screen.left;
    this.y = Math.random() * game.pixi.screen.top;
    this.scale.set(-1, 1);

    window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
    window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
  }

  private onKeyDown(e: KeyboardEvent): any {
    if (e.key === "ArrowUp") {
      this.speed = -5;
    }
    if (e.key === "ArrowDown") {
      this.speed = 5;
    }
  }
  private onKeyUp(e: KeyboardEvent): any {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      this.speed = 0;
    }
  }

  public update() {
    this.x -= 4;
    this.y += this.speed;

    this.keepInScreen();
  }

  private keepInScreen() {
    if (this.getBounds().right < this.game.pixi.screen.left) {
      this.x = this.game.pixi.screen.right;
    }
  }
}
