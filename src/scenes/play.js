class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        this.Distance;
    }

    create() {

        this.gameStatus = false;

        //road placed
        this.BackgroundRoad = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'Background').setOrigin(0,0);

        this.trafficGroup = this.physics.add.group();
        this.playerGroup = this.physics.add.group();

        this.traffic01 = new Traffic(this, 155, 0, 'hazard2').setOrigin(.5,.85);
        this.trafficGroup.add(this.traffic01);

        this.Controls = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'controls').setOrigin(0,0);

        if(GameDiff == false) {
            //the player -- a difficulty flag will eventually set which model is used
            this.commuter01 = new Linda(this, game.config.width/2, game.config.height - 
                borderUISize - borderPadding, 'car1').setOrigin(0.5, 0.85);
                this.playerGroup.add(this.commuter01);
        }
        else {
            //the player -- a difficulty flag will eventually set which model is used
            this.commuter01 = new Linda(this, game.config.width/2, game.config.height - 
            borderUISize - borderPadding, 'car2').setOrigin(0.5, 0.85);
            this.playerGroup.add(this.commuter01);
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
            "High Score: " + HighScore,
            this.highScoreConfig
        );

        //controls
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        

    }

    update() {
        if(GameDiff == false) {
            this.BackgroundRoad.tilePositionY -= menuSpeed;
            this.traffic01.movementSpeed = 1.75;
        }
        else {
            this.BackgroundRoad.tilePositionY -= gameSpeed;
            this.traffic01.movementSpeed = 2.55;
        }

        if(!this.gameStatus) {
            this.commuter01.update();
            // this.Distance.text = timeScore;
            // timeScore += 1;
        }
        if(this.physics.collide(this.playerGroup, this.trafficGroup)) {
            this.gameStatus = true;
            this.scene.start('gameOverScene');
            // if(timeScore > HighScore){
            //     HighScore = timeScore;
            //     this.highScoreText.text = HighScore;
            // }
            // else
            //     timeScore = 0;
        }

        //debug
        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('menuScene');
        }
        this.traffic01.update();
        
        if(Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.scene.start('gameOverScene');
        }

    }

}