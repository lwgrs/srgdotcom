---
title: Week Notes Archive
layout: "post"
---
<h2>Week Notes Archive</h2>
<p>Full archive of my weekly notes.</p>

[↩ Back to most recent notes](/weeknotes/)

<p><sub><strong><a href="/feed/feed.xml">Subscribe to the RSS Feed</a></strong></sub></p>

<ul>
{% for post in collections.post reversed %}
<li><a href="{{post.url}}">{{ post.data.title }}</a> - {{ post.date | readableDate }}</li>
{% endfor %}
</ul>