module.exports = [
	{
		id: 'abcau',
		name: 'ABC News',
		url: 'http://www.abc.net.au/news/feed/45910/rss.xml',
		query: {
			obj: 'rss.channel.item',
			// Add another object which specifies the properties that need to be included
			title: 'title'
		},
		type: 'xml'
		// Add limit property
	},
	{
		id: 'smh',
		name: 'Sydney Morning Herald',
		url: 'http://feeds.smh.com.au/rssheadlines/top.xml',
		query: {
			obj: 'rss.channel.item',
			title: 'title'
		}
	},
	{
		id: 'guardianau',
		name: 'The Guardian Autralia',
		url: 'http://www.theguardian.com/australia-news/rss',
		query: {
			obj: 'rss.channel.item',
			title: 'title'
		}
	},
	{
		id: 'theage',
		name: 'The Age',
		url: 'http://feeds.theage.com.au/rssheadlines/top.xml',
		query: {
			obj: 'rss.channel.item',
			title: 'title'
		}
	},
	{
		id: 'theaus',
		name: 'The Australian',
		url: 'http://feeds.news.com.au/public/rss/2.0/au_national_affairs_news_13_3296.xml',
		query: {
			obj: 'rss.channel.item',
			title: 'title'
		}
	},
	{
		id: 'afr',
		name: 'Australian Financial Review',
		url: 'http://www.afr.com/rss/latest_news',
		query: {
			obj: 'rss.channel.item',
			title: 'title'
		}
	}
]