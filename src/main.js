let config = {

    type: Phaser.AUTO,
    width: 640,
    height: 960,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'aracde', 
        arcade: {
            //debug: true,
            gravity: {
                x: 0, 
                y: 0
            }
        }
    },
    scene: [Play],
}

let game = new Phaser.Game(config);
let cursors;
let Level;
let HighScore = 0;
let Distance = 0;
let GameStatus = false; 