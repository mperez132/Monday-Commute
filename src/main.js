let config = {

    type: Phaser.AUTO,
    width: 640,
    height: 960,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Play, Menu],
}

let game = new Phaser.Game(config);

let HighScore = 0;
let Distance = 0;
let GameStatus = false; 

let groundSpeed = 3;

let keyLEFT, keyRIGHT, keyR;
