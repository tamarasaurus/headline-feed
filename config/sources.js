// write docs for source object - make it extendable
module.exports = [
	{
		id: 'abcau',
		name: 'ABC News',
		url: 'http://www.abc.net.au/news/feed/45910/rss.xml',
		// tags can be css selector or xml tag names
		// need heirarchial structure here
		// tags: ['rss.channel.item'],
		// type xml or scrape
		type: 'xml'
	}
]