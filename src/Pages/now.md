---
title: Now
eleventyNavigation: 
    key: Now
    order: 5
---

<p class="now-page">Page last updated: <strong style="color:#d90202;"> January 2024</strong>.</p>


*This is a snapshot of what I'm doing now. Read more about "Now" pages at [https://nownownow.com/About/](https://nownownow.com/About/). In an effort to maintain quick load times, this page is being updated manually.*

### Work 
I'm currently the Regional Traffic Manager for Rogers Radio (a division of <a href="https://www.rogerssportsandmedia.com" target="_blank">Rogers Sports & Media</a>) in Ottawa, Ontario.[^1] I've been there since May 2006. 

### Current Projects  

* This website 
* Several [podcasts](/podcasts/)
* [An Almost Anonymous Blog](https://lwgrs.bearblog.dev) 

### Latest Reads 

You can check out my full [Goodreads profile](https://www.goodreads.com/user/show/2474979-stephen-gower), but here's a snapshot of a few books I've read lately. 

<!-- Book covers -->

<ul class="booknav">
{%- for book in books %}
 <li class="book-item"><a href="{{ book.url }}"><img class="book" src="{{ book.cover }}" alt="{{ book.title }} cover" title="{{ book.title}} by {{ book.author }}"></a></li> 
{% endfor%}
</ul>

<ul>
<!-- Book list -->
{%- for book in books %} 
<li><a href="{{ book.url }}">{{ book.title }}</a> by {{ book.author }} </li>
{% endfor%}
</ul> 

<!--
[Spider-Man: Life Story](https://www.goodreads.com/book/show/44286872-spider-man) by Chip Zdarsky and Mark Bagley (Illustrator)
[Moon of the Crusted Snow](https://www.goodreads.com/book/show/39082248-moon-of-the-crusted-snow) by Waubgeshig Rice 
[The Caves of Steel](https://www.goodreads.com/book/show/11097712-the-caves-of-steel) by Isaac Asimov 
[Red Team Blues](https://www.goodreads.com/book/show/60784891-red-team-blues) by Cory Doctorow 
-->

### Other Interests and Hobbies 
* Podcasts
* Music 
* Photography 

### Music

[![2023 Spotify Wrapped](/images/2023wrapped_summary-share.jpeg "My 2023 Spotify Wrapped Graphic")](https://open.spotify.com/playlist/37i9dQZF1DX18jTM2l2fJY?si=e6158d98d7074ef9&nd=1&dlsi=2e7f9a553c584ab4)

[^1]: Not road traffic - it's this kind: [https://en.m.wikipedia.org/wiki/Traffic_(broadcasting)](https://en.m.wikipedia.org/wiki/Traffic_(broadcasting))
