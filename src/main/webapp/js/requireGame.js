require(['./common'], function () {
    require(['jquery', 'Cell', 'Game', 'GamePresenter'], function($) {

        $(document).ready(function() {
            presenter = GamePresenter();
            presenter.init();
        });

        $(document).keydown(function(event) {
            if (event.which == 37) {
                presenter.move('left');
            };
            if (event.which == 38) {
                presenter.move('up');
            };
            if (event.which == 39) {
                presenter.move('right');
            };
            if (event.which == 40) {
                presenter.move('down');
            };
        });
    });
});
