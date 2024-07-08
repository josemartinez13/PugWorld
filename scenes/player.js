export class Player {
    constructor(scene) {
        this.myScene = scene;
    }

    preload() {
        // Cargar spritesheets
        this.myScene.load.spritesheet('playerRun', '../assets/img/Player/Run.png', { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        // Player animaciones
        this.myScene.anims.create({
            key: 'Run',
            frames: this.myScene.anims.generateFrameNumbers('playerRun', { start: 0, end: 7 }),
            frameRate: 15,
            repeat: -1
        });

        this.myScene.anims.create({
            key: 'Idle',
            frames: [{ key: 'playerRun', frame: 0 }],
            frameRate: 15,
        });

        this.myScene.anims.create({
            key: 'Jump',
            frames: [{ key: 'playerRun', frame: 4 }],
            frameRate: 15,
        });

        this.myScene.anims.create({
            key: 'Fall',
            frames: [{ key: 'playerRun', frame: 6 }],
            frameRate: 15,
            
        });

        // Physics y controles
        this.Player = this.myScene.physics.add.sprite(50, 50, 'playerRun');
        this.Player.setScale(0.6);
        this.Player.body.setSize(this.Player.width * 0.4, this.Player.height * 0.4);
        this.Player.body.setOffset(this.Player.width * 0.5, this.Player.height * 0.5);
        this.Player.setBounce(0.2);
        this.Player.setCollideWorldBounds(true);

        // Controles
        this.keyW = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyA = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


        // Inicializar la dirección
        this.facingDirection = 'right'; // Por defecto a la derecha
    }

    update() {
        if (this.keyD.isDown) {
            this.Player.setVelocityX(120);
            this.Player.play('Run', true);
            this.Player.flipX = false;
            this.facingDirection = 'right';
        } else if (this.keyA.isDown) {
            this.Player.setVelocityX(-120);
            this.Player.play('Run', true);
            this.Player.flipX = true;
            this.facingDirection = 'left';
        } else {
            this.Player.setVelocityX(0);
            this.Player.play('Idle', true);
        }

        // Control de salto
        if (this.keyW.isDown && this.Player.body.blocked.down) {
            this.Player.setVelocityY(-370);
            this.Player.play('Jump', true)
        }

        // Control de caída
        if (!this.Player.body.touching.down) {
            if (this.Player.body.velocity.y > 0) {
                this.Player.anims.play('Fall', true);
            }
        }
    }
}