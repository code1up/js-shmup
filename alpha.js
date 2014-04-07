var Alpha = (function(Behaviour) {
    "use strict";

    var module = function(sprite, t) {
        Behaviour.call(this, sprite);

        this.t = this.t0 = t;
    };

    module.prototype = Object.create(Behaviour.prototype);

    module.prototype.update = function(dt) {
        this.t = Math.max(0, this.t - dt);

        this.sprite.alpha = this.t / this.t0;
    };

    return module;
})(Behaviour);
