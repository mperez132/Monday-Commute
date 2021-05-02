class Gameover extends Phaser.Scene {
    constructor(){
        super("gameOverScene");
    }

    create() {
        this.BackgroundRoad = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'Background').setOrigin(0,0);
        this.gameOverText = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'gameOverScreen').setOrigin(0,0);
        this.goControls = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'gameOverControls').setOrigin(0,0);
        this.goScore = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'gameOverScore').setOrigin(0,0);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        
        this.BackgroundRoad.tilePositionY -= menuSpeed;
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            playerHealth = 3;
            timeScore = 0;
            GameStatus = false;
            this.scene.start('menuScene');
        }
    }
}
