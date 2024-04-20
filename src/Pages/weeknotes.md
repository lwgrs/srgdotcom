---
title: Week Notes
eleventyExcludeFromCollections: true
eleventyNavigation:
   key: Week Notes
   order: 5
---
<h2>Week Notes</h2>
A collection of weekly notes summarizing what I've been up to during any given week.
<ul>
{% for post in collections.post reversed %}
<li><a href="{{post.url}}">{{ post.data.title }}</a> - {{ post.date | readableDate }}</li>
{% endfor %}
</ul>
<a href="/feed/feed.xml">Subscribe to the RSS Feed</a>