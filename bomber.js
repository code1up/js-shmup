var Bomber = (function(Sprite) {
    "use strict";

    var module = function(x, y, width, height) {
        Sprite.apply(this, arguments);
    };

    module.prototype = Object.create(Sprite.prototype);

    return module;
})(Sprite);
