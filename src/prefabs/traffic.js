class Traffic extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.movementSpeed = 2;
    }
    update() {
        this.x -= this.movementSpeed;
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }
    reset() {
        this.x = game.config.width;
    }
}