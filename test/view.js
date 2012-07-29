View = Backbone.View.extend({
    keys : {
        'x' : function(e) {
            return this.log('You typed x, lol');
        },
        'esc' : 'clear',
        'return' : 'submit'
    },

    render : function() {
        this.keyOff('esc', 'clear');
    },

    submit : function(e) {
        this.log(
            'Submitted: ' + this.$('#text').val()
        );
        return this;
    },

    clear : function(e) {
        this.$('#text').val('');
        return this;
    },

    log : function(msg) {
        this.$('#log').append(
            this.make('p', {}, msg)
        );
        return this;
    }
});
