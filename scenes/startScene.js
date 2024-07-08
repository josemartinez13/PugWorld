export class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }

    preload() {
        this.load.image('startBackground', '../assets/img/fondo/fondo.jpeg');
    }

    create() {
        this.add.image(400, 300, 'startBackground');

        let startButton = this.add.text(400, 300, 'Empezar Juego', { fontSize: '64px', fill: 'white' })
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerdown', () => this.startGame());
    }

    startGame() {
        this.scene.start('level1');
    }
}