var Physics = (function() {
	"use strict";
	
	var module = function(g, scalev) {
		this.g = 1.0;
		this.scalev = scalev;
	};

	module.prototype.ds = function(dt, v) {
		return 0.5 * this.scalev * v * dt;
	};

	module.prototype.vg = function(dt, u) {
		var v = u + (this.g * dt);

		return v;
	};

	return module;
})();
