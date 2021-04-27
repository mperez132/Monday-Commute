class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload() {
        this.load.image('backTemp', './assets/backTemp.png');
    }

    create() {
        this.backTemp = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'backTemp').setOrigin(0,0);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            game.settings = {
                
            }
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            game.settings = {
                
            }
        }
    }
}