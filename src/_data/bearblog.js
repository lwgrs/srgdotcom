const Parser = require('rss-parser');
let parser = new Parser(); 

module.exports = async function() {
  let feed = await parser.parseURL('https://lwgrs.bearblog.dev/feed/'); 
  return feed.items;
};