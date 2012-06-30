View = Backbone.View.extend({
    bindKeysScoped : false,

    keys : {
        'left+shift' : 'navigate',
        'left+shift right up down' : function(e) {
            console.log(this._keyEventBindings);
        }
    },

    navigate : function(e, name) {
        this.$el.append(
            this.make('li', {}, name)
        );
    }
});
