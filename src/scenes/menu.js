class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload() {
        this.load.image('backTemp', './assets/BackTemp.png');
        this.load.image('menuTemp', './assets/TitleSplash.png');
        this.load.image('menuText', './assets/TitleDifficulty.png');
        this.load.image('car1', './assets/car.png');
        this.load.image('car2', './assets/carHard.png');
        this.load.image('controls', './assets/controlSplash.png');
    }

    create() {

        this.backTemp = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'backTemp').setOrigin(0,0);
        this.menuTemp = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'menuTemp').setOrigin(0,0);
        this.menuText = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'menuText').setOrigin(0,0);
        //the player -- a difficulty flag will eventually set which model is used
        this.commuter = new Linda(this, game.config.width/2, game.config.height - 
            borderUISize - borderPadding, 'car1').setOrigin(0.5, 0.85);

            
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        this.backTemp.tilePositionY -= menuSpeed;
        //easy mode
        if(Phaser.Input.Keyboard.JustDown(keyUP)) {
            GameDiff = false;
            this.scene.start('playScene');
        }
        //hard mode
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            GameDiff = true; 
            this.scene.start('playScene');
        }
    }
}