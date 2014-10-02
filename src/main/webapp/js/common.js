requirejs.config({
    baseUrl: 'js',
    paths: {
      jquery: 'jquery.min'
    }
});

requirejs(['jquery', 'grooscript.min', 'grooscript-tools'], function($) {

});
