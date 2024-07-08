export class PauseScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'PauseScene'
        });
    }

    create() {
        // Fondo semi-transparente
        this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 0.5)');

        // Texto de "Pausa"
        this.add.text(this.scale.width / 2, this.scale.height / 2 - 100, 'Paused', { fontSize: '64px', fill: '#ffffff' }).setOrigin(0.5);

        // Botón para reanudar
        let resumeButton = this.add.image(this.scale.width / 2, this.scale.height / 2, 'button')
            .setOrigin(0.5)
            .setInteractive();

        let resumeButtonText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Resume', {
            fontSize: '32px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        resumeButton.on('pointerdown', () => {
            this.scene.resume('Level1');
            this.scene.stop();
        });

        resumeButton.on('pointerover', () => {
            resumeButtonText.setStyle({ fill: '#ff0' });
        });

        resumeButton.on('pointerout', () => {
            resumeButtonText.setStyle({ fill: '#ffffff' });
        });

        // Botón para volver al menú principal
        let mainMenuButton = this.add.image(this.scale.width / 2, this.scale.height / 2 + 100, 'button')
            .setOrigin(0.5)
            .setInteractive();

        let mainMenuButtonText = this.add.text(this.scale.width / 2, this.scale.height / 2 + 100, 'Main Menu', {
            fontSize: '32px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        mainMenuButton.on('pointerdown', () => {
            this.scene.stop('Level1');
            this.scene.start('StartScene');
        });

        mainMenuButton.on('pointerover', () => {
            mainMenuButtonText.setStyle({ fill: '#ff0' });
        });

        mainMenuButton.on('pointerout', () => {
            mainMenuButtonText.setStyle({ fill: '#ffffff' });
        });
    }
}