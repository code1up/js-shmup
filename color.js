var Color = (function() {
    "use strict";

    var module = function() {
    };

    module.black = "black";
    module.white = "white";
    module.red = "red";
    module.blue = "blue";
    module.green = "green";
    module.yellow = "yellow";

    module.rgba = function(r, g, b, a) {
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    };

    return module;
})();
