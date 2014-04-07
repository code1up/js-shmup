var Laminas = (function() {
	"use strict";
	
	var module = function() {
		this.laminas = [];
	};

	module.prototype.add = function(lamina) {
		this.laminas.push(lamina);
	};

	module.prototype.update = function(dt) {
        for (var i = 0; i < this.laminas.length; i++) {
            var lamina = this.laminas[i];

            if (!lamina.update(dt)) {
                this.laminas.splice(i--, 1);
            }
        }        
	};

	module.prototype.render = function(context2d) {
		this.laminas.forEach(function(lamina) {
			lamina.render(context2d);
		});
	};

	return module;
})(Lamina);
