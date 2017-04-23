(function () {
'use strict';

///<reference path="../../bower_components/phaser-ce/typescript/phaser.d.ts" />
var Ball = (function () {
    function Ball(gameInstance) {
        this.game = gameInstance;
        this.create();
    }
    Ball.prototype.create = function () {
        this.graphics = this.game.add.graphics(0, 0);
        this.graphics.lineStyle(0);
        this.graphics.beginFill(0xFF0000, 0.5);
        this.graphics.drawCircle(0, 30, 30);
        this.graphics.beginFill(0xFFFFFF, 0.3);
        this.graphics.drawCircle(0, 22, 15);
        this.graphics.endFill();
    };
    Ball.prototype.destroy = function () {
        this.graphics.destroy();
    };
    Ball.prototype.rasterize = function () {
        return this.graphics.generateTexture();
    };
    Ball.prototype.addSprite = function () {
        this.sprite = this.game.add.sprite(20, 550, this.rasterize());
        return this;
    };
    Ball.prototype.setAnchor = function (radius) {
        this.sprite.anchor.set(radius);
        return this;
    };
    Ball.prototype.rotate = function (rads) {
        this.sprite.rotation += rads;
    };
    return Ball;
}());

///<reference path="../../bower_components/phaser-ce/typescript/phaser.d.ts" />
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
        this.ball = new Ball(this.game);
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

}());
