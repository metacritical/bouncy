///<reference path="../../bower_components/phaser/typescript/phaser.d.ts" />
"use strict";
var ball_1 = require("./ball");
var BounceBall = (function () {
    function BounceBall() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
    }
    BounceBall.prototype.preload = function () {
        this.WorldX = this.game.world.centerX;
        this.WorldY = this.game.world.centerY;
        //Load Background
        this.game.load.image('logo', '/assets/images/phaser.io.jpeg');
        //Load Ball Graphics
        this.ball = new ball_1.Ball(this.game);
    };
    BounceBall.prototype.create = function () {
        //Create Background
        var logo = this.game.add.sprite(this.WorldX, this.WorldY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        this.game.stage.backgroundColor = "#blue";
        //Create Game Title Text
        var text = "Bouncy Ball Game";
        var style = { font: "65px Times New Roman", fill: "lightblue", align: "center" };
        var texthandle = this.game.add.text(130, 422, text, style);
        texthandle.setShadow(3, 3, 'rgba(80,0,230,0.7)', 4);
        //Create Bouncy Ball
        this.bouncy = this.ball.addSprite().setAnchor(0.5);
        this.ball.destroy();
    };
    BounceBall.prototype.update = function () {
        this.bouncy.rotate(0.2);
    };
    return BounceBall;
}());
window.onload = function () {
    var game = new BounceBall();
};
