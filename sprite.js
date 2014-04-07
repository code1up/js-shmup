var Sprite = (function(Behaviours) {
    "use strict";
    
    var module = function(x, y, width, height) {
        this.behaviours = new Behaviours();

        this.x = x || 0;
        this.y = y || 0;

        this.width = width || 32;
        this.height = height || 32;

        this.alpha = 1.0;
    };

    module.prototype.move = function(dx, dy) {
        this.x += dx;
        this.y += dy;
    };

    module.prototype.moveTo = function(x, y) {
        this.x = x;
        this.y = y;
    };

    module.prototype.render = function(context2d) {
        // No-op.
    };

    module.prototype.update = function(dt) {
        return this.behaviours.update(dt);
    };

    return module;
})(Behaviours);
