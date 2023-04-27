import { isColluding } from "./collisionDetector.js";

export default class DialogueTrigger {

    constructor(game) {
        this.image = document.getElementById('dlg_trigger')

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;
        this.size = 50;
        this.position = {x: 400, y:200}
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }

    update(deltaTime) {
        // console.log(this.game.paddle.position.y);
        // console.warn(this.position.y)
        // if(detectCollision(this.game.paddle, this)) {
        //     console.log('LOOOOL')
        // }
        if(isColluding(this, this.game.paddle)) {
            console.log('LOOOL');
            this.game.dmenu.draw('ПИДОРАС');
        }
        else {
            this.game.dmenu.draw('ГОВНОЕД');
        }
    }
}

