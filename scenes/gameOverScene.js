export class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    create() {
        // Fondo negro
        this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 1)');

        // Texto de "Game Over"
        this.add.text(this.scale.width / 2, this.scale.height / 2, 'Game Over', { fontSize: '64px', fill: '#ff0000' }).setOrigin(0.5);

        // Botón para reiniciar
        let restartButton = this.add.text(this.scale.width / 2, this.scale.height / 2 + 100, 'Restart', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
        restartButton.setInteractive({ useHandCursor: true });
        restartButton.on('pointerdown', () => {
            this.scene.stop('GameOverScene');
            this.scene.start('Level1');
        });

        // Botón para volver al menú principal
        let menuButton = this.add.text(this.scale.width / 2, this.scale.height / 2 + 150, 'Main Menu', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
        menuButton.setInteractive({ useHandCursor: true });
        menuButton.on('pointerdown', () => {
            this.scene.stop('GameOverScene');
            this.scene.start('StartScene');
        });
    }
}