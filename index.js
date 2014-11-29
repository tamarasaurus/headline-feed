// Run server with one route to output data after scraping, simply.js app uses that endpoint to spit it out

var express = require('express'),
app = express(),
request = require('request'),
c = require('cheerio'),
serveStatic = require('serve-static'),
bodyParser = require('body-parser'),
Parser = require('./lib/parser'),
parser = new Parser(),
Get = require('./lib/getter'),
get = new Get();

app.use(bodyParser.json());

app.get('/sources', function (req, res) {

});

app.get('/headlines', function (req, res) {
	console.log(req.query.id, get.source(req.query.id));
	if(req.query.id && get.sourceExists(req.query.id)) {
		get.headlines(req.query.id, res);
	} else {
		res.send('Please choose a valid source for ?id=')
	}
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening on http://%s:%s', host, port)
});