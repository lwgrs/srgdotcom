---
title: Week Notes
eleventyNavigation:
   key: Week Notes
   order: 5
---
<h2>Week Notes</h2>
A collection of weekly notes summarizing what I've been up to during any given week. Each note includes things I've created during the previous week.
<p><sub><strong><a href="/feed/feed.xml">Subscribe to the RSS Feed</a></strong></sub></p>


<ul>
{% assign latest_posts = collections.post | reverse %} 
{% for post in latest_posts limit:5 %}
<li><a href="{{post.url}}">{{ post.data.title }}</a> - {{ post.date | readableDate }}</li>
{% endfor %}
</ul>


<p>See <a href="/archive/">the archive</a> for more notes.</p>
