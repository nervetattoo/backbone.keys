//     Backbone.keys.js 0.1

//     (c) 2012 Raymond Julin, Keyteq AS
//     Backbone.keys may be freely distributed under the MIT license.
(function() {
    // Alias the libraries from the global object
    var Backbone = this.Backbone;
    var _ = this._;
    var document = this.document;
    var oldDelegateEvents = Backbone.View.prototype.delegateEvents;

    Backbone.View = Backbone.View.extend({

        // Allow pr view what specific event to use
        // Keydown is defaulted as it allows for press-and-hold
        bindKeysOn : 'keydown',

        // The Backbone-y way would be to have
        // keys scoped to `this.el` as default,
        // however it would be a bigger surprise
        // considering how you'd expect keyboard
        // events to work
        // But users should be able to choose themselves
        bindKeysScoped : false,

        // Hash of bound listeners
        _keyEventBindings : null,

        // Override delegate events
        delegateEvents : function(events) {
            // First delegate original events
            oldDelegateEvents.apply(this, events);

            // Now delegate keys
            this.delegateKeys();
        },

        // Actual delegate keys
        delegateKeys : function(keys) {
            this.undelegateKeys();
            keys = keys || (this.keys);
            if (keys) {
                var mapper = _.bind(this._keyEvent, this);
                _(keys).each(mapper);
                if (this.bindKeysScoped) {
                    var events = {};
                    events[this.bindKeysOn] = this._triggerKey;
                    oldDelegateEvents.apply(this, this.delegateKeys);
                }
                else {
                    Backbone.$(document).bind(this.bindKeysOn, _.bind(this._triggerKey, this));
                }
            }
        },

        // Undelegate keys
        undelegateKeys : function() {
            this._keyEventBindings = {};
        },

        // Utility to get the name of a key
        // based on its keyCode
        keyName : function(keyCode) {
            var keyName;
            for (keyName in this._keyMap)
                if (this._keyMap[keyName] === keyCode) return keyName;
            return null;
        },

        // Internal real listener for key events that
        // forwards any relevant key presses
        _triggerKey : function(e) {
            _(this._keyEventBindings[e.which]).each(function(listener) {
                var trigger = true;
                if (listener.modifiers) {
                    trigger = _(listener.modifiers).all(function(modifier) {
                        return e[modifier + 'Key'] === true;
                    });
                }
                if (trigger) listener.method(e, listener.key);
            });
        },

        // Doing the real work of binding key events
        _keyEvent : function(key, method) {
            // Should always turn into an array
            if (_.isArray(key)) {
                var l = key.length;
                while (l--)
                    this._keyEvent(key[l], method);
                return;
            }

            var components = key.split(' ');
            key = components.pop().toLowerCase();
            var keyCode = this._keyMap[key];

            if (!_(this._keyEventBindings).has(keyCode))
                this._keyEventBindings[keyCode] = [];

            this._keyEventBindings[keyCode].push({
                key : key,
                modifiers : (components || false),
                method: _.bind(this[method], this)
            });
        },

        // Map keyname to keycode
        _keyMap : {
            backspace: 8,
            tab: 9,
            enter: 13,
            space: 32,

            // Temporal modifiers
            shift: 16,
            ctrl: 17,
            alt: 18,
            meta: 91,

            // Modal
            caps_lock: 20,
            esc: 27,

            // Navigation
            page_up: 33,
            page_down: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,

            // Insert/delete
            insert: 45,
            'delete': 46,

            // Numerics
            0: 48,
            1: 49,
            2: 50,
            3: 51,
            4: 52,
            5: 53,
            6: 54,
            7: 55,
            8: 56,
            9: 57,

            // Alphabet
            a: 65,
            b: 66,
            c: 67,
            d: 68,
            e: 69,
            f: 70,
            g: 71,
            h: 72,
            i: 73,
            j: 74,
            k: 75,
            l: 76,
            m: 77,
            n: 78,
            o: 79,
            p: 80,
            q: 81,
            r: 82,
            s: 83,
            t: 84,
            u: 85,
            v: 86,
            w: 87,
            x: 88,
            y: 89,
            z: 90,

            // F keys
            f1: 112,
            f2: 113,
            f3: 114,
            f4: 115,
            f5: 116,
            f6: 117,
            f7: 118,
            f8: 119,
            f9: 120,
            f10: 121,
            f11: 122,
            f12: 123,

            num_lock: 144
        }
    });
}).call(this);
