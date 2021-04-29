class gameOver extends Phaser.Scene {
    constructor(){
        super("gameOverScene");
    }

    preload() {
        this.load.image('gameOverScreen', './assets/gameOverScreen.png');
        this.load.image('backTemp', './assets/backTemp.png');
    }

    create() {
        this.backTemp = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'backTemp').setOrigin(0,0);
        this.menuTemp = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'gameOverScreen').setOrigin(0,0);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        
        this.backTemp.tilePositionY -= menuSpeed;
        if(Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.scene.start('playScene');
        }

        if(Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            this.scene.start('menu');
        }
    

        else {
            return false;
        }
    
    }
}
