var sources = require('../config/sources');
var _ = require('underscore');
var request = require('request'),
Parser = require('../lib/parser'),
parser = new Parser();


module.exports = (function(){
	var get = function(){}

	get.prototype = {
		data: function(source, cb) {
			console.log('Get data for source');
			request(source.url, function(err, res, body){
				cb(parser.getJSON(body));
			});
		},

		source: function(id) {
			return _.findWhere(sources, {id: id});
		},

		sourceExists: function(id){
			return typeof _.findWhere(sources, {id: id}).length === 'undefined'; 
		},

		headlines: function(id, res) {
			var source = this.source(id);
			// Change callbacks to eventEmitter
			var data = this.data(source, function(parsed){
				res.json(parsed);
				console.log('After parsing', parsed);
			});

			// if(!data) {
			// 	res.json(source);
			// }
			
		}
	};	

	return get;

}());