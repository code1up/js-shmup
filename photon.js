var Photon = (function(Sprite) {
    "use strict";

    var module = function(x, y) {
        var size = 2;

        Sprite.call(this, x, y, size, size);
    };

    module.prototype = Object.create(Sprite.prototype);

    return module;
})(Sprite);
