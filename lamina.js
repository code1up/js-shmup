var Lamina = (function() {
    "use strict";

    var module = function() {
        this.sprites = [];
    };

    module.prototype.add = function(sprite) {
        this.sprites.push(sprite);
    };

    module.prototype.render = function(context2d) {
        this.sprites.forEach(function(sprite) {
            sprite.render(context2d);
        });
    };

    module.prototype.update = function(dt) {
        for (var i = 0; i < this.sprites.length; i++) {
            var sprite = this.sprites[i];

            if (!sprite.update(dt)) {
                this.sprites.splice(i--, 1);
            }
        }        

        return true;
    };

    return module;
})();
