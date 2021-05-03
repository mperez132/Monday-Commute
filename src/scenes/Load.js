class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }
    preload() {
        //load graphics
        this.load.image('Background', './assets/BackTemp.png');
        this.load.image('menuTemp', './assets/TitleSplash.png');
        this.load.image('menuText', './assets/TitleDifficulty.png');
        this.load.image('car1', './assets/car.png');
        this.load.image('car2', './assets/carHard.png');
        this.load.image('controls', './assets/controlSplash.png');
        this.load.image('hazard1', './assets/Cone.png');
        this.load.image('hazard2', './assets/OpenManhole.png');
        this.load.image('speedHazard', './assets/hazardcar.png');
        this.load.image('gameOverScreen', './assets/GameOverSplash.png');
        this.load.image('gameOverScore', './assets/GameOverScore.png');
        this.load.image('gameOverControls', './assets/GameOverControls.png');

        //load audio assets

        this.load.audio('main_loop', './assets/Main_Game_Loop.mp3');
        this.load.audio('go_loop', './assets/Game_Over.mp3');
        this.load.audio('car_hit', './assets/Car_Hit.mp3');
        this.load.audio('hazard_hit', './assets/Cone_Hit.mp3');

    }
    create() {
        if(window.localStorage) {
            console.log('Local storage supported');
        }
        else {
            console.log('Local storage not supported');
        }

        this.scene.start('menuScene');
    }
}