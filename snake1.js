/*
Project: Snake
Developer(s):
    Ola @olawb (Email)
    Omar @oalamoud (infoATomaralamoudiDOTnet)
Create Date: 13 JUL 17
Modification date:
Version:0.1.0
*/


var myGamePiece;//snake body

function startGame() {
    myGameArea.start();//canvas area
    myGamePiece = new component(30, 30, "blue", 10, 120);//propert snake body
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    ctx = myGameArea.context;//squ
    ctx.fillStyle = color;//!!
    ctx.fillRect(this.x, this.y, this.width, this.height);
}