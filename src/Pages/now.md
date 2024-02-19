---
title: Now
eleventyNavigation: 
    key: Now
    order: 5
---

<p class="now-page">Page last updated: <strong style="color:#d90202;"> February 2024</strong>.</p>


*This is a snapshot of what I'm doing now. Read more about "Now" pages at [https://nownownow.com/About/](https://nownownow.com/About/). In an effort to maintain quick load times, this page is being updated manually.*

### Work 
I'm currently the Regional Traffic Manager for Rogers Radio (a division of <a href="https://www.rogerssportsandmedia.com" target="_blank">Rogers Sports & Media</a>) in Ottawa, Ontario.[^1] I've been there since May 2006. 

### Current Projects  

* This website 
* Several [podcasts](/podcasts/)
* [An Almost Anonymous Blog](https://lwgrs.bearblog.dev) 

### Reading 

You can check out my full [Storygraph profile](https://app.thestorygraph.com/profile/srgower), but here's a snapshot of a few books I've read lately. 

##### Currently Reading 

<!-- Currently Reading -->
<ul class="booknav">

 <li class="book-item"><a href="https://www.harpercollins.ca/9781443457859/outsider/"><img class="book" src="https://cdn.thestorygraph.com/e0hs1n70e1ekkfrecmrctc729cdn" alt="Outsider: An Old Man, a Mountain and the Search for a Hidden Past cover" title="Outsider: An Old Man, a Mountain and the Search for a Hidden Past by Brett Popplewell"></a></li>
 <li class="book-item"><a href="https://www.simonandschuster.com/books/Making-It-So/Patrick-Stewart/9781982167738"><img class="book" src="https://cdn.thestorygraph.com/jx2kcbwulth959nnz30rxrvwst0a" alt="Making It So cover" title="Making It So by Patrick Stewart"></a></li> 

</ul>

<ul>

<li><a href="https://www.harpercollins.ca/9781443457859/outsider/">Outsider: An Old Man, a Mountain and the Search for a Hidden Past</a> by Brett Popplewell</li>
<li><a href="https://www.simonandschuster.com/books/Making-It-So/Patrick-Stewart/9781982167738">Making It So</a> by Patrick Stewart</li>

</ul> 

##### Recently Finished Books 

<!-- Book covers -->
<ul class="booknav">
{%- for book in books %}
 <li class="book-item"><a href="{{ book.url }}"><img class="book" src="{{ book.cover }}" alt="{{ book.title }} cover" title="{{ book.title}} by {{ book.author }}"></a></li> 
{% endfor%}
</ul>

<!-- Book list -->
<ul>
{%- for book in books %} 
<li><a href="{{ book.url }}">{{ book.title }}</a> by {{ book.author }} {{ book.stars }}</li>
{% endfor%}
</ul> 


### Other Interests and Hobbies 
* Podcasts
* Music 
* Photography 

### Music

[![2023 Spotify Wrapped](/images/2023wrapped_summary-share.jpeg "My 2023 Spotify Wrapped Graphic")](https://open.spotify.com/playlist/37i9dQZF1DX18jTM2l2fJY?si=e6158d98d7074ef9&nd=1&dlsi=2e7f9a553c584ab4)

[^1]: Not road traffic - it's this kind: [https://en.m.wikipedia.org/wiki/Traffic_(broadcasting)](https://en.m.wikipedia.org/wiki/Traffic_(broadcasting))
