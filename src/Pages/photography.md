---
title: Photography
eleventyNavigation:
  key: Photography 
  order: 5
---

I enjoy photography as a hobby, and I'm practicing to get better at it. With that in mind, I launched a new photo blog:

[Photos by Stephen Gower](https://photos.srgower.com) 

You can also [subscribe to the RSS feed](https://photos.srgower.com/feed.xml).

Recent posts:

<div class="photosbysg">
<ul>
{% for article in photosrss %}
<li><a href="{{ article.link }}">{{ article.title }}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em style="font-size:0.75em;font-weight:bold;">(published {{ article.niceDate }})</em></li>
{% endfor %}
</ul>
</li>