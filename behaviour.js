var Behaviour = (function(Physics) {
	"use strict";

	var g = 10.0;
	var scalev = 500.0;

    var module = function(sprite) {
        this.sprite = sprite;
    };

    module.physics = new Physics(g, scalev);

    module.prototype.update = function(dt) {
        // No-op.
    };

    return module;
})(Physics);
