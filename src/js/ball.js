///<reference path="../../bower_components/phaser/typescript/phaser.d.ts" />
"use strict";
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
exports.Ball = Ball;
