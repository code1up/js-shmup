var Gravity = (function(Behaviour) {
    "use strict";

    var module = function(sprite, u) {
        Behaviour.call(this, sprite);

        this.v = u;
    };

    module.prototype = Object.create(Behaviour.prototype);

    module.prototype.update = function(dt) {
        this.v = Behaviour.physics.vg(dt, this.v);

        var dy = Behaviour.physics.ds(dt, this.v);

        this.sprite.move(0, dy);
    };

    return module;
})(Behaviour);
