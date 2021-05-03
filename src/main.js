let config = {

    type: Phaser.AUTO,
    width: 640,
    height: 960,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            },
            fps: 60
        }
    },
    scene: [Load, Menu, Play, Gameover],
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 30;
let borderPadding = borderUISize + 70;

let newHighScore = false;
let GameDiff = false; 
let GameStatus = false; 

let timeScore = 0;
let HighScore = 0;
let playerHealth = 3;
let playerFrames = false;

let gameSpeed = 4.5;
let menuSpeed = 2.55;

let keyLEFT, keyRIGHT, keyR, keyUP, keyDOWN;
