---
layout: default
title: Site Map
permalink: /sitemap/
---

<section class="max-w-3xl mx-auto p-4">
  <h1 class="text-2xl font-bold mb-6">Site Map</h1>
  <div class="flex flex-col gap-4 space-y-2">
    {% assign pages_sorted = site.pages | sort: "url" %}
    <div class="flex gap-4">
          <a href="{{ site.url }}" class="flex-1 no-underline hover:underline">
            Home
          </a>
        </div>
    {% for page in pages_sorted %}
      {% unless page.title == nil or page.title == "Home" or page.sitemap == false or page.url contains '404' %}
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
