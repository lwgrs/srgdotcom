---
title: Blog
eleventyNavigation: 
    key: Blog
    order: 4
---
## Blog Entries
These are the 10 most recent entries from my blog, [An Almost Anonymous Blog](https://lwgrs.bearblog.dev). Subscribe to the [RSS feed](https://lwgrs.bearblog.dev/feed/) to get the posts directly.

<!-- *Latest blog posts temporarily disabled due to site publishing error* -->

<ul>
{% for article in bearblog %}
<li><a href="{{ article.link }}">{{ article.title }}</a> <i style="font-size:smaller; color:#A42A04;">(published {{ article.niceDate }})</i></li>
{% endfor %}
</ul>