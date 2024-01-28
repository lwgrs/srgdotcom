---
title: My Writing
eleventyNavigation:
  key: My Writing
  order: 2
---
### Here's some places where I write: 

ʕ•ᴥ•ʔ [An Almost Anonymous Blog](https://lwgrs.bearblog.dev): A collection of personal blog entries ranging from short to long and covering various topics. There's no proper organizational flow to this blog, it's just whatever comes to mind. You can view the [most recent posts](/blog/) or start with theses posts:  

<ul>
{% for writing in bear-writing %} 
 <li><a href="{{ writing.url }}">{{ writing.title }}</a></li>
{% endfor%}
</ul>

<img class="icon" src="/icons/medium.svg" alt="Medium Icon" /> [Medium](https://medium.com/@stephen_g): This is where I write my longer essays, usually personal in nature (there are several about living with epilepsy), but occasionally I talk about societal things. I recommend these articles in particular:

<ul>
{% for writing in medium-writing %}
 <li><a href="{{ writing.url }}">{{ writing.title }}</a></li>
{% endfor%}
</ul>

<img class ="icon" src="/icons/lwgrs-gaming.svg" alt="The letter L" /> [Gaming with lwgrs](https://lwgrs.neocities.org): I started this blog to talk about video games - mostly "retro" games, but this ranges from NES to PS3, to retro-styled mobile games.


