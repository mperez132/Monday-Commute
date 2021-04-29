class Linda extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
       
        this.movementSpeed = 3;
    }

    update(){
        if(keyLEFT.isDown && this.x >= borderUISize) {
            this.x -= this.movementSpeed;
        }
        else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize) {
                this.x += this.movementSpeed;
        }
    }
   
}
  
