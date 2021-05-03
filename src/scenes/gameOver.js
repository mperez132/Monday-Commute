class Gameover extends Phaser.Scene {
    constructor(){
        super("gameOverScene");
    }

    create() {
        this.music = this.sound.add('go_loop');
        this.music.volume = 0.05;
        this.music.play();
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

        let goText = {
            fontFamily: 'Courier',
            bold: true,
            fontSize: '40px',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 150
        }

        this.gameScore = this.add.text(game.config.width / 2 + 100, game.config.height / 2 - 60,
            timeScore + 's', goText);
        this.gameHS = this.add.text(game.config.width / 2 + 100, game.config.height / 2 + 15,
            HighScore + 's', goText);
    }

    update() {
        
        this.BackgroundRoad.tilePositionY -= menuSpeed;
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            playerHealth = 3;
            timeScore = 0;
            GameStatus = false;
            this.music.stop();
            this.scene.start('menuScene');
        }
    }
}
