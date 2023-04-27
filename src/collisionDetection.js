export function detectCollision(paddle, gameObject) {
    let bottomOfPaddle = paddle.position.y + paddle.size;
    let topOfPaddle = paddle.position.y

        let topOfObject = gameObject.position.y;
        let leftSideOfObject = gameObject.position.x;
        let rightSideOfObject = gameObject.position.x + gameObject.width;
        let bottomOfObject = gameObject.position.y + gameObject.height; 
        if(bottomOfPaddle >= topOfObject 
            && topOfPaddle <= bottomOfObject
            && paddle.position.x >= leftSideOfObject
            && paddle.position.x + paddle.size <= rightSideOfObject)
            {
                document.getElementById('hit_sound').load()
                document.getElementById('hit_sound').play()
            return true;
        } else {
            return false;
        }
}