import { Player } from "./player.js";
import { Plataformas } from "./plataformas.js";
import { Enemy } from "./enemy.js";

export class Level1 extends Phaser.Scene {
    constructor() {
        super({ key: "level1" });
        this.player = new Player(this);
        this.Plataformas = new Plataformas(this);
    }

    preload() {
        this.load.spritesheet('liebre', '../assets/img/Enemigos/Liebre/liebre-normal.png', { frameWidth: 64, frameHeight: 64 });
        

        this.Plataformas.preload();
        this.player.preload();
    }

    create() {
        this.Plataformas.create();
        this.player.create();

        // Instancia de enemigos
        this.enemies = this.physics.add.group();

        let hare1 = new Enemy(this, 800, 200, 'liebre', 0.6, { width: 50, height: 40, offsetX: 7, offsetY: 12 });
        let hare2 = new Enemy(this, 900, 200, 'liebre', 0.6, { width: 50, height: 40, offsetX: 7, offsetY: 12 });
        

        this.enemies.add(hare1);
        this.enemies.add(hare2);
        

        // Colisiones
        this.physics.add.collider(this.player.Player, this.Plataformas.layer3);
        this.physics.add.collider(this.player.Player, this.Plataformas.layer4);
        this.physics.add.collider(this.enemies, this.Plataformas.layer3);
        this.physics.add.collider(this.enemies, this.Plataformas.layer4);
        this.physics.add.collider(this.player.Player, this.enemies, this.playerHit, null, this);
        this.physics.world.setBounds(0, 0, 4800, 320); // Ajustar los límites del mundo

        // Configuración de la cámara
        this.cameras.main.setBounds(0, 0, 4800, 320); // Ajustar los límites de la cámara
        this.cameras.main.startFollow(this.player.Player);
        this.cameras.main.setZoom(1.5);
        this.cameras.main.setLerp(0.1, 0.1);

        // Input para el menú de pausa
        this.input.keyboard.on('keydown-P', () => {
            this.scene.pause();
            this.scene.launch('PauseScene');
        });
    }

    update() {
        // Actualización del jugador y enemigos
        this.player.update();
        this.enemies.getChildren().forEach(enemy => {
            enemy.update();
        })
    }
}