let baseScore = [
	['level1', [
		['A domain that you own', 0.2],
		['Have rel.me links to your other profiles' , 0.2],
		['Posts with permalinks' , 0.2],
		['Posts with h-entry markup' , 0.2],
		['Searchability, robots can index, search indexes can crawl the site' , 0.2]
	] ],
	['level2',[
		['h-card contact info and icon on homepage' , 0.1],
		['multiple post types', 0.2],
		['POSSE', 0.2],
		['Posting UI', 0.1],
		['Next/Previus Navigation between posts', 0.1],
		['Search box on your site', 0.1],
		['Embeds/aggregation' , 0.1],
		['Web Actions' , 0.1]
	]],
	['level3' ,[
		['Send Webmentions' , 0.3],
		['PubSubHubbub support' , 0.3],
		['Display Search Results on your site' , 0.3],
		['Display Reply Context' , 0.1]
	]],
	['level4', [
		['Automatic Webmentions' , 0.2],
		['Handle Webmentions', 0.2],
		['Display full content rich reply-contexts', 0.1],
		['Search on your own search backend' , 0.1],
		['Multiple Reply Types' , 0.2],
		['Display Backfeed of Comments' , 0.2]
	]]
]

export default baseScore;
