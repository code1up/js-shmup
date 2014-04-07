var Game = (function(window, document, Color, Physics, Laminas) {
    "use strict";

    var module = function(width, height) {
        this.width = width || 800;
        this.height = height || 600;

        this.canvas = this.makeCanvas(this.width, this.height);
        this.context2d = this.canvas.getContext("2d");

        this.laminas = new Laminas();

        this.lastTime = 0;
    };

    module.prototype.makeCanvas = function(width, height) {
        var canvas = document.createElement("canvas");

        canvas.width = width;
        canvas.height = height;

        return canvas;
    };

    module.prototype.loop = function() {
        var self = this;

        var innerLoop = function() {
            var now = Date.now();
            var dt = (now - self.lastTime) / 1000.0;

            self.update(dt);
            self.render(dt);

            self.lastTime = now;        

            window.requestAnimationFrame(innerLoop);
        };

        innerLoop();
    };
    
    module.prototype.clearCanvas = function(fillStyle) {
        this.context2d.fillStyle = fillStyle || Color.black;
        this.context2d.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };

    module.prototype.render = function() {
        this.laminas.render(this.context2d);
    };

    module.prototype.update = function(dt) {
        this.laminas.update(dt);
    };

    module.prototype.start = function() {
        this.lastTime = Date.now();

        this.loop();
    };

    return module;
})(window, document, Color, Physics, Laminas);
