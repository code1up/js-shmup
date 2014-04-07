// TODO: credit https://github.com/jlongster.
(function(window, document) {
    "use strict";

    var _pressedKeys = {};

    function _setKey(event, status) {
        var code = event.keyCode;
        var key;

        switch(code) {
            case 32:
                key = "SPACE";
                break;

            case 37:
                key = "LEFT";
                break;

            case 38:
                key = "UP";
                break;

            case 39:
                key = "RIGHT";
                break;

            case 40:
                key = "DOWN";
                break;

            default:
                // Convert ASCII codes to letters.
                key = String.fromCharCode(code);
                break;
        }

        _pressedKeys[key] = status;
    }

    document.addEventListener("keydown", function(e) {
        _setKey(e, true);
    });

    document.addEventListener("keyup", function(e) {
        _setKey(e, false);
    });

    window.addEventListener("blur", function() {
        _pressedKeys = {};
    });

    window.isKeyDown = function(key) {
        return _pressedKeys[key.toUpperCase()];
    };
})(document, window);
