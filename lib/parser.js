// Cleanup and json parsing for headlines into arrays
var xml = require('xml2json');
var find = require('json-query');
var _ = require('underscore');

module.exports = (function(){
	var parser = function(){}

	parser.prototype = {
		getJSON: function (string, query) {
			var data = xml.toJson(string, {
				object: true,
				trim: true,
				sanitize: true
			});
			var found = find(query.obj, {data: data}).value;
			return _.pluck(found, query.title);
		}
	}

	return parser;

}());