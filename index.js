function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var express = require('express');
var gumerPSN = require(__dirname + '/lib/psn.js');
var app = express();

var zodiacId = 'NPWR11367_00';
var accounts = [];

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
});
