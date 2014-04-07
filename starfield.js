var Starfield = (function(Lamina, Star) {
	"use strict";

	var module = function(width, height, count) {
		Lamina.call(this);

		this.width = width;
		this.height = height;

        for (var i = 0; i < count; i++) {
            var star = new Star(this.width, this.height);

            this.add(star);
        }
	};

	module.prototype = Object.create(Lamina.prototype);

	return module;
})(Lamina, Star);
