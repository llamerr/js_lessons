// server.js
var express    = require('express');
var bodyParser = require('body-parser');
var vhost      = require('vhost')

var rapp = express();
rapp.use(bodyParser.urlencoded({ extended: true }));
rapp.use(bodyParser.json());
rapp.use(express.static('public'));

//routes
var router = express.Router();
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});
var users = [
	{ id: 1, username: 'John Doe', age: 18 },
	{ id: 2, username: 'Julianna Doel', age: 20 },
	{ id: 3, username: 'Joshua Doely', age: 21 },
	{ id: 4, username: 'Jerald Dougler', age: 23 },
	{ id: 5, username: 'Jeronimo Doegerthy', age: 60 }
]
router.get('/users', function(req, res) {
	res.json(users);
});
rapp.use('/api', router);

var app = express();
var cors = function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
}
//cors = function(req, res, next){ next() }
app.all('*', cors);
app.use(vhost('test1.me', rapp));
app.use(vhost('www.test1.me', rapp));
app.use(vhost('static.test1.me', rapp));
app.use(vhost('test2.me', rapp));
app.use(vhost('www.test2.me', rapp));

var port = process.env.PORT || 9091;
app.listen(port);
console.log('Magic happens on port ' + port);
