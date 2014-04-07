var Star = (function(Sprite, Velocity, Color) {
    "use strict";

    var module = function(starfieldWidth, starfieldHeight) {
        var size = 4;

        this.starfieldWidth = starfieldWidth;
        this.starfieldHeight = starfieldHeight;

        this.randomize(true);

        Sprite.call(this, this.x, this.y, size, size);

        this.behaviours.add(new Velocity(this, 0, this.vy));
    };

    module.colors = [
        Color.white,
        Color.red,
        Color.blue,
        Color.green,
        Color.yellow
    ];

    module.prototype = Object.create(Sprite.prototype);

    module.prototype.randomize = function(firstTime) {
        this.x = Math.random() * this.starfieldWidth;
        this.y = firstTime ? Math.random() * this.starfieldHeight : -this.height;

        var colorIndex = Math.floor(Math.random() * Star.colors.length);

        this.color = Star.colors[colorIndex];

        this.vy = 0.5 + (0.5 * Math.random());
    };

    module.prototype.render = function(context2d) {
        context2d.fillStyle = this.color;
        context2d.fillRect(this.x, this.y, this.height, this.width);
    };

    module.prototype.update = function(dt) {
        Sprite.prototype.update.call(this, dt);

        if (this.y >= this.starfieldHeight) {
            this.randomize();
        }

        return true;
    };

    return module;
})(Sprite, Velocity, Color);
