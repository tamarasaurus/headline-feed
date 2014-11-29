// Cleanup and json parsing for headlines into arrays
var xml = require('xml2json');

module.exports = (function(){
	var parser = function(){}

	parser.prototype = {
		getJSON: function (string) {
			return xml.toJson(string, {
				object: true,
				sanitize: true
			});
		
		}
	}

	return parser;

}());