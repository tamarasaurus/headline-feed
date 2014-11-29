headline-feed
=============

`headline-feed` is a node module that outputs news headlines in json from a list of sources.

To start the app, run `node index` and add an id parameter to the URL e.g. [http://localhost:3000/headlines?id=abcau](http://localhost:3000/headlines?id=abcau)

A source (in sources.js) has this structure - 


	{
		id: 'string',
		name: 'string',
		url: 'string',
		query: {
			obj: 'json-query string',
			title: 'property name'
		},
		type: 'xml || scraped'
	}
	

* *id* - An arbitrary string to reference the source in the URL
* *name* - The name of the source
* *url* - This can be an xml/rss feed or a web page
* query
	* *obj* - This is a [json-query](https://www.npmjs.org/package/json-query) string that corresponds to the array of objects for news headlines in the xml feed
	* *title* - The property name inside the object that contains the headline title
* *type* - xml or scraped. If xml is specified the source URl is going to be parsed as xml and the query object should be in json-query format. If the type is set to scraped, the obj and title properties need to correspond to CSS selectors on the page that can be scraped

### To-do

This is a work in progress, the aim is to have a standard way of outputting news headlines from multiple sources. In the future there will be ways to group and output headlines from multiple sources, and to be able to choose what other properties of a headline might also be included in the json - e.g. URL or description. 