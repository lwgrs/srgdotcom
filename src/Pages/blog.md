---
title: Blog
eleventyNavigation: 
    key: Blog
    order: 4
---
## Blog Entries
These are the 10 most recent entries from my blog, [An Almost Anonymous Blog](https://lwgrs.bearblog.dev). Subscribe to the [RSS feed](https://lwgrs.bearblog.dev/feed/) to get the posts directly.

<ul>
{% for article in bearblog %}
<li><a href="{{ article.link }}">{{ article.title }}</a> <em style="font-size:0.75em;font-weight:bold;">(published {{ article.niceDate }})</em></li>
{% endfor %}
</ul>