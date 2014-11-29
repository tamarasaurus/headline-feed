var sources = require('../config/sources');
var _ = require('underscore');
var request = require('request'),
Parser = require('../lib/parser'),
parser = new Parser();

/**
 * @module getter
 * @author  Tamara Chahine
 * The module that gets and returns news headlines
 * @return {Object}
 */
module.exports = (function(){
	// Add defaults such as headline limit or other variables common to all news sources
	var get = function(){}

	get.prototype = {
		/**
		 * data
		 * @description Request an xml feed through a news source URL
		 * @param  {Object}   source
		 * @param  {Function} cb
		 * @return {}
		 */
		data: function(source, cb) {
			request(source.url, function(err, res, body){
				cb(parser.getJSON(body, source.query));
			}).on('error', function(){

			});
		},

		/**
		 * source
		 * @description Return a source from the list of sources
		 * @param  {String} id
		 * @return {Object}
		 */
		source: function(id) {
			return _.findWhere(sources, {id: id});
		},

		/**
		 * sourceExists
		 * @description Return whether a source exists in sources.js
		 * @param  {String} id
		 * @return {Boolean} Whether a source exists
		 */
		sourceExists: function(id){
			return typeof _.findWhere(sources, {id: id}).length === 'undefined'; 
		},

		/**
		 * headlines
		 * @description Get and return news headlines and source data specified in sources.js
		 * @param  {String} id query parameter
		 * @param  {Object} res response object
		 * @return {}
		 */
		headlines: function(id, res) {
			var source = this.source(id);
			// Change callbacks to eventEmitter
			var data = this.data(source, function(parsed){
				var print = _.extend({items: parsed}, source)
				res.json(print);
			});	
		}
	};	
	return get;

}());