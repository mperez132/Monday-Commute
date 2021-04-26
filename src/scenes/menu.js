class Menu extends Phaser.Scene {

    constructor(){
        super("menuScene");
    }

    preload() {

    }

    create() {
        let menuConfig = {

        }
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