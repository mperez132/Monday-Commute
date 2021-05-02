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

        //load audio assets


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