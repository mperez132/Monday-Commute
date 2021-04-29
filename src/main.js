let config = {

    type: Phaser.AUTO,
    width: 640,
    height: 960,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Menu, Play],
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let HighScore = 0;
let Distance = 0;
let GameDiff = false; 
let GameStatus = false; 

let gameSpeed = 2.55;
let menuSpeed = 1.75;

let keyLEFT, keyRIGHT, keyR, keyUP, keyDOWN;
