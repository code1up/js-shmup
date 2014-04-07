// TODO: credit http://addyosmani.com/resources/essentialjsdesignpatterns/book.
var Queue = (function() {
    "use strict";

    var _topics = {};
    var _uid = -1;

    var module = function() {
    };

    module.prototype.publish = function(topic, args) {
        if (!_topics[topic]) {
            return false;
        }

        var subscribers = _topics[topic];
        var length = subscribers ? subscribers.length : 0;

        while (length--) {
            subscribers[length].callback(topic, args);
        }

        return this;
    };

    module.prototype.subscribe = function(topic, callback) {
        if (!_topics[topic]) {
            _topics[topic] = [];
        }

        var token = (++_uid).toString();

        _topics[topic].push({
            token: token,
            callback: callback
        });

        return token;
    };

    module.prototype.unsubscribe = function(token) {
        _topics.forEach(function(topic) {
            if (_topics[topic]) {
                var length = _topics[topic].length;

                for (var i = 0; i < length; i++) {
                    if (_topics[topic][i].token === token) {
                        _topics[topic].splice(i, 1);

                        return token;
                    }
                }
            }
        });

        return this;
    };

    return module;
}());
