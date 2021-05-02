class Traffic extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.movementSpeed = 2;
        this.lane = 0;
    }
    update() {
        this.y += this.movementSpeed;
        if(this.y >= game.config.height) {  
        this.lane = Math.floor(Math.random() * (4-1) + 1);
        this.texturePicker = Math.floor(Math.random() * (3-1) + 1);
        console.log(this.texturePicker);
            this.reset();
        }
    }



    reset() {
        if(this.texturePicker == 1) {
            this.setTexture('hazard1');
        } else if (this.texturePicker == 2) {
            this.setTexture('hazard2');
        }
        this.y = 0;
        if(this.lane == 1){
            this. x = 155;
        } else if(this.lane == 2){
            this.x = 320;
        }else if(this.lane == 3){
            this.x = 485;
        }
        
    }

}
