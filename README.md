# Derrick — Minimal Theme for Jekyll.

Derrick is a clean minimal and fast theme for a personal blog.

* * *

Table of Contents
-----------------
*   [Deployment](#deployment)
*   [Acknowledgement](#ack)
*   [Remarks](#remarks)
*   [Fetch books from Notion page](#books)

* * *

### Deployment

To run the theme locally, navigate to the theme directory and run `bundle install` to install the dependencies, then run `jekyll serve` or `bundle exec jekyll serve` to start the Jekyll server.

I would recommend checking the [Deployment Methods](https://jekyllrb.com/docs/deployment-methods/) page on Jekyll website.

* * *

### Acknowledgement

This site built based on [Derrick — Minimal Theme for Jekyll](https://github.com/artemsheludko/derrick).

* * *

### Remarks

GitHub Pages only supports specific versions of Jekyll and its plugins via the github-pages gem.
If you want to publish site with **Github Page**, Let github-pages manage the jekyll version and remove the explicit jekyll version

```bash
# Gemfile
gem "github-pages"
# then group :jekyll_plugins do
```

* * *

### Books

Fetch books from Notion page

```bash
node scripts/fetchBooks.js
```