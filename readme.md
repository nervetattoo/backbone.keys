Backbone.keys beta
=============================

Easily add keyboard support in your Backbone views

## Usage ##

Backbone.keys is made to work with your existing views.
To add arrow navigation to your app simply do:

```javascript
MyView = Backbone.View.extend({
    keys : {
        'a+shift' : function(e, name) {},
        'left right up down': 'onNavigate'
    },

    // The name variable is the name of the pressed key
    // (a in this case)
    onNavigate : function(e, name) {
    }
});
``` 

### Manually binding and unbinding ###

You can bind and unbind events manually:

```js
this.keyOn('return', this.onEnter);

this.keyOff('return', this.onEnter);
// Unbind all for key
this.keyOff('return');
// Unbind all
this.keyOff();
```

Note that the API is highly in flux at the moment:

## Download & Include ##

* [Development](https://raw.github.com/nervetattoo/backbone.keys/master/backbone.keys.js)
* [Production](https://raw.github.com/nervetattoo/backbone.keys/master/dist/backbone.keys.min.js)

Depends on Underscore, Backbone and an underlying DOM library that handles event bindings.

Include in your application *after* DOM library, Underscore, and Backbone have been
included.

``` html
<script src="/js/jquery.js"></script>
<script src="/js/underscore.js"></script>
<script src="/js/backbone.js"></script>

<script src="/js/backbone.keys.js"></script>
```

Note that backbone.keys currently overwrites `Backbone.View` to make its usage
a no-op, part from including it.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
(c) [Raymond Julin](http://twitter.com/nervetattoo)
