class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        this.Distance;
        this.HighScore = 0;
    }
    //preload assets for the play scene
    preload() {
        this.load.image('Background', './assets/BackTemp.png');
    }

    create() {

        //road placed
        this.BackgroundRoad = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'Background').setOrigin(0,0);

        this.Controls = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'controls').setOrigin(0,0);

        if(GameDiff == false) {
            //the player -- a difficulty flag will eventually set which model is used
            this.commuter01 = new Linda(this, game.config.width/2, game.config.height - 
                borderUISize - borderPadding, 'car1').setOrigin(0.5, 0.85);
        }
        else {
            //the player -- a difficulty flag will eventually set which model is used
            this.commuter01 = new Linda(this, game.config.width/2, game.config.height - 
            borderUISize - borderPadding, 'car2').setOrigin(0.5, 0.85);
        }

        this.timeConfig = {
            fontFamily: 'Courier',
            bold: true,
            fontSize: '28px',
            backgroundColor: '#FF0000',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }

        this.highScoreConfig = {
            fontFamily: 'Courier',
            bold: true,
            fontSize: '28px',
            backgroundColor: '#FF0000',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 200
        }

        this.Distance = this.add.text (
            game.config.width - 100,
            0,
            0,
            this.timeConfig
        );
        
        this.highScoreText = this.add.text (
            0,
            0,
            "High Score: " + this.HighScore,
            this.highScoreConfig
        );

        //controls
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        

        
    }

    createTraffic() {

    }



    update() {
        if(GameDiff == false)
            this.BackgroundRoad.tilePositionY -= menuSpeed;
        else
        this.BackgroundRoad.tilePositionY -= gameSpeed;

        if(!this.gameStatus) {
            this.commuter01.update();
        }

        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('menuScene');
        }

    }

    checkCollision(linda, traffic) {
        //from rocket patrol
        if( linda.x < traffic.x + traffic.width &&
            linda.x + linda.width > traffic.x &&
            linda.y < traffic.y + traffic.height &&
            linda.height + linda.y > traffic.y) {
                return true;
        } 
    }

    playerExplode() {

    }
}