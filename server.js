var express =      require('express'),
    http =         require('http'),
    config =       require('./config'),
    dotenv =       require('dotenv');


var app = module.exports = express();

dotenv.load();

app.set('showStackError', true);

// Prettify HTML
app.locals.pretty = true;

// Configure Logging
config.log(app);

// Configure parsers
config.parsers(app);

// Configure DB
config.db(app);

// Configure authentication
config.authentication(app);

// Routes
app.use('/api/clients/:userId/stories', require('./features/stories'));
app.use('/api/clients/:userId/users', require('./features/users'));


var port = process.env.PORT || 4000;

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});
