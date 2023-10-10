---
layout: library
title: 🗄️Library
permalink: /library/
image: 
order: 3
---

Share my moments

<div class="container-full">
    {% if site.library.size == 0 %}
		<p class="text-center">Nothing published yet!</p>
	  {% else %}
    {% for post in site.library %}
    <div class="article" data-aos="fade-up" data-aos-easing="ease-out-quad" data-aos-duration="800">
        {% if post.image %}
        <div class="article__image-box">
            <a href="{{post.url | prepend: site.baseurl}}" class="article__image"
                style="background-image: url({{site.baseurl}}{{post.image}})"></a>
        </div>
        {% else %}
        <div class="article__image-box">
            <a href="{{post.url | prepend: site.baseurl}}" class="article__image"
                style="background-image: url({{site.baseurl}}{{post.image}})"></a>
        </div>
        {% endif %}
    </div>
    {% endfor %}
    {% endif %}
</div>

