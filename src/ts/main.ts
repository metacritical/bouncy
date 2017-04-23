///<reference path="../../bower_components/phaser-ce/typescript/phaser.d.ts" />

import { Ball } from "./ball"

class BounceBall {

    game: Phaser.Game;
    Ball: Phaser.Graphics;
    WorldX: number;
    WorldY: number;
    bouncy: Ball;
    ball: Ball;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create , update: this.update });
    }

    preload() {
        this.WorldX =  this.game.world.centerX;
        this.WorldY = this.game.world.centerY;
        //Load Background
        this.game.load.image('logo', '/assets/images/phaser.io.jpeg');

        //Load Ball Graphics
        this.ball = new Ball(this.game)
    }

    create() {
        //Create Background
        var logo = this.game.add.sprite(this.WorldX, this.WorldY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        this.game.stage.backgroundColor = "#blue";

        //Create Game Title Text
        var text = "Bouncy Ball Game";
        var style = {font: "65px Times New Roman", fill: "lightblue", align: "center"}
        var texthandle = this.game.add.text(130,422, text, style)
        texthandle.setShadow(3, 3, 'rgba(80,0,230,0.7)', 4);

        //Create Bouncy Ball
        this.bouncy = this.ball.addSprite().setAnchor(0.5)
        this.ball.destroy();
    }

    update () {
        this.bouncy.rotate(0.2);
    }

}

window.onload = () => {
    var game = new BounceBall();
}
