class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        this.temp1 = false;
        this.temp2 = false;
    }

    create() {
        this.music1 = this.sound.add('main_loop');
        this.music1.volume = 0.05;
        this.music1.play();
        this.music1.loop = true;
        
        //road placed
        this.BackgroundRoad = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'Background').setOrigin(0,0);
    
        this.coneGroup = this.physics.add.group();
        this.manholeGroup = this.physics.add.group();
        this.speederGroup = this.physics.add.group();
        this.playerGroup = this.physics.add.group();
    
        this.traffic01 = new Traffic(this, 155, 0, 'hazard2').setOrigin(.5,.85);
        this.manholeGroup.add(this.traffic01);

        this.clock = this.time.delayedCall(2250, () => {
            this.traffic03 = new Traffic(this, 320, 0, 'hazard2').setOrigin(.5,.85);
            this.manholeGroup.add(this.traffic03);
            this.temp2 = true;
        }, null, this);

        this.clock = this.time.delayedCall(22500, () => {
            this.traffic02 = new Traffic(this, 155, 0, 'speedHazard').setOrigin(.5,.85);
            this.traffic02.movementSpeed = 5;
            this.speederGroup.add(this.traffic02);
            this.temp1 = true;
        }, null, this);

        this.timeConfig = {
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
    
        this.playerConfig = {
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
            fixedWidth: 150
        }
    
        GameStatus = false;
            
        this.DistanceText = this.add.text (
            game.config.width - 180,
            0,
            'Score: ' + timeScore,
            this.timeConfig
        );
            
        this.LivesText = this.add.text (
            0,
            0,
            'Lives: ' + playerHealth,
            this.playerConfig
        );
        this.score = 0;

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

        //controls
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    
    }

    update(time, delta) {
        
        if(GameDiff == false) {
            this.BackgroundRoad.tilePositionY -= menuSpeed;
            this.traffic01.movementSpeed = 2.55;
            if(this.temp1 == true)
                this.traffic02.movementSpeed = 2.55
            if(this.temp2 == true)
                this.traffic03.movementSpeed = 2.55;
        }
        else {
            this.BackgroundRoad.tilePositionY -= gameSpeed;
            this.traffic01.movementSpeed = 4.5;
            if(this.temp1 == true)
                this.traffic02.movementSpeed = 4.5
            if(this.temp2 == true)
                this.traffic03.movementSpeed = 4.5;
            
        }

        if(!GameStatus) {
            this.checkPlayer();
            this.commuter01.update();
            this.score += delta
            timeScore = Math.floor(this.score / 1000);
            this.DistanceText.text = 'Score: ' + timeScore;

        }
        if(this.physics.collide(this.playerGroup, this.coneGroup)) {
            if(!playerFrames) {
                this.music = this.sound.add('hazard_hit');
                this.music.volume = 0.05;
                this.music.play();
                playerFrames = true;
                playerHealth -= 1;
                this.cameras.main.shake(200, 0.01);
                this.commuter01.setAlpha(0.5);
                this.LivesText.text = 'Lives: ' + playerHealth;
                if(GameDiff == false) 
                    this.temp = 3000;
                else 
                    this.temp = 2000;
                this.clock = this.time.delayedCall(this.temp, () => {
                    this.commuter01.setAlpha(1);
                    playerFrames = false;
                }, null, this);
            }
        }
        if(this.physics.collide(this.playerGroup, this.manholeGroup)) {
            if(!playerFrames) {
                this.music = this.sound.add('hazard_hit');
                this.music.volume = 0.05;
                this.music.play();
                playerFrames = true;
                playerHealth -= 1;
                this.cameras.main.shake(200, 0.01);
                this.commuter01.setAlpha(0.5);
                this.LivesText.text = 'Lives: ' + playerHealth;
                if(GameDiff == false) 
                    this.temp = 3000;
                 else 
                    this.temp = 2000;
                this.clock = this.time.delayedCall(this.temp, () => {
                    this.commuter01.setAlpha(1);
                    playerFrames = false;
                }, null, this);
            }
        }

        if(this.physics.collide(this.playerGroup, this.speederGroup)) {
            if(!playerFrames) {
                this.music = this.sound.add('car_hit');
                this.music.volume = 0.05;
                this.music.play();
                playerFrames = true;
                playerHealth = 0;
                this.cameras.main.shake(200, 0.01);
                this.LivesText.text = 'Lives: ' + playerHealth;
                playerFrames = false;
            }
        }

        if(this.physics.collide(this.speederGroup, this.manholeGroup)) {
            this.traffic01.destroy();
        }
        if(this.physics.collide(this.speederGroup, this.coneGroup)) {
            this.traffic03.destroy();
        }
        if(this.physics.collide(this.manholeGroup, this.coneGroup)) {
            this.traffic03.destroy();
        }
        

        this.traffic01.update();
        if(this.temp1 == true)
            this.traffic02.update();
        if(this.temp2 == true)
            this.traffic03.update();
        this.checkTraffic();
        //debug
        // if(Phaser.Input.Keyboard.JustDown(keyR)) {
        //     playerFrames = false;
        //     playerHealth = 3;
        //     this.commuter01.destroy();
        //     this.traffic01.destroy();
        //     if(this.temp1 == true) 
        //         this.traffic02.destroy();
        //     //check time and high score
        //     if(timeScore > HighScore) {
        //         HighScore = timeScore;
        //     }
        //     timeScore = 0;
        //     GameStatus = true;
        //     this.temp1 = false;
        //     this.music.stop();
        //     this.scene.start('menuScene');
        // }
        // if(Phaser.Input.Keyboard.JustDown(keyUP)) {
        //     this.commuter01.destroy();
        //     this.traffic01.destroy();
        //     if(this.temp1 == true) 
        //         this.traffic02.destroy();

        //     //check time and high score
        //     if(timeScore > HighScore) {
        //         HighScore = timeScore;
        //     }
        //     GameStatus = true;
        //     this.temp1 = false;
        //     this.music.stop();
        //     this.scene.start('gameOverScene');
        // }
    }

    checkTraffic() {
        if(this.traffic01.y >= game.config.height + 50) {
            this.lane = Math.floor(Math.random() * (4-1) + 1);
            this.texturePicker = Math.floor(Math.random() * (3-1) + 1);
            console.log(this.texturePicker);
            this.traffic01.destroy();
            if(this.lane == 1){
                if(this.texturePicker == 1) {
                    this.traffic01 = new Traffic(this, 155, -100, 'hazard1').setOrigin(.5,.85);
                    this.manholeGroup.add(this.traffic01);
                } else if (this.texturePicker == 2) {
                    this.traffic01 = new Traffic(this, 155, -100, 'hazard2').setOrigin(.5,.85);
                    this.manholeGroup.add(this.traffic01);
                }
            } else if(this.lane == 2){
                if(this.texturePicker == 1) {
                    this.traffic01 = new Traffic(this, 320, -100, 'hazard1').setOrigin(.5,.85);
                    this.manholeGroup.add(this.traffic01);
                } else if (this.texturePicker == 2) {
                    this.traffic01 = new Traffic(this, 320, -100, 'hazard2').setOrigin(.5,.85);
                    this.manholeGroup.add(this.traffic01);
                }
            }else if(this.lane == 3){
                if(this.texturePicker == 1) {
                    this.traffic01 = new Traffic(this, 485, -100, 'hazard1').setOrigin(.5,.85);
                    this.manholeGroup.add(this.traffic01);
                } else if (this.texturePicker == 2) {
                    this.traffic01 = new Traffic(this, 485, -100, 'hazard2').setOrigin(.5,.85);
                    this.manholeGroup.add(this.traffic01);
                }
            }
        }
        if(this.temp2 == true) {
            if(this.traffic03.y >= game.config.height + 50) {
                this.lane = Math.floor(Math.random() * (4-1) + 1);
                this.texturePicker = Math.floor(Math.random() * (3-1) + 1);
                console.log(this.texturePicker);
                this.traffic03.destroy();
                if(this.lane == 1){
                    if(this.texturePicker == 1) {
                        this.traffic03 = new Traffic(this, 155, -100, 'hazard1').setOrigin(.5,.85);
                        this.coneGroup.add(this.traffic03);
                    } else if (this.texturePicker == 2) {
                        this.traffic03 = new Traffic(this, 155, -100, 'hazard2').setOrigin(.5,.85);
                        this.coneGroup.add(this.traffic03);
                    }
                } else if(this.lane == 2){
                    if(this.texturePicker == 1) {
                        this.traffic03 = new Traffic(this, 320, -100, 'hazard1').setOrigin(.5,.85);
                        this.coneGroup.add(this.traffic03);
                    } else if (this.texturePicker == 2) {
                        this.traffic03 = new Traffic(this, 320, -100, 'hazard2').setOrigin(.5,.85);
                        this.coneGroup.add(this.traffic03);
                    }
                }else if(this.lane == 3){
                    if(this.texturePicker == 1) {
                        this.traffic03 = new Traffic(this, 485, -100, 'hazard1').setOrigin(.5,.85);
                        this.coneGroup.add(this.traffic03);
                    } else if (this.texturePicker == 2) {
                        this.traffic03 = new Traffic(this, 485, -100, 'hazard2').setOrigin(.5,.85);
                        this.coneGroup.add(this.traffic03);
                    }
                }
            }
        }
        if(this.temp1 == true) {
            if(this.traffic02.y >= game.config.height + 170) {
                this.lane = Math.floor(Math.random() * (4-1) + 1);
                console.log(this.lane + 'lane');
                this.traffic02.destroy();
                if(this.lane == 1){
                    this.traffic02 = new Traffic(this, 155, -100, 'speedHazard').setOrigin(.5,.85);
                    this.speederGroup.add(this.traffic02);
                } else if(this.lane == 2){
                    this.traffic02 = new Traffic(this, 320, -100, 'speedHazard').setOrigin(.5,.85);
                    this.speederGroup.add(this.traffic02);
                }else if(this.lane == 3){
                    this.traffic02 = new Traffic(this, 485, -100, 'speedHazard').setOrigin(.5,.85);
                    this.speederGroup.add(this.traffic02);
                }
            }
        }
    }

    checkPlayer() {
        if(playerHealth <= 0) {
            this.commuter01.destroy();
            this.traffic01.destroy();
            if(this.temp1 == true)
            this.traffic02.destroy();
            if(this.temp2 == true)
                this.traffic03.destroy();
            //check time and high score
            if(timeScore > HighScore) {
                HighScore = timeScore;
            }
            GameStatus = true;
            playerFrames = false;
            this.temp1 = false;
            this.temp2 = false;
            this.music1.stop();
            this.scene.start('gameOverScene');
        }
    }

}