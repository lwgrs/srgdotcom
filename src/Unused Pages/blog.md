---
title: Blog
---
## Blog Entries
These are the most recent entries from my blog, [An Almost Anonymous Blog](https://lwgrs.bearblog.dev)[^1]. This page refreshes about once a week, so go over to the original blog for the most up-to-date entries or better yet, subscribe to the [RSS feed](https://lwgrs.bearblog.dev/feed/)!

<ul>
{% for article in bearblog %}
<li><a href="{{ article.link }}">{{ article.title }}</a></li>
{% endfor %}
</ul>

[^1]: I want to implement the ``tab:`` function to open in new window.