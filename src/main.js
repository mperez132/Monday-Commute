//---------------------MONDAY COMMUTE---------------------
//COMPLETED 05/03/21
//-----------------------GROUP INFO-----------------------
//--CMPM-120 ENDLESS RUNNER
//--Moises Perez -- mperez86@ucsc.edu
//--Constantine Kolokousis -- kkolokou@ucsc.edu
//--Brian Cao -- 

// Does your game...
// ...do something technically interesting? Are you particularly proud of a programming technique you implemented? 
// Did you look beyond the class examples and learn how to do something new? (5)

// Something I think we're proud of is this si the first time we've made music for a game. We used a program by the name of SoundTrap. 
// They're owned by spotify and allow a user to record, use, and make music on the fly. It was complicated but simple. In our game, a way we implemented 
// the spawns of the traffic was interesting. Brian Cao came up with the idea that we change the texture of the sprite so that we're able to have only one object. 
// We quickly found out that it affected the hitbox for the next sprite, so we implemented it in the play.js file instead. In there, we were able to destroy and basically respawn the object.
// Each time it was respawned we were able to change the sprite, position, and physics group they were a part of. This allowed us to not manually check the hitbox for each object like 
// in Rocket Patrol. None of us are particularly good at making art assets so we tried our best to keep it simple along the way. Moises Perez also found an example of camera shake to
// to implement into the game. To add more, we decided to give players 3 lives to play with. 



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

