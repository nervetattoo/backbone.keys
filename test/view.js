View = Backbone.View.extend({
    bindKeysScoped : false,

    keys : {
        'navigate' : ['shift left', 'right', 'up', 'down']
    },

    navigate : function(e, name) {
        this.$el.append(
            this.make('li', {}, name)
        );
    }
});
