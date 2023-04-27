import Paddle from '/src/paddle.js';
import InputHandler from '/src/input.js';
import Ball from '/src/ball.js'
import Brick from '/src/brick.js';
import { buildLevel, level1, level2 } from "/src/levels.js";
import DialogueMenu from '/src/dialogue.js';
import DialogueTrigger from '/src/dialogueTrigger.js';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gamestate = GAMESTATE.RUNNING;

        this.paddle = new Paddle(this);
        this.gameObjects = [];
        this.bricks = [];
        this.lives = 3;

        this.levels = [level1, level2];
        this.currentLevel = 0;

        this.ball = new Ball(this);
        this.dialogueTrigger = new DialogueTrigger(this);
        new InputHandler(this.paddle, this); 
        this.dmenu = new DialogueMenu(this.gameWidth, this.gameHeight);

       
    }

    start() {
        if(this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL) return;

        //  this. bricks = buildLevel(this, this.levels[this.currentLevel]);
        this.ball.reset();

         this.gameObjects = [
            // this.ball,
            this.paddle,
            this.dialogueTrigger
         ];
         this.gamestate = GAMESTATE.RUNNING;
    }

    update(deltaTime) {

        if(this.paddle.position.x ==0) {
            this.dmenu.draw('ТЫ ДОБРАЛСЯ ДО ЕБУЧЕГО ЛЕВОГО КРАЯ')
        }


        if(this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;

        if  (
            this.gamestate === GAMESTATE.PAUSED || 
            this.gamestate === GAMESTATE.MENU ||
            this.gamestate === GAMESTATE.GAMEOVER
            )
            return;

        if(this.bricks.length === 0) {
            this.currentLevel++;
            this.gamestate = GAMESTATE.NEWLEVEL;
            this.start();
        }
        [...this.gameObjects, ...this.bricks].forEach(object => object.update(deltaTime))

        this.gameObjects.forEach((object) => object.update(deltaTime));
        this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);
    }

    draw(ctx) {
        [...this.gameObjects, ...this.bricks].forEach(object => object.draw(ctx));

        if(this.gamestate === GAMESTATE.PAUSED) { 
        ctx.rect(0,0,this.gameWidth, this.gameHeight);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2)
        }

        if(this.gamestate === GAMESTATE.MENU) { 
        ctx.rect(0,0,this.gameWidth, this.gameHeight);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Нажми пробел для начала", this.gameWidth / 2, this.gameHeight / 2)
        }

        if(this.gamestate === GAMESTATE.GAMEOVER) { 
        ctx.rect(0,0,this.gameWidth, this.gameHeight);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2)
        }
    }

    togglePause() {
        if(this.gamestate == GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        }
    }
}