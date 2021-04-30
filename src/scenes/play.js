class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    //preload assets for the play scene
    preload() {
        this.load.image('backTemp', './assets/backTemp.png');
    }

    create() {
        //road placed
        this.backTemp = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'backTemp').setOrigin(0,0);
        
        //the player -- a difficulty flag will eventually set which model is used
        this.commuter = new Linda(this, game.config.width/2, game.config.height - 
            borderUISize - borderPadding, 'car').setOrigin(0.5, 0.85);

        //controls
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        //timer/score thing
        this.survTime = 0;
        //a timer display needs to go here, Brian accomplished working timer in his game, need input here
        //
        
        //loss flag
        this.gameOver = false;

                
    }

    update() {
        if(GameDiff == false)
            this.backTemp.tilePositionY -= menuSpeed;
        else
        this.backTemp.tilePositionY -= gameSpeed;

        this.commuter.update();

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