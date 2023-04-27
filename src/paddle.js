export default class Paddle {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.size = 125;
        this.pose = "up"
        this.image = document.getElementById('player_model_'+ this.pose)

        this.maxSpeed = 3;
        this.speed = {
            x: 0,
            y: 0
        };

        this.position = {
            x: game.gameWidth / 2 - this.size / 2,
            y: game.gameHeight /2
        };
    }

    moveLeft() {
        this.pose = 'left';
        if(!this.isFullSpeed(this.speed.x))
        this.speed.x -= 0.4
        
    }

    moveUp() {
        this.pose = 'up';
        if(!this.isFullSpeed(this.speed.x));
        this.speed.y -= 0.4;
    }

    moveRight() {
        this.pose = 'right';
        if(!this.isFullSpeed(this.speed.x))
        this.speed.x += 0.4
    }

    moveDown() {
        this.pose = 'down'
        if(!this.isFullSpeed(this.speed.y))
        this.speed.y += 0.4
        console.log(this.position.y, this.gameHeight)
    }

    stop() {
        this.speed.x = 0;
        this.speed.y = 0;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
        // ctx.fillStyle = '#0f0'
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    isFullSpeed(curSpeed) {
        if (Math.abs(curSpeed) >= this.maxSpeed) return true
    }

    update(deltaTime) {
        this.image = document.getElementById('player_model_'+ this.pose)
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.y < 0) this.position.y = 0;

        if (this.position.x + this.size > this.gameWidth)
        this.position.x = this.gameWidth - this.size;
        if (this.position.y + this.size > this.gameHeight)
        this.position.y = this.gameHeight - this.size;
    }
}

