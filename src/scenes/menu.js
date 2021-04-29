class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload() {
        this.load.image('backTemp', './assets/backTemp.png');
        this.load.image('menuTemp', './assets/TitleSplash.png')
    }

    create() {

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '24.5px',
            backgroundColor: '#000000',
            color: '#F1D200',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.backTemp = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'backTemp').setOrigin(0,0);
        this.menuTemp = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'menuTemp').setOrigin(-0.006,0);

        this.add.text(game.config.width/2, game.config.height/2 + borderUISize +
            borderPadding, 'Press Up If You Woke Up On Time\nPress Down If You Had To Sleep In', menuConfig).setOrigin(0.5);
            
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        this.backTemp.tilePositionY -= menuSpeed;
        //easy mode
        if(Phaser.Input.Keyboard.JustDown(keyUP)) {
            // game.settings = {
            //     gameSpeed: 2,
            //     GameDiff: false
            // }
            //maybe add a function here
            //that fades the images for 2 seconds and transitions 
            //to the play scene
            GameDiff = false;
            this.scene.start('playScene');
        }
        //hard mode
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            // game.settings = {
            //     gameSpeed: 5,
            //     GameDiff: true
            // }
            //maybe add a function here
            //that fades the images for 2 seconds and transitions 
            //to the play scene
            GameDiff = true; 
            this.scene.start('playScene');
        }
    }
}