class Linda extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
       
        this.movementSpeed = 5;
    }

    update(){
        if(keyLEFT.isDown && this.x >= borderUISize) {
            this.x -= this.movementSpeed;
        }
        else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize) {
                this.x += this.movementSpeed;
        }
        this.x = Phaser.Math.Clamp(this.x, borderUISize + borderPadding,
            game.config.width - borderUISize - borderPadding);
    }
   
}
  
