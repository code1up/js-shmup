var Shmup = (function(document, Game, Starfield, Particle, Random) {
    "use strict";

    var module = function() {
        var width = 800;
        var height = 600;

        var starCount = 100;

        Game.call(this, width, height);

        // this.starfield = [];
        this.particles = [];

        var starfield = new Starfield(this.width, this.height, starCount);

        this.laminas.add(starfield);
    };

    module.prototype = Object.create(Game.prototype);

    module.prototype.update = function(dt) {
        Game.prototype.update.call(this, dt);

        this.updateParticles(dt);

        if (Math.random() > 0.8) {
            this.explode();
        }
    };

    /*
    module.prototype.updateStarfield = function(dt) {
        this.starfield.forEach(function(star) {
            star.update(dt);
        });
    };
    */

    module.prototype.updateParticles = function(dt) {
        for (var i = 0; i < this.particles.length; i++) {
            if (!this.particles[i].update(dt)) {
                this.particles.splice(i--, 1);
            }
        }        
    };

    module.prototype.explode = function() {
        var x = this.width * Math.random();
        var y = this.height * Math.random();
        var count = Random.range(2, 100);

        var r = Math.floor(255 * Math.random());
        var g = Math.floor(255 * Math.random());
        var b = Math.floor(255 * Math.random());

        for (var i = 0; i < count; i++) {
            var particle = new Particle(x, y, r, g, b);

            this.particles.push(particle);
        }
    };
    
    module.prototype.render = function() {
        this.clearCanvas();

        Game.prototype.render.call(this, this.context2d);

        this.particles.forEach(function(particle) {
            particle.render(this.context2d);
        }, this);
    };

    return module;
})(document, Game, Starfield, Particle, Random);

var shmup = new Shmup();

document.body.appendChild(shmup.canvas);

shmup.start();
