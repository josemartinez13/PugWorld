export class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, scale, bodyConfig) {
        super(scene, x, y, texture, scale, bodyConfig);
        this.setScale(scale);
        this.myScene = scene;
        this.myScene.physics.world.enable(this);
        this.myScene.add.existing(this);
        this.setCollideWorldBounds(true);

        this.body.setGravityY(300);
        this.body.setSize(bodyConfig.width, bodyConfig.height);
        this.body.setOffset(bodyConfig.offsetX, bodyConfig.offsetY);
        this.isMovingRight = true;
        this.initAnimations();
    }

    initAnimations() {
        if (this.texture.key === 'liebre') {

            this.myScene.anims.create({
                key: 'hareMove',
                frames: this.myScene.anims.generateFrameNumbers('liebre', { start: 12, end: 14 }),
                frameRate: 10,
                repeat: -1
            });
        } 
    }

    update() {
        if (this.isMovingRight) {
            this.setVelocityX(50);
            this.anims.play(this.texture.key === 'liebre' ? 'hareMove' : 'spiderMove', true);
            this.flipX = true; // Asegurarse de que no esté volteado si va a la derecha

            // Verificar si ha llegado al borde derecho
            if (this.body.blocked.right) {
                this.isMovingRight = false;
                this.flipX = false; // Voltear sprite hacia la izquierda al cambiar de dirección
            }
        } else {
            this.setVelocityX(-50);
            this.anims.play(this.texture.key === 'liebre' ? 'hareMove' : 'spiderMove', true);
            this.flipX = false; // Asegurarse de que esté volteado si va a la izquierda

            // Verificar si ha llegado al borde izquierdo
            if (this.body.blocked.left) {
                this.isMovingRight = true;
                this.flipX = true; // Voltear sprite hacia la derecha al cambiar de dirección
            }
        }
    }
}