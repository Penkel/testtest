import Game from "./game.js";

export default class InputHandler {
    constructor(paddle, game) {
    document.addEventListener('keydown', (event) => {
        switch(event.keyCode) {
            case 37:
                game.dmenu.draw("ЖОПА ЖОПА")
                paddle.moveLeft();
                break;

            case 38:
                game.dmenu.draw("ХУЙ ХУЙ")
                paddle.moveUp();
                break;

            case 39:
                paddle.moveRight();
                break; 

            case 40:
                paddle.moveDown();
                break;

            case 27:
                game.togglePause();
                break;

            case 32:
                game.start();
                break;
        }
    });
    document.addEventListener('keyup', (event) => {
        switch(event.keyCode) {
            case 37:
                if(paddle.speed.x < 0)
                paddle.stop();
                break;

            case 38:
                    if(paddle.speed.y < 0)
                    paddle.stop();
                    break;
    
            
            case 39:
                if(paddle.speed.x > 0)
                paddle.stop();
                break;
            
            case 40:
                if(paddle.speed.y > 0)
                paddle.stop();
                break;
        }

    });
    }
}