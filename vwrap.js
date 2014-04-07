var VWrap = (function(Behaviour) {
    "use strict";

    var module = function(sprite, miny, maxy) {
        Behaviour.call(this, sprite);

        this.miny = miny;
        this.maxy = maxy;
    };

    module.prototype = Object.create(Behaviour.prototype);

    module.prototype.update = function(dt) {
    };

    return module;
})(Behaviour);
