---
layout: default
title: Sitemap
permalink: /sitemap/
isMainPage: true
order: 6
---

<section class="container max-w-full p-4 text-center">
    <h1>{{ page.title | escape }}</h1>
</section>

<section class="max-w-2xl mx-auto p-4">
  <div class="flex flex-col gap-4 space-y-2">
    {% assign pages_sorted = site.pages | sort: "url" %}
    <div class="flex gap-4">
          <a href="{{ site.url }}" class="flex-1 no-underline hover:underline">
            Home
          </a>
        </div>
    {% for page in pages_sorted %}
      {% unless page.title == nil or page.title == "Home" or page.title == "Sitemap" or page.sitemap == false or page.url contains '404' %}
        <div class="flex gap-4 ml-4">
          <a href="{{ page.url | relative_url }}" class="flex-1 no-underline hover:underline">
            {{ page.title }}
          </a>
          <span class="w-32 flex-none text-sm">{{ page.url }}</span>
        </div>
      {% endunless %}
    {% endfor %}
  </div>
</section>
