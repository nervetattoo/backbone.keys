Backbone.keys beta
=============================

Created by Raymond Julin [@nervetattoo](http://twitter.com/nervetattoo)

A drop in replacement for Backbone.View that makes it easy to add
keyboard support in your views.

## Usage ##

Backbone.keys is made to work with your existing views.
To add arrow navigation to your app simply do:

```javascript
MyView = Backbone.View.extend({
    keys : {
        'onAdd' : 'shift a',
        'onNavigate' : ['left', 'right', 'up', 'down']
    },

    // The name variable is the name of the pressed key
    // (a in this case)
    onAdd : function(e, name) {
    },

    onNavigate : function(e, name) {
    }
});
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
