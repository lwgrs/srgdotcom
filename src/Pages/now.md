---
title: What Am I Up To Now?
eleventyNavigation: 
    key: What Am I Up To Now?
    order: 5
---

<p class="now-page">Page last updated: <strong style="color:#d90202;"> April 2024</strong>.</p>


*This is a snapshot of what I'm doing now. Read more about "Now" pages at [https://nownownow.com/about](https://nownownow.com/about). In an effort to maintain quick load times, this page is being updated manually.*

### Work 
I'm currently the Regional Traffic Manager for Rogers Radio (a division of <a href="https://www.rogerssportsandmedia.com" target="_blank">Rogers Sports & Media</a>) in Ottawa, Ontario.[^1] I've been there since May 2006. 

### Current Projects  

* This website 
* Several [podcasts](/podcasts/)
* [An Almost Anonymous Blog](https://lwgrs.bearblog.dev) 

<h3 id="reading">Reading</h3> 

You can check out my full [Storygraph profile](https://app.thestorygraph.com/profile/srgower), but here's a snapshot of a few books I've read lately. 

##### Currently Reading 

<!-- Currently Reading -->

<div class="scroll-container">
{%- for book in currentreads %}
  <a href="{{ book.url }}"><img class="book" src="{{ book.cover }}" alt="{{ book.title }} cover" title="{{ book.title}} by {{ book.author }}"></a>{% endfor%}
</div>

<ul>
{%- for book in currentreads %}
  <li><a href="{{ book.url }}">{{ book.title }}</a> by {{ book.author }}</li>
  {% endfor%}
</ul>

##### Recently Finished Books 

<!-- Book covers -->

<div class="scroll-container">
{%- for book in books %}
   <a href="{{ book.url }}"><img class="book" src="{{ book.cover }}" alt="{{ book.title }} cover" title="{{ book.title}} by {{ book.author }}"></a>{% endfor%}
</div>

<!-- Book list -->
<ul>
{%- for book in books %} 
<li><a href="{{ book.url }}">{{ book.title }}</a> by {{ book.author }} {{ book.stars }}</li>
{% endfor%}
</ul> 

<h3 id="watching">Watching</h3> 

##### Movies 
I keep track of movies watched on [Letterboxd](https://letterboxd.com/stephen_g/) - feel free to check me out there. Here are some recent films I've seen: 

<ul>
{% for movie in movies %} 
<li>{{ movie.title }} - {{ movie.rating }} <sub><em><a href="{{ movie.review }}">Review</a></em></li></sub>
{% endfor%}
</ul>

##### TV Shows 

I switch around TV shows a lot more often than movies; but here's what I have in rotation at the moment: 
* The Crown (Season 3)
* NCIS 
* Law & Order Organized Crime 
* Law & Order Toronto Criminal Intent 
* Chicago Med
* Star Trek Discovery
* Flight of the Conchords *(Re-watch)*
* X-Men (1992-1997) 

### Other Interests and Hobbies 
* Podcasts - [Download my current OPML list](/files/PocketCasts.opml)
* Music 
* Photography 
* Movies & TV

### Music

[![2023 Spotify Wrapped](/images/2023wrapped_summary-share.jpeg "My 2023 Spotify Wrapped Graphic")](https://open.spotify.com/playlist/37i9dQZF1DX18jTM2l2fJY?si=e6158d98d7074ef9&nd=1&dlsi=2e7f9a553c584ab4)

[^1]: Not road traffic - it's this kind: [https://en.m.wikipedia.org/wiki/Traffic_(broadcasting)](https://en.m.wikipedia.org/wiki/Traffic_(broadcasting))
