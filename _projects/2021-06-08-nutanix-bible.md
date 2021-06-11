---
title: Nutanix Bible
subtitle: Re-design of the Nutanix Bible
date: 2021-06-08 00:00:00
description: With thousands of views a month, The Nutanix Bible is the most popular location to get technically deep information on how Nutanix works. It had it's roots inside of Steve Poitrais's personal blog, but has since grown to a much larger asset that is essential to communicating with Nutanix's customers.
featured_image: nutanixbible.png
accent_color: '#E38200'
gallery_images:
  - nutanixbible.png
  - nutanixbible-screenshot-1.png
  - nutanixbible-screenshot-0.png
---

The [Nutanix Bible](https://nutanixbible.com) has been around for around 10 years now, in various forms. First it existed as a blog then it was turned into an unofficial guide to Nutanix. Eventually the company blessed it and it began to take on a life of it's own. 

Over the years, the single page design became unweildy and hard to manage. The hand written, _artisinal_, _raw_, `html` code could only truly be managed by one person. When that person left to Nutanix we were quick to realize that we needed to own it within the Technical Marketing organization, but also that more than one person needed to be able to make updates to the site.

After a look at the analytics we realized that the single page design was a major drag on user's attention spans. We would lose a large amount of our viewers before they got past the introductory content. Time for a re-design.

**Obviously,** we could have thrown it into some sort of CMS, but a majority of the team would prefer to write code than deal with an interface. The content was largely static, so building the site with a static site generator made the most sense.

I immediately mentioned Jekyll, this site is built using it and I've designed a couple dozen other sites with Jekyll over the years. Other folks recommended Hugo. None of us knew Go and didn't want to assume we could build plugins or modify the code easily if needed. I am comfortable enough with Ruby, Liquid, Markdown, and the various other tools necessary to build a Jekyll site - so we decided to put together a rough POC with Jekyll.

The site came together remarkably quick. From POC to production in ~2 months, with just 3 people working on this in our spare time.

> I can't thank **[Laura Jordana](https://twitter.com/laurajordana22)** and **[Chris Rasmussen](https://twitter.com/ChrisRNutanix)** enough for their awesome work on this project!

#### There be demons

The Nutanix Bible didn't use a traditional site layout to begin with, the content being arranged in "books" similar to the Christian Bible, so we had to manually separate content into individual pages then decide how to do the navigation. Jekyll is largely targeted at blogs, so in order for us to build a navigation menu, we had to first declare all of the pages and their parents. In `_config.yml` we declared our pages and their parents, which ended up looking something like this:

_I've slimmed down the full list, but this gives you a pretty good idea of what the page order declaration looks like._

```yaml
data: 
  nav-parents: 
    - title: "Introduction"
      render: no
      children:
        - title: "A Brief Lesson in History"
          url: 0-a-brief-lesson-in-history.html
          desc: "A brief look at the history of infrastructure and what has led us to where we are today."
          render: yes
    - title: "Part 1: Core"
      children:
        - title: "Book of Basics"
          url: 2-book-of-basics.html
          desc: "Basics of Webscale principles and core architectural concepts."
          render: yes
          children:
            - title: "Strategy and Vision"
              url: 2a-book-of-basics-strategy-and-vision.html
              render: yes
            - title: "Products and Platforms"
              url: 2b-book-of-basics-products-and-platforms.html
              render: yes
            - title: "Hyperconverged Platform"
              url: 2c-book-of-basics-hyperconverged-platform.html
              render: yes
        - title: "Book of Prism"
          url: 3-book-of-prism.html
          desc: "The Nutanix control plane, a one-click management and interface for datacenter operations."
          render: yes
          children:
            - title: "Architecture"
              url: 3a-book-of-prism-architecture.html
              render: yes
            - title: "APIs and Interfaces"
              url: 3d-book-of-prism-apis-and-interfaces.html
              render: yes
        - title: "Book of AOS"
          url: 4-book-of-aos.html
          desc: "The storage, compute, and virtualization platform that provides the core functionality leveraged by workloads and services."
          render: yes
          children:
            - title: "Architecture"
              url: 4a-book-of-aos-architecture.html
              render: yes
            - title: "Backup and Disaster Recovery"
              url: 4e-book-of-aos-backup-dr.html
              render: yes
            - title: "Administration"
              url: 4f-book-of-aos-administration.html
              render: yes
```

Now we needed to loop through the various top level sections, parents (books), and their children (pages) using Liquid:

{% raw %}
```liquid
<div id="nav-items">    
  {% for parent in site.data.nav-parents %}
	{% if parent.render != false %}
	<h2 class="nav-parent">{{ parent.title }}</h2>
	<ul>
      {% for child in parent.children %}
	  {% if child.render != false %}
		<li><a href="{{ site.baseurl }}{{ child.url }}">{{ child.title }}</a></li>
		{% if child.children %}
		  {% for grandchild in child.children %}
			{% if grandchild.render != false %}
				<li class="grandchild"><a href="{{ site.baseurl }}{{ grandchild.url }}">{{ grandchild.title }}</a></li>
			{% endif %}
		  {% endfor %}
		{% endif %}
	  {% endif %}
      {% endfor %}
	</ul>
	{% endif %}
  {% endfor %}
</div>
```
{% endraw %}

This produces a nice clean menu:

![Nutanix Bible Navigation Menu](/images/projects/nutanixbible-menu-wide.png)

---

Now that we had our menu built, we realized that the users could no longer use `Cmd/Ctrl+f` to find what they were looking for on the site, since it now spread across multiple pages. So Laura found [Simple Jekyll Search](https://github.com/christian-fei/Simple-Jekyll-Search) which renders a file `search.json` that would have content that client side javascript would load and search through. With a few modifications we were able to search all of our content and then render it in the menu. 

![Nutanix Bible Navi Search](/images/projects/nutanixbible-menu-search-wide.png)

Chris managed to get the search results to push the navigation menu down. In the future, we will be adding the ability to display the context of the searh results in the search results location. 

---

>"Wait, how do we manage to navigate from one page to the next?"

We found that opening the navigation menu to jump from page to page became very inconvenient, so I took on the task of adding dynamic navigation links at the bottom of each page. Normally for a blog this would be easily taken care of with the liquid tag `.next`, but in our case, we needed to parse a funky navigation structure. 

My commit messages had many swear words and pleadings with every deity I could come up with that it would work, because parsing multiple nested loops hurts my head. Eventually I settled on a messy but functional solution. 

Here's the opening comment I put above this code for anyone who dared modify it in the future:

> "Let's talk loops. I'm so sorry if you're having to modify this down the road. I've gone through great pains to document it, but damnit, nested loops just hurt my brain. The loops are all declared inside of _config.yml. I've built logic to handle traversing from the grandchild of one loop to the root of a child. I think. I'm not really sure anymore."

{% raw %}
```liquid  
<div class="previous-next-page-links">
  {% for parent in site.data.nav-parents %}
  {% comment %} `parents` are top level separators: "Introduction", "Part 1: Core", etc {% endcomment %}
      
    {% if parent.render != false %}
    {% comment %} Don't render this entire section if `render: no` {% endcomment %}

      {% for child in parent.children %}
      {% comment %} In this case `child` would be the Books or Sections underneath of a parent section "Part 1: Core - Book of Basics", "Part 1: Core - Book of Prism", etc. {% endcomment %}
          
        {% comment %} Now we're going to assign some variables that we'll use during the loop parsing {% endcomment %}
        {% assign child_loop_pos = forloop.index %}
        {% if forloop.last == false %}
          {% assign child_loop_next = child_loop_pos %}
        {% else %}
          {% assign child_loop_next = "last" %}
        {% endif %}
        {% assign child_loop_prev = child_loop_pos | minus: 2 %}
        {% assign child_loop_last = forloop.last %}

        {% if child.render != false %}
        {% comment %} Don't render this "Book" or "Section" if `render: no` {% endcomment %}

        {% if child.children %}
        {% comment %} if this Section has children (known as grandchildren): "Book of Prism: Architecture", "Book of Prism: Navigation", etc. {% endcomment %}
            
          {% for grandchild in child.children %}

            {% if grandchild.render != false %}
            {% comment %} Don't render this page if `render: no` {% endcomment %} 

              {% assign page_url = page.url | remove_first: "/" %} {% comment %} Make URL format match from _config.yml and page.url {% endcomment %}

              {% if grandchild.url == page_url %}
              {% assign loop_pos = forloop.index %}

                {% if forloop.first == false %}
                {% comment %} If we're not on the first grandchild page, show the previous navigation link {% endcomment %}

                {% assign loop_prev = loop_pos | minus: 2 %} 
                  <div>
                    <a href="{{ child.children[loop_prev].url }}" class="arrow arrow__left">{{ child.children[loop_prev].title }}</a>
                  </div>
                        
                {% comment %} Go to index page of book since we're on the first sub page {% endcomment %}
                {% else %}
                  <div>
                    <a href="{{ child.url }}" class="arrow arrow__left">{{ child.title }}</a>
                  </div>
                {% endif %}

                {% if forloop.last == false %}
                {% comment %} If we're not on the last grandchild page, show the next navigation link {% endcomment %}

                {% assign loop_next = loop_pos %}
                  <div class="right">
                    <a href="{{ child.children[loop_next].url }}" class="arrow arrow__right">{{ child.children[loop_next].title }}</a>
                  </div>

                {% else %}
                {% comment %} If we're on the last grandchild page, show the next section navigation link {% endcomment %}

                  <div class="right">
                  {% if child_loop_next == "last" %}
                  {% comment %} If we're on the last Book or Section "child", show link for Nutanix Test Drive {% endcomment %}

                    <a href="https://www.nutanix.com/one-platform?utm_source=nutanixbible&utm_medium=referral" class="arrow arrow__right">Try It Out on Test Drive</a>
                  {% else %}
                  {% comment %} We're not on the last Book or Section "child", so show a link to the next Book or Section {% endcomment %}

                    <a href="{{ parent.children[child_loop_next].url }}" class="arrow arrow__right">{{ parent.children[child_loop_next].title }}</a>
                  {% endif %}
                  </div>
                {% endif %}

              {% endif %}

            {% endif %}

            {% endfor %}

          {% endif %}
          
        {% endif %}

      {% endfor %}
    {% endif %}
      
  {% endfor %}

</div>

```
{% endraw %}

> "End dynamic navigation links. That wasn't so bad was it? /s"

---

In the end, I can say I had a blast working on this project, especially since I used the Nutanix Bible when I was an early Nutanix customer as well as when I was in sales. My CSS skills have drastically improved and I definitely learned a ton about Liquid Syntax and even more about it's limitations. 

I'll be curious to look back on the analytics following pushing this project to production. 