var Random = (function() {
	"use strict";

	var module = function() {
	};

	module.range = function(min, max) {
		return min + Random.random(max - min);
	};

	module.random = function(max) {
		return Math.random() * max;
	};

	return module;
})();
