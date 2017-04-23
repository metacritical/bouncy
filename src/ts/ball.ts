///<reference path="../../bower_components/phaser/typescript/phaser.d.ts" />

export class Ball {

    game: Phaser.Game;
    graphics: Phaser.Graphics
    sprite: Phaser.Sprite

    constructor(gameInstance){
        this.game = gameInstance;
        this.create();
    }

    create () {
        this.graphics = this.game.add.graphics(0,0);
        this.graphics.lineStyle(0);
        this.graphics.beginFill(0xFF0000, 0.5);
        this.graphics.drawCircle(0, 30, 30);
        this.graphics.beginFill(0xFFFFFF, 0.3)
        this.graphics.drawCircle(0, 22, 15)
        this.graphics.endFill();
    }

    destroy () {
        this.graphics.destroy();
    }

    rasterize(){
        return this.graphics.generateTexture();
    }

    addSprite () {
        this.sprite = this.game.add.sprite(20, 550, this.rasterize());
        return this;
    }

    setAnchor(radius: number) {
        this.sprite.anchor.set(radius);
        return this;
    }

    rotate(rads: number){
        this.sprite.rotation += rads;
    }

}
