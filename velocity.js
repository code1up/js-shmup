var Velocity = (function(Behaviour) {
    "use strict";

    var module = function(sprite, vx, vy) {
        Behaviour.call(this, sprite);

        this.vx = vx;
        this.vy = vy;
    };

    module.prototype = Object.create(Behaviour.prototype);

    module.prototype.update = function(dt) {
        var dx = Behaviour.physics.ds(dt, this.vx);
        var dy = Behaviour.physics.ds(dt, this.vy);

        this.sprite.move(dx, dy);
    };

    return module;
})(Behaviour);
