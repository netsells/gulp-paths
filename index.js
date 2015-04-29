path = {
    bower: function(path) { return 'vendor/bower_components/' + path; },
    asset: function(path) { return 'resources/assets/' + path; },
    css: function(path) { return 'public/css/' + path; },
    js: function(path) { return 'public/js/' + path; },
    images: function(path) { return 'public/images/' + path; }
};

module.exports = path;