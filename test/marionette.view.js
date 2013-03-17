MarionetteView = Backbone.Marionette.View.extend({
    events : {
        "click :checkbox" : function(e) {
            var target = $(e.currentTarget);
            var key = target.attr('target');
            if (target.is(':checked'))
                this.keyOn(key, this.keys[key]);
            else
                this.keyOff(key);
            return this;
        }
    },
    keys : {
        'x' : function(e) {
            return this.log('You typed x');
        },
        'esc' : 'clear',
        'return' : 'submit'
    },

    render : function() {
        //this.keyOff('esc', 'clear');
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
