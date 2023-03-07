var Ball, database;
var position;

function setup() {
    database = firebase.database();
    console.log(database);
    createCanvas(500, 500);
    Ball = createSprite(250, 250, 10, 10);
    Ball.shapeColor = "red";
    var BallPosition = database.ref("bola/posicao");
    BallPosition.on("value", readPosition, showError);
}

function draw() {
    background("white");
    // controlar usando as setas//
    drawSprites();
}

function writePosition(x, y) {
    database.ref("bola/posicao").set({
        x: position.x + x,
        y: position.y + y,
    });
}

function readPosition(data) {
   
}

function showError() {
    
}