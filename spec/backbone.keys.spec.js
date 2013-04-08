describe('Test Backbone.keys', function() {
    var View = Backbone.View.extend({
        initialize: function(options) {
            options = options || {};
            _.extend(this, options);
        },
        render: function() {
            this.$el.append('<input type="text" />');
            return this;
        }
    });

    beforeEach(function() {
        this.view = new View({
            bindKeysScoped: true,
            noop: function(){},
            keys: {
                'enter': 'noop'
            }
        }).render();
    });

    it('responds to key events', function() {
        spyOn(this.view, 'noop');
        this.view
            .delegateEvents()
            .$('input').trigger($.Event('keydown', {which: 13}));
        expect(this.view.noop).toHaveBeenCalled();
    });

    it('does not respond to other keys than specified', function() {
        spyOn(this.view, 'noop');
        this.view
            .delegateEvents()
            .$('input').trigger($.Event('keydown', {which: 12}));
        expect(this.view.noop).not.toHaveBeenCalled();
    });

    it('delegateEvents delegates custom events', function() {
        spyOn(this.view, 'noop');
        this.view.delegateEvents({'focus input' : 'noop'}).$('input').focus();
        expect(this.view.noop).toHaveBeenCalled();
    });
});
