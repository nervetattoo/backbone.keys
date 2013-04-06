describe('Test Backbone.keys', function() {
    var View = Backbone.View.extend({
        initialize: function(options) {
            options = options || {};
            _.extend(this, _.pick(options, 'keys', 'bindKeysScoped'));
        },
        noop: function(){},
        render: function() {
            this.$el.append('<input type="text" />');
            return this;
        }
    });

    beforeEach(function() {
        this.view = new View({
            bindKeysScoped: true,
            keys: {
                'enter': 'noop'
            }
        }).render();
    });

    it('responds to key events', function() {
        spyOn(this.view, 'noop');
        this.view.delegateEvents();
        this.view.$('input').trigger(
            $.Event('keydown', {which: 13})
        );
        expect(this.view.noop).toHaveBeenCalled();
    });

    it('does not respond to other keys than specified', function() {
        spyOn(this.view, 'noop');
        this.view.delegateEvents();
        this.view.$('input').trigger(
            $.Event('keydown', {which: 12})
        );
        expect(this.view.noop).not.toHaveBeenCalled();
    });
});
