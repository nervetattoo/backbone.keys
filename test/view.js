View = Backbone.View.extend({
    bindKeysScoped : false,

    keys : {
        'navigate' : 'left right up down'
    },

    navigate : function(e) {
        this.$el.append(
            this.make('li', {}, this.keyName(e.which))
        );
    }
});
