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
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
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

let timeScore;
let HighScore;
let gameSpeed = 2.55;
let menuSpeed = 1.75;

let keyLEFT, keyRIGHT, keyR, keyUP, keyDOWN;
