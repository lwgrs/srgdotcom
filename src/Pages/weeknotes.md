---
title: Week Notes
eleventyNavigation:
   key: Week Notes
   order: 6
---

## Week Notes

*A collection of weekly notes summarizing what I've been up to during any given week. Each note includes things I've created during the previous week.*

<!-- <p><sub><strong><a href="https://subscribeopenly.net/subscribe/?url=https://srgower.com/feed/feed.xml">Subscribe to the RSS Feed</a></strong></sub></p> -->

**I've moved my week notes over to my "main" blog** - you can view them with the [week notes tag](https://lwgrs.bearblog.dev/blog/?q=weeknotes).


<ul>
{% assign latest_posts = collections.post | reverse %} 
{% for post in latest_posts limit:5 %}
<li><a href="{{post.url}}">{{ post.data.title }}</a> - {{ post.date | readableDate }}</li>
{% endfor %}
</ul>


<p>See <a href="/archive/">the archive</a> for more notes.</p>
