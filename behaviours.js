var Behaviours = (function() {
	"use strict";
	
	var module = function() {
		this.behaviours = [];
	};

	module.prototype.add = function(behaviour) {
		this.behaviours.push(behaviour);
	};

	module.prototype.update = function(dt) {
		this.behaviours.forEach(function(behaviour) {
			behaviour.update(dt);
		});
	};

	return module;
})();
