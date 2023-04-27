export default class DialogueMenu {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight
        this.wndw = document.getElementById('dialogueMenu');
        this.dlg = this.wndw.getContext('2d')
        this.wndw.width = gameWidth;
        this.wndw.height = gameHeight / 4;

        // this.wndw.fillStyle = "white";
        // this.wndw.font = "30px Arial";
        // this.wndw.fillText("иду налево", 20, 20);
    } 

    draw(text) {
        this.dlg.clearRect(0, 0, this.gameWidth, this.gameHeight / 4);
        this.dlg.fillStyle = "white";
        this.dlg.font = "30px Arial";
        this.dlg.textAlign = "center"
        this.dlg.fillText(text, this.wndw.width /2, this.wndw.height / 2);
    }   
}