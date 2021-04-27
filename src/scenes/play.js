class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    //preload assets for the play scene
    preload() {
        this.load.image('backTemp', './assets/backTemp.png');
    }

    create() {
        this.backTemp = this.add.tileSprite(0,0, game.config.width, game.config.height,
            'backTemp').setOrigin(0,0);
    }

    update() {
        if(GameDiff == false)
            this.backTemp.tilePositionY -= menuSpeed;
        else
        this.backTemp.tilePositionY -= gameSpeed;

        

    }

    playerExplode() {

    }
}