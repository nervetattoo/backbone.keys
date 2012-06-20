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
		'onNavigate' : 'left right up down'
	},

	onNavigate : function(e) {
	}
});
``` 

Note that the API is highly in flux at the moment:

## Download & Include ##

* [Development](https://raw.github.com/nervetattoo/backbone.touch/master/backbone.touch.js)
* [Production](https://raw.github.com/nervetattoo/backbone.touch/master/dist/backbone.touch.min.js)

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
