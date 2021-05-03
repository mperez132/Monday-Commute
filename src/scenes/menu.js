class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    create() {

        this.BackgroundRoad = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'Background').setOrigin(0,0);
        this.menuTemp = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'menuTemp').setOrigin(0,0);
        this.menuText = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'menuText').setOrigin(0,0);
        //the player -- a difficulty flag will eventually set which model is used
        this.commuter = new Linda(this, game.config.width/2, game.config.height - 
            borderUISize - borderPadding, 'car1').setOrigin(0.5, 0.85);

        this.Controls = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'controls').setOrigin(0,0);

            
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        this.BackgroundRoad.tilePositionY -= menuSpeed;
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