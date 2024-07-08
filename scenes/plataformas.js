export class Plataformas{
    constructor(scene){
        this.myScene = scene
    }

    preload(){
        this.myScene.load.image('tilesFondo', '../assets/img/tilesets/_Complete_static_BG.png')
        this.myScene.load.image('tilesBlocks', '../assets/img/tilesets/Blocks.png')
        this.myScene.load.image('tilesFlowers', '../assets/img/tilesets/Flowers.png')
        this.myScene.load.image('tilesGrassland', '../assets/img/tilesets/Grassland_entities.png')
        this.myScene.load.image('tilesLava', '../assets/img/tilesets/Lava_frames.png')
        this.myScene.load.image('tilesSnack', '../assets/img/tilesets/Snack_machine_Bench_Trash_bin.png')
        this.myScene.load.image('tilesStart', '../assets/img/tilesets/Start_(Idle).png')
        this.myScene.load.image('tilesTerrain', '../assets/img/tilesets/Terrain.png')
        this.myScene.load.image('tilesWater', '../assets/img/tilesets/Water_frames.png')

        this.myScene.load.tilemapTiledJSON('tilemapJSON', '../json/Mapa.json')
    }

    create(){
        this.map = this.myScene.make.tilemap({key: 'tilemapJSON'})

        this.tileset1 = this.map.addTilesetImage('Blocks (16 x 16)', 'tilesBlocks');
        this.tileset2 = this.map.addTilesetImage('Flowers (16 x 16)', 'tilesFlowers');
        this.tileset3 = this.map.addTilesetImage('Fondo', 'tilesFondo');
        this.tileset4 = this.map.addTilesetImage('Grassland_entities (16 x 16)', 'tilesGrassland');
        this.tileset5 = this.map.addTilesetImage('Lava_frames (16 x 32)', 'tilesLava');
        this.tileset6 = this.map.addTilesetImage('Snack_machine_Bench_Trash_bin (16 x 16)', 'tilesSnack');
        this.tileset7 = this.map.addTilesetImage('Start (Idle)', 'tilesStart');
        this.tileset8 = this.map.addTilesetImage('Terrain (16x16)', 'tilesTerrain');
        this.tileset9 = this.map.addTilesetImage('Water_frames (16 x 32)', 'tilesWater');
        
        this.layer1 = this.map.createLayer("Fondo", this.tileset3, 0, 0);
        this.layer2 = this.map.createLayer("Vegetacion", [this.tileset2, this.tileset4, this.tileset6], 0, 0);
        this.layer3 = this.map.createLayer("Terreno", [this.tileset5, this.tileset7, this.tileset8, this.tileset9], 0, 0);
        this.layer4 = this.map.createLayer("Plataformas", this.tileset1, 0, 0);
        
        this.layer3.setCollisionByProperty({ collision: true });
        this.layer4.setCollisionByProperty({ collision: true });
    }
}