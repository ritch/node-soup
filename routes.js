require('./app')

.get('/', function(req, res) {
    res.render('index', {
        locals: {
            title: 'node soup'
        }
    });
});

