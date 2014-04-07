var Particle = (function(Sprite, Velocity, Gravity, Alpha, Color) {
    "use strict";

    var module = function(x, y, r, g, b) {
        var size = 8;

        var vy = -2.0 + (3.0 * Math.random());
        var vx = -1.0 + (2.0 * Math.random());

        this.r = r;
        this.g = g;
        this.b = b;

        Sprite.call(this, x, y, size, size);

        var gravity = new Gravity(this, vy);
        var velocity = new Velocity(this, vx, 0);
        var alpha = new Alpha(this, 0.5 + (2.0 * Math.random()));

        this.behaviours.add(gravity);
        this.behaviours.add(velocity);
        this.behaviours.add(alpha);
    };

    module.prototype = Object.create(Sprite.prototype);

    module.prototype.render = function(context2d) {

        // context2d.save();
        context2d.fillStyle = Color.rgba(this.r, this.g, this.b, this.alpha);
        context2d.fillRect(this.x, this.y, this.height, this.width);
        // context2d.restore();
    };

    module.prototype.update = function(dt) {
        Sprite.prototype.update.call(this, dt);

        return this.alpha > 0;
    };

    return module;
})(Sprite, Velocity, Gravity, Alpha, Color);
