const _dirname = "test_express";
var express = require('express');
var path = require('path'); 
var app = express();
var router = express.Router();

app.set('views', path.join(_dirname, 'views'));  
app.set('view engine', 'jade');

app.use(router);  
app.use(express.static(path.join(_dirname, 'public')));

router.get('/', function (req, res) {
	res.render('index',
	  {
			title: "Sparta"
		}
	);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});